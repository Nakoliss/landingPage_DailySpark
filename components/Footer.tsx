import { Translations } from '@/lib/i18n';

interface FooterProps {
  translations: Translations['footer'];
}

export default function Footer({ translations }: FooterProps) {
  return (
    <footer className="py-12 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-accent-600">
              DailySpark
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">© {new Date().getFullYear()}</span>
          </div>

          <nav className="flex gap-8 text-sm font-medium">
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              {translations.privacy}
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              {translations.terms}
            </a>
          </nav>

          <p className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
            {translations.betaNote}
          </p>
        </div>
      </div>
    </footer>
  );
}


