import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 });
    }

    await resend.emails.send({
      from: 'À table Panama <contact@atablepanama.com>',
      to: 'atablepanama@gmail.com',
      replyTo: email,
      subject: `[Contact] ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #111111;">
          <h2 style="color: #0a1628; border-bottom: 1px solid #c9a84c; padding-bottom: 12px;">
            Nouveau message — À table Panama
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin: 24px 0;">
            <tr>
              <td style="padding: 8px 0; color: #666; width: 120px; vertical-align: top;">Nom</td>
              <td style="padding: 8px 0; font-weight: 500;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666; vertical-align: top;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #c9a84c;">${email}</a></td>
            </tr>
            ${phone ? `<tr>
              <td style="padding: 8px 0; color: #666; vertical-align: top;">Téléphone</td>
              <td style="padding: 8px 0;">${phone}</td>
            </tr>` : ''}
            <tr>
              <td style="padding: 8px 0; color: #666; vertical-align: top;">Message</td>
              <td style="padding: 8px 0; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
          <p style="color: #999; font-size: 12px; margin-top: 32px;">
            Répondre directement à cet email pour contacter ${name}.
          </p>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error('Resend error:', err);
    return Response.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
