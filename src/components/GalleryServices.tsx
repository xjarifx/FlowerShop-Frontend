import { services } from "../data/siteData";
import {
  getCompressedImageSrc,
  handleCompressedImageFallback,
} from "../utils/compressedImage";

export default function GalleryServices() {
  return (
    <section className="bg-zinc-100 px-4 pb-14 sm:pb-18">
      <div className="mx-auto max-w-400">
        <div className="grid gap-6 lg:grid-cols-[9rem_1fr] lg:gap-8">
          <p className="pt-1 text-[0.62rem] font-semibold tracking-wide text-zinc-700 uppercase">
            SERVICES
          </p>

          <div>
            {services.map((service) => (
              <article
                key={service.id}
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
                      src={getCompressedImageSrc(service.image_path)}
                      onError={handleCompressedImageFallback(
                        service.image_path,
                      )}
                      alt={service.title}
                      loading="lazy"
                      decoding="async"
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
