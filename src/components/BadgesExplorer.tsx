import React, { useState, useMemo } from 'react';
import { ArcadeBadge, BadgeCategory } from '../types/arcade';
import { Search, Plus, Trash2, Award, Filter, Calendar } from 'lucide-react';

interface BadgesExplorerProps {
  badges: ArcadeBadge[];
  onAddBadgeClick: () => void;
  onDeleteBadge: (badgeId: string) => void;
}

export const BadgesExplorer: React.FC<BadgesExplorerProps> = ({
  badges,
  onAddBadgeClick,
  onDeleteBadge
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'name'>('newest');

  // Count by category
  const counts = useMemo(() => {
    const c = { all: badges.length, game: 0, trivia: 0, skill: 0, milestone: 0, special: 0 };
    badges.forEach(b => {
      if (b.category in c) {
        c[b.category as keyof typeof c]++;
      }
    });
    return c;
  }, [badges]);

  // Filtered & sorted badges
  const filteredBadges = useMemo(() => {
    return badges
      .filter(b => {
        const matchesCategory = selectedCategory === 'all' || b.category === selectedCategory;
        const matchesSearch = searchQuery === '' || b.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'newest') {
          return new Date(b.dateEarned).getTime() - new Date(a.dateEarned).getTime();
        }
        if (sortBy === 'oldest') {
          return new Date(a.dateEarned).getTime() - new Date(b.dateEarned).getTime();
        }
        return a.name.localeCompare(b.name);
      });
  }, [badges, selectedCategory, searchQuery, sortBy]);

  const getCategoryStyles = (category: BadgeCategory) => {
    switch (category) {
      case 'game':
        return { label: 'Arcade Game', bg: 'bg-[#FEF3C7]', text: 'text-[#B45309]', border: 'border-[#FDE68A]' };
      case 'trivia':
        return { label: 'Trivia Badge', bg: 'bg-[#FFEDD5]', text: 'text-[#C2410C]', border: 'border-[#FED7AA]' };
      case 'skill':
        return { label: 'Skill Badge', bg: 'bg-[#ECFDF5]', text: 'text-[#047857]', border: 'border-[#A7F3D0]' };
      case 'milestone':
        return { label: 'Milestone Bonus', bg: 'bg-[#F3E8FF]', text: 'text-[#7E22CE]', border: 'border-[#E9D5FF]' };
      case 'special':
        return { label: 'Special Sprint', bg: 'bg-[#FFF1F2]', text: 'text-[#BE123C]', border: 'border-[#FECDD3]' };
    }
  };

  return (
    <div className="bg-white rounded-3xl p-4 sm:p-6 lg:p-8 border border-[#EADBCE] shadow-soft mb-8">
      {/* Header & Add Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full bg-[#FEF3C7] text-[#B45309] font-mono text-xs font-semibold border border-[#FDE68A]">
              Earned Badges Repository
            </span>
            <span className="text-xs font-mono text-stone-500">
              Total: {badges.length} badges
            </span>
          </div>
          <h3 className="font-display font-bold text-xl sm:text-2xl text-[#292524] tracking-tight">
            Individual Badges & Contributions
          </h3>
          <p className="text-stone-600 text-xs sm:text-sm mt-1">
            Inspect every Google Cloud badge earned, verification status, completion timestamp, and point contribution.
          </p>
        </div>

        <button
          onClick={onAddBadgeClick}
          className="px-5 py-2.5 bg-[#B45309] hover:bg-[#92400E] text-white rounded-2xl text-xs sm:text-sm font-semibold font-display shadow-arcade-amber hover:shadow-sm active:translate-y-0.5 transition flex items-center justify-center gap-2 shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Add Official Badge</span>
        </button>
      </div>

      {/* Filter Tabs (Horizontal scroll on mobile, flex-wrap on desktop) */}
      <div className="flex overflow-x-auto no-scrollbar gap-1.5 sm:gap-2 mb-5 pb-1">
        {[
          { key: 'all', label: 'All Badges', count: counts.all },
          { key: 'game', label: 'Games (1 pt)', count: counts.game },
          { key: 'trivia', label: 'Trivia (1 pt)', count: counts.trivia },
          { key: 'skill', label: 'Skill Labs (1/2 pt)', count: counts.skill },
          { key: 'milestone', label: 'Milestones (Bonus)', count: counts.milestone },
          { key: 'special', label: 'Cert & Sprints', count: counts.special },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setSelectedCategory(tab.key)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold font-sans transition flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
              selectedCategory === tab.key
                ? 'bg-[#292524] text-white shadow-sm'
                : 'bg-[#FAF7F2] text-stone-600 hover:bg-[#F4ECE1] border border-[#EADBCE]'
            }`}
          >
            <span>{tab.label}</span>
            <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
              selectedCategory === tab.key ? 'bg-stone-700 text-stone-200' : 'bg-white text-stone-500'
            }`}>
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* Search & Sort Controls */}
      <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 mb-6">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter by title (e.g. BigQuery, Terraform, Security, Vertex AI)..."
            className="w-full pl-10 pr-4 py-2 sm:py-2.5 bg-[#FAF7F2] border border-[#EADBCE] rounded-2xl text-xs sm:text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
          />
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs font-semibold text-stone-500 font-sans flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Sort:
          </span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="px-3 py-2 bg-[#FAF7F2] border border-[#EADBCE] rounded-2xl text-xs font-sans text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
          >
            <option value="newest">Earned (Newest First)</option>
            <option value="oldest">Earned (Oldest First)</option>
            <option value="name">Badge Title (A-Z)</option>
          </select>
        </div>
      </div>

      {/* Badges Grid (1 col mobile, 2 col tablet/laptop, 3 col desktop) */}
      {filteredBadges.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {filteredBadges.map((badge) => {
            const styles = getCategoryStyles(badge.category);
            return (
              <div
                key={badge.id}
                className="p-3.5 sm:p-4 bg-[#FAF7F2] hover:bg-[#F4ECE1] rounded-2xl border border-[#EADBCE] transition flex flex-col justify-between group"
              >
                <div>
                  {/* Category Pill & Points Contribution */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className={`px-2 py-0.5 rounded-lg text-[10px] font-mono font-bold border ${styles.bg} ${styles.text} ${styles.border}`}>
                      {styles.label}
                    </span>
                    <span className="font-pixel text-[11px] text-[#B45309] font-bold">
                      +{badge.pointsContribution} {badge.category === 'skill' ? 'pt pool' : 'pt'}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="font-sans font-bold text-xs sm:text-sm text-stone-800 leading-snug group-hover:text-[#B45309] transition-colors">
                    {badge.name}
                  </h4>

                  {/* Description if available */}
                  {badge.description && (
                    <p className="text-[11px] sm:text-xs text-stone-500 mt-1 line-clamp-2">
                      {badge.description}
                    </p>
                  )}
                </div>

                {/* Footer: Date & Delete button */}
                <div className="flex items-center justify-between pt-3 mt-3 border-t border-[#EADBCE]/80 text-[11px] font-mono text-stone-500">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-stone-400" />
                    <span>{badge.dateEarned}</span>
                  </div>

                  <button
                    onClick={() => {
                      if (window.confirm(`Remove "${badge.name}" from your badges calculation?`)) {
                        onDeleteBadge(badge.id);
                      }
                    }}
                    className="p-1.5 text-stone-400 hover:text-[#BE123C] hover:bg-white rounded-lg transition"
                    title="Remove badge from calculation"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="p-8 sm:p-12 text-center bg-[#FAF7F2] rounded-3xl border border-[#EADBCE]">
          <Award className="w-10 h-10 text-stone-400 mx-auto mb-2 opacity-50" />
          <p className="font-display font-bold text-stone-700 text-sm sm:text-base">No matching badges found</p>
          <p className="text-stone-500 text-xs mt-1">Try clearing the search filter or add badges to your profile.</p>
        </div>
      )}
    </div>
  );
};
