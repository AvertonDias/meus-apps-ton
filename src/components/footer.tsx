import Link from 'next/link';
import { Github, Instagram, Mail, Smartphone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white dark:bg-[#020817] border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Coluna 1: Branding */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight dark:text-white">
                Ton<span className="text-blue-600">Apps</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Criando soluções digitais inteligentes para simplificar sua rotina e potencializar sua produtividade.
            </p>
          </div>

          {/* Coluna 2: Navegação */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 dark:text-white">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-blue-600 transition-colors">Início</Link>
              </li>
              <li>
                <Link href="#apps" className="text-muted-foreground hover:text-blue-600 transition-colors">Aplicativos</Link>
              </li>
              <li>
                <Link href="/sobre" className="text-muted-foreground hover:text-blue-600 transition-colors">Sobre Nós</Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Apps Principais */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 dark:text-white">Nossos Apps</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/de-casa-em-casa" className="text-muted-foreground hover:text-blue-600 transition-colors">De Casa em Casa</Link>
              </li>
              <li>
                <Link href="/meu-orcamento" className="text-muted-foreground hover:text-blue-600 transition-colors">Meu Orçamento</Link>
              </li>
              <li>
                <Link href="/lista-facil" className="text-muted-foreground hover:text-blue-600 transition-colors">Lista Fácil</Link>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Social/Contato */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 dark:text-white">Conecte-se</h4>
            <div className="flex gap-4 mb-6">
              <Link href="#" className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-blue-600 hover:text-white transition-all text-muted-foreground">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-blue-600 hover:text-white transition-all text-muted-foreground">
                <Github className="w-5 h-5" />
              </Link>
              <Link href="mailto:contato@tonapps.com" className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-blue-600 hover:text-white transition-all text-muted-foreground">
                <Mail className="w-5 h-5" />
              </Link>
            </div>
            <p className="text-xs text-muted-foreground">
              Dúvidas ou sugestões? <br /> 
              <span className="font-semibold">contato@tonapps.com.br</span>
            </p>
          </div>
        </div>

        {/* Linha Inferior */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground text-center md:text-left">
            &copy; {currentYear} Ton Apps. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <Link href="/privacidade" className="hover:text-blue-600 transition-colors">Privacidade</Link>
            <Link href="/termos" className="hover:text-blue-600 transition-colors">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}