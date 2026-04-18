'use client';

import { useTranslations } from '@/hooks/use-translations';
import { LanguageToggle } from '@/components/language-toggle';

export function LanguageDemo() {
  const t = useTranslations();

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-cyan-400">{t('title')}</h1>
          <p className="text-cyan-500">{t('subtitle')}</p>
        </div>
        <LanguageToggle />
      </div>
      
      <div className="bg-slate-900 rounded-lg p-4 mb-6 border border-cyan-500/20">
        <p className="text-slate-300">{t('description')}</p>
      </div>

      <div className="grid gap-4">
        <div className="bg-slate-800 rounded p-3 border border-cyan-500/10">
          <span className="text-cyan-400 font-mono text-sm">home:</span>
          <span className="ml-2 text-slate-300">{t('home')}</span>
        </div>
        <div className="bg-slate-800 rounded p-3 border border-cyan-500/10">
          <span className="text-cyan-400 font-mono text-sm">about:</span>
          <span className="ml-2 text-slate-300">{t('about')}</span>
        </div>
        <div className="bg-slate-800 rounded p-3 border border-cyan-500/10">
          <span className="text-cyan-400 font-mono text-sm">community:</span>
          <span className="ml-2 text-slate-300">{t('community')}</span>
        </div>
      </div>
    </div>
  );
}
