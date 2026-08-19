import React from "react";
import { BRANDS_DATA } from "./brandsData";

const BrandLogoItem = ({ brand }) => {
  return (
    <div
      className="group/item flex h-14 md:h-[3rem] shrink-0 items-center justify-center transition-all duration-300 hover:scale-105 cursor-default select-none"
      title={brand.name}
      aria-label={brand.name}
    >
      {brand.logo ? (
        <img
          src={brand.logo}
          alt={`${brand.name} logo`}
          className="h-10 sm:h-12 max-w-[150px] w-auto object-contain select-none opacity-95 group-hover/item:opacity-100 group-hover/item:scale-105 transition-all duration-300"
          loading="lazy"
        />
      ) : (
        <span className="text-sm md:text-base font-semibold tracking-[0.2em] text-white/80 uppercase group-hover/item:text-white transition-colors">
          {brand.name}
        </span>
      )}
    </div>
  );
};

function BrandMarquee() {
  const set1 = BRANDS_DATA;
  const set2 = BRANDS_DATA;
  const set3 = BRANDS_DATA;
  const set4 = BRANDS_DATA;

  return (
    <section
      aria-label="Companies and products I've worked with"
      className="relative w-full bg-base border-y border-white/[0.06] py-7 md:py-9 overflow-hidden font-sans select-none z-10"
    >
      {/* Background Subtle Room Light Glow */}
      <div className="absolute inset-0 pointer-events-none bg-radial from-white/[0.02] to-transparent opacity-60" />

      {/* Edge Gradient Dissolve Masks (Left & Right) */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-36 bg-gradient-to-r from-base to-transparent z-20" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-36 bg-gradient-to-l from-base to-transparent z-20" />

      {/* Marquee Track Container */}
      <div className="group relative w-full overflow-hidden flex items-center">
        <div className="animate-marquee-track flex items-center gap-6 sm:gap-8 md:gap-12 shrink-0">
          {/* Main accessible list */}
          <div className="flex items-center gap-6 sm:gap-8 md:gap-12 shrink-0">
            {set1.map((brand, idx) => (
              <BrandLogoItem key={`set1-${brand.id}-${idx}`} brand={brand} />
            ))}
          </div>

          <div
            className="flex items-center gap-6 sm:gap-8 md:gap-12 shrink-0"
            aria-hidden="true"
          >
            {set2.map((brand, idx) => (
              <BrandLogoItem key={`set2-${brand.id}-${idx}`} brand={brand} />
            ))}
          </div>

          <div
            className="flex items-center gap-6 sm:gap-8 md:gap-12 shrink-0"
            aria-hidden="true"
          >
            {set3.map((brand, idx) => (
              <BrandLogoItem key={`set3-${brand.id}-${idx}`} brand={brand} />
            ))}
          </div>

          <div
            className="flex items-center gap-6 sm:gap-8 md:gap-12 shrink-0"
            aria-hidden="true"
          >
            {set4.map((brand, idx) => (
              <BrandLogoItem key={`set4-${brand.id}-${idx}`} brand={brand} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrandMarquee;
