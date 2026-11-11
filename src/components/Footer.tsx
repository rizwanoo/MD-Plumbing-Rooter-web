import React from 'react';
import { BrandLogo } from './BrandLogo';
import { BRAND_INFO, VERIFIED_SERVICES, SERVICE_REGIONS } from '../data/brand';
import { ArrowUpRight, Instagram, MapPin, Check, Shield } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: 'home' | 'services' | 'work' | 'about' | 'contact', serviceId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#121A1F] text-[#FFFDF7] hairline-t border-t-white/10 overflow-hidden relative w-full">
      {/* Top Banner Ribbon */}
      <div className="bg-[#2457F5] text-white py-3 px-4 sm:px-8 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm font-semibold tracking-normal">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 bg-[#FFE16B] rounded-full" />
          <span>Proudly servicing all Inland Empire (IE) &amp; Los Angeles areas</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="italic font-normal">&ldquo;Honest work and fair pricing.&rdquo;</span>
          <span className="hidden md:inline text-[#FFE16B]">/</span>
          <a
            href={BRAND_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1 text-[#FFE16B] hover:underline"
          >
            {BRAND_INFO.instagramHandle} <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Brand Column (Col 1-5) */}
          <div className="lg:col-span-5 space-y-6">
            <BrandLogo variant="light" />

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-md font-normal">
              A straightforward, authentic plumbing contractor bringing true &ldquo;Plumbing POV&rdquo; clarity
              to Southern California property owners. Delivering honest diagnostics, upfront pricing, and lasting repairs.
            </p>

            <div className="space-y-2.5 pt-2">
              <div className="flex items-center gap-2.5 text-sm text-slate-300 font-medium">
                <Check className="w-4 h-4 text-[#18C6C1] shrink-0" />
                <span>Zero hidden fees or unnecessary upselling</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-300 font-medium">
                <Check className="w-4 h-4 text-[#18C6C1] shrink-0" />
                <span>Commercial-grade diagnostics &amp; clean installation</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-300 font-medium">
                <Check className="w-4 h-4 text-[#18C6C1] shrink-0" />
                <span>Dedicated service across IE and LA counties</span>
              </div>
            </div>

            {/* Official Instagram Link Block */}
            <div className="pt-3">
              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#FFFDF7] text-[#1E282E] px-5 py-3 font-heading font-bold text-xs uppercase tracking-wider hover:bg-[#FFE16B] transition-colors rounded-xs"
              >
                <Instagram className="w-4 h-4 text-[#2457F5]" />
                <span>View Authentic Work on Instagram</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services Column (Col 6-8) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-bold text-base text-[#18C6C1] uppercase tracking-wide">
              Verified Services
            </h4>
            <ul className="space-y-2.5 text-sm font-normal">
              {VERIFIED_SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => onNavigate('services', s.id)}
                    className="text-slate-300 hover:text-[#FFE16B] transition-colors text-left flex items-center justify-between w-full group py-0.5 cursor-pointer"
                  >
                    <span>{s.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#18C6C1]" />
                  </button>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('services')}
                className="text-xs font-semibold text-[#18C6C1] hover:underline uppercase tracking-wider cursor-pointer"
              >
                Explore Full Technical Specs →
              </button>
            </div>
          </div>

          {/* Coverage & Navigation (Col 9-12) */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <h4 className="font-heading font-bold text-base text-[#18C6C1] uppercase tracking-wide mb-3">
                Service Coverage Areas
              </h4>
              <div className="space-y-2.5 text-xs sm:text-sm text-slate-300 font-normal">
                <div>
                  <span className="font-semibold text-white block">Inland Empire (IE):</span>
                  <span>Riverside, San Bernardino, Rancho Cucamonga, Ontario, Corona, Fontana, Moreno Valley &amp; surrounding cities.</span>
                </div>
                <div>
                  <span className="font-semibold text-white block">Los Angeles Areas (LA):</span>
                  <span>LA Metro, San Gabriel Valley, South Bay corridor, Pasadena, Glendale &amp; greater LA basin.</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <h4 className="font-heading font-bold text-base text-[#18C6C1] uppercase tracking-wide mb-3">
                Navigation
              </h4>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-300 font-medium">
                <button onClick={() => onNavigate('home')} className="hover:text-white cursor-pointer">Home</button>
                <button onClick={() => onNavigate('services')} className="hover:text-white cursor-pointer">Services</button>
                <button onClick={() => onNavigate('work')} className="hover:text-white cursor-pointer">Our Work</button>
                <button onClick={() => onNavigate('about')} className="hover:text-white cursor-pointer">About</button>
                <button onClick={() => onNavigate('contact')} className="hover:text-[#FFE16B] font-bold cursor-pointer">Contact / Request</button>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={() => onNavigate('contact')}
                className="w-full bg-[#2457F5] text-white py-3.5 px-6 font-bold text-xs uppercase tracking-wider hover:bg-[#1A42C2] transition-colors border border-[#18C6C1]/40 rounded-xs cursor-pointer"
              >
                REQUEST SERVICE ONLINE
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-12 pb-6 hairline-t border-white/10 mt-12 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-normal">
          <div className="flex items-center gap-3">
            <span className="font-medium text-slate-300">MD PLUMBING &amp; ROOTER</span>
            <span>·</span>
            <span>All Rights Reserved</span>
            <span>·</span>
            <span>Inland Empire &amp; Los Angeles, CA</span>
          </div>
          <div className="flex items-center gap-3">
            <span>Plumbing POV</span>
            <span>·</span>
            <span className="text-[#FFE16B] font-medium">Honest Work &amp; Fair Pricing</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
