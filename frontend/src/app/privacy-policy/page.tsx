import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Informativa sulla privacy e sul trattamento dei dati personali dello Studio Volpe.',
};

export default function PrivacyPolicy() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-secondary-dark py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-primary-light">
            Informativa ai sensi del Regolamento UE 2016/679 (GDPR)
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose prose-lg prose-secondary">
            <p className="text-secondary leading-relaxed mb-6">
              La presente informativa descrive le modalità di gestione del sito web in
              riferimento al trattamento dei dati personali degli utenti che lo
              consultano.
            </p>

            <h2 className="text-2xl font-bold text-secondary-dark mt-8 mb-4">
              1. Titolare del Trattamento
            </h2>
            <p className="text-secondary leading-relaxed mb-6">
              Il Titolare del trattamento dei dati è Studio Volpe, con sede in Via
              Example, 123 - 00100 Roma (RM), P.IVA 00000000000, email:
              info@studiovolpe.it.
            </p>

            <h2 className="text-2xl font-bold text-secondary-dark mt-8 mb-4">
              2. Tipologia di Dati Raccolti
            </h2>
            <p className="text-secondary leading-relaxed mb-4">
              Fra i dati personali raccolti da questo sito, in modo autonomo o tramite
              terze parti, ci sono:
            </p>
            <ul className="list-disc pl-6 text-secondary mb-6 space-y-2">
              <li>Dati di navigazione (indirizzo IP, browser, sistema operativo)</li>
              <li>
                Dati forniti volontariamente dall&apos;utente (nome, email, telefono, messaggio)
              </li>
              <li>Cookie e tecnologie simili</li>
            </ul>

            <h2 className="text-2xl font-bold text-secondary-dark mt-8 mb-4">
              3. Finalità del Trattamento
            </h2>
            <p className="text-secondary leading-relaxed mb-4">
              I dati personali sono trattati per le seguenti finalità:
            </p>
            <ul className="list-disc pl-6 text-secondary mb-6 space-y-2">
              <li>Rispondere alle richieste di contatto inviate tramite il modulo</li>
              <li>Fornire i servizi richiesti</li>
              <li>Adempiere ad obblighi di legge</li>
              <li>Analisi statistiche anonime sulla navigazione del sito</li>
            </ul>

            <h2 className="text-2xl font-bold text-secondary-dark mt-8 mb-4">
              4. Base Giuridica del Trattamento
            </h2>
            <p className="text-secondary leading-relaxed mb-6">
              Il trattamento dei dati personali si basa sul consenso dell&apos;interessato,
              sulla necessità di eseguire un contratto o misure precontrattuali, e
              sull&apos;adempimento di obblighi legali.
            </p>

            <h2 className="text-2xl font-bold text-secondary-dark mt-8 mb-4">
              5. Modalità di Trattamento
            </h2>
            <p className="text-secondary leading-relaxed mb-6">
              I dati personali sono trattati con strumenti informatici e/o cartacei, con
              modalità organizzative e logiche strettamente correlate alle finalità
              indicate. Sono adottate misure di sicurezza adeguate per prevenire la
              perdita, l&apos;uso illecito o non corretto dei dati.
            </p>

            <h2 className="text-2xl font-bold text-secondary-dark mt-8 mb-4">
              6. Conservazione dei Dati
            </h2>
            <p className="text-secondary leading-relaxed mb-6">
              I dati sono conservati per il tempo strettamente necessario al
              raggiungimento delle finalità per cui sono stati raccolti e comunque non
              oltre i termini previsti dalla legge.
            </p>

            <h2 className="text-2xl font-bold text-secondary-dark mt-8 mb-4">
              7. Comunicazione dei Dati
            </h2>
            <p className="text-secondary leading-relaxed mb-6">
              I dati potranno essere comunicati a soggetti terzi per adempimenti di legge
              o per l&apos;erogazione dei servizi richiesti. Non sono previste attività di
              diffusione dei dati.
            </p>

            <h2 className="text-2xl font-bold text-secondary-dark mt-8 mb-4">
              8. Diritti dell&apos;Interessato
            </h2>
            <p className="text-secondary leading-relaxed mb-4">
              Ai sensi degli articoli 15-22 del GDPR, l&apos;interessato ha diritto di:
            </p>
            <ul className="list-disc pl-6 text-secondary mb-6 space-y-2">
              <li>Accedere ai propri dati personali</li>
              <li>Richiedere la rettifica o la cancellazione</li>
              <li>Richiedere la limitazione del trattamento</li>
              <li>Opporsi al trattamento</li>
              <li>Richiedere la portabilità dei dati</li>
              <li>Revocare il consenso in qualsiasi momento</li>
              <li>Proporre reclamo all&apos;Autorità Garante</li>
            </ul>

            <h2 className="text-2xl font-bold text-secondary-dark mt-8 mb-4">
              9. Cookie Policy
            </h2>
            <p className="text-secondary leading-relaxed mb-6">
              Questo sito utilizza cookie tecnici necessari per il corretto
              funzionamento. Per maggiori informazioni sui cookie e su come gestirli,
              consultare la Cookie Policy.
            </p>

            <h2 className="text-2xl font-bold text-secondary-dark mt-8 mb-4">
              10. Modifiche alla Privacy Policy
            </h2>
            <p className="text-secondary leading-relaxed mb-6">
              Il Titolare si riserva il diritto di apportare modifiche alla presente
              informativa in qualunque momento. Le modifiche saranno pubblicate su questa
              pagina.
            </p>

            <h2 className="text-2xl font-bold text-secondary-dark mt-8 mb-4">
              11. Contatti
            </h2>
            <p className="text-secondary leading-relaxed">
              Per qualsiasi informazione relativa al trattamento dei dati personali, è
              possibile contattare il Titolare all&apos;indirizzo email: info@studiovolpe.it
            </p>

            <p className="text-secondary-light text-sm mt-12 pt-6 border-t border-primary-light">
              Ultimo aggiornamento: Febbraio 2026
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
