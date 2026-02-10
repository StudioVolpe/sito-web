import { NextRequest, NextResponse } from 'next/server';
import { resend, CONTACT_EMAIL } from '@/lib/resend';

interface ContactFormData {
  nome: string;
  email: string;
  telefono?: string;
  messaggio: string;
  privacy: boolean;
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function sanitizeInput(input: string): string {
  return input.trim().replace(/<[^>]*>/g, '');
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    const nome = sanitizeInput(body.nome || '');
    const email = sanitizeInput(body.email || '');
    const telefono = sanitizeInput(body.telefono || '');
    const messaggio = sanitizeInput(body.messaggio || '');
    const privacy = body.privacy;

    if (!nome) {
      return NextResponse.json(
        { error: 'Il nome è obbligatorio' },
        { status: 400 }
      );
    }

    if (!email || !validateEmail(email)) {
      return NextResponse.json(
        { error: 'Inserisci un indirizzo email valido' },
        { status: 400 }
      );
    }

    if (!messaggio) {
      return NextResponse.json(
        { error: 'Il messaggio è obbligatorio' },
        { status: 400 }
      );
    }

    if (!privacy) {
      return NextResponse.json(
        { error: 'Devi accettare la privacy policy' },
        { status: 400 }
      );
    }

    if (!resend) {
      console.error('Resend API key not configured');
      return NextResponse.json(
        { error: 'Servizio email non configurato' },
        { status: 500 }
      );
    }

    const { error } = await resend.emails.send({
      from: 'Studio Volpe <onboarding@resend.dev>',
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `Nuovo messaggio dal sito - ${nome}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #46494C; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background-color: #1985A1; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">Nuovo Messaggio dal Sito</h1>
          </div>

          <div style="background-color: #f8f9fa; padding: 30px; border: 1px solid #DCDCDD; border-top: none; border-radius: 0 0 8px 8px;">
            <h2 style="color: #4C5C68; margin-top: 0; border-bottom: 2px solid #1985A1; padding-bottom: 10px;">
              Dettagli del Contatto
            </h2>

            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #4C5C68; width: 120px; vertical-align: top;">
                  Nome:
                </td>
                <td style="padding: 10px 0;">
                  ${nome}
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #4C5C68; vertical-align: top;">
                  Email:
                </td>
                <td style="padding: 10px 0;">
                  <a href="mailto:${email}" style="color: #1985A1; text-decoration: none;">
                    ${email}
                  </a>
                </td>
              </tr>
              ${
                telefono
                  ? `
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #4C5C68; vertical-align: top;">
                  Telefono:
                </td>
                <td style="padding: 10px 0;">
                  <a href="tel:${telefono}" style="color: #1985A1; text-decoration: none;">
                    ${telefono}
                  </a>
                </td>
              </tr>
              `
                  : ''
              }
            </table>

            <h3 style="color: #4C5C68; margin-top: 20px; border-bottom: 2px solid #1985A1; padding-bottom: 10px;">
              Messaggio
            </h3>

            <div style="background-color: white; padding: 15px; border-radius: 4px; border: 1px solid #DCDCDD;">
              <p style="margin: 0; white-space: pre-wrap;">${messaggio}</p>
            </div>

            <p style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #DCDCDD; font-size: 12px; color: #C5C3C6; text-align: center;">
              Questo messaggio è stato inviato dal modulo di contatto del sito web Studio Volpe.
              <br>
              L'utente ha accettato la Privacy Policy.
            </p>
          </div>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Errore durante l\'invio dell\'email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Messaggio inviato con successo' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Si è verificato un errore. Riprova più tardi.' },
      { status: 500 }
    );
  }
}
