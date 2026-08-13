export interface Movie {
  id: number;
  title: string;
  year: string;
  genres?: string;
  genre: string;
  rating: string;
  hook?: string;
  desc?: string;
  description: string;
  cta?: string;
  img?: string;
  poster: string;
  backdrop: string;
  watchUrl: string;
  featured?: boolean;
  duration?: string;
  quality?: string;
}

export interface AppConfig {
  name: string;
  tagline: string;
  description: string;
  category: string;
  icon: string;
  downloadUrl: string;
  platforms: {
    android: boolean;
    ios: boolean;
  };
  features: string[];
}
