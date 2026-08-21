import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { EmergencyBanner } from './components/EmergencyBanner';
import { QuickRequestSection } from './components/QuickRequestSection';
import { ServicesSection } from './components/ServicesSection';
import { RiskSection } from './components/RiskSection';
import { WhyUsSection } from './components/WhyUsSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { ReviewsSection } from './components/ReviewsSection';
import { TrustSection } from './components/TrustSection';
import { ServiceAreaSection } from './components/ServiceAreaSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* Top sticky Navigation */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Emergency Notice Banner */}
        <EmergencyBanner />

        {/* 3. Interactive Quick WhatsApp Request Generator */}
        <QuickRequestSection />

        {/* 4. 10 Core Plumbing Services */}
        <ServicesSection />

        {/* 5. Don't Risk It / Prevent Escalation Section */}
        <RiskSection />

        {/* 6. Why Cankur Su Tesisat (6 Verified Pillars) */}
        <WhyUsSection />

        {/* 7. 3-Step Simple Process */}
        <HowItWorksSection />

        {/* 8. Google Customer Reviews & Ratings */}
        <ReviewsSection />

        {/* 9. Peace of Mind / Trust Section */}
        <TrustSection />

        {/* 10. Service Locations (Küçükçekmece & Surrounding) */}
        <ServiceAreaSection />

        {/* 11. Frequently Asked Questions (10 Questions) */}
        <FaqSection />

        {/* 12. Contact, Details & Google Maps */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Bottom CTA Bar */}
      <MobileStickyBar />
    </div>
  );
}
