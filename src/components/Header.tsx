import React, { useState } from 'react';
import { Film, Search, Menu, X, Smartphone, PlayCircle } from 'lucide-react';
import { SITE_NAME, APP_DOWNLOAD_URL } from '../config/siteConfig';

interface HeaderProps {
  onOpenSearch: () => void;
  onNavigate: (sectionId: string) => void;
  activeSection: string;
  onOpenAppModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSearch, onNavigate, activeSection, onOpenAppModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setMobileMenuOpen(false);
  };

  const handleGetAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onOpenAppModal) {
      onOpenAppModal();
    } else {
      handleNavClick('app');
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#050505]/95 backdrop-blur-md border-b border-neutral-900 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-2.5 text-left group focus:outline-none focus:ring-2 focus:ring-[#E50914] rounded-lg p-1"
          aria-label={`${SITE_NAME} Home`}
        >
          <div className="w-9 h-9 rounded-lg bg-[#E50914] flex items-center justify-center shadow-lg shadow-[#E50914]/20 group-hover:bg-[#FF1E2D] transition-colors">
            <Film className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-extrabold tracking-tight text-white flex items-center">
            {SITE_NAME}
            <span className="w-1.5 h-1.5 rounded-full bg-[#E50914] ml-1"></span>
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
          <button
            onClick={() => handleNavClick('hero')}
            className={`text-sm font-semibold transition-colors hover:text-[#E50914] ${
              activeSection === 'hero' ? 'text-[#E50914]' : 'text-neutral-300'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('trending')}
            className={`text-sm font-semibold transition-colors hover:text-[#E50914] flex items-center gap-1.5 ${
              activeSection === 'trending' ? 'text-[#E50914]' : 'text-neutral-300'
            }`}
          >
            <PlayCircle className="w-4 h-4 text-[#E50914]" />
            Movies
          </button>
          <button
            onClick={() => handleNavClick('app')}
            className={`text-sm font-semibold transition-colors hover:text-[#E50914] ${
              activeSection === 'app' ? 'text-[#E50914]' : 'text-neutral-300'
            }`}
          >
            App
          </button>
        </nav>

        {/* Action Buttons: Search & Get App */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={onOpenSearch}
            className="p-2 rounded-full text-neutral-300 hover:text-white hover:bg-neutral-800/60 transition-colors focus:outline-none focus:ring-2 focus:ring-[#E50914]"
            aria-label="Search movies"
            title="Search Movies"
          >
            <Search className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={handleGetAppClick}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#E50914] hover:bg-[#FF1E2D] rounded-full shadow-md shadow-[#E50914]/25 hover:shadow-lg hover:shadow-[#E50914]/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <Smartphone className="w-3.5 h-3.5" />
            GET THE APP
          </button>
        </div>

        {/* Mobile Header Controls */}
        <div className="flex md:hidden items-center space-x-2">
          <button
            onClick={onOpenSearch}
            className="p-2.5 rounded-lg text-neutral-200 hover:text-white hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#E50914]"
            aria-label="Search movies"
          >
            <Search className="w-5 h-5" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-lg text-neutral-200 hover:text-white hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#E50914]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#E50914]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-b border-neutral-800 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          <button
            onClick={() => handleNavClick('hero')}
            className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold transition-colors flex items-center justify-between ${
              activeSection === 'hero' ? 'bg-[#E50914]/10 text-[#E50914]' : 'text-neutral-200 hover:bg-neutral-900'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('trending')}
            className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold transition-colors flex items-center justify-between ${
              activeSection === 'trending' ? 'bg-[#E50914]/10 text-[#E50914]' : 'text-neutral-200 hover:bg-neutral-900'
            }`}
          >
            <span className="flex items-center gap-2">
              <PlayCircle className="w-4 h-4 text-[#E50914]" />
              Movies & Trending
            </span>
            <span className="text-xs bg-[#E50914] text-white px-2 py-0.5 rounded-full font-bold">5 🔥</span>
          </button>
          <button
            onClick={() => handleNavClick('app')}
            className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold transition-colors flex items-center justify-between ${
              activeSection === 'app' ? 'bg-[#E50914]/10 text-[#E50914]' : 'text-neutral-200 hover:bg-neutral-900'
            }`}
          >
            App Stream
          </button>

          <div className="pt-2 border-t border-neutral-900">
            <button
              type="button"
              onClick={handleGetAppClick}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#E50914] hover:bg-[#FF1E2D] rounded-xl shadow-md cursor-pointer"
            >
              <Smartphone className="w-4 h-4" />
              GET THE APP
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
