import React from 'react'

export default function AboutUS() {
    return (
        <div className="max-w-5xl mx-auto px-4 py-10">
            <div className="mb-10 rounded-3xl bg-white p-8 shadow-lg">
                <h1 className="text-4xl font-bold mb-4 text-slate-900">About Me</h1>
                <p className="text-gray-600 max-w-3xl leading-8">
                    I am Muhammad Yatoof, a software engineer and web developer with a passion for building modern,
                    responsive web applications that solve real business problems. I combine clean frontend design with
                    reliable backend development to deliver polished digital experiences.
                </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
                <section className="space-y-6 rounded-3xl bg-slate-900 p-8 text-white shadow-lg">
                    <h2 className="text-2xl font-semibold">My Expertise</h2>
                    <ul className="space-y-3 text-slate-200 leading-7">
                        <li>Full-stack web development with React, Next.js, Node.js, and Express</li>
                        <li>Responsive UI/UX design and performance-optimized websites</li>
                        <li>REST API integration, database design, and deployment workflows</li>
                        <li>Clean code, maintainable architecture, and fast iteration</li>
                    </ul>
                </section>

                <section className="space-y-6 rounded-3xl bg-white p-8 shadow-lg">
                    <h2 className="text-2xl font-semibold text-slate-900">How I Work</h2>
                    <div className="space-y-4 text-slate-700 leading-7">
                        <div>
                            <h3 className="text-lg font-semibold">Collaborative Process</h3>
                            <p>
                                I work closely with clients to understand goals, define requirements, and create solutions
                                that align with their vision and timeline.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">Quality Delivery</h3>
                            <p>
                                Every project I build is focused on usability, scalability, and clean implementation so your
                                website or app remains easy to maintain and expand.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">What I Value</h3>
                            <p>
                                Strong communication, attention to detail, and delivering results that help businesses grow online.
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            <div className="mt-12 rounded-3xl bg-slate-100 p-8 text-slate-900">
                <h3 className="text-2xl font-semibold">Let's build something great</h3>
                <p className="mt-4 text-gray-600 leading-7">
                    If you need a website, application, or custom digital solution, I am ready to help. Contact me to discuss your project,
                    and let&apos;s create a fast, modern online presence together.
                </p>
            </div>
        </div>
    )
}
