import { ArcadeBadge, PointsBreakdown, FrequencyAnalysis, SwagTier } from '../types/arcade';
import { SWAG_TIERS } from '../data/swagTiers';

function parseSafeTimestamp(dateStr?: string): number {
  if (!dateStr) return Date.now();
  const t = new Date(dateStr).getTime();
  return isNaN(t) ? Date.now() : t;
}

export function calculatePoints(
  badges: ArcadeBadge[] = [],
  skillRatio: number = 2
): PointsBreakdown {
  const safeRatio = Math.max(1, Math.min(5, skillRatio || 2));
  let gameCount = 0;
  let gamePoints = 0;

  let triviaCount = 0;
  let triviaPoints = 0;

  let skillCount = 0;

  let milestoneCount = 0;
  let explicitMilestonePoints = 0;

  let specialCount = 0;
  let specialPoints = 0;

  badges.forEach((b) => {
    if (!b) return;
    const pointsContrib = typeof b.pointsContribution === 'number' && !isNaN(b.pointsContribution) && b.pointsContribution >= 0
      ? b.pointsContribution
      : 1;

    switch (b.category) {
      case 'game':
        gameCount++;
        gamePoints += pointsContrib;
        break;
      case 'trivia':
        triviaCount++;
        triviaPoints += pointsContrib;
        break;
      case 'skill':
        skillCount++;
        break;
      case 'milestone':
        milestoneCount++;
        explicitMilestonePoints += pointsContrib;
        break;
      case 'special':
        specialCount++;
        specialPoints += pointsContrib;
        break;
      default:
        skillCount++;
        break;
    }
  });

  const skillPoints = Math.floor(skillCount / safeRatio);

  let milestonePoints = explicitMilestonePoints;
  if (milestoneCount === 0) {
    if (skillCount >= 24) {
      milestonePoints = 6;
    } else if (skillCount >= 16) {
      milestonePoints = 4;
    } else if (skillCount >= 8) {
      milestonePoints = 2;
    }
  }

  // Prevent floating point artifacts
  const rawTotal = gamePoints + triviaPoints + skillPoints + milestonePoints + specialPoints;
  const totalPoints = Math.max(0, Math.round(rawTotal * 10) / 10);
  const totalBadges = badges.length;

  let currentTier: SwagTier = SWAG_TIERS[0];
  let nextTier: SwagTier | null = SWAG_TIERS[1];

  for (let i = SWAG_TIERS.length - 1; i >= 0; i--) {
    if (totalPoints >= SWAG_TIERS[i].minPoints) {
      currentTier = SWAG_TIERS[i];
      nextTier = i < SWAG_TIERS.length - 1 ? SWAG_TIERS[i + 1] : null;
      break;
    }
  }

  const pointsToNextTier = nextTier ? Math.max(0, Math.round((nextTier.minPoints - totalPoints) * 10) / 10) : 0;
  let progressToNextTierPercent = 100;
  if (nextTier) {
    const tierRange = nextTier.minPoints - currentTier.minPoints;
    const pointsGainedInTier = totalPoints - currentTier.minPoints;
    progressToNextTierPercent = Math.min(100, Math.max(0, Math.round((pointsGainedInTier / Math.max(1, tierRange)) * 100)));
  }

  return {
    gamePoints: Math.round(gamePoints * 10) / 10,
    gameCount,
    triviaPoints: Math.round(triviaPoints * 10) / 10,
    triviaCount,
    skillPoints,
    skillCount,
    skillRatio: safeRatio,
    milestonePoints: Math.round(milestonePoints * 10) / 10,
    milestoneCount,
    specialPoints: Math.round(specialPoints * 10) / 10,
    specialCount,
    totalPoints,
    totalBadges,
    currentTier,
    nextTier,
    pointsToNextTier,
    progressToNextTierPercent
  };
}

