import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RotateCcw, Home } from 'lucide-react';
import { SAMPLE_PROFILES } from '../data/sampleProfiles';
import { saveProfiles, setActiveProfileId } from '../utils/storage';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error caught by Arcade ErrorBoundary:', error, errorInfo);
    this.setState({ errorInfo });
  }

  private handleReset = () => {
    try {
      saveProfiles(SAMPLE_PROFILES);
      setActiveProfileId(SAMPLE_PROFILES[0].id);
      window.location.reload();
    } catch {
      window.location.reload();
    }
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#FAF7F2] flex items-center justify-center p-6 text-stone-800 font-sans">
          <div className="bg-white rounded-3xl p-8 max-w-lg w-full border border-[#EADBCE] shadow-2xl text-center">
            <div className="w-16 h-16 rounded-2xl bg-[#FEF3C7] text-[#B45309] flex items-center justify-center mx-auto mb-4 border border-[#FDE68A]">
              <AlertTriangle className="w-8 h-8" />
            </div>

            <span className="font-pixel text-xs text-[#B45309] font-bold uppercase tracking-wider block mb-1">
              System Recovery Mode
            </span>
            <h2 className="font-display font-bold text-2xl text-stone-900 mb-2">
              Something went sideways
            </h2>
            <p className="text-stone-600 text-sm mb-6 leading-relaxed">
              An unexpected display glitch occurred. Your saved accounts are safe in browser memory.
            </p>

            {this.state.error && (
              <div className="p-3 bg-[#FAF7F2] rounded-xl border border-[#EADBCE] text-left text-xs font-mono text-stone-600 mb-6 overflow-x-auto max-h-32">
                {this.state.error.toString()}
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="px-5 py-2.5 bg-gradient-to-r from-[#F59E0B] to-[#EA580C] text-white rounded-xl text-xs sm:text-sm font-bold shadow-arcade-amber hover:shadow-sm transition flex items-center justify-center gap-2"
              >
                <Home className="w-4 h-4" />
                Reload Application
              </button>
              <button
                onClick={this.handleReset}
                className="px-5 py-2.5 bg-[#FAF7F2] hover:bg-[#F4ECE1] text-stone-700 border border-[#EADBCE] rounded-xl text-xs sm:text-sm font-semibold transition flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                Reset to Safe Defaults
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
