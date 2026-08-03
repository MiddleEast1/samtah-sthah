import React, { useState, useEffect } from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesGrid } from './components/ServicesGrid';
import { SubscriptionSection } from './components/SubscriptionSection';
import { SpecialServicesSection } from './components/SpecialServicesSection';
import { TripCalculatorSection } from './components/TripCalculatorSection';
import { GallerySection } from './components/GallerySection';
import { PaymentAndVerificationSection } from './components/PaymentAndVerificationSection';
import { LocationMapSection } from './components/LocationMapSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { TripBookingWidget } from './components/TripBookingWidget';
import { ServiceItem } from './types';
import { COMPANY_INFO } from './data/companyData';
import { X } from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Synchronize dark theme class on document element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-cairo transition-colors ${darkMode ? 'dark' : ''}`}>
      
      {/* Top Notice Bar */}
      <TopBar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Navigation Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        openBookingModal={() => setIsBookingModalOpen(true)}
      />

      {/* Main Content Router View */}
      <main>
        {activeTab === 'home' && (
          <>
            <HeroSection
              openBookingModal={() => setIsBookingModalOpen(true)}
              setActiveTab={setActiveTab}
            />

            <SubscriptionSection
              onSelectPackage={(title) => {
                const message = `السلام عليكم، أرغب في الاشتراك في *${title}* لمؤسسة محيط الشرق الأوسط (سطحة صامطة جيزان).`;
                window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber1}?text=${encodeURIComponent(message)}`, '_blank');
              }}
            />

            <ServicesGrid
              onSelectService={(service) => setSelectedService(service)}
              setActiveTab={setActiveTab}
            />

            <SpecialServicesSection />

            <TripCalculatorSection />

            <GallerySection />

            <TestimonialsSection />

            <FaqSection />

            <LocationMapSection />
          </>
        )}

        {activeTab === 'services' && (
          <div className="pt-6">
            <ServicesGrid
              onSelectService={(service) => setSelectedService(service)}
              setActiveTab={setActiveTab}
            />
            <SpecialServicesSection />
          </div>
        )}

        {activeTab === 'subscriptions' && (
          <div className="pt-6">
            <SubscriptionSection
              onSelectPackage={(title) => {
                const message = `السلام عليكم، أرغب في الاشتراك في *${title}* لمؤسسة محيط الشرق الأوسط (سطحة صامطة جيزان).`;
                window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber1}?text=${encodeURIComponent(message)}`, '_blank');
              }}
            />
            <FaqSection />
          </div>
        )}

        {activeTab === 'calculator' && (
          <div className="pt-6">
            <TripCalculatorSection />
          </div>
        )}

        {activeTab === 'gallery' && (
          <div className="pt-6">
            <GallerySection />
          </div>
        )}

        {activeTab === 'about' && (
          <div className="pt-6">
            <AboutSection />
            <LocationMapSection />
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="pt-6">
            <ContactSection />
            <LocationMapSection />
          </div>
        )}
      </main>

      {/* Payment Methods, Bank Account and Official SBC Verification Section at the Bottom */}
      <PaymentAndVerificationSection />

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} />

      {/* Service Details Modal Popup */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />

      {/* Quick Booking Modal Popup */}
      {isBookingModalOpen && (
        <div
          onClick={() => setIsBookingModalOpen(false)}
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm p-4 flex items-center justify-center overflow-y-auto animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-xl w-full my-8 animate-in zoom-in-95 duration-200"
          >
            <button
              onClick={() => setIsBookingModalOpen(false)}
              className="absolute -top-12 left-0 p-2 rounded-full bg-slate-800 text-white hover:bg-slate-700 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <TripBookingWidget compact={true} />
          </div>
        </div>
      )}

    </div>
  );
}
