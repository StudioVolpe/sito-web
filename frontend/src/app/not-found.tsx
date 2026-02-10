import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-primary-light/30">
      <div className="container-custom text-center py-16">
        <div className="w-24 h-24 bg-secondary-light rounded-full flex items-center justify-center mx-auto mb-8">
          <svg
            className="w-12 h-12 text-secondary opacity-50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <h1 className="text-6xl font-bold text-secondary-dark mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-secondary-dark mb-4">
          Pagina non trovata
        </h2>
        <p className="text-secondary mb-8 max-w-md mx-auto">
          La pagina che stai cercando non esiste o potrebbe essere stata spostata.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/" variant="primary">
            Torna alla Home
          </Button>
          <Button href="/contatti" variant="outline">
            Contattaci
          </Button>
        </div>
      </div>
    </section>
  );
}
