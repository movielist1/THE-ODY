import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrendingMovies } from './components/TrendingMovies';
import { AppSection } from './components/AppSection';
import { Footer } from './components/Footer';
import { MovieModal } from './components/MovieModal';
import { UnlockModal } from './components/UnlockModal';
import { AppModal } from './components/AppModal';
import { SearchModal } from './components/SearchModal';
import { MOVIES } from './config/siteConfig';
import { Movie } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedMovieForDetails, setSelectedMovieForDetails] = useState<Movie | null>(null);
  const [selectedMovieForUnlock, setSelectedMovieForUnlock] = useState<Movie | null>(null);
  const [appModalOpen, setAppModalOpen] = useState<boolean>(false);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);

  // Smooth scroll handler
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Open Movie Details Modal
  const handleOpenMovieDetails = (movie: Movie) => {
    setSelectedMovieForDetails(movie);
  };

  // Trigger Watch / Unlock Flow
  const handleConfirmWatch = (movie: Movie) => {
    setSelectedMovieForDetails(null);
    setSelectedMovieForUnlock(movie);
  };

  // App download modal handler
  const handleOpenAppAccess = () => {
    setSelectedMovieForDetails(null);
    setAppModalOpen(true);
  };

  const featuredMovie = MOVIES[0];

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#E50914] selection:text-white">
      
      {/* Header Bar */}
      <Header
        onOpenSearch={() => setSearchOpen(true)}
        onNavigate={handleNavigate}
        activeSection={activeSection}
        onOpenAppModal={handleOpenAppAccess}
      />

      {/* Main Page Sections */}
      <main className="flex-grow">
        
        {/* Hero Banner Section */}
        <Hero
          featuredMovie={featuredMovie}
          onWatchNow={handleOpenMovieDetails}
          onExploreMovies={() => handleNavigate('trending')}
        />

        {/* 5 Trending Movies Section */}
        <TrendingMovies
          movies={MOVIES}
          onWatchNow={handleOpenMovieDetails}
        />

        {/* Stream On The Go App Section */}
        <AppSection onGetApp={handleOpenAppAccess} />

      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Modals */}
      {/* 1. Movie Details Modal */}
      <MovieModal
        movie={selectedMovieForDetails}
        onClose={() => setSelectedMovieForDetails(null)}
        onConfirmWatch={handleConfirmWatch}
        onDownloadApp={handleOpenAppAccess}
      />

      {/* 2. Transparent Unlock / Movie Access Step Modal */}
      <UnlockModal
        movie={selectedMovieForUnlock}
        onClose={() => setSelectedMovieForUnlock(null)}
      />

      {/* 3. Dedicated Streaming App Access Modal */}
      <AppModal
        isOpen={appModalOpen}
        onClose={() => setAppModalOpen(false)}
      />

      {/* 4. Search Modal */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        movies={MOVIES}
        onSelectMovie={handleOpenMovieDetails}
      />

    </div>
  );
}

