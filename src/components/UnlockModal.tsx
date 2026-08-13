import React, { useState } from 'react';
import { X, Lock, ArrowRight, AlertCircle, ShieldCheck } from 'lucide-react';
import { Movie } from '../types';
import { openMovieLocker } from '../config/siteConfig';

interface UnlockModalProps {
  movie: Movie | null;
  onClose: () => void;
}

export const UnlockModal: React.FC<UnlockModalProps> = ({ movie, onClose }) => {
  const [loadingError, setLoadingError] = useState<boolean>(false);
  const [isTriggering, setIsTriggering] = useState<boolean>(false);

  if (!movie) return null;

  const handleContinueToUnlock = async () => {
    if (isTriggering) return;
    setIsTriggering(true);
    setLoadingError(false);

    try {
      const success = await openMovieLocker(movie);

      if (!success) {
        setLoadingError(true);
        setIsTriggering(false);
      } else {
        setTimeout(() => {
          setIsTriggering(false);
        }, 1500);
      }
    } catch (err) {
      console.error('Locker trigger error:', err);
      setLoadingError(true);
      setIsTriggering(false);
    }
  };

  return (
    <div
      id="unlock-modal-overlay"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3.5 sm:p-6 animate-fadeIn"
    >
      {/* Modal Card */}
      <div
        id="unlock-modal-card"
        className="relative w-full max-w-lg bg-[#111111] rounded-2xl border border-neutral-800 shadow-2xl overflow-hidden my-auto text-left"
      >
        {/* Top Accent Header Bar */}
        <div className="h-1.5 bg-gradient-to-r from-[#E50914] via-[#FF1E2D] to-[#E50914]" />

        {/* Close Button */}
        <button
          id="unlock-modal-close-btn"
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-neutral-900/90 hover:bg-[#E50914] text-neutral-400 hover:text-white transition-colors border border-neutral-800"
          aria-label="Close unlock modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Body */}
        <div className="p-5 sm:p-7 space-y-5">
          {/* Header Title & Badge */}
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#181818] text-[11px] font-bold text-neutral-300 uppercase tracking-wider border border-neutral-800">
              <Lock className="w-3.5 h-3.5 text-[#E50914]" />
              Stream Access Step
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Unlock Access
            </h2>
            <p className="text-sm text-neutral-300 font-semibold leading-snug">
              Complete one available sponsor offer to continue.
            </p>
          </div>

          {/* Dynamic Movie Information Card */}
          <div
            id="unlock-movie-card"
            className="p-3 sm:p-3.5 rounded-xl bg-[#171717] border border-neutral-800 flex items-center gap-3.5 shadow-inner"
          >
            <div className="w-14 sm:w-16 aspect-[2/3] flex-shrink-0 rounded-lg overflow-hidden border border-neutral-700 bg-neutral-900">
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="overflow-hidden space-y-1">
              <span className="text-[10px] font-bold text-[#E50914] uppercase tracking-wider block">
                Selected Stream
              </span>
              <h3 className="text-base font-bold text-white truncate leading-tight">
                {movie.title}
              </h3>
              <p className="text-xs text-neutral-400 truncate">
                {movie.genre || movie.genres} · {movie.year}
                {movie.rating ? ` · ⭐ ${movie.rating}/10` : ''}
              </p>
            </div>
          </div>

          {/* HOW IT WORKS Section */}
          <div className="space-y-3 pt-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
              How It Works
            </h4>

            <div className="space-y-2.5">
              {/* Step 1 */}
              <div className="flex items-start gap-3 p-2.5 rounded-lg bg-[#161616] border border-neutral-800/80">
                <div className="w-6 h-6 rounded-full bg-[#E50914]/15 border border-[#E50914]/40 text-[#E50914] font-extrabold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                  1
                </div>
                <div className="space-y-0.5">
                  <p className="text-xs font-bold text-white">Choose an available offer</p>
                  <p className="text-[11px] text-neutral-400">Select an offer from our advertising partner.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-3 p-2.5 rounded-lg bg-[#161616] border border-neutral-800/80">
                <div className="w-6 h-6 rounded-full bg-[#E50914]/15 border border-[#E50914]/40 text-[#E50914] font-extrabold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                  2
                </div>
                <div className="space-y-0.5">
                  <p className="text-xs font-bold text-white">Complete the required action</p>
                  <p className="text-[11px] text-neutral-400">Follow the instructions shown for the selected offer.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-3 p-2.5 rounded-lg bg-[#161616] border border-neutral-800/80">
                <div className="w-6 h-6 rounded-full bg-[#E50914]/15 border border-[#E50914]/40 text-[#E50914] font-extrabold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                  3
                </div>
                <div className="space-y-0.5">
                  <p className="text-xs font-bold text-white">Continue watching</p>
                  <p className="text-[11px] text-neutral-400">Return and continue when unlocked.</p>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-neutral-400 leading-relaxed pt-1">
              Available offers are provided by our advertising partner. Offer availability may vary by device and location.
            </p>
          </div>

          {/* Loading Error Notice */}
          {loadingError && (
            <div className="flex items-center gap-2 p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs animate-fadeIn">
              <AlertCircle className="w-4 h-4 flex-shrink-0 text-amber-400" />
              <span>The unlock service is still loading. Please try again in a moment.</span>
            </div>
          )}

          {/* Main CTA Button */}
          <div className="pt-2">
            <button
              id="continue-to-unlock-btn"
              type="button"
              disabled={isTriggering}
              onClick={handleContinueToUnlock}
              className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#E50914] hover:bg-[#FF1E2D] disabled:opacity-75 disabled:cursor-not-allowed text-white text-base font-extrabold uppercase tracking-wider shadow-lg shadow-[#E50914]/30 hover:shadow-[#E50914]/50 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>CONTINUE TO UNLOCK</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Bottom Trust Text */}
          <div className="pt-2 border-t border-neutral-900/80 flex items-center justify-center gap-1.5 text-[11px] text-neutral-500 text-center">
            <ShieldCheck className="w-3.5 h-3.5 text-neutral-400" />
            <span>🔒 Sponsor offers are provided by our advertising partner.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

