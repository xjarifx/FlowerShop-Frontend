type AboutProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  ctaLabel?: string;
  ctaHref?: string;
  sectionClassName?: string;
};

export default function About({
  id = "about",
  eyebrow = "WHO WE ARE",
  title = "We're Our Blooms® and we're here to help you find your floral story.",
  ctaLabel = "ABOUT US",
  ctaHref = "/about",
  sectionClassName = "bg-zinc-100 px-4 py-24 sm:py-28",
}: AboutProps) {
  return (
    <section id={id} className={sectionClassName}>
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-extrabold tracking-wide text-zinc-700 uppercase">
          {eyebrow}
        </p>

        <h2 className="mx-auto mt-4 max-w-3xl text-[clamp(2rem,4.2vw,3.6rem)] leading-[1.1] font-extrabold text-zinc-900">
          {title}
        </h2>

        <a
          href={ctaHref}
          className="mt-10 inline-flex items-center gap-2 rounded-md bg-amber-300 px-5 py-2.5 text-base font-extrabold text-zinc-900 transition-opacity hover:opacity-85"
        >
          <span aria-hidden="true">•</span>
          <span>{ctaLabel}</span>
        </a>
      </div>
    </section>
  );
}
