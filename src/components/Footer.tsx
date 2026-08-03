import React from 'react';
import { Phone, MessageSquare, MapPin, ShieldCheck, FileText, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { CompanyLogo } from './CompanyLogo';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 text-right">
          
          {/* Brand & Description Column */}
          <div className="lg:col-span-4 space-y-4">
            <CompanyLogo size="lg" />

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
              المؤسسة الوطنية المعتمدة لخدمات نقل وسحب المركبات بسطحات هيدروليكية متطورة وعادية، خدمات نقل العفش والأثاث، فتح السيارات المغلقة، والحساب البنكي المعتمد بشركة الراجحي (رقم السجل: {COMPANY_INFO.crNumber}).
            </p>

            {/* Verification Seals */}
            <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>موثق رسمياً في المركز السعودي للأعمال ووزارة التجارة</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200 font-black">
                <FileText className="w-4 h-4 text-amber-400 shrink-0" />
                <span>سجل تجاري موثق رقم: {COMPANY_INFO.crNumber}</span>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-base font-black text-white border-b border-slate-800 pb-2">
              روابط سريعة
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-semibold">
              {[
                { id: 'home', label: 'الرئيسية' },
                { id: 'services', label: 'خدمات النقل' },
                { id: 'subscriptions', label: 'الباقات' },
                { id: 'calculator', label: 'حاسبة المشوار' },
                { id: 'gallery', label: 'معرض الأعمال' },
                { id: 'about', label: 'عن المؤسسة' },
                { id: 'contact', label: 'اتصل بنا' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      setActiveTab(link.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-amber-400 transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>•</span>
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Offered Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-base font-black text-white border-b border-slate-800 pb-2">
              خدماتنا الرئيسية
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-medium text-slate-300">
              <li>• نقل وسحب السيارات (سطحات هيدروليك حمراء)</li>
              <li>• نقل العفش والأثاث بفك وتركيب</li>
              <li>• فتح أبواب المركبات المغلقة بدون خدش</li>
              <li>• خدمة اشتراك وشحن بطارية السيارة</li>
              <li>• خدمة تبديل وإصلاح الإطارات الميدانية</li>
              <li>• خطة الاشتراك الشهري (5 مشاوير / 799 ريال)</li>
            </ul>
          </div>

          {/* Contact & Map Links Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-base font-black text-white border-b border-slate-800 pb-2">
              التواصل المباشر والمناديب
            </h4>

            <div className="space-y-2 text-xs font-bold text-slate-200">
              {/* Mandoub 1 */}
              <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 space-y-1.5">
                <div className="text-amber-400 font-black flex items-center justify-between">
                  <span>مندوب 1:</span>
                  <span className="font-mono dir-ltr">{COMPANY_INFO.phone1Formatted}</span>
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  <a
                    href={`tel:${COMPANY_INFO.phone1}`}
                    className="py-1.5 rounded-lg bg-red-600 text-white font-black text-xs text-center flex items-center justify-center gap-1 dir-ltr"
                  >
                    <Phone className="w-3 h-3 text-amber-300" />
                    <span>اتصال</span>
                  </a>
                  <a
                    href={COMPANY_INFO.whatsappUrl1}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-1.5 rounded-lg bg-emerald-500 text-slate-950 font-black text-xs text-center flex items-center justify-center gap-1"
                  >
                    <MessageSquare className="w-3 h-3 fill-current text-slate-950" />
                    <span>واتساب</span>
                  </a>
                </div>
              </div>

              {/* Mandoub 2 */}
              <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 space-y-1.5">
                <div className="text-amber-400 font-black flex items-center justify-between">
                  <span>مندوب 2:</span>
                  <span className="font-mono dir-ltr">{COMPANY_INFO.phone2Formatted}</span>
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  <a
                    href={`tel:${COMPANY_INFO.phone2}`}
                    className="py-1.5 rounded-lg bg-red-600 text-white font-black text-xs text-center flex items-center justify-center gap-1 dir-ltr"
                  >
                    <Phone className="w-3 h-3 text-amber-300" />
                    <span>اتصال</span>
                  </a>
                  <a
                    href={COMPANY_INFO.whatsappUrl2}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-1.5 rounded-lg bg-emerald-500 text-slate-950 font-black text-xs text-center flex items-center justify-center gap-1"
                  >
                    <MessageSquare className="w-3 h-3 fill-current text-slate-950" />
                    <span>واتساب</span>
                  </a>
                </div>
              </div>

              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors pt-1 text-xs font-bold"
              >
                <MapPin className="w-4 h-4 text-red-500 shrink-0" />
                <span>صامطة - جيزان (موقعنا على خرائط جوجل)</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>

            {/* Payment Logos */}
            <div className="pt-2">
              <span className="block text-[11px] font-black text-slate-400 mb-2">طرق الدفع والتحصيل المقبولة:</span>
              <div className="flex items-center gap-2 flex-wrap text-xs font-bold text-white">
                <span className="px-2.5 py-1 bg-slate-900 rounded-lg border border-slate-800 text-emerald-400">💵 كاش</span>
                <span className="px-2.5 py-1 bg-slate-900 rounded-lg border border-slate-800 text-blue-400">💳 مدى</span>
                <span className="px-2.5 py-1 bg-slate-900 rounded-lg border border-slate-800 text-amber-300">📱 شبكة POS</span>
                <span className="px-2.5 py-1 bg-slate-900 rounded-lg border border-slate-800 text-purple-300">🏦 تحويل بنك الراجحي</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-slate-800 text-center space-y-2 text-xs text-slate-400 font-medium">
          <p>
            جميع الحقوق محفوظة © {new Date().getFullYear()} - <span className="text-white font-black">{COMPANY_INFO.name}</span> (سطحة صامطة جيزان - سجل {COMPANY_INFO.crNumber})
          </p>
        </div>

      </div>
    </footer>
  );
};
