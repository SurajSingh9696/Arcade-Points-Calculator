import { useState, useEffect, useMemo } from 'react';
import { UserProfile, ArcadeBadge } from './types/arcade';
import {
  getSavedProfiles,
  getActiveProfileId,
  setActiveProfileId,
  createOrUpdateProfile,
  deleteProfile,
  updateProfileBadges,
  getSkillRatio,
  setSkillRatio,
  saveProfiles
} from './utils/storage';
import { calculatePoints, analyzeFrequency } from './utils/calculator';
import { fetchProfileWithProxy } from './utils/scraper';
import { SAMPLE_PROFILES } from './data/sampleProfiles';

import { Navbar } from './components/Navbar';
import { ProfileSearchBanner } from './components/ProfileSearchBanner';
import { ScoreOverviewCard } from './components/ScoreOverviewCard';
import { BadgeFrequencySection } from './components/BadgeFrequencySection';
import { BadgesExplorer } from './components/BadgesExplorer';
import { SwagMilestones } from './components/SwagMilestones';
import { PaceSimulator } from './components/PaceSimulator';
import { ProfileSwitcherModal } from './components/ProfileSwitcherModal';
import { AddBadgeModal } from './components/AddBadgeModal';
import { SettingsModal } from './components/SettingsModal';



const EMPTY_PROFILE: UserProfile = {
  id: '',
  name: 'No Profile Synced',
  avatarSeed: 'CloudChallenger',
  profileUrl: '',
  lastUpdated: new Date().toISOString().split('T')[0],
  isCurrent: false,
  badges: [],
  seasonTarget: 'Season 2026'
};

