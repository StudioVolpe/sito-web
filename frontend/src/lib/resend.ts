import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY;

export const resend = resendApiKey ? new Resend(resendApiKey) : null;

export const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'info@studiovolpe.it';
