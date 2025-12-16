import type { Language } from '../App';

interface TransportStripProps {
  language: Language;
}

const translations = {
  de: {
    message: 'Gültig für alle Verkehrsmittel im VBB-Gebiet',
    modes: ['U-Bahn', 'S-Bahn', 'Bus', 'Tram', 'Fähre'],
  },
  en: {
    message: 'Valid for all modes of transport in the VBB area',
    modes: ['U-Bahn', 'S-Bahn', 'Bus', 'Tram', 'Ferry'],
  },
  fr: {
    message: 'Valable pour tous les moyens de transport dans la zone VBB',
    modes: ['U-Bahn', 'S-Bahn', 'Bus', 'Tram', 'Ferry'],
  },
  es: {
    message: 'Válido para todos los medios de transporte en el área VBB',
    modes: ['U-Bahn', 'S-Bahn', 'Bus', 'Tram', 'Ferry'],
  },
};

export function TransportStrip({ language }: TransportStripProps) {
  const t = translations[language];

  const transportIcons = [
    {
      name: t.modes[0], // U-Bahn
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-5 h-5">
          <rect x="3" y="6" width="18" height="12" rx="2" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <circle cx="7" cy="15" r="1" fill="white" />
          <circle cx="17" cy="15" r="1" fill="white" />
        </svg>
      ),
    },
    {
      name: t.modes[1], // S-Bahn
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-5 h-5">
          <rect x="4" y="6" width="16" height="12" rx="2" />
          <line x1="4" y1="10" x2="20" y2="10" />
          <circle cx="8" cy="15" r="1" fill="white" />
          <circle cx="16" cy="15" r="1" fill="white" />
          <line x1="12" y1="6" x2="12" y2="3" />
        </svg>
      ),
    },
    {
      name: t.modes[2], // Bus
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-5 h-5">
          <rect x="5" y="7" width="14" height="11" rx="2" />
          <line x1="5" y1="11" x2="19" y2="11" />
          <circle cx="9" cy="15" r="1" fill="white" />
          <circle cx="15" cy="15" r="1" fill="white" />
        </svg>
      ),
    },
    {
      name: t.modes[3], // Tram
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-5 h-5">
          <rect x="6" y="8" width="12" height="10" rx="1" />
          <line x1="6" y1="12" x2="18" y2="12" />
          <circle cx="10" cy="15" r="1" fill="white" />
          <circle cx="14" cy="15" r="1" fill="white" />
          <line x1="12" y1="8" x2="12" y2="5" />
          <line x1="10" y1="5" x2="14" y2="5" />
        </svg>
      ),
    },
    {
      name: t.modes[4], // Fähre/Ferry
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-5 h-5">
          <path d="M3 12 Q3 8, 6 6 L18 6 Q21 8, 21 12 L21 16 Q21 18, 19 18 L5 18 Q3 18, 3 16 Z" />
          <line x1="7" y1="12" x2="17" y2="12" />
          <circle cx="8" cy="15" r="0.5" fill="white" />
          <circle cx="16" cy="15" r="0.5" fill="white" />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-[#333] text-white p-3 mb-4 text-center text-xs">
      <div className="mb-2 text-[11px]">{t.message}</div>
      <div className="flex justify-center gap-3 flex-wrap">
        {transportIcons.map((mode, index) => (
          <div
            key={index}
            className="flex items-center gap-1.5 bg-white/10 px-2 py-1 rounded-full text-[10px]"
          >
            {mode.icon}
            <span>{mode.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}