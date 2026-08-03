import React from 'react';
import { ShieldCheck, Truck, Award, Users, Clock, MapPin, CheckCircle, PhoneCall, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-extrabold text-xs">
            <Award className="w-4 h-4 text-amber-500" />
            عن مؤسسة محيط الشرق الأوسط
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
            الريادة والسرعة في خدمات نقل ونقليات صامطة وجيزان
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base font-medium">
            تأسست مؤسسة محيط الشرق الأوسط لتقديم حلول نقل ونقليات آمنة وشاملة بأسطول حديث يغطي كافة المحافظات والطرق السريعة
          </p>
        </div>

        {/* Story & Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6 text-right">
            <h3 className="text-2xl font-black text-slate-900 dark:text-white">
              لماذا تختار مؤسستنا لنقل سيارتك وعفشك؟
            </h3>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              نمتلك أسطولاً متكاملاً من السطحات الهيدروليكية الحديثة، السطحات العادية، والسطحات المغلقة، بالإضافة إلى ديانات نقل العفش المجهزة وفنيي الطوارئ المتمرسين. هدفنا الأساسي هو الاستجابة الفورية وتأمين وسيلتك وسياراتك بأعلى مستويات الاحترافية.
            </p>

            <div className="space-y-3 pt-2">
              {[
                'سرعة الوصول خلال 15 إلى 25 دقيقة بحد أقصى في صامطة وجيزان',
                'سائقون محترفون ذوو خبرة بالطرق والمحاور الرئيسية في منطقة جيزان',
                'أسعار موفرة وشفافة مع باقة الاشتراك الشهري (799 ريال / 5 مشاوير)',
                'خدمة فتح المركبات والأبواب المغلقة بدون أي أضرار أو خدوش',
                'توثيق رسمي لدى وزارة التجارة والمركز السعودي للأعمال برقم سجل تجاري'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm font-extrabold text-slate-800 dark:text-slate-200">
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-3">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm shadow-md"
              >
                اتصل بنا: 0551678924
              </a>
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm shadow-md"
              >
                واتساب مباشر
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200 dark:border-slate-700 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1586193800447-5a143f019058?auto=format&fit=crop&w=1000&q=80"
                alt="سطحة إيسوزو حمراء مؤسسة محيط الشرق الأوسط"
                className="w-full h-80 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-6 bg-slate-900 text-white space-y-2">
                <div className="flex items-center justify-between text-amber-300 font-extrabold text-xs">
                  <span>أسطول السطحات الهيدروليكية</span>
                  <span>تغطية 24 ساعة</span>
                </div>
                <h4 className="font-extrabold text-lg text-white">
                  سطحات إيسوزو هيدروليك حمراء مجهزة
                </h4>
                <p className="text-xs text-slate-300">
                  مخصصة لنقل السيارات الحديثة والفارهة والمتعطلة بأعلى درجات السلامة والتثبيت.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-black text-blue-600 dark:text-blue-400">+5000</div>
            <div className="text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-300 mt-1">مشوار نقل ناجح</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-emerald-600 dark:text-emerald-400">100%</div>
            <div className="text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-300 mt-1">أمان وسلامة المنقولات</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-amber-500">15 دقيقة</div>
            <div className="text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-300 mt-1">متوسط زمن الاستجابة</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-purple-600 dark:text-purple-400">24/7</div>
            <div className="text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-300 mt-1">خدمة طوارئ متواصلة</div>
          </div>
        </div>

      </div>
    </section>
  );
};
