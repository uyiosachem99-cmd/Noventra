/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowUpRight, ArrowLeft, ArrowRight, Plus, X, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import HERO_BG from './assets/images/hero_agency_studio_1791484896859.jpg';
import AVATAR_1 from './assets/images/avatar_founder_1_1791484928578.jpg';
import AVATAR_2 from './assets/images/avatar_founder_2_1791484937429.jpg';
import DIRECTOR_PORTRAIT from './assets/images/agency_portrait_director_1791484907780.jpg';
import SECTION3_BACKDROP from './assets/images/section3_labs_backdrop_1791487195385.jpg';
import SECTION3_CARD_PORTRAIT from './assets/images/section3_card_portrait_1791487205652.jpg';
import SECTION4_BLACK_PORTRAIT from './assets/images/section4_black_founder_portrait_1791488208111.jpg';
import SECTION5_AGENCY_BG from './assets/images/section5_agency_architecture_bg_1791489703126.jpg';
import TESTIMONIAL_CEO from './assets/images/testimonial_ceo_portrait_1791489713268.jpg';
import STORY_TEAM_1 from './assets/images/agency_story_team_1_1791486600634.jpg';
import STORY_TEAM_2 from './assets/images/agency_story_team_2_1791486611273.jpg';
import STORY_TEAM_3 from './assets/images/agency_story_team_3_1791486623770.jpg';
import STORY_TABLETOP from './assets/images/agency_team_tabletop_1791484918894.jpg';

const TESTIMONIALS = [
  {
    id: 0,
    code: '01',
    name: 'Ahmad Labib',
    role: 'CEO, Lumina Architectural Co.',
    company: 'LUMINA',
    impact: '+210% Brand Authority',
    scope: 'Brand Architecture & Web Flagship',
    image: TESTIMONIAL_CEO,
    quote:
      'Exceptional creativity, professionalism, and attention to detail define our experience with “Noventra”. From concept to execution, they brought our vision to life with flair and finesse. Highly recommended for anyone seeking innovative design solutions.',
  },
  {
    id: 1,
    code: '02',
    name: 'Elena Rostova',
    role: 'VP of Brand, Vespera Global',
    company: 'VESPERA',
    impact: '+165% Inbound Pipeline',
    scope: 'Design System & Product UI/UX',
    image: AVATAR_1,
    quote:
      'Partnering with “Noventra” transformed how enterprise clients perceive our platform. Their strategic rigor across typography, motion, and web architecture delivered a 165% increase in qualified inbound opportunities within ninety days.',
  },
  {
    id: 2,
    code: '03',
    name: 'Clara Vance',
    role: 'Managing Director, Solstice Studio',
    company: 'SOLSTICE',
    impact: '3.4x Conversion Lift',
    scope: 'Global Rebrand & Digital Experience',
    image: DIRECTOR_PORTRAIT,
    quote:
      'Rarely do you find an agency where editorial design taste and engineering precision coexist so seamlessly. “Noventra” rebuilt our entire digital flagship and design system ahead of schedule with extraordinary craft.',
  },
];

const INSIGHT_ITEMS = [
  {
    id: 0,
    code: '01',
    title: 'Early Market Detection',
    description:
      'Catch early signals of category shifts, audience fatigue, and emerging cultural trends—before competitors react.',
    badgeLeft: 'Partner Audit · Q4',
    badgeRight: 'Oct 18, 2026',
    clientName: 'Amara Okafor',
    clientRole: 'Founding Partner & Chief Strategist',
    metricLabel: 'Brand Authority & Conversion Lift',
    metricValue: '+142%',
    riskLabel: 'Repositioning Friction',
    riskValue: '12%',
    thumbPosition: '12%',
  },
  {
    id: 1,
    code: '02',
    title: 'Personalized Brand Analysis',
    description:
      'Tailor your visual architecture, typographic voice, and product storytelling around high-intent buyer segments.',
    badgeLeft: 'Sprint · Wk 04',
    badgeRight: 'Nov 02, 2026',
    clientName: 'Amara Okafor',
    clientRole: 'Identity & Design System Lead',
    metricLabel: 'Enterprise Pipeline Velocity',
    metricValue: '+168%',
    riskLabel: 'Conversion Drop-off',
    riskValue: '18%',
    thumbPosition: '18%',
  },
  {
    id: 2,
    code: '03',
    title: 'Actionable Growth Insights',
    description:
      'Turn behavioral analytics and design telemetry into clear creative roadmaps that compound brand equity.',
    badgeLeft: 'Index · 98.4',
    badgeRight: 'Dec 10, 2026',
    clientName: 'Amara Okafor',
    clientRole: 'Quarterly Executive Review',
    metricLabel: 'Customer Retention Equity',
    metricValue: '+194%',
    riskLabel: 'Audience Churn Risk',
    riskValue: '9%',
    thumbPosition: '9%',
  },
];

const STORY_SLIDES = [
  {
    id: 1,
    image: STORY_TEAM_1,
    title: 'Element Design Collective',
    location: 'Brand Architecture & Spatial Identity · Toronto',
    alt: 'Creative agency team collaborating outside their brick and glass design studio',
  },
  {
    id: 2,
    image: STORY_TEAM_2,
    title: 'Coast & Clay Goods',
    location: 'Packaging System & Flagship E-Commerce · Portland',
    alt: 'Strategists and designers reviewing brand identity posters and packaging on a warm oak wall',
  },
  {
    id: 3,
    image: STORY_TEAM_3,
    title: 'Sola Architectural Living',
    location: 'Global Rebrand & Digital Monograph · Milan',
    alt: 'Agency founders and creative directors celebrating a flagship brand launch in their loft',
  },
  {
    id: 4,
    image: STORY_TABLETOP,
    title: 'Synthesis Editorial Foundry',
    location: 'Bespoke Typeface & Visual Language · Zurich',
    alt: 'Overhead view of designers arranging typography books and brand systems',
  },
  {
    id: 5,
    image: HERO_BG,
    title: 'Noventra Flagship Atrium',
    location: 'Digital Product Studio & Strategy Lab · London',
    alt: 'Architectural overview of the Noventra creative workspace',
  },
];

const FAQ_ITEMS = [
  {
    id: 0,
    code: '01',
    question: 'Why is strategic brand & digital architecture important for my business?',
    answer:
      'Strategic digital architecture allows ambitious brands to reach and engage high-intent audiences, generate qualified enterprise leads, drive compounding organic traffic, and elevate market authority. It provides measurable commercial results and enables organizations to adapt and optimize their digital flagship based on real-time behavioral insights.',
  },
  {
    id: 1,
    code: '02',
    question: 'How can Noventra help improve my website’s visibility and conversion?',
    answer:
      'We combine technical SEO engineering, high-contrast editorial storytelling, and frictionless design systems. By aligning search intent with bespoke interactive architecture, we turn passive visitors into committed partners.',
  },
  {
    id: 2,
    code: '03',
    question: 'How long does it take to see measurable results from a rebrand or flagship launch?',
    answer:
      'Most partner engagements launch their core identity and digital flagship within 8 to 12 weeks. Immediate gains in user engagement and brand perception occur at launch, while organic search authority and pipeline velocity compound strongly over 60 to 90 days.',
  },
  {
    id: 3,
    code: '04',
    question: 'How do you measure the commercial success of digital agency campaigns?',
    answer:
      'Every sprint is anchored to clear executive KPIs—including qualified inbound pipeline lift, organic search visibility, session-to-inquiry conversion rates, and long-term customer retention equity.',
  },
  {
    id: 4,
    code: '05',
    question: 'Do you partner with in-house engineering and marketing teams post-launch?',
    answer:
      'Yes. We deliver production-ready component libraries, comprehensive brand monographs, and ongoing quarterly growth retainers so your internal teams can scale effortlessly.',
  },
];

const GROWTH_ARTICLES = [
  {
    id: 0,
    code: '01',
    dotColor: 'bg-[#2563EB]',
    tag: 'Strategy',
    readTime: '5 min read',
    title: 'How a Digital Brand Agency Can Boost Your Business Authority',
    excerpt:
      'We are the flagship digital product and brand agency for category leaders. We offer a full suite of strategic services to elevate market positioning...',
    fullText:
      'A cohesive digital architecture bridges the gap between how an enterprise operates and how the market perceives its value. By unifying bespoke typography, motion systems, and technical SEO, brands routinely unlock a 2x–3x lift in qualified inbound demand.',
  },
  {
    id: 1,
    code: '02',
    dotColor: 'bg-[#F97316]',
    tag: 'Systems',
    readTime: '5 min read',
    title: 'The Latest Trends and Strategies with a Digital Product Agency',
    excerpt:
      'Working with an architectural design studio is a true commercial partnership. Discover the design systems and interactive patterns shaping 2026...',
    fullText:
      'Modern digital flagships are moving away from generic templates toward tactile, performance-engineered web experiences. Interactive storytelling, micro-conversions, and modular design tokens allow brands to ship faster while staying unmistakable.',
  },
  {
    id: 2,
    code: '03',
    dotColor: 'bg-[#7C3AED]',
    tag: 'Performance',
    readTime: '5 min read',
    title: 'Maximizing ROI with the Expertise of a Digital Growth Agency',
    excerpt:
      'What sets Noventra apart is our commitment to radical transparency, measurable conversion architecture, and enduring brand equity...',
    fullText:
      'Design without commercial telemetry is just decoration. We instrument every landing experience, funnel touchpoint, and content hub to ensure creative craft translates directly into measurable revenue expansion.',
  },
];

/**
 * Bespoke Architectural Monolith & Kinetic Prism Emblem for Noventra
 */
function AgencyBrandMark({ className = 'w-10 h-10' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer sculpted architectural frame */}
      <rect
        x="3"
        y="3"
        width="38"
        height="38"
        rx="11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeOpacity="0.35"
      />
      {/* Left Solid Monolith Pillar */}
      <path
        d="M12.5 11.5C12.5 10.6716 13.1716 10 14 10H17.5C18.3284 10 19 10.6716 19 11.5V32.5C19 33.3284 18.3284 34 17.5 34H14C13.1716 34 12.5 33.3284 12.5 32.5V11.5Z"
        fill="currentColor"
      />
      {/* Upper Kinetic Wing */}
      <path
        d="M21 21.2L29.6 10.6C29.98 10.22 30.5 10 31.04 10H32.5C33.38 10 33.84 11.05 33.24 11.7L25.4 20.5L21 21.2Z"
        fill="currentColor"
      />
      {/* Lower Architectural Prism Wing */}
      <path
        d="M21 22.8L25.4 23.5L33.24 32.3C33.84 32.95 33.38 34 32.5 34H31.04C30.5 34 29.98 33.78 29.6 33.4L21 22.8Z"
        fill="currentColor"
      />
      {/* Center Precision Node */}
      <circle cx="22.5" cy="22" r="2.2" fill="#F8FAFC" />
    </svg>
  );
}

/**
 * Outlined X (Twitter), Facebook, and Instagram icons matching the reference top-right cluster
 */
function SocialXIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="1.6">
      <path d="M4 4l6.5 8L4 20h2l5.5-6.8L16 20h4l-6.8-8.5L19.5 4h-2l-5 6.2L8 4H4z" />
    </svg>
  );
}

function SocialFacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="1.6">
      <path d="M15 3h-3a4 4 0 0 0-4 4v3H5v4h3v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1h3V3z" strokeLinejoin="round" />
    </svg>
  );
}

function SocialInstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="1.6">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

