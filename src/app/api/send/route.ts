import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;

if (!resendApiKey) {
  throw new Error("Missing RESEND_API_KEY environment variable");
}

const resend = new Resend(resendApiKey);

const RECIPIENT_EMAIL = "hello@accessive.co";
const FROM_EMAIL = "Accessive <hello@accessive.co>";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Quick Scan Notify / Waitlist
    if (body.notifyEmail) {
      const notifyEmail = String(body.notifyEmail).trim();

      if (!isValidEmail(notifyEmail)) {
        return Response.json(
          { error: "Invalid notify email" },
          { status: 400 }
        );
      }

      const { data, error } = await resend.emails.send({
        from: FROM_EMAIL,
        to: RECIPIENT_EMAIL,
        replyTo: notifyEmail,
        subject: "Quick Scan Notify Request",
        html: `
          <h2>New Quick Scan Notify Request</h2>
          <p><strong>Email:</strong> ${escapeHtml(notifyEmail)}</p>
        `,
      });

      if (error) {
        console.error("Resend notify error:", error);
        return Response.json(
          { error: "Failed to send notify email" },
          { status: 500 }
        );
      }

      return Response.json({ success: true, data });
    }

    // Contact form
    const firstName = String(body.firstName || "").trim();
    const email = String(body.email || "").trim();
    const message = String(body.message || "").trim();
    const businessName = String(body.businessName || "").trim();
    const service = String(body.service || "").trim();

    if (!firstName || !email || !message) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return Response.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: RECIPIENT_EMAIL,
      replyTo: email,
      subject: "New Contact Request",
      html: `
        <h2>New Contact Inquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(firstName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Business Name:</strong> ${escapeHtml(businessName || "-")}</p>
        <p><strong>Service:</strong> ${escapeHtml(service || "-")}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    });

    if (error) {
      console.error("Resend contact error:", error);
      return Response.json(
        { error: "Failed to send contact email" },
        { status: 500 }
      );
    }

    return Response.json({ success: true, data });
  } catch (error) {
    console.error("API /api/send error:", error);

    return Response.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}