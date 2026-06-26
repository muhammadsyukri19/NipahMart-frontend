import React from 'react';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
import { HeroSection } from '@/components/landing/HeroSection';
import { WhyNipahSection } from '@/components/landing/WhyNipahSection';
import { FeaturedProductsSection } from '@/components/landing/FeaturedProductsSection';
import { AboutSection } from '@/components/landing/AboutSection';
import { SdgsSection } from '@/components/landing/SdgsSection';
import { CommunityStoriesSection } from '@/components/landing/CommunityStoriesSection';
import { NewsletterSection } from '@/components/landing/NewsletterSection';

export default function LandingPage() {
  return (
    <>
      <Navbar />

      <main className="pt-16" id="main-content">
        <HeroSection />
        <WhyNipahSection />
        <FeaturedProductsSection />
        <AboutSection />
        <SdgsSection />
        <CommunityStoriesSection />
        <NewsletterSection />
      </main>

      <Footer />
    </>
  );
}
