import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const AppStoreIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" {...props}>
    <path d="M22.68,10.32a6.32,6.32,0,0,0-4.88-3,6.1,6.1,0,0,0-5.7,3.31,10.74,10.74,0,0,0-2,7.31,8.38,8.38,0,0,0,4.41,6.56,3.62,3.62,0,0,0,2.16.66,3.56,3.56,0,0,0,2.33-.81,3.39,3.39,0,0,0,.86-2.3,13,13,0,0,1-2.47-.79,3.78,3.78,0,0,1-1.63-3.34,5.43,5.43,0,0,1,2.81-4.83,5.06,5.06,0,0,1,1.88-.69,1.39,1.39,0,0,1,.84.07,1.14,1.14,0,0,0,1.2-.82A6.16,6.16,0,0,0,22.68,10.32ZM16.3,6.78a3.11,3.11,0,0,1,1.86-2.58,3.3,3.3,0,0,1,3.23,1.3,3.08,3.08,0,0,1-1.74,2.68A3.33,3.33,0,0,1,16.3,6.78Z" />
  </svg>
);

const PlayStoreIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" {...props}>
    <path d="M24,14.3,9.4,5.05a2,2,0,0,0-2,1.74V25.22a2,2,0,0,0,2,1.73L24,21.7a2,2,0,0,0,0-3.46l-6.3-3.63,6.3-3.64A2,2,0,0,0,24,14.3Z" />
    <path d="M9.4,5.05,20.89,12,9.4,18.89Z" />
    <path d="m9.4,26.95,11.5-6.6-11.5-6.88Z" />
  </svg>
);

export function AppStoreButton({ href, className }: { href: string, className?: string }) {
  return (
    <Button variant="outline" asChild className={cn("bg-black text-white hover:bg-black/80 hover:text-white", className)}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <AppStoreIcon className="h-6 w-6 mr-2 fill-current" />
        <div>
          <p className="text-xs">Download na</p>
          <p className="text-sm font-semibold">App Store</p>
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
