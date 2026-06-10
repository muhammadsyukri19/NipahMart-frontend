import React from 'react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';

// ============================================================
// AboutSection Organism
// ============================================================

export function AboutSection() {
  return (
    <section
      className="py-24 px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max)] mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center"
      aria-label="About NipaHub"
    >
      {/* Image + quote */}
      <div className="relative">
        <div className="aspect-square rounded-full overflow-hidden border-[12px] border-[var(--color-surface-container)]">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuATJtpevMwRc7eedPtWF0Rlf1GR91tO4SB7N_Ry0LAAt9ZCGcuOQKX9Ixhklr3KZsSepNC65dc0KX5zQKnL9UFS1bYvfGBc7foMaEA6LL2pvuQQaCG4fzXM-tBDmt7Ps32UI-THNVvOyG7-bKxr0--uuh_vVS3_GqiMMms-0iHb2Wc_EnWzjd6sf8q6fKR7doQbUdmIFH4ONR1KgN90GdIi1tZ8AvyAZYhjpWzslD05WnTNeWkE4xkhmgK5qiW_Z-Fy31tvBplabUtd"
            alt="An Acehnese artisan woman weaving Nipah palm leaves in a naturally lit outdoor workshop"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Floating quote card */}
        <blockquote className="absolute -bottom-6 -right-6 bg-[var(--color-primary)] text-[var(--color-on-primary)] p-8 rounded-[var(--radius-sm)] shadow-xl max-w-xs">
          <p className="font-[var(--font-heading)] text-[24px] font-[600] leading-[32px] italic">
            &ldquo;NipaHub isn&rsquo;t just a shop; it&rsquo;s the lifeline that connects our village&rsquo;s
            past to the world&rsquo;s future.&rdquo;
          </p>
          <footer className="mt-4 text-[14px] font-[600] tracking-[0.05em] opacity-80">
            — Amina, Lead Weaver
          </footer>
        </blockquote>
      </div>

      {/* Text content */}
      <div>
        <SectionLabel text="Our Mission" />
        <h2 className="font-[var(--font-heading)] text-[48px] font-[700] leading-[56px] tracking-[-0.02em] text-[var(--color-primary)] mt-2 mb-6">
          About NipaHub
        </h2>
        <div className="space-y-6 text-[18px] leading-[28px] text-[var(--color-on-surface-variant)]">
          <p>
            Born in the coastal heart of Aceh, NipaHub was founded to bridge the gap between
            traditional mangrove-based livelihoods and the global digital economy.
          </p>
          <p>
            We believe that sustainability is only possible when the communities guarding our
            ecosystems are economically empowered. By optimizing the value chain of the Nipah palm,
            we protect our coastlines and preserve our culture.
          </p>
        </div>
        <Button variant="underline" className="mt-10">
          Read Our Impact Report
        </Button>
      </div>
    </section>
  );
}
