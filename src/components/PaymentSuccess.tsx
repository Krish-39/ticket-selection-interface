import { CheckCircle, Home } from 'lucide-react';
import type { Zone, TicketType, Language } from '../App';

interface PaymentSuccessProps {
  selectedZone: Zone;
  selectedTicket: TicketType;
  bicycleSelected: boolean;
  quantity: number;
  totalPrice: number;
  onNewOrder: () => void;
  language: Language;
}


const translations = {
  de: {
    title: 'Zahlung erfolgreich!',
    subtitle: 'Ihre Tickets wurden erfolgreich gekauft',
    orderNumber: 'Bestellnummer',
    newOrder: 'NEUE BESTELLUNG',
    orderDetails: 'Bestelldetails',
    zoneLabel: 'Zone:',
    ticketsLabel: 'Tickets:',
    quantityLabel: 'Menge:',
    bicycleLabel: 'Fahrradmitnahme:',
    totalPaid: 'Gesamt bezahlt:',
    validUntil: 'Gültig bis:',
    printingTickets: 'Ihre physischen Tickets werden jetzt gedruckt',
    pleaseWait: 'Bitte warten Sie einen Moment',
  },
  en: {
    title: 'Payment Successful!',
    subtitle: 'Your tickets have been successfully purchased',
    orderNumber: 'Order Number',
    newOrder: 'NEW ORDER',
    orderDetails: 'Order Details',
    zoneLabel: 'Zone:',
    ticketsLabel: 'Tickets:',
    quantityLabel: 'Quantity:',
    bicycleLabel: 'Bicycle Transport:',
    totalPaid: 'Total Paid:',
    validUntil: 'Valid Until:',
    printingTickets: 'Your physical tickets are being printed now',
    pleaseWait: 'Please wait a moment',
  },
  fr: {
    title: 'Paiement réussi!',
    subtitle: 'Vos billets ont été achetés avec succès',
    orderNumber: 'Numéro de commande',
    newOrder: 'NOUVELLE COMMANDE',
    orderDetails: 'Détails de la commande',
    zoneLabel: 'Zone:',
    ticketsLabel: 'Billets:',
    quantityLabel: 'Quantité:',
    bicycleLabel: 'Transport de vélo:',
    totalPaid: 'Total payé:',
    validUntil: 'Valable jusqu\'au:',
    printingTickets: 'Vos billets physiques sont en cours d\'impression',
    pleaseWait: 'Veuillez patienter un moment',
  },
  es: {
    title: '¡Pago exitoso!',
    subtitle: 'Sus billetes han sido comprados exitosamente',
    orderNumber: 'Número de pedido',
    newOrder: 'NUEVO PEDIDO',
    orderDetails: 'Detalles del pedido',
    zoneLabel: 'Zona:',
    ticketsLabel: 'Billetes:',
    quantityLabel: 'Cantidad:',
    bicycleLabel: 'Transporte de bicicleta:',
    totalPaid: 'Total pagado:',
    validUntil: 'Válido hasta:',
    printingTickets: 'Sus billetes físicos se están imprimiendo ahora',
    pleaseWait: 'Por favor espere un momento',
  },
};

const ticketNames = {
  single: { de: 'Einzelfahrschein', en: 'Single Ticket', fr: 'Billet simple', es: 'Billete sencillo' },
  day: { de: 'Tageskarte', en: 'Day Ticket', fr: 'Billet journalier', es: 'Billete diario' },
  week: { de: '7-Tage-Karte', en: '7-Day Ticket', fr: 'Billet 7 jours', es: 'Billete de 7 días' },
  month: { de: 'Monatskarte', en: 'Monthly Pass', fr: 'Abonnement mensuel', es: 'Abono mensual' },
};

export function PaymentSuccess({
  selectedZone,
  selectedTicket,
  bicycleSelected,
  quantity,
  totalPrice,
  onNewOrder,
  language,
}: PaymentSuccessProps) {
  const t = translations[language];
  const ticketName = ticketNames[selectedTicket!][language];
  
  // Generate a simple order number
  const orderNumber = `BVG${Date.now().toString().slice(-6)}`;
  
  // Calculate validity date (24 hours from now for demo)
  const validUntil = new Date(Date.now() + 24 * 60 * 60 * 1000).toLocaleDateString('de-DE');

  return (
    <div className="h-full flex flex-col px-6 py-2">
      {/* Content wrapper for consistent distribution */}
      <div className="flex-1 flex flex-col">
        {/* Success Icon and Message */}
        <div className="text-center mb-4 flex-shrink-0">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-lg text-[#333] mb-1 font-bold">{t.title}</h2>
          <p className="text-sm text-[#666] mb-0.5">{t.subtitle}</p>
          <p className="text-xs text-[#999]">
            {t.orderNumber}: <span className="font-mono font-bold">{orderNumber}</span>
          </p>
        </div>

        {/* Order Details */}
        <div className="bg-[#f8f9fa] border-2 border-[#ddd] rounded-lg p-3 mb-4 flex-shrink-0">
          <h3 className="text-sm text-[#333] mb-2 font-medium">{t.orderDetails}</h3>
          <div className="space-y-1.5 text-[11px]">
            <div className="flex justify-between py-1 border-b border-[#ddd]">
              <span className="text-[#666]">{t.zoneLabel}</span>
              <span className="text-[#333] font-medium">{selectedZone?.toUpperCase()}</span>
            </div>
            
            <div className="flex justify-between py-1 border-b border-[#ddd]">
              <span className="text-[#666]">{t.ticketsLabel}</span>
              <span className="text-[#333] font-medium">{ticketName}</span>
            </div>
            
            <div className="flex justify-between py-1 border-b border-[#ddd]">
              <span className="text-[#666]">{t.quantityLabel}</span>
              <span className="text-[#333] font-medium">{quantity}</span>
            </div>
            
            {bicycleSelected && (
              <div className="flex justify-between py-1 border-b border-[#ddd]">
                <span className="text-[#666]">{t.bicycleLabel}</span>
                <span className="text-[#333] font-medium">Ja</span>
              </div>
            )}
            
            <div className="flex justify-between py-1 border-b border-[#ddd]">
              <span className="text-[#666]">{t.validUntil}</span>
              <span className="text-[#333] font-medium">{validUntil}</span>
            </div>
            
            <div className="flex justify-between py-1">
              <span className="text-[#666] font-medium">{t.totalPaid}</span>
              <span className="text-[#333] font-bold">{totalPrice.toFixed(2).replace('.', ',')} €</span>
            </div>
          </div>
        </div>

        {/* Physical Tickets Info */}
        <div className="mb-4 flex-shrink-0 p-3 bg-[#f8f9fa] border-2 border-[#ddd] rounded-lg text-center">
          <p className="text-xs text-[#666]">
           {t.printingTickets}
          </p>
          <p className="text-xs text-[#999] mt-1">
            {t.pleaseWait}
          </p>
        </div>

        {/* Bottom Action */}
        <div className="mt-auto flex-shrink-0">
          <button
            onClick={onNewOrder}
            className="w-full py-3 bg-[#ffcc00] text-[#333] rounded-lg flex items-center justify-center gap-2 hover:bg-[#e6b800] transition-colors font-medium"
          >
            <Home className="w-5 h-5" />
            {t.newOrder}
          </button>
        </div>
      </div>
    </div>
  );
}
