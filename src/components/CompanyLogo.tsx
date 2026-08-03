import React from 'react';

interface CompanyLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtext?: boolean;
}

export const CompanyLogo: React.FC<CompanyLogoProps> = ({
  className = '',
  size = 'md',
  showSubtext = true
}) => {
  const sizeClasses = {
    sm: { icon: 'w-8 h-8', title: 'text-base', sub: 'text-[9px]', wrapper: 'gap-2' },
    md: { icon: 'w-11 h-11', title: 'text-xl', sub: 'text-[11px]', wrapper: 'gap-2.5' },
    lg: { icon: 'w-14 h-14', title: 'text-2xl', sub: 'text-xs', wrapper: 'gap-3' }
  }[size];

  return (
    <div className={`flex items-center ${sizeClasses.wrapper} ${className} dir-rtl select-none`}>
      {/* Emblem Icon */}
      <div className={`relative shrink-0 ${sizeClasses.icon} rounded-2xl bg-gradient-to-br from-red-600 via-red-700 to-red-900 border-2 border-amber-400/80 shadow-lg shadow-red-950/40 flex items-center justify-center overflow-hidden group`}>
        {/* Decorative background glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-transparent opacity-60" />
        
        {/* Tow Truck SVG Illustration */}
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-3/4 h-3/4 text-white z-10 drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
        >
          {/* Truck Bed & Chassis */}
          <path
            d="M6 42H58V46C58 47.1046 57.1046 48 56 48H8C6.89543 48 6 47.1046 6 46V42Z"
            fill="#FED00E"
          />
          {/* Cab Body */}
          <path
            d="M6 24C6 22.8954 6.89543 22 8 22H26C27.1046 22 28 22.8954 28 24V42H6V24Z"
            fill="white"
          />
          {/* Slanted Flatbed Ramp */}
          <path
            d="M28 32L58 28V42H28V32Z"
            fill="#E11D48"
          />
          {/* Cab Window */}
          <path
            d="M10 25H22V32H10V25Z"
            fill="#0F172A"
          />
          {/* Emergency Amber Light */}
          <rect x="12" y="19" width="10" height="3" rx="1.5" fill="#F59E0B" />
          {/* Wheels */}
          <circle cx="16" cy="46" r="6" fill="#0F172A" stroke="#F59E0B" strokeWidth="2" />
          <circle cx="16" cy="46" r="2" fill="white" />
          <circle cx="48" cy="46" r="6" fill="#0F172A" stroke="#F59E0B" strokeWidth="2" />
          <circle cx="48" cy="46" r="2" fill="white" />
          {/* Loaded Car Silhouette on Bed */}
          <path
            d="M32 26L38 20H48L54 26H32Z"
            fill="#F1F5F9"
            opacity="0.9"
          />
        </svg>

        {/* Glossy top highlight */}
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/25 to-transparent pointer-events-none" />
      </div>

      {/* Typography */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className={`font-black ${sizeClasses.title} text-white tracking-tight leading-none drop-shadow-sm`}>
            سطحة <span className="text-red-500">صامطة</span>
          </span>
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shrink-0" />
        </div>
        {showSubtext && (
          <span className={`${sizeClasses.sub} text-amber-300 font-extrabold tracking-tight mt-0.5 opacity-95`}>
            مؤسسة محيط الشرق الأوسط للنقل
          </span>
        )}
      </div>
    </div>
  );
};
