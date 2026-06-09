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

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: 'Resend is not configured.' }, { status: 500 });
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
  const subject = `Forge website inquiry from ${fullName}`;
  const text = [
    `Name: ${fullName}`,
    `Company: ${data.company}`,
    `Email: ${data.email}`,
    '',
    'Message:',
    data.message,
  ].join('\n');
  const html = `
    <h2>New Forge website inquiry</h2>
    <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
    <p><strong>Company:</strong> ${escapeHtml(data.company)}</p>
    <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(data.message).replace(/\n/g, '<br />')}</p>
  `;

  const { error } = await resend.emails
    .send({
      from,
      to,
      subject,
      text,
      html,
      replyTo: data.email,
    })
    .catch(() => ({ error: { message: 'Resend request failed.' } }));

  if (error) {
    return NextResponse.json({ error: 'Unable to send message.' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
