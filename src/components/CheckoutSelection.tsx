import { Plus, Minus } from 'lucide-react';
import type { Zone, TicketType, Language } from '../App';

interface CheckoutSelectionProps {
  selectedZone: Zone;
  selectedTicket: TicketType;
  bicycleSelected: boolean;
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  onBack: () => void;
  onContinue: () => void;
  language: Language;
}

const translations = {
  de: {
    title: 'Bestellung überprüfen',
    subtitle: 'Menge auswählen und Bestellung bestätigen',
    quantity: 'Menge',
    backBtn: 'ZURÜCK',
    continueBtn: 'WEITER ZUR ZAHLUNG',
    summary: 'Bestellzusammenfassung',
    zoneLabel: 'Zone:',
    ticketsLabel: 'Tickets:',
    bicycleLabel: 'Fahrradmitnahme:',
    totalLabel: 'Gesamt:',
    pricePerUnit: 'pro Stück',
  },
  en: {
    title: 'Review Order',
    subtitle: 'Select quantity and confirm order',
    quantity: 'Quantity',
    backBtn: 'BACK',
    continueBtn: 'PROCEED TO PAYMENT',
    summary: 'Order Summary',
    zoneLabel: 'Zone:',
    ticketsLabel: 'Tickets:',
    bicycleLabel: 'Bicycle Transport:',
    totalLabel: 'Total:',
    pricePerUnit: 'per unit',
  },
  fr: {
    title: 'Vérifier la commande',
    subtitle: 'Sélectionner la quantité et confirmer la commande',
    quantity: 'Quantité',
    backBtn: 'RETOUR',
    continueBtn: 'PASSER AU PAIEMENT',
    summary: 'Résumé de la commande',
    zoneLabel: 'Zone:',
    ticketsLabel: 'Billets:',
    bicycleLabel: 'Transport de vélo:',
    totalLabel: 'Total:',
    pricePerUnit: 'par unité',
  },
  es: {
    title: 'Revisar pedido',
    subtitle: 'Seleccionar cantidad y confirmar pedido',
    quantity: 'Cantidad',
    backBtn: 'VOLVER',
    continueBtn: 'PROCEDER AL PAGO',
    summary: 'Resumen del pedido',
    zoneLabel: 'Zona:',
    ticketsLabel: 'Billetes:',
    bicycleLabel: 'Transporte de bicicleta:',
    totalLabel: 'Total:',
    pricePerUnit: 'por unidad',
  },
};

const ticketNames = {
  single: { de: 'Einzelfahrschein', en: 'Single Ticket', fr: 'Billet simple', es: 'Billete sencillo' },
  day: { de: 'Tageskarte', en: 'Day Ticket', fr: 'Billet journalier', es: 'Billete diario' },
  week: { de: '7-Tage-Karte', en: '7-Day Ticket', fr: 'Billet 7 jours', es: 'Billete de 7 días' },
  month: { de: 'Monatskarte', en: 'Monthly Pass', fr: 'Abonnement mensuel', es: 'Abono mensual' },
};

const ticketPrices = {
  single: { ab: 3.50, bc: 4.00, abc: 4.40 },
  day: { ab: 9.50, bc: 10.00, abc: 10.50 },
  week: { ab: 37.00, bc: 40.00, abc: 43.00 },
  month: { ab: 91.00, bc: 95.00, abc: 103.00 },
};

const bicyclePrice = 2.20;

