import React from 'react'

export default function loading() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-6 py-12">
      <div className="flex flex-col items-center gap-6 rounded-[2rem] border border-slate-800 bg-slate-900/90 p-10 text-center shadow-2xl shadow-slate-950/40 backdrop-blur">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-800">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-cyan-400 border-t-transparent"></div>
        </div>
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Loading…</h1>
          <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-base">
            Sit tight while we load your experience.
          </p>
        </div>
      </div>
    </main>
  )
}
