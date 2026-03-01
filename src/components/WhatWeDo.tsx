const services = [
  {
    number: "1",
    image: "/assets/17.jpg",
    title: "FLORAL INSTALLATIONS",
    description: "Living art for homes, businesses, and events.",
  },
  {
    number: "2",
    image: "/assets/22.jpg",
    title: "NATIVE PLANT ARRANGEMENTS",
    description:
      "Whether it's a private retreat or a public space, we craft floral experiences that blend beauty and aspiration.",
  },
  {
    number: "3",
    image: "/assets/26.jpg",
    title: "CUSTOM FLORAL CONCEPTS",
    description:
      "Your vision, our blooms. We build arrangements that are both personal and captivating, with floral language and purpose.",
  },
];

export default function WhatWeDo() {
  return (
    <section className="bg-zinc-100 px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-zinc-900 sm:text-4xl">
            WHAT WE DO
          </h2>
          <p className="mt-2 text-xs text-zinc-700 sm:text-sm">
            We bring a touch of that simple magic into your world.
          </p>
        </div>

        <div className="mt-8 border-t border-zinc-300" />

        {services.map((service, index) => (
          <article key={service.title} className="text-center">
            <div className="py-10">
              <p className="text-4xl leading-none font-bold text-zinc-900">
                {service.number}
              </p>

              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
                decoding="async"
                className="mx-auto mt-6 h-24 w-24 rounded-xl object-cover"
              />

              <h3 className="mx-auto mt-7 max-w-3xl text-[clamp(1.7rem,4vw,2.6rem)] leading-tight font-extrabold text-zinc-900">
                {service.title}
              </h3>

              <p className="mx-auto mt-4 max-w-xl text-xs leading-5 text-zinc-700 sm:text-sm">
                {service.description}
              </p>
            </div>

            {index < services.length - 1 && (
              <div className="border-b border-zinc-300" />
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
