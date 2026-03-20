import Link from "next/link";
import { ArrowRight } from "lucide-react";

const features = [
  {
    id: "course",
    title: "The Course",
    description:
      "An 18-hole parkland layout that rewards strategic thinking and precise shot-making. Wide corridors give way to exacting approaches, sculpted bunkering and pristine green complexes that demand respect from every level of player.",
    link: "#course",
    linkText: "Discover the course",
    image: "/silver-pines-7th.jpg",
    imageAlt: "Aerial view of a parkland fairway winding through mature trees",
  },
  {
    id: "membership",
    title: "Membership",
    description:
      "A club built around shared values of quality, quiet confidence and genuine appreciation for the game. Membership at Silver Pines offers something increasingly rare — a community that feels both prestigious and welcoming.",
    link: "#membership",
    linkText: "Explore membership",
    image: "/clubhouse.jpg",
    imageAlt: "The grand clubhouse exterior overlooking the course",
  },
  {
    id: "visitors",
    title: "Visitors",
    description:
      "A carefully curated guest experience that reflects the standards of the club. Limited tee times are made available throughout the season, offering a genuine taste of Silver Pines and everything the club represents.",
    link: "#visitors",
    linkText: "Plan your visit",
    image: "/proshop.jpg",
    imageAlt: "Golf bags at the clubhouse entrance with fairway views beyond",
  },
];

export function Features() {
  return (
    <section className="py-24 md:py-32 bg-white" id="visitors">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group relative bg-cream/50 p-8 md:p-10 transition-all duration-500 hover:bg-cream"
            >
              <div className="aspect-[3/2] mb-8 bg-cream overflow-hidden">
                {feature.image ? (
                  <img
                    src={feature.image}
                    alt={feature.imageAlt ?? ""}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-forest/20"
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
                )}
              </div>

              <h3 className="font-heading text-2xl font-normal text-charcoal mb-4">
                {feature.title}
              </h3>
              <p className="text-sm font-light leading-relaxed text-charcoal/60 mb-8">
                {feature.description}
              </p>
              <Link
                href={feature.link}
                className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-forest group-hover:text-forest-light transition-colors"
              >
                {feature.linkText}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
