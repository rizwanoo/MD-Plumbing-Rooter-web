import React from 'react';
import { BRAND_INFO, SERVICE_REGIONS } from '../data/brand';
import { ArrowUpRight, Instagram, Shield, Check, Eye } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: 'home' | 'services' | 'work' | 'about' | 'contact') => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-[#FFFDF7] text-[#1E282E] pt-24 sm:pt-28 selection:bg-[#FFE16B] overflow-x-hidden">
      {/* Header Banner */}
      <section className="bg-[#121A1F] text-white py-20 px-4 sm:px-6 lg:px-8 hairline-b border-white/20">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono-data uppercase tracking-widest text-[#FFE16B] font-bold">
            <span className="bg-[#2457F5] text-white px-2 py-0.5">GENUINE TRADE ETHOS</span>
            <span>·</span>
            <span>INLAND EMPIRE &amp; LOS ANGELES</span>
            <span>·</span>
            <span className="text-[#18C6C1]">PLUMBING POV</span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight uppercase leading-[0.92] text-white">
            THE PLUMBING POV:
            <br />
            <span className="text-[#FFE16B]">TRANSPARENT CRAFT</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl leading-relaxed font-normal">
            &ldquo;Honest work and fair pricing.&rdquo; That is the entirety of our brand message and
            our commitment to every residential and commercial client across Southern California.
          </p>
        </div>
      </section>

      {/* Editorial Spread: What Plumbing POV Really Means (Zero Cards) */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto hairline-b">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="font-mono-data text-xs uppercase tracking-widest text-[#2457F5] font-bold">
              Brand Positioning
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-[#1E282E] leading-tight">
              WHY &ldquo;PLUMBING POV&rdquo; MATTERS TO YOU
            </h2>
            <p className="font-mono-data text-xs text-slate-500 uppercase">
              Authentic Trade Perspective · Zero Upcharges
            </p>
          </div>

          <div className="lg:col-span-7 space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed lg:border-l lg:border-[#1E282E]/15 lg:pl-8">
            <p>
              When a sewer line backs up or hot water vanishes, most property owners feel at the mercy
              of whichever technician arrives first. Traditional plumbing sales operations often train
              technicians as salesmen first and plumbers second—incentivized to sell whole-house repipes
              or complete sewer lateral replacements even when a straightforward cleanout snaking would
              solve the problem.
            </p>
            <p>
              At <strong className="text-[#2457F5]">MD Plumbing &amp; Rooter</strong>, our &ldquo;Plumbing POV&rdquo;
              is about pulling back that curtain. We bring the property owner directly into the diagnostic
              screen. You see the video feed, you see where the root mass has infiltrated, and you get an
              unfiltered, professional recommendation.
            </p>
          </div>
        </div>
      </section>

      {/* Audience Pillars (Zero cards, editorial horizontal layout) */}
      <section className="py-20 sm:py-32 bg-[#1E282E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl">
            <span className="font-mono-data text-xs uppercase tracking-widest text-[#18C6C1] font-bold block mb-2">
              Who We Serve
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight">
              TAILORED FOR SOUTHERN CALIFORNIA PROPERTIES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/15 hairline-t hairline-b border-white/15">
            <div className="py-8 md:px-6 first:pl-0 space-y-3">
              <span className="font-mono-data text-xs uppercase tracking-wider text-[#FFE16B] font-bold">
                01 / Residential
              </span>
              <h3 className="font-display font-bold text-xl uppercase text-white">
                Homeowners
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Clear diagnoses, respectful treatment of your living spaces, and fair pricing without
                pushy high-pressure sales pitches.
              </p>
            </div>

            <div className="py-8 md:px-6 space-y-3">
              <span className="font-mono-data text-xs uppercase tracking-wider text-[#18C6C1] font-bold">
                02 / Commercial &amp; Rental
              </span>
              <h3 className="font-display font-bold text-xl uppercase text-white">
                Landlords &amp; Property Managers
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Fast turnaround for tenant emergencies, detailed worksite photo documentation, and
                durable long-term repairs that minimize repeat calls.
              </p>
            </div>

            <div className="py-8 md:px-6 last:pr-0 space-y-3">
              <span className="font-mono-data text-xs uppercase tracking-wider text-[#FFE16B] font-bold">
                03 / Escrow &amp; Transactions
              </span>
              <h3 className="font-display font-bold text-xl uppercase text-white">
                Real Estate Professionals
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Objective sewer lateral camera inspections and rapid repair estimates during escrow
                inspection periods across IE and LA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Coverage Manifesto (With dedicated unique master plumber craft photo) */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto hairline-b">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="font-mono-data text-xs uppercase tracking-widest text-[#2457F5] font-bold">
              Regional Presence
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-[#1E282E]">
              PROUDLY SERVICING ALL INLAND EMPIRE &amp; LOS ANGELES AREAS
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              We do not invent service locations we cannot reach. Our core operations are focused
              tightly on the Inland Empire communities (Riverside, San Bernardino, Rancho Cucamonga,
              Ontario, Corona, Fontana) and greater Los Angeles basin.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('contact')}
                className="bg-[#2457F5] text-white px-8 py-4 font-display font-black text-xs uppercase tracking-wider hover:bg-[#1A42C2] transition-colors"
              >
                REQUEST SERVICE IN YOUR CITY
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 relative aspect-[4/3] overflow-hidden bg-black">
            <img
              src="/src/assets/images/about_master_plumber_craft_1794390955655.jpg"
              alt="MD Plumbing master tradesman checking manifold and pressure valves"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-3 left-3 bg-[#121A1F] text-white p-3 max-w-xs text-xs font-mono-data">
              <p className="text-[#FFE16B] font-bold uppercase">&ldquo;Honest work and fair pricing.&rdquo;</p>
              <p className="text-slate-300 text-[11px] mt-0.5">MD Plumbing &amp; Rooter Craft Commitment.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
