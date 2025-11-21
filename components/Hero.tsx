import { Translations } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  translations: Translations['hero'];
  waitlistUrl: string;
}

export default function Hero({ translations, waitlistUrl }: HeroProps) {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-primary-100/50 rounded-full blur-3xl opacity-30 animate-pulse-slow" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-accent-100/40 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-8"
            >
              <Sparkles className="w-4 h-4" />
              <span>{translations.dailyInspiration}</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight tracking-tight">
              {translations.headline}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {translations.subheadline}
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={waitlistUrl}
              className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/20"
            >
              {translations.cta}
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-square">
              {/* Floating Cards */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-primary-400 to-primary-600 rounded-3xl shadow-xl flex items-center justify-center p-6 z-20"
              >
                <p className="text-white font-medium text-center">{translations.morningBoost}</p>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-br from-accent-400 to-accent-600 rounded-3xl shadow-xl flex items-center justify-center p-6 z-10"
              >
                <p className="text-white font-medium text-center">{translations.personalMessage}</p>
              </motion.div>

              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white dark:bg-gray-800 rounded-2xl shadow-lg flex items-center justify-center p-4 z-30"
              >
                <Sparkles className="w-12 h-12 text-primary-500" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