export function App() {
  const [profiles, setProfiles] = useState<UserProfile[]>([]);
  const [activeProfileId, setActiveId] = useState<string>('');
  const [skillRatio, setSkillRatioState] = useState<number>(2);
  const [activeTab, setActiveTab] = useState<'calculator' | 'badges' | 'frequency' | 'swag' | 'simulator'>('calculator');

  // Modals state
  const [isProfileSwitcherOpen, setIsProfileSwitcherOpen] = useState(false);
  const [isAddBadgeOpen, setIsAddBadgeOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Initialize on mount
  useEffect(() => {
    const saved = getSavedProfiles();
    setProfiles(saved);
    const activeId = getActiveProfileId();
    setActiveId(activeId);
    setSkillRatioState(getSkillRatio());
  }, []);

  // Current active profile
  const currentProfile = useMemo(() => {
    if (!profiles || profiles.length === 0) return EMPTY_PROFILE;
    const found = profiles.find(p => p.id === activeProfileId);
    return found || profiles[0] || EMPTY_PROFILE;
  }, [profiles, activeProfileId]);

  // Auto-fetch badges if profile has URL but 0 badges
  useEffect(() => {
    if (currentProfile && currentProfile.id && currentProfile.profileUrl && currentProfile.badges.length === 0) {
      fetchProfileWithProxy(currentProfile.profileUrl)
        .then((data) => {
          if (data.badges.length > 0) {
            const updatedProfiles = updateProfileBadges(currentProfile.id, data.badges);
            setProfiles(updatedProfiles);
          }
        })
        .catch((err) => {
          console.warn('Auto-fetch initial profile failed:', err);
        });
    }
  }, [currentProfile.id, currentProfile.profileUrl, currentProfile.badges.length]);

  // Points breakdown calculation
  const pointsBreakdown = useMemo(() => {
    return calculatePoints(currentProfile.badges, skillRatio);
  }, [currentProfile.badges, skillRatio]);

  // Frequency and Velocity analysis
  const frequencyAnalysis = useMemo(() => {
    return analyzeFrequency(currentProfile.badges, pointsBreakdown);
  }, [currentProfile.badges, pointsBreakdown]);

  // Handlers
  const handleSelectProfile = (id: string) => {
    setActiveId(id);
    setActiveProfileId(id);
  };

  const handleCreateProfile = (newProfile: UserProfile) => {
    const updated = createOrUpdateProfile(newProfile);
    setProfiles(updated);
    setActiveId(newProfile.id);
  };

  const handleDeleteProfile = (id: string) => {
    const updated = deleteProfile(id);
    setProfiles(updated);
    setActiveId(getActiveProfileId());
  };

  const handleProfileLoadedFromSearch = (profile: UserProfile) => {
    const updated = createOrUpdateProfile(profile);
    setProfiles(updated);
    setActiveId(profile.id);
  };

  const handleAddBadge = (badge: ArcadeBadge) => {
    if (!currentProfile.id) {
      const newProfile: UserProfile = {
        id: `profile-${Date.now()}`,
        name: 'My Cloud Account',
        avatarSeed: 'MyCloud',
        profileUrl: '',
        lastUpdated: new Date().toISOString().split('T')[0],
        isCurrent: true,
        badges: [badge],
        seasonTarget: 'Season 2026'
      };
      const updated = createOrUpdateProfile(newProfile);
      setProfiles(updated);
      setActiveId(newProfile.id);
      return;
    }
    const updatedBadges = [badge, ...currentProfile.badges];
    const updatedProfiles = updateProfileBadges(currentProfile.id, updatedBadges);
    setProfiles(updatedProfiles);
  };

  const handleDeleteBadge = (badgeId: string) => {
    if (!currentProfile.id) return;
    const updatedBadges = currentProfile.badges.filter(b => b.id !== badgeId);
    const updatedProfiles = updateProfileBadges(currentProfile.id, updatedBadges);
    setProfiles(updatedProfiles);
  };

  const handleSkillRatioChange = (ratio: number) => {
    setSkillRatioState(ratio);
    setSkillRatio(ratio);
  };

  const handleResetToDefaults = () => {
    saveProfiles([]);
    setActiveProfileId('');
    setProfiles([]);
    setActiveId('');
    setSkillRatioState(2);
    setSkillRatio(2);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#292524] arcade-grid-bg flex flex-col font-sans selection:bg-[#FDE68A] selection:text-[#78350F]">
      
      {/* Top Navigation */}
      <Navbar
        currentProfile={currentProfile}
        profiles={profiles}
        onOpenProfileSwitcher={() => setIsProfileSwitcherOpen(true)}
        onOpenSettings={() => setIsSettingsOpen(true)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        totalPoints={pointsBreakdown.totalPoints}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-3.5 sm:px-6 lg:px-8 py-4 sm:py-8">
        
        {/* Profile Search & Auto-Save Banner */}
        <ProfileSearchBanner
          currentProfile={currentProfile}
          onProfileLoaded={handleProfileLoadedFromSearch}
          onOpenAddBadge={() => setIsAddBadgeOpen(true)}
        />

        {/* Dynamic Content Views based on active tab */}
        {activeTab === 'calculator' && (
          <div className="space-y-6 sm:space-y-8 animate-fadeIn">
            {/* Master Score & 3D Interactive Token */}
            <ScoreOverviewCard
              breakdown={pointsBreakdown}
              currentProfile={currentProfile}
              onOpenBadgesTab={() => setActiveTab('badges')}
              onOpenSwagTab={() => setActiveTab('swag')}
            />

            {/* Frequency Highlights inline */}
            <BadgeFrequencySection
              frequency={frequencyAnalysis}
              breakdown={pointsBreakdown}
              onOpenAddBadge={() => setIsAddBadgeOpen(true)}
            />

            {/* Pace Simulator Shortcut */}
            <PaceSimulator breakdown={pointsBreakdown} />
          </div>
        )}

        {activeTab === 'frequency' && (
          <div className="space-y-6 sm:space-y-8 animate-fadeIn">
            <BadgeFrequencySection
              frequency={frequencyAnalysis}
              breakdown={pointsBreakdown}
              onOpenAddBadge={() => setIsAddBadgeOpen(true)}
            />
            <PaceSimulator breakdown={pointsBreakdown} />
          </div>
        )}

        {activeTab === 'badges' && (
          <div className="animate-fadeIn">
            <BadgesExplorer
              badges={currentProfile.badges}
              onAddBadgeClick={() => setIsAddBadgeOpen(true)}
              onDeleteBadge={handleDeleteBadge}
            />
          </div>
        )}

        {activeTab === 'swag' && (
          <div className="animate-fadeIn">
            <SwagMilestones breakdown={pointsBreakdown} />
          </div>
        )}

        {activeTab === 'simulator' && (
          <div className="animate-fadeIn">
            <PaceSimulator breakdown={pointsBreakdown} />
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-[#EADBCE] mt-12 py-8 text-stone-600 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-[#FEF3C7] text-[#B45309] flex items-center justify-center font-pixel text-[9px] font-bold border border-[#FDE68A]">
              🕹️
            </div>
            <span className="font-display font-bold text-stone-800">
              Google Cloud Arcade Calculator
            </span>
            <span className="text-stone-400">•</span>
            <span>Season 2026 Engine</span>
          </div>

          <div className="flex items-center gap-4 text-stone-500 font-sans">
            <span>Points Auto-Saved to Browser Storage</span>
            <span>•</span>
            <button
              onClick={() => setIsSettingsOpen(true)}
              className="text-[#B45309] hover:underline font-semibold"
            >
              Calculation Rules
            </button>
            <span>•</span>
            <button
              onClick={() => setIsProfileSwitcherOpen(true)}
              className="text-[#059669] hover:underline font-semibold"
            >
              Saved Accounts ({profiles.length})
            </button>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <ProfileSwitcherModal
        isOpen={isProfileSwitcherOpen}
        onClose={() => setIsProfileSwitcherOpen(false)}
        profiles={profiles}
        currentProfile={currentProfile}
        onSelectProfile={handleSelectProfile}
        onCreateProfile={handleCreateProfile}
        onDeleteProfile={handleDeleteProfile}
      />

      <AddBadgeModal
        isOpen={isAddBadgeOpen}
        onClose={() => setIsAddBadgeOpen(false)}
        onAddBadge={handleAddBadge}
        existingBadgeNames={currentProfile.badges.map(b => b.name)}
      />

      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        skillRatio={skillRatio}
        onSkillRatioChange={handleSkillRatioChange}
        onResetToDefaults={handleResetToDefaults}
      />

    </div>
  );
}
export default App;
