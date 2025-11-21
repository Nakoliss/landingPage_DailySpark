import Image from 'next/image';
import { Translations, Language } from '@/lib/i18n';
import { motion } from 'framer-motion';

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
      en: "Your potential is limitless, stop doubting! Face every obstacle with unwavering courage and exceed your own limits. Ambition burns within you: seize it, transform it into concrete action. The first step, even the smallest, is the trigger for all success. Don't wait any longer: jump in, achieve the extraordinary and forge your destiny NOW!",
      fr: '',
    },
    imagePath: '/images/dailyspark-inspirational.png',
  },
  {
    tone: 'Motivational',
    language: 'EN',
    message: {
      en: "Never forget that every challenge is an opportunity to grow, revealing your inner strength. Your resilience is a superpower, capable of overcoming many storms. Take a moment to breathe, find your inner haven of peace and recenter yourself. Cultivate positivity, for it lights your path and nourishes your infinite potential. You have everything you need within you to flourish.",
      fr: '',
    },
    imagePath: '/images/dailyspark-motivational.png',
  },
  {
    tone: 'Philosophical',
    language: 'EN',
    message: {
      en: "Do not confuse the passing of time with the reality that remains. Every moment is a portal to a vaster understanding, if only you dare to undo the habitual veils. Depth is not in the accumulated, but in the clarity of the gaze. Your being is the mirror where the universe contemplates itself, simple and infinite.",
      fr: '',
    },
    imagePath: '/images/dailyspark-philosophical.png',
  },
];

const examplesFR: ExampleTile[] = [
  {
    tone: 'Inspirational',
    language: 'FR',
    message: {
      en: '',
      fr: "Votre potentiel est illimité, arrêtez de douter ! Affrontez chaque obstacle avec un courage inébranlable et dépassez vos propres limites. L'ambition brûle en vous : saisissez-la, transformez-la en action concrète. Le premier pas, même le plus infime, est le déclencheur de tout succès. N'attendez plus : lancez-vous, réalisez l'extraordinaire et forgez votre destinée MAINTENANT !",
    },
    imagePath: '/images/dailyspark-inspirational.png',
  },
  {
    tone: 'Motivational',
    language: 'FR',
    message: {
      en: '',
      fr: "N'oublie jamais que chaque défi est une opportunité de grandir, révélant ta force intérieure. Ta résilience est un super-pouvoir, capable de surmonter bien des tempêtes. Prends un instant pour respirer, trouver ton havre de paix intérieur et te recentrer. Cultive la positivité, car elle éclaire ton chemin et nourrit ton potentiel infini. Tu as tout ce qu'il faut en toi pour t'épanouir.",
    },
    imagePath: '/images/dailyspark-motivational.png',
  },
  {
    tone: 'Philosophical',
    language: 'FR',
    message: {
      en: '',
      fr: "Ne confonds pas le temps qui passe avec la réalité qui demeure. Chaque instant est un portail vers une compréhension plus vaste, si seulement tu oses en défaire les voiles habituels. La profondeur n'est pas dans l'accumulé, mais dans la clarté du regard. Ton être est le miroir où l'univers se contemple, simple et infini.",
    },
    imagePath: '/images/dailyspark-philosophical.png',
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
  const examples = currentLang === 'en' ? examplesEN : examplesFR;

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {translations.title}
          </h2>
          <div className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {examples.map((tile, index) => (
            <div key={index} className="flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative rounded-3xl overflow-hidden aspect-[4/5] shadow-xl"
              >
                <Image
                  src={tile.imagePath}
                  alt={`${tile.tone} example - ${tile.language}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />

                <div className="absolute top-4 left-0 right-0 flex justify-center z-10">
                  <span className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-medium border border-white/20 shadow-lg tracking-wide">
                    {toneTranslations[currentLang][tile.tone]}
                  </span>
                </div>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2 }}
                className="text-gray-600 dark:text-gray-300 text-center text-lg font-medium leading-relaxed px-2"
              >
                "{tile.message[currentLang === 'en' ? 'en' : 'fr'] || tile.message.en}"
              </motion.p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

