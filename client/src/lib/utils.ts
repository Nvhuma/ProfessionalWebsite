import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

export const fadeInAnimation = "transition-all duration-500 ease-out";
export const slideUpAnimation = "transition-all duration-500 ease-out transform";

export function isImageUrl(url: string): boolean {
  // Check if the URL points to a common image file extension
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp', '.svg'];
  return imageExtensions.some(ext => url.toLowerCase().endsWith(ext));
}

export function formatDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
  technologies: string[];
}

export interface Skill {
  name: string;
  level: number;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  startDate: string;
  endDate: string | null;
  current: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
