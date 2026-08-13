import React from 'react';
import { X, Play, Smartphone, Star, Clock, ShieldCheck, Film, Share2 } from 'lucide-react';
import { Movie } from '../types';
import { APP_DOWNLOAD_URL } from '../config/siteConfig';

interface MovieModalProps {
  movie: Movie | null;
  onClose: () => void;
  onConfirmWatch: (movie: Movie) => void;
  onDownloadApp: () => void;
}

export const MovieModal: React.FC<MovieModalProps> = ({ movie, onClose, onConfirmWatch, onDownloadApp }) => {
  if (!movie) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-[#111111] rounded-2xl border border-neutral-800 shadow-2xl overflow-hidden my-auto text-left">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-[#E50914] text-white flex items-center justify-center border border-neutral-700 transition-colors focus:outline-none"
          aria-label="Close movie modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Backdrop Banner Header */}
        <div className="relative w-full h-48 sm:h-72 bg-neutral-900 overflow-hidden">
          <img
            src={movie.backdrop}
            alt={movie.title}
            className="w-full h-full object-cover filter brightness-75 contrast-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent" />
          
          <div className="absolute bottom-4 left-4 sm:left-8 flex items-center gap-2">
            <span className="px-2.5 py-1 text-xs font-extrabold uppercase bg-[#E50914] text-white rounded">
              {movie.quality || '4K ULTRA HD'}
            </span>
            <span className="px-2.5 py-1 text-xs font-bold uppercase bg-black/60 text-emerald-400 border border-emerald-500/30 rounded backdrop-blur-sm">
              FREE STREAMING
            </span>
          </div>
        </div>

        {/* Content Layout: Responsive Grid (Vertical on mobile, Horizontal on desktop) */}
        <div className="p-5 sm:p-8 pt-2 sm:pt-4">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 -mt-16 sm:-mt-24 relative z-10">
            
            {/* Movie Poster */}
            <div className="w-36 sm:w-52 aspect-[2/3] flex-shrink-0 mx-auto md:mx-0 rounded-xl overflow-hidden border-2 border-neutral-700 shadow-2xl bg-neutral-900 self-start">
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Movie Info & Details */}
            <div className="flex-grow space-y-4 text-center md:text-left">
              
              {/* Badges & Meta */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 text-xs font-semibold text-neutral-400">
                <span className="text-[#E50914] font-bold uppercase">{movie.genre}</span>
                <span>•</span>
                <span>{movie.year}</span>
                <span>•</span>
                <span className="flex items-center gap-1 text-amber-400 font-bold">
                  <Star className="w-4 h-4 fill-amber-400" />
                  {movie.rating} / 10
                </span>
                {movie.duration && (
                  <>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-neutral-400" />
                      {movie.duration}
                    </span>
                  </>
                )}
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                {movie.title}
              </h2>

              {/* Hook / Tagline */}
              {movie.hook && (
                <div className="text-sm sm:text-base font-semibold text-amber-400 italic bg-amber-500/10 border-l-2 border-amber-400 px-3 py-1.5 rounded-r">
                  "{movie.hook}"
                </div>
              )}

              {/* Description */}
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl">
                {movie.desc || movie.description}
              </p>

              {/* Quality & Security Features */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2 text-xs text-neutral-400 border-t border-neutral-800">
                <div className="flex items-center gap-1.5 justify-center md:justify-start">
                  <Film className="w-4 h-4 text-[#E50914]" />
                  <span>Full 1080p / 4K</span>
                </div>
                <div className="flex items-center gap-1.5 justify-center md:justify-start">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Verified Stream</span>
                </div>
                <div className="flex items-center gap-1.5 justify-center md:justify-start col-span-2 sm:col-span-1">
                  <Share2 className="w-4 h-4 text-neutral-400" />
                  <span>No Registration</span>
                </div>
              </div>

              {/* Action Buttons: Primary WATCH NOW & Secondary DOWNLOAD APP */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={() => onConfirmWatch(movie)}
                  className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#E50914] hover:bg-[#FF1E2D] text-white text-sm font-extrabold uppercase tracking-wider rounded-xl shadow-lg shadow-[#E50914]/30 hover:shadow-[#E50914]/50 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Play className="w-5 h-5 fill-current" />
                  {movie.cta || 'WATCH NOW'}
                </button>

                <button
                  onClick={onDownloadApp}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#171717] hover:bg-[#222222] border border-neutral-800 text-neutral-200 hover:text-white text-sm font-bold uppercase tracking-wider rounded-xl transition-all"
                >
                  <Smartphone className="w-4 h-4 text-[#E50914]" />
                  GET THE APP
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
