export type BadgeCategory = 'game' | 'trivia' | 'skill' | 'milestone' | 'special';

export interface ArcadeBadge {
  id: string;
  name: string;
  category: BadgeCategory;
  dateEarned: string; // ISO date string YYYY-MM-DD
  imageUrl?: string;
  pointsContribution: number;
  description?: string;
  season?: string;
  isVerified?: boolean;
}

export interface SwagTier {
  id: string;
  name: string;
  minPoints: number;
  maxPoints: number;
  rewardName: string;
  rewardDescription: string;
  badgeLevel: string;
  swagItems: string[];
  color: string;
  textColor: string;
  bgColor: string;
  borderColor: string;
}

export interface UserProfile {
  id: string;
  name: string;
  avatarSeed: string;
  profileUrl: string;
  lastUpdated: string;
  isCurrent: boolean;
  notes?: string;
  badges: ArcadeBadge[];
  customGoalPoints?: number;
  seasonTarget?: string;
}

export interface PointsBreakdown {
  gamePoints: number;
  gameCount: number;
  triviaPoints: number;
  triviaCount: number;
  skillPoints: number;
  skillCount: number;
  skillRatio: number; // e.g. 1 point per 2 skill badges
  milestonePoints: number;
  milestoneCount: number;
  specialPoints: number;
  specialCount: number;
  totalPoints: number;
  totalBadges: number;
  currentTier: SwagTier;
  nextTier: SwagTier | null;
  pointsToNextTier: number;
  progressToNextTierPercent: number;
}

export interface FrequencyAnalysis {
  totalDaysSpanned: number;
  firstBadgeDate: string;
  latestBadgeDate: string;
  badgesPerWeek: number;
  badgesPerMonth: number;
  avgDaysBetweenBadges: number;
  currentActiveStreakWeeks: number;
  maxWeeklyCadence: number;
  weeklyBreakdown: {
    weekLabel: string;
    startDate: string;
    endDate: string;
    count: number;
    points: number;
    badges: ArcadeBadge[];
  }[];
  monthlyBreakdown: {
    monthLabel: string;
    count: number;
    points: number;
  }[];
  dayOfWeekBreakdown: {
    day: string;
    count: number;
    percentage: number;
  }[];
  estimatedDaysToNextTier: number | null;
  estimatedCompletionDate: string | null;
}
