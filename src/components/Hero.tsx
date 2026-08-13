import React from 'react';
import { Play, Film, Sparkles, ShieldCheck, Flame } from 'lucide-react';
import { motion } from 'motion/react';
import { Movie } from '../types';

interface HeroProps {
  featuredMovie: Movie;
  onWatchNow: (movie: Movie) => void;
  onExploreMovies: () => void;
}

export const Hero: React.FC<HeroProps> = ({ featuredMovie, onWatchNow, onExploreMovies }) => {
  return (
    <section className="relative w-full min-h-[85vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden bg-[#050505]">
      
      {/* Background Image with Cinematic Radial & Linear Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src={featuredMovie.backdrop}
          alt={featuredMovie.title}
          className="w-full h-full object-cover object-center scale-105 opacity-40 filter brightness-75 contrast-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_90%)]" />
      </div>

      {/* Hero Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 flex flex-col items-start justify-center w-full">
        
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl space-y-6"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#171717]/90 border border-neutral-800 backdrop-blur-md">
            <Flame className="w-4 h-4 text-[#E50914] animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-200">
              TRENDING NOW
            </span>
            <span className="w-1 h-1 rounded-full bg-neutral-600"></span>
            <span className="text-xs font-semibold text-[#E50914]">{featuredMovie.quality || '4K Ultra HD'}</span>
          </div>

          {/* Large Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
            WATCH WHAT'S <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-neutral-400">
              TRENDING
            </span>
          </h1>

          {/* Supporting text */}
          <p className="text-lg sm:text-xl text-neutral-300 font-medium max-w-2xl leading-relaxed">
            Discover the movies everyone is talking about. High-definition 4K streaming with zero subscription required.
          </p>

          {/* Featured Movie Snapshot Box */}
          <div className="flex items-center gap-4 py-2 border-y border-neutral-800/80 my-2 max-w-xl">
            <div className="w-12 h-16 rounded overflow-hidden flex-shrink-0 bg-neutral-900 border border-neutral-800">
              <img
                src={featuredMovie.poster}
                alt={featuredMovie.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="text-left overflow-hidden">
              <span className="text-xs uppercase tracking-wider text-[#E50914] font-bold">Featured Today</span>
              <h3 className="text-base font-bold text-white truncate">{featuredMovie.title}</h3>
              <p className="text-xs text-neutral-400 line-clamp-1">{featuredMovie.genre} • ⭐ {featuredMovie.rating}/10 ({featuredMovie.year})</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <button
              onClick={() => onWatchNow(featuredMovie)}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#E50914] hover:bg-[#FF1E2D] text-white font-extrabold text-base tracking-wide uppercase shadow-xl shadow-[#E50914]/30 hover:shadow-[#E50914]/50 transition-all transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[#E50914]"
            >
              <Play className="w-5 h-5 fill-current" />
              WATCH NOW
            </button>

            <button
              onClick={onExploreMovies}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-[#171717] hover:bg-[#222222] border border-neutral-800 text-white font-bold text-base tracking-wide uppercase transition-all hover:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-700"
            >
              <Film className="w-5 h-5 text-neutral-400" />
              EXPLORE MOVIES
            </button>
          </div>

          {/* Trust indicators */}
          <div className="flex items-center gap-6 pt-3 text-xs text-neutral-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              No Credit Card Needed
            </span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#E50914]" />
              4K Ultra HD & Dolby Audio
            </span>
          </div>

        </motion.div>
      </div>

      {/* Bottom Gradient Fade to Next Section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
    </section>
  );
};