export function analyzeFrequency(
  badges: ArcadeBadge[] = [],
  pointsBreakdown: PointsBreakdown
): FrequencyAnalysis {
  const today = new Date().toISOString().split('T')[0];

  if (!badges || badges.length === 0) {
    return {
      totalDaysSpanned: 1,
      firstBadgeDate: today,
      latestBadgeDate: today,
      badgesPerWeek: 0,
      badgesPerMonth: 0,
      avgDaysBetweenBadges: 0,
      currentActiveStreakWeeks: 0,
      maxWeeklyCadence: 0,
      weeklyBreakdown: [],
      monthlyBreakdown: [],
      dayOfWeekBreakdown: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => ({
        day,
        count: 0,
        percentage: 0
      })),
      estimatedDaysToNextTier: null,
      estimatedCompletionDate: null
    };
  }

  // Sort badges chronologically with safe date parser
  const sortedBadges = [...badges]
    .filter(b => b && b.dateEarned)
    .sort((a, b) => parseSafeTimestamp(a.dateEarned) - parseSafeTimestamp(b.dateEarned));

  if (sortedBadges.length === 0) {
    return analyzeFrequency([], pointsBreakdown);
  }

  const firstBadgeDate = sortedBadges[0].dateEarned || today;
  const latestBadgeDate = sortedBadges[sortedBadges.length - 1].dateEarned || today;

  const firstTime = parseSafeTimestamp(firstBadgeDate);
  const latestTime = parseSafeTimestamp(latestBadgeDate);
  const rawDiffDays = Math.round((latestTime - firstTime) / (1000 * 60 * 60 * 24));
  const diffDays = Math.max(1, rawDiffDays);
  const totalWeeks = Math.max(1, diffDays / 7);
  const totalMonths = Math.max(1, diffDays / 30.4);

  const badgesPerWeek = Number((sortedBadges.length / totalWeeks).toFixed(2));
  const badgesPerMonth = Number((sortedBadges.length / totalMonths).toFixed(1));
  const avgDaysBetweenBadges = Number((diffDays / Math.max(1, sortedBadges.length)).toFixed(1));

  // Day of Week breakdown
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dayCounts: Record<string, number> = { Sun: 0, Mon: 0, Tue: 0, Wed: 0, Thu: 0, Fri: 0, Sat: 0 };
  
  sortedBadges.forEach(b => {
    const d = new Date(b.dateEarned);
    const dayIndex = isNaN(d.getTime()) ? 0 : d.getDay();
    const day = dayNames[dayIndex];
    dayCounts[day] = (dayCounts[day] || 0) + 1;
  });

  const orderedDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const dayOfWeekBreakdown = orderedDays.map(day => ({
    day,
    count: dayCounts[day] || 0,
    percentage: Math.round(((dayCounts[day] || 0) / Math.max(1, sortedBadges.length)) * 100)
  }));

  // Weekly breakdown
  const weeklyMap = new Map<string, { startDate: string; endDate: string; count: number; points: number; badges: ArcadeBadge[] }>();
  
  sortedBadges.forEach(b => {
    const d = new Date(b.dateEarned);
    if (isNaN(d.getTime())) return;

    const day = d.getDay();
    const diffToMonday = d.getDate() - day + (day === 0 ? -6 : 1);
    const monday = new Date(d);
    monday.setDate(diffToMonday);
    const sunday = new Date(monday);
    sunday.setDate(monday.getDate() + 6);

    const weekKey = monday.toISOString().split('T')[0];
    const sundayKey = sunday.toISOString().split('T')[0];

    let item = weeklyMap.get(weekKey);
    if (!item) {
      item = {
        startDate: weekKey,
        endDate: sundayKey,
        count: 0,
        points: 0,
        badges: []
      };
      weeklyMap.set(weekKey, item);
    }
    item.count++;
    item.points += b.pointsContribution || (b.category === 'skill' ? 0.5 : 1);
    item.badges.push(b);
  });

  const weeklyBreakdown = Array.from(weeklyMap.entries())
    .map(([startDate, data], index) => {
      const start = new Date(startDate);
      const label = `Week ${index + 1} (${start.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })})`;
      return {
        weekLabel: label,
        ...data,
        points: Math.round(data.points * 10) / 10
      };
    })
    .sort((a, b) => parseSafeTimestamp(a.startDate) - parseSafeTimestamp(b.startDate));

  const maxWeeklyCadence = weeklyBreakdown.reduce((max, w) => Math.max(max, w.count), 0);

  // Monthly breakdown
  const monthlyMap = new Map<string, { count: number; points: number }>();
  sortedBadges.forEach(b => {
    const d = new Date(b.dateEarned);
    if (isNaN(d.getTime())) return;
    const monthKey = d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    let item = monthlyMap.get(monthKey);
    if (!item) {
      item = { count: 0, points: 0 };
      monthlyMap.set(monthKey, item);
    }
    item.count++;
    item.points += b.pointsContribution || (b.category === 'skill' ? 0.5 : 1);
  });

  const monthlyBreakdown = Array.from(monthlyMap.entries()).map(([monthLabel, data]) => ({
    monthLabel,
    count: data.count,
    points: Math.round(data.points * 10) / 10
  }));

  // Streak calculation (consecutive active weeks up to latest)
  let activeStreakWeeks = 0;
  for (let i = weeklyBreakdown.length - 1; i >= 0; i--) {
    if (weeklyBreakdown[i].count > 0) {
      activeStreakWeeks++;
    } else {
      break;
    }
  }

  // Estimated days to next tier
  let estimatedDaysToNextTier: number | null = null;
  let estimatedCompletionDate: string | null = null;

  if (pointsBreakdown.nextTier && pointsBreakdown.pointsToNextTier > 0) {
    const pointsPerDay = pointsBreakdown.totalPoints / diffDays;
    if (pointsPerDay > 0 && isFinite(pointsPerDay)) {
      const calculatedDays = Math.ceil(pointsBreakdown.pointsToNextTier / pointsPerDay);
      estimatedDaysToNextTier = Math.max(1, Math.min(365, calculatedDays));
      const estDate = new Date();
      estDate.setDate(estDate.getDate() + estimatedDaysToNextTier);
      estimatedCompletionDate = estDate.toISOString().split('T')[0];
    }
  }

  return {
    totalDaysSpanned: diffDays,
    firstBadgeDate,
    latestBadgeDate,
    badgesPerWeek,
    badgesPerMonth,
    avgDaysBetweenBadges,
    currentActiveStreakWeeks: activeStreakWeeks,
    maxWeeklyCadence,
    weeklyBreakdown,
    monthlyBreakdown,
    dayOfWeekBreakdown,
    estimatedDaysToNextTier,
    estimatedCompletionDate
  };
}
