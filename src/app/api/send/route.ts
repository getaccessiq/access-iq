import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body.firstName || !body.email || !body.message) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: "AccessIQ <noreply@getaccessiq.com>",
      to: ["ronny.handke@gmx.net"],
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
