import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'auto';
  showSubtitle?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  variant = 'auto',
  showSubtitle = true,
}) => {
  const isLight = variant === 'light';

  return (
    <div className={`flex items-center gap-3 sm:gap-4 select-none shrink-0 group ${className}`}>
      {/* Impressive Large Official Bull Emblem Badge with Gradient Ring */}
      <div className="relative shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-xl p-[2px] bg-gradient-to-br from-[#2457F5] via-[#18C6C1] to-[#FFE16B] shadow-xl shadow-[#2457F5]/20 transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105">
        <div className="w-full h-full rounded-[10px] overflow-hidden bg-[#121A1F] flex items-center justify-center">
          <img
            src="/brand_logo.jpg"
            alt="MD Plumbing & Rooter Official Bull Logo"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="eager"
          />
        </div>
      </div>

      {/* Stylish, Bold Agency Typographic Identity */}
      <div className="flex flex-col justify-center min-w-0">
        <div className="flex items-baseline gap-1.5 leading-none">
          <span
            className={`font-heading font-black text-2xl sm:text-3xl tracking-tighter ${
              isLight ? 'text-white' : 'text-[#1E282E]'
            }`}
          >
            MD
          </span>
          <span className="font-heading font-black text-xl sm:text-2xl tracking-tight text-[#FFE16B]">
            PLUMBING
          </span>
          <span
            className={`font-heading font-bold text-xs sm:text-sm tracking-wider uppercase ${
              isLight ? 'text-[#18C6C1]' : 'text-[#2457F5]'
            }`}
          >
            &amp; ROOTER
          </span>
        </div>

        {/* Stylish Subtitle Pill & Regional Signature */}
        {showSubtitle && (
          <div className="flex items-center gap-2 mt-1 sm:mt-1.5">
            <span className="px-2 py-0.5 bg-[#2457F5] text-white font-bold text-[9px] sm:text-[10px] tracking-wider uppercase rounded-xs shadow-xs">
              PLUMBING POV
            </span>
            <span
              className={`text-[11px] sm:text-xs font-semibold tracking-wide uppercase ${
                isLight ? 'text-slate-200' : 'text-slate-600'
              }`}
            >
              IE · LOS ANGELES
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
