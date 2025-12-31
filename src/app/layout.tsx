import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { cn } from '@/lib/utils';

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
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Preview Ton Apps',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ton Apps',
    description: 'Simplifique sua rotina com nossos apps.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/Site img/Icon.jpeg',
    apple: '/Site img/Icon.jpeg',
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
      </body>
    </html>
  );
}
