import { 
  Video, 
  Palette, 
  Bot, 
  FileSpreadsheet, 
  FileText, 
  TrendingUp,
  Layout,
  PlayCircle
} from 'lucide-react';
import { Module, Testimonial, FaqItem, BonusItem, Feature } from './types';

export const HERO_HEADLINE = "Finally: A Step-by-Step System to Grow Your YouTube Channel That Actually Works in 2026";
export const HERO_SUBHEADLINE = "Everything You Need to Go From 0 Views to Monetization—No Guesswork, No Outdated Advice.";

export const FEATURES: Feature[] = [
  {
    title: "Core Video Training",
    description: "3+ Hours of Step-by-Step Video Training across 10 detailed modules.",
    icon: Video
  },
  {
    title: "Thumbnail Templates",
    description: "50+ Professional Canva Thumbnail Templates ready to customize.",
    icon: Palette
  },
  {
    title: "AI Prompt Library",
    description: "100+ AI Prompts to 10x your content creation speed.",
    icon: Bot
  },
  {
    title: "Growth Spreadsheets",
    description: "Plug-and-Play Content Calendar, Keyword Tracker, and Dashboard.",
    icon: FileSpreadsheet
  },
  {
    title: "Cheatsheets",
    description: "5 Essential PDF Cheatsheets & Quick-Reference Guides.",
    icon: FileText
  },
  {
    title: "Lifetime Access",
    description: "Pay once, keep it forever. Includes all future updates for free.",
    icon: TrendingUp
  }
];

export const PAIN_POINTS = [
  {
    title: "Your Titles and Thumbnails Are Invisible",
    description: "You spend hours editing, but generic packaging kills your click-through rate."
  },
  {
    title: "You're Optimizing for 2020's Algorithm",
    description: "Old advice actively hurts you. You need strategies for the current AI-driven era."
  },
  {
    title: "You Don't Know What's Actually Working",
    description: "Flying blind without data on retention, keywords, or engagement."
  },
  {
    title: "You're Wasting Time on Low-Impact Activities",
    description: "Obsessing over gear instead of mastering storytelling and hooks."
  }
];

export const MODULES: Module[] = [
  {
    number: 1,
    title: "Welcome & 2026 YouTube Landscape",
    duration: "15 min",
    description: [
      "What changed in the algorithm and why it matters",
      "The 5 shifts that flipped the game",
      "Your roadmap from 0 to monetization"
    ]
  },
  {
    number: 2,
    title: "Niche Selection & Channel Setup",
    duration: "20 min",
    description: [
      "The 3-criteria framework for picking a profitable niche",
      "How to validate your idea in 10 minutes",
      "Setting up your channel for maximum SEO"
    ]
  },
  {
    number: 3,
    title: "Content Strategy That Works",
    duration: "20 min",
    description: [
      "The 80/20 content formula that builds momentum",
      "Posting schedules that don't burn you out",
      "The 90-day content calendar system"
    ]
  },
  {
    number: 4,
    title: "Mastering the Algorithm",
    duration: "18 min",
    description: [
      "How YouTube actually ranks videos in 2026",
      "The metrics that matter (and the ones that don't)",
      "The first 48-hour strategy to win"
    ]
  },
  {
    number: 5,
    title: "Viral Title & Thumbnail System",
    duration: "25 min",
    description: [
      "7 proven title formulas that get clicks",
      "The psychology of scroll-stopping thumbnails",
      "How to create pro thumbnails in 5 minutes"
    ]
  },
  {
    number: 6,
    title: "Scripting for Retention",
    duration: "20 min",
    description: [
      "Hook formulas for the first 30 seconds",
      "Pattern interrupts that prevent drop-off",
      "The exact script structure for 60%+ retention"
    ]
  },
  {
    number: 7,
    title: "Recording & Editing Essentials",
    duration: "22 min",
    description: [
      "Free tools setup (OBS, CapCut)",
      "Lighting hacks with household items",
      "The editing workflow that takes 1 hour max"
    ]
  },
  {
    number: 8,
    title: "YouTube SEO & Discovery",
    duration: "18 min",
    description: [
      "Keyword research with free tools",
      "Optimizing titles, descriptions, tags",
      "Playlist strategy for binge-watching"
    ]
  },
  {
    number: 9,
    title: "Shorts Strategy",
    duration: "15 min",
    description: [
      "Using Shorts as trailers for long-form",
      "The Shorts-to-subscribers funnel",
      "Repurposing content without looking lazy"
    ]
  },
  {
    number: 10,
    title: "Monetization & Scaling",
    duration: "20 min",
    description: [
      "Hitting 1K subs + 4K hours fast",
      "Revenue streams beyond AdSense",
      "When and how to outsource"
    ]
  }
];

