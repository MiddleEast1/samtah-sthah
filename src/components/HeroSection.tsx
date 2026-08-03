import React, { useState } from 'react';
import { Phone, MessageSquare, ShieldCheck, Star, ArrowLeft, Clock, MapPin, Zap, Truck, CheckCircle2, Maximize2, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { TripBookingWidget } from './TripBookingWidget';
import { CompanyLogo } from './CompanyLogo';

interface HeroSectionProps {
  openBookingModal: () => void;
  setActiveTab: (tab: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ setActiveTab }) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white pt-6 pb-16 lg:py-16 border-b border-slate-800">
      
      {/* Background Graphic Accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Main Banner Card Inspired by Official Image */}
        <div className="relative rounded-3xl bg-slate-900 border-2 border-slate-800 overflow-hidden shadow-2xl">
          {/* Angular Red Design Slice Accent */}
          <div className="absolute top-0 left-0 w-full lg:w-1/2 h-full bg-gradient-to-r from-red-700/20 via-slate-900/90 to-slate-900 pointer-events-none z-0" />

          <div className="relative z-10 p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left/Content Column */}
            <div className="lg:col-span-6 space-y-6 text-right">
              
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-600 text-white font-black text-xs shadow-md">
                  <Star className="w-3.5 h-3.5 fill-current text-amber-300" />
                  سطحة صامطة - مؤسسة محيط الشرق الأوسط للنقل
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-slate-200 font-extrabold text-xs border border-slate-700">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  سجل تجاري: {COMPANY_INFO.crNumber}
                </span>
              </div>

              {/* Title & Subtitle */}
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                  سطحة <span className="text-red-500">صامطة</span> جيزان
                </h1>
                <p className="text-lg sm:text-xl text-amber-300 font-extrabold">
                  خدمة نقل وسحب السيارات الموثوقة 24 ساعة - نحن في خدمتك أينما كنت
                </p>
              </div>

              {/* Feature Bullets Grid matching image */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs font-black text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                  <span>نقل آمن وسريع</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs font-black text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                  <span>خدمة 24/7</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs font-black text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                  <span>داخل صامطة وخارجها</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs font-black text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                  <span>أفضل الأسعار</span>
                </div>
              </div>

              {/* Dedicated Representatives Contact Cards */}
              <div className="pt-2 space-y-3">
                <div className="flex items-center justify-between text-xs font-black">
                  <span className="text-amber-300 flex items-center gap-1.5">
                    <Zap className="w-4 h-4 text-amber-400" />
                    <span>تواصل مباشر مع المناديب (0551678924 & 0507140630):</span>
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  
                  {/* Mandoub 1 */}
                  <div className="p-3.5 rounded-2xl bg-slate-950 border border-red-900/60 space-y-2 hover:border-red-600 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black text-white px-2 py-0.5 bg-red-600 rounded">مندوب 1</span>
                      <span className="text-xs text-amber-300 font-mono font-black dir-ltr">
                        {COMPANY_INFO.phone1Formatted}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-1.5 pt-1">
                      <a
                        href={`tel:${COMPANY_INFO.phone1}`}
                        className="py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-black text-xs text-center flex items-center justify-center gap-1 shadow dir-ltr"
                      >
                        <Phone className="w-3.5 h-3.5 text-amber-300" />
                        <span>اتصال</span>
                      </a>
                      <a
                        href={COMPANY_INFO.whatsappUrl1}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs text-center flex items-center justify-center gap-1 shadow"
                      >
                        <MessageSquare className="w-3.5 h-3.5 fill-current text-slate-950" />
                        <span>واتساب</span>
                      </a>
                    </div>
                  </div>

                  {/* Mandoub 2 */}
                  <div className="p-3.5 rounded-2xl bg-slate-950 border border-red-900/60 space-y-2 hover:border-red-600 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black text-white px-2 py-0.5 bg-red-600 rounded">مندوب 2</span>
                      <span className="text-xs text-amber-300 font-mono font-black dir-ltr">
                        {COMPANY_INFO.phone2Formatted}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-1.5 pt-1">
                      <a
                        href={`tel:${COMPANY_INFO.phone2}`}
                        className="py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-black text-xs text-center flex items-center justify-center gap-1 shadow dir-ltr"
                      >
                        <Phone className="w-3.5 h-3.5 text-amber-300" />
                        <span>اتصال</span>
                      </a>
                      <a
                        href={COMPANY_INFO.whatsappUrl2}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs text-center flex items-center justify-center gap-1 shadow"
                      >
                        <MessageSquare className="w-3.5 h-3.5 fill-current text-slate-950" />
                        <span>واتساب</span>
                      </a>
                    </div>
                  </div>

                </div>
              </div>

              {/* Package Banner Button */}
              <div className="pt-2">
                <button
                  onClick={() => setActiveTab('subscriptions')}
                  className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-white font-black text-xs shadow-lg flex items-center justify-between transition-all cursor-pointer border border-red-500/50"
                >
                  <span className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-amber-400 text-slate-950 text-[10px] font-black">باقة 799 ريال</span>
                    <span>اشترك في الباقات الشهرية لنقل السيارات (5 مشاوير)</span>
                  </span>
                  <ArrowLeft className="w-4 h-4 text-amber-300" />
                </button>
              </div>

            </div>

            {/* Right/Visual Image Column matching poster - Prominent Large Size */}
            <div className="lg:col-span-6 relative">
              <div 
                onClick={() => setIsLightboxOpen(true)}
                className="relative rounded-3xl overflow-hidden border-2 border-red-500 shadow-2xl group bg-slate-950 p-2 sm:p-3 cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={`${import.meta.env.BASE_URL}hero-poster.jpg`}
                    alt="بوستر سطحة صامطة - مؤسسة محيط الشرق الأوسط للنقل"
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500 rounded-xl bg-slate-950 shadow-inner"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Click to zoom icon badge */}
                  <div className="absolute top-3 left-3 px-3 py-1.5 rounded-xl bg-slate-950/80 border border-slate-700 text-amber-300 font-black text-xs flex items-center gap-1.5 shadow backdrop-blur-md group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>انقر لتكبير الصورة بالكامل</span>
                  </div>
                </div>
                
                {/* Overlay Badge */}
                <div className="mt-3 p-3.5 bg-slate-950/90 rounded-2xl border border-slate-800 backdrop-blur-md space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-black text-amber-300 flex items-center gap-1.5 text-sm">
                      <Truck className="w-5 h-5 text-red-500" />
                      سطحة صامطة - مؤسسة محيط الشرق الأوسط
                    </span>
                    <span className="px-2.5 py-1 bg-red-600 text-white text-xs font-black rounded-lg shadow">
                      طوارئ 24/7
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 font-extrabold leading-relaxed">
                    صورة وإعلان المؤسسة المعتمد لنقل وسحب جميع أنواع السيارات والمعدات داخل وخارج صامطة وجيزان.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Quick Booking Form & Calculation Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-4">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <h3 className="text-xl font-black text-white flex items-center gap-2">
                <Clock className="w-5 h-5 text-amber-400" />
                <span>سرعة استجابة فائقة في جميع مدن جيزان</span>
              </h3>
              <p className="text-sm text-slate-300 font-medium leading-relaxed">
                ينتشر أسطولنا الميداني في صامطة، جيزان، أحد المسارحة، أبو عريش، الطوال، وضواحي المنطقة للوصول إليك خلال 15 إلى 20 دقيقة كحد أقصى.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-center text-xs">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-red-500 font-black text-xl">15-20</div>
                  <div className="text-slate-400 font-bold mt-0.5">دقيقة للوصول</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-amber-400 font-black text-xl">24/7</div>
                  <div className="text-slate-400 font-bold mt-0.5">خدمة متواصلة</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-emerald-400 font-black text-xl">100%</div>
                  <div className="text-slate-400 font-bold mt-0.5">أمان ونقل موثوق</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-blue-400 font-black text-xl">799 ريال</div>
                  <div className="text-slate-400 font-bold mt-0.5">الباقة الشهرية</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <TripBookingWidget />
          </div>
        </div>

      </div>

      {/* Fullscreen Image Lightbox Modal */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center space-y-4">
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-2 right-2 sm:-top-10 sm:-right-4 w-11 h-11 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110 z-10 cursor-pointer"
              title="إغلاق"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="overflow-auto max-h-[80vh] rounded-2xl border-2 border-red-500 shadow-2xl bg-slate-900 p-2">
              <img
                  src={`${import.meta.env.BASE_URL}hero-poster.jpg`}
                alt="بوستر سطحة صامطة بحجم كامل"
                className="w-full h-auto object-contain rounded-xl max-h-[80vh] mx-auto"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            <div className="text-center text-amber-300 font-extrabold text-sm sm:text-base bg-slate-900/90 px-6 py-2 rounded-full border border-slate-700">
              سطحة صامطة - مؤسسة محيط الشرق الأوسط للنقل (0551678924 / 0507140630)
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

