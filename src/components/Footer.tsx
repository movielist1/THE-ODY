import React from 'react';
import { Film, Shield, Lock, FileText, Mail } from 'lucide-react';
import { SITE_NAME } from '../config/siteConfig';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenPrivacyModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-neutral-900 py-12 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#E50914] flex items-center justify-center text-white">
              <Film className="w-4 h-4" />
            </div>
            <span className="text-lg font-extrabold text-white tracking-tight">
              {SITE_NAME}
            </span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-neutral-400">
            <button
              onClick={() => onNavigate('hero')}
              className="hover:text-white transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('trending')}
              className="hover:text-white transition-colors"
            >
              Movies
            </button>
            <button
              onClick={() => onNavigate('app')}
              className="hover:text-white transition-colors"
            >
              App
            </button>
            <a
              href="#privacy"
              onClick={(e) => {
                e.preventDefault();
                alert("Privacy Policy: MOVIELIST does not store personal streaming records or track user analytics without consent.");
              }}
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <Lock className="w-3 h-3" />
              Privacy Policy
            </a>
            <a
              href="#terms"
              onClick={(e) => {
                e.preventDefault();
                alert("Terms of Service: All video streams and content links on MOVIELIST are provided for preview and social media evaluation purposes.");
              }}
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <FileText className="w-3 h-3" />
              Terms
            </a>
            <a
              href="mailto:support@movielist.example"
              onClick={(e) => {
                e.preventDefault();
                alert("Contact Support: Please contact support@movielist.example for any inquiries.");
              }}
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <Mail className="w-3 h-3" />
              Contact
            </a>
          </nav>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-6 border-t border-neutral-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-neutral-500">
          <p>© {currentYear} {SITE_NAME}. All rights reserved. Designed for fast mobile discovery from YouTube, Facebook, and Linktree.</p>
          <div className="flex items-center gap-1.5 text-[11px]">
            <Shield className="w-3.5 h-3.5 text-emerald-500" />
            <span>Secure SSL Encrypted Connections</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
