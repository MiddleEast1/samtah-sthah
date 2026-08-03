import React from 'react';
import { X, CheckCircle, MessageSquare, Phone, ShieldCheck, Truck, Sparkles } from 'lucide-react';
import { ServiceItem } from '../types';
import { COMPANY_INFO } from '../data/companyData';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ service, onClose }) => {
  if (!service) return null;

  const handleBookWhatsApp = () => {
    const text = `السلام عليكم، أود طلب *${service.title}* من مؤسسة محيط الشرق الأوسط (سطحة صامطة جيزان). أرجو تزويدي بالتفاصيل وحجز الخدمة فوراً.`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encoded}`, '_blank');
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-[#0e0d39]/80 backdrop-blur-sm p-4 flex items-center justify-center overflow-y-auto animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full overflow-hidden border border-[#e3e3ee] dark:border-slate-800 shadow-2xl space-y-6 my-8 animate-in zoom-in-95 duration-200"
      >
        
        {/* Header Image */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0d39]/90 via-[#0e0d39]/30 to-transparent" />

          <button
            onClick={onClose}
            className="absolute top-4 left-4 p-2 rounded-full bg-[#0e0d39]/80 text-white hover:bg-[#0e0d39] border border-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {service.badge && (
            <span className="absolute top-4 right-4 px-3 py-1 bg-[#fed00e] text-[#0e0d39] font-black text-xs rounded-full shadow">
              {service.badge}
            </span>
          )}

          <div className="absolute bottom-4 right-4 left-4 text-white space-y-1">
            <span className="text-xs text-[#fed00e] font-black bg-[#0e0d39]/90 px-2.5 py-1 rounded-md">
              {service.priceNote}
            </span>
            <h3 className="text-2xl font-black text-white mt-1">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 text-right">
          
          <div className="space-y-2">
            <h4 className="text-sm font-black text-[#443dfc] dark:text-blue-400">
              {service.subtitle}
            </h4>
            <p className="text-xs sm:text-sm text-[#3d3c53] dark:text-slate-300 leading-relaxed font-semibold">
              {service.description}
            </p>
          </div>

          {/* Features List */}
          <div className="space-y-3 pt-2 border-t border-[#e3e3ee] dark:border-slate-800">
            <h5 className="font-extrabold text-sm text-[#0e0d39] dark:text-white">
              مميزات وتأطير الخدمة:
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-[#0e0d39] dark:text-slate-200">
              {service.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 p-2.5 rounded-xl bg-[#fafafb] dark:bg-slate-800/60 border border-[#e3e3ee]">
                  <CheckCircle className="w-4 h-4 text-[#38ff64] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Verification Banner */}
          <div className="p-3.5 rounded-2xl bg-[#443dfc]/10 dark:bg-blue-950/50 border border-[#443dfc]/20 text-xs text-[#443dfc] dark:text-blue-200 font-extrabold flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#443dfc] shrink-0" />
            <span>خدمة معتمدة وموثقة برقم سجل تجاري رسمى رقم: {COMPANY_INFO.crNumber}</span>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[#e3e3ee] dark:border-slate-800">
            <button
              onClick={handleBookWhatsApp}
              className="py-3.5 px-5 rounded-full bg-[#38ff64] hover:bg-[#2ee356] text-[#0e0d39] font-black text-xs shadow-md flex items-center justify-center gap-2 transition-all"
            >
              <MessageSquare className="w-4 h-4 fill-current text-[#0e0d39]" />
              <span>طلب الخدمة عبر الواتساب فوراً</span>
            </button>

            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="py-3.5 px-5 rounded-full bg-[#443dfc] hover:bg-[#342ddc] text-white font-extrabold text-xs text-center flex items-center justify-center gap-2 shadow-md dir-ltr"
            >
              <Phone className="w-4 h-4 text-[#fed00e]" />
              <span>اتصال مباشر: {COMPANY_INFO.phoneFormatted}</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
