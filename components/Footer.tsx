import { Translations } from '@/lib/i18n';

interface FooterProps {
  translations: Translations['footer'];
}

export default function Footer({ translations }: FooterProps) {
  return (
    <footer className="py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <nav className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {translations.privacy}
            </a>
            <span className="text-gray-400 dark:text-gray-600">·</span>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {translations.terms}
            </a>
          </nav>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {translations.betaNote}
          </p>
        </div>
      </div>
    </footer>
  );
}

