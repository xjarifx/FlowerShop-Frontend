import { galleryItems } from "../data/siteData";

export default function Gallery() {
  return (
    <section id="gallery" className="bg-zinc-100 px-4 py-14 sm:py-18">
      <div className="mx-auto max-w-400">
        <h2 className="text-4xl font-extrabold text-zinc-900 uppercase sm:text-5xl">
          GALLERY
        </h2>

        <div className="mt-10 grid gap-7 lg:grid-cols-[10rem_1fr] lg:gap-6">
          <div className="text-[0.65rem] leading-4 font-semibold tracking-wide text-zinc-700 uppercase">
            <p>SEASONAL</p>
            <p>ARRANGEMENTS</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item) => (
              <article key={item.id}>
                <div className="mb-2.5 flex items-baseline gap-1.5">
                  <h3 className="text-sm font-black tracking-wide text-zinc-900 uppercase">
                    {item.name}
                  </h3>
                  <p className="text-[0.65rem] font-medium text-zinc-700">
                    {item.price}
                  </p>
                </div>

                <div className="overflow-hidden rounded-3xl">
                  <img
                    src={item.image_path}
                    alt={item.name}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
