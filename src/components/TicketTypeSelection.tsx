import type { Zone, TicketType, Language } from '../App';
import { Check, Bike } from 'lucide-react';


interface TicketTypeSelectionProps {
  selectedZone: Zone;
  selectedTicket: TicketType;
  bicycleSelected: boolean;
  onTicketSelect: (ticket: TicketType) => void;
  onBicycleToggle: () => void;
  onBack: () => void;
  onContinue: () => void;
  language: Language;
}

const translations = {
  de: {
    title: 'Ticketart wählen',
    subtitle: 'Wählen Sie die Gültigkeitsdauer',
    summaryTitle: 'Ihre Auswahl',
    zoneLabel: 'Zone:',
    extrasTitle: 'Zusatzoptionen',
    bicycleTitle: '🚲 Fahrradmitnahme',
    bicycleDesc: 'Fahrrad im ÖPNV mitnehmen',
    backBtn: 'ZURÜCK',
    continueBtn: 'WEITER ZUR ZAHLUNG',
    tickets: {
      single: { title: 'Einzelfahrschein', desc: '2 Stunden gültig' },
      day: { title: 'Tageskarte', desc: 'Bis 3 Uhr morgens gültig' },
      week: { title: '7-Tage-Karte', desc: '7 aufeinanderfolgende Tage' },
      month: { title: 'Monatskarte', desc: '30 aufeinanderfolgende Tage' },
    },
  },
  en: {
    title: 'Choose Ticket Type',
    subtitle: 'Select validity period',
    summaryTitle: 'Your Selection',
    zoneLabel: 'Zone:',
    extrasTitle: 'Additional Options',
    bicycleTitle: '🚲 Bicycle Transport',
    bicycleDesc: 'Take your bike on public transport',
    backBtn: 'BACK',
    continueBtn: 'PROCEED TO PAYMENT',
    tickets: {
      single: { title: 'Single Ticket', desc: 'Valid for 2 hours' },
      day: { title: 'Day Ticket', desc: 'Valid until 3 AM' },
      week: { title: '7-Day Ticket', desc: '7 consecutive days' },
      month: { title: 'Monthly Pass', desc: '30 consecutive days' },
    },
  },
  fr: {
    title: 'Choisir le type de billet',
    subtitle: 'Sélectionner la période de validité',
    summaryTitle: 'Votre sélection',
    zoneLabel: 'Zone:',
    extrasTitle: 'Options supplémentaires',
    bicycleTitle: '🚲 Transport de vélo',
    bicycleDesc: 'Emportez votre vélo dans les transports',
    backBtn: 'RETOUR',
    continueBtn: 'PASSER AU PAIEMENT',
    tickets: {
      single: { title: 'Billet simple', desc: 'Valable 2 heures' },
      day: { title: 'Billet journalier', desc: 'Valable jusqu\'à 3h du matin' },
      week: { title: 'Billet 7 jours', desc: '7 jours consécutifs' },
      month: { title: 'Abonnement mensuel', desc: '30 jours consécutifs' },
    },
  },
  es: {
    title: 'Elegir tipo de billete',
    subtitle: 'Seleccionar período de validez',
    summaryTitle: 'Su selección',
    zoneLabel: 'Zona:',
    extrasTitle: 'Opciones adicionales',
    bicycleTitle: '🚲 Transporte de bicicleta',
    bicycleDesc: 'Lleve su bicicleta en el transporte público',
    backBtn: 'VOLVER',
    continueBtn: 'PROCEDER AL PAGO',
    tickets: {
      single: { title: 'Billete sencillo', desc: 'Válido durante 2 horas' },
      day: { title: 'Billete diario', desc: 'Válido hasta las 3 AM' },
      week: { title: 'Billete de 7 días', desc: '7 días consecutivos' },
      month: { title: 'Abono mensual', desc: '30 días consecutivos' },
    },
  },
};

const ticketPrices = {
  single: { ab: 3.50, bc: 4.00, abc: 4.40 },
  day: { ab: 9.50, bc: 10.00, abc: 10.50 },
  week: { ab: 37.00, bc: 40.00, abc: 43.00 },
  month: { ab: 91.00, bc: 95.00, abc: 103.00 },
};

const bicyclePrice = 2.20;


