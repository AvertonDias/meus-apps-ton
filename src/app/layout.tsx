import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { cn } from '@/lib/utils';
import { ScrollToTop } from '@/components/scroll-to-top';

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-sans',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#051937',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: 'Ton Apps | Soluções Inteligentes',
    template: '%s | Ton Apps',
  },
  description: 'Descubra aplicativos práticos e inovadores para simplificar sua rotina e aumentar sua produtividade.',
  keywords: ['aplicativos', 'produtividade', 'organização', 'ton apps', 'soluções digitais'],
  authors: [{ name: 'Ton Apps' }],
  creator: 'Ton Apps',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://de-casa-em-casa-gilt.vercel.app/',
    title: 'Ton Apps | Soluções Inteligentes',
    description: 'Simplifique suas tarefas diárias com nossos aplicativos inovadores.',
    siteName: 'Ton Apps',
    images: [
      {
        url: '/icon.png',
        alt: 'Ton Apps Logo',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Ton Apps',
    description: 'Simplifique sua rotina com nossos apps.',
    images: ['/icon.png'],
  },
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth" suppressHydrationWarning>
      <body 
        className={cn(
          "min-h-screen bg-background font-sans antialiased flex flex-col",
          inter.variable
        )}
      >
        <Header />
        <main id="main-content" className="flex-1 w-full overflow-x-hidden">
          {children}
        </main>
        <Footer />
        <Toaster />
        <ScrollToTop />
      </body>
    </html>
  );
}
