import { useState } from 'react';
import { CreditCard, Smartphone, Wallet, Banknote } from 'lucide-react';
import type { Zone, TicketType, Language } from '../App';

interface PaymentSelectionProps {
  selectedZone: Zone;
  selectedTicket: TicketType;
  bicycleSelected: boolean;
  quantity: number;
  totalPrice: number;
  onBack: () => void;
  onPaymentSuccess: () => void;
  language: Language;
}

type PaymentMethod = 'credit' | 'paypal' | 'applepay' | 'cash' | null;

const translations = {
  de: {
    title: 'Zahlungsmethode wählen',
    subtitle: 'Wählen Sie Ihre bevorzugte Zahlungsart',
    backBtn: 'ZURÜCK',
    payNowBtn: 'JETZT BEZAHLEN',
    paymentMethods: {
      credit: 'Kreditkarte',
      paypal: 'PayPal',
      applepay: 'Apple Pay',
      cash: 'Bargeld',
    },
    descriptions: {
      credit: 'Visa, Mastercard, American Express',
      paypal: 'Sicher bezahlen mit PayPal',
      applepay: 'Schnell und sicher mit Apple Pay',
      cash: 'Bargeldzahlung am Automaten',
    },
  },
  en: {
    title: 'Choose Payment Method',
    subtitle: 'Select your preferred payment method',
    backBtn: 'BACK',
    payNowBtn: 'PAY NOW',
    paymentMethods: {
      credit: 'Credit Card',
      paypal: 'PayPal',
      applepay: 'Apple Pay',
      cash: 'Cash',
    },
    descriptions: {
      credit: 'Visa, Mastercard, American Express',
      paypal: 'Pay securely with PayPal',
      applepay: 'Fast and secure with Apple Pay',
      cash: 'Cash payment at the machine',
    },
  },
  fr: {
    title: 'Choisir le mode de paiement',
    subtitle: 'Sélectionnez votre mode de paiement préféré',
    backBtn: 'RETOUR',
    payNowBtn: 'PAYER MAINTENANT',
    paymentMethods: {
      credit: 'Carte de crédit',
      paypal: 'PayPal',
      applepay: 'Apple Pay',
      cash: 'Espèces',
    },
    descriptions: {
      credit: 'Visa, Mastercard, American Express',
      paypal: 'Paiement sécurisé avec PayPal',
      applepay: 'Rapide et sécurisé avec Apple Pay',
      cash: 'Paiement en espèces à la machine',
    },
  },
  es: {
    title: 'Elegir método de pago',
    subtitle: 'Seleccione su método de pago preferido',
    backBtn: 'VOLVER',
    payNowBtn: 'PAGAR AHORA',
    paymentMethods: {
      credit: 'Tarjeta de crédito',
      paypal: 'PayPal',
      applepay: 'Apple Pay',
      cash: 'Efectivo',
    },
    descriptions: {
      credit: 'Visa, Mastercard, American Express',
      paypal: 'Pague de forma segura con PayPal',
      applepay: 'Rápido y seguro con Apple Pay',
      cash: 'Pago en efectivo en la máquina',
    },
  },
};

const ticketNames = {
  single: { de: 'Einzelfahrschein', en: 'Single Ticket', fr: 'Billet simple', es: 'Billete sencillo' },
  day: { de: 'Tageskarte', en: 'Day Ticket', fr: 'Billet journalier', es: 'Billete diario' },
  week: { de: '7-Tage-Karte', en: '7-Day Ticket', fr: 'Billet 7 jours', es: 'Billete de 7 días' },
  month: { de: 'Monatskarte', en: 'Monthly Pass', fr: 'Abonnement mensuel', es: 'Abono mensual' },
};

