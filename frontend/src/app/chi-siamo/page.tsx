import { Metadata } from 'next';
import Image from 'next/image';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Chi Siamo',
  description:
    'Studio Commerciale Volpe - Dott. Antonio Volpe: Dottore Commercialista, Consulente del Lavoro, Revisore legale. Oltre 40 anni di esperienza nella consulenza societaria, tributaria e del lavoro.',
};

export default function ChiSiamo() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-secondary-dark py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Chi Siamo</h1>
          <p className="text-primary-light text-lg max-w-2xl mx-auto">
            Oltre 40 anni di esperienza al servizio di imprese e professionisti
          </p>
        </div>
      </section>

      {/* Studio Volpe */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative order-2 md:order-1">
              <div className="aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src="/images/chi-siamo.png"
                  alt="Dott. Antonio Volpe - Studio Commerciale"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-xl -z-10" />
            </div>

            {/* Content */}
            <div className="order-1 md:order-2">
              <p className="text-primary font-medium mb-2">Studio Commerciale Volpe</p>
              <h2 className="text-3xl font-bold text-secondary-dark mb-2">
                Dott. Antonio Volpe
              </h2>
              <p className="text-secondary-light text-sm mb-6">
                Dottore Commercialista, Consulente del Lavoro, Revisore Legale e della Sostenibilità, Asseveratore Asse.co
              </p>
              <p className="text-secondary leading-relaxed mb-4">
                Lo Studio Volpe svolge attività di consulenza societaria, tributaria e del lavoro da oltre quarant&apos;anni, offrendo un servizio di assistenza a 360 gradi alla propria clientela.
              </p>
              <p className="text-secondary leading-relaxed">
                Grazie alla rete di collaborazioni con professionisti in sede — tra i quali Notai, Avvocati, Ingegneri, Geometri, professionisti in difesa tributaria, Agenti immobiliari e società di servizi alle imprese — siamo in grado di rispondere a ogni esigenza dei nostri clienti, supportati anche dalla partnership con primari Istituti di credito.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Priconsul */}
      <section className="py-16 md:py-24 bg-primary-light/30">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <p className="text-primary font-medium mb-2">Società del Gruppo</p>
              <h2 className="text-3xl font-bold text-secondary-dark mb-6">
                Priconsul S.r.l.s.
              </h2>
              <p className="text-secondary leading-relaxed mb-4">
                La società Priconsul S.r.l.s. svolge attività di contabilità, dichiarativi, amministrazione del personale e servizi alle imprese in generale.
              </p>
              <p className="text-secondary leading-relaxed">
                Grazie alla convenzione con il CNDL (CAF Nazionale del Lavoro), siamo in grado di offrire un&apos;ampia gamma di servizi fiscali e assistenziali per privati e aziende, garantendo competenza e affidabilità in ogni pratica.
              </p>
            </div>

            {/* Logo Placeholder */}
            <div className="relative">
              <div className="aspect-[4/3] bg-white rounded-xl flex items-center justify-center shadow-sm border border-primary-light/50">
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
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  <p className="text-sm">Logo Priconsul</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Valori */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-dark mb-4">I Nostri Valori</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              I principi che guidano il nostro lavoro quotidiano al servizio dei clienti
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Esperienza',
                description:
                  'Oltre 40 anni di attività nel settore della consulenza fiscale e del lavoro.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
              },
              {
                title: 'Competenza',
                description:
                  'Team di professionisti qualificati e costantemente aggiornati.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                ),
              },
              {
                title: 'Rete di Partner',
                description:
                  'Collaborazioni con Notai, Avvocati, Ingegneri e altri professionisti.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                ),
              },
              {
                title: 'Assistenza 360°',
                description:
                  'Supporto completo per ogni esigenza fiscale, contabile e amministrativa.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                ),
              },
            ].map((valore, index) => (
              <div
                key={index}
                className="bg-primary-light/30 rounded-xl p-6 text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                  {valore.icon}
                </div>
                <h3 className="text-lg font-semibold text-secondary-dark mb-2">
                  {valore.title}
                </h3>
                <p className="text-secondary text-sm">{valore.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Vuoi saperne di più sui nostri servizi?
          </h2>
          <p className="text-primary-light mb-8 max-w-xl mx-auto">
            Contattaci per un primo incontro conoscitivo. Saremo lieti di illustrarti come possiamo supportare la tua attività.
          </p>
          <Button href="/contatti" variant="secondary" size="lg">
            Contattaci Ora
          </Button>
        </div>
      </section>
    </>
  );
}
