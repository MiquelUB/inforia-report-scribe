
import React from 'react';
import { Header } from '@/components/landing/Header';
import { Hero } from '@/components/landing/Hero';
import { ContactForm } from '@/components/landing/ContactForm';
import { SocialProof } from '@/components/landing/SocialProof';
import { Benefits } from '@/components/landing/Benefits';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { LeadMagnet } from '@/components/landing/LeadMagnet';
import { VideoDemo } from '@/components/landing/VideoDemo';
import { Security } from '@/components/landing/Security';
import { FAQ } from '@/components/landing/FAQ';
import { Footer } from '@/components/landing/Footer';
import { CookiePopup } from '@/components/landing/CookiePopup';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ContactForm />
        <SocialProof />
        <Benefits />
        <HowItWorks />
        <LeadMagnet />
        <VideoDemo />
        <Security />
        <FAQ />
      </main>
      <Footer />
      <CookiePopup />
    </div>
  );
};

export default Index;
