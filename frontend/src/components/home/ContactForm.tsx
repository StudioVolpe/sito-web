'use client';

import { useState, FormEvent } from 'react';
import Button from '../ui/Button';

interface FormData {
  nome: string;
  email: string;
  telefono: string;
  messaggio: string;
  privacy: boolean;
}

interface FormErrors {
  nome?: string;
  email?: string;
  messaggio?: string;
  privacy?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    telefono: '',
    messaggio: '',
    privacy: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.nome.trim()) {
      newErrors.nome = 'Il nome è obbligatorio';
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'email è obbligatoria";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Inserisci un indirizzo email valido';
    }

    if (!formData.messaggio.trim()) {
      newErrors.messaggio = 'Il messaggio è obbligatorio';
    }

    if (!formData.privacy) {
      newErrors.privacy = 'Devi accettare la privacy policy';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          nome: '',
          email: '',
          telefono: '',
          messaggio: '',
          privacy: false,
        });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contatti" className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark mb-4">
              Contattaci
            </h2>
            <p className="text-secondary">
              Hai domande o vuoi richiedere informazioni? Compila il modulo e ti
              risponderemo al più presto.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Nome */}
              <div>
                <label
                  htmlFor="nome"
                  className="block text-sm font-medium text-secondary-dark mb-2"
                >
                  Nome e Cognome *
                </label>
                <input
                  type="text"
                  id="nome"
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
                    errors.nome ? 'border-red-500' : 'border-primary-light'
                  }`}
                  placeholder="Mario Rossi"
                />
                {errors.nome && (
                  <p className="mt-1 text-sm text-red-500">{errors.nome}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-secondary-dark mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
                    errors.email ? 'border-red-500' : 'border-primary-light'
                  }`}
                  placeholder="mario.rossi@email.it"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Telefono */}
            <div>
              <label
                htmlFor="telefono"
                className="block text-sm font-medium text-secondary-dark mb-2"
              >
                Telefono
              </label>
              <input
                type="tel"
                id="telefono"
                value={formData.telefono}
                onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                className="w-full px-4 py-3 border border-primary-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                placeholder="+39 000 000 0000"
              />
            </div>

            {/* Messaggio */}
            <div>
              <label
                htmlFor="messaggio"
                className="block text-sm font-medium text-secondary-dark mb-2"
              >
                Messaggio *
              </label>
              <textarea
                id="messaggio"
                rows={5}
                value={formData.messaggio}
                onChange={(e) => setFormData({ ...formData, messaggio: e.target.value })}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-none ${
                  errors.messaggio ? 'border-red-500' : 'border-primary-light'
                }`}
                placeholder="Scrivi il tuo messaggio..."
              />
              {errors.messaggio && (
                <p className="mt-1 text-sm text-red-500">{errors.messaggio}</p>
              )}
            </div>

            {/* Privacy */}
            <div>
              <label className="flex items-start">
                <input
                  type="checkbox"
                  checked={formData.privacy}
                  onChange={(e) =>
                    setFormData({ ...formData, privacy: e.target.checked })
                  }
                  className="mt-1 mr-3 h-4 w-4 text-primary focus:ring-primary border-primary-light rounded"
                />
                <span className="text-sm text-secondary">
                  Ho letto e accetto la{' '}
                  <a
                    href="/privacy-policy"
                    className="text-primary hover:underline"
                    target="_blank"
                  >
                    Privacy Policy
                  </a>{' '}
                  *
                </span>
              </label>
              {errors.privacy && (
                <p className="mt-1 text-sm text-red-500">{errors.privacy}</p>
              )}
            </div>

            {/* Submit */}
            <div className="text-center">
              <Button type="submit" disabled={isSubmitting} size="lg">
                {isSubmitting ? 'Invio in corso...' : 'Invia Messaggio'}
              </Button>
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-center">
                <p className="text-green-700">
                  Messaggio inviato con successo! Ti risponderemo al più presto.
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-center">
                <p className="text-red-700">
                  Si è verificato un errore. Riprova più tardi o contattaci direttamente.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
