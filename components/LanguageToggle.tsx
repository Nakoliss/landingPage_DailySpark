'use client';

import { Language } from '@/lib/i18n';

interface LanguageToggleProps {
  currentLang: Language;
  onToggle: (lang: Language) => void;
  translations: {
    en: string;
    fr: string;
  };
}

export default function LanguageToggle({ currentLang, onToggle, translations }: LanguageToggleProps) {
  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={() => onToggle('en')}
        className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
          currentLang === 'en'
            ? 'bg-indigo-600 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
        }`}
        aria-label="Switch to English"
        aria-pressed={currentLang === 'en'}
      >
        {translations.en}
      </button>
      <button
        type="button"
        onClick={() => onToggle('fr')}
        className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
          currentLang === 'fr'
            ? 'bg-indigo-600 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
        }`}
        aria-label="Switch to French"
        aria-pressed={currentLang === 'fr'}
      >
        {translations.fr}
      </button>
    </div>
  );
}

