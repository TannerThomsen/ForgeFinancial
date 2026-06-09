import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';

type ContactPayload = {
  firstName?: string;
  lastName?: string;
  company?: string;
  email?: string;
  message?: string;
};

type ResendError = {
  name?: string;
  message?: string;
  statusCode?: number;
  code?: string;
};

const requiredFields: Array<keyof ContactPayload> = [
  'firstName',
  'lastName',
  'company',
  'email',
  'message',
];

function clean(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function detailRow(label: string, value: string) {
  return `
    <tr>
      <td style="padding: 14px 0; width: 120px; color: #7a8599; font-family: Arial, sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; vertical-align: top;">
        ${label}
      </td>
      <td style="padding: 14px 0; color: #0c1e42; font-family: Georgia, serif; font-size: 20px; line-height: 1.35; vertical-align: top;">
        ${escapeHtml(value)}
      </td>
    </tr>
  `;
}

function getResendError(error: unknown): ResendError {
  if (!error || typeof error !== 'object') {
    return { message: 'Unknown Resend error.' };
  }

  const errorRecord = error as Record<string, unknown>;

  return {
    name: typeof errorRecord.name === 'string' ? errorRecord.name : undefined,
    message: typeof errorRecord.message === 'string' ? errorRecord.message : undefined,
    statusCode:
      typeof errorRecord.statusCode === 'number' ? errorRecord.statusCode : undefined,
    code: typeof errorRecord.code === 'string' ? errorRecord.code : undefined,
  };
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error('[contact] Missing RESEND_API_KEY environment variable.');

    return NextResponse.json(
      {
        error: 'Contact form email is not configured.',
        stage: 'missing_api_key',
      },
      { status: 500 },
    );
  }

  const payload = (await request.json().catch(() => null)) as ContactPayload | null;

  if (!payload) {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const data = {
    firstName: clean(payload.firstName),
    lastName: clean(payload.lastName),
    company: clean(payload.company),
    email: clean(payload.email),
    message: clean(payload.message),
  };

  const missingField = requiredFields.find((field) => !data[field]);

  if (missingField) {
    return NextResponse.json({ error: 'Please complete all required fields.' }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 });
  }

  const resend = new Resend(apiKey);
  const to = process.env.CONTACT_TO_EMAIL || 'Inquiry@forgefinancialsolution.com';
  const from =
    process.env.RESEND_FROM_EMAIL || 'Forge Financial Solutions <onboarding@resend.dev>';
  const fullName = `${data.firstName} ${data.lastName}`;
  const subject = `Forge inquiry from ${fullName}`;
  const text = [
    `Name: ${fullName}`,
    `Company: ${data.company}`,
    `Email: ${data.email}`,
    '',
    'Message:',
    data.message,
  ].join('\n');
  const html = `
    <!doctype html>
    <html>
      <body style="margin: 0; background: #f1efe9; padding: 32px 18px;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse: collapse;">
          <tr>
            <td align="center">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 680px; border-collapse: collapse; background: #f8f7f4; border: 1px solid #e4e1d8;">
                <tr>
                  <td style="background: #050914; padding: 28px 30px 24px;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse: collapse;">
                      <tr>
                        <td>
                          <div style="height: 8px; width: 8px; background: #d95f1a; border-radius: 50%; margin-bottom: 18px;"></div>
                          <div style="color: #ff7a1a; font-family: Arial, sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase;">
                            New Inquiry
                          </div>
                          <h1 style="margin: 10px 0 0; color: #ffffff; font-family: Georgia, serif; font-size: 34px; line-height: 1.05; font-weight: 400;">
                            ${escapeHtml(fullName)}
                          </h1>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <tr>
                  <td style="padding: 28px 30px 8px;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse: collapse;">
                      ${detailRow('Company', data.company)}
                      ${detailRow('Email', data.email)}
                    </table>
                  </td>
                </tr>

                <tr>
                  <td style="padding: 10px 30px 30px;">
                    <div style="border-left: 3px solid #d95f1a; background: #ffffff; padding: 22px 24px;">
                      <div style="margin-bottom: 12px; color: #7a8599; font-family: Arial, sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase;">
                        Message
                      </div>
                      <div style="color: #0c1e42; font-family: Arial, sans-serif; font-size: 16px; line-height: 1.75;">
                        ${escapeHtml(data.message).replace(/\n/g, '<br />')}
                      </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td style="background: #0c1e42; padding: 18px 30px; color: rgba(255,255,255,0.72); font-family: Arial, sans-serif; font-size: 13px; line-height: 1.6;">
                    Reply directly to this email to respond to ${escapeHtml(fullName)} at ${escapeHtml(data.email)}.
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;

  const { data: resendData, error } = await resend.emails
    .send({
      from,
      to,
      subject,
      text,
      html,
      replyTo: data.email,
    })
    .catch((sendError: unknown) => ({
      data: null,
      error: sendError,
    }));

  if (error) {
    const resendError = getResendError(error);

    console.error('[contact] Resend send failed.', {
      error: resendError,
      from,
      to,
      replyTo: data.email,
    });

    return NextResponse.json(
      {
        error: 'Unable to send message through Resend.',
        stage: 'resend_send',
        resend: resendError,
      },
      { status: 500 },
    );
  }

  console.info('[contact] Resend email sent.', {
    id: resendData?.id,
    from,
    to,
  });

  return NextResponse.json({ ok: true, id: resendData?.id });
}
