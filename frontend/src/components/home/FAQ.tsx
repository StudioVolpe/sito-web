import Accordion from '../ui/Accordion';

const faqItems = [
  {
    title: 'Quali servizi offre lo Studio Volpe?',
    content:
      'Lo Studio offre una gamma completa di servizi: consulenza fiscale, gestione della contabilità, consulenza societaria, consulenza del lavoro, assistenza nelle operazioni straordinarie e supporto nel contenzioso tributario.',
  },
  {
    title: 'Come posso richiedere un appuntamento?',
    content:
      'Puoi richiedere un appuntamento telefonando al nostro numero, inviando una email oppure compilando il modulo di contatto presente sul sito. Ti risponderemo nel più breve tempo possibile.',
  },
  {
    title: 'Qual è il costo di una consulenza?',
    content:
      'Il costo della consulenza varia in base alla complessità della pratica e ai servizi richiesti. Offriamo un primo incontro conoscitivo gratuito per valutare insieme le tue esigenze.',
  },
  {
    title: 'Assistete anche nella creazione di nuove società?',
    content:
      'Sì, offriamo assistenza completa nella costituzione di società di persone e di capitali, dalla scelta della forma giuridica più adatta alla redazione degli atti costitutivi.',
  },
  {
    title: "Come posso accedere all'Area Personale?",
    content:
      "L'Area Personale è riservata ai clienti dello Studio. Se sei già nostro cliente, contattaci per ricevere le credenziali di accesso. Nell'area potrai consultare documenti e comunicazioni.",
  },
];

export default function FAQ() {
  return (
    <section className="py-16 md:py-24 bg-primary-light/30">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark mb-4">
              Domande Frequenti
            </h2>
            <p className="text-secondary">
              Trova risposte alle domande più comuni sui nostri servizi e modalità di
              lavoro.
            </p>
          </div>

          <Accordion items={faqItems} />
        </div>
      </div>
    </section>
  );
}
