import {
  getCompressedImageSrc,
  handleCompressedImageFallback,
} from "../utils/compressedImage";

const keyTerms = [
  "A signed agreement and 30% retainer confirms your date.",
  "Final invoice is due 5 days before delivery or installation.",
  "Color palette and floral direction are approved after consultation.",
  "Reschedules are based on calendar availability.",
  "Within-10-day cancellations are non-refundable.",
];

const processSteps = [
  {
    title: "Consultation",
    details: "We discuss style, scale, seasonality, and budget.",
  },
  {
    title: "Proposal + Contract",
    details: "You receive mood direction, pricing, and service terms.",
  },
  {
    title: "Booking",
    details: "Sign digitally and submit the retainer to reserve your date.",
  },
  {
    title: "Floral Production",
    details: "Our studio sources and prepares your arrangements.",
  },
  {
    title: "Delivery + Setup",
    details: "Final styling is completed on-site at your venue or space.",
  },
];

export default function ContractPage() {
  return (
    <section className="bg-zinc-100 px-4 py-10 sm:py-14">
      <div className="mx-auto max-w-400">
        <div className="rounded-3xl border border-zinc-300 bg-white/60 p-6 sm:p-8">
          <p className="text-xs font-semibold tracking-wide text-zinc-600 uppercase">
            Floral Service Agreement
          </p>
          <h1 className="mt-2 text-4xl leading-tight font-extrabold text-zinc-900 uppercase sm:text-5xl">
            CONTRACT
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-zinc-800 sm:text-base">
            Every event deserves clarity from day one. This page outlines our
            standard terms, planning flow, and booking expectations so you can
            move forward with confidence.
          </p>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-7">
            <div className="overflow-hidden rounded-3xl">
              <img
                src={getCompressedImageSrc("/assets/6.jpg")}
                onError={handleCompressedImageFallback("/assets/6.jpg")}
                alt="Floral contract planning"
                loading="lazy"
                decoding="async"
                className="h-96 w-full object-cover sm:h-128"
              />
            </div>

            <div className="rounded-3xl border border-zinc-300 bg-white/70 p-6 sm:p-7">
              <h2 className="text-sm font-black tracking-wide text-zinc-900 uppercase">
                Contract Highlights
              </h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-800">
                {keyTerms.map((term) => (
                  <li key={term} className="flex items-start gap-2">
                    <span className="pt-1 text-zinc-500">•</span>
                    <span>{term}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/#work-with-us"
                  className="inline-flex items-center gap-2 rounded-sm bg-amber-300 px-3 py-1.5 text-xs font-extrabold tracking-wide text-zinc-900 uppercase transition-opacity hover:opacity-85"
                >
                  <span aria-hidden="true">•</span>
                  <span>Request Full Contract</span>
                </a>
                <a
                  href="/about"
                  className="inline-flex items-center rounded-sm border border-zinc-400 px-3 py-1.5 text-xs font-extrabold tracking-wide text-zinc-900 uppercase transition-opacity hover:opacity-75"
                >
                  About Our Studio
                </a>
              </div>
            </div>
          </div>

          <aside className="rounded-3xl border border-zinc-300 bg-white/70 p-6 sm:p-7">
            <h2 className="text-sm font-black tracking-wide text-zinc-900 uppercase">
              Project Timeline
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-700">
              Typical contract flow for weddings, brand events, and recurring
              installations.
            </p>

            <ol className="mt-5 space-y-4">
              {processSteps.map((step, index) => (
                <li
                  key={step.title}
                  className="grid grid-cols-[1.8rem_1fr] gap-3"
                >
                  <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full border border-zinc-400 text-xs font-bold text-zinc-800">
                    {index + 1}
                  </span>
                  <div>
                    <p className="text-sm font-semibold tracking-wide text-zinc-900 uppercase">
                      {step.title}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-zinc-700">
                      {step.details}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </div>
    </section>
  );
}
