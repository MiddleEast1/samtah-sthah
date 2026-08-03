import React from 'react';
import { KeyRound, Zap, Disc, PhoneCall, MessageSquare, ShieldCheck, AlertCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const SpecialServicesSection: React.FC = () => {
  
  const handleRequestWhatsApp = (serviceName: string) => {
    const text = `السلام عليكم، أحتاج *${serviceName}* فوراً من مؤسسة محيط الشرق الأوسط (سطحة صامطة جيزان). أرجو التواصل معي وتحديد الرسوم.`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encoded}`, '_blank');
  };

  return (
    <section className="py-16 sm:py-20 bg-[#0e0d39] text-white relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#443dfc]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#fed00e]/20 text-[#fed00e] border border-[#fed00e]/30 font-black text-xs">
            🚨 طوارئ واستجابة سريعة
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            خدمات الطوارئ والمساعدة الميدانية للطرقات
          </h2>
          <p className="text-slate-300 text-base font-medium">
            فنيون متخصصون ومجهزون بالكامل للوصول الفوري في صامطة، جيزان، الطرق السريعة والأحياء
          </p>
        </div>

        {/* 3 Specialized Emergency Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* 1. Door Unlock Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#fed00e]/50 transition-all duration-300 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#fed00e] flex items-center justify-center text-[#0e0d39] shadow-lg">
                <KeyRound className="w-7 h-7" />
              </div>

              <div>
                <span className="text-xs font-black text-[#fed00e] bg-[#fed00e]/10 px-2.5 py-1 rounded-md border border-[#fed00e]/20">
                  فتح أبواب بدون أي خدوش
                </span>
                <h3 className="text-xl font-extrabold text-white mt-2">
                  فتح المركبات المغلقة
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                خدمة فتح أبواب جميع أنواع السيارات المغلقة (نسيان المفتاح بالداخل أو ضياعه) بأحدث الأجهزة الهوائية بدون أي أضرار بالطلاء أو الأبواب.
              </p>

              <div className="p-3 rounded-xl bg-[#fed00e]/10 border border-[#fed00e]/30 text-xs text-[#fed00e] font-bold flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-[#fed00e] shrink-0" />
                <span>رسوم إضافية تحدد بدقة عند الطلب والتواصل والتأكد من الملكية</span>
              </div>
            </div>

            <button
              onClick={() => handleRequestWhatsApp('خدمة فتح سيارة مغلقة')}
              className="w-full py-3.5 px-4 rounded-full bg-[#fed00e] hover:bg-[#ebd00e] text-[#0e0d39] font-black text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md"
            >
              <MessageSquare className="w-4 h-4 fill-current text-[#0e0d39]" />
              <span>طلب فتح السيارة الآن (0551678924)</span>
            </button>
          </div>

          {/* 2. Battery Jumpstart Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#443dfc]/50 transition-all duration-300 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#443dfc] flex items-center justify-center text-white shadow-lg">
                <Zap className="w-7 h-7 text-[#fed00e]" />
              </div>

              <div>
                <span className="text-xs font-black text-blue-200 bg-[#443dfc]/20 px-2.5 py-1 rounded-md border border-[#443dfc]/30">
                  شحن واستبدال ميداني
                </span>
                <h3 className="text-xl font-extrabold text-white mt-2">
                  خدمة أشتراك بطارية السيارات
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                نصلك أينما كنت لشحن واشتراك البطارية بأجهزة إلكترونية آمنة على كهرباء ودينامو السيارة الحديثة، أو استبدالها ببطارية جديدة بضمان.
              </p>

              <div className="p-3 rounded-xl bg-[#443dfc]/20 border border-[#443dfc]/30 text-xs text-blue-200 font-bold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-300 shrink-0" />
                <span>فحص كفاءة الشحن والدينامو مجاناً في الموقع</span>
              </div>
            </div>

            <button
              onClick={() => handleRequestWhatsApp('خدمة اشتراك بطارية سيارة')}
              className="w-full py-3.5 px-4 rounded-full bg-[#443dfc] hover:bg-[#342ddc] text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md"
            >
              <MessageSquare className="w-4 h-4 fill-current text-[#fed00e]" />
              <span>طلب اشتراك البطارية</span>
            </button>
          </div>

          {/* 3. Tire Change Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#38ff64]/50 transition-all duration-300 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#38ff64] flex items-center justify-center text-[#0e0d39] shadow-lg">
                <Disc className="w-7 h-7" />
              </div>

              <div>
                <span className="text-xs font-black text-[#38ff64] bg-[#38ff64]/10 px-2.5 py-1 rounded-md border border-[#38ff64]/20">
                  بنشر متنقل
                </span>
                <h3 className="text-xl font-extrabold text-white mt-2">
                  خدمة تبديل وإصلاح الإطارات
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                تغيير الإطار المبنشر بالإطار السبير المساعد بسرعة في الطرق السريعة أو عند البيت، مع إمكانية إصلاح التنسيم ونفخ الهواء.
              </p>

              <div className="p-3 rounded-xl bg-[#38ff64]/10 border border-[#38ff64]/30 text-xs text-emerald-200 font-bold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#38ff64] shrink-0" />
                <span>معدات رفع حديثة تناسب الجيوب والسيارات الصغيرة</span>
              </div>
            </div>

            <button
              onClick={() => handleRequestWhatsApp('خدمة تبديل إطارات (بنشر)')}
              className="w-full py-3.5 px-4 rounded-full bg-[#38ff64] hover:bg-[#2ee356] text-[#0e0d39] font-black text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md"
            >
              <MessageSquare className="w-4 h-4 fill-current text-[#0e0d39]" />
              <span>طلب تبديل الإطار فوراً</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
