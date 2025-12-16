import { Wifi, RotateCcw, Home } from 'lucide-react';
import type { Language } from '../App';

interface NetworkErrorProps {
  onRetry: () => void;
  onNewOrder: () => void;
  language: Language;
}

const translations = {
  de: {
    title: 'Verbindungsfehler',
    subtitle: 'Keine Internetverbindung',
    errorMessage: 'Bitte überprüfen Sie Ihre Verbindung und versuchen Sie es erneut.',
    retryBtn: 'ERNEUT VERSUCHEN',
    newOrderBtn: 'NEUE BESTELLUNG',
  },
  en: {
    title: 'Connection Error',
    subtitle: 'No internet connection',
    errorMessage: 'Please check your connection and try again.',
    retryBtn: 'TRY AGAIN',
    newOrderBtn: 'NEW ORDER',
  },
  fr: {
    title: 'Erreur de connexion',
    subtitle: 'Pas de connexion internet',
    errorMessage: 'Veuillez vérifier votre connexion et réessayer.',
    retryBtn: 'RÉESSAYER',
    newOrderBtn: 'NOUVELLE COMMANDE',
  },
  es: {
    title: 'Error de conexión',
    subtitle: 'Sin conexión a internet',
    errorMessage: 'Por favor, verifique su conexión e inténtelo de nuevo.',
    retryBtn: 'INTENTAR DE NUEVO',
    newOrderBtn: 'NUEVO PEDIDO',
  },
};

export function NetworkError({
  onRetry,
  onNewOrder,
  language,
}: NetworkErrorProps) {
  const t = translations[language];



  return (
    <div className="h-full flex flex-col px-6 py-2">
      {/* Content wrapper for consistent distribution */}
      <div className="flex-1 flex flex-col">
        {/* Error Icon and Message */}

        <div className="text-center mb-4 flex-shrink-0">
        <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
          <Wifi className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-lg text-[#333] mb-1 font-bold">{t.title}</h2>
        <p className="text-sm text-[#666] mb-2">{t.subtitle}</p>
        <p className="text-xs text-[#999] px-4">{t.errorMessage}</p>
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
