import React, { useEffect } from 'react';
import { X, RotateCcw, Info } from 'lucide-react';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  skillRatio: number;
  onSkillRatioChange: (ratio: number) => void;
  onResetToDefaults: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  skillRatio,
  onSkillRatioChange,
  onResetToDefaults
}) => {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/40 backdrop-blur-sm animate-fadeIn"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl max-w-md w-full border border-[#EADBCE] shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#EADBCE] bg-[#FAF7F2]">
          <div>
            <span className="font-pixel text-[10px] text-[#B45309] font-bold uppercase">
              Calculation Engine
            </span>
            <h3 className="font-display font-bold text-xl text-stone-900 mt-0.5">
              Arcade Rules & Ratios
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-800 rounded-xl transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          {/* Skill Ratio Option */}
          <div>
            <label className="block text-xs font-bold text-stone-800 font-sans mb-1.5 flex items-center justify-between">
              <span>Skill Badge Points Ratio:</span>
              <span className="font-mono text-[#B45309] font-bold">
                1 pt per {skillRatio} {skillRatio === 1 ? 'badge' : 'badges'}
              </span>
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { ratio: 1, label: '1 pt per badge' },
                { ratio: 2, label: '1 pt per 2 badges (Default)' },
                { ratio: 3, label: '1 pt per 3 badges' },
              ].map((opt) => (
                <button
                  key={opt.ratio}
                  onClick={() => onSkillRatioChange(opt.ratio)}
                  className={`p-2.5 rounded-xl border text-xs font-semibold font-sans transition ${
                    skillRatio === opt.ratio
                      ? 'bg-[#FEF3C7] border-[#B45309] text-[#B45309] ring-2 ring-[#F59E0B]/30'
                      : 'bg-[#FAF7F2] border-[#EADBCE] text-stone-600 hover:bg-[#F4ECE1]'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
            <p className="text-[11px] text-stone-500 mt-1.5 flex items-center gap-1 font-sans">
              <Info className="w-3.5 h-3.5 text-stone-400" />
              Standard Google Cloud Arcade 2026 awards 1 point per 2 verified skill badges.
            </p>
          </div>

          {/* Reset all button */}
          <div className="pt-4 border-t border-[#EADBCE] flex items-center justify-between">
            <button
              onClick={() => {
                if (window.confirm('Reset all saved profiles and points data to original defaults?')) {
                  onResetToDefaults();
                  onClose();
                }
              }}
              className="text-xs text-rose-700 hover:text-rose-900 font-semibold flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset All to Defaults
            </button>

            <button
              onClick={onClose}
              className="px-4 py-2 bg-[#292524] text-white text-xs font-bold rounded-xl"
            >
              Done
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
