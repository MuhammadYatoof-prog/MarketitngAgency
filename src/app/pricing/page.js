import React from 'react'

export default function Pricing() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-slate-900">Project Pricing</h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto leading-7">
          Choose a web development package that fits your business goals. Each plan is tailored for a different stage of your project,
          from a simple landing page to a complete custom web application.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Starter</h2>
          <p className="text-gray-500 mt-2">Best for a polished single-page site or portfolio launch.</p>
          <p className="mt-6 text-4xl font-bold text-slate-900">$350</p>
          <p className="text-sm text-slate-500">Fixed price for a simple website</p>
          <ul className="mt-6 space-y-3 text-slate-700">
            <li>Custom responsive landing page</li>
            <li>Basic UI design and layout</li>
            <li>Contact form integration</li>
            <li>SEO-ready structure</li>
          </ul>
          <button className="mt-8 w-full rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
            Choose Starter
          </button>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white shadow-lg">
          <h2 className="text-2xl font-semibold">Growth</h2>
          <p className="text-slate-300 mt-2">Ideal for small businesses, service sites, and multi-page projects.</p>
          <p className="mt-6 text-4xl font-bold">$850</p>
          <p className="text-sm text-slate-300">Most popular choice for expanding online presence</p>
          <ul className="mt-6 space-y-3 text-slate-200">
            <li>Up to 5 pages with custom design</li>
            <li>Responsive development for desktop and mobile</li>
            <li>CMS-ready or static content setup</li>
            <li>Performance and accessibility best practices</li>
          </ul>
          <button className="mt-8 w-full rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
            Choose Growth
          </button>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Enterprise</h2>
          <p className="text-gray-500 mt-2">For full web applications, custom integrations, and advanced features.</p>
          <p className="mt-6 text-4xl font-bold text-slate-900">$1,750+</p>
          <p className="text-sm text-slate-500">Custom quoted based on project requirements</p>
          <ul className="mt-6 space-y-3 text-slate-700">
            <li>Custom app architecture and backend development</li>
            <li>API integration, authentication, and dashboards</li>
            <li>Ongoing maintenance and support options</li>
            <li>Scalable solution built for growth</li>
          </ul>
          <button className="mt-8 w-full rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
            Contact for Quote
          </button>
        </section>
      </div>

      <div className="mt-12 rounded-3xl bg-slate-100 p-8 text-slate-900">
        <h3 className="text-2xl font-semibold">Need a custom project?</h3>
        <p className="mt-3 text-gray-600 leading-7">
          If your project requires special features or a unique workflow, I can provide a custom proposal.
          Send your project details and I&apos;ll help you choose the best approach and budget.
        </p>
      </div>
    </div>
  )
}
