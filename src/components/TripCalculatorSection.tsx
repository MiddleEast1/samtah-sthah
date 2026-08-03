import React, { useState } from 'react';
import { Calculator, Send, MapPin, AlertTriangle, CheckCircle, ArrowRightLeft, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const TripCalculatorSection: React.FC = () => {
  const [fromLocation, setFromLocation] = useState('صامطة');
  const [toLocation, setToLocation] = useState('جيزان');
  const [serviceCategory, setServiceCategory] = useState<'towing' | 'furniture' | 'unlock' | 'battery' | 'tire'>('towing');
  const [isBroken, setIsBroken] = useState(true);

  // Estimation matrix
  const getEstimatedPrice = () => {
    let base = 120;
    if (serviceCategory === 'furniture') base = 280;
    if (serviceCategory === 'unlock') base = 100;
    if (serviceCategory === 'battery') base = 70;
    if (serviceCategory === 'tire') base = 80;

    // Check city distance factor
    const from = fromLocation.trim();
    const to = toLocation.trim();

    if (from !== to) {
      if ((from === 'صامطة' && to === 'جيزان') || (from === 'جيزان' && to === 'صامطة')) {
        base = Math.max(base, 150);
      } else if ((from === 'صامطة' && to === 'صبيا') || (from === 'صبيا' && to === 'صامطة')) {
        base = Math.max(base, 220);
      } else if ((from === 'صامطة' && to === 'بيش') || (from === 'بيش' && to === 'صامطة')) {
        base = Math.max(base, 320);
      } else {
        base += 40;
      }
    }

    if (isBroken && serviceCategory === 'towing') {
      base += 30; // Extra care for stalled/accident cars
    }

    return base;
  };

  const estPrice = getEstimatedPrice();

  const handleBookWithEstimate = () => {
    const text = `السلام عليكم، أرغب في حجز مشوار *${serviceCategory === 'towing' ? 'سطحة نقل سيارة' : serviceCategory === 'furniture' ? 'نقل عفش' : 'خدمة طوارئ'}* من *${fromLocation}* إلى *${toLocation}*.\nحالة المركبة: ${isBroken ? 'عطلانة/مصدمة' : 'صالحة'}.\nالتكلفة المبدئية بالحاسبة: حوالي ${estPrice} ريال سعودي. أرجو تأكيد الموعد والوصول الفوري.`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encoded}`, '_blank');
  };

  return (
    <section id="calculator" className="py-16 sm:py-20 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#443dfc]/10 dark:bg-blue-950 text-[#443dfc] dark:text-blue-300 font-extrabold text-xs">
            <Calculator className="w-4 h-4 text-[#fed00e]" />
            حاسبة المشوار والتكلفة التقديرية
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0e0d39] dark:text-white">
            احسب تكلفة مشوارك التقديرية فوراً
          </h2>
          <p className="text-[#3d3c53] dark:text-slate-300 text-base font-medium">
            اختر نقطة الانطلاق والوصول وحالة السيارة لمعرفة التكلفة التقديرية وحجز السطحة فوراً عبر الواتساب
          </p>
        </div>

        {/* Calculator Card */}
        <div className="bg-[#fafafb] dark:bg-slate-800/90 rounded-3xl p-6 sm:p-10 border border-[#e3e3ee] dark:border-slate-700 shadow-xl space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Service Type Selection */}
            <div className="md:col-span-2">
              <label className="block text-xs font-extrabold text-[#0e0d39] dark:text-slate-300 mb-2">
                اختر نوع الخدمة:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {[
                  { id: 'towing', label: 'سطحة سيارات' },
                  { id: 'furniture', label: 'نقل عفش' },
                  { id: 'unlock', label: 'فتح سيارة مغلقة' },
                  { id: 'battery', label: 'اشتراك بطارية' },
                  { id: 'tire', label: 'تبديل إطارات' },
                ].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setServiceCategory(s.id as any)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-black transition-all ${
                      serviceCategory === s.id
                        ? 'bg-[#443dfc] text-white shadow-md'
                        : 'bg-white dark:bg-slate-700 text-[#0e0d39] dark:text-slate-300 border border-[#e3e3ee] dark:border-slate-600'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* From Input */}
            <div>
              <label className="block text-xs font-extrabold text-[#0e0d39] dark:text-slate-300 mb-1.5">
                نقطة الانطلاق (من):
              </label>
              <input
                type="text"
                value={fromLocation}
                onChange={(e) => setFromLocation(e.target.value)}
                placeholder="صامطة، جيزان، أبا العريش..."
                className="w-full px-4 py-3 rounded-xl border border-[#e3e3ee] dark:border-slate-600 bg-white dark:bg-slate-900 text-[#0e0d39] dark:text-white text-sm font-bold outline-none focus:ring-2 focus:ring-[#443dfc]"
              />
            </div>

            {/* To Input */}
            <div>
              <label className="block text-xs font-extrabold text-[#0e0d39] dark:text-slate-300 mb-1.5">
                وجهة الوصول (إلى):
              </label>
              <input
                type="text"
                value={toLocation}
                onChange={(e) => setToLocation(e.target.value)}
                placeholder="جيزان، الصناعية، الورشة..."
                className="w-full px-4 py-3 rounded-xl border border-[#e3e3ee] dark:border-slate-600 bg-white dark:bg-slate-900 text-[#0e0d39] dark:text-white text-sm font-bold outline-none focus:ring-2 focus:ring-[#443dfc]"
              />
            </div>

            {/* Car Condition Toggle */}
            {serviceCategory === 'towing' && (
              <div className="md:col-span-2">
                <label className="block text-xs font-extrabold text-[#0e0d39] dark:text-slate-300 mb-2">
                  حالة السيارة المراد نقلها:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setIsBroken(true)}
                    className={`py-3 px-4 rounded-xl text-xs font-black border transition-all flex items-center justify-center gap-2 ${
                      isBroken
                        ? 'bg-rose-50 dark:bg-rose-950 border-rose-500 text-rose-700 dark:text-rose-300'
                        : 'bg-white dark:bg-slate-900 border-[#e3e3ee] dark:border-slate-700 text-[#0e0d39] dark:text-slate-300'
                    }`}
                  >
                    <AlertTriangle className="w-4 h-4 text-rose-500" />
                    <span>عطلانة / مصدمة (سطحة هيدروليك)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsBroken(false)}
                    className={`py-3 px-4 rounded-xl text-xs font-black border transition-all flex items-center justify-center gap-2 ${
                      !isBroken
                        ? 'bg-emerald-50 dark:bg-emerald-950 border-emerald-500 text-emerald-700 dark:text-emerald-300'
                        : 'bg-white dark:bg-slate-900 border-[#e3e3ee] dark:border-slate-700 text-[#0e0d39] dark:text-slate-300'
                    }`}
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    <span>صالحة / سليمة</span>
                  </button>
                </div>
              </div>
            )}

          </div>

          {/* Estimation Result Banner */}
          <div className="p-6 rounded-2xl bg-[#443dfc] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-[#443dfc]">
            <div>
              <span className="text-xs text-blue-100 font-bold block">التكلفة التقديرية للمشوار:</span>
              <div className="text-3xl sm:text-4xl font-black text-[#fed00e] my-1">
                حوالي {estPrice} <span className="text-sm font-bold text-white">ريال سعودي</span>
              </div>
              <p className="text-[11px] text-blue-100 font-medium">
                * قد تختلف التكلفة النهائية طفيفاً حسب تفاصيل الموقع الدقيقة والطريق
              </p>
            </div>

            <button
              onClick={handleBookWithEstimate}
              className="w-full sm:w-auto py-3.5 px-8 rounded-full bg-[#fed00e] hover:bg-[#ebd00e] text-[#0e0d39] font-black text-sm shadow-md hover:scale-105 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4 fill-current text-[#0e0d39]" />
              <span>إرسال الطلب وحجز السطحة (0551678924)</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
