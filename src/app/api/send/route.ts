import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Popup / Waitlist / Notify request
    if (body.notifyEmail) {
      const data = await resend.emails.send({
        from: "AccessIQ <support@getaccessiq.com>",
        to: ["support@getaccessiq.com"],
        replyTo: body.notifyEmail,
        subject: "Quick Scan Notify Request",
        html: `
          <h2>New Quick Scan Notify Request</h2>
          <p><strong>Email:</strong> ${body.notifyEmail}</p>
        `,
      });

      return Response.json({ success: true, data });
    }

    // Bestehendes Contact-Formular
    if (!body.firstName || !body.email || !body.message) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: "AccessIQ <support@getaccessiq.com>",
      to: ["support@getaccessiq.com"],
      replyTo: body.email,
      subject: "New Contact Request",
      html: `
        <h2>New Contact Inquiry</h2>
        <p><strong>Name:</strong> ${body.firstName}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Business Name:</strong> ${body.businessName || "-"}</p>
        <p><strong>Service:</strong> ${body.service || "-"}</p>
        <p><strong>Message:</strong></p>
        <p>${body.message}</p>
      `,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}