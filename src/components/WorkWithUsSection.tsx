import About from "./About";

export default function WorkWithUsSection() {
  return (
    <section className="bg-zinc-100 px-4 pb-24 sm:pb-28">
      <div className="mx-auto max-w-400">
        <div className="overflow-hidden rounded-3xl">
          <img
            src="/assets/27.jpg"
            alt="Purple flower arrangement"
            className="h-96 w-full object-cover sm:h-112 md:h-128"
          />
        </div>
      </div>

      <About
        id="work-with-us"
        eyebrow="WORK WITH US"
        title="Discover how we can add a touch of natural beauty to your next event."
        ctaLabel="ABOUT US"
        ctaHref="/about"
        sectionClassName="bg-zinc-100 px-4 pt-16 pb-0 sm:pt-20"
      />
    </section>
  );
}
