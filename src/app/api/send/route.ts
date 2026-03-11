import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const RECIPIENT_EMAIL = "support@getaccessiq.com";
const FROM_EMAIL = "AccessIQ <support@getaccessiq.com>";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Quick Scan Notify / Waitlist
    if (body.notifyEmail) {
      if (!isValidEmail(body.notifyEmail)) {
        return Response.json(
          { error: "Invalid notify email" },
          { status: 400 }
        );
      }

      const { data, error } = await resend.emails.send({
        from: FROM_EMAIL,
        to: RECIPIENT_EMAIL,
        replyTo: body.notifyEmail,
        subject: "Quick Scan Notify Request",
        html: `
          <h2>New Quick Scan Notify Request</h2>
          <p><strong>Email:</strong> ${body.notifyEmail}</p>
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
    const { firstName, email, message, businessName, service } = body;

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
        <p><strong>Name:</strong> ${firstName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Business Name:</strong> ${businessName || "-"}</p>
        <p><strong>Service:</strong> ${service || "-"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
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
