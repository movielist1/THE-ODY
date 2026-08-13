import React from 'react';
import { Smartphone, CheckCircle, Wifi, ShieldCheck, Play, Radio, ArrowRight } from 'lucide-react';
import { APP_CONFIG, SITE_NAME } from '../config/siteConfig';
import appPreviewMockup from '../assets/images/movielist_app_preview_1786656117198.jpg';

interface AppSectionProps {
  onGetApp: () => void;
}

export const AppSection: React.FC<AppSectionProps> = ({ onGetApp }) => {
  return (
    <section id="app" className="py-16 sm:py-24 bg-[#0A0A0A] border-t border-neutral-900 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#E50914]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E50914]/10 border border-[#E50914]/20 text-[#E50914] text-xs font-bold uppercase tracking-wider">
              <Smartphone className="w-4 h-4" />
              STREAM ANYWHERE
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {APP_CONFIG.tagline || 'Your Entertainment. Anywhere.'}
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 font-semibold">
              {APP_CONFIG.description}
            </p>

            {/* App Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 py-2">
              <div className="flex items-center gap-2.5 text-xs text-neutral-200 font-medium bg-[#141414] p-3 rounded-xl border border-neutral-800">
                <CheckCircle className="w-4 h-4 text-[#E50914]" />
                <span>Offline Movie Downloads</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-neutral-200 font-medium bg-[#141414] p-3 rounded-xl border border-neutral-800">
                <Wifi className="w-4 h-4 text-[#E50914]" />
                <span>Adaptive Zero-Buffer 4K</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-neutral-200 font-medium bg-[#141414] p-3 rounded-xl border border-neutral-800">
                <Radio className="w-4 h-4 text-[#E50914]" />
                <span>Live Trending Notifications</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-neutral-200 font-medium bg-[#141414] p-3 rounded-xl border border-neutral-800">
                <ShieldCheck className="w-4 h-4 text-[#E50914]" />
                <span>100% Free & Fast Access</span>
              </div>
            </div>

            {/* Platform Badges & Primary GET THE APP CTA Button */}
            <div className="pt-4 space-y-4">
              <button
                id="get-the-app-section-btn"
                type="button"
                onClick={onGetApp}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#E50914] hover:bg-[#FF1E2D] text-white text-base font-extrabold uppercase tracking-wider rounded-xl shadow-xl shadow-[#E50914]/30 hover:shadow-[#E50914]/50 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Smartphone className="w-5 h-5" />
                <span>GET THE APP</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Supported OS Icons */}
              <div className="flex items-center gap-6 text-xs text-neutral-400 font-medium pt-1">
                {APP_CONFIG.platforms.android && (
                  <div className="flex items-center gap-1.5">
                    {/* Android Icon */}
                    <svg className="w-4 h-4 fill-emerald-500" viewBox="0 0 24 24">
                      <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997 0-.551.4482-.9993.9993-.9993.5519 0 .9997.4483.9997.9993 0 .5511-.4478.9997-.9997.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997 0-.551.4482-.9993.9993-.9993.5519 0 .9997.4483.9997.9993 0 .5511-.4478.9997-.9997.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1523-.5676.416.416 0 00-.5676.1523l-2.0223 3.503C15.5902 8.3242 13.8533 8 12 8s-3.5902.3242-5.1367.9502l-2.0223-3.503a.416.416 0 00-.5676-.1523.416.416 0 00-.1523.5676l1.9973 3.4592C2.6889 11.1867.3438 14.5039.0352 18.5h23.9296c-.3086-3.9961-2.6537-7.3133-6.0829-9.1786"/>
                    </svg>
                    <span>Android APK</span>
                  </div>
                )}
                {APP_CONFIG.platforms.android && APP_CONFIG.platforms.ios && <span>•</span>}
                {APP_CONFIG.platforms.ios && (
                  <div className="flex items-center gap-1.5">
                    {/* iOS Apple Icon */}
                    <svg className="w-4 h-4 fill-neutral-300" viewBox="0 0 24 24">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.12c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.63 1.35-.57.66-.97 1.73-.84 2.76 1.01.08 2.03-.51 2.55-1.26"/>
                    </svg>
                    <span>iOS Web App</span>
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* Right Mockup Graphic Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm bg-[#171717] p-4 rounded-[2.5rem] border-4 border-neutral-800 shadow-2xl">
              {/* Phone Speaker Notch */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-20 h-4 bg-neutral-900 rounded-full z-20 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-neutral-800" />
              </div>

              {/* Phone Screen Mockup */}
              <div className="relative rounded-[2rem] overflow-hidden bg-neutral-950 aspect-[9/18] border border-neutral-800">
                <img
                  src={appPreviewMockup}
                  alt={`${SITE_NAME} Mobile App Preview`}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating Play Tag */}
                <div className="absolute bottom-6 left-4 right-4 bg-black/80 backdrop-blur-md p-3 rounded-xl border border-neutral-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#E50914] flex items-center justify-center text-white">
                      <Play className="w-4 h-4 fill-current" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-bold text-white">Stream Any Movie</p>
                      <p className="text-[10px] text-neutral-400">Zero Buffer • 4K Quality</p>
                    </div>
                  </div>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-400 font-bold px-2 py-1 rounded">LIVE</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

