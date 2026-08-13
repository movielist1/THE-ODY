import React, { useState, useMemo } from 'react';
import { Search, X, Film, Play, Star } from 'lucide-react';
import { Movie } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  movies: Movie[];
  onSelectMovie: (movie: Movie) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, movies, onSelectMovie }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMovies = useMemo(() => {
    if (!searchQuery.trim()) return movies;
    const query = searchQuery.toLowerCase().trim();
    return movies.filter((movie) =>
      movie.title.toLowerCase().includes(query) ||
      movie.genre.toLowerCase().includes(query) ||
      movie.year.includes(query) ||
      movie.description.toLowerCase().includes(query)
    );
  }, [searchQuery, movies]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-start justify-center p-4 sm:p-6 pt-16 sm:pt-24 animate-fadeIn">
      
      {/* Modal Box */}
      <div className="relative w-full max-w-2xl bg-[#111111] rounded-2xl border border-neutral-800 shadow-2xl overflow-hidden text-left">
        
        {/* Search Header Bar */}
        <div className="p-4 sm:p-5 border-b border-neutral-800 flex items-center gap-3 bg-[#171717]">
          <Search className="w-5 h-5 text-[#E50914] flex-shrink-0" />
          
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search titles, genres, or release years..."
            className="w-full bg-transparent text-white placeholder-neutral-500 font-medium text-base focus:outline-none"
            autoFocus
          />

          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="p-1 rounded-md text-neutral-400 hover:text-white hover:bg-neutral-800 text-xs font-semibold px-2 py-1"
            >
              Clear
            </button>
          )}

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Results List */}
        <div className="p-4 sm:p-6 max-h-[60vh] overflow-y-auto space-y-3">
          
          <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
            <span>
              {searchQuery ? `Results for "${searchQuery}"` : 'All Trending Movies'}
            </span>
            <span>{filteredMovies.length} found</span>
          </div>

          {filteredMovies.length > 0 ? (
            <div className="space-y-2.5">
              {filteredMovies.map((movie) => (
                <div
                  key={movie.id}
                  onClick={() => {
                    onSelectMovie(movie);
                    onClose();
                  }}
                  className="group p-3 rounded-xl bg-[#171717] hover:bg-[#1C1C1C] border border-neutral-800 hover:border-[#E50914]/50 transition-all cursor-pointer flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3.5 overflow-hidden">
                    <img
                      src={movie.poster}
                      alt={movie.title}
                      className="w-12 h-16 object-cover rounded bg-neutral-900 border border-neutral-800 flex-shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div className="overflow-hidden">
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-bold text-white group-hover:text-[#E50914] transition-colors truncate">
                          {movie.title}
                        </h4>
                        <span className="text-[10px] font-bold text-amber-400 bg-amber-400/10 px-1.5 py-0.5 rounded flex items-center gap-1">
                          <Star className="w-3 h-3 fill-amber-400" />
                          {movie.rating}/10
                        </span>
                      </div>
                      <p className="text-xs text-neutral-400 truncate mt-0.5">
                        {movie.genre} • {movie.year} • {movie.quality || '4K'}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="p-2.5 rounded-lg bg-[#E50914] hover:bg-[#FF1E2D] text-white flex-shrink-0 transition-colors"
                  >
                    <Play className="w-4 h-4 fill-current" />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            /* No Movies Found Message */
            <div className="py-12 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-neutral-800 text-neutral-500 flex items-center justify-center mx-auto">
                <Film className="w-6 h-6" />
              </div>
              <p className="text-base font-bold text-neutral-300">
                No movies found.
              </p>
              <p className="text-xs text-neutral-500 max-w-sm mx-auto">
                Try searching for keywords like "Sci-Fi", "Action", "2026", or clear your current query.
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="px-4 py-2 bg-[#171717] hover:bg-[#222222] text-xs font-bold text-white rounded-lg border border-neutral-800"
              >
                Clear Search
              </button>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
