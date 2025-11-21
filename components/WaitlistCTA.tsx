'use client';

import { Translations } from '@/lib/i18n';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

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
      window.location.href = waitlistUrl;
    } else {
      setIsValid(false);
    }
  };

  return (
    <section id="waitlist" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-primary-900">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-900/0 via-primary-900/50 to-primary-900" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary-800 to-primary-900 rounded-3xl p-8 md:p-16 shadow-2xl border border-primary-700/50 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 relative z-10">
            {translations.title}
          </h2>
          <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto relative z-10">
            {translations.subtitle}
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto relative z-10">
            <div className="flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setIsValid(true);
                }}
                placeholder={translations.emailPlaceholder}
                className={`w-full px-6 py-4 rounded-xl bg-white/10 border ${!isValid ? 'border-red-400' : 'border-white/20'
                  } text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary-400 backdrop-blur-sm transition-all`}
                aria-label={translations.emailPlaceholder}
                required
              />
              {!isValid && (
                <p className="mt-2 text-sm text-red-300 text-left pl-2">Please enter a valid email address.</p>
              )}
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="px-8 py-4 rounded-xl bg-white text-primary-900 font-bold hover:bg-primary-50 transition-colors shadow-lg flex items-center justify-center gap-2"
            >
              {translations.button}
              <Send className="w-4 h-4" />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}


