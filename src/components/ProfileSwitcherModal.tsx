import React, { useState, useEffect, useRef } from 'react';
import { UserProfile } from '../types/arcade';
import { calculatePoints } from '../utils/calculator';
import { validateImportedProfiles, saveProfiles } from '../utils/storage';
import { sanitizeText, sanitizeUrl } from '../utils/scraper';
import {
  X,
  UserCheck,
  Trash2,
  Download,
  Upload,
  UserPlus,
  AlertCircle,
  FileCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ProfileSwitcherModalProps {
  isOpen: boolean;
  onClose: () => void;
  profiles: UserProfile[];
  currentProfile: UserProfile;
  onSelectProfile: (id: string) => void;
  onCreateProfile: (profile: UserProfile) => void;
  onDeleteProfile: (id: string) => void;
}

export const ProfileSwitcherModal: React.FC<ProfileSwitcherModalProps> = ({
  isOpen,
  onClose,
  profiles,
  currentProfile,
  onSelectProfile,
  onCreateProfile,
  onDeleteProfile
}) => {
  const [isCreating, setIsCreating] = useState(false);
  const [newName, setNewName] = useState('');
  const [newUrl, setNewUrl] = useState('');
  const [newNotes, setNewNotes] = useState('');
  const [importError, setImportError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanName = sanitizeText(newName, 60);
    if (!cleanName) return;

    const safeUrl = newUrl.trim() ? sanitizeUrl(newUrl) || 'https://www.cloudskillsboost.google/public_profiles/user' : 'https://www.cloudskillsboost.google/public_profiles/user';
    const safeNotes = sanitizeText(newNotes, 200);

    const newProfile: UserProfile = {
      id: `profile-${Date.now()}`,
      name: cleanName,
      avatarSeed: cleanName.replace(/\s+/g, ''),
      profileUrl: safeUrl,
      lastUpdated: new Date().toISOString().split('T')[0],
      isCurrent: true,
      notes: safeNotes || 'Custom cloud profile',
      badges: [],
      seasonTarget: 'Season 2026'
    };

    onCreateProfile(newProfile);
    confetti({
      particleCount: 50,
      spread: 60,
      colors: ['#F59E0B', '#10B981']
    });

    setIsCreating(false);
    setNewName('');
    setNewUrl('');
    setNewNotes('');
    onClose();
  };

  const handleExportData = () => {
    try {
      const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(profiles, null, 2));
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute('href', dataStr);
      downloadAnchor.setAttribute('download', `google-arcade-profiles-${new Date().toISOString().split('T')[0]}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
    } catch (err) {
      console.error('Export failed:', err);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const text = event.target?.result as string;
        const parsed = JSON.parse(text);
        const validated = validateImportedProfiles(parsed);

        if (!validated) {
          setImportError('Invalid profile backup file format. Must contain valid Arcade profiles.');
          return;
        }

        saveProfiles(validated);
        window.location.reload();
      } catch (err) {
        setImportError('Could not parse JSON file. Please check file integrity.');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/40 backdrop-blur-sm animate-fadeIn"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl max-w-xl w-full border border-[#EADBCE] shadow-2xl overflow-hidden"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#EADBCE] bg-[#FAF7F2]">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-pixel text-[10px] text-[#B45309] font-bold uppercase">
                Profile Vault
              </span>
              <span className="px-2 py-0.5 rounded-full bg-[#ECFDF5] text-[#059669] text-[10px] font-mono font-bold border border-[#A7F3D0]">
                Auto-Saved
              </span>
            </div>
            <h3 className="font-display font-bold text-xl text-stone-900 mt-0.5">
              Account Management & Switcher
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-800 hover:bg-stone-200/50 rounded-xl transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 max-h-[70vh] overflow-y-auto">
          {importError && (
            <div className="mb-4 p-3 bg-[#FFF1F2] border border-[#FECDD3] text-[#BE123C] rounded-xl text-xs flex items-center justify-between">
              <span className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                {importError}
              </span>
              <button onClick={() => setImportError(null)} className="font-bold">×</button>
            </div>
          )}

          {!isCreating ? (
            <div>
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs text-stone-500 font-sans">
                  Saved accounts on this device. Your active account is preserved across reloads.
                </p>
                <button
                  onClick={() => setIsCreating(true)}
                  className="px-3 py-1.5 bg-[#B45309] hover:bg-[#92400E] text-white text-xs font-semibold rounded-xl transition flex items-center gap-1.5 shadow-sm"
                >
                  <UserPlus className="w-3.5 h-3.5" />
                  Create Account
                </button>
              </div>

              {/* Profiles List */}
              {profiles.length === 0 ? (
                <div className="p-8 text-center bg-[#FAF7F2] rounded-2xl border border-[#EADBCE]">
                  <p className="font-display font-bold text-stone-700 text-sm">No Saved Accounts Yet</p>
                  <p className="text-xs text-stone-500 mt-1">Enter your public profile URL above or click &quot;Create Account&quot; to save your profile.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {profiles.map((p) => {
                    const pts = calculatePoints(p.badges);
                    const isSelected = p.id === currentProfile.id;

                    return (
                      <div
                        key={p.id}
                        onClick={() => {
                          onSelectProfile(p.id);
                          onClose();
                        }}
                        className={`p-4 rounded-2xl border cursor-pointer transition flex items-center justify-between group ${
                          isSelected
                            ? 'bg-[#FEF3C7] border-[#B45309] ring-2 ring-[#F59E0B]/30'
                            : 'bg-[#FAF7F2] border-[#EADBCE] hover:bg-[#F4ECE1]'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-white border border-[#EADBCE] flex items-center justify-center font-display font-bold text-base text-[#B45309] shadow-sm">
                            {p.name.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-display font-bold text-sm text-stone-900 group-hover:text-[#B45309] transition-colors">
                                {p.name}
                              </span>
                              {isSelected && (
                                <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-[#059669] bg-[#ECFDF5] px-2 py-0.2 rounded-full border border-[#A7F3D0]">
                                  <UserCheck className="w-3 h-3" /> Active
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] font-mono text-stone-500 mt-0.5">
                              {p.badges.length} badges • {pts.currentTier.name}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="text-right">
                            <span className="font-pixel text-xs text-[#B45309]">
                              {pts.totalPoints} PTS
                            </span>
                          </div>

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              if (window.confirm(`Delete profile for "${p.name}"?`)) {
                                onDeleteProfile(p.id);
                              }
                            }}
                            className="p-1.5 text-stone-400 hover:text-rose-600 hover:bg-white rounded-lg transition opacity-0 group-hover:opacity-100"
                            title="Delete profile"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Backup, Import & Export Bar */}
              <div className="mt-6 pt-4 border-t border-[#EADBCE] flex flex-wrap items-center justify-between gap-3 text-xs text-stone-500">
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleExportData}
                    className="flex items-center gap-1.5 text-stone-600 hover:text-stone-900 transition font-medium"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Backup JSON
                  </button>

                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="flex items-center gap-1.5 text-stone-600 hover:text-stone-900 transition font-medium"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    Import JSON
                  </button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".json"
                    className="hidden"
                    onChange={handleFileUpload}
                  />
                </div>

                <span className="font-mono text-[10px]">Auto-Synced in Browser</span>
              </div>
            </div>
          ) : (
            /* Account Creation Form */
            <form onSubmit={handleCreate} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-stone-700 font-sans mb-1">
                  Account / Explorer Name:
                </label>
                <input
                  type="text"
                  required
                  maxLength={60}
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="e.g. Maya Lin"
                  className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#EADBCE] rounded-xl text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 font-sans mb-1">
                  Google Cloud Skills Boost Profile URL (optional):
                </label>
                <input
                  type="text"
                  maxLength={300}
                  value={newUrl}
                  onChange={(e) => setNewUrl(e.target.value)}
                  placeholder="https://www.cloudskillsboost.google/public_profiles/..."
                  className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#EADBCE] rounded-xl text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 font-sans mb-1">
                  Personal Goal / Notes:
                </label>
                <input
                  type="text"
                  maxLength={200}
                  value={newNotes}
                  onChange={(e) => setNewNotes(e.target.value)}
                  placeholder="e.g. Aiming for Premium Tier Backpack by November!"
                  className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#EADBCE] rounded-xl text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-[#EADBCE]">
                <button
                  type="button"
                  onClick={() => setIsCreating(false)}
                  className="px-4 py-2 text-xs font-semibold text-stone-600 hover:bg-stone-100 rounded-xl transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={!newName.trim()}
                  className="px-5 py-2 bg-gradient-to-r from-[#F59E0B] to-[#EA580C] text-white text-xs font-bold rounded-xl shadow-arcade-amber hover:shadow-sm transition disabled:opacity-50"
                >
                  Create & Save Account
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
