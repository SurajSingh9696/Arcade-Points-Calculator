import React, { useState } from 'react';
import { UserProfile } from '../types/arcade';
import { fetchProfileWithProxy, sanitizeText, sanitizeUrl } from '../utils/scraper';
import { createOrUpdateProfile } from '../utils/storage';
import {
  Search,
  Loader2,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  BookmarkCheck,
  Globe,
  UserCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ProfileSearchBannerProps {
  currentProfile: UserProfile;
  onProfileLoaded: (profile: UserProfile) => void;
  onOpenAddBadge?: () => void;
}

export const ProfileSearchBanner: React.FC<ProfileSearchBannerProps> = ({
  currentProfile,
  onProfileLoaded,
  onOpenAddBadge
}) => {
  // Pre-fill with user's URL or existing profile URL
  const [profileUrl, setProfileUrl] = useState(
    currentProfile.profileUrl || ''
  );

  React.useEffect(() => {
    if (currentProfile.profileUrl) {
      setProfileUrl(currentProfile.profileUrl);
    }
  }, [currentProfile.profileUrl]);
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error' | 'info'; text: string } | null>(null);

  const handleFetchProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanUrl = profileUrl.trim();
    if (!cleanUrl) return;

    setIsLoading(true);
    setStatusMessage({
      type: 'info',
      text: 'Connecting to Google Skills Boost & extracting badges...'
    });

    try {
      const data = await fetchProfileWithProxy(cleanUrl);

      if (!data.badges || data.badges.length === 0) {
        throw new Error('No public badges were found on this profile URL. Make sure your profile is set to Public in Google Cloud Skills Boost.');
      }

      const finalName = sanitizeText(data.name || 'Google Cloud Champion', 80);
      const safeUrl = sanitizeUrl(cleanUrl);

      const newProfile: UserProfile = {
        id: currentProfile.id || `profile-${Date.now()}`,
        name: finalName,
        avatarSeed: finalName.replace(/\s+/g, ''),
        profileUrl: safeUrl,
        lastUpdated: new Date().toISOString().split('T')[0],
        isCurrent: true,
        badges: data.badges,
        seasonTarget: 'Season 2026'
      };

      createOrUpdateProfile(newProfile);
      onProfileLoaded(newProfile);

      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#F59E0B', '#10B981', '#EA580C', '#9333EA']
      });

      setStatusMessage({
        type: 'success',
        text: `Found profile for "${newProfile.name}"! Loaded ${data.badges.length} verified Google Cloud badges. Your points are calculated and saved!`
      });
    } catch (err: any) {
      const rawMsg: string = err?.message || '';
      const isServerDown =
        rawMsg.includes('node server.js') ||
        rawMsg.includes('proxy server') ||
        rawMsg.includes('Cannot reach');

      setStatusMessage({
        type: 'error',
        text: isServerDown
          ? '⚡ Server not running — open a terminal in the project folder and run: node server.js — then refresh and try again.'
          : rawMsg || 'Could not fetch profile. Check the URL and ensure your profile is set to Public in Google Skills Boost.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-4 sm:p-6 lg:p-8 border border-[#EADBCE] shadow-soft mb-8 transition-all">
      {/* Top Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6 pb-5 border-b border-[#EADBCE]">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FEF3C7] text-[#B45309] font-mono text-xs font-semibold border border-[#FDE68A]">
              <BookmarkCheck className="w-3.5 h-3.5" />
              Direct URL Profile Synchronizer
            </span>
            <span className="text-xs font-sans text-stone-500 hidden sm:inline">
              Saved automatically • No need to enter again
            </span>
          </div>
          <h2 className="font-display font-bold text-xl sm:text-2xl text-[#292524] tracking-tight">
            Calculate Points from Your Profile URL
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm mt-1 leading-relaxed">
            Enter your Google Skills / Cloud Skills Boost public profile URL. Your badges, points, velocity, and swag milestones are calculated and saved instantly.
          </p>
        </div>

        {/* Current Active Account Chip */}
        {currentProfile.id ? (
          <div className="flex items-center gap-3 bg-[#FAF7F2] p-3 rounded-2xl border border-[#EADBCE] shrink-0">
            <div className="w-10 h-10 rounded-xl bg-white text-[#B45309] font-display font-bold text-base flex items-center justify-center border border-[#EADBCE] shadow-xs">
              {currentProfile.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-stone-900 font-display">
                  {currentProfile.name}
                </span>
                <span className="inline-flex items-center gap-1 text-[9px] font-mono font-bold text-[#059669] bg-[#ECFDF5] px-1.5 py-0.2 rounded-full border border-[#A7F3D0]">
                  <UserCheck className="w-2.5 h-2.5" /> Active
                </span>
              </div>
              <p className="text-[11px] font-mono text-stone-500 mt-0.5">
                {currentProfile.badges.length} {currentProfile.badges.length === 1 ? 'badge' : 'badges'} recorded
              </p>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-3 bg-[#FAF7F2] p-3 rounded-2xl border border-[#EADBCE] shrink-0">
            <div className="w-10 h-10 rounded-xl bg-[#FEF3C7] text-[#B45309] font-display font-bold text-base flex items-center justify-center border border-[#FDE68A] shadow-xs">
              ?
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-stone-700 font-display">
                  Ready to Connect
                </span>
              </div>
              <p className="text-[11px] font-sans text-stone-500 mt-0.5">
                Enter your profile URL below
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Profile URL Input Form */}
      <form onSubmit={handleFetchProfile} className="mt-5">
        <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
              <Globe className="w-4 h-4 text-[#B45309]" />
            </div>
            <input
              type="text"
              required
              value={profileUrl}
              onChange={(e) => setProfileUrl(e.target.value)}
              placeholder="https://www.skills.google/public_profiles/..."
              className="w-full pl-10 pr-4 py-3 bg-[#FAF7F2] border border-[#EADBCE] rounded-2xl text-xs sm:text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#F59E0B] text-stone-900 shadow-xs"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading || !profileUrl.trim()}
            className="px-6 py-3 bg-gradient-to-r from-[#F59E0B] to-[#EA580C] hover:from-[#D97706] hover:to-[#C2410C] text-white rounded-2xl text-xs sm:text-sm font-bold font-display shadow-arcade-amber hover:shadow-xs active:translate-y-0.5 transition flex items-center justify-center gap-2 shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Finding Badges...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Calculate Arcade Points</span>
              </>
            )}
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-between text-xs text-stone-500 mt-3 pt-1">
          <span className="text-[11px] font-sans">
            Supported: <code className="font-mono text-stone-700 bg-[#FAF7F2] px-1.5 py-0.5 rounded border border-[#EADBCE]">skills.google</code> or <code className="font-mono text-stone-700 bg-[#FAF7F2] px-1.5 py-0.5 rounded border border-[#EADBCE]">cloudskillsboost.google</code>
          </span>

          {onOpenAddBadge && (
            <button
              type="button"
              onClick={onOpenAddBadge}
              className="text-[#B45309] hover:underline font-semibold text-[11px] mt-1 sm:mt-0"
            >
              + Add Badges Manually from Catalog
            </button>
          )}
        </div>
      </form>

      {/* Status Alert */}
      {statusMessage && (
        <div
          className={`mt-4 p-4 rounded-2xl flex items-start gap-3 text-xs sm:text-sm font-sans ${
            statusMessage.type === 'success'
              ? 'bg-[#ECFDF5] border border-[#A7F3D0] text-[#047857]'
              : statusMessage.type === 'error'
              ? 'bg-[#FFF1F2] border border-[#FECDD3] text-[#BE123C]'
              : 'bg-[#FFFBEB] border border-[#FDE68A] text-[#B45309]'
          }`}
        >
          {statusMessage.type === 'success' && <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#059669]" />}
          {statusMessage.type === 'error' && <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#BE123C]" />}
          {statusMessage.type === 'info' && <Loader2 className="w-5 h-5 flex-shrink-0 animate-spin mt-0.5 text-[#B45309]" />}
          <div className="flex-1">
            <p className="leading-snug">{statusMessage.text}</p>
          </div>
          <button
            onClick={() => setStatusMessage(null)}
            className="text-stone-400 hover:text-stone-600 font-bold ml-2 text-base"
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
};
