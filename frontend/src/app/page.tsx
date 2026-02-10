import HeroSlider from '@/components/home/HeroSlider';
import ChiSiamoPreview from '@/components/home/ChiSiamoPreview';
import ServiziGrid from '@/components/home/ServiziGrid';
import LinkUtili from '@/components/home/LinkUtili';
import FAQ from '@/components/home/FAQ';
import ContactForm from '@/components/home/ContactForm';

export default function Home() {
  return (
    <>
      <HeroSlider />
      <ChiSiamoPreview />
      <ServiziGrid />
      <LinkUtili />
      <FAQ />
      <ContactForm />
    </>
  );
}
