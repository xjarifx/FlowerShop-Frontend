import { useRef } from "react";

const flowerImages = [
  "/assets/a.jpg",
  "/assets/b.jpg",
  "/assets/c.jpg",
  "/assets/d.jpg",
  "/assets/f.jpg",
  "/assets/g.jpg",
  "/assets/h.jpg",
];

export default function Slider() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollSlider = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    const firstCard = sliderRef.current.querySelector("[data-slide='true']");
    const cardWidth =
      firstCard instanceof HTMLElement ? firstCard.offsetWidth : 0;
    const track = firstCard?.parentElement;
    const gapValue =
      track instanceof HTMLElement
        ? Number.parseFloat(window.getComputedStyle(track).columnGap || "0")
        : 0;
    const scrollAmount =
      cardWidth + gapValue || sliderRef.current.clientWidth * 0.85;
    const offset = direction === "left" ? -scrollAmount : scrollAmount;

    sliderRef.current.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <section className="bg-zinc-100 py-10">
      <div className="relative mx-auto max-w-[1820px] px-4">
        <button
          type="button"
          onClick={() => scrollSlider("left")}
          aria-label="Previous flowers"
          className="absolute top-1/2 left-8 z-10 hidden h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-300 bg-white text-3xl leading-none text-zinc-900 shadow-sm transition hover:bg-zinc-100 lg:flex"
        >
          ‹
        </button>

        <div
          ref={sliderRef}
          className="overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <div className="mx-auto flex w-max min-w-full snap-x snap-mandatory gap-6">
            {flowerImages.map((image, index) => (
              <div
                key={`${image}-${index}`}
                data-slide="true"
                className="aspect-square w-[clamp(16rem,30vw,28rem)] shrink-0 snap-start overflow-hidden rounded-[2.2rem]"
              >
                <img
                  src={image}
                  alt="Flower"
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={() => scrollSlider("right")}
          aria-label="Next flowers"
          className="absolute top-1/2 right-8 z-10 hidden h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-300 bg-white text-3xl leading-none text-zinc-900 shadow-sm transition hover:bg-zinc-100 lg:flex"
        >
          ›
        </button>
      </div>
    </section>
  );
}
