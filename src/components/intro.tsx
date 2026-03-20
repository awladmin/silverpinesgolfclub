export function Intro() {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-warm-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Copy block */}
          <div>
            <p className="mb-4 text-xs font-medium tracking-[0.25em] uppercase text-gold">
              Welcome
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-normal text-charcoal leading-tight">
              A distinctive Surrey golf experience
            </h2>
            <p className="mt-8 text-base md:text-lg font-light leading-relaxed text-charcoal/70">
              Set among mature woodland and gently contoured parkland, Silver
              Pines Golf Club combines strategic course design with a calm sense
              of arrival. Every detail should feel considered — from the opening
              tee to the final putt, and from the clubhouse terrace to the
              practice ground.
            </p>
            <div className="mt-8 w-16 h-px bg-gold/40" />
          </div>

          {/* Image placeholder */}
          <div className="relative aspect-[4/5] bg-cream overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-forest/10 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-forest/30"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p className="text-sm text-charcoal/30 tracking-wide">
                  Course Image
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
