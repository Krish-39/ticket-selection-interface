import { useState } from 'react';
import type { Zone, Language } from '../App';
import { TransportStrip } from './TransportStrip';
import { ZoneCard } from './ZoneCard';
import { MapPopup } from './MapPopup';

interface ZoneSelectionProps {
  selectedZone: Zone;
  onZoneSelect: (zone: Zone) => void;
  onContinue: () => void;
  language: Language;
}

const translations = {
  de: {
    continue: 'TARIFBEREICH WÄHLEN',
    zones: {
      ab: { title: 'Tarifbereich AB', description: 'Berlin Innenstadt', price: '3,50 €' },
      bc: { title: 'Tarifbereich BC', description: 'Außenbereiche & Brandenburg', price: '4,00 €' },
      abc: { title: 'Tarifbereich ABC', description: 'Gesamtes Berlin & Brandenburg', price: '4,40 €' },
    },
  },
  en: {
    continue: 'SELECT FARE ZONE',
    zones: {
      ab: { title: 'Fare Zone AB', description: 'Berlin City Center', price: '€3.50' },
      bc: { title: 'Fare Zone BC', description: 'Outer Areas & Brandenburg', price: '€4.00' },
      abc: { title: 'Fare Zone ABC', description: 'All Berlin & Brandenburg', price: '€4.40' },
    },
  },
  fr: {
    continue: 'SÉLECTIONNER LA ZONE',
    zones: {
      ab: { title: 'Zone tarifaire AB', description: 'Centre-ville de Berlin', price: '3,50 €' },
      bc: { title: 'Zone tarifaire BC', description: 'Zones périphériques & Brandebourg', price: '4,00 €' },
      abc: { title: 'Zone tarifaire ABC', description: 'Tout Berlin & Brandebourg', price: '4,40 €' },
    },
  },
  es: {
    continue: 'SELECCIONAR ZONA',
    zones: {
      ab: { title: 'Zona tarifaria AB', description: 'Centro de Berlín', price: '3,50 €' },
      bc: { title: 'Zona tarifaria BC', description: 'Áreas exteriores & Brandeburgo', price: '4,00 €' },
      abc: { title: 'Zona tarifaria ABC', description: 'Todo Berlín & Brandeburgo', price: '4,40 €' },
    },
  },
};

export function ZoneSelection({ selectedZone, onZoneSelect, onContinue, language }: ZoneSelectionProps) {
  const [mapPopupZone, setMapPopupZone] = useState<Zone>(null);
  const t = translations[language];


  return (
    <div className="h-full flex flex-col px-6 py-2">
      <TransportStrip language={language} />
      
      {/* Content wrapper to ensure consistent distribution */}
      <div className="flex-1 flex flex-col">
        <div className="grid grid-cols-3 gap-3 mb-3 flex-shrink-0">
        <ZoneCard
          zone="ab"
          title={t.zones.ab.title}
          description={t.zones.ab.description}
          price={t.zones.ab.price}
          selected={selectedZone === 'ab'}
          onSelect={() => onZoneSelect('ab')}
          onShowMap={() => setMapPopupZone('ab')}
          language={language}
        />
        
        <ZoneCard
          zone="bc"
          title={t.zones.bc.title}
          description={t.zones.bc.description}
          price={t.zones.bc.price}
          selected={selectedZone === 'bc'}
          onSelect={() => onZoneSelect('bc')}
          onShowMap={() => setMapPopupZone('bc')}
          language={language}
        />
        
        <ZoneCard
          zone="abc"
          title={t.zones.abc.title}
          description={t.zones.abc.description}
          price={t.zones.abc.price}
          selected={selectedZone === 'abc'}
          onSelect={() => onZoneSelect('abc')}
          onShowMap={() => setMapPopupZone('abc')}
          language={language}
        />
      </div>
      
      <button
        onClick={onContinue}
        disabled={!selectedZone}
        className={`w-full py-2.5 rounded border-2 text-xs uppercase tracking-wide transition-all flex-shrink-0 ${
          selectedZone
            ? 'bg-[#ffcc00] border-[#333] text-[#333] hover:bg-[#e6b800] cursor-pointer'
            : 'bg-gray-100 border-[#ddd] text-gray-400 cursor-not-allowed'
        }`}
      >
        {t.continue}
      </button>


      {mapPopupZone && (
        <MapPopup
          zone={mapPopupZone}
          onClose={() => setMapPopupZone(null)}
          language={language}
        />
      )}
      </div>
    </div>
  );
}
