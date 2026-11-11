import React, { useState, useEffect, useRef } from 'react';
import { BrandLogo } from './BrandLogo';
import { VERIFIED_SERVICES, BRAND_INFO } from '../data/brand';
import { ChevronDown, ArrowUpRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPage: 'home' | 'services' | 'work' | 'about' | 'contact';
  onNavigate: (page: 'home' | 'services' | 'work' | 'about' | 'contact', serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnterServices = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setServicesOpen(true);
  };

  const handleMouseLeaveServices = () => {
    dropdownTimeoutRef.current = window.setTimeout(() => {
      setServicesOpen(false);
    }, 250);
  };

  // On home page, transparent over the cinematic hero until scrolled.
  // On all other pages (Services, Work, About, Contact), use a luxury solid dark background immediately!
  const isSolidNavbar = currentPage !== 'home' || isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
        isSolidNavbar
          ? 'bg-[#121A1F]/95 backdrop-blur-md border-b border-white/10 text-white py-2.5 sm:py-3.5 shadow-xl'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent text-white py-3 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between gap-2 sm:gap-6 w-full">
          {/* Zone 1: Official Bull Logo & Brand Mark */}
          <div
            onClick={() => {
              onNavigate('home');
              setMobileMenuOpen(false);
            }}
            className="cursor-pointer transition-opacity hover:opacity-90 shrink-0"
            role="button"
            tabIndex={0}
            aria-label="MD Plumbing & Rooter Home"
          >
            <BrandLogo variant="light" />
          </div>

          {/* Zone 2: Navigation Links (Desktop: Inter SemiBold 600) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[13px] font-semibold tracking-normal">
            <button
              onClick={() => onNavigate('home')}
              className={`relative py-1 transition-colors whitespace-nowrap shrink-0 hover:text-[#18C6C1] ${
                currentPage === 'home'
                  ? 'text-[#FFE16B] font-bold'
                  : 'text-slate-100 hover:text-white'
              }`}
            >
              Home
              {currentPage === 'home' && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#2457F5]" />
              )}
            </button>

            {/* Dropdown for Plumbing Services - UNCLIPPED & FULLY VISIBLE */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnterServices}
              onMouseLeave={handleMouseLeaveServices}
            >
              <button
                onClick={() => onNavigate('services')}
                className={`flex items-center gap-1.5 py-1 transition-colors whitespace-nowrap shrink-0 hover:text-[#18C6C1] ${
                  currentPage === 'services'
                    ? 'text-[#FFE16B] font-bold'
                    : 'text-slate-100 hover:text-white'
                }`}
                aria-expanded={servicesOpen}
              >
                <span>Plumbing Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesOpen ? 'rotate-180 text-[#18C6C1]' : ''
                  }`}
                />
              </button>

              {/* Submenu Dropdown Popover */}
              {servicesOpen && (
                <div
                  className="absolute top-full left-0 pt-3 w-80 z-[100] animate-fadeIn"
                  onMouseEnter={handleMouseEnterServices}
                  onMouseLeave={handleMouseLeaveServices}
                >
                  <div className="bg-[#121A1F] text-white border border-white/20 shadow-2xl p-2 divide-y divide-white/10 rounded-sm">
                    <div className="px-3 py-2 bg-[#2457F5]/25 flex items-center justify-between">
                      <p className="text-[11px] font-semibold text-[#18C6C1]">
                        5 Verified Services · IE &amp; LA
                      </p>
                      <span className="text-[10px] text-slate-300 font-medium">Plumbing POV</span>
                    </div>

                    <div className="py-1">
                      {VERIFIED_SERVICES.map((service) => (
                        <button
                          key={service.id}
                          onClick={() => {
                            setServicesOpen(false);
                            onNavigate('services', service.id);
                          }}
                          className="w-full text-left p-3 hover:bg-[#2457F5]/20 transition-colors flex items-center justify-between group"
                        >
                          <div>
                            <span className="font-heading font-semibold text-sm text-slate-100 group-hover:text-[#FFE16B] transition-colors block">
                              {service.name}
                            </span>
                            <span className="text-xs text-slate-400 line-clamp-1 block mt-0.5 font-normal">
                              {service.tagline}
                            </span>
                          </div>
                          <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#18C6C1] shrink-0 ml-2" />
                        </button>
                      ))}
                    </div>

                    <div className="p-2 bg-white/5">
                      <button
                        onClick={() => {
                          setServicesOpen(false);
                          onNavigate('services');
                        }}
                        className="w-full py-1.5 text-center text-xs font-semibold text-[#FFE16B] hover:text-white transition-colors"
                      >
                        View All Services &amp; Specifications →
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => onNavigate('work')}
              className={`relative py-1 transition-colors whitespace-nowrap shrink-0 hover:text-[#18C6C1] ${
                currentPage === 'work'
                  ? 'text-[#FFE16B] font-bold'
                  : 'text-slate-100 hover:text-white'
              }`}
            >
              Our Work
              {currentPage === 'work' && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#2457F5]" />
              )}
            </button>

            <button
              onClick={() => onNavigate('about')}
              className={`relative py-1 transition-colors whitespace-nowrap shrink-0 hover:text-[#18C6C1] ${
                currentPage === 'about'
                  ? 'text-[#FFE16B] font-bold'
                  : 'text-slate-100 hover:text-white'
              }`}
            >
              About
              {currentPage === 'about' && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#2457F5]" />
              )}
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className={`relative py-1 transition-colors whitespace-nowrap shrink-0 hover:text-[#18C6C1] ${
                currentPage === 'contact'
                  ? 'text-[#FFE16B] font-bold'
                  : 'text-slate-100 hover:text-white'
              }`}
            >
              Contact
              {currentPage === 'contact' && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#2457F5]" />
              )}
            </button>
          </nav>

          {/* Zone 3: CTA & Mobile Controls (Zero Overflow) */}
          <div className="flex items-center gap-2.5 sm:gap-4 shrink-0">
            {/* Instagram Social Trigger (Desktop only) */}
            <a
              href={BRAND_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:inline-flex items-center gap-1.5 text-xs font-semibold tracking-normal transition-colors px-3 py-1.5 border border-white/20 text-slate-200 hover:border-[#FFE16B] hover:text-[#FFE16B]"
            >
              <span>IG @mdplumbing_rooter</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Desktop CTA Button: Inter Bold (700) */}
            <button
              onClick={() => onNavigate('contact')}
              className="hidden sm:inline-flex bg-[#2457F5] text-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-[#1A42C2] transition-colors border border-[#18C6C1]/50 whitespace-nowrap shrink-0 cursor-pointer"
            >
              REQUEST SERVICE
            </button>

            {/* Mobile Compact CTA Button */}
            <button
              onClick={() => onNavigate('contact')}
              className="sm:hidden bg-[#2457F5] text-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider hover:bg-[#1A42C2] transition-colors border border-[#18C6C1]/50 whitespace-nowrap shrink-0 cursor-pointer"
            >
              DISPATCH
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 text-white hover:text-[#FFE16B] transition-colors shrink-0"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Clean, non-overflowing) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#121A1F] text-white hairline-t border-white/10 shadow-2xl max-h-[85vh] overflow-y-auto w-full">
          <div className="px-5 py-6 space-y-5">
            <div className="flex justify-between items-center pb-3 hairline-b border-white/15">
              <span className="text-xs uppercase tracking-wider text-[#18C6C1] font-semibold">
                Plumbing POV · IE &amp; LA
              </span>
              <span className="text-xs text-slate-400 font-medium">Honest Work &amp; Fair Pricing</span>
            </div>

            <div className="grid gap-1.5">
              <button
                onClick={() => {
                  onNavigate('home');
                  setMobileMenuOpen(false);
                }}
                className={`text-left text-lg font-heading font-bold py-2 ${
                  currentPage === 'home' ? 'text-[#FFE16B]' : 'text-white'
                }`}
              >
                01. Home
              </button>

              <button
                onClick={() => {
                  onNavigate('services');
                  setMobileMenuOpen(false);
                }}
                className={`text-left text-lg font-heading font-bold py-2 ${
                  currentPage === 'services' ? 'text-[#FFE16B]' : 'text-white'
                }`}
              >
                02. Plumbing Services
              </button>

              <div className="pl-3 border-l-2 border-[#18C6C1] space-y-2 py-1">
                {VERIFIED_SERVICES.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      onNavigate('services', s.id);
                      setMobileMenuOpen(false);
                    }}
                    className="block text-sm font-medium text-slate-300 hover:text-[#FFE16B] py-1 text-left w-full"
                  >
                    → {s.name}
                  </button>
                ))}
              </div>

              <button
                onClick={() => {
                  onNavigate('work');
                  setMobileMenuOpen(false);
                }}
                className={`text-left text-lg font-heading font-bold py-2 ${
                  currentPage === 'work' ? 'text-[#FFE16B]' : 'text-white'
                }`}
              >
                03. Our Work
              </button>

              <button
                onClick={() => {
                  onNavigate('about');
                  setMobileMenuOpen(false);
                }}
                className={`text-left text-lg font-heading font-bold py-2 ${
                  currentPage === 'about' ? 'text-[#FFE16B]' : 'text-white'
                }`}
              >
                04. About &amp; Ethos
              </button>

              <button
                onClick={() => {
                  onNavigate('contact');
                  setMobileMenuOpen(false);
                }}
                className={`text-left text-lg font-heading font-bold py-2 ${
                  currentPage === 'contact' ? 'text-[#FFE16B]' : 'text-white'
                }`}
              >
                05. Contact &amp; Dispatch
              </button>
            </div>

            <div className="pt-4 hairline-t border-white/15 space-y-3">
              <button
                onClick={() => {
                  onNavigate('contact');
                  setMobileMenuOpen(false);
                }}
                className="w-full bg-[#2457F5] text-white py-3.5 font-bold uppercase tracking-wider text-xs hover:bg-[#1A42C2]"
              >
                REQUEST SERVICE DISPATCH
              </button>

              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 border border-white/30 text-white font-semibold text-xs tracking-normal hover:bg-white hover:text-[#121A1F] transition-colors"
              >
                <span>Instagram @mdplumbing_rooter</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
