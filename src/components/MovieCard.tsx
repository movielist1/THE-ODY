import React from 'react';
import { Play, Star, Clock } from 'lucide-react';
import { Movie } from '../types';

interface MovieCardProps {
  movie: Movie;
  onWatchNow: (movie: Movie) => void;
  isFeaturedCard?: boolean;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie, onWatchNow }) => {
  return (
    <div
      onClick={() => onWatchNow(movie)}
      className="group relative bg-[#171717] rounded-xl border border-neutral-800/80 hover:border-[#E50914]/60 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#E50914]/10 transition-all duration-300 flex flex-col cursor-pointer"
    >
      {/* Poster / Image Wrapper */}
      <div className="relative overflow-hidden bg-neutral-900 w-full aspect-[2/3]">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          referrerPolicy="no-referrer"
        />

        {/* Gradient Overlay on Image */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-transparent to-transparent opacity-80" />

        {/* Quality & Rating Badges */}
        <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1.5">
          <span className="px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white bg-[#E50914] rounded shadow">
            {movie.quality || '4K'}
          </span>
          {movie.featured && (
            <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-black bg-amber-400 rounded shadow">
              TOP 1
            </span>
          )}
        </div>

        <div className="absolute top-2.5 right-2.5 bg-black/80 backdrop-blur-sm px-2 py-0.5 rounded-md flex items-center gap-1 text-[11px] font-bold text-amber-400 border border-neutral-800">
          <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
          <span>{movie.rating}/10</span>
        </div>

        {/* Play Overlay Button on Hover */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-[#E50914] text-white flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
            <Play className="w-6 h-6 fill-current ml-0.5" />
          </div>
        </div>
      </div>

      {/* Content Wrapper */}
      <div className="p-3.5 sm:p-4 flex flex-col justify-between flex-grow">
        
        <div className="space-y-1.5">
          {/* Metadata Row */}
          <div className="flex items-center gap-1.5 text-[11px] text-neutral-400 font-semibold uppercase tracking-wider">
            <span className="text-[#E50914] truncate max-w-[110px]">{movie.genre}</span>
            <span>•</span>
            <span>{movie.year}</span>
          </div>

          {/* Title */}
          <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-[#E50914] transition-colors line-clamp-1">
            {movie.title}
          </h3>

          {/* Description / Hook */}
          <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
            {movie.hook || movie.description}
          </p>
        </div>

        {/* Card CTA Footer */}
        <div className="pt-3 mt-2 border-t border-neutral-800/80">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onWatchNow(movie);
            }}
            className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-[#E50914] hover:bg-[#FF1E2D] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md shadow-[#E50914]/20 group-hover:shadow-[#E50914]/40"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            WATCH NOW
          </button>
        </div>

      </div>
    </div>
  );
};
