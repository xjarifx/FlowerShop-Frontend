import SpecialOffer from "./SpecialOffer";

export default function HeroSection() {
  return (
    <section className="bg-zinc-100 px-4 pb-8">
      <div className="mx-auto max-w-300">
        <h1 className="font-['Caprasimo'] text-[clamp(3.2rem,11vw,9.2rem)] leading-[0.95] text-zinc-900">
          Our Blooms®
        </h1>

        <div className="relative mt-6 overflow-hidden rounded-4xl">
          <img
            src="/assets/e.jpg"
            alt="Pink flower"
            className="h-[36rem] w-full object-cover object-center"
          />

          <SpecialOffer />
        </div>
      </div>
    </section>
  );
}
