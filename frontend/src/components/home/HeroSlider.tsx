'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Button from '../ui/Button';

const slides = [
  {
    id: 1,
    title: 'Consulenza Fiscale e Contabile',
    subtitle: 'Al fianco delle imprese e dei professionisti da oltre 40 anni',
    cta: 'Scopri i Servizi',
    href: '/#servizi',
  },
  {
    id: 2,
    title: 'Esperienza e Professionalità',
    subtitle: 'Un team di esperti per la gestione della tua attività',
    cta: 'Chi Siamo',
    href: '/chi-siamo',
  },
  {
    id: 3,
    title: 'Sempre Aggiornati',
    subtitle: 'Segui le ultime novità fiscali e normative',
    cta: 'Leggi le News',
    href: '/news',
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden bg-secondary-dark">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.png"
          alt="Studio Commerciale Volpe"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-dark/90 via-secondary-dark/70 to-secondary-dark/40" />
      </div>

      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Content */}
          <div className="relative h-full container-custom flex items-center">
            <div className="max-w-2xl text-white">
              <h1
                className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 transition-all duration-700 ${
                  index === currentSlide
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-4 opacity-0'
                }`}
              >
                {slide.title}
              </h1>
              <p
                className={`text-lg md:text-xl text-primary-light mb-8 transition-all duration-700 delay-100 ${
                  index === currentSlide
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-4 opacity-0'
                }`}
              >
                {slide.subtitle}
              </p>
              <div
                className={`transition-all duration-700 delay-200 ${
                  index === currentSlide
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-4 opacity-0'
                }`}
              >
                <Button href={slide.href} variant="primary" size="lg">
                  {slide.cta}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
        aria-label="Slide precedente"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
        aria-label="Slide successiva"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-primary w-8' : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Vai alla slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
