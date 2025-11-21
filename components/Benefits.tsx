import { Translations } from '@/lib/i18n';

interface BenefitsProps {
  translations: Translations['benefits'];
}

export default function Benefits({ translations }: BenefitsProps) {
  return (
    <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          {translations.title}
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {translations.items.map((item, index) => (
            <li
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full" />
                </div>
                <p className="ml-4 text-gray-700 dark:text-gray-300 text-lg">{item}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}


