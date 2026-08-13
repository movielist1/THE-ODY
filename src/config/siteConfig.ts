import { Movie, AppConfig } from '../types';

// ============================================================================
// SITE CONFIGURATION & DATA STRUCTURE
// Modify the site name, app download link, and movie list below.
// ============================================================================

export const SITE_NAME: string = "MOVIELIST";

// ==========================================
// APP CONFIGURATION
// ==========================================

export const APP_CONFIG: AppConfig = {
  name: "MOVIELIST",
  tagline: "Your Entertainment. Anywhere.",
  description: "Get the streaming app for a faster, more convenient way to access your entertainment.",
  category: "Entertainment · Streaming",
  icon: "https://images.unsplash.com/photo-1616469829941-c7200edec809?auto=format&fit=crop&w=200&q=80",
  downloadUrl: "#",
  platforms: {
    android: true,
    ios: false
  },
  features: [
    "Mobile optimized",
    "Easy access",
    "Regular updates"
  ]
};

export const APP_DOWNLOAD_URL: string = APP_CONFIG.downloadUrl;

// Centralized 5 Movies Data List
export const MOVIES: Movie[] = [
  {
    id: 1,
    title: "Spider-Man: Brand New Day",
    img: "https://i.imgur.com/nw177fj.jpeg",
    poster: "https://i.imgur.com/nw177fj.jpeg",
    backdrop: "https://i.imgur.com/nw177fj.jpeg",
    hook: "The mask is the same. The face behind it? Nobody remembers.",
    desc: "Fighting crime full-time as Spider-Man in a world that doesn't remember him—and the pressure of seeing his old friends move on without him—sparks a change in Peter Parker he may not have the power to control. But that transformation might also be the only thing that can stop a shocking new threat to the city and those he loves - a powerful villain no one can even see.",
    description: "Fighting crime full-time as Spider-Man in a world that doesn't remember him—and the pressure of seeing his old friends move on without him—sparks a change in Peter Parker he may not have the power to control. But that transformation might also be the only thing that can stop a shocking new threat to the city and those he loves - a powerful villain no one can even see.",
    cta: "Watch Now — If You Think You Know What Happens Next",
    year: "2026",
    genres: "Action / Sci-Fi",
    genre: "Action / Sci-Fi",
    rating: "9.8",
    watchUrl: "#",
    featured: true,
    quality: "4K Ultra HD"
  },
  {
    id: 2,
    title: "The Odyssey",
    img: "https://i.imgur.com/Ko3IhzT.jpeg",
    poster: "https://i.imgur.com/Ko3IhzT.jpeg",
    backdrop: "https://i.imgur.com/Ko3IhzT.jpeg",
    hook: "He survived the war. The journey home will be worse.",
    desc: "Odysseus, the legendary King of Ithaca, embarks on a long and perilous journey home following the Trojan War. Throughout his voyage, he is forced to confront the whims of gods, mythological monsters, and trials that stretch both his cunning and his humanity to the breaking point.",
    description: "Odysseus, the legendary King of Ithaca, embarks on a long and perilous journey home following the Trojan War. Throughout his voyage, he is forced to confront the whims of gods, mythological monsters, and trials that stretch both his cunning and his humanity to the breaking point.",
    cta: "Watch Now — The Gods Are Waiting",
    year: "2026",
    genres: "Action / Adventure",
    genre: "Action / Adventure",
    rating: "9.6",
    watchUrl: "#",
    quality: "4K Ultra HD"
  },
  {
    id: 3,
    title: "The Last House",
    img: "https://i.imgur.com/ljSnVOg.jpeg",
    poster: "https://i.imgur.com/ljSnVOg.jpeg",
    backdrop: "https://i.imgur.com/ljSnVOg.jpeg",
    hook: "Sealed inside. Time is running out.",
    desc: "A family suddenly sealed inside their home must work together to survive against dwindling resources and the ominous threat keeping them trapped.",
    description: "A family suddenly sealed inside their home must work together to survive against dwindling resources and the ominous threat keeping them trapped.",
    cta: "Watch Now — Survive The Night",
    year: "2026",
    genres: "Thriller / Horror",
    genre: "Thriller / Horror",
    rating: "9.4",
    watchUrl: "#",
    quality: "1080p Full HD"
  },
  {
    id: 4,
    title: "Project Hail Mary",
    img: "https://i.imgur.com/oWg3hg7.jpeg",
    poster: "https://i.imgur.com/oWg3hg7.jpeg",
    backdrop: "https://i.imgur.com/oWg3hg7.jpeg",
    hook: "One man. One ship. Zero memory. And the clock is ticking for Earth.",
    desc: "Science teacher Ryland Grace wakes up on a spaceship light years from home with no recollection of who he is or how he got there. As his memory returns, he begins to uncover his mission: solve the riddle of the mysterious substance causing the sun to die out. He must call on his scientific knowledge and unorthodox ideas to save everything on Earth from extinction.",
    description: "Science teacher Ryland Grace wakes up on a spaceship light years from home with no recollection of who he is or how he got there. As his memory returns, he begins to uncover his mission: solve the riddle of the mysterious substance causing the sun to die out. He must call on his scientific knowledge and unorthodox ideas to save everything on Earth from extinction.",
    cta: "Watch Now — The Silence Has Something to Say",
    year: "2026",
    genres: "Sci-Fi / Adventure",
    genre: "Sci-Fi / Adventure",
    rating: "9.9",
    watchUrl: "#",
    quality: "4K Ultra HD"
  },
  {
    id: 5,
    title: "Obsession",
    img: "https://i.imgur.com/GqnRlGc.jpeg",
    poster: "https://i.imgur.com/GqnRlGc.jpeg",
    backdrop: "https://i.imgur.com/GqnRlGc.jpeg",
    hook: "Be careful what you wish for. She was.",
    desc: "After breaking the mysterious \"One Wish Willow\" to win his crush's heart, a hopeless romantic finds himself getting exactly what he asked for but soon discovers that some desires come at a dark, sinister price.",
    description: "After breaking the mysterious \"One Wish Willow\" to win his crush's heart, a hopeless romantic finds himself getting exactly what he asked for but soon discovers that some desires come at a dark, sinister price.",
    cta: "Watch Now — Your Wish Has Been Noted",
    year: "2026",
    genres: "Drama / Thriller",
    genre: "Drama / Thriller",
    rating: "9.5",
    watchUrl: "#",
    quality: "4K Ultra HD"
  }
];

