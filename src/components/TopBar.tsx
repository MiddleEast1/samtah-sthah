import React from 'react';
import { Phone, ShieldCheck, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface TopBarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export const TopBar: React.FC<TopBarProps> = ({ darkMode, setDarkMode }) => {
  return (
    <div className="bg-red-700 text-white text-xs sm:text-sm py-2 px-4 border-b border-red-800 transition-colors shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        {/* Left / Contact & Urgency Notice */}
        <div className="flex items-center space-x-3 space-x-reverse flex-wrap">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 font-black text-xs shadow-sm animate-pulse">
            📍 صامطة - جيزان | طوارئ 24/7
          </span>

          {/* Representative 1 */}
          <a
            href={`tel:${COMPANY_INFO.phone1}`}
            className="flex items-center gap-1 hover:text-amber-300 font-extrabold dir-ltr transition-colors bg-red-800/80 px-2 py-0.5 rounded border border-red-600/50"
            title="مندوب 1"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-amber-300 font-black text-[11px] me-1">مندوب 1:</span>
            <span>{COMPANY_INFO.phone1Formatted}</span>
          </a>

          {/* Representative 2 */}
          <a
            href={`tel:${COMPANY_INFO.phone2}`}
            className="flex items-center gap-1 hover:text-amber-300 font-extrabold dir-ltr transition-colors bg-red-800/80 px-2 py-0.5 rounded border border-red-600/50"
            title="مندوب 2"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-amber-300 font-black text-[11px] me-1">مندوب 2:</span>
            <span>{COMPANY_INFO.phone2Formatted}</span>
          </a>

          <span className="hidden lg:inline text-red-300">|</span>
          <span className="hidden lg:flex items-center gap-1 text-red-100 font-medium">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>نغطي كافة محافظات جيزان والمملكة</span>
          </span>
        </div>

        {/* Right / Government Verification & Theme Toggle */}
        <div className="flex items-center space-x-3 space-x-reverse text-xs">
          <span className="hidden md:flex items-center gap-1 text-white bg-red-900/60 px-2.5 py-1 rounded-md border border-red-600/50 font-bold">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>موثق بالمركز السعودي للأعمال (سجل {COMPANY_INFO.crNumber})</span>
          </span>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-1.5 rounded-lg bg-red-800 hover:bg-red-900 text-white font-bold transition-colors flex items-center gap-1 text-xs border border-red-600/50 cursor-pointer"
            title="تبديل المظهر"
          >
            {darkMode ? '☀️ فاتح' : '🌙 داكن'}
          </button>
        </div>
      </div>
    </div>
  );
};