export function PaymentSelection({
  selectedZone,
  selectedTicket,
  bicycleSelected,
  quantity,
  totalPrice,
  onBack,
  onPaymentSuccess,
  language,
}: PaymentSelectionProps) {
  const t = translations[language];
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethod>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const ticketName = ticketNames[selectedTicket!][language];

  const paymentMethods = [
    {
      id: 'credit' as PaymentMethod,
      icon: CreditCard,
      title: t.paymentMethods.credit,
      description: t.descriptions.credit,
    },
    {
      id: 'paypal' as PaymentMethod,
      icon: Wallet,
      title: t.paymentMethods.paypal,
      description: t.descriptions.paypal,
    },
    {
      id: 'applepay' as PaymentMethod,
      icon: Smartphone,
      title: t.paymentMethods.applepay,
      description: t.descriptions.applepay,
    },
    {
      id: 'cash' as PaymentMethod,
      icon: Banknote,
      title: t.paymentMethods.cash,
      description: t.descriptions.cash,
    },
  ];

  const handlePayment = async () => {
    if (!selectedPayment) return;
    
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      onPaymentSuccess();
    }, 2000);
  };




  return (
    <div className="h-full flex flex-col px-6 py-2">
      <h2 className="text-base text-[#333] mb-0.5 text-center flex-shrink-0">{t.title}</h2>
      <p className="text-center text-[#666] text-[10px] mb-3 flex-shrink-0">{t.subtitle}</p>

      {/* Content wrapper for consistent distribution */}
      <div className="flex-1 flex flex-col">
        {/* Order Summary */}
        <div className="bg-[#f8f9fa] border-2 border-[#ddd] rounded-lg p-3 mb-3">
        <div className="text-xs text-[#333] mb-2 font-medium">Bestellung</div>
        <div className="space-y-1 text-[10px]">
          <div className="flex justify-between">
            <span className="text-[#666]">{quantity}x {ticketName}</span>
            <span className="text-[#333]">{selectedZone?.toUpperCase()}</span>
          </div>
          {bicycleSelected && (
            <div className="flex justify-between">
              <span className="text-[#666]">+ Fahrradmitnahme</span>
              <span className="text-[#333]">Ja</span>
            </div>
          )}
          <div className="flex justify-between pt-1 border-t border-[#ddd] font-medium">
            <span className="text-[#333]">Gesamt</span>
            <span className="text-[#333]">{totalPrice.toFixed(2).replace('.', ',')} €</span>
          </div>
        </div>
      </div>


      {/* Payment Methods */}
      <div className="space-y-2 mb-3 flex-1">
        {paymentMethods.map((method) => {
          const IconComponent = method.icon;
          const isSelected = selectedPayment === method.id;
          
          return (
            <div
              key={method.id}
              onClick={() => setSelectedPayment(method.id)}
              className={`border-2 rounded-lg p-3 cursor-pointer transition-all ${
                isSelected
                  ? 'border-[#ffcc00] bg-[#fffef0] shadow-[0_2px_8px_rgba(255,204,0,0.3)]'
                  : 'border-[#ddd] hover:border-[#ffcc00] hover:shadow-[0_2px_8px_rgba(255,204,0,0.2)]'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  isSelected ? 'bg-[#ffcc00]' : 'bg-[#f5f5f5]'
                }`}>
                  <IconComponent className={`w-5 h-5 ${
                    isSelected ? 'text-[#333]' : 'text-[#666]'
                  }`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xs text-[#333] font-medium m-0">{method.title}</h3>
                  <p className="text-[9px] text-[#666] m-0">{method.description}</p>
                </div>
                <div className={`w-4 h-4 border-2 border-[#333] rounded flex items-center justify-center ${
                  isSelected ? 'bg-[#ffcc00]' : 'bg-white'
                }`}>
                  {isSelected && (
                    <div className="w-2 h-2 bg-[#333] rounded-full"></div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Processing State */}
      {isProcessing && (
        <div className="mb-3 p-3 bg-[#ffcc00] border-2 border-[#333] rounded-lg text-center">
          <div className="text-[10px] text-[#333] mb-1">Zahlung wird verarbeitet...</div>
          <div className="flex justify-center">
            <div className="w-4 h-4 border-2 border-[#333] border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      )}

      {/* Total and Payment Button */}
      <div className="flex-shrink-0">
        <div className="mb-3 p-3 bg-[#333] text-white rounded-lg text-center">
          <div className="text-[9px] mb-0.5">Zu zahlender Betrag</div>
          <div className="text-xl font-bold">{totalPrice.toFixed(2).replace('.', ',')} €</div>
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <button
            onClick={onBack}
            disabled={isProcessing}
            className="flex-1 py-2 bg-white border-2 border-[#333] rounded text-[10px] uppercase tracking-wide text-[#333] hover:bg-gray-100 transition-all disabled:opacity-50"
          >
            {t.backBtn}
          </button>
          <button
            onClick={handlePayment}
            disabled={!selectedPayment || isProcessing}
            className={`flex-[2] py-2 rounded border-2 text-[10px] uppercase tracking-wide transition-all ${
              selectedPayment && !isProcessing
                ? 'bg-[#ffcc00] border-[#333] text-[#333] hover:bg-[#e6b800] cursor-pointer'
                : 'bg-gray-100 border-[#ddd] text-gray-400 cursor-not-allowed'
            }`}
          >
            {isProcessing ? 'Wird verarbeitet...' : t.payNowBtn}
          </button>

        </div>
      </div>
      </div>
    </div>
  );
}
