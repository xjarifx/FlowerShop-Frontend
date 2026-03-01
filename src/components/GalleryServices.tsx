const services = [
  {
    title: "FLORAL INSTALLATIONS",
    description:
      "We create clean, contemporary designs that elevate any environment, from intimate gatherings to grand events.",
    image: "/assets/g.jpg",
  },
  {
    title: "NATIVE PLANT ARRANGEMENTS",
    description:
      "Our selection of locally sourced flora brings natural resilience and effortless elegance to your home.",
    image: "/assets/c.jpg",
  },
  {
    title: "CUSTOM FLORAL CONCEPTS",
    description:
      "Your vision, our blooms. We build arrangements that are both personal and exquisitely simple.",
    image: "/assets/e.jpg",
  },
];

export default function GalleryServices() {
  return (
    <section className="bg-zinc-100 px-4 pb-14 sm:pb-18">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-6 lg:grid-cols-[9rem_1fr] lg:gap-8">
          <p className="pt-1 text-[0.62rem] font-semibold tracking-wide text-zinc-700 uppercase">
            SERVICES
          </p>

          <div>
            {services.map((service) => (
              <article
                key={service.title}
                className="border-t border-zinc-300 py-8 sm:py-10"
              >
                <div className="grid gap-6 md:grid-cols-[1fr_0.95fr] md:items-center md:gap-8">
                  <div>
                    <h3 className="max-w-md text-[clamp(2rem,4.2vw,3rem)] leading-[0.95] font-black text-zinc-900 uppercase">
                      {service.title}
                    </h3>
                    <p className="mt-5 max-w-md text-sm leading-6 text-zinc-800">
                      {service.description}
                    </p>
                  </div>

                  <div className="overflow-hidden rounded-3xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
