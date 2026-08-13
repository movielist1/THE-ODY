import React, { useState } from 'react';
import { Flame, Sparkles, Grid, LayoutList } from 'lucide-react';
import { Movie } from '../types';
import { MovieCard } from './MovieCard';

interface TrendingMoviesProps {
  movies: Movie[];
  onWatchNow: (movie: Movie) => void;
}

export const TrendingMovies: React.FC<TrendingMoviesProps> = ({ movies, onWatchNow }) => {
  const [mobileView, setMobileView] = useState<'grid' | 'scroll'>('grid');

  return (
    <section id="trending" className="py-12 sm:py-20 bg-[#050505] relative border-t border-neutral-900">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E50914]/10 border border-[#E50914]/20 text-[#E50914] text-xs font-bold uppercase tracking-wider">
              <Flame className="w-4 h-4 fill-current" />
              TOP 5 PICKS TODAY
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex items-center gap-3">
              🔥 TRENDING MOVIES
            </h2>
            <p className="text-sm text-neutral-400 max-w-xl">
              Hand-picked blockbusters streaming right now in 4K resolution with zero waiting time.
            </p>
          </div>

          {/* Mobile view toggle */}
          <div className="sm:hidden flex items-center bg-[#171717] p-1 rounded-lg border border-neutral-800 self-start">
            <button
              onClick={() => setMobileView('grid')}
              className={`p-2 rounded-md text-xs font-bold flex items-center gap-1.5 transition-colors ${
                mobileView === 'grid' ? 'bg-[#E50914] text-white' : 'text-neutral-400 hover:text-white'
              }`}
              aria-label="Grid layout"
            >
              <Grid className="w-4 h-4" />
              Grid
            </button>
            <button
              onClick={() => setMobileView('scroll')}
              className={`p-2 rounded-md text-xs font-bold flex items-center gap-1.5 transition-colors ${
                mobileView === 'scroll' ? 'bg-[#E50914] text-white' : 'text-neutral-400 hover:text-white'
              }`}
              aria-label="Carousel layout"
            >
              <LayoutList className="w-4 h-4" />
              Swipe
            </button>
          </div>
        </div>

        {/* Movies Grid / Carousel Layout */}
        {/* Desktop & Tablet: Grid Layout with uniform cards */}
        <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onWatchNow={onWatchNow}
              isFeaturedCard={false}
            />
          ))}
        </div>

        {/* Mobile View Layout (Switchable Grid vs Horizontal Scroll) */}
        <div className="sm:hidden">
          {mobileView === 'grid' ? (
            <div className="grid grid-cols-2 gap-3.5">
              {movies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  onWatchNow={onWatchNow}
                  isFeaturedCard={false}
                />
              ))}
            </div>
          ) : (
            <div className="flex overflow-x-auto gap-4 pb-4 no-scrollbar -mx-4 px-4 snap-x snap-mandatory">
              {movies.map((movie) => (
                <div key={movie.id} className="min-w-[260px] max-w-[280px] flex-shrink-0 snap-start">
                  <MovieCard
                    movie={movie}
                    onWatchNow={onWatchNow}
                    isFeaturedCard={false}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Quick Social Traffic Banner Callout */}
        <div className="mt-12 bg-gradient-to-r from-[#171717] via-[#1A0C0E] to-[#171717] p-6 rounded-2xl border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#E50914]/20 text-[#E50914] flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Arrived from YouTube, Facebook, or Linktree?</h4>
              <p className="text-xs text-neutral-400">Click any movie above to start watching immediately without creating an account.</p>
            </div>
          </div>
          <button
            onClick={() => onWatchNow(movies[0])}
            className="w-full sm:w-auto px-5 py-2.5 bg-[#E50914] hover:bg-[#FF1E2D] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors flex-shrink-0"
          >
            WATCH TOP MOVIE
          </button>
        </div>

      </div>
    </section>
  );
};
