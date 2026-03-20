import Link from "next/link";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="/hero-poster.jpg"
      >
        <source src="/hero-video-reduced.mp4" type="video/mp4" />
      </video>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Hero content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="mb-6 text-xs font-medium tracking-[0.3em] uppercase text-white/70">
          Surrey, England
        </p>
        <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal text-white leading-[1.1] tracking-tight">
          Parkland golf, elevated.
        </h1>
        <p className="mt-8 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed text-white/75">
          Silver Pines Golf Club is a fictional private golf destination set in
          the Surrey countryside, shaped by rolling fairways, mature pines and a
          quietly exceptional club experience.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#course"
            className="inline-flex items-center px-8 py-3.5 text-xs font-medium tracking-widest uppercase text-charcoal bg-white hover:bg-white/90 transition-all duration-300"
          >
            Explore the Course
          </Link>
          <Link
            href="#membership"
            className="inline-flex items-center px-8 py-3.5 text-xs font-medium tracking-widest uppercase text-white border border-white/40 hover:bg-white/10 transition-all duration-300"
          >
            Membership Enquiries
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="h-6 w-6 text-white/50" />
      </div>
    </section>
  );
}
