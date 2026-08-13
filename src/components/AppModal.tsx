import React, { useState } from 'react';
import { X, Smartphone, ArrowRight, AlertCircle, ShieldCheck, Check, Download, CheckCircle2 } from 'lucide-react';
import { APP_CONFIG, openAppLocker } from '../config/siteConfig';

interface AppModalProps {
  isOpen: boolean;
  onClose: () => void;
  isUnlocked?: boolean;
}

export const AppModal: React.FC<AppModalProps> = ({ isOpen, onClose, isUnlocked = false }) => {
  const [isTriggering, setIsTriggering] = useState<boolean>(false);
  const [loadingError, setLoadingError] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleContinueToGetApp = async () => {
    if (isTriggering) return;
    setIsTriggering(true);
    setLoadingError(false);

    try {
      const success = await openAppLocker();

      if (!success) {
        setLoadingError(true);
        setIsTriggering(false);
      } else {
        setTimeout(() => {
          setIsTriggering(false);
        }, 1500);
      }
    } catch (err) {
      console.error('App locker trigger error:', err);
      setLoadingError(true);
      setIsTriggering(false);
    }
  };

  return (
    <div
      id="app-access-modal-overlay"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3.5 sm:p-6 animate-fadeIn"
    >
      {/* Modal Card */}
      <div
        id="app-access-modal-card"
        className="relative w-full max-w-lg bg-[#111111] rounded-2xl border border-neutral-800 shadow-2xl overflow-hidden my-auto text-left"
      >
        {/* Top Accent Header Bar */}
        <div className="h-1.5 bg-gradient-to-r from-[#E50914] via-[#FF1E2D] to-[#E50914]" />

        {/* Close Button */}
        <button
          id="app-modal-close-btn"
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-neutral-900/90 hover:bg-[#E50914] text-neutral-400 hover:text-white transition-colors border border-neutral-800"
          aria-label="Close app access modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Body */}
        <div className="p-5 sm:p-7 space-y-5">
          {/* Header Title & Badge */}
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#181818] text-[11px] font-bold text-neutral-300 uppercase tracking-wider border border-neutral-800">
              <Smartphone className="w-3.5 h-3.5 text-[#E50914]" />
              App Access
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Get the Streaming App
            </h2>
            <p className="text-sm text-neutral-300 font-semibold leading-snug">
              Complete one available sponsor offer to unlock access to the app download.
            </p>
            <p className="text-xs text-neutral-400 leading-relaxed">
              We use sponsor offers to help support the service and keep access available to visitors.
            </p>
          </div>

          {/* App Preview Card */}
          <div
            id="app-preview-card"
            className="p-4 rounded-xl bg-[#171717] border border-neutral-800 space-y-3.5 shadow-inner"
          >
            <div className="flex items-center gap-3.5">
              {/* App Icon */}
              <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#E50914] to-[#990000] p-0.5 flex-shrink-0 shadow-lg shadow-[#E50914]/20 flex items-center justify-center">
                <div className="w-full h-full rounded-[14px] bg-[#121212] flex items-center justify-center border border-neutral-700/50">
                  <Smartphone className="w-6 h-6 text-[#E50914]" />
                </div>
              </div>

              {/* App Details */}
              <div className="overflow-hidden space-y-0.5">
                <h3 className="text-base sm:text-lg font-extrabold text-white truncate leading-tight">
                  {APP_CONFIG.name} App
                </h3>
                <p className="text-xs text-neutral-400 font-medium">
                  {APP_CONFIG.category || 'Entertainment · Streaming'}
                </p>
                <div className="flex items-center gap-2 pt-0.5">
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-400 font-bold px-2 py-0.5 rounded border border-emerald-500/30">
                    Latest Version
                  </span>
                  {APP_CONFIG.platforms.android && (
                    <span className="text-[10px] text-neutral-400 bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800">
                      Android
                    </span>
                  )}
                  {APP_CONFIG.platforms.ios && (
                    <span className="text-[10px] text-neutral-400 bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800">
                      iOS
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* App Key Highlights */}
            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-neutral-800/80 text-xs">
              <div className="flex items-center gap-1.5 text-neutral-300">
                <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span className="text-[11px] truncate">Mobile optimized</span>
              </div>
              <div className="flex items-center gap-1.5 text-neutral-300">
                <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span className="text-[11px] truncate">Easy access</span>
              </div>
              <div className="flex items-center gap-1.5 text-neutral-300">
                <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span className="text-[11px] truncate">Regular updates</span>
              </div>
            </div>
          </div>

          {/* HOW TO GET THE APP Section (If not unlocked) */}
          {!isUnlocked ? (
            <div className="space-y-3 pt-1">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                How To Get The App
              </h4>

              <div className="space-y-2.5">
                {/* Step 1 */}
                <div className="flex items-start gap-3 p-2.5 rounded-lg bg-[#161616] border border-neutral-800/80">
                  <div className="w-6 h-6 rounded-full bg-[#E50914]/15 border border-[#E50914]/40 text-[#E50914] font-extrabold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    01
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-xs font-bold text-white">Choose an offer</p>
                    <p className="text-[11px] text-neutral-400">Choose one available sponsor offer from our partner.</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start gap-3 p-2.5 rounded-lg bg-[#161616] border border-neutral-800/80">
                  <div className="w-6 h-6 rounded-full bg-[#E50914]/15 border border-[#E50914]/40 text-[#E50914] font-extrabold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    02
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-xs font-bold text-white">Complete the action</p>
                    <p className="text-[11px] text-neutral-400">Follow the instructions provided by the selected offer.</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start gap-3 p-2.5 rounded-lg bg-[#161616] border border-neutral-800/80">
                  <div className="w-6 h-6 rounded-full bg-[#E50914]/15 border border-[#E50914]/40 text-[#E50914] font-extrabold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    03
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-xs font-bold text-white">Get access</p>
                    <p className="text-[11px] text-neutral-400">After the required action is completed, continue to the app download/access step.</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Unlocked Confirmation View (when legitimate unlock completion is reached) */
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-left space-y-2">
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-xs font-extrabold uppercase">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Access Unlocked
              </div>
              <h4 className="text-lg font-bold text-white">Your app download is ready.</h4>
              <p className="text-xs text-neutral-300">
                If your download doesn't start, use the button below.
              </p>
            </div>
          )}

          {/* Loading Error Notice */}
          {loadingError && (
            <div className="flex items-center gap-2 p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs animate-fadeIn">
              <AlertCircle className="w-4 h-4 flex-shrink-0 text-amber-400" />
              <span>The unlock service is still loading. Please try again in a moment.</span>
            </div>
          )}

          {/* Main CTA Button */}
          <div className="pt-2">
            {!isUnlocked ? (
              <button
                id="continue-to-get-app-btn"
                type="button"
                disabled={isTriggering}
                onClick={handleContinueToGetApp}
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#E50914] hover:bg-[#FF1E2D] disabled:opacity-75 disabled:cursor-not-allowed text-white text-base font-extrabold uppercase tracking-wider shadow-lg shadow-[#E50914]/30 hover:shadow-[#E50914]/50 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>{isTriggering ? 'OPENING ACCESS...' : 'CONTINUE TO GET THE APP'}</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            ) : (
              <a
                id="download-app-unlocked-btn"
                href={APP_CONFIG.downloadUrl}
                download
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-base font-extrabold uppercase tracking-wider shadow-lg shadow-emerald-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Download className="w-5 h-5" />
                <span>DOWNLOAD THE APP</span>
              </a>
            )}
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
