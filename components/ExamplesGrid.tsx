import Image from 'next/image';
import { Translations, Language } from '@/lib/i18n';

interface ExamplesGridProps {
  translations: Translations['examples'];
  currentLang: Language;
}

interface ExampleTile {
  tone: string;
  language: string;
  message: {
    en: string;
    fr: string;
  };
  imagePath: string;
}

const examplesEN: ExampleTile[] = [
  {
    tone: 'Inspirational',
    language: 'EN',
    message: {
      en: 'Good morning! Today is going to be a great day. You\'ve got this!',
      fr: '',
    },
    imagePath: '/images/dailyspark-inspirational-en-1763655848726.jpg',
  },
  {
    tone: 'Motivational',
    language: 'EN',
    message: {
      en: 'Every step forward counts. Keep pushing, keep growing. Your future self will thank you.',
      fr: '',
    },
    imagePath: '/images/dailyspark-motivational-en-1763655785907.jpg',
  },
  {
    tone: 'Philosophical',
    language: 'EN',
    message: {
      en: 'Take a moment to breathe. Today is a fresh start, a blank page waiting for your story.',
      fr: '',
    },
    imagePath: '/images/dailyspark-philosophical-en-1763655824890.jpg',
  },
];

const examplesFR: ExampleTile[] = [
  {
    tone: 'Inspirational',
    language: 'FR',
    message: {
      en: '',
      fr: 'Bonjour! Aujourd\'hui sera une excellente journée. Tu peux le faire!',
    },
    imagePath: '/images/dailyspark-inspirational-fr-1763655862038.jpg',
  },
  {
    tone: 'Motivational',
    language: 'FR',
    message: {
      en: '',
      fr: 'Chaque pas en avant compte. Continue d\'avancer, continue de grandir. Ton futur toi te remerciera.',
    },
    imagePath: '/images/dailyspark-motivational-fr-1763655920168.jpg',
  },
  {
    tone: 'Philosophical',
    language: 'FR',
    message: {
      en: '',
      fr: 'Prends un moment pour respirer. Aujourd\'hui est un nouveau départ, une page blanche qui attend ton histoire.',
    },
    imagePath: '/images/dailyspark-philosophical-fr-1763655896381.jpg',
  },
];

const toneTranslations: Record<Language, Record<string, string>> = {
  en: {
    Inspirational: 'Inspirational',
    Motivational: 'Motivational',
    Philosophical: 'Philosophical',
  },
  fr: {
    Inspirational: 'Inspirant',
    Motivational: 'Motivant',
    Philosophical: 'Philosophique',
  },
};

export default function ExamplesGrid({ translations, currentLang }: ExamplesGridProps) {
  // Show EN examples for English page, FR examples for French page
  const examples = currentLang === 'en' ? examplesEN : examplesFR;

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          {translations.title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {examples.map((tile, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-lg hover:shadow-xl transition-shadow"
            >
              <Image
                src={tile.imagePath}
                alt={`${tile.tone} example - ${tile.language}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                unoptimized
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <div className="flex justify-between items-center text-white text-xs">
                  <span className="font-semibold">{toneTranslations[currentLang][tile.tone]}</span>
                  <span className="opacity-90">{tile.language}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

