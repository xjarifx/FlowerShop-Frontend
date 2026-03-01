import SpecialOffer from "./SpecialOffer";
import { heroSection } from "../data/siteData";

export default function HeroSection() {
  return (
    <section className="bg-zinc-100 px-4 pb-8">
      <div className="mx-auto max-w-300">
        <h1 className="font-brand text-[clamp(3.2rem,11vw,9.2rem)] leading-[0.95] text-zinc-900">
          {heroSection.title}
        </h1>

        <div className="relative mt-6 overflow-hidden rounded-4xl">
          <img
            src={heroSection.image_path}
            alt={heroSection.image_alt}
            className="h-[36rem] w-full object-cover object-center"
          />

          <SpecialOffer />
        </div>
      </div>
    </section>
  );
}
