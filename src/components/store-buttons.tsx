import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const PlayStoreIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" width="24" height="24" {...props}>
    <path fill="#00d8ff" d="M28.8,14.53,5.4,0.27A2.3,2.3,0,0,0,2,2.25V29.75a2.3,2.3,0,0,0,3.4,2L28.8,17.47a2.31,2.31,0,0,0,0-2.94Z" />
    <path fill="#00a0ff" d="M2,29.75,17.6,16,2,2.25Z" />
    <path fill="#ffc928" d="m22.8,18.52-5.2-5.22-9-8.75L2,2.25V29.75l6.58-6.38Z" />
    <path fill="#f25522" d="M22.8,13.3,17.6,16l-5.2,5.22L10.9,19.7,28.8,14.53Z" />
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
          <p className="text-xs font-normal text-left">(Multiplataforma)</p>
        </div>
      </a>
    </Button>
  );
}

export function PlayStoreButton({ href, className }: { href: string, className?: string }) {
  return (
    <Button variant="outline" asChild className={cn("bg-black text-white hover:bg-black/80 hover:text-white", className)}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <PlayStoreIcon className="h-5 w-5 mr-2" />
        <div>
          <p className="text-xs">Disponível no</p>
          <p className="text-sm font-semibold">Google Play</p>
        </div>
      </a>
    </Button>
  );
}
