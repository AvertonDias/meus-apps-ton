'use client'

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { FaApple, FaAndroid, FaWindows } from 'react-icons/fa';
import { IoLogoGooglePlaystore } from 'react-icons/io5';

export function PwaButton({ href, className }: { href: string, className?: string }) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Button 
        variant="default" 
        asChild 
        className={cn(
          "h-16 px-6 bg-blue-600 hover:bg-blue-500 text-white border-none rounded-2xl shadow-lg shadow-blue-600/20 transition-all", 
          className
        )}
      >
        <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
          <div className="flex -space-x-2 group-hover:space-x-1 transition-all">
             <div className="p-1.5 bg-white/10 rounded-lg backdrop-blur-md border border-white/20">
                <FaApple className="h-5 w-5" />
             </div>
             <div className="p-1.5 bg-white/10 rounded-lg backdrop-blur-md border border-white/20">
                <FaAndroid className="h-5 w-5" />
             </div>
             <div className="p-1.5 bg-white/10 rounded-lg backdrop-blur-md border border-white/20">
                <FaWindows className="h-5 w-5" />
             </div>
          </div>
          <div className="flex flex-col items-start leading-tight">
            <span className="text-[10px] uppercase tracking-widest opacity-80 font-bold">Acesso Direto</span>
            <span className="text-base font-bold">Abrir Web App</span>
          </div>
        </a>
      </Button>
    </motion.div>
  );
}

export function PlayStoreButton({ href, className }: { href: string, className?: string }) {
  const isComingSoon = href === "#" || !href;

  return (
    <div className="relative group">
      <motion.div 
        whileHover={!isComingSoon ? { scale: 1.02 } : {}} 
        whileTap={!isComingSoon ? { scale: 0.98 } : {}}
      >
        <Button
          variant="outline"
          asChild={!isComingSoon}
          disabled={isComingSoon}
          className={cn(
            "h-16 px-6 rounded-2xl border-2 transition-all flex items-center gap-3",
            isComingSoon 
              ? "bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-slate-800 opacity-60 cursor-not-allowed" 
              : "bg-black text-white border-black hover:bg-zinc-800 hover:border-zinc-800 shadow-xl",
            className
          )}
        >
          {isComingSoon ? (
            <div className="flex items-center gap-3">
              <IoLogoGooglePlaystore className="h-7 w-7 text-slate-400" />
              <div className="flex flex-col items-start leading-tight text-slate-400">
                <span className="text-[10px] uppercase font-bold tracking-wider">Disponível em breve</span>
                <span className="text-base font-bold">Google Play</span>
              </div>
            </div>
          ) : (
            <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
              <IoLogoGooglePlaystore className="h-7 w-7" />
              <div className="flex flex-col items-start leading-tight">
                <span className="text-[10px] uppercase font-bold tracking-wider opacity-80">Download no</span>
                <span className="text-base font-bold">Google Play</span>
              </div>
            </a>
          )}
        </Button>
      </motion.div>

      {/* Badge de "Em Breve" Refinado */}
      {isComingSoon && (
        <div className="absolute -top-3 -right-2 z-10">
          <span className="flex h-6 items-center rounded-full bg-blue-600 px-3 text-[10px] font-black uppercase tracking-tighter text-white shadow-lg ring-2 ring-white dark:ring-slate-950">
            Coming Soon
          </span>
        </div>
      )}
    </div>
  );
}
