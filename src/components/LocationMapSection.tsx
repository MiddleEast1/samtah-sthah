import React from 'react';
import { MapPin, Navigation, ExternalLink, Phone, MessageSquare, Clock, Building } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const LocationMapSection: React.FC = () => {
  return (
    <section id="location-map" className="py-16 sm:py-20 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-extrabold text-xs">
            <MapPin className="w-4 h-4 text-amber-500" />
            موقعنا الجغرافي وخريطة الوصول
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
            موقع المركز الرئيسي في صامطة - جيزان
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base font-medium">
            مركز خدماتنا الرئيسي يتوسط محافظة صامطة لسرعة الانطلاق والوصول لجميع محافظات جيزان
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Location Info Card */}
          <div className="lg:col-span-5 space-y-6 bg-slate-50 dark:bg-slate-800/80 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-700">
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md">
                  <Building className="w-6 h-6 text-amber-300" />
                </div>
                <div>
                  <h3 className="font-extrabold text-lg text-slate-900 dark:text-white">
                    {COMPANY_INFO.name}
                  </h3>
                  <p className="text-xs text-blue-600 dark:text-blue-400 font-bold">
                    فرع صامطة والمنطقة الصناعية - جيزان
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-2 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <span>{COMPANY_INFO.address}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-amber-500 shrink-0" />
                  <span>ساعات العمل: {COMPANY_INFO.workingHours}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                  <span className="dir-ltr text-right font-bold">{COMPANY_INFO.phoneFormatted}</span>
                </div>
              </div>
            </div>

            {/* Direct Google Maps Link Button */}
            <div className="pt-4 space-y-2">
              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 transition-all"
              >
                <Navigation className="w-5 h-5 text-amber-300" />
                <span>فتح الموقع مباشرة في تطبيق Google Maps</span>
                <ExternalLink className="w-4 h-4 opacity-80" />
              </a>

              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>طلب موقع السطحة الأقرب إليك عبر الواتساب</span>
              </a>
            </div>

          </div>

          {/* Interactive Google Map Embed */}
          <div className="lg:col-span-7 h-[380px] sm:h-[450px] rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-slate-700 shadow-xl relative">
            <iframe
              title="موقع سطحة صامطة جيزان على خرائط جوجل"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.755!2d42.946!3d16.595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTY_MzUnNDIuMCJOIDQywrA1Nic0NS42IkU!5e0!3m2!1sar!2ssa!4v1700000000000!5m2!1sar!2ssa"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter saturate-110"
            />

            {/* Map Overlay Badge */}
            <div className="absolute bottom-4 right-4 bg-slate-900/90 text-white p-3 rounded-xl backdrop-blur-md border border-white/10 text-xs font-bold flex items-center gap-2 shadow-lg">
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
              <span>فرع صامطة / جيزان - خدمة متوفرة الآن</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
