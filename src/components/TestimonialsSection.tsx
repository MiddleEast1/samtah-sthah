import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/companyData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#443dfc]/10 dark:bg-blue-950 text-[#443dfc] dark:text-blue-300 font-extrabold text-xs">
            <Star className="w-4 h-4 fill-current text-[#fed00e]" />
            تقييمات وثقة عملاء جيزان وصامطة
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0e0d39] dark:text-white">
            ماذا يقول عملاؤنا عن خدماتنا؟
          </h2>
          <p className="text-[#3d3c53] dark:text-slate-300 text-base font-medium">
            آراء حقيقية من عملائنا بعد تجربة خدمات السطحات، نقل العفش، والاشتراكات الشهرية
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((testi) => (
            <div
              key={testi.id}
              className="p-6 rounded-2xl bg-[#fafafb] dark:bg-slate-800/80 border border-[#e3e3ee] dark:border-slate-700/80 space-y-4 flex flex-col justify-between hover:shadow-xl transition-all duration-300 relative"
            >
              <Quote className="w-8 h-8 text-[#443dfc]/15 dark:text-blue-900/60 absolute top-4 left-4 pointer-events-none" />

              <div className="space-y-3 relative z-10">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-[#fed00e]">
                  {Array.from({ length: testi.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-[#0e0d39] dark:text-slate-200 leading-relaxed font-bold">
                  "{testi.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#e3e3ee] dark:border-slate-700/80 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-extrabold text-[#0e0d39] dark:text-white flex items-center gap-1">
                    <span>{testi.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#443dfc] dark:text-blue-400" />
                  </h4>
                  <span className="text-[11px] text-[#3d3c53] dark:text-slate-400 font-medium">
                    {testi.city} - {testi.vehicle}
                  </span>
                </div>
                <span className="text-[10px] text-[#0e0d39] font-bold bg-[#e3e3ee]/60 dark:bg-slate-700 px-2 py-0.5 rounded">
                  {testi.date}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
