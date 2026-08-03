import React, { useState } from 'react';
import { ShieldCheck, Building2, CheckCircle2, Banknote, CreditCard, Smartphone, Check, Copy, MessageSquare, AlertCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const PaymentAndVerificationSection: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => {
      setCopiedField(null);
    }, 2500);
  };

  return (
    <section className="py-14 sm:py-18 bg-slate-950 text-white border-t border-slate-800 transition-colors relative overflow-hidden" id="payments">
      {/* Background glow effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/20 text-red-400 border border-red-500/30 font-bold text-xs">
            <ShieldCheck className="w-4 h-4 text-red-500" />
            <span>وسائل الدفع والتوثيق الرسمي</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            طرق الدفع المعتمدة والحسابات البنكية الرسمية
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-medium">
            نوفر لكم كافة وسائل الدفع الإلكترونية والنقدية مع توثيق حكومي معتمد في المركز السعودي للأعمال
          </p>
        </div>

        {/* Top Grid: Official Saudi Business Center Verification & Accepted Payment Methods */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Official Business Verification Box */}
          <div className="lg:col-span-5 bg-slate-900/90 rounded-3xl p-6 sm:p-8 border border-slate-800 flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-xs font-black">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  مؤسسة رسمية معتمدة وموثقة
                </span>
                {/* Saudi Business Center Badge */}
                <span className="text-[11px] font-bold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-lg border border-amber-400/20">
                  وزارة التجارة
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white leading-snug">
                موثقون رسمياً لدى الجهات الحكومية بالمملكة
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                تلتزم مؤسسة محيط الشرق الأوسط لخدمات النقل بأعلى معايير النظامية والأمان المعتمدة في المملكة العربية السعودية.
              </p>

              {/* CR & SBC Card */}
              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-amber-300">المركز السعودي للأعمال</div>
                      <div className="text-[11px] font-semibold text-slate-400">موثق برقم سجل تجاري رسمي</div>
                    </div>
                  </div>
                  <span className="text-emerald-400 font-black text-xs bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 shrink-0">
                    موثق 100%
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-red-600/20 border border-red-500/30 text-red-400 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-white">رقم السجل التجاري:</div>
                      <div className="text-sm font-black text-red-400 dir-ltr text-right">{COMPANY_INFO.crNumber}</div>
                    </div>
                  </div>
                  <span className="text-xs text-slate-300 font-bold bg-slate-800 px-3 py-1 rounded-lg">
                    فواتير رسمية
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] text-slate-400 text-center font-medium">
              جميع عمليات النقل مغطاة بفواتير رسمية معتمدة وفق اشتراطات الهيئة العامة للنقل.
            </div>
          </div>

          {/* Payment Methods Grid */}
          <div className="lg:col-span-7 bg-slate-900/90 rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-6 flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-red-400 uppercase tracking-wider">
                  طرق الدفع والتحصيل
                </span>
                <span className="text-xs text-slate-400 font-semibold">
                  دفعة آمنة ومريحة مع المندوبين
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white">
                نوفر جميع طرق الدفع الإلكترونية والنقدية
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 font-medium">
                يمكنك السداد مباشرة للسائق والمندوب الميداني بأي طريقة تناسبك عند وصول السطحة:
              </p>

              {/* 4 Cards for Payment Methods */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                
                {/* Cash */}
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 hover:border-emerald-500/50 transition-all text-center space-y-2 group">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <Banknote className="w-6 h-6" />
                  </div>
                  <span className="block text-xs font-black text-white">كاش (Cash)</span>
                  <span className="block text-[10px] text-slate-400 font-semibold">دفع نقدي عند الاستلام</span>
                </div>

                {/* Mada */}
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 hover:border-blue-500/50 transition-all text-center space-y-2 group">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <CreditCard className="w-6 h-6" />
                  </div>
                  <span className="block text-xs font-black text-white">مدى (Mada)</span>
                  <span className="block text-[10px] text-slate-400 font-semibold">بطاقة مدى السعودية</span>
                </div>

                {/* Network / POS */}
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 hover:border-amber-500/50 transition-all text-center space-y-2 group">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <span className="block text-xs font-black text-white">شبكة (POS)</span>
                  <span className="block text-[10px] text-slate-400 font-semibold">جهاز مدى مع السائق</span>
                </div>

                {/* Bank Transfer */}
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 hover:border-purple-500/50 transition-all text-center space-y-2 group">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <span className="block text-xs font-black text-white">تحويل بنكي</span>
                  <span className="block text-[10px] text-slate-400 font-semibold">حساب المؤسسة الرسمي</span>
                </div>

              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center justify-center gap-2 text-xs text-slate-300 font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>يتوفر جهاز POS الإلكتروني للشبكة وأبل باي مع سائقي أسطول السطحات الميدانية.</span>
            </div>
          </div>

        </div>

        {/* Dedicated Al Rajhi Bank Blue Box (مربع باللون الأزرق لليزر والتأكيد الهوية البنكية) */}
        <div className="rounded-3xl bg-gradient-to-b from-[#003B71] to-[#00284f] border-2 border-[#005bb5] p-6 sm:p-10 shadow-2xl space-y-8 relative overflow-hidden">
          
          {/* Subtle Al Rajhi branding design accent */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-400 via-blue-400 to-amber-400" />
          
          {/* Bank Top Bar Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/15 pb-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shrink-0 shadow-lg">
                <Building2 className="w-8 h-8 text-amber-300" />
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold border border-amber-400/30">
                  الحساب البنكي الرسمي للمؤسسة
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                  {COMPANY_INFO.bankInfo.bankName} (Al Rajhi Bank)
                </h3>
              </div>
            </div>

            <div className="bg-white/10 px-4 py-2 rounded-2xl border border-white/15 backdrop-blur-sm self-start sm:self-auto">
              <span className="text-xs text-blue-100 font-semibold block">اسم الحساب الرسمي:</span>
              <span className="text-sm font-black text-amber-300">{COMPANY_INFO.bankInfo.accountTitle}</span>
            </div>
          </div>

          {/* Account Details Box (Account Number & IBAN with 1-click Copy) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Account Number Card */}
            <div className="p-5 rounded-2xl bg-black/25 border border-white/15 space-y-3 relative group">
              <span className="text-xs font-extrabold text-blue-200 block">رقم الحساب (Account Number):</span>
              <div className="flex items-center justify-between gap-2 dir-ltr">
                <span className="text-lg sm:text-xl font-black text-white tracking-widest font-mono">
                  {COMPANY_INFO.bankInfo.accountNumber}
                </span>
                <button
                  onClick={() => copyToClipboard(COMPANY_INFO.bankInfo.accountNumber, 'acc')}
                  className="px-3.5 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs flex items-center gap-1.5 transition-all shadow shrink-0 cursor-pointer"
                >
                  {copiedField === 'acc' ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-900" />
                      <span>تم النسخ!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-900" />
                      <span>نسخ رقم الحساب</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* IBAN Card */}
            <div className="p-5 rounded-2xl bg-black/25 border border-white/15 space-y-3 relative group">
              <span className="text-xs font-extrabold text-blue-200 block">رقم الآيبان (IBAN):</span>
              <div className="flex items-center justify-between gap-2 dir-ltr">
                <span className="text-base sm:text-lg font-black text-amber-300 tracking-wider font-mono">
                  {COMPANY_INFO.bankInfo.iban}
                </span>
                <button
                  onClick={() => copyToClipboard(COMPANY_INFO.bankInfo.iban, 'iban')}
                  className="px-3.5 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs flex items-center gap-1.5 transition-all shadow shrink-0 cursor-pointer"
                >
                  {copiedField === 'iban' ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-900" />
                      <span>تم النسخ!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-900" />
                      <span>نسخ الآيبان</span>
                    </>
                  )}
                </button>
              </div>
            </div>

          </div>

          {/* Important Receipt Notice & Send Buttons */}
          <div className="p-5 rounded-2xl bg-red-600/30 border-2 border-amber-400/60 flex flex-col md:flex-row items-center justify-between gap-4">
            
            <div className="flex items-center gap-3 text-right">
              <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center shrink-0">
                <AlertCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-black text-amber-300 flex items-center gap-1.5">
                  <span>🧾🛑 تنبيه هام:</span>
                  <span>الرجاء إرسال صورة إيصال التحويل بعد الإتمام</span>
                </h4>
                <p className="text-xs text-blue-100 font-medium mt-0.5">
                  لضمان اعتماد وتأكيد المشوار فوراً، أرسل إيصال التحويل عبر الواتساب للمندوب المختص.
                </p>
              </div>
            </div>

            {/* Receipt Send Action Buttons */}
            <div className="flex flex-wrap items-center gap-2 shrink-0 w-full md:w-auto">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber1}?text=${encodeURIComponent('السلام عليكم، هذا إيصال التحويل البنكي على حساب بنك الراجحي للمندوب 1.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 md:flex-none px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs flex items-center justify-center gap-1.5 shadow-md transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-current text-slate-950" />
                <span>إرسال للمندوب 1 ({COMPANY_INFO.phone1Formatted})</span>
              </a>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber2}?text=${encodeURIComponent('السلام عليكم، هذا إيصال التحويل البنكي على حساب بنك الراجحي للمندوب 2.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 md:flex-none px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs flex items-center justify-center gap-1.5 shadow-md transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-current text-slate-950" />
                <span>إرسال للمندوب 2 ({COMPANY_INFO.phone2Formatted})</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
