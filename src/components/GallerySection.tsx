import React, { useState } from 'react';
import { Camera, Eye, MapPin, Truck, CheckCircle, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      id: '1',
      title: 'سطحة إيسوزو هيدروليك حمراء مجهزة',
      category: 'سطحات',
      location: 'صامطة - جيزان',
      image: '/hero-poster.jpg',
      description: 'سطحتنا الإيسوزو الحمراء لنقل الشواخص والسيارات السليمة والمصدومة مع رافعة أمان.'
    },
    {
      id: '2',
      title: 'نقل سيارات فوربايفور وجيوب',
      category: 'سطحات',
      location: 'طريق جيزان العام',
      image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1000&q=80',
      description: 'نقل احترافي للسيارات الكبيرة وجيوب التويوتا والجموس عبر الطرق السريعة.'
    },
    {
      id: '3',
      title: 'ديانة ونقل عفش وأثاث منازل',
      category: 'نقل عفش',
      location: 'أحد المسارحة / صامطة',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
      description: 'نقل عفش بفرع صامطة مع التغليف والفك والتركيب.'
    },
    {
      id: '4',
      title: 'خدمة فتح السيارات المغلقة بالدقة',
      category: 'طوارئ',
      location: 'وسط مدينة جيزان',
      image: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=1000&q=80',
      description: 'فتح أبواب المركبات بالهواء دون أدنى خدش بالهيكل.'
    },
    {
      id: '5',
      title: 'خدمة شحن واشتراك البطاريات الميدانية',
      category: 'طوارئ',
      location: 'طريق صبيا / أبو عريش',
      image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1000&q=80',
      description: 'بادئ تشغيل سريع وفحص كهرباء السيارة مجاناً.'
    },
    {
      id: '6',
      title: 'تبديل وإصلاح البنشر على الطريق',
      category: 'طوارئ',
      location: 'طريق الخوبة / صامطة',
      image: 'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=1000&q=80',
      description: 'تبديل وتغيير الكفرات بسرعة وحرفية لتأمين طريقك.'
    }
  ];

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-[#fafafb] dark:bg-slate-900/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#443dfc]/10 dark:bg-blue-950 text-[#443dfc] dark:text-blue-300 font-extrabold text-xs">
            <Camera className="w-4 h-4 text-[#fed00e]" />
            معرض الصور والأسطول الميداني
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0e0d39] dark:text-white">
            صور من أعمالنا في صامطة وجيزان
          </h2>
          <p className="text-[#3d3c53] dark:text-slate-300 text-base font-medium">
            استعرض أسطول السطحات الهيدروليكية والشاحنات وفنيي الطوارئ أثناء تنفيذ خدمات النقل
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img) => (
            <div
              key={img.id}
              onClick={() => setSelectedImage(img.image)}
              className="group relative rounded-2xl overflow-hidden bg-white dark:bg-slate-800 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-[#e3e3ee] dark:border-slate-700"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={img.image}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0d39]/90 via-[#0e0d39]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#443dfc] text-white font-black text-xs shadow">
                  {img.category}
                </span>

                <div className="absolute bottom-4 right-4 left-4 space-y-1 text-white">
                  <div className="flex items-center gap-1.5 text-xs text-[#fed00e] font-black">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{img.location}</span>
                  </div>
                  <h3 className="text-base font-black text-white">
                    {img.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-1 font-medium">
                    {img.description}
                  </p>
                </div>

                <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox */}
        {selectedImage && (
          <div
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-[#0e0d39]/90 backdrop-blur-md p-4 flex items-center justify-center cursor-pointer animate-in fade-in duration-200"
          >
            <div className="relative max-w-4xl w-full max-h-[90vh] overflow-hidden rounded-2xl border border-white/20">
              <img
                src={selectedImage}
                alt="صورة مكبرة"
                className="w-full h-auto max-h-[85vh] object-contain mx-auto"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 left-4 px-4 py-2 rounded-full bg-[#0e0d39]/80 text-white font-bold text-xs border border-white/20"
              >
                إغلاق (X)
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
