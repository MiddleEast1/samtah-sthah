import React, { useState } from 'react';
import { Truck, Package, KeyRound, Zap, Disc, Calendar, ArrowLeft, Check, Sparkles, MessageSquare, Phone } from 'lucide-react';
import { SERVICES_LIST, COMPANY_INFO } from '../data/companyData';
import { ServiceItem } from '../types';

interface ServicesGridProps {
  onSelectService: (service: ServiceItem) => void;
  setActiveTab: (tab: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onSelectService, setActiveTab }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'towing' | 'furniture' | 'emergency'>('all');

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Truck': return Truck;
      case 'Package': return Package;
      case 'KeyRound': return KeyRound;
      case 'Zap': return Zap;
      case 'Disc': return Disc;
      case 'Calendar': return Calendar;
      default: return Truck;
    }
  };

  const filteredServices = SERVICES_LIST.filter((srv) => {
    if (activeFilter === 'towing') return srv.id === 'car-towing' || srv.id === 'monthly-subscription';
    if (activeFilter === 'furniture') return srv.id === 'furniture-moving';
    if (activeFilter === 'emergency') return srv.id === 'door-unlock' || srv.id === 'battery-service' || srv.id === 'tire-service';
    return true;
  });

  const handleBookServiceWhatsApp = (title: string) => {
    const message = `السلام عليكم، أرغب في طلب *${title}* من مؤسسة محيط الشرق الأوسط (سطحة صامطة جيزان). أرجو إفادتي بالتفاصيل والسعر للوصول الفوري.`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encoded}`, '_blank');
  };

  return (
    <section id="services" className="py-16 sm:py-20 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#443dfc]/10 dark:bg-blue-950 text-[#443dfc] dark:text-blue-300 font-extrabold text-xs">
            <Sparkles className="w-4 h-4 text-[#fed00e]" />
            خدمات نقل شاملة وموثوقة
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0e0d39] dark:text-white">
            خدمات مؤسسة محيط الشرق الأوسط
          </h2>
          <p className="text-[#3d3c53] dark:text-slate-300 text-base font-medium">
            تغطية ميدانية كاملة في صامطة، جيزان، أبا العريش، صبيا، والطريق السريع 24 ساعة طوال أيام الأسبوع
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'جميع الخدمات (6)' },
            { id: 'towing', label: 'سطحات ونقل سيارات' },
            { id: 'furniture', label: 'نقل عفش وأثاث' },
            { id: 'emergency', label: 'طوارئ الطريق والأبواب المغلقة' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-black transition-all ${
                activeFilter === tab.id
                  ? 'bg-[#443dfc] text-white shadow-md'
                  : 'bg-[#fafafb] dark:bg-slate-800 text-[#0e0d39] dark:text-slate-300 hover:bg-[#e3e3ee] border border-[#e3e3ee]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const Icon = getIconComponent(service.icon);
            return (
              <div
                key={service.id}
                className="group rounded-2xl bg-[#fafafb] dark:bg-slate-800/90 border border-[#e3e3ee] dark:border-slate-700/80 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  {/* Card Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e0d39]/80 via-transparent to-transparent" />
                    
                    {service.badge && (
                      <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#fed00e] text-[#0e0d39] font-black text-xs shadow-md">
                        {service.badge}
                      </span>
                    )}

                    <div className="absolute bottom-3 right-3 left-3 flex items-center justify-between text-white">
                      <div className="flex items-center gap-2">
                        <span className="p-2 rounded-xl bg-[#443dfc] text-white shadow-md">
                          <Icon className="w-5 h-5 text-[#fed00e]" />
                        </span>
                        <span className="text-xs font-black bg-[#0e0d39]/90 px-2.5 py-1 rounded-lg backdrop-blur-sm">
                          {service.priceNote}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-3">
                    <h3 className="text-lg font-black text-[#0e0d39] dark:text-white group-hover:text-[#443dfc] dark:group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#3d3c53] dark:text-slate-300 font-bold line-clamp-2">
                      {service.subtitle}
                    </p>

                    <ul className="space-y-2 pt-2">
                      {service.features.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-[#0e0d39] dark:text-slate-300 font-semibold">
                          <Check className="w-4 h-4 text-[#38ff64] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer / Actions */}
                <div className="p-6 pt-0 space-y-2">
                  <button
                    onClick={() => handleBookServiceWhatsApp(service.title)}
                    className="w-full py-3 px-4 rounded-full bg-[#38ff64] hover:bg-[#2ee356] text-[#0e0d39] font-black text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
                  >
                    <MessageSquare className="w-4 h-4 fill-current text-[#0e0d39]" />
                    <span>طلب الخدمة عبر الواتساب</span>
                  </button>

                  <button
                    onClick={() => {
                      if (service.id === 'monthly-subscription') {
                        setActiveTab('subscriptions');
                      } else {
                        onSelectService(service);
                      }
                    }}
                    className="w-full py-2.5 px-4 rounded-full bg-white dark:bg-slate-700 hover:bg-[#fafafb] dark:hover:bg-slate-600 text-[#0e0d39] dark:text-slate-100 font-extrabold text-xs flex items-center justify-center gap-1.5 border border-[#e3e3ee] dark:border-slate-600 transition-all"
                  >
                    <span>عرض كامل التفاصيل والتأطير</span>
                    <ArrowLeft className="w-4 h-4 text-[#443dfc] dark:text-blue-400" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
