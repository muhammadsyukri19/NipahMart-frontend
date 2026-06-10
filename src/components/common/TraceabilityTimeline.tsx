import React from 'react';
import type { TraceabilityStep } from '@/types/product';
import { Icon } from '@/components/ui/Icon';

// ============================================================
// TraceabilityTimeline Organism
// ============================================================

interface TraceabilityTimelineProps {
  steps: TraceabilityStep[];
}

export function TraceabilityTimeline({ steps }: TraceabilityTimelineProps) {
  return (
    <section className="py-24 border-t border-[var(--color-outline-variant)]" aria-label="Product traceability">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="font-[var(--font-heading)] text-[32px] font-[600] leading-[40px] text-[var(--color-primary)] mb-4">
          Honest Traceability
        </h2>
        <p className="text-[16px] leading-[24px] text-[var(--color-on-surface-variant)]">
          We believe in radical transparency. Follow the journey of your product from the mangrove
          forests to your doorstep.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative px-8 lg:px-24">
        {/* Connecting line (desktop only) */}
        <div
          className="absolute top-1/2 left-0 w-full h-[1px] bg-[var(--color-outline-variant)] hidden md:block"
          aria-hidden="true"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-[var(--color-surface-container)] p-8 text-center group hover:bg-[var(--color-primary)] hover:text-white transition-all duration-500 rounded-xl"
            >
              {/* Icon circle */}
              <div className="w-16 h-16 bg-[var(--color-background)] rounded-full mx-auto flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon
                  name={step.icon}
                  size="lg"
                  className="text-[var(--color-primary)] group-hover:text-[var(--color-primary)]"
                />
              </div>

              <h3 className="font-[var(--font-heading)] text-[24px] font-[600] leading-[32px] mb-2">
                {step.title}
              </h3>
              <p className="text-[14px] font-[600] tracking-[0.05em] mb-4 opacity-70">
                {step.subtitle}
              </p>
              <p className="text-[16px] leading-[24px]">{step.description}</p>

              <div className="mt-4 pt-4 border-t border-[var(--color-outline-variant)] group-hover:border-white/20 text-[12px] font-[500]">
                {step.metadata}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
