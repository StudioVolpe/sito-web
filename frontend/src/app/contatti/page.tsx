import { Metadata } from 'next';
import ContactForm from '@/components/home/ContactForm';

export const metadata: Metadata = {
  title: 'Contatti',
  description:
    'Contatta lo Studio Volpe per informazioni sui nostri servizi di consulenza fiscale e contabile.',
};

export default function Contatti() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-secondary-dark py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contattaci</h1>
          <p className="text-primary-light text-lg max-w-2xl mx-auto">
            Siamo a tua disposizione per qualsiasi informazione o chiarimento sui nostri
            servizi.
          </p>
        </div>
      </section>

      {/* Contact Info + Map */}
      <section className="py-16 bg-primary-light/30">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Address */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-primary-light/50 text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-secondary-dark mb-2">Indirizzo</h3>
              <p className="text-secondary text-sm">
                Via Consolare 51
                <br />
                04015 Priverno (LT)
              </p>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-primary-light/50 text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-secondary-dark mb-2">Telefono</h3>
              <div className="space-y-1">
                <a
                  href="tel:+390773903546"
                  className="text-secondary hover:text-primary transition-colors text-sm block"
                >
                  0773 903546
                </a>
                <a
                  href="tel:+390773904630"
                  className="text-secondary hover:text-primary transition-colors text-sm block"
                >
                  0773 904630
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-primary-light/50 text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-secondary-dark mb-2">Email</h3>
              <a
                href="mailto:volpestudiocommerciale@gmail.com"
                className="text-secondary hover:text-primary transition-colors text-sm"
              >
                volpestudiocommerciale@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Orari */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-secondary-dark mb-6">Orari di Apertura</h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="text-right text-secondary-dark font-medium">Lunedì - Venerdì</div>
              <div className="text-left text-secondary">09:00 - 13:00 / 15:00 - 18:00</div>
              <div className="text-right text-secondary-dark font-medium">Sabato</div>
              <div className="text-left text-secondary">Su appuntamento</div>
              <div className="text-right text-secondary-dark font-medium">Domenica</div>
              <div className="text-left text-secondary">Chiuso</div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-primary-light/30">
        <div className="container-custom py-8">
          <div className="aspect-[21/9] bg-secondary-light rounded-xl flex items-center justify-center">
            <div className="text-center text-secondary">
              <svg
                className="w-16 h-16 mx-auto mb-2 opacity-50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                />
              </svg>
              <p className="text-sm">Mappa Google Maps</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </>
  );
}
