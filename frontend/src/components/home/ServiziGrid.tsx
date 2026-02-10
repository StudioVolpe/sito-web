import Link from 'next/link';
import { ReactNode } from 'react';
import Card, { CardHeader, CardTitle, CardContent } from '../ui/Card';

const servizi = [
  {
    id: 1,
    title: 'Contabilità e Consulenza Tributaria',
    shortDescription:
      'Dalla scelta della forma giuridica all\'assistenza quotidiana per problematiche fiscali, contabili e gestionali.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
    href: null as string | null,
  },
  {
    id: 2,
    title: 'Amministrazione del Personale',
    shortDescription:
      'Gestione completa del rapporto di lavoro: cedolini paga, contributi, denunce e consulenza.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    href: null as string | null,
  },
  {
    id: 3,
    title: 'Assicurazioni',
    shortDescription:
      'Partner Generali: consulenza per risparmio, investimento, tutela patrimoniale e della salute.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    href: null as string | null,
  },
  {
    id: 4,
    title: 'Consulenza Aste e Immobiliare',
    shortDescription:
      'Assistenza completa per aste, stralci NPL e transazioni immobiliari con team specializzato.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
    href: '/servizi/consulenza-immobiliare',
  },
];

function ServiceCard({ children, href }: { children: ReactNode; href: string | null }) {
  const cardContent = (
    <Card hover className="text-center h-full flex flex-col">
      {children}
    </Card>
  );

  if (href) {
    return (
      <Link href={href} className="block group">
        {cardContent}
      </Link>
    );
  }

  return <div>{cardContent}</div>;
}

export default function ServiziGrid() {
  return (
    <section id="servizi" className="py-16 md:py-24 bg-primary-light/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark mb-4">
            I Nostri Servizi
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Un team di professionisti al vostro fianco dalla nascita dell&apos;attività
            all&apos;assistenza quotidiana per ogni esigenza fiscale e amministrativa.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servizi.map((servizio) => (
            <ServiceCard key={servizio.id} href={servizio.href}>
              <CardHeader className="flex justify-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  {servizio.icon}
                </div>
              </CardHeader>
              <CardTitle className="text-lg">{servizio.title}</CardTitle>
              <CardContent className="flex-grow">
                <p className="text-sm mt-2">{servizio.shortDescription}</p>
              </CardContent>
              {servizio.href && (
                <div className="mt-4 pt-4 border-t border-primary-light">
                  <span className="text-primary font-medium text-sm flex items-center justify-center group-hover:underline">
                    Scopri di più
                    <svg
                      className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              )}
            </ServiceCard>
          ))}
        </div>
      </div>
    </section>
  );
}
