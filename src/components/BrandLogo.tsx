import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'auto';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  variant = 'auto',
}) => {
  const isLight = variant === 'light';

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none shrink-0 ${className}`}>
      {/* Official Verified MD Plumbing & Rooter Bull Emblem from Instagram */}
      <div className="relative shrink-0 w-8 h-8 sm:w-10 sm:h-10 overflow-hidden rounded-md border border-white/20 bg-[#121A1F] shadow-sm">
        <img
          src="/brand_logo.jpg"
          alt="MD Plumbing & Rooter Official Bull Logo"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>

      {/* Clean Barlow & Inter Typography */}
      <div className="flex flex-col justify-center min-w-0">
        <div className="flex items-baseline gap-1 leading-none">
          <span
            className={`font-heading font-extrabold text-sm sm:text-base tracking-tight whitespace-nowrap ${
              isLight ? 'text-white' : 'text-[#1E282E]'
            }`}
          >
            MD PLUMBING
          </span>
          <span
            className={`font-heading font-semibold text-[11px] sm:text-xs tracking-normal uppercase whitespace-nowrap hidden xs:inline ${
              isLight ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            &amp; ROOTER
          </span>
        </div>

        {/* Clean Inter Subtitle */}
        <div
          className={`hidden sm:flex items-center gap-1.5 text-[11px] font-medium tracking-normal mt-0.5 ${
            isLight ? 'text-slate-300' : 'text-slate-500'
          }`}
        >
          <span className="text-[#18C6C1] font-semibold">Plumbing POV</span>
          <span className="opacity-50">·</span>
          <span>IE &amp; LA</span>
        </div>
      </div>
    </div>
  );
};
