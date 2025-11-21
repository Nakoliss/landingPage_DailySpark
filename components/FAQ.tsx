import { Translations } from '@/lib/i18n';

interface FAQProps {
  translations: Translations['faq'];
}

export default function FAQ({ translations }: FAQProps) {
  return (
    <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          {translations.title}
        </h2>
        <dl className="space-y-8">
          {translations.items.map((item, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <dt className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {item.question}
              </dt>
              <dd className="text-gray-600 dark:text-gray-300">
                {item.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}


