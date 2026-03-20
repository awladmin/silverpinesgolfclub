export function SignatureCourse() {
  const attributes = [
    { label: "18 holes", sublabel: "Championship length" },
    { label: "Parkland design", sublabel: "Strategic & memorable" },
    { label: "Surrey countryside", sublabel: "Mature woodland setting" },
  ];

  return (
    <section className="py-24 md:py-32 lg:py-40 bg-forest text-white" id="course">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image placeholder */}
          <div className="relative aspect-[4/3] bg-forest-light/30 overflow-hidden order-2 lg:order-1">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <svg
                  className="w-12 h-12 mx-auto text-white/20"
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
                <p className="mt-3 text-sm text-white/20 tracking-wide">
                  Aerial Course View
                </p>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="order-1 lg:order-2">
            <p className="mb-4 text-xs font-medium tracking-[0.25em] uppercase text-gold-light/70">
              The Course
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-normal leading-tight">
              Crafted through pine-lined fairways
            </h2>
            <p className="mt-8 text-base md:text-lg font-light leading-relaxed text-white/70">
              Silver Pines is imagined as a modern Surrey parkland course —
              generous from the tee in places, exacting on approach, and
              memorable throughout. Wide corridors, sculpted bunkering, natural
              framing and pristine green surrounds define the playing experience.
            </p>

            {/* Attributes */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              {attributes.map((attr) => (
                <div key={attr.label} className="border-t border-white/20 pt-4">
                  <p className="text-sm font-medium text-white">
                    {attr.label}
                  </p>
                  <p className="mt-1 text-xs text-white/50">{attr.sublabel}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
