import React, { useState } from 'react';
import { Send, MapPin, Truck, AlertTriangle, CheckCircle, KeyRound, Zap, Disc, Calendar } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { ServiceId } from '../types';

interface TripBookingWidgetProps {
  compact?: boolean;
}

export const TripBookingWidget: React.FC<TripBookingWidgetProps> = ({ compact = false }) => {
  const [fromCity, setFromCity] = useState('صامطة');
  const [toCity, setToCity] = useState('جيزان');
  const [carCondition, setCarCondition] = useState<'broken' | 'good'>('broken');
  const [serviceType, setServiceType] = useState<ServiceId>('car-towing');
  const [carModel, setCarModel] = useState('');
  const [notes, setNotes] = useState('');
  const [phone, setPhone] = useState('');

  const commonCities = [
    'صامطة',
    'جيزان',
    'أحد المسارحة',
    'أبو عريش',
    'صبيا',
    'الطوال',
    'بيش',
    'الدرب',
    'العارضة',
    'الخوبة',
    'المنطقة الصناعية (الورش)',
    'موقع آخر'
  ];

  const handleSendToWhatsApp = (repNumber: string) => {
    let serviceName = 'نقل سيارات (سطحة)';
    if (serviceType === 'furniture-moving') serviceName = 'نقل عفش وأثاث';
    if (serviceType === 'door-unlock') serviceName = 'فتح مركبة مغلقة';
    if (serviceType === 'battery-service') serviceName = 'خدمة اشتراك بطارية';
    if (serviceType === 'tire-service') serviceName = 'تبديل إطارات (بنشر)';
    if (serviceType === 'monthly-subscription') serviceName = 'طلب باقة الاشتراك الشهري (799 ريال)';

    const conditionText = carCondition === 'broken' ? 'عطلانة / مصدمة (تتطلب سطحة هيدروليك/ونش)' : 'صالحة / سليمة';

    const messageLines = [
      `السلام عليكم اريد مشوار`,
      `----------------------------------`,
      `📌 *طلب خدمة:* ${serviceName}`,
      `📍 *من مدينة/موقع:* ${fromCity}`,
      `🏁 *إلى مدينة/موقع:* ${toCity}`,
      `🚗 *حالة السيارة:* ${conditionText}`,
      carModel ? `🚘 *نوع موديل المركبة:* ${carModel}` : '',
      phone ? `📞 *رقم التواصل:* ${phone}` : '',
      notes ? `📝 *ملاحظات إضافية:* ${notes}` : '',
      `----------------------------------`,
      `أرجو إفادتي بالتكلفة والوقت للوصول الفوري، وشكراً لكم!`
    ].filter(Boolean).join('\n');

    const encodedMessage = encodeURIComponent(messageLines);
    const whatsappUrl = `https://wa.me/${repNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className={`bg-slate-900 rounded-3xl shadow-2xl border border-slate-800 text-white overflow-hidden ${compact ? 'p-5' : 'p-6 sm:p-8'}`}>
      
      {/* Header / Title */}
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="p-2.5 rounded-2xl bg-red-600/20 text-red-500 border border-red-500/30">
              <Truck className="w-5 h-5" />
            </span>
            <h3 className="text-lg sm:text-xl font-black text-white">
              احجز مشوارك فوراً عبر الواتساب
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">
            أدخل تفاصيل المشوار ليصلك المندوب فوراً بحساب الدقة والمسافة
          </p>
        </div>
        <span className="hidden sm:inline-flex px-3 py-1 bg-amber-400 text-slate-950 font-black text-xs rounded-full shadow-sm">
          استجابة خلال دقائق ⚡
        </span>
      </div>

      <div className="space-y-5">
        
        {/* Service Selector */}
        <div>
          <label className="block text-xs font-black text-slate-200 mb-2">
            نوع الخدمة المطلوبة:
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {[
              { id: 'car-towing', label: 'نقل سيارات (سطحة)', icon: Truck },
              { id: 'furniture-moving', label: 'نقل عفش وأثاث', icon: MapPin },
              { id: 'door-unlock', label: 'فتح سيارة مغلقة', icon: KeyRound },
              { id: 'battery-service', label: 'اشتراك بطارية', icon: Zap },
              { id: 'tire-service', label: 'تبديل إطارات', icon: Disc },
              { id: 'monthly-subscription', label: 'باقة 799 ريال', icon: Calendar },
            ].map((s) => {
              const Icon = s.icon;
              const isSelected = serviceType === s.id;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setServiceType(s.id as ServiceId)}
                  className={`flex items-center gap-2 p-2.5 rounded-xl border text-xs font-black transition-all text-right cursor-pointer ${
                    isSelected
                      ? 'bg-red-600 text-white border-red-500 shadow-md'
                      : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-red-500/50'
                  }`}
                >
                  <Icon className={`w-4 h-4 shrink-0 ${isSelected ? 'text-amber-300' : 'text-red-400'}`} />
                  <span className="truncate">{s.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* From & To Location Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-black text-slate-200 mb-1.5">
              من مدينة / موقع:
            </label>
            <div className="relative">
              <MapPin className="w-4 h-4 absolute right-3 top-3.5 text-red-500 pointer-events-none" />
              <input
                type="text"
                value={fromCity}
                onChange={(e) => setFromCity(e.target.value)}
                placeholder="مثال: صامطة، الخوبة، الشارع العام..."
                list="cities-list"
                className="w-full pl-3 pr-9 py-2.5 rounded-xl border border-slate-800 bg-slate-950 text-white text-sm font-bold focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-black text-slate-200 mb-1.5">
              إلى مدينة / موقع:
            </label>
            <div className="relative">
              <MapPin className="w-4 h-4 absolute right-3 top-3.5 text-emerald-400 pointer-events-none" />
              <input
                type="text"
                value={toCity}
                onChange={(e) => setToCity(e.target.value)}
                placeholder="مثال: جيزان، الورشة، المعرض..."
                list="cities-list"
                className="w-full pl-3 pr-9 py-2.5 rounded-xl border border-slate-800 bg-slate-950 text-white text-sm font-bold focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
                required
              />
            </div>
          </div>
        </div>

        {/* Datalist for cities */}
        <datalist id="cities-list">
          {commonCities.map((city) => (
            <option key={city} value={city} />
          ))}
        </datalist>

        {/* Car Condition Selector (If applicable) */}
        {(serviceType === 'car-towing' || serviceType === 'door-unlock' || serviceType === 'battery-service' || serviceType === 'tire-service' || serviceType === 'monthly-subscription') && (
          <div>
            <label className="block text-xs font-black text-slate-200 mb-2">
              حالة المركبة:
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setCarCondition('broken')}
                className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border text-xs font-black transition-all cursor-pointer ${
                  carCondition === 'broken'
                    ? 'bg-rose-950/80 border-rose-500 text-rose-300 ring-2 ring-rose-500/30'
                    : 'bg-slate-950 text-slate-300 border-slate-800'
                }`}
              >
                <AlertTriangle className="w-4 h-4 text-rose-500" />
                <span>عطلانة / مصدمة</span>
              </button>

              <button
                type="button"
                onClick={() => setCarCondition('good')}
                className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border text-xs font-black transition-all cursor-pointer ${
                  carCondition === 'good'
                    ? 'bg-emerald-950/80 border-emerald-500 text-emerald-300 ring-2 ring-emerald-500/30'
                    : 'bg-slate-950 text-slate-300 border-slate-800'
                }`}
              >
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>صالحة / سليمة</span>
              </button>
            </div>
          </div>
        )}

        {/* Vehicle Model & Optional Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-black text-slate-200 mb-1">
              نوع وموديل السيارة (اختياري):
            </label>
            <input
              type="text"
              value={carModel}
              onChange={(e) => setCarModel(e.target.value)}
              placeholder="مثال: كامري 2022 / جمس 2020"
              className="w-full px-3 py-2.5 rounded-xl border border-slate-800 bg-slate-950 text-white text-sm outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block text-xs font-black text-slate-200 mb-1">
              رقم الجوال للاتصال (اختياري):
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="05XXXXXXXX"
              className="w-full px-3 py-2.5 rounded-xl border border-slate-800 bg-slate-950 text-white text-sm outline-none dir-ltr text-right focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>

        {/* Additional Notes */}
        <div>
          <label className="block text-xs font-black text-slate-200 mb-1">
            ملاحظات أو تفاصيل الموقع الدقيقة:
          </label>
          <input
            type="text"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="مثال: بجوار محطة الوقود / السيارة مقفلة بالكامل..."
            className="w-full px-3 py-2.5 rounded-xl border border-slate-800 bg-slate-950 text-white text-sm outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Submit to WhatsApp Buttons for Rep 1 and Rep 2 */}
        <div className="space-y-2 pt-2">
          <label className="block text-xs font-black text-amber-300 text-center">
            إرسال تفاصيل الطلب فوراً إلى المندوب الميداني:
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => handleSendToWhatsApp(COMPANY_INFO.whatsappNumber1)}
              className="py-3.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Send className="w-4 h-4 text-slate-950" />
              <span>مندوب 1 ({COMPANY_INFO.phone1Formatted})</span>
            </button>

            <button
              type="button"
              onClick={() => handleSendToWhatsApp(COMPANY_INFO.whatsappNumber2)}
              className="py-3.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Send className="w-4 h-4 text-slate-950" />
              <span>مندوب 2 ({COMPANY_INFO.phone2Formatted})</span>
            </button>
          </div>
        </div>

        <p className="text-[11px] text-center text-slate-400 font-medium">
          * سيتم صياغة تفاصيل المشوار تلقائياً وتوجيهك لمحادثة الواتساب المباشرة للمندوب الاختياري
        </p>

      </div>
    </div>
  );
};
