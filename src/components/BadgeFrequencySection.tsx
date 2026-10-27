import React, { useState } from 'react';
import { FrequencyAnalysis, PointsBreakdown } from '../types/arcade';
import { Activity, Calendar, TrendingUp, Clock, Flame, Zap } from 'lucide-react';

interface BadgeFrequencySectionProps {
  frequency: FrequencyAnalysis;
  breakdown: PointsBreakdown;
  onOpenAddBadge?: () => void;
}

export const BadgeFrequencySection: React.FC<BadgeFrequencySectionProps> = ({
  frequency,
  breakdown,
  onOpenAddBadge
}) => {
  const [selectedWeekIndex, setSelectedWeekIndex] = useState<number | null>(
    frequency.weeklyBreakdown.length > 0 ? frequency.weeklyBreakdown.length - 1 : null
  );

  const selectedWeek = selectedWeekIndex !== null ? frequency.weeklyBreakdown[selectedWeekIndex] : null;
  const hasBadges = frequency.weeklyBreakdown.length > 0;

  return (
    <div className="bg-white rounded-3xl p-4 sm:p-6 lg:p-8 border border-[#EADBCE] shadow-soft mb-8">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full bg-[#FEF3C7] text-[#B45309] font-mono text-xs font-semibold border border-[#FDE68A] flex items-center gap-1">
              <Activity className="w-3.5 h-3.5" />
              Badge Velocity
            </span>
            {hasBadges && (
              <span className="text-xs font-mono text-stone-500">
                {frequency.totalDaysSpanned} days analyzed
              </span>
            )}
          </div>
          <h3 className="font-display font-bold text-xl sm:text-2xl text-[#292524] tracking-tight">
            Badge Frequency & Pace Analytics
          </h3>
          <p className="text-stone-600 text-xs sm:text-sm mt-1">
            Calculates how frequently you acquire Google Cloud badges and projects when you will reach subsequent swag tiers.
          </p>
        </div>

        {/* Forecast Pill */}
        {hasBadges && frequency.estimatedCompletionDate && breakdown.nextTier && (
          <div className="bg-[#FAF7F2] p-3 rounded-2xl border border-[#EADBCE] flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] sm:text-[11px] font-mono text-stone-500 uppercase">Projected Tier Reach</p>
              <p className="text-xs font-bold font-sans text-stone-800">
                {breakdown.nextTier.name}: <span className="text-[#059669] font-mono">{frequency.estimatedCompletionDate}</span>
              </p>
              <p className="text-[10px] text-stone-500 font-sans">
                in ~{frequency.estimatedDaysToNextTier} days at current velocity
              </p>
            </div>
          </div>
        )}
      </div>

      {!hasBadges ? (
        /* Clean Professional Empty State */
        <div className="p-8 sm:p-12 text-center bg-[#FAF7F2] rounded-2xl border border-[#EADBCE]">
          <div className="w-12 h-12 rounded-2xl bg-[#FEF3C7] text-[#B45309] flex items-center justify-center mx-auto mb-3 border border-[#FDE68A] shadow-xs">
            <Activity className="w-6 h-6" />
          </div>
          <h4 className="font-display font-bold text-stone-800 text-base sm:text-lg">
            Frequency Analytics Ready
          </h4>
          <p className="text-stone-600 text-xs sm:text-sm mt-1 max-w-md mx-auto leading-relaxed">
            Your badge completion cadence, weekly velocity timeline, active streaks, and forecasted swag milestone dates will automatically calculate as soon as your badges are synced to your account.
          </p>
          {onOpenAddBadge && (
            <button
              onClick={onOpenAddBadge}
              className="mt-4 px-4 py-2 bg-[#B45309] hover:bg-[#92400E] text-white text-xs font-bold rounded-xl transition shadow-xs"
            >
              + Record Badges to Start Tracking
            </button>
          )}
        </div>
      ) : (
        <>
          {/* 4 Key Frequency Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 mb-6 sm:mb-8">
            
            {/* Weekly Velocity */}
            <div className="p-3 sm:p-4 bg-[#FAF7F2] rounded-2xl border border-[#EADBCE] flex flex-col justify-between">
              <div className="flex items-center justify-between text-stone-500 text-[11px] sm:text-xs mb-1.5 font-sans">
                <span>Weekly Cadence</span>
                <TrendingUp className="w-4 h-4 text-arcade-amber shrink-0" />
              </div>
              <div className="flex items-baseline gap-1.5 flex-wrap">
                <span className="font-pixel text-lg sm:text-2xl text-[#B45309]">
                  {frequency.badgesPerWeek}
                </span>
                <span className="text-[10px] sm:text-xs font-mono text-stone-600 font-semibold">badges/wk</span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-stone-500 mt-1 font-sans">
                ~{frequency.badgesPerMonth} badges/mo
              </p>
            </div>

            {/* Avg Days Between Badges */}
            <div className="p-3 sm:p-4 bg-[#FAF7F2] rounded-2xl border border-[#EADBCE] flex flex-col justify-between">
              <div className="flex items-center justify-between text-stone-500 text-[11px] sm:text-xs mb-1.5 font-sans">
                <span>Average Interval</span>
                <Clock className="w-4 h-4 text-arcade-coral shrink-0" />
              </div>
              <div className="flex items-baseline gap-1.5 flex-wrap">
                <span className="font-pixel text-lg sm:text-2xl text-[#EA580C]">
                  {frequency.avgDaysBetweenBadges}
                </span>
                <span className="text-[10px] sm:text-xs font-mono text-stone-600 font-semibold">days/badge</span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-stone-500 mt-1 font-sans truncate">
                {frequency.firstBadgeDate} to {frequency.latestBadgeDate}
              </p>
            </div>

            {/* Active Weekly Streak */}
            <div className="p-3 sm:p-4 bg-[#FAF7F2] rounded-2xl border border-[#EADBCE] flex flex-col justify-between">
              <div className="flex items-center justify-between text-stone-500 text-[11px] sm:text-xs mb-1.5 font-sans">
                <span>Weekly Streak</span>
                <Flame className="w-4 h-4 text-arcade-ruby shrink-0" />
              </div>
              <div className="flex items-baseline gap-1.5 flex-wrap">
                <span className="font-pixel text-lg sm:text-2xl text-[#E11D48]">
                  {frequency.currentActiveStreakWeeks}
                </span>
                <span className="text-[10px] sm:text-xs font-mono text-stone-600 font-semibold">weeks active</span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-stone-500 mt-1 font-sans">
                Consecutive weeks with badges
              </p>
            </div>

            {/* Peak Record Week */}
            <div className="p-3 sm:p-4 bg-[#FAF7F2] rounded-2xl border border-[#EADBCE] flex flex-col justify-between">
              <div className="flex items-center justify-between text-stone-500 text-[11px] sm:text-xs mb-1.5 font-sans">
                <span>Peak Week Velocity</span>
                <Zap className="w-4 h-4 text-arcade-emerald shrink-0" />
              </div>
              <div className="flex items-baseline gap-1.5 flex-wrap">
                <span className="font-pixel text-lg sm:text-2xl text-[#059669]">
                  {frequency.maxWeeklyCadence}
                </span>
                <span className="text-[10px] sm:text-xs font-mono text-stone-600 font-semibold">badges in 1 wk</span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-stone-500 mt-1 font-sans">
                Single week personal record
              </p>
            </div>

          </div>

          {/* Interactive Weekly Cadence Bar Chart */}
          <div className="mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
              <h4 className="font-display font-bold text-sm sm:text-base text-stone-800 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-arcade-amber shrink-0" />
                Weekly Completion Cadence Timeline
              </h4>
              <span className="text-[11px] font-mono text-stone-500">
                Click any bar to inspect badges earned in that week
              </span>
            </div>

            <div className="p-3 sm:p-5 bg-[#FAF7F2] rounded-2xl border border-[#EADBCE]">
              {/* Chart Bars */}
              <div className="flex items-end gap-2 sm:gap-4 h-40 sm:h-48 pt-6 pb-2 px-1 sm:px-2 overflow-x-auto no-scrollbar">
                {frequency.weeklyBreakdown.map((week, idx) => {
                  const max = Math.max(1, frequency.maxWeeklyCadence);
                  const heightPercent = Math.max(15, Math.round((week.count / max) * 100));
                  const isSelected = selectedWeekIndex === idx;

                  return (
                    <button
                      key={week.startDate}
                      onClick={() => setSelectedWeekIndex(idx)}
                      className="flex-1 min-w-[42px] sm:min-w-[50px] flex flex-col items-center group relative h-full justify-end focus:outline-none"
                    >
                      {/* Badge Count on top of bar */}
                      <span className="text-[10px] font-mono font-bold text-stone-700 mb-1 group-hover:text-[#B45309] transition-colors">
                        {week.count}
                      </span>

                      {/* Bar */}
                      <div
                        className={`w-full rounded-t-xl transition-all duration-300 ${
                          isSelected
                            ? 'bg-gradient-to-t from-[#B45309] to-[#F59E0B] shadow-arcade-amber scale-105'
                            : 'bg-gradient-to-t from-[#D6C0A5] to-[#EADBC8] group-hover:from-[#BF9E79] group-hover:to-[#D6C0A5]'
                        }`}
                        style={{ height: `${heightPercent}%` }}
                      />

                      {/* Label */}
                      <span className={`text-[9px] sm:text-[10px] font-mono mt-1.5 truncate w-full text-center ${
                        isSelected ? 'font-bold text-[#B45309]' : 'text-stone-500'
                      }`}>
                        Wk {idx + 1}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Selected Week Inspector Drawer */}
              {selectedWeek && (
                <div className="mt-4 pt-4 border-t border-[#EADBCE] animate-fadeIn">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <span className="text-xs font-bold text-stone-800 font-display">
                      {selectedWeek.weekLabel} ({selectedWeek.startDate} to {selectedWeek.endDate}):
                    </span>
                    <span className="text-xs font-mono text-[#B45309] font-bold">
                      {selectedWeek.count} badges • ~{selectedWeek.points} points
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {selectedWeek.badges.map((b) => (
                      <span
                        key={b.id}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white rounded-xl text-xs border border-[#EADBCE] text-stone-700 shadow-xs"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#F59E0B] shrink-0" />
                        <span className="truncate max-w-[200px] sm:max-w-none">{b.name}</span>
                        <span className="text-[10px] font-mono text-stone-400">({b.category})</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Day of the Week Distribution */}
          <div>
            <h4 className="font-display font-bold text-sm sm:text-base text-stone-800 mb-2.5 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-arcade-coral shrink-0" />
              Day-of-Week Earning Pattern
            </h4>
            <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
              {frequency.dayOfWeekBreakdown.map((item) => (
                <div
                  key={item.day}
                  className="p-2 sm:p-3 bg-[#FAF7F2] rounded-2xl border border-[#EADBCE] text-center"
                >
                  <span className="text-[10px] sm:text-[11px] font-mono font-bold text-stone-500 block mb-0.5">
                    {item.day}
                  </span>
                  <span className="font-pixel text-xs sm:text-sm text-[#292524] block">
                    {item.count}
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-mono text-[#B45309] block mt-0.5">
                    {item.percentage}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

    </div>
  );
};
