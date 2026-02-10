import { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Consulenza Aste e Servizi Immobiliari',
  description:
    'Consulenza immobiliare completa: assistenza aste, stralcio NPL, vendita immobili. Team di esperti con oltre 30 anni di esperienza nel settore.',
};

const aree = [
  {
    id: 1,
    title: 'Area Asta',
    description:
      'Il servizio dedicato alla consulenza e all\'assistenza per partecipare all\'asta in tutta sicurezza, con un processo di valutazione e Due Diligence completa.',
    features: [
      'Analisi preliminare dell\'immobile',
      'Due Diligence documentale',
      'Valutazione economica e di mercato',
      'Assistenza nella partecipazione all\'asta',
      'Supporto post-aggiudicazione',
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Area Stralcio e NPL',
    description:
      'Il servizio dedicato a fornire una soluzione a tutti coloro che si trovano ad avere problemi di pignoramento, insoluti o debiti con sottostante immobiliare a garanzia.',
    features: [
      'Analisi della posizione debitoria',
      'Negoziazione con i creditori',
      'Accordi di stralcio',
      'Gestione NPL (Non Performing Loans)',
      'Tutela del patrimonio immobiliare',
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Area Vendita Immobile',
    description:
      'Il servizio dedicato a chi vuole vendere casa in modo nuovo, semplice e veloce. Con la possibilità di optare per l\'instant buyer se si ha la necessità di un immediato realizzo o per l\'agency con un approccio fortemente digital.',
    features: [
      'Instant Buyer per realizzo immediato',
      'Agency con approccio digital',
      'Valutazione professionale dell\'immobile',
      'Marketing e promozione online',
      'Valorizzazione massima del bene',
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
  },
];

export default function ConsulenzaImmobiliare() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-secondary-dark py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <Link
              href="/#servizi"
              className="inline-flex items-center text-primary-light hover:text-white transition-colors mb-6"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Torna ai Servizi
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Consulenza Aste e Servizi Immobiliari
            </h1>
            <p className="text-primary-light text-lg">
              Assistenza completa per ogni esigenza immobiliare con un approccio multidisciplinare e web based
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-secondary leading-relaxed mb-6">
              Tramite società partner offriamo consulenza immobiliare completa, grazie ad un team di professionisti coadiuvato da <strong className="text-secondary-dark">Gennaro Canistro</strong> e <strong className="text-secondary-dark">Giovanni Ascione</strong>, consulenti con oltre 30 anni di esperienza nel settore immobiliare.
            </p>
            <p className="text-secondary leading-relaxed">
              Una squadra in grado di fornire la migliore soluzione a tutti coloro che hanno la necessità di assistenza per un&apos;asta e pre-asta o semplicemente per qualsiasi tipo di transazione immobiliare.
            </p>
          </div>
        </div>
      </section>

      {/* Aree di Servizio */}
      <section className="py-16 bg-primary-light/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-dark mb-4">
              Le Nostre Aree di Intervento
            </h2>
            <p className="text-secondary max-w-2xl mx-auto">
              I servizi si sviluppano in tre ambiti principali per coprire ogni esigenza del mercato immobiliare
            </p>
          </div>

          <div className="space-y-8">
            {aree.map((area, index) => (
              <div
                key={area.id}
                className={`bg-white rounded-xl shadow-sm border border-primary-light/50 overflow-hidden ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                } md:flex`}
              >
                {/* Content */}
                <div className="p-8 md:w-2/3">
                  <div className="flex items-center mb-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-4">
                      {area.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-secondary-dark">
                      {area.title}
                    </h3>
                  </div>
                  <p className="text-secondary leading-relaxed mb-6">
                    {area.description}
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {area.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm text-secondary">
                        <svg
                          className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual */}
                <div className="md:w-1/3 bg-gradient-to-br from-primary/5 to-primary/20 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                      {area.icon}
                    </div>
                    <p className="text-sm font-medium text-secondary-dark">{area.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-secondary-dark mb-6">
              Il Nostro Partner
            </h2>
            <div className="bg-primary-light/30 rounded-xl p-8">
              {/* Logo Placeholder */}
              <div className="w-48 h-24 bg-white rounded-lg mx-auto mb-6 flex items-center justify-center border border-primary-light/50">
                <span className="text-secondary font-medium">Logo Asta Network</span>
              </div>
              <p className="text-secondary mb-6">
                Collaboriamo con Asta Network, piattaforma leader nel settore delle aste immobiliari in Italia, per offrire ai nostri clienti un servizio completo e professionale.
              </p>
              <Button
                href="https://astanetwork.it/servizi.php"
                external
                variant="primary"
              >
                Visita Asta Network
                <svg
                  className="w-4 h-4 ml-2 inline-block"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Hai bisogno di assistenza immobiliare?
          </h2>
          <p className="text-primary-light mb-8 max-w-xl mx-auto">
            Contattaci per una consulenza personalizzata. Il nostro team di esperti è pronto ad aiutarti in ogni fase della tua operazione immobiliare.
          </p>
          <Button href="/contatti" variant="secondary" size="lg">
            Richiedi una Consulenza
          </Button>
        </div>
      </section>
    </>
  );
}
