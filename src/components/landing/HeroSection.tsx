import React from 'react';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';

// ============================================================
// HeroSection Organism
// ============================================================

export function HeroSection() {
  return (
    <section
      className="relative h-[819px] min-h-[600px] flex items-center overflow-hidden"
      aria-label="Hero — Connecting Coastal Potential with Digital Markets"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHbcV39mVgMoldlXiPTx_9CEKkjD1ufBo6n5M9uEr5E6wjEF2_BdtIDSevZAqQ3q-yJKfSw3TBmxg7x_2aIHEYvLIl-B5AHNApYDasewQxs-EKgCaALZBKQtvKW6cjBG7YINXakobg155osyyEQ-Hfm8WBv4iXYcdmSKx1BZ_4ZYIkWZkUQpCxj-KffGt5aTy8PpqcypBLlJxcA6-vOvsnRGt5M5jfyoEtlzH_ChZ6E4NcnGIQVVbg1T6_3ZbT3DM4B4oPDr40rS1e"
          alt="A breathtaking aerial view of lush coastal Nipah palm forests in Aceh at sunset"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 hero-gradient" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max)] mx-auto w-full">
        <div className="max-w-2xl">
          <h1 className="font-[var(--font-heading)] text-[48px] font-[700] leading-[56px] tracking-[-0.02em] text-[var(--color-primary)] mb-6">
            Connecting Coastal Potential with Digital Markets
          </h1>
          <p className="text-[18px] leading-[28px] text-[var(--color-on-surface-variant)] mb-10 max-w-lg">
            Empowering artisanal communities in Aceh through sustainable Nipah palm innovation and
            global commerce.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Button variant="primary" size="lg">
              Explore Marketplace
            </Button>
            <Button variant="outline" size="lg">
              Our Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
