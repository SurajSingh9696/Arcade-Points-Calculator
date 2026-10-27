import { UserProfile, ArcadeBadge, BadgeCategory } from '../types/arcade';
import { SAMPLE_PROFILES } from '../data/sampleProfiles';
import { safeIsoDate } from './scraper';

const PROFILES_STORAGE_KEY = 'arcade_saved_profiles_v1';
const ACTIVE_PROFILE_ID_KEY = 'arcade_active_profile_id_v1';
const SKILL_RATIO_KEY = 'arcade_skill_ratio_v1';

// In-memory fallback if localStorage is disabled or throws
let inMemoryProfiles: UserProfile[] = SAMPLE_PROFILES;
let inMemoryActiveId: string = SAMPLE_PROFILES[0].id;
let inMemorySkillRatio: number = 2;

/**
 * Validates a single ArcadeBadge object.
 */
export function validateBadge(raw: any, fallbackId: string): ArcadeBadge | null {
  if (!raw || typeof raw !== 'object') return null;
  
  const id = typeof raw.id === 'string' && raw.id.trim() ? raw.id.slice(0, 100) : fallbackId;
  const name = typeof raw.name === 'string' && raw.name.trim() ? raw.name.slice(0, 200) : 'Google Cloud Badge';
  
  const validCategories: BadgeCategory[] = ['game', 'trivia', 'skill', 'milestone', 'special'];
  const category: BadgeCategory = validCategories.includes(raw.category) ? raw.category : 'skill';
  
  const dateEarned = safeIsoDate(raw.dateEarned);
  const pointsContribution = typeof raw.pointsContribution === 'number' && !isNaN(raw.pointsContribution) && raw.pointsContribution >= 0
    ? Math.min(10, raw.pointsContribution)
    : (category === 'skill' ? 0.5 : 1);

  return {
    id,
    name,
    category,
    dateEarned,
    pointsContribution,
    imageUrl: typeof raw.imageUrl === 'string' && raw.imageUrl.startsWith('http') ? raw.imageUrl.slice(0, 500) : undefined,
    description: typeof raw.description === 'string' ? raw.description.slice(0, 300) : undefined,
    season: typeof raw.season === 'string' ? raw.season.slice(0, 50) : 'Season 2026',
    isVerified: Boolean(raw.isVerified)
  };
}

/**
 * Validates a UserProfile object.
 */
export function validateProfile(raw: any, fallbackIndex: number): UserProfile | null {
  if (!raw || typeof raw !== 'object') return null;

  const id = typeof raw.id === 'string' && raw.id.trim() ? raw.id.slice(0, 100) : `prof-${fallbackIndex}`;
  const name = typeof raw.name === 'string' && raw.name.trim() ? raw.name.slice(0, 80) : 'Cloud Champion';
  const profileUrl = typeof raw.profileUrl === 'string' && raw.profileUrl.startsWith('http')
    ? raw.profileUrl.slice(0, 500)
    : 'https://www.cloudskillsboost.google/public_profiles/user';

  const rawBadges = Array.isArray(raw.badges) ? raw.badges : [];
  const validBadges: ArcadeBadge[] = [];

  rawBadges.forEach((b: any, bIdx: number) => {
    const validated = validateBadge(b, `badge-${id}-${bIdx}`);
    if (validated) validBadges.push(validated);
  });

  return {
    id,
    name,
    avatarSeed: typeof raw.avatarSeed === 'string' ? raw.avatarSeed.slice(0, 50) : name.replace(/\s+/g, ''),
    profileUrl,
    lastUpdated: safeIsoDate(raw.lastUpdated),
    isCurrent: Boolean(raw.isCurrent),
    notes: typeof raw.notes === 'string' ? raw.notes.slice(0, 300) : undefined,
    customGoalPoints: typeof raw.customGoalPoints === 'number' && raw.customGoalPoints > 0 ? raw.customGoalPoints : undefined,
    seasonTarget: typeof raw.seasonTarget === 'string' ? raw.seasonTarget.slice(0, 50) : 'Season 2026',
    badges: validBadges
  };
}

