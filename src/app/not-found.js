export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-6 py-12">
      <div className="max-w-3xl rounded-[2rem] border border-slate-800 bg-slate-900/90 p-10 text-center shadow-2xl shadow-slate-950/40 backdrop-blur">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">404 — Page not found</p>
        <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl">Oops! We can’t find that page.</h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
          The page you are looking for may have been moved, renamed, or no longer exists.
          Head back to the homepage or contact us for help.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Go back home
          </a>
          <a
            href="/contact"
            className="text-sm font-medium text-slate-300 transition hover:text-white"
          >
            Contact support
          </a>
        </div>
      </div>
    </main>
  )
}
