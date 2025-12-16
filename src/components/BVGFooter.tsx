import type { Language } from '../App';

interface BVGFooterProps {
  language: Language;
}

const translations = {
  de: 'Berliner Verkehrsbetriebe (BVG) • Verkehrsverbund Berlin-Brandenburg (VBB)',
  en: 'Berlin Public Transport (BVG) • Berlin-Brandenburg Transport Association (VBB)',
  fr: 'Transports publics de Berlin (BVG) • Association des transports Berlin-Brandebourg (VBB)',
  es: 'Transporte público de Berlín (BVG) • Asociación de transporte Berlín-Brandeburgo (VBB)',
};

export function BVGFooter({ language }: BVGFooterProps) {
  return (
    <footer className="bg-[#333] text-white px-6 py-2 text-center text-[10px]">
      {translations[language]}
    </footer>
  );
}