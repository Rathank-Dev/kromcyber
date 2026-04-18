'use client';

import { useLanguage } from '@/components/language-provider';
import { getTranslation, type TranslationKey } from '@/lib/translations';

export function useTranslations() {
  const { language } = useLanguage();

  return (key: TranslationKey): string => {
    return getTranslation(language, key);
  };
}
