import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

const PlayStoreIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" {...props}>
    <path d="M24,14.3,9.4,5.05a2,2,0,0,0-2,1.74V25.22a2,2,0,0,0,2,1.73L24,21.7a2,2,0,0,0,0-3.46l-6.3-3.63,6.3-3.64A2,2,0,0,0,24,14.3Z" />
    <path d="M9.4,5.05,20.89,12,9.4,18.89Z" />
    <path d="m9.4,26.95,11.5-6.6-11.5-6.88Z" />
  </svg>
);

export function PwaButton({ href, className }: { href: string, className?: string }) {
  return (
    <Button variant="outline" asChild className={cn("bg-primary text-primary-foreground hover:bg-primary/80 hover:text-primary-foreground", className)}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <Globe className="h-5 w-5 mr-2" />
        <div>
          <p className="text-sm font-semibold">Acessar Versão Web</p>
          <p className="text-xs font-normal">(PWA)</p>
        </div>
      </a>
    </Button>
  );
}

export function PlayStoreButton({ href, className }: { href: string, className?: string }) {
  return (
    <Button variant="outline" asChild className={cn("bg-black text-white hover:bg-black/80 hover:text-white", className)}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <PlayStoreIcon className="h-5 w-5 mr-2 fill-current" />
        <div>
          <p className="text-xs">Disponível no</p>
          <p className="text-sm font-semibold">Google Play</p>
        </div>
      </a>
    </Button>
  );
}
