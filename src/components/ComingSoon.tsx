export default function ComingSoon() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-zinc-100 px-4 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <div className="rounded-3xl border border-zinc-300 bg-white/60 p-8 sm:p-12">
          <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-amber-300/30">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-10 w-10 text-zinc-900"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
          </div>
          
          <h1 className="text-5xl font-extrabold text-zinc-900 uppercase sm:text-6xl">
            Coming Soon
          </h1>
          
          <p className="mt-6 text-base leading-7 text-zinc-700 sm:text-lg">
            We're working on something beautiful. This page will be available soon.
          </p>
          
          <div className="mt-8">
            <a
              href="/"
              className="inline-flex items-center gap-2 rounded-sm bg-amber-300 px-5 py-3 text-sm font-extrabold tracking-wide text-zinc-900 uppercase transition-opacity hover:opacity-85"
            >
              <span aria-hidden="true">←</span>
              <span>Back to Home</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
