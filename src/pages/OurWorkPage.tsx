import React, { useState } from 'react';
import { BRAND_INFO, WORK_HIGHLIGHTS, VERIFIED_SERVICES } from '../data/brand';
import { ArrowUpRight, Instagram, Camera, Wrench, Shield, Check, Eye } from 'lucide-react';

interface OurWorkPageProps {
  onNavigate: (page: 'home' | 'services' | 'work' | 'about' | 'contact', serviceId?: string) => void;
}

export const OurWorkPage: React.FC<OurWorkPageProps> = ({ onNavigate }) => {
  const [selectedHighlight, setSelectedHighlight] = useState(0);

  const currentWork = WORK_HIGHLIGHTS[selectedHighlight];

  return (
    <div className="w-full bg-[#FFFDF7] text-[#1E282E] pt-24 sm:pt-28 selection:bg-[#FFE16B] overflow-x-hidden">
      {/* Header Banner */}
      <section className="bg-[#121A1F] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 hairline-b border-white/20">
        <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono-data uppercase tracking-widest text-[#FFE16B] font-bold">
            <span className="bg-[#2457F5] text-white px-2 py-0.5">GENUINE JOB SITES</span>
            <span>·</span>
            <span>INLAND EMPIRE &amp; LOS ANGELES</span>
            <span>·</span>
            <span className="text-[#18C6C1]">PLUMBING POV</span>
          </div>

          <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-7xl tracking-tight uppercase leading-[0.92]">
            THE PLUMBING POV
            <br />
            <span className="text-[#FFE16B]">WORKMANSHIP &amp; EVIDENCE</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl leading-relaxed font-normal">
            We document our daily jobs on social media and on-site so property owners know exactly
            what is happening inside their plumbing lines. No filters, no sales pitch—just honest work.
          </p>

          <div className="pt-4">
            <a
              href={BRAND_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FFE16B] text-[#26343D] px-6 py-3.5 font-display font-black text-xs uppercase tracking-wider hover:bg-white transition-colors"
            >
              <Instagram className="w-4 h-4 text-[#2457F5]" />
              <span>Watch Official Reels @mdplumbing_rooter</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Philosophy & Service Commitment (Zero cards, full width editorial spread) */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto hairline-b">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="font-mono-data text-xs uppercase tracking-widest text-[#2457F5] font-bold">
              Service Commitment
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-[#26343D] leading-tight">
              HONEST WORK AND FAIR PRICING
            </h2>
            <p className="font-mono-data text-xs text-slate-500 uppercase">
              Brand Manifesto · Inland Empire &amp; Los Angeles
            </p>
          </div>

          <div className="lg:col-span-7 space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed lg:border-l lg:border-[#26343D]/15 lg:pl-8">
            <p>
              In plumbing, what you cannot see can easily be exaggerated. Too many homeowners and
              property managers are told their entire sewer line has collapsed when all it needs is a
              thorough mechanical rooter clearing and a cleanout installation.
            </p>
            <p className="font-semibold text-[#26343D]">
              Our entire &ldquo;Plumbing POV&rdquo; concept was built to change that:
            </p>
            <div className="space-y-4 pt-2 text-sm sm:text-base">
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#2457F5] mt-2 shrink-0" />
                <span>
                  <strong>Camera Inspection First:</strong> You see the inside of your pipes with
                  high-definition fiber optic monitors before any major repair recommendation is made.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#2457F5] mt-2 shrink-0" />
                <span>
                  <strong>Transparent Upfront Pricing:</strong> Honest quotes based on the actual
                  work required, not commission structures.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#2457F5] mt-2 shrink-0" />
                <span>
                  <strong>Master-Grade Tools:</strong> Heavy-duty drum machines, Navien tankless units,
                  and professional acoustic leak detection instrumentation.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Plumbing POV Project Explorer (Zero cards, open architectural layout) */}
      <section className="py-24 sm:py-32 bg-[#26343D] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 hairline-b border-white/20 pb-8">
            <div>
              <span className="font-mono-data text-xs uppercase tracking-widest text-[#18C6C1] font-bold block mb-2">
                Worksite Case Breakdowns
              </span>
              <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight">
                WORKBENCH &amp; SITE INSPECTOR
              </h2>
            </div>
            <div className="flex items-center gap-2">
              {WORK_HIGHLIGHTS.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedHighlight(idx)}
                  className={`px-4 py-2 font-mono-data text-xs uppercase font-bold transition-colors ${
                    selectedHighlight === idx
                      ? 'bg-[#FFE16B] text-[#26343D]'
                      : 'border border-white/20 text-white hover:border-white'
                  }`}
                >
                  POV 0{idx + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Full-Bleed Showcase Item */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 relative aspect-[16/10] overflow-hidden bg-black">
              <img
                src={currentWork.image}
                alt={currentWork.title}
                className="w-full h-full object-cover transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-[#2457F5] text-white text-xs font-mono-data px-3 py-1 font-bold uppercase tracking-wider">
                {currentWork.category}
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6 lg:pl-4">
              <div className="flex items-center gap-3 font-mono-data text-xs text-[#FFE16B]">
                <span>{currentWork.tag}</span>
                <span>/</span>
                <span className="text-[#18C6C1]">{currentWork.stat}</span>
              </div>

              <h3 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight">
                {currentWork.title}
              </h3>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                {currentWork.description}
              </p>

              <div className="p-4 bg-white/5 border border-white/10 text-xs text-slate-300 font-mono-data space-y-1">
                <p className="text-[#FFE16B] font-bold">PLUMBING POV TAKEAWAY:</p>
                <p>
                  Every residential lateral behaves differently. Proper tooling prevents recurring
                  sewer stoppages and avoids thousands in unneeded pipe excavation.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('contact')}
                  className="bg-[#2457F5] text-white px-7 py-3.5 font-display font-black text-xs uppercase tracking-wider hover:bg-[#1A42C2] transition-colors"
                >
                  REQUEST SERVICE EVALUATION
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment & Workmanship Standards (Zero cards, brutalist table layout) */}
      <section className="py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 hairline-b">
        <div className="max-w-3xl mb-12">
          <span className="font-mono-data text-xs uppercase tracking-widest text-[#2457F5] font-bold block mb-2">
            Tooling Standards
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-[#26343D]">
            THE GEAR BEHIND THE CRAFT
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-2">
            Professional plumbing requires industrial-grade machinery capable of handling tough roots,
            in-wall pressure tests, and tight residential crawlspaces.
          </p>
        </div>

        <div className="divide-y divide-[#26343D]/15 hairline-t hairline-b">
          <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
            <div className="md:col-span-3 font-mono-data text-xs font-bold text-[#2457F5] uppercase">
              Pipeline Cameras
            </div>
            <div className="md:col-span-4 font-display font-bold text-lg text-[#26343D] uppercase">
              HD Self-Leveling Push Cameras
            </div>
            <div className="md:col-span-5 text-sm text-slate-600">
              Captures clear full-color video deep within 3&rdquo; to 6&rdquo; sewer laterals to pinpoint roots,
              cracked clay, or heavy bellies.
            </div>
          </div>

          <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
            <div className="md:col-span-3 font-mono-data text-xs font-bold text-[#2457F5] uppercase">
              Mechanical Rooters
            </div>
            <div className="md:col-span-4 font-display font-bold text-lg text-[#26343D] uppercase">
              High-Torque Drum Cable Systems
            </div>
            <div className="md:col-span-5 text-sm text-slate-600">
              Industrial steel cables equipped with expanding blade cutters to aggressively clear
              tree root intrusion without damaging pipe walls.
            </div>
          </div>

          <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
            <div className="md:col-span-3 font-mono-data text-xs font-bold text-[#2457F5] uppercase">
              Acoustic Sensors
            </div>
            <div className="md:col-span-4 font-display font-bold text-lg text-[#26343D] uppercase">
              Digital Acoustic Leak Detectors
            </div>
            <div className="md:col-span-5 text-sm text-slate-600">
              Isolates the sound of pressurized water escaping underground or under concrete slabs,
              preventing invasive blind digging.
            </div>
          </div>

          <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
            <div className="md:col-span-3 font-mono-data text-xs font-bold text-[#2457F5] uppercase">
              Water Heating
            </div>
            <div className="md:col-span-4 font-display font-bold text-lg text-[#26343D] uppercase">
              Tankless &amp; High-Recovery Units
            </div>
            <div className="md:col-span-5 text-sm text-slate-600">
              Clean gas and copper line sizing, high-flow venting, and expansion tank safety
              calibrated to Southern California water pressure.
            </div>
          </div>
        </div>
      </section>

      {/* Official Social Embed Invitation */}
      <section className="py-20 bg-[#FFE16B] text-[#26343D] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <span className="font-mono-data text-xs text-[#2457F5] font-bold uppercase tracking-wider">
              Real Work Daily
            </span>
            <h3 className="font-display font-black text-2xl sm:text-4xl uppercase">
              FOLLOW MD PLUMBING &amp; ROOTER ON INSTAGRAM
            </h3>
            <p className="text-sm text-slate-800 max-w-xl">
              See authentic video clips of sewer cleans, leak fixes, and installation progress
              directly from job sites throughout the Inland Empire and Los Angeles.
            </p>
          </div>

          <a
            href={BRAND_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2457F5] text-white px-8 py-4 font-display font-black text-sm uppercase tracking-wider hover:bg-[#1A42C2] transition-colors shrink-0 flex items-center gap-2"
          >
            <span>VISIT @MDPLUMBING_ROOTER</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
};
