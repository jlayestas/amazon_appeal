const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? "jlayestas@gmail.com";
const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_EMAIL)}`;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

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

  const data = new FormData();
  data.append("name", name);
  data.append("email", email);
  data.append("phone", phone);
  data.append("issue_type", issueType);
  data.append("message", summary);
  data.append("_subject", "New Case Review Request — JRJ Reinstaters");
  data.append("_template", "table");
  data.append("_captcha", "false");
  data.append("_replyto", email);
  data.append("_honey", "");

  try {
    const response = await fetch(FORMSUBMIT_ENDPOINT, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: data,
    });
    const result = await response.json().catch(() => null);

    if (!response.ok || !(result?.success === true || result?.success === "true")) {
      return Response.json({ success: false, error: "Submission failed." }, { status: 502 });
    }

    return Response.json({ success: true });
  } catch {
    return Response.json({ success: false, error: "Submission failed." }, { status: 502 });
  }
}
