import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { AppBanners } from '@/components/app-banners';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <AppBanners />
      </main>
      <Footer />
    </div>
  );
}
