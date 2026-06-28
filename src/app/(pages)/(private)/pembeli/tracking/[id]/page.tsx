'use client';

import React, { use } from 'react';
import { MOCK_TRACKING_DATA } from '@/constants/dummyData';
import { TrackingHeader } from '@/components/tracking/TrackingHeader';
import { TraceabilityTimeline } from '@/components/tracking/TraceabilityTimeline';

export default function TrackingPage({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = use(params);
  
  // In real app, we would fetch data based on params.id
  const data = MOCK_TRACKING_DATA;

  return (
    <main className="flex-1 pt-[24px] lg:pt-[36px] w-full max-w-[1000px] mx-auto px-8 md:px-16 lg:px-24 pb-20">
      <TrackingHeader 
        orderId={unwrappedParams.id || data.orderId}
        status={data.status}
        estimatedArrival={data.estimatedArrival}
      />

      <div className="flex flex-col gap-8">
        <TraceabilityTimeline timeline={data.timeline} />
      </div>
    </main>
  );
}
