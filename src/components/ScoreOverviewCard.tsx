import React from 'react';
import { PointsBreakdown, UserProfile } from '../types/arcade';
import { ThreeArcadeToken } from './ThreeArcadeToken';
import { Trophy, Flame, ChevronRight } from 'lucide-react';

interface ScoreOverviewCardProps {
  breakdown: PointsBreakdown;
  currentProfile: UserProfile;
  onOpenBadgesTab: () => void;
  onOpenSwagTab: () => void;
}

export const ScoreOverviewCard: React.FC<ScoreOverviewCardProps> = ({
  breakdown,
  currentProfile,
  onOpenBadgesTab,
  onOpenSwagTab
}) => {
  const { currentTier, nextTier, totalPoints, pointsToNextTier, progressToNextTierPercent } = breakdown;

  return (
    <div className="bg-white rounded-3xl p-4 sm:p-6 lg:p-8 border border-[#EADBCE] shadow-soft mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        
        {/* Left Side: Score & Formula breakdown (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          
          {/* Header pill & profile name */}
          <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-3">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold font-mono border"
              style={{
                backgroundColor: currentTier.bgColor,
                color: currentTier.color,
                borderColor: currentTier.borderColor
              }}
            >
              <Trophy className="w-3.5 h-3.5" />
              {currentTier.name} ({currentTier.badgeLevel})
            </span>
            <span className="text-xs font-mono text-stone-500">
              Profile: <span className="font-semibold text-stone-800">{currentProfile.id ? currentProfile.name : 'Unlinked Account'}</span>
            </span>
          </div>

          {/* Arcade Big Score Counter */}
          <div className="my-1 sm:my-2">
            <div className="flex items-baseline gap-2 sm:gap-3 flex-wrap">
              <span className="font-pixel text-3xl sm:text-5xl lg:text-6xl text-[#B45309] tracking-tight drop-shadow-sm">
                {totalPoints}
              </span>
              <span className="font-pixel text-base sm:text-2xl text-stone-700">
                POINTS
              </span>
            </div>
            <p className="font-serif italic text-stone-600 text-xs sm:text-sm mt-1">
              Google Cloud Arcade 2026 Verified Score
            </p>
          </div>

          {/* Next Tier Progress Bar */}
          <div className="my-4 sm:my-5 p-3.5 sm:p-4 bg-[#FAF7F2] rounded-2xl border border-[#EADBCE]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-semibold gap-1 mb-2">
              <span className="text-stone-700 flex items-center gap-1">
                <Flame className="w-4 h-4 text-arcade-coral shrink-0" />
                {nextTier ? (
                  <span>
                    Next Goal: <strong className="text-stone-900">{nextTier.name}</strong> ({nextTier.minPoints} pts)
                  </span>
                ) : (
                  <span className="text-arcade-emerald font-bold">Max Tier Achieved: Grandmaster Legend!</span>
                )}
              </span>
              <span className="font-mono text-stone-500 text-[11px] sm:text-xs">
                {nextTier ? `${pointsToNextTier} pts remaining` : 'Top 1% Swag Unlocked'}
              </span>
            </div>

            {/* Progress Track */}
            <div className="w-full bg-[#EADBCE] rounded-full h-3 sm:h-3.5 overflow-hidden p-0.5">
              <div
                className="h-full rounded-full transition-all duration-700 bg-gradient-to-r from-[#F59E0B] via-[#EA580C] to-[#10B981]"
                style={{ width: `${progressToNextTierPercent}%` }}
              />
            </div>

            <div className="flex justify-between items-center mt-2 text-[10px] sm:text-[11px] font-mono text-stone-500">
              <span>{currentTier.name} ({currentTier.minPoints} pts)</span>
              <span className="font-bold text-[#B45309]">{progressToNextTierPercent}% reached</span>
              {nextTier && <span>{nextTier.name} ({nextTier.minPoints} pts)</span>}
            </div>
          </div>

          {/* Detailed Points Formula Breakdown Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-2.5 pt-1">
            
            {/* Games */}
            <div
              onClick={onOpenBadgesTab}
              className="p-2.5 sm:p-3 bg-[#FAF7F2] hover:bg-[#F4ECE1] rounded-2xl border border-[#EADBCE] cursor-pointer transition flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-bold text-stone-500 font-sans group-hover:text-stone-800">
                  Games
                </span>
                <span className="text-[9px] font-mono px-1 py-0.2 rounded bg-white text-stone-600 border border-[#EADBCE]">
                  1 pt
                </span>
              </div>
              <div className="flex items-baseline justify-between mt-1">
                <span className="font-pixel text-xs sm:text-sm text-[#B45309]">
                  +{breakdown.gamePoints}
                </span>
                <span className="text-[10px] sm:text-xs font-mono text-stone-500">
                  {breakdown.gameCount} badges
                </span>
              </div>
            </div>

            {/* Trivia */}
            <div
              onClick={onOpenBadgesTab}
              className="p-2.5 sm:p-3 bg-[#FAF7F2] hover:bg-[#F4ECE1] rounded-2xl border border-[#EADBCE] cursor-pointer transition flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-bold text-stone-500 font-sans group-hover:text-stone-800">
                  Trivia
                </span>
                <span className="text-[9px] font-mono px-1 py-0.2 rounded bg-white text-stone-600 border border-[#EADBCE]">
                  1 pt
                </span>
              </div>
              <div className="flex items-baseline justify-between mt-1">
                <span className="font-pixel text-xs sm:text-sm text-[#B45309]">
                  +{breakdown.triviaPoints}
                </span>
                <span className="text-[10px] sm:text-xs font-mono text-stone-500">
                  {breakdown.triviaCount} badges
                </span>
              </div>
            </div>

            {/* Skill Badges */}
            <div
              onClick={onOpenBadgesTab}
              className="p-2.5 sm:p-3 bg-[#FAF7F2] hover:bg-[#F4ECE1] rounded-2xl border border-[#EADBCE] cursor-pointer transition flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-bold text-stone-500 font-sans group-hover:text-stone-800">
                  Skill Badges
                </span>
                <span className="text-[9px] font-mono px-1 py-0.2 rounded bg-white text-stone-600 border border-[#EADBCE]">
                  1/2 ratio
                </span>
              </div>
              <div className="flex items-baseline justify-between mt-1">
                <span className="font-pixel text-xs sm:text-sm text-[#059669]">
                  +{breakdown.skillPoints}
                </span>
                <span className="text-[10px] sm:text-xs font-mono text-stone-500">
                  {breakdown.skillCount} badges
                </span>
              </div>
            </div>

            {/* Milestones & Special */}
            <div
              onClick={onOpenSwagTab}
              className="p-2.5 sm:p-3 bg-[#FAF7F2] hover:bg-[#F4ECE1] rounded-2xl border border-[#EADBCE] cursor-pointer transition flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-bold text-stone-500 font-sans group-hover:text-stone-800">
                  Milestones
                </span>
                <span className="text-[9px] font-mono px-1 py-0.2 rounded bg-white text-stone-600 border border-[#EADBCE]">
                  Bonus
                </span>
              </div>
              <div className="flex items-baseline justify-between mt-1">
                <span className="font-pixel text-xs sm:text-sm text-[#7E22CE]">
                  +{breakdown.milestonePoints + breakdown.specialPoints}
                </span>
                <span className="text-[10px] sm:text-xs font-mono text-stone-500">
                  {breakdown.milestoneCount + breakdown.specialCount} bonus
                </span>
              </div>
            </div>

          </div>

          {/* Quick Nav Actions */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-4 pt-3 border-t border-[#EADBCE]">
            <button
              onClick={onOpenBadgesTab}
              className="text-xs font-semibold text-[#B45309] hover:underline flex items-center gap-1"
            >
              Inspect all {breakdown.totalBadges} badges <ChevronRight className="w-3.5 h-3.5" />
            </button>
            <span className="text-stone-300">•</span>
            <button
              onClick={onOpenSwagTab}
              className="text-xs font-semibold text-[#059669] hover:underline flex items-center gap-1"
            >
              View unlocked rewards <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Right Side: Three.js Interactive 3D Token (5 cols) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center pt-4 lg:pt-0">
          <ThreeArcadeToken
            tierColor={currentTier.color}
            tierName={currentTier.name}
            points={totalPoints}
          />
        </div>

      </div>
    </div>
  );
};
