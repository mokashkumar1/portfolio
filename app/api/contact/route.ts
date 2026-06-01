import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "re_mock_key_for_build");

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
    }

    const payload = {
      name: String(name),
      email: String(email),
      subject: String(subject || "Portfolio message"),
      message: String(message),
    };

    if (!process.env.RESEND_API_KEY || !process.env.CONTACT_FROM_EMAIL || !process.env.CONTACT_TO_EMAIL) {
      console.log("Portfolio contact mock mode:", payload);
      return NextResponse.json({
        success: true,
        message: "Mock mode: configure RESEND_API_KEY, CONTACT_FROM_EMAIL, and CONTACT_TO_EMAIL for live delivery.",
      });
    }

    const { data, error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: payload.email,
      subject: `Portfolio Message: ${payload.subject}`,
      html: `
        <div style="font-family: Inter, Arial, sans-serif; padding: 24px; color: #111827;">
          <h2 style="margin: 0 0 16px; color: #ff5a00;">New Portfolio Message</h2>
          <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
          <p><strong>Subject:</strong> ${escapeHtml(payload.subject)}</p>
          <div style="margin-top: 18px; padding: 16px; border-left: 4px solid #ff5a00; background: #f8fafc;">
            <p style="white-space: pre-wrap; line-height: 1.6;">${escapeHtml(payload.message)}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown contact error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
