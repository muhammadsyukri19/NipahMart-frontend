'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';

// ============================================================
// NewsletterSection Organism — CTA with email subscription
// ============================================================

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section
      id="newsletter"
      className="py-24 px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max)] mx-auto mb-12"
      aria-label="Newsletter sign-up"
    >
      <div className="bg-[var(--color-surface-container-high)] rounded-[var(--radius-xl)] p-16 text-center border border-[var(--color-outline-variant)]">
        <h2 className="font-[var(--font-heading)] text-[48px] font-[700] leading-[56px] tracking-[-0.02em] text-[var(--color-primary)] mb-6">
          Stay Connected to the Coast
        </h2>
        <p className="text-[18px] leading-[28px] text-[var(--color-on-surface-variant)] mb-10 max-w-xl mx-auto">
          Join our newsletter to receive stories from our artisans and early access to limited
          edition craft drops.
        </p>

        {submitted ? (
          <p className="text-[var(--color-tertiary)] text-[16px] font-[600]">
            ✓ Thank you for subscribing! We&rsquo;ll be in touch soon.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto"
            aria-label="Newsletter subscription form"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 bg-[var(--color-surface-bright)] border border-[var(--color-outline)] rounded-[var(--radius-sm)] px-6 py-4 text-[16px] text-[var(--color-on-surface)] placeholder:text-[var(--color-on-surface-variant)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] transition-all duration-200"
            />
            <Button variant="primary" size="lg" type="submit">
              Subscribe
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
