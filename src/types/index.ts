export interface NavItem {
  label: string;
  href: string;
  icon?: string;
}

export interface Project {
  id: string;
  title: string;
  field: string;
  summary: string;
  methodologies: string[];
  thumbnail: string;
  publicationLink?: string;
  externalRefs?: string[];
  year: number;
  category: string;
}

export interface Technique {
  id: string;
  title: string;
  description: string;
  category: string;
  mediaUrl: string;
  mediaType: 'image' | 'video';
  thumbnail: string;
}

export interface Podcast {
  id: string;
  title: string;
  interviewer: string;
  description: string;
  date: string;
  duration: string;
  thumbnail: string;
  videoUrl: string;
  platform: 'youtube' | 'vimeo' | 'other';
}

export interface Event {
  id: string;
  title: string;
  location: string;
  date: string;
  description: string;
  type: 'conference' | 'seminar' | 'workshop' | 'summit';
  highlights?: string[];
  image?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
    email?: string;
    googleScholar?: string;
  };
}

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
  icon?: string;
}

export interface Award {
  title: string;
  year: number;
  organization: string;
  description?: string;
}

export interface Publication {
  title: string;
  journal: string;
  year: number;
  citations: number;
  authors: string[];
  link?: string;
}

export interface TimelineItem {
  year: number;
  title: string;
  description: string;
  type: 'education' | 'career' | 'achievement';
}