export function CheckoutSelection({
  selectedZone,
  selectedTicket,
  bicycleSelected,
  quantity,
  onQuantityChange,
  onBack,
  onContinue,
  language,
}: CheckoutSelectionProps) {
  const t = translations[language];

  const getPrice = (ticketType: keyof typeof ticketPrices) => {
    return ticketPrices[ticketType][selectedZone!];
  };

  const getTicketPrice = () => {
    return getPrice(selectedTicket!);
  };

  const getBicyclePrice = () => {
    return bicycleSelected ? bicyclePrice : 0;
  };

  const getTotalPrice = () => {
    const ticketTotal = getTicketPrice() * quantity;
    const bicycleTotal = getBicyclePrice() * quantity;
    return ticketTotal + bicycleTotal;
  };

  const getUnitPrice = () => {
    return getTicketPrice() + getBicyclePrice();
  };

  const ticketName = ticketNames[selectedTicket!][language];




  return (
    <div className="h-full flex flex-col px-6 py-2">
      <h2 className="text-base text-[#333] mb-0.5 text-center flex-shrink-0">{t.title}</h2>
      <p className="text-center text-[#666] text-[10px] mb-2 flex-shrink-0">{t.subtitle}</p>

      {/* Content wrapper for consistent distribution */}
      <div className="flex-1 flex flex-col">
        {/* Order Summary */}
        <div className="bg-[#f8f9fa] border-2 border-[#ddd] rounded-lg p-3 mb-3">
        <h3 className="text-xs text-[#333] mb-2 font-medium">{t.summary}</h3>
        
        <div className="space-y-1.5 text-[10px]">
          <div className="flex justify-between py-1 border-b border-[#ddd]">
            <span className="text-[#666]">{t.zoneLabel}</span>
            <span className="text-[#333] font-medium">{selectedZone?.toUpperCase()}</span>
          </div>
          
          <div className="flex justify-between py-1 border-b border-[#ddd]">
            <span className="text-[#666]">{t.ticketsLabel}</span>
            <span className="text-[#333] font-medium">{ticketName}</span>
          </div>
          
          <div className="flex justify-between py-1 border-b border-[#ddd]">
            <span className="text-[#666]">{t.pricePerUnit}</span>
            <span className="text-[#333] font-medium">{getUnitPrice().toFixed(2).replace('.', ',')} €</span>
          </div>
          
          {bicycleSelected && (
            <div className="flex justify-between py-1 border-b border-[#ddd]">
              <span className="text-[#666]">{t.bicycleLabel}</span>
              <span className="text-[#333] font-medium">+{bicyclePrice.toFixed(2).replace('.', ',')} €</span>
            </div>
          )}
          
          <div className="flex justify-between py-1">
            <span className="text-[#666] font-medium">{t.totalLabel}</span>
            <span className="text-[#333] font-bold text-sm">{getTotalPrice().toFixed(2).replace('.', ',')} €</span>
          </div>
        </div>
      </div>

      {/* Quantity Selection */}
      <div className="mb-3 flex-shrink-0">
        <h3 className="text-xs text-[#333] mb-2">{t.quantity}</h3>
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
            className="w-8 h-8 bg-[#333] text-white rounded-full flex items-center justify-center hover:bg-[#555] transition-colors"
          >
            <Minus className="w-4 h-4" />
          </button>
          

          <div className="px-4 py-2 min-w-[60px] text-center">
            <span className="text-lg font-bold text-black">{quantity}</span>
          </div>
          
          <button
            onClick={() => onQuantityChange(quantity + 1)}
            className="w-8 h-8 bg-[#333] text-white rounded-full flex items-center justify-center hover:bg-[#555] transition-colors"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Total Price Display */}
      <div className="mb-3 p-3 bg-[#333] text-white rounded-lg text-center flex-shrink-0">
        <div className="text-[9px] mb-0.5">{t.totalLabel} ({quantity} {quantity === 1 ? 'Stück' : 'Stück'})</div>
        <div className="text-xl font-bold">{getTotalPrice().toFixed(2).replace('.', ',')} €</div>
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
          className="flex-[2] py-2 bg-[#ffcc00] border-2 border-[#333] rounded text-[10px] uppercase tracking-wide text-[#333] hover:bg-[#e6b800] transition-all"
        >
          {t.continueBtn}
        </button>
      </div>
      </div>
    </div>
  );
}
