import React from 'react';

export default function GrowthXLogo({ variant = 'dark', showTagline = false, className = '' }) {
  const isLight = variant === 'light'; // Light background -> dark text
  const textColor = isLight ? 'text-slate-900' : 'text-white';

  return (
    <div className={`inline-flex flex-col items-start font-heading select-none ${className}`}>
      <div className="flex items-center gap-2.5">
        
        {/* Brand Icon Mark */}
        <div className="relative w-9 h-9 rounded-xl bg-slate-950 flex items-center justify-center p-1.5 shadow-md border border-slate-800 flex-shrink-0 group-hover:scale-105 transition-transform">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M 28 28 L 52 72 L 64 72 L 40 28 Z" fill="#FFFFFF" />
            <path d="M 22 74 L 78 22 L 72 18 L 18 70 Z" fill="#F97316" />
          </svg>
        </div>

        {/* Brand Typography */}
        <div className="flex flex-col">
          <div className="flex items-baseline text-2xl font-extrabold tracking-wider leading-none">
            <span className={textColor}>GROWTH</span>
            
            {/* Stylized X */}
            <span className="relative inline-block ml-0.5 text-brand-orange">
              X
            </span>
          </div>

          {/* Underline accents matching official brand image */}
          <div className="flex items-center gap-1 mt-1 w-full h-[2.5px] rounded-full overflow-hidden">
            <div className="h-full w-3/4 bg-brand-orange" />
            <div className="h-full w-1/4 bg-brand-green" />
          </div>
        </div>

      </div>

      {showTagline && (
        <span className="text-[9px] uppercase tracking-widest font-semibold text-slate-400 mt-1.5 pl-11">
          Building the Future of AI-Powered Businesses
        </span>
      )}
    </div>
  );
}
