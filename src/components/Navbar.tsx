import { useState } from "react";
import { Link } from "react-router-dom";
import { prewarmRoute } from "../utils/prefetchImages";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/gallery", label: "Gallery" },
    { href: "/about", label: "About" },
    { href: "/contract", label: "Contract" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-zinc-100 px-4 pt-5">
      <nav className="w-full">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="font-brand text-4xl leading-none text-zinc-900"
          >
            Our Blooms
          </Link>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-zinc-900 md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>

          <ul className="hidden items-center gap-10 text-sm font-semibold tracking-wide text-zinc-900 uppercase md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="transition-opacity hover:opacity-70"
                  onMouseEnter={() => prewarmRoute(link.href)}
                  onFocus={() => prewarmRoute(link.href)}
                  onTouchStart={() => prewarmRoute(link.href)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {isMenuOpen && (
          <ul className="mt-4 flex flex-col gap-3 text-sm font-semibold tracking-wide text-zinc-900 uppercase md:hidden">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="block transition-opacity hover:opacity-70"
                  onMouseEnter={() => prewarmRoute(link.href)}
                  onFocus={() => prewarmRoute(link.href)}
                  onTouchStart={() => prewarmRoute(link.href)}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-5 border-b border-zinc-700/50" />
      </nav>
    </header>
  );
}
