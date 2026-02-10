import Image from 'next/image';
import Button from '../ui/Button';

export default function ChiSiamoPreview() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/images/chi-siamo.png"
                alt="Dott. Antonio Volpe - Studio Commerciale"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <p className="text-primary font-medium mb-2">Studio Commerciale Volpe</p>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark mb-6">
              Dott. Antonio Volpe
            </h2>
            <p className="text-secondary leading-relaxed mb-4">
              Lo Studio Volpe svolge attività di consulenza societaria, tributaria e del lavoro da oltre quarant&apos;anni, offrendo un servizio di assistenza a 360 gradi alla propria clientela.
            </p>
            <p className="text-secondary leading-relaxed mb-8">
              Grazie alla rete di collaborazioni con professionisti qualificati — Notai, Avvocati, Ingegneri e primari Istituti di credito — siamo in grado di rispondere a ogni esigenza dei nostri clienti.
            </p>
            <Button href="/chi-siamo" variant="outline">
              Scopri di più
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
