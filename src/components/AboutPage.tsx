const featureImages = [
  { src: "/assets/6.jpg", alt: "Pink stems" },
  { src: "/assets/27.jpg", alt: "Red bloom" },
  { src: "/assets/8.jpg", alt: "White petal" },
];

const introParagraphs = [
  "Lily's journey with flowers began in the heart of Oregon, amid the flourishing fields of her aunts' flower farm. It was there, surrounded by the abundance of nature, that she discovered her passion for floral design. From learning the names of each bloom to understanding the delicate balance of a bouquet, she absorbed the artistry of flowers like rich Oregon soil.",
  "Our Blooms is the expression of that lifelong passion: a place where her love for flowers translates into beautifully curated arrangements that bring joy and elegance to your spaces.",
];

const closingParagraphs = [
  "From humble beginnings, Our Blooms has grown into a beloved local destination, known for its artful arrangements, personal service, and commitment to quality.",
  "Discover how we can add a touch of natural beauty to your next event.",
];

export default function AboutPage() {
  return (
    <section className="bg-zinc-100 px-4 py-10 sm:py-12">
      <div className="mx-auto max-w-400">
        <h1 className="text-4xl font-extrabold text-zinc-900 uppercase sm:text-5xl">
          ABOUT
        </h1>

        <div className="mt-8 grid gap-6 md:grid-cols-[6.5rem_1fr] md:gap-8">
          <p className="pt-1 text-[0.62rem] font-semibold tracking-wide text-zinc-700 uppercase">
            OUR STORY
          </p>

          <div>
            <div className="grid gap-5 md:grid-cols-[minmax(0,17rem)_1fr] md:items-start">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="/assets/owner.jpg"
                  alt="Founder portrait"
                  className="aspect-square w-full object-cover"
                />
              </div>

              <div>
                <div className="text-[0.62rem]">
                  <p className="font-semibold tracking-wide text-zinc-700 uppercase">
                    LILY SMITH
                  </p>
                  <p className="mt-0.5 text-zinc-600">Founder</p>
                </div>
              </div>
            </div>
            <h2 className="mt-7 text-3xl leading-tight font-extrabold text-zinc-900 sm:text-4xl">
              Our Blooms was founded in honor of Lily Smith's loving aunts,
              Teresa and Beth.
            </h2>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {featureImages.map((image) => (
                <img
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  className="aspect-square w-full rounded-2xl object-cover"
                />
              ))}
            </div>

            <div className="mt-8 max-w-3xl space-y-4 text-sm leading-6 text-zinc-800 sm:text-base">
              {introParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 overflow-hidden rounded-2xl">
              <img
                src="/assets/28.jpg"
                alt="Pink tulips"
                className="aspect-[16/7] w-full object-cover"
              />
            </div>

            <div className="mt-8 max-w-3xl space-y-4 text-sm leading-6 text-zinc-800 sm:text-base">
              {closingParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <a
              href="/#work-with-us"
              className="mt-7 inline-flex items-center gap-2 rounded-sm bg-amber-300 px-3 py-1.5 text-[0.62rem] font-extrabold tracking-wide text-zinc-900 uppercase transition-opacity hover:opacity-85"
            >
              <span aria-hidden="true">•</span>
              <span>BOOK A CONSULTATION TODAY</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
