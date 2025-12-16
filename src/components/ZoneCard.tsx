import type { Language } from '../App';
import { Check } from 'lucide-react';

interface ZoneCardProps {
  zone: 'ab' | 'bc' | 'abc';
  title: string;
  description: string;
  price: string;
  selected: boolean;
  onSelect: () => void;
  onShowMap: () => void;
  language: Language;
}

const zoneIncludes = {
  de: {
    ab: {
      title: 'Umfasst:',
      items: [
        'Berliner Innenstadt (S-Bahn-Ring)',
        'Alexanderplatz, Brandenburger Tor',
        'Hauptbahnhof, Potsdamer Platz',
        'Die meisten Sehenswürdigkeiten',
      ],
    },
    bc: {
      title: 'Umfasst:',
      items: [
        'Berliner Außenbezirke',
        'Potsdam (Schloss Sanssouci)',
        'Schönefeld Flughafen-Bereich',
        'Brandenburg Region',
      ],
    },
    abc: {
      title: 'Umfasst:',
      items: [
        'Gesamtes Berlin (A+B)',
        'Alle Umlandbereiche (C)',
        'BER Flughafen',
        'Komplette Reisefreiheit',
      ],
    },
  },
  en: {
    ab: {
      title: 'Includes:',
      items: [
        'Berlin city center (S-Bahn Ring)',
        'Alexanderplatz, Brandenburg Gate',
        'Central Station, Potsdamer Platz',
        'Most attractions',
      ],
    },
    bc: {
      title: 'Includes:',
      items: [
        'Berlin outer districts',
        'Potsdam (Sanssouci Palace)',
        'Schönefeld Airport area',
        'Brandenburg region',
      ],
    },
    abc: {
      title: 'Includes:',
      items: [
        'All of Berlin (A+B)',
        'All surrounding areas (C)',
        'BER Airport',
        'Complete travel freedom',
      ],
    },
  },
  fr: {
    ab: {
      title: 'Comprend:',
      items: [
        'Centre-ville de Berlin (S-Bahn Ring)',
        'Alexanderplatz, Porte de Brandebourg',
        'Gare centrale, Potsdamer Platz',
        'La plupart des attractions',
      ],
    },
    bc: {
      title: 'Comprend:',
      items: [
        'Quartiers périphériques de Berlin',
        'Potsdam (Château de Sanssouci)',
        'Zone de l\'aéroport de Schönefeld',
        'Région du Brandebourg',
      ],
    },
    abc: {
      title: 'Comprend:',
      items: [
        'Tout Berlin (A+B)',
        'Toutes les zones environnantes (C)',
        'Aéroport BER',
        'Liberté de voyage complète',
      ],
    },
  },
  es: {
    ab: {
      title: 'Incluye:',
      items: [
        'Centro de Berlín (S-Bahn Ring)',
        'Alexanderplatz, Puerta de Brandenburgo',
        'Estación Central, Potsdamer Platz',
        'La mayoría de las atracciones',
      ],
    },
    bc: {
      title: 'Incluye:',
      items: [
        'Distritos exteriores de Berlín',
        'Potsdam (Palacio de Sanssouci)',
        'Área del aeropuerto de Schönefeld',
        'Región de Brandeburgo',
      ],
    },
    abc: {
      title: 'Incluye:',
      items: [
        'Todo Berlín (A+B)',
        'Todas las áreas circundantes (C)',
        'Aeropuerto BER',
        'Libertad de viaje completa',
      ],
    },
  },
};

const mapButtonText = {
  de: '🗺️ Karte anzeigen',
  en: '🗺️ Show map',
  fr: '🗺️ Afficher la carte',
  es: '🗺️ Mostrar mapa',
};

