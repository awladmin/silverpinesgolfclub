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
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden order-2 lg:order-1">
            <img
              src="/reverse-7th.jpg"
              alt="Aerial view of the 7th hole with sculpted bunkering and rolling Surrey hills"
              className="absolute inset-0 w-full h-full object-cover"
            />
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
