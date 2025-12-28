
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { FaApple, FaAndroid, FaWindows } from 'react-icons/fa';
import { IoLogoGooglePlaystore } from 'react-icons/io5';


export function PwaButton({ href, className }: { href: string, className?: string }) {
  return (
    <Button variant="outline" asChild className={cn("bg-primary text-primary-foreground hover:bg-primary/80 hover:text-primary-foreground", className)}>
      <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
        <div className="flex gap-2">
          <FaApple className="h-5 w-5" />
          <FaAndroid className="h-5 w-5" />
          <FaWindows className="h-5 w-5" />
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
  const isComingSoon = href === "#";

  return (
    <div className="relative">
      <Button
        variant="outline"
        asChild={!isComingSoon}
        disabled={isComingSoon}
        className={cn(
          "bg-black text-white",
          isComingSoon 
            ? "filter grayscale opacity-50 cursor-not-allowed" 
            : "hover:bg-black/80 hover:text-white",
          className
        )}
      >
        <a href={isComingSoon ? undefined : href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
          <IoLogoGooglePlaystore className="h-6 w-6" />
          <div>
            <p className="text-xs text-left">Disponível no</p>
            <p className="text-sm font-semibold text-left">Google Play</p>
          </div>
        </a>
      </Button>
      {isComingSoon && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="transform -rotate-[15deg] bg-red-600/30 text-white font-bold py-1 px-4 rounded-md border-2 border-white/80 text-lg">
            Em Breve
          </span>
        </div>
      )}
    </div>
  );
}
