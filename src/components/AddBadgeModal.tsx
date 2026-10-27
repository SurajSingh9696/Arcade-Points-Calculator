import React, { useState, useEffect } from 'react';
import { ArcadeBadge, BadgeCategory } from '../types/arcade';
import { REPOSITORY_BADGES } from '../data/defaultBadges';
import { sanitizeText, safeIsoDate } from '../utils/scraper';
import { X, Plus, Search, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

interface AddBadgeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddBadge: (badge: ArcadeBadge) => void;
  existingBadgeNames: string[];
}

export const AddBadgeModal: React.FC<AddBadgeModalProps> = ({
  isOpen,
  onClose,
  onAddBadge,
  existingBadgeNames
}) => {
  const [tab, setTab] = useState<'catalog' | 'custom'>('catalog');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Custom badge state
  const [customName, setCustomName] = useState('');
  const [customCategory, setCustomCategory] = useState<BadgeCategory>('skill');
  const [customDate, setCustomDate] = useState(new Date().toISOString().split('T')[0]);
  const [customPoints, setCustomPoints] = useState(0.5);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const existingSet = new Set(existingBadgeNames.map(n => n.toLowerCase().trim()));

  const filteredCatalog = REPOSITORY_BADGES.filter(b =>
    searchQuery === '' || b.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddFromCatalog = (b: typeof REPOSITORY_BADGES[0]) => {
    const newBadge: ArcadeBadge = {
      id: `badge-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
      name: b.name,
      category: b.category,
      dateEarned: new Date().toISOString().split('T')[0],
      pointsContribution: b.pointsContribution,
      description: b.description,
      season: b.season,
      isVerified: true
    };
    onAddBadge(newBadge);
    confetti({
      particleCount: 30,
      spread: 50,
      colors: ['#F59E0B', '#10B981']
    });
  };

  const handleAddCustom = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanName = sanitizeText(customName, 120);
    if (!cleanName) return;

    const safePoints = Math.max(0.5, Math.min(10, customPoints || 0.5));
    const safeDate = safeIsoDate(customDate);

    const newBadge: ArcadeBadge = {
      id: `custom-badge-${Date.now()}`,
      name: cleanName,
      category: customCategory,
      dateEarned: safeDate,
      pointsContribution: safePoints,
      isVerified: true,
      season: 'Season 2026'
    };

    onAddBadge(newBadge);
    confetti({
      particleCount: 40,
      spread: 60,
      colors: ['#EA580C', '#F59E0B']
    });

    setCustomName('');
    onClose();
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/40 backdrop-blur-sm animate-fadeIn"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl max-w-2xl w-full border border-[#EADBCE] shadow-2xl overflow-hidden"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#EADBCE] bg-[#FAF7F2]">
          <div>
            <span className="font-pixel text-[10px] text-[#B45309] font-bold uppercase">
              Badge Catalog
            </span>
            <h3 className="font-display font-bold text-xl text-stone-900 mt-0.5">
              Add Badge to Calculation
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-800 hover:bg-stone-200/50 rounded-xl transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switch */}
        <div className="flex border-b border-[#EADBCE] bg-[#FAF7F2]/50 px-6 pt-2">
          <button
            onClick={() => setTab('catalog')}
            className={`px-4 py-2.5 text-xs font-bold border-b-2 transition ${
              tab === 'catalog'
                ? 'border-[#B45309] text-[#B45309]'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            Official Badge Catalog
          </button>
          <button
            onClick={() => setTab('custom')}
            className={`px-4 py-2.5 text-xs font-bold border-b-2 transition ${
              tab === 'custom'
                ? 'border-[#B45309] text-[#B45309]'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            Create Custom Badge
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[65vh] overflow-y-auto">
          {tab === 'catalog' ? (
            <div>
              {/* Search */}
              <div className="relative mb-4">
                <Search className="w-4 h-4 absolute left-3.5 top-3 text-stone-400" />
                <input
                  type="text"
                  maxLength={100}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search official games, trivia, skill badges..."
                  className="w-full pl-10 pr-4 py-2 bg-[#FAF7F2] border border-[#EADBCE] rounded-xl text-xs sm:text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                />
              </div>

              {/* Badges list */}
              <div className="space-y-2">
                {filteredCatalog.map((b, i) => {
                  const isAlreadyAdded = existingSet.has(b.name.toLowerCase().trim());
                  return (
                    <div
                      key={i}
                      className="p-3 bg-[#FAF7F2] hover:bg-[#F4ECE1] rounded-2xl border border-[#EADBCE] flex items-center justify-between transition"
                    >
                      <div className="pr-4">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-[10px] font-mono px-2 py-0.2 rounded bg-white text-stone-600 border border-[#EADBCE]">
                            {b.category.toUpperCase()}
                          </span>
                          <span className="font-pixel text-[10px] text-[#B45309]">
                            +{b.pointsContribution} pt
                          </span>
                        </div>
                        <h5 className="font-sans font-bold text-xs sm:text-sm text-stone-800">
                          {b.name}
                        </h5>
                      </div>

                      <button
                        onClick={() => handleAddFromCatalog(b)}
                        disabled={isAlreadyAdded}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold font-sans transition flex items-center gap-1 shrink-0 ${
                          isAlreadyAdded
                            ? 'bg-[#ECFDF5] text-[#059669] border border-[#A7F3D0] cursor-default'
                            : 'bg-[#B45309] hover:bg-[#92400E] text-white shadow-sm'
                        }`}
                      >
                        {isAlreadyAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5" /> Added
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" /> Add
                          </>
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            /* Custom Badge Form */
            <form onSubmit={handleAddCustom} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-stone-700 font-sans mb-1">
                  Badge Title:
                </label>
                <input
                  type="text"
                  required
                  maxLength={120}
                  value={customName}
                  onChange={(e) => setCustomName(e.target.value)}
                  placeholder="e.g. Google Cloud Certified Professional Cloud Architect"
                  className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#EADBCE] rounded-xl text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-stone-700 font-sans mb-1">
                    Category:
                  </label>
                  <select
                    value={customCategory}
                    onChange={(e) => {
                      const cat = e.target.value as BadgeCategory;
                      setCustomCategory(cat);
                      if (cat === 'game' || cat === 'trivia') setCustomPoints(1);
                      else if (cat === 'skill') setCustomPoints(0.5);
                      else setCustomPoints(2);
                    }}
                    className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#EADBCE] rounded-xl text-xs sm:text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                  >
                    <option value="skill">Skill Badge (1/2 pool)</option>
                    <option value="game">Arcade Game (1 pt)</option>
                    <option value="trivia">Trivia Badge (1 pt)</option>
                    <option value="milestone">Milestone Bonus (2-6 pts)</option>
                    <option value="special">Special Sprint / Cert (2 pts)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 font-sans mb-1">
                    Completion Date:
                  </label>
                  <input
                    type="date"
                    required
                    value={customDate}
                    onChange={(e) => setCustomDate(e.target.value)}
                    className="w-full px-3.5 py-2 bg-[#FAF7F2] border border-[#EADBCE] rounded-xl text-xs sm:text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 font-sans mb-1">
                  Points Contribution ({customPoints} pt):
                </label>
                <input
                  type="number"
                  step="0.5"
                  min="0.5"
                  max="10"
                  value={customPoints}
                  onChange={(e) => setCustomPoints(parseFloat(e.target.value) || 0.5)}
                  className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#EADBCE] rounded-xl text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-[#EADBCE]">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-stone-600 hover:bg-stone-100 rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={!customName.trim()}
                  className="px-5 py-2 bg-gradient-to-r from-[#F59E0B] to-[#EA580C] text-white text-xs font-bold rounded-xl shadow-arcade-amber hover:shadow-sm transition disabled:opacity-50"
                >
                  Add Custom Badge
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
