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
          <div className="md:col-span-7 aspect-[3/2] overflow-hidden">
            <img
              src="/dining.jpg"
              alt="Elegant dining room with course views through tall windows"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Stacked images */}
          <div className="md:col-span-5 flex flex-col gap-4 md:gap-6">
            <div className="flex-1 aspect-[4/3] md:aspect-auto overflow-hidden">
              <img
                src="/terrace.jpg"
                alt="Terrace dining with views of the clubhouse and course"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 aspect-[4/3] md:aspect-auto overflow-hidden">
              <img
                src="/bar.jpg"
                alt="The evening bar and lounge with fireplace"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