export const BONUSES: BonusItem[] = [
  {
    title: "Thumbnail Template Pack",
    description: ["50+ fully customizable Canva templates.", "Bold text, face+emotion, split designs, and more."],
    value: "$97",
    icon: Layout
  },
  {
    title: "AI Prompt Library",
    description: ["100+ prompts for ChatGPT/Claude.", "Generate titles, scripts, and descriptions instantly."],
    value: "$67",
    icon: Bot
  },
  {
    title: "Growth Spreadsheets",
    description: ["Content Calendar, Keyword Tracker, Analytics Dashboard.", "Plug-and-play Google Sheets."],
    value: "$47",
    icon: FileSpreadsheet
  },
  {
    title: "Essential Cheatsheets",
    description: ["7-Step Optimization Checklist, Retention Boosters.", "Quick reference PDFs."],
    value: "$37",
    icon: FileText
  },
  {
    title: "Case Study Examples",
    description: ["Real channels that went 0 to 10K.", "Breakdown of what they did right."],
    value: "$27",
    icon: PlayCircle
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah M.",
    role: "Productivity Channel",
    content: "I was stuck at 200 subscribers for 6 months. After implementing the Shorts funnel strategy from Module 9, I hit 1,000 subscribers in 5 weeks. Finally monetized!",
    image: "https://picsum.photos/100/100?random=1"
  },
  {
    name: "David K.",
    role: "Tech Reviews",
    content: "The thumbnail templates alone are worth the price. My CTR went from 2% to 7% overnight. I can't believe how simple it was.",
    image: "https://picsum.photos/100/100?random=2"
  },
  {
    name: "Priya S.",
    role: "Cooking Channel",
    content: "I wasted $500 on other courses that were all theory. This is the first one that gave me EXACTLY what to do, step by step. Hit 500 subs in my first month.",
    image: "https://picsum.photos/100/100?random=3"
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "I'm a complete beginner. Will this work for me?",
    answer: "Absolutely. This course is designed for beginners. We assume you know nothing and walk you through every step. If you can click a mouse and follow instructions, you can do this."
  },
  {
    question: "I don't want to show my face on camera. Can I still use this?",
    answer: "Yes! Many strategies work for faceless channels: screen recordings, voiceovers, stock footage, animation. Module 7 covers faceless options."
  },
  {
    question: "What if I don't have expensive equipment?",
    answer: "You don't need it. We teach you how to create professional videos with just your smartphone and free software (OBS, CapCut). No excuses."
  },
  {
    question: "How long until I see results?",
    answer: "Most students see measurable improvement within 2-4 weeks (better CTR, more views). Hitting 1,000 subscribers typically takes 60-90 days with consistent implementation."
  },
  {
    question: "Is there a money-back guarantee?",
    answer: "Yes. 30 days, no questions asked. Try everything, and if you're not satisfied, get a full refund."
  }
];

export const VALUE_STACK = [
  { name: "10 Video Modules (3+ hours)", value: 297 },
  { name: "50+ Thumbnail Templates", value: 97 },
  { name: "100+ AI Prompt Library", value: 67 },
  { name: "3 Spreadsheet Templates", value: 47 },
  { name: "5 Essential Cheatsheets", value: 37 },
  { name: "Bonus Case Studies", value: 27 },
  { name: "Lifetime Access + Updates", value: 97 },
];
