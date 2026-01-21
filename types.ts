import { LucideIcon } from "lucide-react";

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  image?: string;
}

export interface Module {
  number: number;
  title: string;
  duration: string;
  description: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BonusItem {
  title: string;
  description: string[];
  value: string;
  icon: LucideIcon;
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}