import React from "react";

const helpCards = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
        <path
          d="M9.8 9.3a2.5 2.5 0 1 1 4.1 2c-.7.6-1.4 1-1.9 1.6-.3.3-.5.7-.5 1.3"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="17.2" r="0.9" fill="currentColor" />
      </svg>
    ),
    title: "Help Center",
    description:
      "Browse remediation guides, step-by-step WCAG fixes, and practical examples.",
    cta: "Explore fixes",
    featured: false,
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M8 3v3M16 3v3M4 9h16M6 21h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H6A2 2 0 0 0 4 8v11a2 2 0 0 0 2 2Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Book a Demo",
    description:
      "Get a guided walkthrough and understand exactly how to fix your issues.",
    cta: "Book expert session",
    featured: false,
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M7 18.5H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9.5a2 2 0 0 1-2 2h-7l-5 3v-3Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Talk to an accessibility expert",
    description:
      "Get immediate guidance on your audit results, ADA risk, and next steps.",
    cta: "Start conversation",
    featured: true,
  },
];

const HelpSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#020b1f] py-20 md:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,212,170,0.08),transparent_22%),radial-gradient(circle_at_80%_55%,rgba(0,153,255,0.14),transparent_28%),linear-gradient(180deg,#031126_0%,#020918_100%)]" />
        <div className="absolute inset-0 opacity-[0.08]" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }} />
        <div className="absolute left-[8%] top-[38%] h-48 w-48 rounded-full bg-cyan-400/10 blur-[90px]" />
        <div className="absolute right-[8%] top-[42%] h-56 w-56 rounded-full bg-[#00d4aa]/10 blur-[110px]" />
        <div className="absolute bottom-[10%] left-1/2 h-24 w-[50%] -translate-x-1/2 bg-cyan-300/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-4xl text-center md:mb-14">
          <p className="text-[12px] font-semibold uppercase tracking-[0.28em] text-cyan-300/90">
            Support options
          </p>

          <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
            Not sure how to fix your accessibility issues?
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-pretty text-lg leading-8 text-white/72 sm:text-xl">
            Based on your audit results, here are your next steps.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {helpCards.map((card) => (
            <article
              key={card.title}
              className={`group relative flex min-h-[430px] flex-col overflow-hidden rounded-[34px] border p-7 shadow-[0_24px_70px_rgba(0,0,0,0.34)] transition-all duration-300 hover:-translate-y-1 ${
                card.featured
                  ? "border-cyan-300/70 bg-[linear-gradient(180deg,rgba(20,54,95,0.96),rgba(11,28,63,0.94))] shadow-[0_0_0_1px_rgba(103,232,249,0.16),0_0_35px_rgba(34,211,238,0.16),0_24px_80px_rgba(0,0,0,0.36)]"
                  : "border-cyan-200/35 bg-[linear-gradient(180deg,rgba(8,25,52,0.96),rgba(5,18,40,0.94))]"
              }`}
            >
              <div
                aria-hidden="true"
                className={`pointer-events-none absolute inset-0 transition-opacity duration-300 ${
                  card.featured ? "opacity-100" : "opacity-60 group-hover:opacity-90"
                }`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(103,232,249,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(0,212,170,0.12),transparent_30%)]" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.45),transparent)]" />
              </div>

              <div className="relative flex h-16 w-16 items-center justify-center rounded-[20px] border border-cyan-200/30 bg-[linear-gradient(180deg,rgba(219,255,251,0.95),rgba(214,250,246,0.88))] text-[#0893d2] shadow-[0_14px_32px_rgba(0,0,0,0.12)]">
                {card.icon}
              </div>

              <h3 className="relative mt-8 max-w-[14ch] text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-white">
                {card.title}
              </h3>

              <p className="relative mt-5 max-w-[30ch] text-lg leading-9 text-white/74">
                {card.description}
              </p>

              <div className="relative mt-auto pt-8">
                <button
                  className={`inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-base font-semibold transition-all duration-300 ${
                    card.featured
                      ? "border border-cyan-200/70 bg-[linear-gradient(135deg,rgba(22,211,232,0.16),rgba(0,136,204,0.28))] text-white shadow-[0_10px_26px_rgba(34,211,238,0.16)] hover:bg-[linear-gradient(135deg,rgba(22,211,232,0.22),rgba(0,136,204,0.34))]"
                      : "bg-[linear-gradient(135deg,#14d8c5,#0a97dd)] text-white shadow-[0_14px_28px_rgba(10,151,221,0.24)] hover:opacity-95"
                  }`}
                  type="button"
                >
                  {card.cta}
                  {card.featured ? (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path
                        d="M3 8h10M9.5 4.5 13 8l-3.5 3.5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : null}
                </button>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-12 text-center text-lg text-white/72 md:mt-14">
          Fix critical accessibility issues before they become a legal risk.
        </p>
      </div>
    </section>
  );
};

export default HelpSection;