import { X } from 'lucide-react';
import type { Zone, Language } from '../App';

interface MapPopupProps {
  zone: Zone;
  onClose: () => void;
  language: Language;
}

const translations = {
  de: {
    title: 'Tarifbereich Karte',
    close: 'Schließen',
    info: 'BVG Berlin-Brandenburg Tarifzonenkarte',
    infoText: 'Zone A umfasst die Berliner Innenstadt innerhalb des S-Bahn-Rings. Zone B erstreckt sich bis zur Stadtgrenze. Zone C umfasst das Umland und Brandenburg, einschließlich Potsdam und Flughafen BER.',
  },
  en: {
    title: 'Fare Zone Map',
    close: 'Close',
    info: 'BVG Berlin-Brandenburg Fare Zone Map',
    infoText: 'Zone A covers Berlin city center within the S-Bahn Ring. Zone B extends to the city limits. Zone C includes the surrounding area and Brandenburg, including Potsdam and BER Airport.',
  },
  fr: {
    title: 'Carte de la zone tarifaire',
    close: 'Fermer',
    info: 'Carte des zones tarifaires BVG Berlin-Brandebourg',
    infoText: 'La zone A couvre le centre-ville de Berlin à l\'intérieur du S-Bahn Ring. La zone B s\'étend jusqu\'aux limites de la ville. La zone C comprend les environs et le Brandebourg, y compris Potsdam et l\'aéroport BER.',
  },
  es: {
    title: 'Mapa de zona tarifaria',
    close: 'Cerrar',
    info: 'Mapa de zonas tarifarias BVG Berlín-Brandeburgo',
    infoText: 'La zona A cubre el centro de Berlín dentro del S-Bahn Ring. La zona B se extiende hasta los límites de la ciudad. La zona C incluye los alrededores y Brandeburgo, incluidos Potsdam y el aeropuerto BER.',
  },
};

export function MapPopup({ zone, onClose, language }: MapPopupProps) {
  const t = translations[language];

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[1000]" onClick={onClose}>
      <div
        className="bg-white rounded-lg p-6 max-w-[700px] w-[90%] max-h-[90%] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4 pb-3 border-b-2 border-[#ffcc00]">
          <h3 className="text-xl text-[#333] m-0">{t.title}</h3>
          <button
            onClick={onClose}
            className="p-1 rounded hover:bg-gray-100 transition-colors"
          >
            <X className="w-6 h-6 text-[#666]" />
          </button>
        </div>

        <div className="w-full border-2 border-[#ddd] rounded-lg mb-4 overflow-hidden bg-white">
          <img 
            src="/map.png" 
            alt="BVG Zone Map" 
            className="w-full h-auto max-h-[400px] object-contain"
          />
        </div>

        <div className="flex gap-4 justify-center flex-wrap mb-4">
          <div className="flex items-center gap-2 text-sm">
            <div className="w-5 h-5 rounded-sm border-2 border-[#CC7A3C] bg-[#F4C8A0]"></div>
            <span>Zone A</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <div className="w-5 h-5 rounded-sm border-2 border-[#4A8FB8] bg-[#A8D5E3]"></div>
            <span>Zone B</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <div className="w-5 h-5 rounded-sm border-2 border-[#7A9C5E] bg-[#B8D4A0]"></div>
            <span>Zone C</span>
          </div>
        </div>

        <div className="text-sm leading-relaxed text-[#666]">
          <h4 className="text-[#333] text-base mb-2">{t.info}</h4>
          <p>{t.infoText}</p>
        </div>
      </div>
    </div>
  );
}
