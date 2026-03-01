import SpecialOffer from "./SpecialOffer";
import { heroSection } from "../data/siteData";
import OptimizedImage from "./OptimizedImage";

export default function HeroSection() {
  return (
    <section className="bg-zinc-100 px-4 pb-8">
      <div className="mx-auto max-w-400">
        <h1 className="font-brand text-[clamp(3.2rem,11vw,9.2rem)] leading-[0.95] text-zinc-900">
          {heroSection.title}
        </h1>

        <div className="relative mt-6 overflow-hidden rounded-4xl">
          <OptimizedImage
            src={heroSection.image_path}
            alt={heroSection.image_alt}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="h-128 w-full object-cover object-center sm:h-144 lg:h-165"
          />

          <SpecialOffer />
        </div>
      </div>
    </section>
  );
}
