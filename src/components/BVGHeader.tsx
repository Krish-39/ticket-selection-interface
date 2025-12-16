import type { Language } from '../App';

interface BVGHeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

const translations = {
  de: {
    title: 'Fahrschein kaufen',
    subtitle: 'Wählen Sie Ihren Tarifbereich',
  },
  en: {
    title: 'Buy Ticket',
    subtitle: 'Choose your fare zone',
  },
  fr: {
    title: 'Acheter un billet',
    subtitle: 'Choisissez votre zone tarifaire',
  },
  es: {
    title: 'Comprar billete',
    subtitle: 'Elija su zona tarifaria',
  },
};

const languages = [
  { code: 'de' as Language, flag: '🇩🇪', name: 'Deutsch' },
  { code: 'en' as Language, flag: '🇬🇧', name: 'English' },
  { code: 'fr' as Language, flag: '🇫🇷', name: 'Français' },
  { code: 'es' as Language, flag: '🇪🇸', name: 'Español' },
];

export function BVGHeader({ language, onLanguageChange }: BVGHeaderProps) {
  const t = translations[language];

  return (
    <header className="bg-[#ffcc00] px-6 py-3 border-b-4 border-[#e6b800]">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-[50px] h-[50px] bg-[#333] rounded-lg flex items-center justify-center">
          <span className="text-xl tracking-tight text-[#ffcc00]">BVG</span>
        </div>
        <div>
          <h1 className="text-[22px] text-[#333] m-0 leading-tight">{t.title}</h1>
          <p className="text-sm text-[#666] m-0">{t.subtitle}</p>
        </div>
      </div>
      
      <div className="flex gap-1.5 flex-wrap">
        {languages.map(lang => (
          <button
            key={lang.code}
            onClick={() => onLanguageChange(lang.code)}
            className={`px-2.5 py-1.5 rounded-full text-[11px] transition-all ${
              language === lang.code
                ? 'bg-[#333] text-[#ffcc00] border-2 border-[#333]'
                : 'bg-white/20 text-[#333] border border-white/30 hover:bg-white/30'
            }`}
          >
            {lang.flag} {lang.name}
          </button>
        ))}
      </div>
    </header>
  );
}