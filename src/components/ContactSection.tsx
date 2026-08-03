import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, Send, Clock, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = (repNumber: string) => {
    const text = `السلام عليكم، أنا *${name || 'عميل'}* (رقم الجوال: ${phone || 'غير مدخل'}).\nالرسالة: ${msg}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${repNumber}?text=${encoded}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-slate-900 text-white transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-red-600/20 text-red-400 font-extrabold text-xs border border-red-500/30">
            <Phone className="w-4 h-4 text-amber-400" />
            تواصل مباشر مع الإدارة والخدمة الميدانية
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            يسعدنا تواصلك معنا على مدار 24 ساعة
          </h2>
          <p className="text-slate-300 text-base font-medium">
            تواصل فورياً مع أحد مناديبنا المعتمدين في صامطة وجيزان
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Representative 1 Card */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 shadow-md">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black px-2.5 py-1 bg-red-600 text-white rounded-md">
                  مندوب 1
                </span>
                <span className="text-xs text-slate-400 font-bold">خدمة عملاء وطوارئ</span>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <div className="w-12 h-12 rounded-xl bg-red-600 text-white flex items-center justify-center font-black">
                  <Phone className="w-6 h-6 text-amber-300" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-bold block">رقم الاتصال:</span>
                  <h4 className="text-lg font-mono font-black text-white dir-ltr text-right">
                    {COMPANY_INFO.phone1Formatted}
                  </h4>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2">
                <a
                  href={`tel:${COMPANY_INFO.phone1}`}
                  className="py-2.5 px-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-black text-xs text-center flex items-center justify-center gap-1.5 transition-all shadow-sm dir-ltr"
                >
                  <Phone className="w-4 h-4 text-amber-300" />
                  <span>اتصال تلفوني</span>
                </a>

                <a
                  href={COMPANY_INFO.whatsappUrl1}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs text-center flex items-center justify-center gap-1.5 transition-all shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 fill-current text-slate-950" />
                  <span>واتساب مندوب 1</span>
                </a>
              </div>
            </div>

            {/* Representative 2 Card */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 shadow-md">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black px-2.5 py-1 bg-red-600 text-white rounded-md">
                  مندوب 2
                </span>
                <span className="text-xs text-slate-400 font-bold">خدمة عملاء وطوارئ</span>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <div className="w-12 h-12 rounded-xl bg-red-600 text-white flex items-center justify-center font-black">
                  <Phone className="w-6 h-6 text-amber-300" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-bold block">رقم الاتصال:</span>
                  <h4 className="text-lg font-mono font-black text-white dir-ltr text-right">
                    {COMPANY_INFO.phone2Formatted}
                  </h4>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2">
                <a
                  href={`tel:${COMPANY_INFO.phone2}`}
                  className="py-2.5 px-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-black text-xs text-center flex items-center justify-center gap-1.5 transition-all shadow-sm dir-ltr"
                >
                  <Phone className="w-4 h-4 text-amber-300" />
                  <span>اتصال تلفوني</span>
                </a>

                <a
                  href={COMPANY_INFO.whatsappUrl2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs text-center flex items-center justify-center gap-1.5 transition-all shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 fill-current text-slate-950" />
                  <span>واتساب مندوب 2</span>
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 shadow-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-black text-sm text-white">
                    العنوان والفرع الرئيسي
                  </h4>
                  <p className="text-xs text-slate-300 mt-1 font-bold">
                    {COMPANY_INFO.address}
                  </p>
                  <a
                    href={COMPANY_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-amber-400 font-extrabold mt-2 hover:underline"
                  >
                    <span>عرض خريطة الموقع عبر Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 shadow-sm">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-amber-300 shrink-0" />
                <div>
                  <h4 className="font-black text-sm text-white">
                    ساعات العمل
                  </h4>
                  <p className="text-xs text-slate-300 font-bold">
                    {COMPANY_INFO.workingHours} (خدمة طوارئ متواصلة)
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-md">
            <h3 className="text-xl font-black text-white mb-2">
              أرسل استفسارك أو طلبك مباشرة
            </h3>
            <p className="text-xs text-slate-400 mb-6 font-medium">
              سيتم توجيه رسالتك تلقائياً للواتساب المباشر لأحد مناديبنا الميدانيين.
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-black text-slate-200 mb-1">
                  الاسم الكريّم:
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="مثال: محمد العريبي"
                  className="w-full px-4 py-3 rounded-xl border border-slate-800 bg-slate-900 text-white text-sm font-bold outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-black text-slate-200 mb-1">
                  رقم الجوال:
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="05XXXXXXXX"
                  className="w-full px-4 py-3 rounded-xl border border-slate-800 bg-slate-900 text-white text-sm font-bold outline-none focus:ring-2 focus:ring-red-500 dir-ltr text-right"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-black text-slate-200 mb-1">
                  تفاصيل الطلب أو الاستفسار:
                </label>
                <textarea
                  rows={4}
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  placeholder="اكتب هنا تفاصيل الخدمة المطلوبة، نوع السيارة، أو الاستفسار..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-800 bg-slate-900 text-white text-sm font-bold outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>

              <div className="space-y-2 pt-2">
                <label className="block text-xs font-black text-amber-300 text-center">
                  اختر المندوب لإرسال الاستفسار فوراً عبر الواتساب:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => handleSubmit(COMPANY_INFO.whatsappNumber1)}
                    className="py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-slate-950" />
                    <span>إرسال لمندوب 1 ({COMPANY_INFO.phone1Formatted})</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSubmit(COMPANY_INFO.whatsappNumber2)}
                    className="py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-slate-950" />
                    <span>إرسال لمندوب 2 ({COMPANY_INFO.phone2Formatted})</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