export function ZoneCard({ zone, title, description, price, selected, onSelect, onShowMap, language }: ZoneCardProps) {
  const includes = zoneIncludes[language][zone];

  return (
    <div
      onClick={onSelect}
      className={`bg-white border-2 rounded-lg p-3 cursor-pointer transition-all relative ${
        selected
          ? 'border-[#ffcc00] bg-[#fffef0] shadow-[0_4px_12px_rgba(255,204,0,0.3)]'
          : 'border-[#ddd] hover:border-[#ffcc00] hover:shadow-[0_4px_12px_rgba(255,204,0,0.2)]'
      }`}
    >
      {selected && (
        <div className="absolute top-2 right-2 w-5 h-5 bg-[#ffcc00] rounded-full flex items-center justify-center border-2 border-[#333]">
          <Check className="w-3 h-3 text-[#333]" strokeWidth={3} />
        </div>
      )}

      <div className="flex justify-between items-start mb-2">
        <div className="flex-1">
          <h2 className="text-[18px] text-[#333] m-0 mb-0.5 leading-tight">{title}</h2>
          <p className="text-[11px] text-[#666] m-0">{description}</p>
        </div>
        <div className="bg-[#333] text-white px-2 py-1 rounded text-sm ml-2 whitespace-nowrap">
          {price}
        </div>
      </div>

      <div className="w-full h-24 my-2 border border-[#eee] rounded overflow-hidden bg-[#f9f9f9]">
        <ZoneMapSVG zone={zone} />
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onShowMap();
        }}
        className="w-full py-2 bg-[#f8f9fa] border border-[#ddd] rounded text-[11px] text-[#333] hover:bg-[#e9ecef] hover:border-[#adb5bd] transition-all my-2"
      >
        {mapButtonText[language]}
      </button>

      <div className="text-[10px] text-[#666] leading-relaxed">
        <strong className="text-[#333]">{includes.title}</strong>
        <ul className="mt-1 mb-0 pl-3">
          {includes.items.map((item, index) => (
            <li key={index} className="my-0">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ZoneMapSVG({ zone }: { zone: 'ab' | 'bc' | 'abc' }) {
  if (zone === 'ab') {
    return (
      <svg viewBox="0 0 280 160" className="w-full h-full">
        <rect x="0" y="0" width="280" height="160" fill="#f9f9f9" />
        <circle cx="140" cy="80" r="65" fill="#A8D5E3" opacity="0.7" stroke="#4A8FB8" strokeWidth="2" />
        <circle cx="140" cy="80" r="40" fill="#F4C8A0" opacity="0.8" stroke="#CC7A3C" strokeWidth="2" />
        <text x="140" y="70" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#CC7A3C">A</text>
        <text x="140" y="95" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#4A8FB8">B</text>
        <circle cx="140" cy="80" r="2" fill="#333" />
        <text x="140" y="125" textAnchor="middle" fontSize="12" fill="#666">S-Bahn Ring</text>
        <text x="140" y="140" textAnchor="middle" fontSize="12" fill="#666">+ Innenstadt</text>
      </svg>
    );
  }

  if (zone === 'bc') {
    return (
      <svg viewBox="0 0 280 160" className="w-full h-full">
        <rect x="0" y="0" width="280" height="160" fill="#f9f9f9" />
        <circle cx="140" cy="80" r="75" fill="#B8D4A0" opacity="0.6" stroke="#7A9C5E" strokeWidth="2" />
        <circle cx="140" cy="80" r="50" fill="#A8D5E3" opacity="0.8" stroke="#4A8FB8" strokeWidth="2" />
        <text x="140" y="70" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#4A8FB8">B</text>
        <text x="140" y="95" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#7A9C5E">C</text>
        <circle cx="140" cy="80" r="2" fill="#333" />
        <text x="140" y="125" textAnchor="middle" fontSize="12" fill="#666">Außenbezirke</text>
        <text x="140" y="140" textAnchor="middle" fontSize="12" fill="#666">+ Brandenburg</text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 280 160" className="w-full h-full">
      <rect x="0" y="0" width="280" height="160" fill="#f9f9f9" />
      <circle cx="140" cy="80" r="75" fill="#B8D4A0" opacity="0.6" stroke="#7A9C5E" strokeWidth="2" />
      <circle cx="140" cy="80" r="55" fill="#A8D5E3" opacity="0.8" stroke="#4A8FB8" strokeWidth="2" />
      <circle cx="140" cy="80" r="35" fill="#F4C8A0" opacity="0.8" stroke="#CC7A3C" strokeWidth="2" />
      <text x="140" y="65" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#CC7A3C">A</text>
      <text x="140" y="80" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#4A8FB8">B</text>
      <text x="140" y="95" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#7A9C5E">C</text>
      <circle cx="140" cy="80" r="2" fill="#333" />
      <text x="140" y="125" textAnchor="middle" fontSize="12" fill="#666">Komplettes Netz</text>
      <text x="140" y="140" textAnchor="middle" fontSize="12" fill="#666">inkl. BER Flughafen</text>
    </svg>
  );
}