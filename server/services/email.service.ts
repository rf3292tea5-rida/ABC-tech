import { Resend } from 'resend';
import { env } from '../config/env.js';
import { ContactFormData } from '../../src/schemas/contact.schema.js';

const resend = env.RESEND_API_KEY ? new Resend(env.RESEND_API_KEY) : null;

export async function sendContactEmail(data: ContactFormData) {
  if (!resend) {
    console.log('[EMAIL MOCK] Would send email:', data);
    return;
  }

  await resend.emails.send({
    from: 'Tech ABC <onboarding@resend.dev>', // Update with verified domain
    to: 'contact@techabc.com', // Update with real email
    subject: `New Contact Form: ${data.subject}`,
    text: `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`,
  });
}