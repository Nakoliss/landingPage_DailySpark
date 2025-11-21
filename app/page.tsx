'use client';

import { useState, useEffect } from 'react';
import { Language, translations } from '@/lib/i18n';
import LanguageToggle from '@/components/LanguageToggle';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import ExamplesGrid from '@/components/ExamplesGrid';
import FAQ from '@/components/FAQ';
import WaitlistCTA from '@/components/WaitlistCTA';
import Footer from '@/components/Footer';

// TODO: Replace this placeholder URL with your actual Tally/Typeform/ConvertKit form URL
const WAITLIST_URL = '#waitlist';

export default function Home() {
  const [lang, setLang] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.lang = lang;
    }
  }, [lang, mounted]);

  const t = translations[lang];

  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-end">
            <LanguageToggle
              currentLang={lang}
              onToggle={setLang}
              translations={t.languageToggle}
            />
          </div>
        </div>
      </header>

      <Hero translations={t.hero} waitlistUrl={WAITLIST_URL} />
      <Benefits translations={t.benefits} />
      <ExamplesGrid translations={t.examples} currentLang={lang} />
      <FAQ translations={t.faq} />
      <WaitlistCTA translations={t.waitlist} waitlistUrl={WAITLIST_URL} />
      <Footer translations={t.footer} />
    </main>
  );
}


