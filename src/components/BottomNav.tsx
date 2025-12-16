import { Home, Ticket, HelpCircle } from 'lucide-react';

interface BottomNavProps {
  activeNav: string;
  onNavChange: (nav: string) => void;
}

export function BottomNav({ activeNav, onNavChange }: BottomNavProps) {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'tickets', label: 'Tickets', icon: Ticket },
    { id: 'help', label: 'Help', icon: HelpCircle },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black text-white border-t-2 border-[#FFDD00] z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-around">
          {navItems.map(item => {
            const Icon = item.icon;
            const isActive = activeNav === item.id;

            return (
              <button
                key={item.id}
                onClick={() => onNavChange(item.id)}
                className={`flex flex-col items-center gap-1 py-3 px-6 transition-colors ${
                  isActive ? 'text-[#FFDD00]' : 'text-gray-400 hover:text-white'
                }`}
              >
                <Icon className="w-6 h-6" />
                <span className="text-xs">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
