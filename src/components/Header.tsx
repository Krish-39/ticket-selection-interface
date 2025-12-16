import { Menu, User, Bell } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
              <Menu className="w-6 h-6" />
            </button>
            
            <div className="flex items-center gap-2">
              <div className="bg-[#FFDD00] text-black px-4 py-2 rounded-lg">
                <span className="text-2xl tracking-tight">BVG</span>
              </div>
              <span className="hidden md:inline text-gray-300">Berlin Public Transport</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="hover:text-[#FFDD00] transition-colors">Journey Planner</a>
            <a href="#" className="hover:text-[#FFDD00] transition-colors">Network Maps</a>
            <a href="#" className="hover:text-[#FFDD00] transition-colors">News</a>
          </nav>

          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
