import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';
import { FAQS, COMPANY_INFO } from '../data/companyData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 sm:py-20 bg-[#fafafb] dark:bg-slate-900/50 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#443dfc]/10 dark:bg-blue-950 text-[#443dfc] dark:text-blue-300 font-extrabold text-xs">
            <HelpCircle className="w-4 h-4 text-[#fed00e]" />
            الأسئلة الشائعة والإجابات
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0e0d39] dark:text-white">
            كل ما تود معرفته عن خدماتنا
          </h2>
          <p className="text-[#3d3c53] dark:text-slate-300 text-base font-medium">
            إجابات واضحة ومباشرة عن أسعار السطحات، شروط باقة 799 ريال، وفتح الأبواب المغلقة
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-white dark:bg-slate-800 border border-[#e3e3ee] dark:border-slate-700 overflow-hidden shadow-sm transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full text-right p-5 sm:p-6 font-black text-[#0e0d39] dark:text-white text-base sm:text-lg flex items-center justify-between gap-4 hover:text-[#443dfc] dark:hover:text-blue-400 transition-colors"
                >
                  <span className="leading-snug">{faq.question}</span>
                  <div className={`p-2 rounded-xl bg-[#fafafb] dark:bg-slate-700 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#443dfc]/10 text-[#443dfc]' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-sm text-[#3d3c53] dark:text-slate-300 font-bold leading-relaxed border-t border-[#e3e3ee] dark:border-slate-700/80 pt-4 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Ask on WhatsApp CTA */}
        <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-[#443dfc] text-white text-center space-y-4 shadow-xl">
          <h3 className="text-xl font-black text-[#fed00e]">
            لديك سؤال آخر أو ترغب في الاستفسار فوراً؟
          </h3>
          <p className="text-xs sm:text-sm text-blue-100 font-semibold">
            فريق الدعم والخدمة الميدانية متواجد على الواتساب 24/7 للإجابة عن كافّة الاستفسارات وتحديد موقع السطحة.
          </p>
          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#fed00e] hover:bg-[#ebd00e] text-[#0e0d39] font-black text-sm shadow-md transition-all"
          >
            <MessageSquare className="w-4 h-4 fill-current text-[#0e0d39]" />
            <span>تواصل معنا عبر الواتساب (0551678924)</span>
          </a>
        </div>

      </div>
    </section>
  );
};
