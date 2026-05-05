const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? "jlayestas@gmail.com";
const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_EMAIL)}`;

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
