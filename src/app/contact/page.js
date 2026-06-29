import React from 'react'

export default function ContactUs() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="mb-10 rounded-3xl bg-white p-8 shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-slate-900">Contact Me</h1>
        <p className="text-gray-600 max-w-2xl leading-7">
          I'm Muhammad Yatoof, a software engineer and web developer who builds modern, scalable web applications
          with clean user interfaces and dependable backend systems. If you are looking for a developer who can
          turn your idea into a polished, production-ready website or app, I&apos;m ready to collaborate.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <section className="space-y-6 rounded-3xl bg-slate-900 p-8 text-white shadow-lg">
          <h2 className="text-2xl font-semibold">About Me</h2>
          <p className="leading-7 text-slate-200">
            I design and develop responsive websites, web applications, and user experiences that perform reliably
            across devices. My background combines front-end development, back-end engineering, and practical UI/UX
            thinking to deliver solutions that look great and scale well.
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Technical Expertise</h3>
              <p className="text-slate-300 leading-6">
                React, Next.js, Node.js, Express, REST APIs, responsive layouts, component-based architecture, and
                clean code practices.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">What I Build</h3>
              <p className="text-slate-300 leading-6">
                Landing pages, corporate websites, portfolios, SaaS dashboards, e-commerce experiences, and blog platforms.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Why Work With Me</h3>
              <p className="text-slate-300 leading-6">
                I focus on clean implementation, fast performance, maintainable code, and effective communication
                to ensure your project succeeds from start to launch.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-6 rounded-3xl bg-white p-8 shadow-lg">
          <h2 className="text-2xl font-semibold text-slate-900">Get in Touch</h2>
          <p className="text-gray-600 leading-7">
            Have a project in mind or need help with a website? Reach out and let&apos;s discuss how I can support
            your next software or web development project.
          </p>

          <div className="space-y-4 rounded-2xl bg-slate-100 p-6">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Email</p>
              <p className="text-base font-medium text-slate-900">muhammadyatoof@gmail.com</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Phone</p>
              <p className="text-base font-medium text-slate-900">+92 302 010 1328</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Location</p>
              <p className="text-base font-medium text-slate-900">Karachi, Pakistan</p>
            </div>
          </div>

          <form className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-medium text-slate-700">Name</span>
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-700"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-slate-700">Email</span>
                <input
                  type="email"
                  placeholder="Your email"
                  className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-700"
                />
              </label>
            </div>
            <label className="block">
              <span className="text-sm font-medium text-slate-700">Message</span>
              <textarea
                rows="5"
                placeholder="Tell me about your project or question"
                className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-700"
              />
            </label>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Send Message
            </button>
          </form>
        </section>
      </div>
    </div>
  )
}
