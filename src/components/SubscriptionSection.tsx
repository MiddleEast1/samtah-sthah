import React from 'react';
import { Calendar, CheckCircle2, Zap, Star, ShieldCheck, ArrowRight, MessageSquare, AlertCircle } from 'lucide-react';
import { SUBSCRIPTION_PACKAGES, COMPANY_INFO } from '../data/companyData';

interface SubscriptionSectionProps {
  onSelectPackage: (packageTitle: string) => void;
}

export const SubscriptionSection: React.FC<SubscriptionSectionProps> = ({ onSelectPackage }) => {
  
  const handleSubscribeWhatsApp = (pkgTitle: string, price: number) => {
    const message = `السلام عليكم، أرغب في الاشتراك في *${pkgTitle}* بسعر ${price} ريال سعودي لمؤسسة محيط الشرق الأوسط (سطحة صامطة جيزان). أرجو إفادتي بتفاصيل وطريقة التفعيل.`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encoded}`, '_blank');
  };

  return (
    <section id="subscriptions" className="py-16 sm:py-20 bg-[#fafafb] dark:bg-slate-900/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#443dfc]/10 dark:bg-blue-950 text-[#443dfc] dark:text-blue-300 font-extrabold text-xs">
            <Calendar className="w-4 h-4 text-[#fed00e]" />
            توفير عالي واستجابة فورية
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0e0d39] dark:text-white">
            باقات الاشتراك الشهري لنقل المركبات
          </h2>
          <p className="text-[#3d3c53] dark:text-slate-300 text-base font-medium">
            نوفر للأفراد والأسر والورش والمعارض خطط اشتراك شهرية مميزة بأسعار موفرة وضمان وصول سريع لجميع المشاوير داخل صامطة وجيزان والمحافظات.
          </p>
        </div>

        {/* Featured 799 SAR Package Highlight Banner */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-[#443dfc] text-white shadow-xl relative overflow-hidden border border-[#443dfc]">
          
          <div className="absolute top-0 left-0 translate-x-[-20%] translate-y-[-20%] w-72 h-72 bg-[#fed00e]/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4 text-right">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-[#fed00e] text-[#0e0d39] font-black text-xs rounded-full shadow">
                  🔥 الباقة الأكثر طلباً وتوفيراً
                </span>
                <span className="px-3 py-1 bg-white/15 text-white font-extrabold text-xs rounded-full border border-white/20">
                  شرط المسافة 80 كم للمشوار
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-[#fed00e]">
                الباقة الشهرية المميزة - 5 مشاوير بـ 799 ريال فقط!
              </h3>

              <p className="text-blue-50 text-sm sm:text-base leading-relaxed font-medium">
                وفر حتى 45% من تكاليف نقل سيارتك مع باقتنا الشهرية الأكثر رواجاً. احصل على 5 مشاوير سحب ونقل سيارة شهرياً بسعر ثابت 799 ريال، مع أولوية الاستجابة والوصول الفوري في صامطة وجيزان.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-bold text-white pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#fed00e] shrink-0" />
                  <span>عدد المشاوير: 5 مشاوير شهرياً</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#fed00e] shrink-0" />
                  <span>شرط ألا تتجاوز المسافة 80 كم للمشوار الواحد</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#fed00e] shrink-0" />
                  <span>أولوية إرسال السطحة الهيدروليكية 24 ساعة</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#fed00e] shrink-0" />
                  <span>خصم خاص على خدمات الأبواب المغلقة والبطارية</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-center space-y-4">
              <div>
                <span className="text-xs text-blue-100 font-bold">السعر النهائي لمجموعة 5 مشاوير:</span>
                <div className="text-4xl sm:text-5xl font-black text-[#fed00e] my-1">
                  799 <span className="text-lg font-bold text-white">ر.س / شهرياً</span>
                </div>
                <p className="text-xs text-[#38ff64] font-black">
                  (يعادل 159.8 ريال للمشوار الواحد بدلاً من 250 ريال)
                </p>
              </div>

              <button
                onClick={() => handleSubscribeWhatsApp('الباقة الشهرية المتميزة (799 ريال)', 799)}
                className="w-full py-3.5 px-6 rounded-full bg-[#fed00e] hover:bg-[#ebd00e] text-[#0e0d39] font-black text-base shadow-md hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-5 h-5 fill-current text-[#0e0d39]" />
                <span>اشترك الآن عبر الواتساب</span>
              </button>
            </div>
          </div>
        </div>

        {/* All Subscription Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SUBSCRIPTION_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-2xl bg-white dark:bg-slate-900 p-6 sm:p-8 border transition-all duration-300 flex flex-col justify-between relative ${
                pkg.popular
                  ? 'border-2 border-[#fed00e] shadow-xl scale-102'
                  : 'border-[#e3e3ee] dark:border-slate-800 shadow-sm hover:shadow-md'
              }`}
            >
              {pkg.badge && (
                <span className={`absolute -top-3.5 right-6 px-3 py-1 rounded-full text-xs font-black shadow ${
                  pkg.popular ? 'bg-[#fed00e] text-[#0e0d39]' : 'bg-[#443dfc] text-white'
                }`}>
                  {pkg.badge}
                </span>
              )}

              <div>
                <h3 className="text-xl font-black text-[#0e0d39] dark:text-white mb-2">
                  {pkg.title}
                </h3>
                <p className="text-xs text-[#3d3c53] dark:text-slate-400 font-medium mb-6">
                  {pkg.description}
                </p>

                {/* Pricing */}
                <div className="bg-[#fafafb] dark:bg-slate-800/80 p-4 rounded-xl mb-6 text-center border border-[#e3e3ee] dark:border-slate-700">
                  <div className="text-3xl sm:text-4xl font-black text-[#443dfc] dark:text-blue-400">
                    {pkg.price} <span className="text-sm font-bold text-[#3d3c53] dark:text-slate-400">ريال سعودي</span>
                  </div>
                  <div className="text-xs font-black text-[#0e0d39] dark:text-amber-400 mt-1">
                    {pkg.tripsCount} مشاوير / {pkg.period} (حتى {pkg.maxDistanceKm} كم/المشوار)
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-bold text-[#0e0d39] dark:text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-[#38ff64] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => handleSubscribeWhatsApp(pkg.title, pkg.price)}
                className={`w-full py-3 px-4 rounded-full font-black text-sm flex items-center justify-center gap-2 transition-all ${
                  pkg.popular
                    ? 'bg-[#443dfc] hover:bg-[#342ddc] text-white shadow-md'
                    : 'bg-[#fafafb] dark:bg-slate-800 hover:bg-[#e3e3ee] dark:hover:bg-slate-700 text-[#0e0d39] dark:text-white border border-[#e3e3ee]'
                }`}
              >
                <MessageSquare className="w-4 h-4 fill-current text-[#fed00e]" />
                <span>طلب تفعيل الباقة</span>
              </button>
            </div>
          ))}
        </div>

        {/* Subscription Terms Notice */}
        <div className="mt-10 p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 flex items-start gap-3 text-xs text-amber-900 dark:text-amber-200">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold">شروط وأحكام الاشتراكات الشهرية:</span> يسري اشتراك الـ 799 ريال لمدة 30 يوماً من تاريخ التفعيل. يشمل الاشتراك 5 مشاوير نقل سيارة بشرط ألا تتجاوز مسافة المشوار الواحد 80 كم. في حال تجاوز المسافة يتم احتساب فارق الكيلومترات بخصم خاص للمشتركين.
          </div>
        </div>

      </div>
    </section>
  );
};
