import React from 'react';
import { ShieldCheck, CreditCard, Building2, CheckCircle, FileText, Smartphone, Banknote, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const VerificationBadge: React.FC = () => {
  return (
    <section className="py-12 bg-blue-900 text-white border-y border-blue-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Government Verification Info */}
          <div className="lg:col-span-6 space-y-4 text-right">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold text-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>مؤسسة رسمية معتمدة وموثقة</span>
            </div>

            <h3 className="text-2xl font-black text-white">
              موثقون رسمياً لدى الجهات الحكومية بالمملكة
            </h3>

            <p className="text-sm text-slate-200 leading-relaxed font-medium">
              تلتزم مؤسسة محيط الشرق الأوسط لخدمات النقل بأعلى معايير النظامية والأمان المعتمدة في المملكة العربية السعودية:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-bold pt-2">
              <div className="p-3 rounded-xl bg-blue-800/80 border border-blue-700/60 flex items-center gap-2.5">
                <Building2 className="w-5 h-5 text-amber-300 shrink-0" />
                <div>
                  <div className="text-amber-300">وزارة التجارة والمركز السعودي للأعمال</div>
                  <div className="text-slate-300 font-normal">موثق برقم سجل تجاري رسمي</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-blue-800/80 border border-blue-700/60 flex items-center gap-2.5">
                <FileText className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <div className="text-emerald-400">سجل تجاري رقم: {COMPANY_INFO.crNumber}</div>
                  <div className="text-slate-300 font-normal">فواتير ونقل نظامي 100%</div>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Methods Section */}
          <div className="lg:col-span-6 bg-blue-950/80 p-6 rounded-2xl border border-blue-800 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-amber-300">وسائل الدفع النظامية المعتمدة</span>
              <span className="text-[10px] text-slate-400 font-semibold">دفعة آمنة مع السائقين</span>
            </div>

            <h4 className="text-lg font-extrabold text-white">
              نوفر جميع طرق الدفع الإلكترونية والنقدية
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-blue-900 border border-blue-800 text-center space-y-1">
                <Banknote className="w-6 h-6 text-emerald-400 mx-auto" />
                <span className="block text-xs font-bold">كاش (Cash)</span>
              </div>

              <div className="p-3 rounded-xl bg-blue-900 border border-blue-800 text-center space-y-1">
                <CreditCard className="w-6 h-6 text-blue-400 mx-auto" />
                <span className="block text-xs font-bold">شبكة مدى (Mada)</span>
              </div>

              <div className="p-3 rounded-xl bg-blue-900 border border-blue-800 text-center space-y-1">
                <Smartphone className="w-6 h-6 text-amber-300 mx-auto" />
                <span className="block text-xs font-bold">أبل باي (Apple Pay)</span>
              </div>

              <div className="p-3 rounded-xl bg-blue-900 border border-blue-800 text-center space-y-1">
                <CreditCard className="w-6 h-6 text-purple-400 mx-auto" />
                <span className="block text-xs font-bold">فيزا / ماستركارد</span>
              </div>
            </div>

            <p className="text-[11px] text-slate-300 text-center font-medium">
              * يتوفر جهاز الدفع الإلكتروني (POS الشبكة) مع سائقي أسطول السطحات في الموقع
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
