import { Translations } from '@/lib/i18n';

interface HeroProps {
  translations: Translations['hero'];
  waitlistUrl: string;
}

export default function Hero({ translations, waitlistUrl }: HeroProps) {
  return (
    <section className="py-12 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {translations.headline}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              {translations.subheadline}
            </p>
            <a
              href={waitlistUrl}
              className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
            >
              {translations.cta}
            </a>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="grid grid-cols-2 gap-4 max-w-md">
              <div className="bg-gradient-to-br from-indigo-400 to-purple-500 rounded-2xl p-6 aspect-square flex items-center justify-center shadow-lg">
                <p className="text-white text-sm font-medium text-center">Morning Boost</p>
              </div>
              <div className="bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl p-6 aspect-square flex items-center justify-center shadow-lg mt-8">
                <p className="text-white text-sm font-medium text-center">Personal Message</p>
              </div>
              <div className="bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl p-6 aspect-square flex items-center justify-center shadow-lg">
                <p className="text-white text-sm font-medium text-center">Abstract Art</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

