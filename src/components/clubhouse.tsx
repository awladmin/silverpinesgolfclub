export function Clubhouse() {
  return (
    <section className="py-24 md:py-32 bg-white" id="dining">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="mb-4 text-xs font-medium tracking-[0.25em] uppercase text-gold">
            The Clubhouse
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-normal text-charcoal leading-tight">
            Beyond the fairways
          </h2>
          <p className="mt-8 text-base md:text-lg font-light leading-relaxed text-charcoal/70">
            The clubhouse experience at Silver Pines should feel relaxed,
            polished and timeless — from early coffee before a round to long
            lunches, terrace drinks and evening gatherings overlooking the
            course.
          </p>
        </div>

        {/* Editorial image grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {/* Large image */}
          <div className="md:col-span-7 aspect-[3/2] bg-cream overflow-hidden">
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <svg
                  className="w-10 h-10 mx-auto text-forest/20"
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
                <p className="mt-3 text-sm text-charcoal/20 tracking-wide">
                  Clubhouse Interior
                </p>
              </div>
            </div>
          </div>

          {/* Stacked images */}
          <div className="md:col-span-5 flex flex-col gap-4 md:gap-6">
            <div className="flex-1 aspect-[4/3] md:aspect-auto bg-cream overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <svg
                    className="w-8 h-8 mx-auto text-forest/20"
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
                  <p className="mt-2 text-xs text-charcoal/20 tracking-wide">
                    Terrace Dining
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 aspect-[4/3] md:aspect-auto bg-cream overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <svg
                    className="w-8 h-8 mx-auto text-forest/20"
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
                  <p className="mt-2 text-xs text-charcoal/20 tracking-wide">
                    Evening Lounge
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
