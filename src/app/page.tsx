import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { AppShowcase } from '@/components/app-showcase';
import { Testimonials } from '@/components/testimonials';
import { SmartCta } from '@/components/smart-cta';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <AppShowcase />
        <Testimonials />
        <SmartCta />
      </main>
      <Footer />
    </div>
  );
}