type ModalType = 'project' | 'nav-about' | 'nav-work' | 'nav-services' | null;

export default function App() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [socialToast, setSocialToast] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeInsight, setActiveInsight] = useState<number>(0);
  const [activeTestimonial, setActiveTestimonial] = useState<number>(0);
  const [testimonialDirection, setTestimonialDirection] = useState<number>(1);
  const [activeFaq, setActiveFaq] = useState<number>(0);
  const [showAllFaqs, setShowAllFaqs] = useState<boolean>(false);
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);
  const [contactSubmitted, setContactSubmitted] = useState<boolean>(false);
  const [contactForm, setContactForm] = useState({
    firstName: '',
    lastName: '',
    email: 'kristy.miranda@gmail.com',
    phone: '',
    message: '',
  });

  const [projectForm, setProjectForm] = useState({
    name: '',
    email: '',
    scope: 'Brand Architecture & Identity',
  });

  const handleSocialClick = (platform: string) => {
    setSocialToast(`Opening Noventra on ${platform}`);
    setTimeout(() => {
      setSocialToast(null);
    }, 2800);
  };

  const handleProjectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectForm.name.trim() || !projectForm.email.trim()) return;
    setFormSubmitted(true);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.email.trim()) return;
    setContactSubmitted(true);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? STORY_SLIDES.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === STORY_SLIDES.length - 1 ? 0 : prev + 1));
  };

  const handlePrevTestimonial = () => {
    setTestimonialDirection(-1);
    setActiveTestimonial((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNextTestimonial = () => {
    setTestimonialDirection(1);
    setActiveTestimonial((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const handleSelectTestimonial = (id: number) => {
    setTestimonialDirection(id > activeTestimonial ? 1 : -1);
    setActiveTestimonial(id);
  };

  const scrollToStories = () => {
    const el = document.getElementById('stories-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToLabs = () => {
    const el = document.getElementById('labs-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#0B111E] flex flex-col">
      {/* Subtle floating toast for social links */}
      {socialToast && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-[#090D16]/95 border border-[#C8FF2E]/35 text-[#F8FAFC] px-5 py-2.5 text-xs tracking-wide shadow-2xl flex items-center gap-2.5 transition-all rounded-full">
          <span className="w-2 h-2 rounded-full bg-[#C8FF2E] animate-pulse" />
          <span>{socialToast}</span>
        </div>
      )}

      {/* =====================================================================
          SECTION 1: HERO SECTION (Flagship Agency Obsidian-Slate & Electric Chartreuse Palette)
         ===================================================================== */}
      <section
        id="top"
        aria-label="Agency Hero"
        className="relative w-full min-h-[580px] md:min-h-[640px] lg:h-[760px] flex flex-col justify-between p-6 sm:p-10 md:px-12 md:py-12 lg:px-16 lg:py-14 overflow-hidden bg-[#090D16]"
      >
        {/* Single First Studio Picture Moving Continuously Like an 8-10s Video */}
        <div className="absolute inset-0 bg-[#090D16] overflow-hidden">
          <img
            src={HERO_BG}
            alt="Noventra architectural design studio with natural light beams"
            className="w-full h-full object-cover object-center animate-cinema-dolly"
          />

          {/* Drifting Volumetric Cool Architectural Light Beams */}
          <div
            className="absolute inset-0 pointer-events-none animate-light-rays"
            style={{
              background:
                'linear-gradient(118deg, transparent 20%, rgba(200, 255, 46, 0.08) 38%, rgba(56, 189, 248, 0.14) 48%, transparent 64%)',
            }}
          />

          {/* Deep Obsidian-Navy & Architectural Slate Scrim */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(90deg, rgba(9, 13, 22, 0.90) 0%, rgba(15, 23, 42, 0.52) 50%, rgba(9, 13, 22, 0.78) 100%)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090D16]/90 via-[#0F172A]/25 to-[#090D16]/55" />
        </div>

        {/* TOP BAR: Brand Mark (Left) & Overlapping Social Circles (Right) */}
        <header className="relative z-10 flex items-start justify-between w-full max-w-[1380px] mx-auto">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              setActiveModal(null);
            }}
            className="group inline-flex items-center gap-3.5 sm:gap-4 text-left focus:outline-none"
          >
            <AgencyBrandMark className="w-10 h-10 sm:w-11 sm:h-11 text-[#C8FF2E] transition-transform duration-300 group-hover:scale-105" />
            <div className="flex flex-col text-[15px] sm:text-base leading-[1.2] font-normal tracking-tight text-[#F8FAFC]">
              <span className="font-display font-semibold tracking-tight text-lg">Noventra</span>
            </div>
          </a>

          {/* Overlapping Circular Social Cluster */}
          <div className="flex items-center -space-x-1.5" role="group" aria-label="Social media links">
            <button
              type="button"
              onClick={() => handleSocialClick('X (Twitter)')}
              aria-label="Follow Noventra on X"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#161F33]/90 backdrop-blur-md text-[#F8FAFC] flex items-center justify-center hover:bg-[#C8FF2E] hover:text-[#090D16] hover:z-10 transition-all duration-200 cursor-pointer ring-1 ring-white/15"
            >
              <SocialXIcon />
            </button>
            <button
              type="button"
              onClick={() => handleSocialClick('Facebook')}
              aria-label="Follow Noventra on Facebook"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#161F33]/90 backdrop-blur-md text-[#F8FAFC] flex items-center justify-center hover:bg-[#C8FF2E] hover:text-[#090D16] hover:z-10 transition-all duration-200 cursor-pointer ring-1 ring-white/15"
            >
              <SocialFacebookIcon />
            </button>
            <button
              type="button"
              onClick={() => handleSocialClick('Instagram')}
              aria-label="Follow Noventra on Instagram"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#161F33]/90 backdrop-blur-md text-[#F8FAFC] flex items-center justify-center hover:bg-[#C8FF2E] hover:text-[#090D16] hover:z-10 transition-all duration-200 cursor-pointer ring-1 ring-white/15"
            >
              <SocialInstagramIcon />
            </button>
          </div>
        </header>

        {/* CENTER / MAIN HERO CONTENT: Left Display Headline & Right Vertical Navigation + Join Cluster */}
        <div className="relative z-10 my-auto pt-8 pb-4 flex flex-col md:flex-row md:items-end lg:items-center justify-between gap-8 md:gap-6 lg:gap-10 w-full max-w-[1380px] mx-auto">
          {/* Left Column: Expressive Editorial Headline & Subheadline (Sized cleanly for Tablet md:) */}
          <div className="max-w-xl md:max-w-[460px] lg:max-w-2xl">
            <h1 className="font-display font-light text-[2.65rem] sm:text-[3.5rem] md:text-[3.65rem] lg:text-[5.25rem] leading-[1.04] tracking-[-0.025em] text-[#F8FAFC]">
              <span className="block">
                Step into <span className="italic font-normal text-[#C8FF2E]">bold</span>
              </span>
              <span className="block">digital architecture</span>
            </h1>

            <p className="mt-5 md:mt-6 font-sans font-light text-lg sm:text-xl md:text-[1.35rem] lg:text-[1.7rem] leading-[1.35] tracking-[-0.01em] text-[#CBD5E1] max-w-md">
              Discover strategy, craft,
              <br />
              and a home for your brand
            </p>
          </div>

          {/* Right Column: Vertical Navigation & Overlapping Avatar Action Cluster */}
          <div className="flex flex-row md:flex-col items-end justify-between md:justify-end gap-8 md:gap-10 lg:gap-12 self-stretch md:self-auto shrink-0">
            {/* Vertical Navigation Links */}
            <nav
              aria-label="Primary studio navigation"
              className="flex flex-col items-start md:items-end gap-3 text-[15px] font-light tracking-wide text-[#E2E8F0]"
            >
              <button
                type="button"
                onClick={scrollToStories}
                className="hover:text-[#C8FF2E] transition-colors cursor-pointer whitespace-nowrap"
              >
                About
              </button>
              <button
                type="button"
                onClick={scrollToLabs}
                className="hover:text-[#C8FF2E] transition-colors cursor-pointer whitespace-nowrap"
              >
                Services
              </button>
              <button
                type="button"
                onClick={scrollToStories}
                className="hover:text-[#C8FF2E] transition-colors cursor-pointer whitespace-nowrap"
              >
                Stories
              </button>
            </nav>

            {/* "Start a project ↗" + Overlapping Team Avatars & Plus Button */}
            <div className="flex flex-col items-end gap-3">
              <button
                type="button"
                onClick={() => {
                  setFormSubmitted(false);
                  setActiveModal('project');
                }}
                className="group inline-flex items-center gap-1.5 text-[15px] font-normal text-[#F8FAFC] hover:text-[#C8FF2E] transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>Start a project</span>
                <ArrowUpRight className="w-4 h-4 text-[#C8FF2E] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <div className="flex items-center -space-x-2">
                <button
                  type="button"
                  onClick={() => {
                    setFormSubmitted(false);
                    setActiveModal('project');
                  }}
                  title="Elena Rostova — Founding Partner, Brand Strategy"
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden ring-2 ring-[#090D16] hover:scale-105 transition-transform cursor-pointer bg-[#1E293B]"
                >
                  <img
                    src={AVATAR_1}
                    alt="Elena Rostova, Founding Partner"
                    className="w-full h-full object-cover"
                  />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setFormSubmitted(false);
                    setActiveModal('project');
                  }}
                  title="Marcus Vance — Principal Design Director"
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden ring-2 ring-[#090D16] hover:scale-105 transition-transform cursor-pointer bg-[#1E293B]"
                >
                  <img
                    src={AVATAR_2}
                    alt="Marcus Vance, Principal Design Director"
                    className="w-full h-full object-cover"
                  />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setFormSubmitted(false);
                    setActiveModal('project');
                  }}
                  aria-label="Book a discovery call with our partners"
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#C8FF2E] text-[#090D16] flex items-center justify-center ring-2 ring-[#090D16] hover:bg-white hover:scale-105 transition-all cursor-pointer shadow-[0_0_25px_rgba(200,255,46,0.35)]"
                >
                  <Plus className="w-5 h-5 stroke-[2]" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden sm:block h-2" />
      </section>

      {/* =====================================================================
          SECTION 2: STORIES OF CRAFT & BRAND TRANSFORMATION (White Background + Agency Slate Palette)
         ===================================================================== */}
      <section
        id="stories-section"
        aria-label="Stories of Craft and Brand Transformation"
        className="w-full bg-white text-[#0B111E] py-16 sm:py-20 md:py-24 lg:py-32 px-6 sm:px-10 md:px-12 lg:px-16"
      >
        <div className="max-w-[1160px] mx-auto">
          {/* Editorial Header: STUDIO CHRONICLES -> Title -> Full-width Subtitle above the stroke on Tablet/Mobile, Side-by-side on Desktop */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-5 lg:gap-8 pb-8 md:pb-10 border-b border-[#E2E8F0]">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-[#2563EB] mb-3">
                <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                <span>STUDIO CHRONICLES</span>
              </div>
              <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-[2.85rem] lg:text-[3.4rem] leading-[1.1] tracking-[-0.02em] text-[#0B111E]">
                Stories of Craft and
                <br />
                Brand Transformation
              </h2>
            </div>

            <div className="w-full lg:w-auto lg:max-w-sm">
              <p className="text-sm sm:text-[15.5px] lg:text-sm leading-[1.65] text-[#475569] w-full max-w-2xl lg:max-w-sm lg:text-right">
                Inside the collaborative studio sessions and category-defining launches that shape our partners’ growth.
              </p>
            </div>
          </div>

          {/* Layered Architectural Showcase Frame + Taller Story Picture + Floating Story Caption */}
          <div className="mt-9 md:mt-11 relative max-w-[1080px] mx-auto md:mx-4 lg:mx-auto bg-[#F8FAFC] p-3 sm:p-4 md:p-5 rounded-[24px] border border-[#E2E8F0] shadow-[0_20px_50px_rgba(11,17,30,0.06)]">
            <div className="relative w-full h-[340px] sm:h-[430px] md:h-[490px] lg:h-[540px] rounded-[16px] overflow-hidden bg-[#090D16]">
              <img
                key={STORY_SLIDES[currentSlide].id}
                src={STORY_SLIDES[currentSlide].image}
                alt={STORY_SLIDES[currentSlide].alt}
                className="w-full h-full object-cover object-center transition-opacity duration-300"
              />
              {/* Bottom gradient for caption and pagination dot legibility */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#090D16]/85 via-[#090D16]/35 to-transparent pointer-events-none" />

              {/* Floating Story Caption on Bottom-Left */}
              <div className="absolute bottom-3.5 left-3.5 sm:bottom-5 sm:left-5 lg:bottom-6 lg:left-6 z-10 bg-[#090D16]/85 backdrop-blur-md border border-white/15 rounded-xl px-3.5 py-2 sm:px-4 sm:py-2.5 text-[#F8FAFC] max-w-[65%]">
                <div className="font-display text-xs sm:text-sm md:text-base text-[#C8FF2E] truncate">
                  {STORY_SLIDES[currentSlide].title}
                </div>
                <div className="text-[10px] sm:text-xs text-[#CBD5E1] mt-0.5 truncate">
                  {STORY_SLIDES[currentSlide].location}
                </div>
              </div>

              {/* Bottom-Right 5 Pagination Dots */}
              <div
                className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-7 lg:right-7 z-10 flex items-center gap-2 sm:gap-2.5 bg-[#090D16]/75 backdrop-blur-md px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full border border-white/15"
                role="tablist"
                aria-label="Story slides"
              >
                {STORY_SLIDES.map((slide, index) => {
                  const isActive = index === currentSlide;
                  return (
                    <button
                      key={slide.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-label={`View story slide ${index + 1}`}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-2 sm:h-2.5 rounded-full transition-all duration-200 cursor-pointer ${
                        isActive
                          ? 'w-5 sm:w-6 bg-[#C8FF2E]'
                          : 'w-2 sm:w-2.5 bg-white/75 hover:bg-white'
                      }`}
                    />
                  );
                })}
              </div>
            </div>

            {/* Left Rounded-XL Arrow Button */}
            <button
              type="button"
              onClick={handlePrevSlide}
              aria-label="Previous story"
              className="absolute left-3 md:-left-4 lg:left-0 top-1/2 -translate-y-1/2 lg:-translate-x-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 lg:w-13 lg:h-13 rounded-xl bg-white text-[#0B111E] border border-[#E2E8F0] shadow-[0_10px_28px_rgba(11,17,30,0.12)] flex items-center justify-center hover:bg-[#F8FAFC] transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.75]" />
            </button>

            {/* Right Rounded-XL Dark Obsidian Agency Arrow Button */}
            <button
              type="button"
              onClick={handleNextSlide}
              aria-label="Next story"
              className="absolute right-3 md:-right-4 lg:right-0 top-1/2 -translate-y-1/2 lg:translate-x-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 lg:w-13 lg:h-13 rounded-xl bg-[#0B111E] text-[#C8FF2E] shadow-[0_10px_28px_rgba(11,17,30,0.28)] flex items-center justify-center hover:bg-[#1E293B] transition-colors cursor-pointer"
            >
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.75]" />
            </button>
          </div>

          {/* Clean Unframed 3-Column Metrics Row (Numbers + Text Under It Only — Balanced for Tablet md:grid-cols-3) */}
          <div className="mt-12 sm:mt-14 md:mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-12 text-center max-w-[1000px] mx-auto">
            {/* Stat 1 */}
            <div className="flex flex-col items-center px-2">
              <div className="font-display font-semibold text-4xl sm:text-5xl md:text-[2.85rem] lg:text-[3.6rem] leading-none tracking-[-0.02em] text-[#0B111E] tabular-nums inline-flex items-center">
                <span>2000</span>
                <span className="font-sans font-light text-2xl sm:text-3xl lg:text-4xl text-[#2563EB] ml-1">+</span>
              </div>
              <p className="mt-3 md:mt-3.5 text-xs sm:text-sm lg:text-[15px] leading-[1.6] text-[#475569] max-w-[270px]">
                We are proud to announce that our agency has positively transformed over 2000 brand touchpoints.
              </p>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center px-2">
              <div className="font-display font-semibold text-4xl sm:text-5xl md:text-[2.85rem] lg:text-[3.6rem] leading-none tracking-[-0.02em] text-[#0B111E] tabular-nums inline-flex items-center">
                <span>24</span>
              </div>
              <p className="mt-3 md:mt-3.5 text-xs sm:text-sm lg:text-[15px] leading-[1.6] text-[#475569] max-w-[270px]">
                Our creative agency has made a meaningful commercial impact in over 24 countries.
              </p>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center px-2">
              <div className="font-display font-semibold text-4xl sm:text-5xl md:text-[2.85rem] lg:text-[3.6rem] leading-none tracking-[-0.02em] text-[#0B111E] tabular-nums inline-flex items-center">
                <span>50</span>
                <span className="font-sans font-light text-2xl sm:text-3xl lg:text-4xl text-[#2563EB] ml-1">+</span>
              </div>
              <p className="mt-3 md:mt-3.5 text-xs sm:text-sm lg:text-[15px] leading-[1.6] text-[#475569] max-w-[270px]">
                Our design studio thrives on the remarkable dedication of over 50 strategists and creators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 3: NOVENTRA LABS SHOWCASE & METRICS BENTO (Professional Agency Obsidian-Indigo & Lime Palette)
         ===================================================================== */}
      <section
        id="labs-section"
        aria-label="Noventra Labs Capabilities and Track Record"
        className="relative w-full overflow-hidden bg-[#090D16] text-[#F8FAFC] py-18 sm:py-22 md:py-24 lg:py-28 px-6 sm:px-10 md:px-12 lg:px-16"
      >
        {/* Background Side-Profile Studio Image with Deep Architectural Indigo-Slate Grading */}
        <div className="absolute inset-0 bg-[#090D16]">
          <img
            src={SECTION3_BACKDROP}
            alt="Creative director in side profile in studio lighting"
            className="w-full h-full object-cover object-center scale-[1.01] saturate-50 contrast-110"
          />
          {/* Professional Agency Obsidian-Navy, Electric Cobalt & Chartreuse-Lime Atmospheric Lighting */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(circle at 52% 32%, rgba(37, 99, 235, 0.34) 0%, rgba(15, 23, 42, 0.80) 58%, rgba(9, 13, 22, 0.95) 100%)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090D16] via-[#0F172A]/45 to-[#090D16]/70" />
        </div>

        {/* Main Content Container (No Top Nav) */}
        <div className="relative z-10 max-w-[1220px] mx-auto flex flex-col">
          {/* Upper Spacer to let the side-profile portrait breathe */}
          <div className="h-20 sm:h-28 md:h-32 lg:h-44" />

          {/* Monumental Display Title */}
          <h2 className="font-display font-semibold text-5xl sm:text-6xl md:text-7xl lg:text-[6.8rem] leading-[0.98] tracking-[-0.03em] text-center text-[#F8FAFC] select-none">
            Noventra labs
          </h2>

          {/* Horizontal Discipline Row with Dot Separators & Bottom Hairline */}
          <div className="mt-8 sm:mt-10 md:mt-11 pb-5 border-b border-white/15 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-[13px] font-medium tracking-[0.14em] text-[#CBD5E1]">
            <span>Branding</span>
            <span className="text-[#C8FF2E]" aria-hidden="true">•</span>
            <span>UI/UX</span>
            <span className="text-[#C8FF2E]" aria-hidden="true">•</span>
            <span>Web Design</span>
            <span className="text-[#C8FF2E]" aria-hidden="true">•</span>
            <span>Strategy</span>
          </div>

          {/* Bottom 3-Column Bento Grid — Side-by-side 12-col layout on Tablet (md:) and Desktop (lg:) */}
          <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-4 lg:gap-6 items-stretch">
            {/* CARD 1 (Left): Portrait Backdrop + Frosted Inner Experience Card */}
            <div className="md:col-span-4 relative rounded-2xl overflow-hidden min-h-[280px] lg:min-h-[300px] p-4 lg:p-5 flex flex-col justify-between bg-[#0F172A] border border-white/15 shadow-2xl">
              <img
                src={SECTION3_CARD_PORTRAIT}
                alt="Creative director in studio light"
                className="absolute inset-0 w-full h-full object-cover object-center saturate-50"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#090D16]/60 via-[#0F172A]/30 to-[#090D16]/90" />

              {/* Top Row inside Card 1 */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="font-display font-semibold text-base lg:text-lg tracking-tight text-[#F8FAFC]">
                  NOVENTRA<sup className="text-[10px] ml-0.5 text-[#C8FF2E]">®</sup>
                </span>
                <span
                  className="w-8 h-8 lg:w-9 lg:h-9 rounded-lg bg-[#C8FF2E] text-[#090D16] flex items-center justify-center shadow-md"
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <rect x="3" y="9" width="2.6" height="8" rx="1" />
                    <rect x="8.7" y="4" width="2.6" height="13" rx="1" />
                    <rect x="14.4" y="11" width="2.6" height="6" rx="1" />
                  </svg>
                </span>
              </div>

              {/* Bottom Frosted Inner Card */}
              <div className="relative z-10 mt-10 lg:mt-14 bg-[#F8FAFC]/95 backdrop-blur-md rounded-xl p-4 lg:p-5 text-[#090D16]">
                <p className="text-[11px] lg:text-xs font-medium text-[#475569]">Years in Market</p>
                <div className="mt-1 font-display font-semibold text-3xl lg:text-4xl leading-none text-[#090D16] tabular-nums">
                  08+
                </div>
                <p className="mt-2 text-[11px] lg:text-xs leading-[1.5] text-[#334155]">
                  Experience certified in modern technologies and design methodologies
                </p>
              </div>
            </div>

            {/* CARD 2 (Middle): Crisp Titanium-White Client Satisfaction Card */}
            <div className="md:col-span-4 bg-[#F8FAFC] text-[#090D16] rounded-2xl p-5 lg:p-7 flex flex-col justify-between min-h-[280px] lg:min-h-[300px] shadow-2xl">
              <div>
                <p className="text-xs lg:text-sm font-medium text-[#475569]">
                  Client satisfaction rate
                </p>
                <div className="mt-1.5 font-display font-semibold text-4xl lg:text-5xl leading-none text-[#090D16] tabular-nums">
                  98%
                </div>
              </div>

              <div className="mt-6 lg:mt-8">
                {/* 4 Overlapping Circular Avatars */}
                <div className="flex items-center -space-x-2.5 mb-3.5 lg:mb-4">
                  <img
                    src={AVATAR_1}
                    alt="Client partner portrait 1"
                    className="w-8 h-8 lg:w-9 lg:h-9 rounded-full object-cover ring-2 ring-[#F8FAFC]"
                  />
                  <img
                    src={AVATAR_2}
                    alt="Client partner portrait 2"
                    className="w-8 h-8 lg:w-9 lg:h-9 rounded-full object-cover ring-2 ring-[#F8FAFC]"
                  />
                  <img
                    src={DIRECTOR_PORTRAIT}
                    alt="Client partner portrait 3"
                    className="w-8 h-8 lg:w-9 lg:h-9 rounded-full object-cover ring-2 ring-[#F8FAFC]"
                  />
                  <img
                    src={SECTION3_CARD_PORTRAIT}
                    alt="Client partner portrait 4"
                    className="w-8 h-8 lg:w-9 lg:h-9 rounded-full object-cover ring-2 ring-[#F8FAFC]"
                  />
                </div>

                <p className="text-xs lg:text-[13px] leading-[1.55] text-[#334155]">
                  “Noventra labs helps companies create stunning and strategically sound experiences that engage audiences.”
                </p>
              </div>
            </div>

            {/* CARD 3 STACK (Right): Signature Agency Chartreuse-Lime Card + Dark Obsidian Action Pill */}
            <div className="md:col-span-4 flex flex-col gap-3.5 lg:gap-4 min-h-[280px] lg:min-h-[300px]">
              {/* Top Card: Completed Projects */}
              <div className="flex-1 bg-[#C8FF2E] text-[#090D16] rounded-2xl p-5 lg:p-7 flex flex-col justify-center shadow-2xl">
                <p className="text-xs lg:text-sm font-semibold text-[#090D16]/75">
                  Completed Projects
                </p>
                <div className="mt-1.5 font-display font-semibold text-4xl lg:text-5xl leading-none text-[#090D16] tabular-nums">
                  10K+
                </div>
                <p className="mt-2.5 lg:mt-3 text-xs lg:text-[13px] leading-[1.5] text-[#090D16]/85 font-medium">
                  Explore the innovative projects that reflect our passion for branding, UX/UI design, and creative storytelling.
                </p>
              </div>

              {/* Bottom Action Bar: GET STARTED NOW */}
              <button
                type="button"
                onClick={() => {
                  setFormSubmitted(false);
                  setActiveModal('project');
                }}
                className="w-full bg-[#111827]/95 border border-white/15 hover:border-[#C8FF2E]/70 rounded-2xl px-4 lg:px-6 py-3.5 lg:py-4 flex items-center justify-between group transition-all cursor-pointer shadow-xl"
              >
                <span className="text-xs lg:text-base font-medium tracking-wide text-[#F8FAFC] whitespace-nowrap">
                  GET STARTED NOW
                </span>
                <span className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-[#C8FF2E] text-[#090D16] flex items-center justify-center transition-transform duration-200 group-hover:scale-105 shrink-0">
                  <ArrowUpRight className="w-4 h-4 lg:w-5 lg:h-5 stroke-[2]" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 4: SMARTER INSIGHTS FOR BETTER BRAND OUTCOMES
          (Tablet: Text & 01-03 Accordion on Top, Full-Width Amara Okafor Portrait Below matching Accordion Width; Desktop: Side-by-Side)
         ===================================================================== */}
      <section
        id="insights-section"
        aria-label="Smarter Insights for Better Brand Outcomes"
        className="w-full bg-white text-[#0B111E] py-18 sm:py-22 md:py-24 lg:py-32 px-6 sm:px-10 md:px-12 lg:px-16"
      >
        <div className="max-w-[1160px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* TOP (Tablet/Mobile) / LEFT COLUMN (Desktop): Editorial Kicker, Serif Headline, Subtitle & 01-03 Accordion Cards */}
          <div className="lg:col-span-6 w-full">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-[#2563EB] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
              <span>STRATEGIC INTELLIGENCE</span>
            </div>

            <h2 className="font-display font-normal text-3xl sm:text-4xl md:text-[2.75rem] lg:text-[3.15rem] leading-[1.12] tracking-[-0.02em] text-[#0B111E]">
              Smarter Insights for
              <br />
              Better Brand Outcomes
            </h2>

            <p className="mt-3.5 md:mt-4 text-sm sm:text-[15px] leading-[1.65] text-[#475569] max-w-xl lg:max-w-md font-normal">
              Our platform combines market intelligence, design systems, and strategy to support early positioning and personalized brand growth.
            </p>

            {/* Tweaked 3-Item Interactive Accordion */}
            <div className="mt-8 lg:mt-9 space-y-3 w-full">
              {INSIGHT_ITEMS.map((item, idx) => {
                const isOpen = activeInsight === idx;
                return (
                  <div
                    key={item.id}
                    className={`relative rounded-xl transition-all duration-200 overflow-hidden w-full ${
                      isOpen
                        ? 'bg-[#F8FAFC] border border-[#E2E8F0] shadow-[0_8px_24px_rgba(11,17,30,0.05)]'
                        : 'bg-transparent border-b border-[#E2E8F0] rounded-none'
                    }`}
                  >
                    {isOpen && (
                      <div className="absolute left-0 inset-y-0 w-1 bg-[#2563EB]" />
                    )}

                    <button
                      type="button"
                      onClick={() => setActiveInsight(idx)}
                      aria-expanded={isOpen}
                      className="w-full px-4 sm:px-5 py-4 sm:py-5 flex items-start gap-4 text-left group cursor-pointer focus:outline-none"
                    >
                      {/* Left Rounded Square Icon */}
                      <span
                        className={`w-10 h-10 rounded-lg border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                          isOpen
                            ? 'bg-[#090D16] border-[#090D16] text-[#C8FF2E]'
                            : 'bg-[#F1F5F9] border-[#E2E8F0] text-[#334155] group-hover:border-[#2563EB]/40'
                        }`}
                      >
                        {idx === 0 && (
                          <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                            <circle cx="10" cy="10" r="7" strokeDasharray="2 2" />
                            <circle cx="10" cy="10" r="5.5" />
                            <path d="M10 7v3.2l2.2 1.3" strokeLinecap="round" />
                          </svg>
                        )}
                        {idx === 1 && (
                          <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                            <path d="M4 14L16 6M4 10h12" strokeLinecap="round" />
                            <circle cx="7.5" cy="11.5" r="2" fill="currentColor" />
                            <circle cx="12.5" cy="8.5" r="2" fill="currentColor" />
                          </svg>
                        )}
                        {idx === 2 && (
                          <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                            <rect x="4" y="3.5" width="10" height="13" rx="1.5" />
                            <circle cx="11.5" cy="11.5" r="2.5" />
                            <path d="M13.5 13.5L16 16" strokeLinecap="round" />
                          </svg>
                        )}
                      </span>

                      {/* Center Title & Expandable Description */}
                      <div className="flex-1 pr-3">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold text-[#2563EB] tabular-nums">
                            {item.code}.
                          </span>
                          <span className="font-display font-normal text-lg sm:text-[1.22rem] leading-snug text-[#0B111E] group-hover:text-[#2563EB] transition-colors">
                            {item.title}
                          </span>
                        </div>

                        {isOpen && (
                          <p className="mt-2 text-xs sm:text-[13.5px] leading-[1.6] text-[#475569] max-w-xl">
                            {item.description}
                          </p>
                        )}
                      </div>

                      {/* Right Plus / Minus Indicator */}
                      <span
                        className="w-7 h-7 rounded-full bg-white border border-[#E2E8F0] text-[#0B111E] text-base flex items-center justify-center shrink-0 mt-0.5 select-none"
                        aria-hidden="true"
                      >
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>

                    {/* Active Progress Bar Line at Bottom */}
                    {isOpen && (
                      <div className="w-full h-[2px] bg-[#E2E8F0] relative">
                        <div className="absolute left-0 top-0 h-full w-36 bg-[#2563EB]" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* BOTTOM (Tablet/Mobile — Full Width matching 01-03 Accordion) / RIGHT COLUMN (Desktop): Amara Okafor Portrait Card */}
          <div className="lg:col-span-6 w-full flex justify-center lg:justify-end">
            <div className="relative w-full lg:max-w-[450px] bg-[#F8FAFC] p-3 sm:p-4 lg:p-3 rounded-[28px] border border-[#E2E8F0] shadow-[0_24px_60px_rgba(11,17,30,0.12)]">
              <div className="relative w-full min-h-[480px] sm:min-h-[540px] md:min-h-[580px] lg:min-h-[540px] rounded-[22px] overflow-hidden bg-[#0F172A] p-4 sm:p-6 lg:p-5 flex flex-col justify-between">
                {/* Studio Portrait of Black Female Creative Director */}
                <img
                  src={SECTION4_BLACK_PORTRAIT}
                  alt="Amara Okafor — Founding Partner and Chief Brand Strategist"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
                {/* Deep Obsidian-Slate Vignette for Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090D16]/90 via-[#090D16]/15 to-[#090D16]/30" />

                {/* Upper Framed Architectural Overlay */}
                <div className="relative z-10 flex-1 rounded-[16px] border border-white/25 p-4 sm:p-5 lg:p-4 flex flex-col justify-between">
                  {/* Top Metadata Row */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#090D16]/65 backdrop-blur-md border border-white/15 text-[#F8FAFC] text-xs font-normal">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF2E]" />
                      <span>{INSIGHT_ITEMS[activeInsight].badgeLeft}</span>
                    </span>
                    <span className="px-3 py-1 rounded-md bg-[#090D16]/65 backdrop-blur-md border border-white/15 text-[#E2E8F0] text-xs font-normal tabular-nums">
                      {INSIGHT_ITEMS[activeInsight].badgeRight}
                    </span>
                  </div>

                  {/* Bottom Strategist Identity inside Frame */}
                  <div className="pt-36 sm:pt-44 lg:pt-36 flex items-end justify-between gap-3">
                    <div>
                      <div className="font-display text-white text-xl sm:text-2xl lg:text-xl leading-tight drop-shadow-sm">
                        {INSIGHT_ITEMS[activeInsight].clientName}
                      </div>
                      <div className="text-[#CBD5E1] text-xs sm:text-sm lg:text-xs mt-0.5 font-light">
                        {INSIGHT_ITEMS[activeInsight].clientRole}
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded bg-[#C8FF2E] text-[#090D16] text-xs font-semibold tabular-nums shrink-0">
                      {INSIGHT_ITEMS[activeInsight].metricValue}
                    </span>
                  </div>
                </div>

                {/* Lower Tweaked Dual-Metric Frosted Card */}
                <div className="relative z-10 mt-3.5 rounded-[16px] bg-[#090D16]/80 backdrop-blur-md border border-white/20 px-4 sm:px-5 lg:px-4 py-3.5 sm:py-4 lg:py-3.5 text-white">
                  <div className="flex items-center justify-between text-xs sm:text-sm lg:text-[13px]">
                    <span className="text-[#F8FAFC]/90 font-normal">
                      {INSIGHT_ITEMS[activeInsight].riskLabel}
                    </span>
                    <span className="text-[#C8FF2E] font-medium tabular-nums">
                      {INSIGHT_ITEMS[activeInsight].riskValue} (Optimal Low)
                    </span>
                  </div>

                  {/* Gradient Spectrum Bar with Animated Indicator Thumb */}
                  <div
                    className="mt-3 relative h-1.5 w-full rounded-full flex items-center"
                    style={{
                      background: 'linear-gradient(90deg, #C8FF2E 0%, #38BDF8 55%, #F43F5E 100%)',
                    }}
                  >
                    <span
                      className="absolute w-3.5 h-3.5 rounded-full bg-[#C8FF2E] ring-2 ring-[#090D16] shadow-md -translate-x-1/2 transition-all duration-300"
                      style={{ left: INSIGHT_ITEMS[activeInsight].thumbPosition }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 5: CLIENT TESTIMONIALS
          (Tablet: Heading + 01/03 on Top, Full-Width Subtitle Above Stroke, 3 Stepped Pictures Next, Full-Width Testimonial Below)
         ===================================================================== */}
      <section
        id="testimonials-section"
        aria-label="Client Testimonials"
        className="relative w-full overflow-hidden bg-[#070B12] text-[#F8FAFC] py-20 sm:py-24 md:py-28 lg:py-36 px-6 sm:px-10 md:px-12 lg:px-16 border-t border-white/10"
      >
        {/* Subtle Agency Studio Background Picture with Heavy Dark Obsidian-Slate Overlay */}
        <div className="absolute inset-0 bg-[#070B12]">
          <img
            src={SECTION5_AGENCY_BG}
            alt="Noventra creative agency architecture studio background"
            className="w-full h-full object-cover object-center scale-[1.03] opacity-25 saturate-50"
          />
          {/* Deep Dark Obsidian & Indigo-Slate Overlay so you sense the agency studio picture without seeing it too clearly */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(circle at 28% 50%, rgba(37, 99, 235, 0.20) 0%, rgba(11, 17, 30, 0.90) 54%, rgba(7, 11, 18, 0.97) 100%)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#070B12]/90 via-[#0B111E]/80 to-[#070B12]/96" />
        </div>

        {/* Main Content Container */}
        <div className="relative z-10 max-w-[1260px] mx-auto">
          {/* Editorial Header:
              On Tablet/Mobile: Top Row has Kicker + CLIENT SAYS on Left and 01 / 03 Counter on Right;
              Below it sits the full-width subtitle spanning cleanly across the bottom stroke! */}
          <div className="pb-8 sm:pb-10 lg:pb-12 border-b border-white/15 flex flex-col lg:flex-row lg:items-end justify-between gap-5 lg:gap-8">
            <div className="flex items-end justify-between w-full lg:w-auto gap-4">
              <div>
                <div className="inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.16em] text-[#C8FF2E] mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#C8FF2E]" />
                  <span>PARTNER ENDORSEMENTS</span>
                </div>
                <h2 className="font-display font-semibold text-4xl sm:text-5xl md:text-[3.35rem] lg:text-[3.85rem] leading-[1.04] tracking-[-0.025em] text-[#F8FAFC]">
                  CLIENT SAYS
                </h2>
              </div>

              {/* Counter 01 / 03 on Top-Right for Tablet/Mobile */}
              <div className="flex lg:hidden items-baseline gap-1.5 font-display text-[#F8FAFC] border-l border-white/15 pl-4 sm:pl-5 mb-1">
                <span className="text-3xl sm:text-4xl font-semibold text-[#C8FF2E] tabular-nums">
                  0{activeTestimonial + 1}
                </span>
                <span className="text-sm text-[#94A3B8]">/ 0{TESTIMONIALS.length}</span>
              </div>
            </div>

            {/* Subtitle below CLIENT SAYS spanning the width of the stroke on Tablet, and right-aligned with counter on Desktop */}
            <div className="w-full lg:w-auto flex flex-col lg:flex-row lg:items-end justify-between lg:justify-end gap-6 lg:gap-10">
              <p className="text-sm sm:text-[15.5px] leading-[1.65] text-[#CBD5E1] w-full max-w-2xl lg:max-w-md font-light">
                Let’s see what our partners say about our craft across flagship website design, digital product architecture, and global brand systems.
              </p>

              {/* Active Dossier Counter on Desktop */}
              <div className="hidden lg:flex shrink-0 items-baseline gap-1.5 font-display text-[#F8FAFC] border-l border-white/15 pl-5">
                <span className="text-4xl font-semibold text-[#C8FF2E] tabular-nums">
                  0{activeTestimonial + 1}
                </span>
                <span className="text-sm text-[#94A3B8]">/ 0{TESTIMONIALS.length}</span>
              </div>
            </div>
          </div>

          {/* Main Interactive Stage:
              On Mobile (< sm): ONLY 1 full-width testimonial portrait shows at a time and slides in when clicking Next/Prev.
              On Tablet (sm:/md:): 3 Stepped Pictures come first (full-width row), and the Testimonial Card sits directly under it.
              On Desktop (lg:): Side-by-Side 12-column grid */}
          <div className="mt-10 sm:mt-14 lg:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-10 items-end">
            {/* MOBILE-ONLY SINGLE SLIDING PORTRAIT (< 640px) */}
            <div className="sm:hidden w-full overflow-hidden">
              <AnimatePresence mode="wait" custom={testimonialDirection}>
                <motion.div
                  key={TESTIMONIALS[activeTestimonial].id}
                  initial={{ opacity: 0, x: testimonialDirection * 80 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: testimonialDirection * -80 }}
                  transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
                  className="relative w-full h-[390px] rounded-2xl overflow-hidden border border-[#C8FF2E]/70 bg-[#0F172A] shadow-[0_24px_60px_rgba(0,0,0,0.75)] select-none"
                >
                  <img
                    src={TESTIMONIALS[activeTestimonial].image}
                    alt={TESTIMONIALS[activeTestimonial].name}
                    className="w-full h-full object-cover object-top"
                  />

                  {/* Subtle dark obsidian vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070B12]/90 via-transparent to-[#070B12]/25" />

                  {/* Top Index & Impact Pill */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                    <span className="px-2.5 py-1 rounded text-xs font-semibold tabular-nums bg-[#C8FF2E] text-[#090D16]">
                      {TESTIMONIALS[activeTestimonial].code}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#090D16]/80 backdrop-blur-md border border-white/15 text-[11px] text-[#F8FAFC] tracking-wide">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF2E]" />
                      <span>{TESTIMONIALS[activeTestimonial].impact}</span>
                    </span>
                  </div>

                  {/* Bottom Overlay Caption inside the Mobile Portrait Card */}
                  <div className="absolute inset-x-3.5 bottom-3.5 p-3.5 rounded-xl bg-[#0B111E]/90 backdrop-blur-md border border-white/15 flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <div className="text-[10px] tracking-[0.14em] text-[#C8FF2E] uppercase font-semibold truncate">
                        {TESTIMONIALS[activeTestimonial].company}
                      </div>
                      <div className="font-display text-base text-[#F8FAFC] leading-snug truncate">
                        {TESTIMONIALS[activeTestimonial].name}
                      </div>
                    </div>
                    <span className="w-8 h-8 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-[#C8FF2E] shrink-0">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* TABLET (sm:/md:) & DESKTOP (lg:): 3-Step Cascading Portrait Carousel (1st Big -> 2nd Medium -> 3rd Smaller) */}
            <div className="hidden sm:flex lg:col-span-7 w-full flex-row items-end justify-center lg:justify-start gap-5 md:gap-6 lg:gap-4 min-h-[360px] md:min-h-[400px] lg:min-h-[410px]">
              {[0, 1, 2].map((slotIndex) => {
                // Slot 0 = 1st Picture (BIG)
                // Slot 1 = 2nd Picture (Smaller than 1st, wide & well-proportioned)
                // Slot 2 = 3rd Picture (Smaller than 2nd, wide & well-proportioned)
                const itemIndex = (activeTestimonial + slotIndex) % TESTIMONIALS.length;
                const item = TESTIMONIALS[itemIndex];
                const isFirstBig = slotIndex === 0;
                const isSecondMedium = slotIndex === 1;

                // Generous, well-proportioned stepped sizes on Tablet (sm:/md:) & Desktop (lg:)
                const sizeClasses = isFirstBig
                  ? 'sm:w-[235px] sm:h-[365px] md:w-[270px] md:h-[400px] lg:w-[265px] lg:h-[405px] z-30 border-[#C8FF2E]/70 shadow-[0_30px_80px_rgba(0,0,0,0.8)]'
                  : isSecondMedium
                  ? 'sm:w-[180px] sm:h-[275px] md:w-[205px] md:h-[300px] lg:w-[198px] lg:h-[295px] z-20 border-white/20 opacity-85 hover:opacity-100 hover:border-[#C8FF2E]/55 shadow-2xl'
                  : 'sm:w-[145px] sm:h-[205px] md:w-[165px] md:h-[225px] lg:w-[158px] lg:h-[220px] z-10 border-white/15 opacity-65 hover:opacity-95 hover:border-[#C8FF2E]/45 shadow-xl';

                return (
                  <motion.div
                    key={item.id}
                    layout
                    transition={{
                      layout: {
                        type: 'spring',
                        stiffness: 260,
                        damping: 28,
                      },
                    }}
                    onClick={() => {
                      if (!isFirstBig) {
                        handleSelectTestimonial(item.id);
                      }
                    }}
                    className={`group relative rounded-2xl overflow-hidden border bg-[#0F172A] shrink-0 select-none ${sizeClasses} ${
                      !isFirstBig ? 'cursor-pointer' : ''
                    }`}
                  >
                    <motion.img
                      layout="position"
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Subtle dark obsidian vignette */}
                    <div
                      className={`absolute inset-0 transition-opacity duration-300 ${
                        isFirstBig
                          ? 'bg-gradient-to-t from-[#070B12]/90 via-transparent to-[#070B12]/20'
                          : 'bg-[#070B12]/40 group-hover:bg-[#070B12]/10'
                      }`}
                    />

                    {/* Top Index Pill on Every Stepped Card */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                      <span
                        className={`px-2 py-0.5 rounded text-[11px] font-medium tabular-nums backdrop-blur-md ${
                          isFirstBig
                            ? 'bg-[#C8FF2E] text-[#090D16] font-semibold'
                            : 'bg-[#090D16]/75 text-[#F8FAFC]/85 border border-white/15'
                        }`}
                      >
                        {item.code}
                      </span>

                      {isFirstBig && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#090D16]/75 backdrop-blur-md border border-white/15 text-[11px] text-[#F8FAFC] tracking-wide">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF2E]" />
                          <span>{item.impact}</span>
                        </span>
                      )}
                    </div>

                    {/* Bottom Overlay Caption inside the 1st Big Card */}
                    {isFirstBig ? (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="absolute inset-x-4 bottom-4 p-3.5 rounded-xl bg-[#0B111E]/90 backdrop-blur-md border border-white/15 flex items-center justify-between gap-2"
                      >
                        <div className="min-w-0">
                          <div className="text-[10px] tracking-[0.14em] text-[#C8FF2E] uppercase font-semibold truncate">
                            {item.company}
                          </div>
                          <div className="font-display text-base text-[#F8FAFC] leading-snug truncate">
                            {item.name}
                          </div>
                        </div>
                        <span className="w-7 h-7 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-[#C8FF2E] shrink-0">
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </motion.div>
                    ) : (
                      <div className="absolute inset-x-2 bottom-2.5 text-center pointer-events-none">
                        <span className="text-[10px] font-medium tracking-wider text-[#F8FAFC]/90 uppercase drop-shadow">
                          {item.company}
                        </span>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* BOTTOM (Tablet/Mobile — Full Width under the 3 pictures) / RIGHT COLUMN (Desktop): Testimonial Dossier Card */}
            <div className="lg:col-span-5 w-full">
              <div className="relative w-full rounded-[24px] bg-[#0F172A]/85 backdrop-blur-xl border border-white/15 p-7 sm:p-9 lg:p-10 shadow-[0_28px_70px_rgba(0,0,0,0.65)] overflow-hidden">
                {/* Subtle top-right ambient glow inside card */}
                <div
                  className="absolute -top-20 -right-20 w-52 h-52 rounded-full pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle, rgba(200, 255, 46, 0.14) 0%, transparent 70%)',
                  }}
                />

                {/* Top Meta Row inside Quote Card: Sculpted Quote Mark + Scope Tag */}
                <div className="flex items-center justify-between gap-4 pb-6 border-b border-white/12">
                  <div className="text-[#C8FF2E]" aria-hidden="true">
                    <svg viewBox="0 0 48 36" fill="currentColor" className="w-11 h-8 sm:w-12 sm:h-9">
                      <path d="M13.5 18C17.6 18 21 21.4 21 25.5C21 29.6 17.6 33 13.5 33C8.2 33 4 28.5 4 21.5C4 12.2 10.2 5.2 18.8 3L20.5 6.2C14.2 8.4 10.6 12.8 10.2 18.2C11.2 18 12.3 18 13.5 18ZM36.5 18C40.6 18 44 21.4 44 25.5C44 29.6 40.6 33 36.5 33C31.2 33 27 28.5 27 21.5C27 12.2 33.2 5.2 41.8 3L43.5 6.2C37.2 8.4 33.6 12.8 33.2 18.2C34.2 18 35.3 18 36.5 18Z" />
                    </svg>
                  </div>

                  <span className="px-3 py-1 rounded-md bg-[#1E293B] border border-white/15 text-[11px] font-medium tracking-wide text-[#E2E8F0]">
                    {TESTIMONIALS[activeTestimonial].scope}
                  </span>
                </div>

                {/* Sliding Quote & Attribution Content */}
                <div className="overflow-hidden min-h-[200px] sm:min-h-[215px] lg:min-h-[235px] flex flex-col justify-between">
                  <AnimatePresence mode="wait" custom={testimonialDirection}>
                    <motion.div
                      key={TESTIMONIALS[activeTestimonial].id}
                      initial={{ opacity: 0, x: testimonialDirection * 65 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: testimonialDirection * -65 }}
                      transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
                      className="pt-6"
                    >
                      <p className="font-display font-light text-lg sm:text-xl lg:text-[1.25rem] leading-[1.68] text-[#F8FAFC]/95">
                        “{TESTIMONIALS[activeTestimonial].quote}”
                      </p>

                      {/* Client Attribution + Impact Metric */}
                      <div className="mt-7 pt-5 border-t border-white/12 flex items-center justify-between gap-4">
                        <div>
                          <div className="font-display font-medium text-xl sm:text-2xl text-[#F8FAFC]">
                            {TESTIMONIALS[activeTestimonial].name}
                          </div>
                          <div className="text-xs sm:text-sm text-[#94A3B8] mt-0.5 font-light">
                            {TESTIMONIALS[activeTestimonial].role}
                          </div>
                        </div>

                        <div className="text-right hidden sm:block">
                          <div className="text-[10px] uppercase tracking-[0.14em] text-[#94A3B8]">
                            Verified Outcome
                          </div>
                          <div className="text-xs font-semibold text-[#C8FF2E] mt-0.5">
                            {TESTIMONIALS[activeTestimonial].impact}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Bottom Controls Bar: Interactive Step Indicators + Circular Prev/Next Buttons */}
                <div className="mt-7 pt-4 border-t border-white/12 flex items-center justify-between gap-4">
                  {/* Step Progress Bars */}
                  <div className="flex items-center gap-2">
                    {TESTIMONIALS.map((t, index) => {
                      const isActive = index === activeTestimonial;
                      return (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => handleSelectTestimonial(index)}
                          aria-label={`Go to testimonial ${index + 1}`}
                          className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                            isActive
                              ? 'w-9 bg-[#C8FF2E]'
                              : 'w-3 bg-white/25 hover:bg-white/50'
                          }`}
                        />
                      );
                    })}
                  </div>

                  {/* Circular Prev / Next Arrow Buttons */}
                  <div className="flex items-center gap-3 shrink-0">
                    <button
                      type="button"
                      onClick={handlePrevTestimonial}
                      aria-label="Previous testimonial"
                      className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/30 text-[#F8FAFC] hover:border-[#C8FF2E] hover:bg-white/10 flex items-center justify-center transition-all cursor-pointer active:scale-95"
                    >
                      <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.75]" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNextTestimonial}
                      aria-label="Next testimonial"
                      className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#C8FF2E] hover:bg-[#d8ff66] text-[#090D16] shadow-[0_10px_28px_rgba(200,255,46,0.35)] flex items-center justify-center transition-all cursor-pointer active:scale-95"
                    >
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 6: DIGITAL BRAND & ARCHITECTURE FAQS
          (Tablet: Kicker -> Title -> Subtitle -> More Questions & Contact Us on Top; Questions 01-05 Stacked Cleanly Below)
         ===================================================================== */}
      <section
        id="faqs-section"
        aria-label="Digital Brand and Architecture FAQs"
        className="w-full bg-white text-[#0B111E] py-18 sm:py-22 md:py-26 lg:py-32 px-6 sm:px-10 md:px-12 lg:px-16"
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-start">
            {/* TOP (Tablet/Mobile) / LEFT COLUMN (Desktop): Kicker -> Headline -> Subtitle -> More Questions + Contact Us */}
            <div className="lg:col-span-5 w-full">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-[#2563EB] mb-3.5">
                <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                <span>STUDIO KNOWLEDGE BASE</span>
              </div>

              <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-[2.85rem] lg:text-[3.35rem] leading-[1.08] tracking-[-0.02em] text-[#0B111E]">
                Digital Brand &amp;
                <br className="hidden lg:block" />{' '}
                Growth FAQs
              </h2>

              <p className="mt-4 sm:mt-5 text-sm sm:text-[15.5px] leading-[1.7] text-[#475569] max-w-2xl lg:max-w-md font-normal">
                As a leading brand architecture and digital product agency, we are dedicated to providing transparent strategic resources and answering frequently asked questions to guide our partners.
              </p>

              {/* Action Row & Partner Support Note arranged cleanly across Tablet */}
              <div className="mt-7 sm:mt-8 lg:mt-9 flex flex-col sm:flex-row lg:flex-col sm:items-center lg:items-start justify-between gap-6">
                <div className="flex flex-wrap items-center gap-6 sm:gap-8">
                  <button
                    type="button"
                    onClick={() => setShowAllFaqs((prev) => !prev)}
                    className="px-7 py-3.5 rounded-full border border-[#0B111E] text-xs sm:text-sm font-semibold text-[#0B111E] hover:bg-[#090D16] hover:text-[#C8FF2E] transition-colors cursor-pointer"
                  >
                    {showAllFaqs ? 'Fewer Questions' : 'More Questions'}
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      const el = document.getElementById('contact-journey-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-xs sm:text-sm font-semibold text-[#0B111E] underline underline-offset-4 decoration-[#0B111E]/60 hover:text-[#2563EB] hover:decoration-[#2563EB] transition-colors cursor-pointer"
                  >
                    Contact Us
                  </button>
                </div>

                {/* Subtle Tweaked Partner Support Note */}
                <div className="pt-5 sm:pt-0 lg:pt-6 border-t sm:border-t-0 lg:border-t border-[#E2E8F0] flex items-center gap-3.5 max-w-xs lg:max-w-sm">
                  <span className="w-9 h-9 rounded-full bg-[#090D16] text-[#C8FF2E] flex items-center justify-center shrink-0 text-xs font-semibold">
                    24h
                  </span>
                  <p className="text-xs leading-[1.55] text-[#64748B]">
                    Need a custom technical scope or architecture audit? Our managing partners respond within one business day.
                  </p>
                </div>
              </div>
            </div>

            {/* BOTTOM (Tablet/Mobile — Full Width) / RIGHT COLUMN (Desktop): Questions 01 to 05 */}
            <div className="lg:col-span-7 w-full border-t border-[#0B111E]/25">
              {(showAllFaqs ? FAQ_ITEMS : FAQ_ITEMS.slice(0, 4)).map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div
                    key={faq.id}
                    className={`border-b border-[#0B111E]/20 transition-colors ${
                      isOpen ? 'bg-[#F8FAFC]/70' : 'bg-transparent'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveFaq(isOpen ? -1 : idx)}
                      aria-expanded={isOpen}
                      className="w-full py-6 sm:py-7 px-3 sm:px-4 flex items-start justify-between gap-6 text-left group cursor-pointer focus:outline-none"
                    >
                      <div className="flex items-baseline gap-3.5 pr-4">
                        <span className="text-xs font-semibold text-[#2563EB] tabular-nums shrink-0">
                          {faq.code}.
                        </span>
                        <span className="font-display font-medium text-lg sm:text-xl lg:text-[1.35rem] leading-[1.3] text-[#0B111E] group-hover:text-[#2563EB] transition-colors">
                          {faq.question}
                        </span>
                      </div>

                      <span
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-lg leading-none shrink-0 mt-0.5 transition-colors ${
                          isOpen
                            ? 'bg-[#090D16] text-[#C8FF2E]'
                            : 'bg-transparent text-[#0B111E] group-hover:bg-[#F1F5F9]'
                        }`}
                        aria-hidden="true"
                      >
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: 'easeOut' }}
                          className="overflow-hidden"
                        >
                          <p className="pb-7 pl-9 sm:pl-11 pr-6 text-xs sm:text-sm leading-[1.75] text-[#64748B] max-w-2xl">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 7: DIGITAL MARKETING & SEO SERVICES / EDITORIAL INSIGHTS
          (Ash Background #F1F3F6 + Side-by-Side Header & 3 White Cards on Tablet & Desktop)
         ===================================================================== */}
      <section
        id="growth-section"
        aria-label="Digital Architecture and SEO Growth Services"
        className="w-full bg-[#F1F3F6] text-[#0B111E] py-18 sm:py-22 md:py-24 lg:py-32 px-6 sm:px-10 md:px-12 lg:px-16 border-t border-[#E2E8F0]"
      >
        <div className="max-w-[1200px] mx-auto">
          {/* Top Split Header Row — Side-by-Side on Tablet (md:grid-cols-12) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-start">
            {/* Left Large Editorial Headline */}
            <div className="md:col-span-7">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-[#2563EB] mb-3">
                <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                <span>GROWTH &amp; EDITORIAL PLAYBOOKS</span>
              </div>

              <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-[2.35rem] lg:text-[3.25rem] leading-[1.12] tracking-[-0.02em] text-[#0B111E] max-w-xl">
                Digital Architecture &amp; SEO Services That Grow Traffic &amp; Increase Revenue
              </h2>
            </div>

            {/* Right Supporting Paragraph + Outlined "See more" Pill Button */}
            <div className="md:col-span-5 md:pt-6 lg:pt-7 flex flex-col items-start justify-between">
              <p className="text-xs sm:text-sm lg:text-[15px] leading-[1.65] text-[#526074] max-w-md">
                We are the flagship digital product and brand agency for ambitious enterprises. We offer a full range of strategic services to help partners improve search authority, elevate conversion architecture, and drive compounding traffic.
              </p>

              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('contact-journey-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="mt-5 md:mt-6 lg:mt-7 px-7 lg:px-8 py-2.5 lg:py-3 rounded-full border border-[#0B111E]/75 text-xs sm:text-sm font-semibold text-[#0B111E] hover:bg-[#090D16] hover:text-[#C8FF2E] hover:border-[#090D16] transition-all cursor-pointer"
              >
                See more
              </button>
            </div>
          </div>

          {/* Bottom 3-Column White Editorial Cards Grid — Balanced Padding for Tablet (md:) */}
          <div className="mt-10 sm:mt-12 md:mt-14 lg:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-4 lg:gap-7 items-stretch">
            {GROWTH_ARTICLES.map((article, idx) => {
              const isExpanded = selectedArticle === idx;
              const isFirstCard = idx === 0;
              return (
                <div
                  key={article.id}
                  onClick={() => setSelectedArticle(isExpanded ? null : idx)}
                  className="group bg-white rounded-[22px] lg:rounded-[24px] p-5 sm:p-6 md:p-5 lg:p-8 border border-[#E2E8F0]/80 shadow-[0_14px_35px_rgba(11,17,30,0.04)] hover:shadow-[0_24px_50px_rgba(11,17,30,0.09)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    {/* Top Row: Colored Status Dot & Read Time */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="inline-flex items-center gap-1.5 lg:gap-2">
                        <span className={`w-2.5 h-2.5 rounded-full ${article.dotColor}`} />
                        <span className="text-[10px] lg:text-[11px] font-semibold uppercase tracking-[0.12em] text-[#64748B]">
                          {article.tag}
                        </span>
                      </div>
                      <span className="text-[11px] lg:text-xs text-[#64748B] font-normal tabular-nums">
                        {article.readTime}
                      </span>
                    </div>

                    {/* Bold Editorial Card Title */}
                    <h3 className="mt-4 lg:mt-5 font-display font-semibold text-lg md:text-[1.15rem] lg:text-[1.45rem] leading-[1.28] tracking-[-0.015em] text-[#0B111E] group-hover:text-[#2563EB] transition-colors">
                      {article.title}
                    </h3>
                  </div>

                  {/* Bottom Row: Excerpt Text on Left + Oval Pill Arrow Button on Right */}
                  <div className="mt-7 md:mt-8 lg:mt-10 pt-3 lg:pt-4">
                    {isExpanded ? (
                      <div className="mb-4 p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs leading-[1.6] text-[#334155]">
                        {article.fullText}
                      </div>
                    ) : null}

                    <div className="flex items-end justify-between gap-3 lg:gap-4">
                      <p className="text-xs lg:text-[13px] leading-[1.55] text-[#64748B] line-clamp-3 flex-1">
                        {article.excerpt}
                      </p>

                      <button
                        type="button"
                        aria-label={`Read ${article.title}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedArticle(isExpanded ? null : idx);
                        }}
                        className={`w-13 h-9 md:w-12 md:h-9 lg:w-[70px] lg:h-11 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 cursor-pointer ${
                          isFirstCard || isExpanded
                            ? 'bg-[#090D16] text-[#C8FF2E] border border-[#090D16] group-hover:bg-[#C8FF2E] group-hover:text-[#090D16]'
                            : 'bg-transparent text-[#0B111E] border border-[#0B111E]/60 group-hover:bg-[#090D16] group-hover:text-[#C8FF2E] group-hover:border-[#090D16]'
                        }`}
                      >
                        <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 stroke-[1.85]" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 8: START TODAY / PARTNER INQUIRY SECTION
          (Tablet: All Text & Badges on Top, Full-Width Leave a Message Form Card Below; Desktop: Side-by-Side)
         ===================================================================== */}
      <section
        id="contact-journey-section"
        aria-label="Get Started On Your Brand Journey Today"
        className="relative w-full overflow-hidden bg-[#090D16] text-[#F8FAFC] py-18 sm:py-22 md:py-26 lg:py-32 px-6 sm:px-10 md:px-12 lg:px-16"
      >
        {/* Agency Studio Background Picture with Deep Obsidian-Indigo Gradient fading smoothly into Section 9 */}
        <div className="absolute inset-0 bg-[#090D16]">
          <img
            src={STORY_TEAM_3}
            alt="Noventra creative directors collaborating in architectural studio loft"
            className="w-full h-full object-cover object-center scale-[1.02] saturate-50"
          />
          {/* Deep Obsidian-Navy & Cobalt Studio Grading */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(90deg, rgba(9, 13, 22, 0.92) 0%, rgba(15, 23, 42, 0.78) 48%, rgba(9, 13, 22, 0.88) 100%)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#090D16]/60 via-transparent to-[#070B12]" />
        </div>

        <div className="relative z-10 max-w-[1220px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-12 items-center">
          {/* TOP (Tablet/Mobile) / LEFT COLUMN (Desktop): Kicker, Fraunces Headline, Agency Description & Bespoke Partner Highlights */}
          <div className="lg:col-span-5 w-full">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] text-[#C8FF2E] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#C8FF2E]" />
              <span>START TODAY</span>
            </div>

            <h2 className="mt-3.5 sm:mt-4 font-display font-semibold text-3xl sm:text-4xl md:text-[2.85rem] lg:text-[3.4rem] leading-[1.08] tracking-[-0.02em] text-[#F8FAFC]">
              Get Started On Your
              <br className="hidden lg:block" />{' '}
              Brand Journey Today
            </h2>

            <p className="mt-4 sm:mt-5 lg:mt-6 text-sm sm:text-[15.5px] leading-[1.75] text-[#CBD5E1] max-w-2xl lg:max-w-md font-light">
              Once we receive your project details, one of our dedicated managing partners will reach out to you with a tailored roadmap across our brand architecture, UI/UX, and flagship web offerings.
            </p>

            {/* Tweaked Agency Trust Badges */}
            <div className="mt-8 lg:mt-10 pt-6 lg:pt-8 border-t border-white/15 grid grid-cols-2 gap-6 max-w-lg lg:max-w-md">
              <div>
                <div className="font-display text-2xl sm:text-3xl font-semibold text-[#C8FF2E]">
                  48 Hours
                </div>
                <div className="text-xs text-[#94A3B8] mt-1 font-light">
                  Bespoke architecture &amp; scope proposal delivery
                </div>
              </div>
              <div>
                <div className="font-display text-2xl sm:text-3xl font-semibold text-[#F8FAFC]">
                  100% Partner-Led
                </div>
                <div className="text-xs text-[#94A3B8] mt-1 font-light">
                  Direct collaboration with our studio principals
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM (Tablet/Mobile — Full Width) / RIGHT COLUMN (Desktop): Translucent Frosted Glass "Leave a message!" Form Card */}
          <div className="lg:col-span-7 w-full flex justify-center lg:justify-end">
            <div className="w-full lg:max-w-[600px] rounded-[24px] bg-[#0F172A]/65 backdrop-blur-xl border border-white/20 p-7 sm:p-9 lg:p-10 shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
              <div className="flex items-center justify-between gap-4 mb-7">
                <h3 className="font-display font-medium text-2xl sm:text-[1.75rem] text-[#F8FAFC]">
                  Leave a message!
                </h3>
                <span className="px-3 py-1 rounded-full bg-[#C8FF2E]/15 border border-[#C8FF2E]/35 text-[11px] font-medium text-[#C8FF2E] shrink-0">
                  Q4 / Q1 Sprint Slots Open
                </span>
              </div>

              {contactSubmitted ? (
                <div className="py-12 px-6 rounded-2xl bg-[#090D16]/85 border border-[#C8FF2E]/40 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#C8FF2E] text-[#090D16] flex items-center justify-center mx-auto mb-4">
                    <Check className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <h4 className="font-display text-2xl text-[#F8FAFC]">
                    Partner Inquiry Received
                  </h4>
                  <p className="mt-2 text-sm text-[#CBD5E1] max-w-md mx-auto leading-relaxed">
                    Thank you{contactForm.firstName ? `, ${contactForm.firstName}` : ''}. Our managing partners have received your brief and will reach out to <span className="text-[#C8FF2E]">{contactForm.email}</span> within one business day.
                  </p>
                  <button
                    type="button"
                    onClick={() => setContactSubmitted(false)}
                    className="mt-6 px-6 py-2.5 rounded-xl bg-white/10 border border-white/25 text-xs font-medium text-[#F8FAFC] hover:bg-[#C8FF2E] hover:text-[#090D16] transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  {/* Row 1: First Name & Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="rounded-xl bg-[#090D16]/60 border border-white/15 px-4 py-3 focus-within:border-[#C8FF2E] transition-colors">
                      <label className="block text-[11px] font-medium text-[#CBD5E1] mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        value={contactForm.firstName}
                        onChange={(e) => setContactForm({ ...contactForm, firstName: e.target.value })}
                        placeholder="Add here"
                        className="w-full bg-transparent text-sm text-[#F8FAFC] placeholder-[#94A3B8]/50 focus:outline-none"
                      />
                    </div>

                    <div className="rounded-xl bg-[#090D16]/60 border border-white/15 px-4 py-3 focus-within:border-[#C8FF2E] transition-colors">
                      <label className="block text-[11px] font-medium text-[#CBD5E1] mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        value={contactForm.lastName}
                        onChange={(e) => setContactForm({ ...contactForm, lastName: e.target.value })}
                        placeholder="Add here"
                        className="w-full bg-transparent text-sm text-[#F8FAFC] placeholder-[#94A3B8]/50 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email */}
                  <div className="rounded-xl bg-[#090D16]/60 border border-white/15 px-4 py-3 focus-within:border-[#C8FF2E] transition-colors">
                    <label className="block text-[11px] font-medium text-[#CBD5E1] mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full bg-transparent text-sm text-[#F8FAFC] placeholder-[#94A3B8]/50 focus:outline-none"
                    />
                  </div>

                  {/* Row 3: Phone Number */}
                  <div className="rounded-xl bg-[#090D16]/60 border border-white/15 px-4 py-3 focus-within:border-[#C8FF2E] transition-colors">
                    <label className="block text-[11px] font-medium text-[#CBD5E1] mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      placeholder="(000) 000 0000"
                      className="w-full bg-transparent text-sm text-[#F8FAFC] placeholder-[#94A3B8]/50 focus:outline-none"
                    />
                  </div>

                  {/* Row 4: Message */}
                  <div className="rounded-xl bg-[#090D16]/60 border border-white/15 px-4 py-3 focus-within:border-[#C8FF2E] transition-colors">
                    <label className="block text-[11px] font-medium text-[#CBD5E1] mb-1">
                      Message
                    </label>
                    <textarea
                      rows={3}
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      placeholder="Tell us about your brand architecture, web flagship, or product goals..."
                      className="w-full bg-transparent text-sm text-[#F8FAFC] placeholder-[#94A3B8]/50 focus:outline-none resize-none"
                    />
                  </div>

                  {/* Bottom Submit Inquiry Button: Full-width matching input fields with centered text across Mobile, Tablet, and Web */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-[#F8FAFC] text-[#090D16] hover:bg-[#C8FF2E] transition-colors text-sm font-semibold text-center shadow-lg cursor-pointer"
                    >
                      <span>Submit Inquiry</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 9: ARCHITECTURAL AGENCY FOOTER & MONUMENTAL WATERMARK
          (Tablet: Balanced 2x2 Two-by-Two Grid with Generous Vertical & Horizontal Spacing; Desktop: 4-Column Agency Directory)
         ===================================================================== */}
      <footer
        aria-label="Noventra Agency Footer"
        className="relative w-full overflow-hidden bg-[#070B12] text-[#F8FAFC] pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-14 px-6 sm:px-10 md:px-12 lg:px-16 border-t border-white/10"
      >
        <div className="relative z-10 max-w-[1220px] mx-auto">
          {/* Top Agency Footer Grid: 2x2 (two-by-two) with generous vertical & horizontal spacing on Tablet (sm:grid-cols-2), 4 columns on Desktop (lg:grid-cols-12) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-y-14 sm:gap-x-16 sm:gap-y-16 md:gap-x-20 md:gap-y-16 lg:gap-10 pb-18 sm:pb-22">
            {/* Column 1: Agency Brand Mark + Tagline + Connect With Us Social Row */}
            <div className="lg:col-span-4 flex flex-col justify-between space-y-8">
              <div>
                <a
                  href="#top"
                  className="group inline-flex items-center gap-3.5 text-left focus:outline-none"
                >
                  <AgencyBrandMark className="w-11 h-11 text-[#C8FF2E] transition-transform duration-300 group-hover:scale-105" />
                  <div className="flex flex-col">
                    <span className="font-display font-semibold text-xl tracking-tight text-[#F8FAFC] leading-none">
                      NOVENTRA
                    </span>
                  </div>
                </a>

                <p className="mt-5 text-sm leading-[1.75] text-[#94A3B8] max-w-xs font-light">
                  An architectural brand strategy, design system, and digital product studio crafting category-defining web flagships.
                </p>
              </div>

              {/* Connect With Us */}
              <div className="pt-2">
                <div className="text-xs font-semibold tracking-wide text-[#F8FAFC] mb-4">
                  Connect With Us
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => handleSocialClick('X (Twitter)')}
                    aria-label="Noventra on X"
                    className="w-10 h-10 rounded-full border border-white/25 text-[#CBD5E1] hover:border-[#C8FF2E] hover:bg-[#C8FF2E] hover:text-[#090D16] flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <SocialXIcon />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSocialClick('Facebook')}
                    aria-label="Noventra on Facebook"
                    className="w-10 h-10 rounded-full border border-white/25 text-[#CBD5E1] hover:border-[#C8FF2E] hover:bg-[#C8FF2E] hover:text-[#090D16] flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <SocialFacebookIcon />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSocialClick('Instagram')}
                    aria-label="Noventra on Instagram"
                    className="w-10 h-10 rounded-full border border-white/25 text-[#CBD5E1] hover:border-[#C8FF2E] hover:bg-[#C8FF2E] hover:text-[#090D16] flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <SocialInstagramIcon />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSocialClick('LinkedIn')}
                    aria-label="Noventra on LinkedIn"
                    className="w-10 h-10 rounded-full border border-white/25 text-[#CBD5E1] hover:border-[#C8FF2E] hover:bg-[#C8FF2E] hover:text-[#090D16] flex items-center justify-center transition-colors cursor-pointer text-xs font-semibold"
                  >
                    in
                  </button>
                </div>
              </div>
            </div>

            {/* Column 2: Explore */}
            <div className="lg:col-span-2">
              <h3 className="font-display font-medium text-lg text-[#F8FAFC] mb-5">
                Explore
              </h3>
              <ul className="space-y-3.5 text-sm text-[#CBD5E1] font-light">
                <li>
                  <a
                    href="#stories-section"
                    className="inline-flex items-center gap-2.5 hover:text-[#C8FF2E] transition-colors"
                  >
                    <span className="text-[#C8FF2E]">›</span>
                    <span>Studio Chronicles</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#labs-section"
                    className="inline-flex items-center gap-2.5 hover:text-[#C8FF2E] transition-colors"
                  >
                    <span className="text-[#C8FF2E]">›</span>
                    <span>Noventra Labs</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#insights-section"
                    className="inline-flex items-center gap-2.5 hover:text-[#C8FF2E] transition-colors"
                  >
                    <span className="text-[#C8FF2E]">›</span>
                    <span>Strategic Intelligence</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials-section"
                    className="inline-flex items-center gap-2.5 hover:text-[#C8FF2E] transition-colors"
                  >
                    <span className="text-[#C8FF2E]">›</span>
                    <span>Partner Endorsements</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#growth-section"
                    className="inline-flex items-center gap-2.5 hover:text-[#C8FF2E] transition-colors"
                  >
                    <span className="text-[#C8FF2E]">›</span>
                    <span>SEO &amp; Growth Playbooks</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact Us */}
            <div className="lg:col-span-3">
              <h3 className="font-display font-medium text-lg text-[#F8FAFC] mb-5">
                Contact Us
              </h3>
              <div className="space-y-4 text-sm text-[#CBD5E1] font-light">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#0F172A] border border-white/15 flex items-center justify-center text-[#C8FF2E] shrink-0">
                    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-3.5 h-3.5">
                      <path d="M3.5 4.5h3l1.5 3.5-2 1.5a11 11 0 0 0 4.5 4.5l1.5-2 3.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5C7.5 18 2 12.5 2 5.5A1.5 1.5 0 0 1 3.5 4.5z" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span>+44 (0) 20 7946 0821</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#0F172A] border border-white/15 flex items-center justify-center text-[#C8FF2E] shrink-0">
                    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-3.5 h-3.5">
                      <rect x="2.5" y="4.5" width="15" height="11" rx="2" />
                      <path d="M3 5.5l7 5 7-5" strokeLinecap="round" />
                    </svg>
                  </span>
                  <span>partners@noventra.com</span>
                </div>

                <div className="pt-2.5">
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setActiveModal('project');
                    }}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#C8FF2E] hover:underline cursor-pointer"
                  >
                    <span>Book a Partner Discovery Call</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Column 4: Our Studios */}
            <div className="lg:col-span-3">
              <h3 className="font-display font-medium text-lg text-[#F8FAFC] mb-5">
                Our Studios
              </h3>
              <div className="space-y-5 text-sm text-[#CBD5E1] font-light">
                <div>
                  <div className="text-xs font-semibold tracking-[0.12em] text-[#F8FAFC] uppercase">
                    LONDON FLAGSHIP STUDIO
                  </div>
                  <div className="mt-1.5 flex items-start gap-2.5 leading-relaxed">
                    <span className="text-[#C8FF2E] mt-0.5">⌖</span>
                    <span>14 Redchurch Street, Shoreditch, London E2 7DD</span>
                  </div>
                </div>

                <div>
                  <div className="text-xs font-semibold tracking-[0.12em] text-[#F8FAFC] uppercase">
                    ZURICH DESIGN &amp; TYPE LAB
                  </div>
                  <div className="mt-1.5 flex items-start gap-2.5 leading-relaxed">
                    <span className="text-[#C8FF2E] mt-0.5">⌖</span>
                    <span>Limmatquai 72, 8001 Zürich, Switzerland</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Monumental Full-Width Low-Contrast Agency Wordmark Watermark */}
          <div
            aria-hidden="true"
            className="pt-6 pb-8 border-t border-white/10 select-none overflow-hidden text-center"
          >
            <div className="font-display font-bold text-[15vw] lg:text-[12.5rem] leading-[0.86] tracking-[-0.03em] text-white/[0.05] uppercase whitespace-nowrap">
              NOVENTRA
            </div>
          </div>

          {/* Bottom Copyright & Legal Bar */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-[13px] text-[#94A3B8] font-light">
            <div>
              ©2026 Noventra. All Rights Reserved.
            </div>
            <div className="flex items-center gap-5">
              <a
                href="#top"
                onClick={(e) => {
                  e.preventDefault();
                  handleSocialClick('Privacy Policy Dossier');
                }}
                className="hover:text-[#F8FAFC] transition-colors"
              >
                Privacy Policy
              </a>
              <span aria-hidden="true">|</span>
              <a
                href="#top"
                onClick={(e) => {
                  e.preventDefault();
                  handleSocialClick('Terms of Service Dossier');
                }}
                className="hover:text-[#F8FAFC] transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* INTERACTIVE MODALS FOR HERO ACTIONS */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 bg-[#05080F]/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="bg-[#0F172A] border border-white/20 text-[#F8FAFC] max-w-lg w-full p-7 sm:p-9 relative shadow-2xl rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveModal(null)}
              aria-label="Close dialog"
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#1E293B] text-[#F8FAFC] flex items-center justify-center hover:bg-[#C8FF2E] hover:text-[#090D16] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {activeModal === 'project' && (
              <div>
                <div className="flex items-center gap-3 text-xs text-[#C8FF2E] tracking-wide">
                  <span>New Client Partnership</span>
                  <span>·</span>
                  <span>Q4 / Q1 Availability</span>
                </div>
                <h3 className="mt-2 font-display font-light text-3xl text-[#F8FAFC]">
                  Start a project with Noventra
                </h3>
                <p className="mt-2 text-sm text-[#94A3B8] font-light leading-relaxed">
                  Direct partner-led engagements in brand architecture, design systems, and flagship web experiences.
                </p>

                {formSubmitted ? (
                  <div className="mt-6 p-6 bg-[#1E293B] border border-[#C8FF2E]/40 rounded-xl text-left">
                    <div className="flex items-center gap-2.5 text-[#C8FF2E] font-medium text-sm">
                      <Check className="w-4 h-4" />
                      <span>Inquiry received by Elena &amp; Marcus</span>
                    </div>
                    <p className="mt-2 text-xs text-[#CBD5E1] leading-relaxed">
                      Thank you, {projectForm.name}. We have sent a calendar dossier to {projectForm.email} for your discovery session.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleProjectSubmit} className="mt-6 space-y-4">
                    <div>
                      <label className="block text-xs text-[#CBD5E1] mb-1.5">Your Name</label>
                      <input
                        type="text"
                        required
                        value={projectForm.name}
                        onChange={(e) => setProjectForm({ ...projectForm, name: e.target.value })}
                        placeholder="Alex Mercer"
                        className="w-full bg-[#090D16] border border-white/15 rounded-lg px-3.5 py-2.5 text-sm text-[#F8FAFC] focus:outline-none focus:border-[#C8FF2E]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-[#CBD5E1] mb-1.5">Work Email</label>
                      <input
                        type="email"
                        required
                        value={projectForm.email}
                        onChange={(e) => setProjectForm({ ...projectForm, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full bg-[#090D16] border border-white/15 rounded-lg px-3.5 py-2.5 text-sm text-[#F8FAFC] focus:outline-none focus:border-[#C8FF2E]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-[#CBD5E1] mb-1.5">Primary Discipline</label>
                      <select
                        value={projectForm.scope}
                        onChange={(e) => setProjectForm({ ...projectForm, scope: e.target.value })}
                        className="w-full bg-[#090D16] border border-white/15 rounded-lg px-3.5 py-2.5 text-sm text-[#F8FAFC] focus:outline-none focus:border-[#C8FF2E]"
                      >
                        <option>Brand Architecture &amp; Identity</option>
                        <option>Flagship Web &amp; Digital Product</option>
                        <option>Design System &amp; Engineering</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="w-full mt-2 py-3 px-5 rounded-lg bg-[#C8FF2E] text-[#090D16] text-sm font-semibold hover:bg-[#d8ff66] transition-colors cursor-pointer"
                    >
                      Request Partner Consultation
                    </button>
                  </form>
                )}
              </div>
            )}

            {activeModal === 'nav-services' && (
              <div>
                <div className="text-xs text-[#C8FF2E]">
                  Core Capabilities
                </div>
                <h3 className="mt-2 font-display font-light text-3xl text-[#F8FAFC]">
                  Our Agency Disciplines
                </h3>
                <p className="mt-3 text-sm text-[#94A3B8] font-light leading-relaxed">
                  We unite brand strategy, editorial art direction, and production-grade web engineering under one roof.
                </p>
                <div className="mt-6 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setActiveModal(null)}
                    className="px-5 py-2.5 rounded-lg bg-[#C8FF2E] text-[#090D16] text-xs font-semibold hover:bg-white transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}



