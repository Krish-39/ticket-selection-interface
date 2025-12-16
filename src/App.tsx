import { useState } from 'react';
import { BVGHeader } from './components/BVGHeader';
import { BVGFooter } from './components/BVGFooter';
import { ZoneSelection } from './components/ZoneSelection';
import { TicketTypeSelection } from './components/TicketTypeSelection';
import { CheckoutSelection } from './components/CheckoutSelection';
import { PaymentSelection } from './components/PaymentSelection';

import { PaymentSuccess } from './components/PaymentSuccess';
import { PaymentError } from './components/PaymentError';
import { NetworkError } from './components/NetworkError';

export type Zone = 'ab' | 'bc' | 'abc' | null;
export type TicketType = 'single' | 'day' | 'week' | 'month' | null;
export type Language = 'de' | 'en' | 'fr' | 'es';



export default function App() {
  const [currentPage, setCurrentPage] = useState<'zone' | 'ticket' | 'checkout' | 'payment' | 'success' | 'paymentError' | 'networkError'>('zone');
  const [selectedZone, setSelectedZone] = useState<Zone>(null);
  const [selectedTicket, setSelectedTicket] = useState<TicketType>(null);
  const [bicycleSelected, setBicycleSelected] = useState(false);


  const [quantity, setQuantity] = useState(1);
  const [language, setLanguage] = useState<Language>('de');

  const handleContinueToTickets = () => {
    if (selectedZone) {
      setCurrentPage('ticket');
    }
  };

  const handleContinueToCheckout = () => {
    if (selectedTicket) {
      setCurrentPage('checkout');
    }
  };

  const handleBackToTickets = () => {
    setCurrentPage('ticket');
  };


  const handleBackToZones = () => {
    setCurrentPage('zone');
    setSelectedTicket(null);
    setBicycleSelected(false);
    setQuantity(1);
  };

  const handlePaymentError = () => {
    setCurrentPage('paymentError');
  };

  const handleNetworkError = () => {
    setCurrentPage('networkError');
  };

  const handleRetryPayment = () => {
    setCurrentPage('payment');
  };

  const handleRetryNetwork = () => {
    // Simulate network retry - in real app, check connectivity
    setCurrentPage('payment');
  };



  const handleNewOrderFromError = () => {
    setCurrentPage('zone');
    setSelectedZone(null);
    setSelectedTicket(null);
    setBicycleSelected(false);
    setQuantity(1);
  };



  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-[800px] aspect-[4/3] bg-white shadow-[0_0_20px_rgba(0,0,0,0.1)] flex flex-col rounded-xl overflow-hidden">
        <BVGHeader language={language} onLanguageChange={setLanguage} />
        




        <div className="flex-1 overflow-hidden min-h-0">
          {currentPage === 'zone' ? (
            <ZoneSelection
              selectedZone={selectedZone}
              onZoneSelect={setSelectedZone}
              onContinue={handleContinueToTickets}
              language={language}
            />
          ) : currentPage === 'ticket' ? (
            <TicketTypeSelection
              selectedZone={selectedZone}
              selectedTicket={selectedTicket}
              bicycleSelected={bicycleSelected}
              onTicketSelect={setSelectedTicket}
              onBicycleToggle={() => setBicycleSelected(!bicycleSelected)}
              onBack={handleBackToZones}
              onContinue={handleContinueToCheckout}
              language={language}
            />
          ) : currentPage === 'checkout' ? (
            <CheckoutSelection
              selectedZone={selectedZone}
              selectedTicket={selectedTicket}
              bicycleSelected={bicycleSelected}
              quantity={quantity}
              onQuantityChange={setQuantity}
              onBack={handleBackToTickets}
              onContinue={() => setCurrentPage('payment')}
              language={language}
            />

          ) : currentPage === 'payment' ? (
            <PaymentSelection
              selectedZone={selectedZone}
              selectedTicket={selectedTicket}
              bicycleSelected={bicycleSelected}
              quantity={quantity}
              totalPrice={(() => {
                const ticketPrices = {
                  single: { ab: 3.50, bc: 4.00, abc: 4.40 },
                  day: { ab: 9.50, bc: 10.00, abc: 10.50 },
                  week: { ab: 37.00, bc: 40.00, abc: 43.00 },
                  month: { ab: 91.00, bc: 95.00, abc: 103.00 },
                };
                const bicyclePrice = 2.20;
                const ticketTotal = ticketPrices[selectedTicket!][selectedZone!] * quantity;
                const bicycleTotal = bicycleSelected ? bicyclePrice * quantity : 0;
                return ticketTotal + bicycleTotal;
              })()}
              onBack={() => setCurrentPage('checkout')}
              onPaymentSuccess={() => setCurrentPage('success')}
              language={language}
            />
          ) : currentPage === 'paymentError' ? (
            <PaymentError
              onRetry={handleRetryPayment}
              onNewOrder={handleNewOrderFromError}
              language={language}
            />
          ) : currentPage === 'networkError' ? (
            <NetworkError
              onRetry={handleRetryNetwork}
              onNewOrder={handleNewOrderFromError}
              language={language}
            />
          ) : (
            <PaymentSuccess
              selectedZone={selectedZone}
              selectedTicket={selectedTicket}
              bicycleSelected={bicycleSelected}
              quantity={quantity}
              totalPrice={(() => {
                const ticketPrices = {
                  single: { ab: 3.50, bc: 4.00, abc: 4.40 },
                  day: { ab: 9.50, bc: 10.00, abc: 10.50 },
                  week: { ab: 37.00, bc: 40.00, abc: 43.00 },
                  month: { ab: 91.00, bc: 95.00, abc: 103.00 },
                };
                const bicyclePrice = 2.20;
                const ticketTotal = ticketPrices[selectedTicket!][selectedZone!] * quantity;
                const bicycleTotal = bicycleSelected ? bicyclePrice * quantity : 0;
                return ticketTotal + bicycleTotal;
              })()}
              onNewOrder={() => {
                setCurrentPage('zone');
                setSelectedZone(null);
                setSelectedTicket(null);
                setBicycleSelected(false);
                setQuantity(1);
              }}
              language={language}
            />
          )}
        </div>



        <BVGFooter language={language} />
      </div>
    </div>
  );
}
