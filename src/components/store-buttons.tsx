import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const PlayStoreIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" {...props}>
    <path d="M24,14.3,9.4,5.05a2,2,0,0,0-2,1.74V25.22a2,2,0,0,0,2,1.73L24,21.7a2,2,0,0,0,0-3.46l-6.3-3.63,6.3-3.64A2,2,0,0,0,24,14.3Z" />
    <path d="M9.4,5.05,20.89,12,9.4,18.89Z" />
    <path d="m9.4,26.95,11.5-6.6-11.5-6.88Z" />
  </svg>
);

const AppleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 3c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 12.72 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
    <path d="M10 2c1 .5 2 2 2 5" />
  </svg>
);

const AndroidIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M17 18c0 2.2-1.8 4-4 4s-4-1.8-4-4V6" />
    <path d="M13 6V4c0-1.1-.9-2-2-2s-2 .9-2 2v2" />
    <path d="M13 18H7" />
    <path d="M11 6h2" />
    <path d="M7 10v0" />
    <path d="M17 10v0" />
  </svg>
);

const WindowsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21.78 6.25 10.5 3.33a1 1 0 0 0-.62 0L2.22 6.25A1 1 0 0 0 1.5 7.17v9.66a1 1 0 0 0 .72.96l7.66 2.92a1 1 0 0 0 .62 0l8.28-3.17a1 1 0 0 0 .72-1V7.17a1 1 0 0 0-.72-.92Z" />
    <path d="m10.5 16.5-8-3" />
    <path d="M10.5 3.5v13" />
    <path d="M21.5 6.5-10.5 13" />
  </svg>
);

export function PwaButton({ href, className }: { href: string, className?: string }) {
  return (
    <Button variant="outline" asChild className={cn("bg-primary text-primary-foreground hover:bg-primary/80 hover:text-primary-foreground", className)}>
      <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
        <div className="flex -space-x-2">
          <AppleIcon className="h-5 w-5" />
          <AndroidIcon className="h-5 w-5" />
          <WindowsIcon className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm font-semibold">Acessar o App</p>
          <p className="text-xs font-normal text-left">(PWA)</p>
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