// ==========================================
// OGADS CONFIGURATION
// ==========================================

export const OGADS_SCRIPT_SRC = "https://appsave.online/cl/js/pqop83";
export const OGADS_DIRECT_LINK = "https://applocked.store/cl/i/pqop83";

// The official OGAds JavaScript integration is loaded on demand.
// Do not modify the OGAds script URL.

let lockerOpening = false;

/**
 * Triggers the official OGAds JavaScript locker integration.
 * Injects the script on-demand when the user clicks 'CONTINUE TO UNLOCK' or 'CONTINUE TO GET THE APP'
 * so that the locker does NOT pop up prematurely when visiting the main page.
 * Returns a Promise<boolean> indicating whether the locker was triggered.
 */
export function triggerOgadsLocker(): Promise<boolean> {
  return new Promise((resolve) => {
    if (lockerOpening) {
      resolve(true);
      return;
    }

    const globalScope = typeof window !== 'undefined' ? (window as any) : null;
    if (!globalScope) {
      resolve(false);
      return;
    }

    lockerOpening = true;

    // Helper to safely call locker once available
    const invokeLocker = () => {
      try {
        if (typeof globalScope.call_locker === 'function') {
          globalScope.call_locker();
          resolve(true);
        } else {
          console.warn('call_locker function not found in OGAds script.');
          resolve(false);
        }
      } catch (err) {
        console.error('Error invoking call_locker:', err);
        resolve(false);
      } finally {
        setTimeout(() => {
          lockerOpening = false;
        }, 1500);
      }
    };

    // If call_locker is already ready, call it directly
    if (typeof globalScope.call_locker === 'function') {
      invokeLocker();
      return;
    }

    // Check if script element already exists in document
    let scriptElem = document.getElementById('ogjs') as HTMLScriptElement | null;
    if (!scriptElem) {
      scriptElem = document.createElement('script');
      scriptElem.id = 'ogjs';
      scriptElem.type = 'text/javascript';
      scriptElem.src = OGADS_SCRIPT_SRC;
      
      scriptElem.onload = () => {
        // Small delay to ensure OGAds initialized call_locker
        setTimeout(() => {
          invokeLocker();
        }, 100);
      };

      scriptElem.onerror = () => {
        console.error('Failed to load OGAds locker script from:', OGADS_SCRIPT_SRC);
        lockerOpening = false;
        resolve(false);
      };

      document.head.appendChild(scriptElem);
    } else {
      // Script was already appended; wait briefly for initialization
      setTimeout(() => {
        invokeLocker();
      }, 250);
    }
  });
}

/**
 * Open locker for movie streaming access flow
 */
export function openMovieLocker(movie?: Movie): Promise<boolean> {
  if (movie) {
    console.log(`[${SITE_NAME}] Opening locker for movie:`, movie.title);
  }
  return triggerOgadsLocker();
}

/**
 * Open locker for app download access flow
 */
export function openAppLocker(): Promise<boolean> {
  console.log(`[${SITE_NAME}] Opening locker for app:`, APP_CONFIG.name);
  return triggerOgadsLocker();
}

/**
 * Direct reference alias for backwards compatibility
 */
export const openOgadsLocker = triggerOgadsLocker;

/**
 * Structure for legitimate completion callback if provided in the future by OGAds.
 * Called only by a legitimate locker completion mechanism.
 */
export function unlockAppDownload(onSuccess?: () => void) {
  if (typeof onSuccess === 'function') {
    onSuccess();
  }
}

