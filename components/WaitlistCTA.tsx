'use client';

import { Translations } from '@/lib/i18n';
import { useState } from 'react';

interface WaitlistCTAProps {
  translations: Translations['waitlist'];
  waitlistUrl: string;
}

export default function WaitlistCTA({ translations, waitlistUrl }: WaitlistCTAProps) {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(email)) {
      setIsValid(true);
      // TODO: Replace with actual Tally/Typeform/ConvertKit URL
      // For now, redirect to placeholder
      window.location.href = waitlistUrl;
    } else {
      setIsValid(false);
    }
  };

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {translations.title}
          </h2>
          <p className="text-lg text-indigo-100 mb-8">
            {translations.subtitle}
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setIsValid(true);
              }}
              placeholder={translations.emailPlaceholder}
              className={`flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white ${
                !isValid ? 'ring-2 ring-red-300' : ''
              }`}
              aria-label={translations.emailPlaceholder}
              required
            />
            <button
              type="submit"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
            >
              {translations.button}
            </button>
          </form>
          {!isValid && (
            <p className="mt-4 text-sm text-red-200">Please enter a valid email address.</p>
          )}
        </div>
      </div>
    </section>
  );
}

