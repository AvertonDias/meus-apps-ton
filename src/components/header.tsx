'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Smartphone, Menu, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Efeito para mudar o estilo do header ao scrollar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '/' },
    { name: 'Aplicativos', href: '#apps' },
    { name: 'Sobre', href: '/sobre' },
  ];

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 border-b",
        isScrolled 
          ? "bg-background/80 backdrop-blur-md border-border py-3" 
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex h-14 items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center transition-transform group-hover:rotate-12">
            <Smartphone className="h-6 w-6 text-white" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-bold tracking-tight">
              Ton<span className="text-blue-600">Apps</span>
            </span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
              Software House
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-blue-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6">
            Começar Agora <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-muted-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium py-2 border-b border-border/50"
              >
                {link.name}
              </Link>
            ))}
            <Button className="w-full bg-blue-600 mt-4">
              Começar Agora
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}