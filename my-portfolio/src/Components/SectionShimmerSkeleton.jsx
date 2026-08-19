import React from "react";

/**
 * SectionShimmerSkeleton
 * Modern shimmer skeleton loader for lazy-loaded sections & components.
 * Renders shimmering dark glass card placeholders with metallic light sheen.
 */
function SectionShimmerSkeleton() {
  return (
    <div className="relative w-full max-w-7xl mx-auto py-16 px-4 sm:px-6 font-sans select-none">
      <div className="rounded-3xl border border-white/10 bg-[#0c0d13]/90 p-8 sm:p-12 backdrop-blur-xl shadow-2xl relative overflow-hidden shimmer-card">
        {/* Shimmer Ambient Light */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent animate-pulse pointer-events-none" />

        {/* Section Header Skeleton */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="h-4 w-32 rounded-full bg-white/[0.08] animate-pulse" />
          <div className="h-9 w-64 sm:w-96 rounded-xl bg-white/[0.1] animate-pulse" />
          <div className="h-4 w-48 sm:w-80 rounded-md bg-white/[0.05] animate-pulse" />
        </div>

        {/* Component Grid Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Mockup Skeleton */}
          <div className="lg:col-span-6 h-64 sm:h-80 w-full rounded-2xl border border-white/10 bg-white/[0.04] animate-pulse relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] via-white/[0.06] to-transparent animate-pulse" />
          </div>

          {/* Right Text & Action Skeleton */}
          <div className="lg:col-span-6 space-y-5">
            <div className="h-4 w-28 rounded-full bg-accent/20 animate-pulse" />
            <div className="h-8 w-3/4 rounded-xl bg-white/[0.1] animate-pulse" />
            <div className="space-y-2">
              <div className="h-4 w-full rounded-md bg-white/[0.05] animate-pulse" />
              <div className="h-4 w-5/6 rounded-md bg-white/[0.05] animate-pulse" />
              <div className="h-4 w-4/6 rounded-md bg-white/[0.05] animate-pulse" />
            </div>
            <div className="flex gap-3 pt-2">
              <div className="h-6 w-20 rounded-full bg-emerald-500/20 animate-pulse" />
              <div className="h-6 w-20 rounded-full bg-sky-500/20 animate-pulse" />
            </div>
            <div className="flex gap-4 pt-4">
              <div className="h-11 w-36 rounded-2xl bg-white/[0.1] animate-pulse" />
              <div className="h-11 w-36 rounded-2xl bg-white/[0.06] animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionShimmerSkeleton;
