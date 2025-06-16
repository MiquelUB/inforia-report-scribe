
import React from 'react';
import { Header } from '@/components/landing/Header';
import { Hero } from '@/components/landing/Hero';
import { Benefits } from '@/components/landing/Benefits';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { VideoDemo } from '@/components/landing/VideoDemo';
import { LeadMagnet } from '@/components/landing/LeadMagnet';
import { SocialProof } from '@/components/landing/SocialProof';
import { Security } from '@/components/landing/Security';
import { ContactForm } from '@/components/landing/ContactForm';
import { Footer } from '@/components/landing/Footer';
import { CookiePopup } from '@/components/landing/CookiePopup';

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Benefits />
      <HowItWorks />
      <VideoDemo />
      <LeadMagnet />
      <SocialProof />
      <Security />
      <ContactForm />
      <Footer />
      <CookiePopup />
    </div>
  );
};
