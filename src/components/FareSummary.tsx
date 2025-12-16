import { ShoppingCart, X } from 'lucide-react';
import type { Ticket } from '../App';

interface FareSummaryProps {
  selectedTickets: { [key: string]: number };
  tickets: Ticket[];
  totalPrice: number;
}

export function FareSummary({ selectedTickets, tickets, totalPrice }: FareSummaryProps) {
  const hasItems = Object.keys(selectedTickets).length > 0;

  if (!hasItems) {
    return null;
  }

  return (
    <div className="fixed bottom-20 left-0 right-0 bg-white border-t-2 border-gray-200 shadow-2xl z-40">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-gray-700" />
            <h3 className="text-gray-900">Your Selection</h3>
          </div>
          <div className="text-gray-900">
            <span className="text-2xl">€{totalPrice.toFixed(2)}</span>
          </div>
        </div>

        <div className="space-y-2 mb-4">
          {Object.entries(selectedTickets).map(([ticketId, quantity]) => {
            const ticket = tickets.find(t => t.id === ticketId);
            if (!ticket) return null;

            return (
              <div key={ticketId} className="flex items-center justify-between text-sm bg-gray-50 p-3 rounded-lg">
                <div className="flex-1">
                  <span className="text-gray-900">{ticket.name}</span>
                  <span className="text-gray-600 ml-2">×{quantity}</span>
                </div>
                <span className="text-gray-900">€{(ticket.price * quantity).toFixed(2)}</span>
              </div>
            );
          })}
        </div>

        <button className="w-full bg-[#FFDD00] hover:bg-yellow-400 text-black py-4 rounded-xl transition-colors shadow-lg">
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}
