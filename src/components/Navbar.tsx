import React from 'react';
import { UserProfile } from '../types/arcade';
import { ChevronDown, Gamepad2, Settings2 } from 'lucide-react';

interface NavbarProps {
  currentProfile: UserProfile;
  profiles: UserProfile[];
  onOpenProfileSwitcher: () => void;
  onOpenSettings: () => void;
  activeTab: 'calculator' | 'badges' | 'frequency' | 'swag' | 'simulator';
  setActiveTab: (tab: 'calculator' | 'badges' | 'frequency' | 'swag' | 'simulator') => void;
  totalPoints: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentProfile,
  onOpenProfileSwitcher,
  onOpenSettings,
  activeTab,
  setActiveTab,
  totalPoints
}) => {
  return (
    <header className="sticky top-0 z-30 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#EADBCE] shadow-sm">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Main Header Bar */}
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2 sm:gap-4">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#F59E0B] via-[#EA580C] to-[#D97706] flex items-center justify-center shadow-arcade-amber">
              <Gamepad2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-pixel text-[9px] sm:text-[11px] text-[#B45309] tracking-wider uppercase">
                  Arcade Calc
                </span>
                <span className="text-[9px] sm:text-[10px] font-mono px-1.5 py-0.2 rounded bg-[#FEF3C7] text-[#B45309] font-bold border border-[#FDE68A]">
                  2026
                </span>
              </div>
              <h1 className="font-display font-bold text-base sm:text-lg lg:text-xl text-[#292524] tracking-tight leading-tight">
                Google Cloud <span className="font-serif italic font-normal text-[#C2410C]">Points Tracker</span>
              </h1>
            </div>
          </div>

          {/* Desktop Navigation Tabs (Laptop & Desktop) */}
          <nav className="hidden md:flex items-center gap-1 bg-[#F4ECE1] p-1 rounded-2xl border border-[#EADBCE]">
            <button
              onClick={() => setActiveTab('calculator')}
              className={`px-2.5 lg:px-3.5 py-1.5 lg:py-2 rounded-xl text-xs lg:text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === 'calculator'
                  ? 'bg-white text-[#292524] shadow-sm font-display'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-white/50'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('frequency')}
              className={`px-2.5 lg:px-3.5 py-1.5 lg:py-2 rounded-xl text-xs lg:text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === 'frequency'
                  ? 'bg-white text-[#292524] shadow-sm font-display'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-white/50'
              }`}
            >
              Velocity
            </button>
            <button
              onClick={() => setActiveTab('badges')}
              className={`px-2.5 lg:px-3.5 py-1.5 lg:py-2 rounded-xl text-xs lg:text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === 'badges'
                  ? 'bg-white text-[#292524] shadow-sm font-display'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-white/50'
              }`}
            >
              Badges ({currentProfile.badges.length})
            </button>
            <button
              onClick={() => setActiveTab('swag')}
              className={`px-2.5 lg:px-3.5 py-1.5 lg:py-2 rounded-xl text-xs lg:text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === 'swag'
                  ? 'bg-white text-[#292524] shadow-sm font-display'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-white/50'
              }`}
            >
              Swag Tiers
            </button>
            <button
              onClick={() => setActiveTab('simulator')}
              className={`px-2.5 lg:px-3.5 py-1.5 lg:py-2 rounded-xl text-xs lg:text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === 'simulator'
                  ? 'bg-white text-[#292524] shadow-sm font-display'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-white/50'
              }`}
            >
              Pace Simulator
            </button>
          </nav>

          {/* Right Action: Score Pill + Profile Account Trigger */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* Quick Score Pill */}
            <div className="flex flex-col items-end px-2.5 py-1 rounded-xl bg-white border border-[#EADBCE] shadow-xs">
              <span className="text-[9px] font-mono text-stone-500 uppercase leading-none">Score</span>
              <span className="font-pixel text-[11px] sm:text-xs text-[#B45309] font-bold leading-tight mt-0.5">
                {totalPoints} PTS
              </span>
            </div>

            {/* Account Switcher Button */}
            <button
              onClick={onOpenProfileSwitcher}
              className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-white hover:bg-[#FAF5EE] rounded-2xl border border-[#EADBCE] shadow-sm transition active:scale-95 group"
              title="Switch or create account/profile"
            >
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#FEF3C7] text-[#B45309] flex items-center justify-center font-display font-bold text-xs border border-[#FDE68A]">
                {currentProfile.name.charAt(0).toUpperCase()}
              </div>
              <div className="text-left hidden xl:block max-w-[100px] truncate">
                <p className="text-xs font-bold text-stone-800 leading-tight truncate">
                  {currentProfile.name}
                </p>
                <p className="text-[10px] font-mono text-stone-500">
                  {currentProfile.badges.length} badges
                </p>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-stone-500" />
            </button>

            {/* Settings button */}
            <button
              onClick={onOpenSettings}
              className="p-2 sm:p-2.5 bg-white hover:bg-[#FAF5EE] rounded-2xl border border-[#EADBCE] text-stone-600 hover:text-stone-900 transition shadow-sm"
              title="Arcade Calculation Rules"
            >
              <Settings2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mobile Sub-Navigation Bar (Horizontal Scrollable Strip) */}
        <div className="flex md:hidden overflow-x-auto py-2 gap-1.5 no-scrollbar border-t border-[#EADBCE]/70">
          <button
            onClick={() => setActiveTab('calculator')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
              activeTab === 'calculator'
                ? 'bg-[#292524] text-white shadow-sm'
                : 'bg-white text-stone-600 border border-[#EADBCE]'
            }`}
          >
            Overview & Points
          </button>
          <button
            onClick={() => setActiveTab('frequency')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
              activeTab === 'frequency'
                ? 'bg-[#292524] text-white shadow-sm'
                : 'bg-white text-stone-600 border border-[#EADBCE]'
            }`}
          >
            Velocity Analytics
          </button>
          <button
            onClick={() => setActiveTab('badges')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
              activeTab === 'badges'
                ? 'bg-[#292524] text-white shadow-sm'
                : 'bg-white text-stone-600 border border-[#EADBCE]'
            }`}
          >
            Badges ({currentProfile.badges.length})
          </button>
          <button
            onClick={() => setActiveTab('swag')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
              activeTab === 'swag'
                ? 'bg-[#292524] text-white shadow-sm'
                : 'bg-white text-stone-600 border border-[#EADBCE]'
            }`}
          >
            Swag Tiers
          </button>
          <button
            onClick={() => setActiveTab('simulator')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
              activeTab === 'simulator'
                ? 'bg-[#292524] text-white shadow-sm'
                : 'bg-white text-stone-600 border border-[#EADBCE]'
            }`}
          >
            Pace Simulator
          </button>
        </div>

      </div>
    </header>
  );
};
