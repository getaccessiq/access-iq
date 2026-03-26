"use client";

import React from "react";
import ScrollReveal from "@/components/ScrollReveal";

type StatItem = {
  value: string;
  title: string;
  description: string;
  featured: boolean;
};

const stats: StatItem[] = [
  {
    value: "$13T",
    title: "Market opportunity",
    description:
      "People with disabilities represent one of the largest underserved markets globally.",
    featured: false,
  },
  {
    value: "98%",
    title: "Sites still fail",
    description:
      "Most websites still have accessibility issues that create legal and usability risk.",
    featured: false,
  },
  {
    value: "+23%",
    title: "SEO & traffic lift",
    description:
      "Accessible websites often perform better across search visibility, engagement, and usability signals.",
    featured: false,
  },
  {
    value: "$3B+",
    title: "ADA lawsuit risk",
    description:
      "Accessibility is enforceable and legal exposure continues to grow rapidly across industries every year.",
    featured: true,
  },
];

export default function CaseForAccessibility() {
  return (
    <section className="bg-[#f5f7fb] pb-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="h-px w-full bg-[linear-gradient(90deg,transparent,#d7deea,transparent)]" />

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <ScrollReveal>
            <div className="max-w-xl">
              <span className="inline-flex items-center rounded-full border border-[#d7deea] bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#00a37a]">
                Business impact
              </span>

              <h3 className="mt-6 text-4xl font-semibold tracking-[-0.05em] text-[#0b1220] sm:text-5xl lg:text-6xl">
                Accessibility is a business advantage — not just compliance.
              </h3>

              <p className="mt-6 text-sm leading-7 text-[#5b667a] sm:text-base">
                Companies investing in accessibility don’t just reduce risk —
                they unlock growth, improve SEO, and create better user
                experiences for everyone.
              </p>

              <div className="mt-8 rounded-[24px] border border-[#e2e8f0] bg-white p-5 shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
                <p className="text-sm font-medium text-[#0b1220]">
                  Accessibility isn’t just compliance.
                </p>
                <p className="mt-2 text-sm leading-7 text-[#607086]">
                  It’s growth, trust, performance, and future-proofing your
                  business.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {stats.map((stat, index) => (
              <ScrollReveal key={stat.title} delay={index * 0.08}>
                <article
                  className={`relative overflow-hidden rounded-[26px] border p-6 transition duration-300 hover:-translate-y-1 ${
                    stat.featured
                      ? "border-blue-200 bg-[linear-gradient(180deg,#ffffff_0%,#f3f9ff_100%)]"
                      : "border-[#e4eaf3] bg-white"
                  }`}
                >
                  {stat.featured && (
                    <>
                      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-200/30 blur-2xl" />
                      <div className="absolute -bottom-10 right-0 h-28 w-28 rounded-full bg-cyan-200/20 blur-2xl" />
                    </>
                  )}

                  <div className="relative">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-[#dbe4f0] bg-[#f8fbff] text-[#4c8df6]">
                      {stat.title === "Market opportunity" && <PeopleIcon />}
                      {stat.title === "Sites still fail" && <WarningIcon />}
                      {stat.title === "SEO & traffic lift" && <ChartBarIcon />}
                      {stat.title === "ADA lawsuit risk" && <ShieldIcon />}
                    </div>

                    <div className="text-3xl font-semibold tracking-[-0.03em] text-[#0b1220]">
                      {stat.value}
                    </div>

                    <h4 className="mt-2 text-base font-semibold text-[#0b1220]">
                      {stat.title}
                    </h4>

                    <p className="mt-3 text-sm leading-7 text-[#5f6b7f]">
                      {stat.description}
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PeopleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm8 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM3.5 18.5c0-2.2 2-4 4.5-4s4.5 1.8 4.5 4v1H3.5v-1Zm8 1v-1c0-1.1-.3-2.1-.9-3 3 .1 5.4 1.9 5.4 4v0H11.5Zm4.5 0v-1c0-1.4-.5-2.7-1.4-3.7 2.4.4 4.4 2 4.4 3.7v1H16Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WarningIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 8v5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M12 17.5h.01"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M10.3 4.9 3.8 16.3c-.8 1.5.2 3.2 1.9 3.2h12.6c1.7 0 2.7-1.7 1.9-3.2L13.7 4.9c-.8-1.4-2.8-1.4-3.4 0Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChartBarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 19.5h16"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M7 17v-5"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path
        d="M12 17V8"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path
        d="M17 17v-3"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3.5 18.5 6v5.8c0 4.2-2.6 7.5-6.5 8.7-3.9-1.2-6.5-4.5-6.5-8.7V6L12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="m9.5 12 1.7 1.7 3.5-3.7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}