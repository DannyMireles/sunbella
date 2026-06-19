import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";

  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  const sendgridKey = process.env.SENDGRID_API_KEY;
  const sendgridFromEmail = process.env.SENDGRID_FROM_EMAIL;
  const sendgridFromName = process.env.SENDGRID_FROM_NAME || "Sunbrella";
  const sendgridListId = process.env.SENDGRID_CONTACT_LIST_ID;
  const toEmail = process.env.NEWSLETTER_TO_EMAIL;

  if (sendgridKey && sendgridFromEmail && toEmail) {
    const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${sendgridKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: toEmail }]
          }
        ],
        from: {
          email: sendgridFromEmail,
          name: sendgridFromName
        },
        reply_to: {
          email
        },
        subject: "New Sunbrella newsletter signup",
        content: [
          {
            type: "text/plain",
            value: `New newsletter signup: ${email}`
          }
        ]
      })
    });

    if (!response.ok) {
      return NextResponse.json({ error: "Unable to submit right now." }, { status: 502 });
    }

    if (sendgridListId) {
      const contactResponse = await fetch("https://api.sendgrid.com/v3/marketing/contacts", {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${sendgridKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          list_ids: [sendgridListId],
          contacts: [{ email }]
        })
      });

      if (!contactResponse.ok) {
        console.warn(`SendGrid contact import failed for ${email}`);
      }
    }

    return NextResponse.json({ ok: true, provider: "sendgrid" });
  }

  const resendKey = process.env.RESEND_API_KEY;
  const fromEmail =
    process.env.NEWSLETTER_FROM_EMAIL ||
    (process.env.NODE_ENV === "production" ? "" : "Sunbrella <onboarding@resend.dev>");

  if (!resendKey || !toEmail || !fromEmail) {
    if (process.env.NODE_ENV !== "production") {
      console.info(`Newsletter signup captured locally: ${email}`);
      return NextResponse.json({ ok: true, mode: "local" });
    }

    return NextResponse.json({ error: "Newsletter is not configured yet." }, { status: 503 });
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      subject: "New Sunbrella newsletter signup",
      text: `New newsletter signup: ${email}`
    })
  });

  if (!response.ok) {
    return NextResponse.json({ error: "Unable to submit right now." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
