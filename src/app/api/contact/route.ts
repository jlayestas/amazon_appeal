import { Resend } from "resend";

const CONTACT_EMAIL = process.env.CONTACT_EMAIL;
const FROM_EMAIL = process.env.FROM_EMAIL;
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const SUBJECT = "New Case Review Request - JRJ Reinstaters";

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const rateLimitStore = new Map<string, RateLimitEntry>();

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  issueType?: string;
  summary?: string;
  honey?: string;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function textBody(fields: {
  name: string;
  email: string;
  phone: string;
  issueType: string;
  summary: string;
}) {
  return [
    "New case review request",
    "",
    `Name: ${fields.name}`,
    `Email: ${fields.email}`,
    `Phone: ${fields.phone}`,
    `Issue type: ${fields.issueType}`,
    "",
    "Case summary:",
    fields.summary,
  ].join("\n");
}

function htmlBody(fields: {
  name: string;
  email: string;
  phone: string;
  issueType: string;
  summary: string;
}) {
  const rows = [
    ["Name", fields.name],
    ["Email", fields.email],
    ["Phone", fields.phone],
    ["Issue type", fields.issueType],
  ];

  return `
    <div style="font-family: Arial, sans-serif; color: #1a2e4a; line-height: 1.5;">
      <h1 style="font-size: 20px; margin: 0 0 16px;">New case review request</h1>
      <table style="border-collapse: collapse; width: 100%; max-width: 640px;">
        <tbody>
          ${rows
            .map(
              ([label, value]) => `
                <tr>
                  <th style="border: 1px solid #e2e8f0; background: #f8fafc; padding: 10px; text-align: left; width: 140px;">${escapeHtml(label)}</th>
                  <td style="border: 1px solid #e2e8f0; padding: 10px;">${escapeHtml(value)}</td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
      <h2 style="font-size: 16px; margin: 24px 0 8px;">Case summary</h2>
      <div style="border: 1px solid #e2e8f0; padding: 14px; white-space: pre-wrap; max-width: 640px;">${escapeHtml(
        fields.summary
      )}</div>
    </div>
  `;
}

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0]?.trim() || "unknown";
  return request.headers.get("x-real-ip") ?? "unknown";
}

function rateLimit(request: Request) {
  const now = Date.now();
  const ip = getClientIp(request);
  const entry = rateLimitStore.get(ip);

  for (const [key, value] of rateLimitStore) {
    if (value.resetAt <= now) rateLimitStore.delete(key);
  }

  if (!entry || entry.resetAt <= now) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return null;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return Math.ceil((entry.resetAt - now) / 1000);
  }

  entry.count += 1;
  return null;
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return Response.json({ success: false, error: "Invalid request." }, { status: 400 });
  }

  if (payload.honey) {
    return Response.json({ success: true });
  }

  const retryAfter = rateLimit(request);
  if (retryAfter !== null) {
    return Response.json(
      { success: false, error: "Too many requests. Please try again later." },
      {
        status: 429,
        headers: {
          "Retry-After": String(retryAfter),
        },
      }
    );
  }

  const name = payload.name?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const phone = payload.phone?.trim() ?? "";
  const issueType = payload.issueType?.trim() ?? "";
  const summary = payload.summary?.trim() ?? "";

  if (!name || !email || !phone || !issueType || summary.length < 30 || !isValidEmail(email)) {
    return Response.json({ success: false, error: "Missing or invalid fields." }, { status: 400 });
  }

  if (!RESEND_API_KEY || !CONTACT_EMAIL || !FROM_EMAIL) {
    return Response.json({ success: false, error: "Submission failed." }, { status: 502 });
  }

  const resend = new Resend(RESEND_API_KEY);
  const fields = { name, email, phone, issueType, summary };

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: SUBJECT,
      text: textBody(fields),
      html: htmlBody(fields),
    });

    if (error) {
      return Response.json({ success: false, error: "Submission failed." }, { status: 502 });
    }

    return Response.json({ success: true });
  } catch {
    return Response.json({ success: false, error: "Submission failed." }, { status: 502 });
  }
}
