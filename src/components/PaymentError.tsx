import { AlertCircle, RotateCcw, Home } from 'lucide-react';
import type { Language } from '../App';

interface PaymentErrorProps {
  errorMessage?: string;
  onRetry: () => void;
  onNewOrder: () => void;
  language: Language;
}

const translations = {
  de: {
    title: 'Zahlung fehlgeschlagen',
    subtitle: 'Es gab ein Problem mit Ihrer Zahlung',
    errorMessage: 'Bitte versuchen Sie es erneut oder wählen Sie eine andere Zahlungsmethode.',
    retryBtn: 'ERNEUT VERSUCHEN',
    newOrderBtn: 'NEUE BESTELLUNG',
  },
  en: {
    title: 'Payment Failed',
    subtitle: 'There was a problem with your payment',
    errorMessage: 'Please try again or select a different payment method.',
    retryBtn: 'TRY AGAIN',
    newOrderBtn: 'NEW ORDER',
  },
  fr: {
    title: 'Paiement échoué',
    subtitle: 'Il y a eu un problème avec votre paiement',
    errorMessage: 'Veuillez réessayer ou sélectionner un autre mode de paiement.',
    retryBtn: 'RÉESSAYER',
    newOrderBtn: 'NOUVELLE COMMANDE',
  },
  es: {
    title: 'Pago fallido',
    subtitle: 'Hubo un problema con su pago',
    errorMessage: 'Por favor, inténtelo de nuevo o seleccione un método de pago diferente.',
    retryBtn: 'INTENTAR DE NUEVO',
    newOrderBtn: 'NUEVO PEDIDO',
  },
};

export function PaymentError({
  errorMessage,
  onRetry,
  onNewOrder,
  language,
}: PaymentErrorProps) {
  const t = translations[language];



  return (
    <div className="h-full flex flex-col px-6 py-2">
      {/* Content wrapper for consistent distribution */}
      <div className="flex-1 flex flex-col">
        {/* Error Icon and Message */}
        <div className="text-center mb-4">
        <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
          <AlertCircle className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-lg text-[#333] mb-1 font-bold">{t.title}</h2>
        <p className="text-sm text-[#666] mb-2">{t.subtitle}</p>
        <p className="text-xs text-[#999] px-4">{errorMessage || t.errorMessage}</p>
      </div>



      {/* Action Buttons */}
      <div className="flex gap-2 flex-shrink-0 mt-auto">
        <button
          onClick={onRetry}
          className="flex-1 py-3 bg-[#333] text-white rounded-lg flex items-center justify-center gap-2 hover:bg-[#555] transition-colors"
        >
          <RotateCcw className="w-5 h-5" />
          <span className="font-medium">{t.retryBtn}</span>
        </button>
        
        <button
          onClick={onNewOrder}
          className="flex-1 py-3 bg-[#ffcc00] text-[#333] rounded-lg flex items-center justify-center gap-2 hover:bg-[#e6b800] transition-colors font-medium"
        >
          <Home className="w-5 h-5" />
          {t.newOrderBtn}
        </button>
      </div>
      </div>
    </div>
  );
}
