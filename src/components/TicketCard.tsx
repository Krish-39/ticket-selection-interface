import { 
  Ticket, 
  Calendar, 
  Users, 
  CalendarRange, 
  CalendarCheck, 
  Route,
  Plus,
  Minus
} from 'lucide-react';
import type { Ticket as TicketType } from '../App';

interface TicketCardProps {
  ticket: TicketType;
  quantity: number;
  onSelect: (ticketId: string) => void;
  onRemove: (ticketId: string) => void;
}

const iconMap = {
  ticket: Ticket,
  calendar: Calendar,
  users: Users,
  'calendar-range': CalendarRange,
  'calendar-check': CalendarCheck,
  route: Route,
};

export function TicketCard({ ticket, quantity, onSelect, onRemove }: TicketCardProps) {
  const IconComponent = iconMap[ticket.icon as keyof typeof iconMap] || Ticket;

  return (
    <div 
      className={`bg-white border-2 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all cursor-pointer relative ${
        quantity > 0 ? 'border-[#FFDD00] bg-yellow-50' : 'border-gray-200 hover:border-[#FFDD00]'
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-start justify-between mb-4">
          <div className="bg-black text-[#FFDD00] p-3 rounded-xl">
            <IconComponent className="w-8 h-8" />
          </div>
          {quantity > 0 && (
            <div className="bg-[#FFDD00] text-black px-3 py-1 rounded-full">
              <span>×{quantity}</span>
            </div>
          )}
        </div>

        <h3 className="text-gray-900 mb-2">{ticket.name}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-1">{ticket.description}</p>

        <div className="flex items-center justify-between">
          <div className="text-gray-900">
            <span className="text-2xl">€{ticket.price.toFixed(2)}</span>
          </div>

          {quantity > 0 ? (
            <div className="flex items-center gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onRemove(ticket.id);
                }}
                className="bg-gray-200 hover:bg-gray-300 p-2 rounded-lg transition-colors"
              >
                <Minus className="w-5 h-5 text-gray-700" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onSelect(ticket.id);
                }}
                className="bg-[#FFDD00] hover:bg-yellow-400 p-2 rounded-lg transition-colors"
              >
                <Plus className="w-5 h-5 text-black" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => onSelect(ticket.id)}
              className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Select
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
