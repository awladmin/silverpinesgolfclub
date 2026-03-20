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

          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="/distintive-golf.jpg"
              alt="Aerial view of a fairway lined with mature pines and sculpted bunkers"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
