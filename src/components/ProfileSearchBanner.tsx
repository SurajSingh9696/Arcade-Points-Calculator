import React, { useState } from 'react';
import { UserProfile } from '../types/arcade';
import { fetchProfileWithProxy, parseProfileContent, sanitizeText, sanitizeUrl } from '../utils/scraper';
import { createOrUpdateProfile } from '../utils/storage';
import {
  Search,
  Loader2,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  BookmarkCheck,
  FileText,
  Users,
  ExternalLink,
  ClipboardPaste,
  Info
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ProfileSearchBannerProps {
  currentProfile: UserProfile;
  onProfileLoaded: (profile: UserProfile) => void;
  onSelectSample: (profileId: string) => void;
}

export const ProfileSearchBanner: React.FC<ProfileSearchBannerProps> = ({
  currentProfile,
  onProfileLoaded,
  onSelectSample
}) => {
  const [importMode, setImportMode] = useState<'smart_paste' | 'url_sync'>('smart_paste');
  const [profileUrl, setProfileUrl] = useState('');
  const [customName, setCustomName] = useState('');
  const [pastedContent, setPastedContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error' | 'info'; text: string } | null>(null);

  // 1. Smart Paste Handler (Accepts Page Text, HTML, or JSON)
  const handleSmartImport = () => {
    if (!pastedContent.trim()) {
      setStatusMessage({
        type: 'error',
        text: 'Please paste your Google Cloud Skills Boost page text or HTML into the box.'
      });
      return;
    }

    try {
      const parsed = parseProfileContent(pastedContent);
      if (parsed.badges.length === 0) {
        setStatusMessage({
          type: 'error',
          text: 'No badges could be detected in the pasted text. On your public profile page, select all text (Ctrl+A) and copy (Ctrl+C), then paste here.'
        });
        return;
      }

      const finalName = sanitizeText(customName.trim() || parsed.name || 'Cloud Champion', 80);
      const safeUrl = sanitizeUrl(profileUrl) || currentProfile.profileUrl || 'https://www.cloudskillsboost.google/public_profiles/user';

      const newProfile: UserProfile = {
        id: `profile-${Date.now()}`,
        name: finalName,
        avatarSeed: finalName.replace(/\s+/g, ''),
        profileUrl: safeUrl,
        lastUpdated: new Date().toISOString().split('T')[0],
        isCurrent: true,
        badges: parsed.badges,
        seasonTarget: 'Season 2026'
      };

      createOrUpdateProfile(newProfile);
      onProfileLoaded(newProfile);

      confetti({
        particleCount: 70,
        spread: 80,
        colors: ['#10B981', '#F59E0B', '#EA580C']
      });

      setStatusMessage({
        type: 'success',
        text: `Success! Account created for "${newProfile.name}". Imported ${parsed.badges.length} verified badges. Your account is permanently saved locally!`
      });

      setPastedContent('');
      setCustomName('');
    } catch (err: any) {
      setStatusMessage({
        type: 'error',
        text: `Import failed: ${err?.message || 'Invalid format'}`
      });
    }
  };

  // 2. Direct URL Fetch Handler
  const handleSearchAndSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!profileUrl.trim()) return;

    setIsLoading(true);
    setStatusMessage({ type: 'info', text: 'Connecting to Google Cloud Skills Boost...' });

    try {
      const data = await fetchProfileWithProxy(profileUrl);

      const finalName = sanitizeText(customName.trim() || data.name || 'Cloud Champion', 80);
      const safeUrl = sanitizeUrl(profileUrl) || 'https://www.cloudskillsboost.google/public_profiles/user';

      const newProfile: UserProfile = {
        id: `profile-${Date.now()}`,
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
        particleCount: 60,
        spread: 70,
        colors: ['#F59E0B', '#10B981', '#EA580C']
      });

      setStatusMessage({
        type: 'success',
        text: `Account created for "${newProfile.name}"! Imported ${data.badges.length} badges. Saved locally!`
      });
      setProfileUrl('');
      setCustomName('');
    } catch (err: any) {
      // Explain Google Cloudflare 403 clearly and auto-switch to smart paste
      setStatusMessage({
        type: 'error',
        text: `Google Cloud Skills Boost blocks automated scrapers with Cloudflare bot-protection (HTTP 403). Switched to "Instant Text / HTML Paste" below — simply copy your profile page text and paste it here!`
      });
      setImportMode('smart_paste');
    } finally {
      setIsLoading(false);
    }
  };

  // Clipboard Paste Helper
  const handlePasteFromClipboard = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (text) {
        setPastedContent(text);
        setStatusMessage({
          type: 'info',
          text: 'Pasted content from clipboard! Click "Calculate & Save Account" to proceed.'
        });
      }
    } catch {
      setStatusMessage({
        type: 'info',
        text: 'Please paste manually into the text box using Ctrl+V (or Cmd+V).'
      });
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#EADBCE] shadow-soft mb-8 transition-all">
      {/* Top Header & Demo Accounts Switcher */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#EADBCE]">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FEF3C7] text-[#B45309] font-mono text-xs font-semibold border border-[#FDE68A]">
              <BookmarkCheck className="w-3.5 h-3.5" />
              Auto-Saving Profile Engine
            </span>
            <span className="text-xs font-sans text-stone-500 hidden sm:inline">
              Saved permanently in your browser • Zero re-entry
            </span>
          </div>
          <h2 className="font-display font-bold text-xl sm:text-2xl text-[#292524] tracking-tight">
            Connect Your Public Profile & Calculate Points
          </h2>
          <p className="text-stone-600 text-sm mt-1 leading-relaxed">
            Import your Google Cloud Skills Boost badges once. Your points, velocity, and swag milestones are saved to your account automatically.
          </p>
        </div>

        {/* Demo Accounts Quick Pick */}
        <div className="flex flex-wrap items-center gap-2 bg-[#FAF7F2] p-2.5 rounded-2xl border border-[#EADBCE]">
          <span className="text-xs font-semibold text-stone-500 flex items-center gap-1 px-1 font-sans">
            <Users className="w-3.5 h-3.5" /> Instant Demo:
          </span>
          <button
            onClick={() => onSelectSample('prof-arjun')}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition ${
              currentProfile.id === 'prof-arjun'
                ? 'bg-[#B45309] text-white shadow-sm font-semibold'
                : 'bg-white text-stone-700 hover:bg-[#F4ECE1] border border-[#EADBCE]'
            }`}
          >
            Arjun (68 pts)
          </button>
          <button
            onClick={() => onSelectSample('prof-sophia')}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition ${
              currentProfile.id === 'prof-sophia'
                ? 'bg-[#B45309] text-white shadow-sm font-semibold'
                : 'bg-white text-stone-700 hover:bg-[#F4ECE1] border border-[#EADBCE]'
            }`}
          >
            Sophia (38 pts)
          </button>
          <button
            onClick={() => onSelectSample('prof-leo')}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition ${
              currentProfile.id === 'prof-leo'
                ? 'bg-[#B45309] text-white shadow-sm font-semibold'
                : 'bg-white text-stone-700 hover:bg-[#F4ECE1] border border-[#EADBCE]'
            }`}
          >
            Leo (14 pts)
          </button>
        </div>
      </div>

      {/* Mode Selector Tabs */}
      <div className="flex items-center gap-2 mt-6 mb-4">
        <button
          onClick={() => setImportMode('smart_paste')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold font-sans transition flex items-center gap-2 ${
            importMode === 'smart_paste'
              ? 'bg-[#292524] text-white shadow-sm'
              : 'bg-[#FAF7F2] text-stone-600 hover:bg-[#F4ECE1] border border-[#EADBCE]'
          }`}
        >
          <FileText className="w-4 h-4 text-arcade-amber" />
          <span>Instant Paste (Page Text or HTML)</span>
          <span className="px-1.5 py-0.2 rounded-full text-[10px] font-mono bg-[#10B981] text-white font-bold">
            100% Reliable
          </span>
        </button>

        <button
          onClick={() => setImportMode('url_sync')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold font-sans transition flex items-center gap-2 ${
            importMode === 'url_sync'
              ? 'bg-[#292524] text-white shadow-sm'
              : 'bg-[#FAF7F2] text-stone-600 hover:bg-[#F4ECE1] border border-[#EADBCE]'
          }`}
        >
          <Search className="w-4 h-4 text-stone-400" />
          <span>Direct Profile URL Fetch</span>
        </button>
      </div>

      {/* MODE 1: Smart Paste (Guaranteed bypass for Cloudflare 403) */}
      {importMode === 'smart_paste' && (
        <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-[#EADBCE] animate-fadeIn">
          {/* Helpful 2-Step Guide */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3 p-3 bg-white rounded-xl border border-[#EADBCE] text-xs text-stone-700">
            <div className="flex items-start gap-2.5">
              <Info className="w-4 h-4 text-[#B45309] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-stone-900">
                  How to import in 5 seconds (bypasses Google&apos;s Cloudflare 403 block):
                </p>
                <p className="text-stone-500 mt-0.5">
                  1. Open your Google Cloud Skills Boost public profile • 2. Select and copy all page text (<kbd className="font-mono bg-stone-100 px-1 rounded border">Ctrl+A</kbd>, <kbd className="font-mono bg-stone-100 px-1 rounded border">Ctrl+C</kbd>) • 3. Paste here!
                </p>
              </div>
            </div>

            {profileUrl && (
              <a
                href={profileUrl.startsWith('http') ? profileUrl : `https://${profileUrl}`}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 bg-[#FEF3C7] hover:bg-[#FDE68A] text-[#B45309] rounded-lg font-semibold text-xs flex items-center gap-1.5 whitespace-nowrap shrink-0 border border-[#FDE68A]"
              >
                <span>Open Profile Tab</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mb-3">
            <input
              type="text"
              value={customName}
              maxLength={80}
              onChange={(e) => setCustomName(e.target.value)}
              placeholder="Account Name (e.g. My Main Profile)"
              className="sm:w-64 px-3.5 py-2.5 bg-white border border-[#EADBCE] rounded-xl text-xs sm:text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
            />
            <input
              type="text"
              value={profileUrl}
              onChange={(e) => setProfileUrl(e.target.value)}
              placeholder="Profile URL to link (optional)"
              className="flex-1 px-3.5 py-2.5 bg-white border border-[#EADBCE] rounded-xl text-xs sm:text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
            />
          </div>

          <div className="relative">
            <textarea
              rows={4}
              value={pastedContent}
              onChange={(e) => setPastedContent(e.target.value)}
              placeholder="Paste your profile page text (Ctrl+A, Ctrl+C from your profile page) or HTML source code here..."
              className="w-full p-3 font-mono text-xs bg-white border border-[#EADBCE] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F59E0B] text-stone-800"
            />
            <button
              type="button"
              onClick={handlePasteFromClipboard}
              className="absolute right-3 bottom-4 px-2.5 py-1 bg-[#FAF7F2] hover:bg-[#F4ECE1] text-stone-600 rounded-lg text-xs font-mono border border-[#EADBCE] flex items-center gap-1 transition shadow-sm"
              title="Paste from clipboard"
            >
              <ClipboardPaste className="w-3.5 h-3.5 text-[#B45309]" />
              <span>Paste Clipboard</span>
            </button>
          </div>

          <div className="flex justify-between items-center mt-3 pt-2">
            <span className="text-[11px] text-stone-500 font-sans">
              Accepts: Rendered text, Page source HTML, or JSON export
            </span>
            <button
              onClick={handleSmartImport}
              disabled={!pastedContent.trim()}
              className="px-6 py-2.5 bg-gradient-to-r from-[#F59E0B] to-[#EA580C] hover:from-[#D97706] hover:to-[#C2410C] text-white rounded-xl text-xs sm:text-sm font-bold font-display shadow-arcade-amber hover:shadow-sm active:translate-y-0.5 transition flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Sparkles className="w-4 h-4" />
              <span>Calculate & Save Account</span>
            </button>
          </div>
        </div>
      )}

      {/* MODE 2: Direct URL Sync */}
      {importMode === 'url_sync' && (
        <form onSubmit={handleSearchAndSave} className="bg-[#FAF7F2] p-5 rounded-2xl border border-[#EADBCE] animate-fadeIn">
          <p className="text-xs text-stone-600 mb-3 font-sans">
            <strong>Note:</strong> Google Cloud Skills Boost employs Cloudflare bot-protection (HTTP 403) which may block automated network scrapers. If blocked, switch to the <em>Instant Paste</em> tab above.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={profileUrl}
                onChange={(e) => setProfileUrl(e.target.value)}
                placeholder="https://www.cloudskillsboost.google/public_profiles/..."
                className="w-full pl-10 pr-4 py-3 bg-white border border-[#EADBCE] rounded-xl text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
              />
            </div>

            <input
              type="text"
              value={customName}
              maxLength={60}
              onChange={(e) => setCustomName(e.target.value)}
              placeholder="Account name (optional)"
              className="w-full sm:w-48 px-4 py-3 bg-white border border-[#EADBCE] rounded-xl text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
            />

            <button
              type="submit"
              disabled={isLoading || !profileUrl.trim()}
              className="px-6 py-3 bg-gradient-to-r from-[#F59E0B] to-[#EA580C] hover:from-[#D97706] hover:to-[#C2410C] text-white rounded-xl text-sm font-bold font-display shadow-arcade-amber hover:shadow-sm active:translate-y-0.5 transition flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Fetching...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Fetch & Save</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}

      {/* Active Account Pill */}
      <div className="flex items-center justify-between mt-4 text-xs text-stone-500 font-sans">
        <div className="flex items-center gap-1.5">
          <BookmarkCheck className="w-4 h-4 text-[#059669]" />
          <span>Active Account: <strong className="text-stone-800">{currentProfile.name}</strong></span>
          <span className="text-stone-400">({currentProfile.badges.length} badges loaded)</span>
        </div>
      </div>

      {/* Status Alert Banner */}
      {statusMessage && (
        <div
          className={`mt-4 p-4 rounded-2xl flex items-start gap-3 text-xs sm:text-sm font-sans ${
            statusMessage.type === 'success'
              ? 'bg-[#ECFDF5] border border-[#A7F3D0] text-[#047857]'
              : statusMessage.type === 'error'
              ? 'bg-[#FFFBEB] border border-[#FDE68A] text-[#B45309]'
              : 'bg-[#FAF5FF] border border-[#E9D5FF] text-[#7E22CE]'
          }`}
        >
          {statusMessage.type === 'success' && <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#059669]" />}
          {statusMessage.type === 'error' && <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#B45309]" />}
          {statusMessage.type === 'info' && <Loader2 className="w-5 h-5 flex-shrink-0 animate-spin mt-0.5 text-[#7E22CE]" />}
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
