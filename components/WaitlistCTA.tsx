'use client';

import { Translations } from '@/lib/i18n';
import { motion } from 'framer-motion';
import TallyEmbed from './TallyEmbed';

interface WaitlistCTAProps {
  translations: Translations['waitlist'];
  waitlistUrl: string;
}

export default function WaitlistCTA({ translations, waitlistUrl }: WaitlistCTAProps) {



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

          <div className="relative z-10">
            <TallyEmbed
              embedUrl={process.env.NEXT_PUBLIC_WAITLIST_EMBED_URL || ''}
              fallbackUrl={process.env.NEXT_PUBLIC_WAITLIST_FALLBACK_URL || '#'}
              fallbackButtonText={translations.button}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}


