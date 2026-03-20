import Link from "next/link";

export function MembershipCta() {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-warm-white" id="membership">
      <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
        <p className="mb-4 text-xs font-medium tracking-[0.25em] uppercase text-gold">
          Membership
        </p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-normal text-charcoal leading-tight">
          A club designed for those who value the game
        </h2>
        <p className="mt-8 text-base md:text-lg font-light leading-relaxed text-charcoal/70">
          Membership at Silver Pines is positioned around exceptional golf,
          quiet confidence and a shared appreciation for quality. Discover a club
          atmosphere that is as rewarding off the course as it is on it.
        </p>
        <div className="mt-10">
          <Link
            href="#contact"
            className="inline-flex items-center px-8 py-3.5 text-xs font-medium tracking-widest uppercase text-white bg-forest hover:bg-forest-light transition-all duration-300"
          >
            Request Information
          </Link>
        </div>
        <div className="mt-8 w-16 h-px bg-gold/40 mx-auto" />
      </div>
    </section>
  );
}
