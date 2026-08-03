import React, { useState } from 'react';
import { Phone, MessageSquare, Menu, X, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { CompanyLogo } from './CompanyLogo';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  openBookingModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, openBookingModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'الرئيسية' },
    { id: 'services', label: 'خدماتنا' },
    { id: 'subscriptions', label: 'الباقات' },
    { id: 'calculator', label: 'حاسبة المشوار' },
    { id: 'gallery', label: 'معرض الأعمال' },
    { id: 'about', label: 'عن المؤسسة' },
    { id: 'contact', label: 'تواصل معنا' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 text-white backdrop-blur-md shadow-lg border-b border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Company Brand & Logo */}
          <div 
            onClick={() => handleNavClick('home')}
            className="cursor-pointer group"
          >
            <CompanyLogo size="md" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 space-x-reverse">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3.5 py-2 rounded-xl text-sm font-black transition-all relative cursor-pointer ${
                    isActive
                      ? 'text-white bg-red-600 shadow-md shadow-red-600/20'
                      : 'text-slate-200 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {link.label}
                  {link.id === 'subscriptions' && (
                    <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400"></span>
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* CTAs / Contact Actions */}
          <div className="hidden sm:flex items-center gap-2">
            <a
              href={COMPANY_INFO.whatsappUrl1}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs shadow-md transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current text-slate-950" />
              <span>مندوب 1</span>
            </a>

            <a
              href={COMPANY_INFO.whatsappUrl2}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs shadow-md transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current text-slate-950" />
              <span>مندوب 2</span>
            </a>

            <button
              onClick={openBookingModal}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs shadow-md transition-all border border-amber-300 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-slate-950" />
              <span>اطلب سطحة</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={COMPANY_INFO.whatsappUrl1}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-emerald-500 text-slate-950 shadow-sm"
              title="تواصل واتساب مندوب 1"
            >
              <MessageSquare className="w-5 h-5 fill-current" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-800 text-slate-100 hover:bg-slate-700 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200 shadow-xl">
          <div className="grid gap-1">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-right px-4 py-3 rounded-xl font-extrabold text-base transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-red-600 text-white'
                      : 'text-slate-200 hover:bg-slate-800'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.id === 'subscriptions' && (
                    <span className="px-2 py-0.5 text-xs bg-amber-400 text-slate-950 rounded-md font-black">
                      799 ريال
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Mobile Contact Numbers Grid */}
          <div className="pt-3 border-t border-slate-800 space-y-2">
            <div className="text-xs font-black text-amber-300 text-center">أرقام التواصل والتوجيه الفوري:</div>
            <div className="grid grid-cols-2 gap-2">
              <a
                href={`tel:${COMPANY_INFO.phone1}`}
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-red-600 text-white font-black text-xs shadow-sm"
              >
                <Phone className="w-4 h-4 text-amber-300" />
                <span>مندوب 1 ({COMPANY_INFO.phone1Formatted})</span>
              </a>
              <a
                href={`tel:${COMPANY_INFO.phone2}`}
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-red-600 text-white font-black text-xs shadow-sm"
              >
                <Phone className="w-4 h-4 text-amber-300" />
                <span>مندوب 2 ({COMPANY_INFO.phone2Formatted})</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