export function getSavedProfiles(): UserProfile[] {
  try {
    const raw = localStorage.getItem(PROFILES_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(PROFILES_STORAGE_KEY, JSON.stringify(SAMPLE_PROFILES));
      localStorage.setItem(ACTIVE_PROFILE_ID_KEY, SAMPLE_PROFILES[0].id);
      return SAMPLE_PROFILES;
    }
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      const sanitized = parsed.map((p, i) => validateProfile(p, i)).filter((p): p is UserProfile => p !== null);
      if (sanitized.length > 0) return sanitized;
    }
    return SAMPLE_PROFILES;
  } catch (err) {
    console.warn('LocalStorage read failed, using in-memory fallback:', err);
    return inMemoryProfiles;
  }
}

export function saveProfiles(profiles: UserProfile[]): void {
  inMemoryProfiles = profiles;
  try {
    localStorage.setItem(PROFILES_STORAGE_KEY, JSON.stringify(profiles));
  } catch (err: any) {
    console.error('Failed to save profiles to localStorage (quota or disabled):', err);
  }
}

export function getActiveProfileId(): string {
  try {
    const activeId = localStorage.getItem(ACTIVE_PROFILE_ID_KEY);
    if (activeId) return activeId;
    const profiles = getSavedProfiles();
    return profiles[0]?.id || SAMPLE_PROFILES[0].id;
  } catch {
    return inMemoryActiveId;
  }
}

export function setActiveProfileId(id: string): void {
  inMemoryActiveId = id;
  try {
    localStorage.setItem(ACTIVE_PROFILE_ID_KEY, id);
  } catch (err) {
    console.error('Failed to set active profile ID in storage:', err);
  }
}

export function createOrUpdateProfile(newProfile: UserProfile): UserProfile[] {
  const currentProfiles = getSavedProfiles();
  const existingIndex = currentProfiles.findIndex(
    p => p.id === newProfile.id || (p.profileUrl && p.profileUrl === newProfile.profileUrl)
  );

  let updatedList: UserProfile[];
  if (existingIndex >= 0) {
    updatedList = [...currentProfiles];
    updatedList[existingIndex] = {
      ...updatedList[existingIndex],
      ...newProfile,
      lastUpdated: new Date().toISOString().split('T')[0]
    };
  } else {
    updatedList = [newProfile, ...currentProfiles];
  }

  saveProfiles(updatedList);
  setActiveProfileId(newProfile.id);
  return updatedList;
}

export function deleteProfile(id: string): UserProfile[] {
  const currentProfiles = getSavedProfiles();
  const filtered = currentProfiles.filter(p => p.id !== id);
  const remaining = filtered.length > 0 ? filtered : SAMPLE_PROFILES;
  saveProfiles(remaining);
  if (getActiveProfileId() === id) {
    setActiveProfileId(remaining[0].id);
  }
  return remaining;
}

export function updateProfileBadges(profileId: string, badges: ArcadeBadge[]): UserProfile[] {
  const currentProfiles = getSavedProfiles();
  const updated = currentProfiles.map(p => {
    if (p.id === profileId) {
      return {
        ...p,
        badges,
        lastUpdated: new Date().toISOString().split('T')[0]
      };
    }
    return p;
  });
  saveProfiles(updated);
  return updated;
}

export function getSkillRatio(): number {
  try {
    const raw = localStorage.getItem(SKILL_RATIO_KEY);
    if (raw) {
      const parsed = parseFloat(raw);
      if (!isNaN(parsed) && parsed >= 1 && parsed <= 5) return parsed;
    }
    return 2;
  } catch {
    return inMemorySkillRatio;
  }
}

export function setSkillRatio(ratio: number): void {
  const safeRatio = Math.max(1, Math.min(5, ratio));
  inMemorySkillRatio = safeRatio;
  try {
    localStorage.setItem(SKILL_RATIO_KEY, safeRatio.toString());
  } catch (err) {
    console.error('Failed to save skill ratio in storage:', err);
  }
}

/**
 * Validates external JSON import payload before storing.
 */
export function validateImportedProfiles(jsonData: any): UserProfile[] | null {
  if (!Array.isArray(jsonData) || jsonData.length === 0) return null;
  const validated = jsonData
    .map((item, idx) => validateProfile(item, idx))
    .filter((p): p is UserProfile => p !== null);
  return validated.length > 0 ? validated : null;
}
