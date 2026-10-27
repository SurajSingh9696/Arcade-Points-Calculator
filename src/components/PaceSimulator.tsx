import React, { useState } from 'react';
import { PointsBreakdown } from '../types/arcade';
import { SWAG_TIERS } from '../data/swagTiers';
import { Sliders, Zap, Target } from 'lucide-react';

interface PaceSimulatorProps {
  breakdown: PointsBreakdown;
}

export const PaceSimulator: React.FC<PaceSimulatorProps> = ({ breakdown }) => {
  const [weeklyPace, setWeeklyPace] = useState<number>(3);
  const [targetTierId, setTargetTierId] = useState<string>(
    breakdown.nextTier ? breakdown.nextTier.id : 'legend'
  );

  const selectedTier = SWAG_TIERS.find(t => t.id === targetTierId) || SWAG_TIERS[SWAG_TIERS.length - 1];
  const pointsRemaining = Math.max(0, selectedTier.minPoints - breakdown.totalPoints);

  const avgPointsPerBadge = 0.7;
  const badgesNeeded = Math.ceil(pointsRemaining / avgPointsPerBadge);
  const weeksNeeded = Math.ceil(badgesNeeded / Math.max(1, weeklyPace));
  const daysNeeded = weeksNeeded * 7;

  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + daysNeeded);
  const formattedDate = targetDate.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className="bg-white rounded-3xl p-4 sm:p-6 lg:p-8 border border-[#EADBCE] shadow-soft mb-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full bg-[#FEF3C7] text-[#B45309] font-mono text-xs font-semibold border border-[#FDE68A] flex items-center gap-1">
              <Sliders className="w-3.5 h-3.5" />
              What-If Projection Engine
            </span>
            <span className="text-xs font-mono text-stone-500">
              Interactive Goal Planning
            </span>
          </div>
          <h3 className="font-display font-bold text-xl sm:text-2xl text-[#292524] tracking-tight">
            Target Pace & Velocity Simulator
          </h3>
          <p className="text-stone-600 text-xs sm:text-sm mt-1">
            Adjust your planned completion speed to see exactly when you will unlock your dream swag tier.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        
        {/* Controls (7 cols) */}
        <div className="lg:col-span-7 space-y-4 sm:space-y-6">
          
          {/* Target Tier Selection (Clean 2x2 or 4-col) */}
          <div>
            <label className="block text-xs font-bold text-stone-700 font-sans mb-2 flex items-center gap-1.5">
              <Target className="w-4 h-4 text-arcade-amber" />
              Select Target Swag Goal:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {SWAG_TIERS.filter(t => t.id !== 'novice').map((tier) => (
                <button
                  key={tier.id}
                  onClick={() => setTargetTierId(tier.id)}
                  className={`p-2.5 sm:p-3 rounded-2xl border text-left transition flex flex-col justify-between ${
                    targetTierId === tier.id
                      ? 'bg-[#FEF3C7] border-[#B45309] ring-2 ring-[#F59E0B]/30'
                      : 'bg-[#FAF7F2] border-[#EADBCE] hover:bg-[#F4ECE1]'
                  }`}
                >
                  <span className="block text-xs font-bold text-stone-800 font-display">
                    {tier.name}
                  </span>
                  <span className="block text-[10px] sm:text-[11px] font-mono text-[#B45309] mt-1">
                    {tier.minPoints}+ pts
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Slider for Weekly Badges Pace */}
          <div className="p-3.5 sm:p-4 bg-[#FAF7F2] rounded-2xl border border-[#EADBCE]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-stone-700 font-sans flex items-center gap-1">
                <Zap className="w-4 h-4 text-arcade-coral" />
                Target Weekly Pace:
              </span>
              <span className="font-pixel text-xs sm:text-sm text-[#B45309]">
                {weeklyPace} {weeklyPace === 1 ? 'badge' : 'badges'} / week
              </span>
            </div>

            <input
              type="range"
              min="1"
              max="10"
              step="1"
              value={weeklyPace}
              onChange={(e) => setWeeklyPace(parseInt(e.target.value, 10))}
              className="w-full h-2 bg-[#EADBCE] rounded-lg appearance-none cursor-pointer accent-[#B45309]"
            />

            <div className="flex justify-between text-[9px] sm:text-[10px] font-mono text-stone-500 mt-2">
              <span>1 badge (Casual)</span>
              <span>3 badges (Steady)</span>
              <span>5 badges (Fast)</span>
              <span>10 badges (Speedrun)</span>
            </div>
          </div>

        </div>

        {/* Projection Result Card (5 cols) */}
        <div className="lg:col-span-5 p-5 sm:p-6 bg-gradient-to-br from-[#FEF3C7] via-[#FFFDF9] to-[#FAF5EE] rounded-3xl border border-[#FDE68A] shadow-soft">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono font-bold text-[#B45309] uppercase tracking-wider">
              Simulation Forecast
            </span>
            <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-white text-stone-700 border border-[#EADBCE]">
              {selectedTier.name}
            </span>
          </div>

          <div className="my-3">
            <p className="text-xs text-stone-600 font-sans">Estimated Arrival Date:</p>
            <p className="font-display font-bold text-xl sm:text-2xl text-stone-900 mt-0.5">
              {formattedDate}
            </p>
            <p className="text-xs font-mono text-stone-500 mt-1">
              in ~{weeksNeeded} weeks ({daysNeeded} days)
            </p>
          </div>

          <div className="space-y-1.5 pt-3 border-t border-[#FDE68A] text-xs font-sans">
            <div className="flex justify-between">
              <span className="text-stone-600">Points Remaining:</span>
              <span className="font-mono font-bold text-[#B45309]">{pointsRemaining} pts</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-600">Est. Badges Needed:</span>
              <span className="font-mono font-bold text-stone-800">~{badgesNeeded} badges</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-600">Weekly Pace:</span>
              <span className="font-mono font-bold text-[#059669]">{weeklyPace} badges/wk</span>
            </div>
          </div>

          <div className="mt-4 p-3 bg-white/80 backdrop-blur-sm rounded-2xl border border-[#EADBCE] text-[11px] text-stone-600 leading-snug">
            💡 <strong>Pro-Tip:</strong> Complete the weekly Trivia Badges (1 pt every Monday) and bi-weekly Arcade Game levels to maximize your points per hour!
          </div>
        </div>

      </div>
    </div>
  );
};
