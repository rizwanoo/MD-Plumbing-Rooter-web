import React, { useState } from 'react';
import { BRAND_INFO, VERIFIED_SERVICES, SERVICE_REGIONS, WORK_HIGHLIGHTS } from '../data/brand';
import {
  ArrowUpRight,
  Check,
  Instagram,
  Wrench,
  Shield,
  MapPin,
  Clock,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: 'home' | 'services' | 'work' | 'about' | 'contact', serviceId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [activeExpertiseIndex, setActiveExpertiseIndex] = useState(0);
  const [selectedRegion, setSelectedRegion] = useState<'IE' | 'LA'>('IE');

  const activeService = VERIFIED_SERVICES[activeExpertiseIndex];

  return (
    <div className="w-full bg-[#FFFDF7] text-[#1E282E] selection:bg-[#FFE16B] overflow-x-hidden">
      {/* =========================================================================
          SECTION 1: CINEMATIC HERO
          Barlow ExtraBold (800) headline + Inter body & buttons
          ========================================================================= */}
      <section className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-end overflow-hidden pb-12 sm:pb-16 pt-28 sm:pt-36">
        {/* Full-Bleed HD Background Image: Master Plumber with Wrench */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero.jpg"
            alt="Master plumber actively fixing copper plumbing installation with wrench"
            className="w-full h-full object-cover object-center scale-100 transition-transform duration-1000 ease-out"
            referrerPolicy="no-referrer"
            loading="eager"
          />
          {/* Subtle optical contrast scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#121A1F] via-[#121A1F]/55 to-black/30" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl space-y-5 sm:space-y-6">
            {/* Clean Inter Kicker */}
            <div className="flex flex-wrap items-center gap-2.5 text-xs sm:text-sm font-semibold tracking-wide">
              <span className="text-[#FFE16B]">Southern California</span>
              <span className="text-white/40">/</span>
              <span className="text-white">Inland Empire &amp; Los Angeles</span>
              <span className="text-white/40">/</span>
              <span className="text-[#18C6C1]">Plumbing POV</span>
            </div>

            {/* Headline in Barlow ExtraBold (800) */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight leading-[1.02]">
              WHEN PLUMBING MATTERS.
              <br />
              <span className="text-[#FFE16B]">WE GET IT RIGHT.</span>
            </h1>

            {/* Supporting Text: Inter Regular 400 (18px-20px) */}
            <p className="text-[17px] sm:text-xl lg:text-[22px] text-slate-200 font-normal max-w-2xl leading-relaxed">
              Professional plumbing solutions, honest work and fair pricing. Proudly serving the
              Inland Empire and Los Angeles areas.
            </p>

            {/* Sharp Action Bar: Inter Bold (700) */}
            <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="bg-[#2457F5] text-white px-7 sm:px-8 py-3.5 sm:py-4 font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#1A42C2] transition-all hover:shadow-2xl active:scale-95 border border-[#18C6C1]/50 flex items-center gap-2.5 cursor-pointer"
              >
                <span>REQUEST SERVICE</span>
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <button
                onClick={() => onNavigate('services')}
                className="bg-transparent text-white px-6 sm:px-7 py-3.5 sm:py-4 font-bold text-xs sm:text-sm uppercase tracking-wider border border-white/70 hover:bg-white hover:text-[#1E282E] transition-colors cursor-pointer"
              >
                EXPLORE SERVICES
              </button>

              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm font-semibold tracking-normal text-slate-200 hover:text-[#FFE16B] flex items-center gap-1.5 transition-colors sm:ml-2 py-2"
              >
                <span>Follow Real POV Footage</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Ticker Strip */}
        <div className="relative z-10 mt-12 sm:mt-16 hairline-t border-white/15 bg-black/40 backdrop-blur-sm text-white/90 py-3 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm font-medium tracking-normal">
            <div className="flex items-center gap-4 sm:gap-6 overflow-hidden">
              <span className="text-[#FFE16B] font-bold shrink-0">5 Core Capabilities:</span>
              <span className="hidden sm:inline">Main Line Clogs</span>
              <span className="hidden sm:inline">·</span>
              <span className="hidden sm:inline">Plumbing Leaks</span>
              <span className="hidden sm:inline">·</span>
              <span className="hidden sm:inline">Sewer Repairs</span>
              <span className="hidden md:inline">·</span>
              <span className="hidden md:inline">Water Heaters</span>
              <span className="hidden md:inline">·</span>
              <span className="hidden md:inline">Toilet Installs</span>
            </div>
            <div className="text-right text-[#18C6C1] font-semibold shrink-0">
              Honest Work &amp; Fair Pricing
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: BRAND INTRODUCTION — "THE PLUMBING POV"
          Barlow Bold (700) + Inter Regular (400) / SemiBold (600)
          ========================================================================= */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto hairline-b">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Typographic Lead */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            <div className="text-xs uppercase tracking-wider text-[#2457F5] font-bold flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#2457F5]" />
              AUTHENTIC TRADE PHILOSOPHY
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.08] text-[#1E282E]">
              Plumbing POV:
              <br />
              <span className="text-[#2457F5]">Real Craft.</span>
              <br />
              Zero Sales Gimmicks.
            </h2>

            <div className="text-sm font-medium text-slate-500">
              Verified Brand Ethos · California Licensed Trade
            </div>
          </div>

          {/* Right Column: Editorial Prose & Commitments */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 lg:pl-6 lg:border-l lg:border-[#1E282E]/15">
            <p className="text-[17px] sm:text-xl text-[#1E282E] font-normal leading-relaxed">
              We founded MD Plumbing &amp; Rooter with one unshakeable rule:{' '}
              <strong className="font-semibold text-[#2457F5]">honest work and fair pricing</strong>. In an
              industry filled with commission-incentivized technicians and predatory emergency markups,
              we bring you right to the work face with genuine plumbing POV clarity.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 pt-2">
              <div className="space-y-2">
                <span className="text-xs text-[#2457F5] font-bold uppercase tracking-wider">
                  01 / Real Evidence
                </span>
                <h3 className="font-heading font-bold text-xl text-[#1E282E]">
                  Candid Camera Diagnoses
                </h3>
                <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal">
                  We show you exactly what is obstructing or fracturing your line before touching a tool.
                  You see the high-resolution video feed yourself.
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-xs text-[#2457F5] font-bold uppercase tracking-wider">
                  02 / Fair Pricing
                </span>
                <h3 className="font-heading font-bold text-xl text-[#1E282E]">
                  Transparent Rate Policy
                </h3>
                <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal">
                  Clear, upfront estimates for residential homeowners, property managers, and landlords.
                  No surprise line items.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('about')}
                className="text-sm font-bold text-[#2457F5] hover:text-[#18C6C1] flex items-center gap-1.5 transition-colors"
              >
                <span>Read Full Ethos &amp; Story</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: MAIN PLUMBING EXPERTISE — LIVE INSPECTOR
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#1E282E] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 sm:pb-12 hairline-b border-white/20">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#18C6C1] font-bold block mb-2">
                5 Verified Capabilities
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.08]">
                Main Plumbing Expertise
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-300 max-w-md font-normal leading-relaxed">
              Click any service to view real worksite details, diagnostic indicators, and technical equipment standards.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-8 sm:pt-12 items-stretch">
            {/* Left: Numbered Services List */}
            <div className="lg:col-span-6 divide-y divide-white/10">
              {VERIFIED_SERVICES.map((service, index) => {
                const isActive = activeExpertiseIndex === index;
                return (
                  <div
                    key={service.id}
                    onMouseEnter={() => setActiveExpertiseIndex(index)}
                    onClick={() => setActiveExpertiseIndex(index)}
                    className={`py-4 sm:py-5 cursor-pointer transition-all duration-200 group flex items-start justify-between gap-3 ${
                      isActive ? 'bg-white/5 pl-3 -ml-3 pr-2' : 'hover:pl-2'
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2.5 sm:gap-3">
                        <span
                          className={`text-sm font-semibold ${
                            isActive ? 'text-[#FFE16B]' : 'text-slate-400 group-hover:text-white'
                          }`}
                        >
                          0{index + 1}.
                        </span>
                        <h3
                          className={`font-heading font-bold text-xl sm:text-2xl tracking-tight transition-colors ${
                            isActive ? 'text-[#18C6C1]' : 'text-white group-hover:text-[#FFE16B]'
                          }`}
                        >
                          {service.name}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 line-clamp-1 pl-7 sm:pl-8 font-normal">
                        {service.tagline}
                      </p>
                    </div>

                    <div className="shrink-0 flex items-center pt-1.5">
                      <div
                        className={`w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center transition-all ${
                          isActive
                            ? 'bg-[#2457F5] text-white rotate-45'
                            : 'border border-white/20 text-slate-400 group-hover:border-white'
                        }`}
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right: Technical Inspector Window */}
            <div className="lg:col-span-6 bg-[#121A1F] border border-white/15 p-5 sm:p-8 flex flex-col justify-between">
              <div className="space-y-5">
                <div className="flex items-center justify-between gap-4 hairline-b border-white/15 pb-3">
                  <span className="text-xs font-semibold text-[#FFE16B]">
                    Service 0{activeExpertiseIndex + 1} · {activeService.name}
                  </span>
                  <span className="text-xs text-[#18C6C1] font-medium">
                    {activeService.urgencyLevel}
                  </span>
                </div>

                <div className="relative aspect-[16/9] overflow-hidden bg-black">
                  <img
                    src={activeService.image}
                    alt={activeService.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-[#2457F5] text-white px-2.5 py-1 text-xs font-semibold uppercase tracking-wider">
                    Plumbing POV Asset
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                  {activeService.summary}
                </p>

                <div className="space-y-1.5 pt-1">
                  <span className="text-xs text-[#18C6C1] uppercase tracking-wider font-semibold block">
                    Diagnostic Indicators:
                  </span>
                  <ul className="space-y-1 text-xs sm:text-sm text-slate-300 font-normal">
                    {activeService.diagnosticSigns.slice(0, 3).map((sign, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#FFE16B] font-bold">✓</span>
                        <span>{sign}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 hairline-t border-white/15 mt-6 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => onNavigate('services', activeService.id)}
                  className="text-xs sm:text-sm font-semibold text-[#FFE16B] hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <span>Detailed Specifications</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('contact')}
                  className="bg-[#2457F5] text-white px-4 py-2 font-bold text-xs uppercase tracking-wider hover:bg-[#1A42C2] transition-colors"
                >
                  REQUEST {activeService.shortName.toUpperCase()}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: RESIDENTIAL FOCUS & PROPERTY OVERVIEW
          ========================================================================= */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 hairline-b">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-6 relative aspect-[4/3] overflow-hidden bg-black">
            <img
              src="/images/service_rooter.jpg"
              alt="Residential rooter dispatch in Inland Empire"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-3 left-3 bg-[#1E282E] text-white p-3 max-w-xs text-xs">
              <p className="text-[#FFE16B] font-bold">Worksite Camera Feed</p>
              <p className="text-slate-300 text-xs mt-0.5 font-normal">
                Diagnosing lateral obstructions on residential properties.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-5 lg:pl-6">
            <span className="text-xs uppercase tracking-wider text-[#2457F5] font-bold block">
              Residential &amp; Commercial Focus
            </span>

            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl tracking-tight text-[#1E282E] leading-tight">
              Designed for Homeowners, Landlords &amp; Property Pros
            </h2>

            <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
              When a main line backs up or a copper pipe begins weeping behind drywall, you need
              immediate clarity, zero speculation, and a master tradesman who treats your home with care.
            </p>

            <div className="space-y-3.5 pt-1">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-[#2457F5] text-white flex items-center justify-center shrink-0 mt-0.5 rounded-xs">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-[#1E282E]">
                    Direct Master Plumber Communication
                  </h4>
                  <p className="text-sm text-slate-600 mt-0.5 font-normal">
                    No middlemen or commission sales reps. You speak directly with the team fixing your pipes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-[#2457F5] text-white flex items-center justify-center shrink-0 mt-0.5 rounded-xs">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-[#1E282E]">
                    Non-Destructive Diagnostic Commitment
                  </h4>
                  <p className="text-sm text-slate-600 mt-0.5 font-normal">
                    Fiber optic push cameras and ultrasonic acoustic sensors eliminate blind demolition.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('contact')}
                className="bg-[#2457F5] text-white px-6 py-3 font-bold text-xs uppercase tracking-wider hover:bg-[#1A42C2] transition-colors"
              >
                REQUEST DISPATCH
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: REGION PRESENTATION (IE & LA)
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#FFFDF7] hairline-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5 space-y-4 sm:space-y-6">
              <span className="text-xs uppercase tracking-wider text-[#2457F5] font-bold block">
                Regional Coverage
              </span>

              <h2 className="font-heading font-extrabold text-3xl sm:text-5xl tracking-tight text-[#1E282E] leading-tight">
                Inland Empire &amp; Los Angeles
              </h2>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                Dedicated dispatch across Riverside, San Bernardino, and greater Los Angeles County.
              </p>

              <div className="flex items-center gap-2 pt-1">
                <button
                  onClick={() => setSelectedRegion('IE')}
                  className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
                    selectedRegion === 'IE'
                      ? 'bg-[#2457F5] text-white'
                      : 'bg-slate-200 text-[#1E282E] hover:bg-slate-300'
                  }`}
                >
                  Inland Empire (IE)
                </button>
                <button
                  onClick={() => setSelectedRegion('LA')}
                  className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
                    selectedRegion === 'LA'
                      ? 'bg-[#2457F5] text-white'
                      : 'bg-slate-200 text-[#1E282E] hover:bg-slate-300'
                  }`}
                >
                  Los Angeles (LA)
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#1E282E] text-white p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4 hairline-b border-white/20 pb-3 mb-5">
                <h3 className="font-heading font-bold text-xl text-[#FFE16B]">
                  {selectedRegion === 'IE' ? 'Inland Empire Communities' : 'Los Angeles Communities'}
                </h3>
                <span className="text-xs px-2.5 py-1 bg-[#2457F5] text-white font-semibold">
                  Active Service Zone
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-4 text-sm font-normal">
                {(selectedRegion === 'IE' ? SERVICE_REGIONS[0].cities : SERVICE_REGIONS[1].cities).map(
                  (city, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#18C6C1] shrink-0" />
                      <span className="text-slate-200">{city}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: DIRECT CONVERSION BANNER
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#2457F5] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs uppercase tracking-wider text-[#FFE16B] font-bold">
                Direct Dispatch · Zero Fluff
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05]">
                Experiencing a Plumbing Emergency?
              </h2>
              <p className="text-base sm:text-lg text-slate-100 max-w-2xl font-normal leading-relaxed">
                Get honest work, fair pricing, and clear answers. Send your service request directly
                to MD Plumbing &amp; Rooter.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <button
                onClick={() => onNavigate('contact')}
                className="w-full bg-[#FFE16B] text-[#1E282E] px-6 py-4 font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-white transition-colors text-center cursor-pointer"
              >
                REQUEST SERVICE NOW
              </button>

              <button
                onClick={() => onNavigate('services')}
                className="w-full bg-transparent text-white px-6 py-3.5 font-bold text-xs sm:text-sm uppercase tracking-wider border border-white hover:bg-white/10 transition-colors text-center cursor-pointer"
              >
                VIEW ALL 5 SERVICES
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
