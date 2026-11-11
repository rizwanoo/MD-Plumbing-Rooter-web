import React, { useEffect, useRef } from 'react';
import { VERIFIED_SERVICES, BRAND_INFO } from '../data/brand';
import { ArrowUpRight, Check, AlertCircle, Wrench, Shield, ChevronDown } from 'lucide-react';

interface ServicesPageProps {
  initialServiceId?: string;
  onNavigate: (page: 'home' | 'services' | 'work' | 'about' | 'contact', serviceId?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  initialServiceId,
  onNavigate,
}) => {
  const serviceRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    if (initialServiceId && serviceRefs.current[initialServiceId]) {
      serviceRefs.current[initialServiceId]?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [initialServiceId]);

  return (
    <div className="w-full bg-[#FFFDF7] text-[#1E282E] pt-24 sm:pt-28 selection:bg-[#FFE16B] overflow-x-hidden">
      {/* Header Banner */}
      <section className="bg-[#121A1F] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 hairline-b border-white/20">
        <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono-data uppercase tracking-widest text-[#FFE16B] font-bold">
            <span className="bg-[#2457F5] text-white px-2 py-0.5">CALIFORNIA TRADE</span>
            <span>·</span>
            <span>INLAND EMPIRE &amp; LOS ANGELES</span>
            <span>·</span>
            <span className="text-[#18C6C1]">PLUMBING POV</span>
          </div>

          <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-7xl tracking-tight uppercase leading-[0.92]">
            VERIFIED PLUMBING
            <br />
            <span className="text-[#FFE16B]">SERVICES &amp; CAPABILITIES</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl leading-relaxed font-normal">
            Straightforward, camera-verified plumbing solutions. We present the exact scope of our
            verified service offerings with transparent diagnostic procedures and fair pricing.
          </p>

          {/* Quick Anchor Bar */}
          <div className="pt-6 flex flex-wrap gap-2 text-xs font-mono-data uppercase tracking-wider">
            {VERIFIED_SERVICES.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => {
                  serviceRefs.current[s.id]?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-3.5 py-2 border border-white/30 text-white hover:border-[#FFE16B] hover:text-[#FFE16B] transition-colors"
              >
                0{idx + 1}. {s.shortName}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services List: Full-Width Editorial Sections (Zero Cards!) */}
      <div>
        {VERIFIED_SERVICES.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <article
              key={service.id}
              ref={(el) => {
                serviceRefs.current[service.id] = el;
              }}
              className={`py-24 sm:py-32 hairline-b ${
                isEven ? 'bg-[#FFFDF7]' : 'bg-[#E5F7F2]/40'
              }`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Editorial Header Row */}
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 pb-8 hairline-b border-[#26343D]/15 mb-12">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono-data text-2xl sm:text-3xl font-black text-[#2457F5]">
                      0{index + 1}
                    </span>
                    <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-[#26343D] uppercase">
                      {service.name}
                    </h2>
                  </div>
                  <div className="flex items-center gap-3 font-mono-data text-xs uppercase tracking-wider">
                    <span className="px-2.5 py-1 bg-[#2457F5] text-white font-bold">
                      {service.urgencyLevel}
                    </span>
                    <span className="text-slate-500">IE &amp; LA Coverage</span>
                  </div>
                </div>

                {/* Main Asymmetric Split Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                  {/* Left Column: Image & Technical Spec */}
                  <div className="lg:col-span-6 space-y-6">
                    <div className="relative aspect-[16/10] overflow-hidden bg-black group">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute bottom-3 left-3 bg-[#26343D] text-[#FFE16B] text-[11px] font-mono-data px-3 py-1 uppercase tracking-wider font-bold">
                        Plumbing POV Worksite Asset
                      </div>
                    </div>

                    <div className="p-4 bg-[#26343D] text-white text-xs font-mono-data space-y-1">
                      <p className="text-[#18C6C1] uppercase font-bold tracking-wider">
                        Technical Equipment Standard:
                      </p>
                      <p className="text-slate-300 leading-normal">{service.technicalSpecs}</p>
                    </div>
                  </div>

                  {/* Right Column: Detailed Scope, Symptoms & Conversion */}
                  <div className="lg:col-span-6 space-y-8">
                    <div>
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-[#26343D] uppercase">
                        {service.tagline}
                      </h3>
                      <p className="text-base sm:text-lg text-slate-700 leading-relaxed mt-4">
                        {service.summary}
                      </p>
                    </div>

                    {/* Common Warning Signs */}
                    <div className="space-y-3 pt-2">
                      <h4 className="font-mono-data text-xs uppercase tracking-wider text-[#2457F5] font-bold">
                        Symptoms That Require Immediate Service:
                      </h4>
                      <ul className="space-y-2 text-sm text-slate-700">
                        {service.diagnosticSigns.map((sign, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span className="text-[#2457F5] font-bold text-sm">✓</span>
                            <span>{sign}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Scope of Work Breakdown */}
                    <div className="space-y-3 pt-2 hairline-t border-[#26343D]/15">
                      <h4 className="font-mono-data text-xs uppercase tracking-wider text-[#2457F5] font-bold pt-4">
                        Standard Service Scope:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                        {service.scopePoints.map((point, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-[#18C6C1] mt-1.5 shrink-0" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Direct Action Trigger */}
                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      <button
                        onClick={() => onNavigate('contact', service.id)}
                        className="bg-[#2457F5] text-white px-7 py-3.5 font-display font-black text-xs uppercase tracking-wider hover:bg-[#1A42C2] transition-colors flex items-center gap-2 border border-[#18C6C1]/50"
                      >
                        <span>BOOK {service.shortName.toUpperCase()} SERVICE</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>

                      <a
                        href={BRAND_INFO.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono-data uppercase tracking-wider text-slate-600 hover:text-[#2457F5] flex items-center gap-1 transition-colors"
                      >
                        <span>Watch {service.shortName} on Instagram</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Bottom Service Guarantee Statement */}
      <section className="py-20 bg-[#26343D] text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <span className="font-mono-data text-xs text-[#FFE16B] font-bold uppercase tracking-wider">
              No High-Pressure Sales
            </span>
            <h3 className="font-display font-black text-2xl sm:text-4xl uppercase">
              HONEST WORK AND FAIR PRICING GUARANTEE
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              We provide transparent assessments of your plumbing system. Serving residential and
              commercial properties in the Inland Empire and Los Angeles.
            </p>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="bg-[#FFE16B] text-[#26343D] px-8 py-4 font-display font-black text-sm uppercase tracking-wider hover:bg-white transition-colors shrink-0"
          >
            REQUEST SERVICE DISPATCH
          </button>
        </div>
      </section>
    </div>
  );
};
