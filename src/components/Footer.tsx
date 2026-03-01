export default function Footer() {
  return (
    <footer id="contact" className="bg-zinc-100 px-4">
      <div className="mx-auto max-w-[1200px] overflow-hidden rounded-3xl rounded-b-none">
        <div className="relative">
          <img
            src="/assets/f.jpg"
            alt="Orange flower"
            className="h-[18rem] w-full object-cover sm:h-[22rem] md:h-[26rem]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent" />

          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 font-['Caprasimo'] text-5xl leading-none text-white sm:text-6xl md:text-7xl">
            OB.
          </p>

          <div className="absolute right-6 bottom-5 left-6 flex items-center justify-between text-sm font-medium text-white sm:text-base">
            <p>Miami, FL</p>
            <a href="#contact" className="transition-opacity hover:opacity-75">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