export function TicketTypeSelection({
  selectedZone,
  selectedTicket,
  bicycleSelected,
  onTicketSelect,
  onBicycleToggle,
  onBack,
  onContinue,
  language,
}: TicketTypeSelectionProps) {
  const t = translations[language];

  const getPrice = (ticketType: keyof typeof ticketPrices) => {
    return ticketPrices[ticketType][selectedZone!];
  };

  const getTotalPrice = () => {
    if (!selectedTicket) return 0;
    let total = getPrice(selectedTicket);
    if (bicycleSelected) total += bicyclePrice;
    return total;
  };



  return (
    <div className="h-full flex flex-col px-6 py-2">
      <h2 className="text-base text-[#333] mb-0.5 text-center flex-shrink-0">{t.title}</h2>
      <p className="text-center text-[#666] text-[10px] mb-2 flex-shrink-0">{t.subtitle}</p>

      {/* Content wrapper for consistent distribution */}
      <div className="flex-1 flex flex-col">
        {/* Summary Box */}
        <div className="bg-[#f8f9fa] border-2 border-[#ddd] rounded-lg p-2 mb-2">
        <div className="text-xs text-[#333] mb-1">{t.summaryTitle}</div>
        <div className="flex justify-between py-0.5 border-b border-[#ddd]">
          <span className="text-[#666] text-[10px]">{t.zoneLabel}</span>
          <span className="text-[#333] text-[10px]">{selectedZone?.toUpperCase()}</span>
        </div>
      </div>

      {/* Ticket Types */}
      <div className="space-y-1.5 mb-2">
        {(Object.keys(ticketPrices) as Array<keyof typeof ticketPrices>).map((type) => {
          const ticket = t.tickets[type];
          const price = getPrice(type);
          const isSelected = selectedTicket === type;

          return (
            <div
              key={type}
              onClick={() => onTicketSelect(type)}
              className={`bg-white border-2 rounded-lg p-2 cursor-pointer transition-all flex justify-between items-center relative ${
                isSelected
                  ? 'border-[#ffcc00] bg-[#fffef0] shadow-[0_2px_8px_rgba(255,204,0,0.3)]'
                  : 'border-[#ddd] hover:border-[#ffcc00] hover:shadow-[0_2px_8px_rgba(255,204,0,0.2)]'
              }`}
            >
              {isSelected && (
                <div className="absolute top-1.5 right-1.5 w-4 h-4 bg-[#ffcc00] rounded-full flex items-center justify-center border-2 border-[#333]">
                  <Check className="w-2.5 h-2.5 text-[#333]" strokeWidth={3} />
                </div>
              )}

              <div className="flex-1">
                <h3 className="text-xs text-[#333] m-0 mb-0.5">{ticket.title}</h3>
                <p className="text-[9px] text-[#666] m-0 leading-tight">{ticket.desc}</p>
              </div>

              <div className="bg-[#333] text-white px-2 py-0.5 rounded text-[10px] ml-2 whitespace-nowrap">
                {price.toFixed(2).replace('.', ',')} €
              </div>
            </div>
          );
        })}
      </div>

      {/* Extras */}
      <div className="mb-2">
        <h3 className="text-[10px] text-[#333] mb-1">{t.extrasTitle}</h3>
        
        <div
          onClick={onBicycleToggle}
          className={`bg-white border-2 rounded-lg p-2 cursor-pointer transition-all flex items-center gap-2 ${
            bicycleSelected
              ? 'border-[#ffcc00] bg-[#fffef0]'
              : 'border-[#ddd] hover:border-[#ffcc00] hover:shadow-[0_2px_6px_rgba(255,204,0,0.2)]'
          }`}
        >
          <div className={`w-4 h-4 border-2 border-[#333] rounded flex items-center justify-center flex-shrink-0 ${
            bicycleSelected ? 'bg-[#ffcc00]' : 'bg-white'
          }`}>
            {bicycleSelected && <Check className="w-2.5 h-2.5 text-[#333]" strokeWidth={3} />}
          </div>

          <div className="flex-1">
            <h4 className="text-[10px] text-[#333] m-0 mb-0.5">{t.bicycleTitle}</h4>
            <p className="text-[9px] text-[#666] m-0 leading-tight">{t.bicycleDesc}</p>
          </div>

          <div className="text-[10px] text-[#333] whitespace-nowrap">
            +{bicyclePrice.toFixed(2).replace('.', ',')} €
          </div>
        </div>
      </div>


      {/* Buttons */}
      <div className="flex gap-2 flex-shrink-0 mt-auto">
        <button
          onClick={onBack}
          className="flex-1 py-2 bg-white border-2 border-[#333] rounded text-[10px] uppercase tracking-wide text-[#333] hover:bg-gray-100 transition-all"
        >
          {t.backBtn}
        </button>

        <button
          onClick={onContinue}
          disabled={!selectedTicket}
          className={`flex-[2] py-2 rounded border-2 text-[10px] uppercase tracking-wide transition-all ${
            selectedTicket
              ? 'bg-[#ffcc00] border-[#333] text-[#333] hover:bg-[#e6b800] cursor-pointer'
              : 'bg-gray-100 border-[#ddd] text-gray-400 cursor-not-allowed'
          }`}
        >
          {t.continueBtn}
        </button>
      </div>
      </div>
    </div>
  );
}
