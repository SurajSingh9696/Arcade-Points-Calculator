import React from 'react';
import { SWAG_TIERS } from '../data/swagTiers';
import { PointsBreakdown } from '../types/arcade';
import { Gift, CheckCircle2, Lock, Sparkles, PackageCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

interface SwagMilestonesProps {
  breakdown: PointsBreakdown;
}

export const SwagMilestones: React.FC<SwagMilestonesProps> = ({ breakdown }) => {
  const { totalPoints, currentTier } = breakdown;

  const handleCelebrateUnlocked = () => {
    confetti({
      particleCount: 50,
      spread: 70,
      colors: ['#F59E0B', '#10B981', '#9333EA']
    });
  };

  return (
    <div className="bg-white rounded-3xl p-4 sm:p-6 lg:p-8 border border-[#EADBCE] shadow-soft mb-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full bg-[#FEF3C7] text-[#B45309] font-mono text-xs font-semibold border border-[#FDE68A] flex items-center gap-1">
              <Gift className="w-3.5 h-3.5" />
              Official Prize Vault
            </span>
            <span className="text-xs font-mono text-stone-500">
              Current Points: <strong className="text-[#B45309]">{totalPoints} pts</strong>
            </span>
          </div>
          <h3 className="font-display font-bold text-xl sm:text-2xl text-[#292524] tracking-tight">
            Arcade Swag Tiers & Milestones
          </h3>
          <p className="text-stone-600 text-xs sm:text-sm mt-1">
            Official reward packages redeemable during the Google Cloud Arcade Prize Counter distribution window.
          </p>
        </div>
      </div>

      {/* Tiers List */}
      <div className="space-y-3 sm:space-y-4">
        {SWAG_TIERS.map((tier) => {
          const isUnlocked = totalPoints >= tier.minPoints;
          const isCurrent = currentTier.id === tier.id;
          const pointsNeeded = Math.max(0, tier.minPoints - totalPoints);

          return (
            <div
              key={tier.id}
              className={`p-4 sm:p-5 rounded-2xl sm:rounded-3xl border transition-all ${
                isCurrent
                  ? 'bg-[#FFFDF9] border-[#B45309] ring-2 ring-[#F59E0B]/20 shadow-md'
                  : isUnlocked
                  ? 'bg-white border-[#EADBCE]'
                  : 'bg-[#FAF7F2] border-[#EADBCE] opacity-80'
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                
                {/* Left: Tier Title & Reward Details */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span
                      className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold border"
                      style={{
                        backgroundColor: tier.bgColor,
                        color: tier.color,
                        borderColor: tier.borderColor
                      }}
                    >
                      {tier.name} ({tier.badgeLevel})
                    </span>

                    <span className="text-xs font-mono font-bold text-stone-600">
                      {tier.minPoints}+ Points
                    </span>

                    {isUnlocked ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-sans font-bold text-[#059669] bg-[#ECFDF5] px-2 py-0.5 rounded-full border border-[#A7F3D0]">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Unlocked
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-stone-500 bg-white px-2 py-0.5 rounded-full border border-[#EADBCE]">
                        <Lock className="w-3.5 h-3.5" /> Needs {pointsNeeded} more pts
                      </span>
                    )}

                    {isCurrent && (
                      <span className="text-[11px] font-sans font-bold text-[#B45309] bg-[#FEF3C7] px-2 py-0.5 rounded-full border border-[#FDE68A]">
                        Current Standing
                      </span>
                    )}
                  </div>

                  <h4 className="font-display font-bold text-base sm:text-lg text-stone-900 mt-1">
                    {tier.rewardName}
                  </h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    {tier.rewardDescription}
                  </p>

                  {/* Swag items list */}
                  <div className="mt-3 flex flex-wrap gap-1.5 sm:gap-2">
                    {tier.swagItems.map((item, i) => (
                      <span
                        key={i}
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-xs font-sans ${
                          isUnlocked
                            ? 'bg-[#FAF7F2] text-stone-800 border border-[#EADBCE]'
                            : 'bg-white text-stone-500 border border-[#EADBCE]/60'
                        }`}
                      >
                        <PackageCheck className={`w-3.5 h-3.5 shrink-0 ${isUnlocked ? 'text-[#059669]' : 'text-stone-400'}`} />
                        <span>{item}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: Status Action button */}
                <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center border-t lg:border-t-0 pt-3 lg:pt-0 border-[#EADBCE] shrink-0">
                  {isUnlocked ? (
                    <button
                      onClick={handleCelebrateUnlocked}
                      className="px-4 py-2 bg-[#ECFDF5] hover:bg-[#D1FAE5] text-[#059669] font-bold text-xs rounded-xl border border-[#A7F3D0] transition flex items-center gap-1.5 shadow-sm"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      Celebrate Prize
                    </button>
                  ) : (
                    <div className="text-right">
                      <span className="font-pixel text-xs text-[#EA580C] block">
                        -{pointsNeeded} PTS
                      </span>
                      <span className="text-[10px] font-mono text-stone-500">to unlock this tier</span>
                    </div>
                  )}
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
