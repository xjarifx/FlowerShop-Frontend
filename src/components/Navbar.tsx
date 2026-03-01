export default function Navbar() {
  return (
    <header className="bg-zinc-100 px-4 pt-5 pb-4">
      <nav className="w-full">
        <div className="flex items-center justify-between">
          <a
            href="/"
            className="font-brand text-4xl leading-none text-zinc-900"
          >
            Our Blooms
          </a>

          <ul className="flex items-center gap-10 text-sm font-semibold tracking-wide text-zinc-900 uppercase">
            <li>
              <a
                href="/gallery"
                className="transition-opacity hover:opacity-70"
              >
                Gallery
              </a>
            </li>
            <li>
              <a href="/about" className="transition-opacity hover:opacity-70">
                About
              </a>
            </li>
            <li>
              <a
                href="/#contact"
                className="transition-opacity hover:opacity-70"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-5 border-b border-zinc-700/50" />
      </nav>
    </header>
  );
}
