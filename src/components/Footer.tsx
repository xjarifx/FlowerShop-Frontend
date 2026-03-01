import { footerSection } from "../data/siteData";
import OptimizedImage from "./OptimizedImage";

export default function Footer() {
  return (
    <footer id="contact" className="bg-zinc-100 px-4">
      <div className="w-full overflow-hidden rounded-t-3xl">
        <div className="relative">
          <OptimizedImage
            src={footerSection.image_path}
            alt={footerSection.image_alt}
            loading="lazy"
            decoding="async"
            className="h-[18rem] w-full object-cover sm:h-[22rem] md:h-[26rem]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent" />

          <p className="font-brand absolute bottom-6 left-1/2 -translate-x-1/2 text-5xl leading-none text-white sm:text-6xl md:text-7xl">
            {footerSection.brand}
          </p>

          <div className="absolute right-6 bottom-5 left-6 flex items-center justify-between text-sm font-medium text-white sm:text-base">
            <p>{footerSection.location}</p>
            <a href="#contact" className="transition-opacity hover:opacity-75">
              {footerSection.contact_label}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
