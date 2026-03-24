"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedGradient from "@/components/AnimatedGradient";
import ScrollReveal from "@/components/ScrollReveal";
import {
  ShieldCheck,
  ScanSearch,
  Wrench,
  Activity,
  ArrowRight,
  BadgeCheck,
  Globe,
  Users,
  FileCheck2,
  Sparkles,
  Target,
  ChevronRight,
} from "lucide-react";

const trustItems = ["WCAG 2.2 AA", "ADA", "Section 508", "EN 301 549"];

const values = [
  {
    id: "accountability",
    icon: ShieldCheck,
    title: "Compliance with accountability",
    text: "We combine structured audits, clear documentation, and practical remediation support so teams can reduce risk without slowing delivery.",
  },
  {
    id: "human-expertise",
    icon: Users,
    title: "Human expertise first",
    text: "Automation helps us move faster, but our work is grounded in manual review, real user scenarios, and expert validation.",
  },
  {
    id: "scale",
    icon: Globe,
    title: "Accessibility that scales",
    text: "From marketing sites to enterprise platforms, we help teams build accessibility into their design, development, and release process.",
  },
];

const approach = [
  {
    id: "scan",
    icon: ScanSearch,
    title: "Scan",
    text: "Automated checks surface obvious barriers and create a fast baseline for investigation.",
  },
  {
    id: "audit",
    icon: FileCheck2,
    title: "Audit",
    text: "Manual WCAG testing validates real issues, prioritizes risk, and documents what matters.",
  },
  {
    id: "fix",
    icon: Wrench,
    title: "Fix",
    text: "Developer-ready recommendations and implementation support help teams resolve issues efficiently.",
  },
  {
    id: "monitor",
    icon: Activity,
    title: "Monitor",
    text: "Continuous monitoring helps prevent regressions and keeps accessibility visible over time.",
  },
];

const stats = [
  { id: "pages", value: "20M+", label: "Pages scanned across accessibility workflows" },
  { id: "standards", value: "WCAG 2.2", label: "Standards-based testing and reporting" },
  { id: "rating", value: "4.9/5", label: "Rated by accessibility-focused teams" },
  { id: "support", value: "Fast", label: "Clear audits, fixes, and ongoing support" },
];

const principles = [
  {
    id: "clarity",
    icon: Sparkles,
    title: "Clarity over complexity",
    text: "We turn accessibility work into a clear decision path for product, design, engineering, and compliance teams.",
  },
  {
    id: "execution",
    icon: Target,
    title: "Execution over theory",
    text: "Our findings are written to be implemented, prioritized, and tracked instead of sitting in static reports.",
  },
  {
    id: "trust",
    icon: BadgeCheck,
    title: "Trust by design",
    text: "Every touchpoint is built to feel reliable, polished, and enterprise-ready from first scan to remediation support.",
  },
];

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/90">
      {children}
    </p>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#03111c] text-white">
      <Header />

      <main
        id="main-content"
        className="relative overflow-hidden"
      >
        <AnimatedGradient />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_top_left,rgba(33,211,255,0.16),transparent_34%),radial-gradient(circle_at_80%_10%,rgba(0,145,255,0.12),transparent_24%),linear-gradient(180deg,rgba(8,16,27,0),rgba(3,17,28,0.3))]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[24rem] h-[22rem] w-[22rem] -translate-x-1/2 rounded-full bg-cyan-400/8 blur-3xl sm:top-[28rem] sm:h-[28rem] sm:w-[28rem]"
        />

        <section
          aria-labelledby="about-hero-title"
          className="relative border-b border-white/10"
        >
          <div className="mx-auto max-w-7xl px-5 pb-14 pt-20 sm:px-8 sm:pb-16 sm:pt-24 lg:px-10 lg:pb-24 lg:pt-28">
            <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
              <ScrollReveal>
                <div className="max-w-4xl">
                  <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm font-medium text-cyan-100">
                    <BadgeCheck className="h-4 w-4 text-cyan-300" aria-hidden="true" />
                    Trusted accessibility experts
                  </div>

                  <h1
                    id="about-hero-title"
                    className="max-w-4xl text-balance text-4xl font-semibold leading-[1] tracking-tight text-white sm:text-5xl lg:text-7xl"
                  >
                    We help teams build
                    <span className="block text-cyan-400">
                      accessible digital experiences
                    </span>
                    with confidence.
                  </h1>

                  <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 sm:mt-7 sm:text-lg lg:text-xl">
                    Accessive combines automated monitoring, expert WCAG audits,
                    and practical remediation support to help organizations reduce
                    legal risk and improve usability at scale.
                  </p>

                  <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap">
                    <Link
                      href="/contact"
                      className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-cyan-400 px-7 py-4 text-base font-semibold text-slate-950 transition-all duration-300 ease-out hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#03111c]"
                    >
                      Talk to an expert
                    </Link>

                    <Link
                      href="/compliance"
                      className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/12 bg-white/[0.02] px-7 py-4 text-base font-semibold text-white transition-all duration-300 ease-out hover:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#03111c]"
                    >
                      Explore our process
                    </Link>
                  </div>

                  <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-white/70">
                    <span className="text-amber-300" aria-hidden="true">
                      ★★★★★
                    </span>
                    <span>Rated 4.9 / 5 by accessibility teams</span>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="scale-in" duration={900}>
                <div className="relative">
                  <div
                    className="absolute -inset-4 rounded-[2rem] bg-cyan-400/10 blur-3xl sm:-inset-6"
                    aria-hidden="true"
                  />
                  <div className="relative overflow-hidden rounded-[1.75rem] border border-cyan-400/20 bg-[linear-gradient(180deg,rgba(8,21,36,0.96),rgba(5,16,28,0.98))] p-4 shadow-[0_30px_120px_rgba(0,0,0,0.45)] sm:rounded-[2rem] sm:p-6">
                    <div className="rounded-[1.25rem] border border-white/10 bg-[#071726] p-5 sm:rounded-[1.5rem] sm:p-6">
                      <div className="flex flex-col gap-3 border-b border-white/8 pb-4 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <p className="text-sm font-medium text-white/60">
                            Why teams choose Accessive
                          </p>
                          <p className="mt-1 text-xl font-semibold text-white">
                            Accessibility with action
                          </p>
                        </div>

                        <span className="inline-flex w-fit rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                          Active support
                        </span>
                      </div>

                      <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        {stats.map((stat) => (
                          <div
                            key={stat.id}
                            className="rounded-2xl border border-white/8 bg-white/[0.03] p-5 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-cyan-400/20 hover:bg-white/[0.045]"
                          >
                            <div className="text-3xl font-semibold tracking-tight text-cyan-300">
                              {stat.value}
                            </div>
                            <p className="mt-2 text-sm leading-6 text-white/70">
                              {stat.label}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 rounded-2xl border border-cyan-400/15 bg-cyan-400/5 p-5">
                        <p className="text-sm font-medium text-cyan-200">
                          Our promise
                        </p>
                        <p className="mt-2 text-sm leading-7 text-white/78">
                          Clear findings, developer-ready fixes, and compliance
                          guidance that helps teams move from uncertainty to execution.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="about-us-title"
          className="relative border-b border-white/10"
        >
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-12">
              <ScrollReveal>
                <div>
                  <SectionEyebrow>About us</SectionEyebrow>

                  <h2
                    id="about-us-title"
                    className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
                  >
                    Accessibility is not a checkbox. It is a quality standard.
                  </h2>

                  <p className="mt-6 max-w-xl text-base leading-8 text-white/78 sm:text-lg">
                    We created Accessive to close the gap between automated scans
                    and real accessibility outcomes. Many organizations can detect
                    issues, but fewer have the workflow, documentation, and
                    implementation support to fix them properly.
                  </p>

                  <p className="mt-5 max-w-xl text-base leading-8 text-white/78 sm:text-lg">
                    Our approach combines automation where it helps, manual
                    expertise where it matters, and clear communication throughout
                    the process. The result is accessibility work that is practical,
                    measurable, and ready for enterprise teams.
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {values.map(({ id, icon: Icon, title, text }, index) => (
                  <ScrollReveal key={id} delay={index * 100}>
                    <article className="h-full rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.28)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-cyan-400/25 hover:bg-white/[0.045]">
                      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 backdrop-blur-sm">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>

                      <h3 className="text-lg font-semibold text-white">{title}</h3>

                      <p className="mt-3 text-sm leading-7 text-white/75">
                        {text}
                      </p>
                    </article>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="workflow-title"
          className="relative border-b border-white/10"
        >
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
            <ScrollReveal>
              <div className="max-w-3xl">
                <SectionEyebrow>How we work</SectionEyebrow>

                <h2
                  id="workflow-title"
                  className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
                >
                  A practical workflow built for compliance, delivery, and long-term
                  progress.
                </h2>
              </div>
            </ScrollReveal>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {approach.map(({ id, icon: Icon, title, text }, index) => (
                <ScrollReveal key={id} delay={index * 100}>
                  <article className="group h-full rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] p-6 transition-all duration-300 ease-out hover:border-cyan-400/25 hover:bg-white/[0.04] hover:shadow-[0_20px_80px_rgba(0,0,0,0.28)]">
                    <div className="flex items-center justify-between">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <span className="text-sm font-medium text-white/35">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="mt-6 text-xl font-semibold text-white">
                      {title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-white/75">
                      {text}
                    </p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section
          aria-labelledby="principles-title"
          className="relative border-b border-white/10"
        >
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
            <h2 id="principles-title" className="sr-only">
              Core principles
            </h2>

            <div className="grid gap-5 lg:grid-cols-3">
              {principles.map(({ id, icon: Icon, title, text }, index) => (
                <ScrollReveal key={id} delay={index * 100}>
                  <article className="h-full rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(5,17,28,0.78),rgba(255,255,255,0.02))] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.2)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-cyan-400/20">
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>

                    <h3 className="text-xl font-semibold text-white">{title}</h3>

                    <p className="mt-3 text-sm leading-7 text-white/75">
                      {text}
                    </p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section
          aria-labelledby="standards-title"
          className="relative border-b border-white/10"
        >
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
            <ScrollReveal animation="scale-in" duration={850}>
              <div className="rounded-[1.75rem] border border-cyan-400/20 bg-[linear-gradient(135deg,rgba(20,196,255,0.12),rgba(6,18,31,0.92)_55%)] p-7 shadow-[0_24px_120px_rgba(0,0,0,0.35)] sm:rounded-[2rem] sm:p-10 lg:p-12">
                <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-10">
                  <div>
                    <SectionEyebrow>Built around standards</SectionEyebrow>

                    <h2
                      id="standards-title"
                      className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl"
                    >
                      We support teams working toward resilient, standards-based
                      accessibility.
                    </h2>

                    <p className="mt-5 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
                      Our work is aligned with the frameworks organizations rely on
                      most, from ADA expectations to WCAG 2.2 AA requirements and
                      broader public-sector standards.
                    </p>
                  </div>

                  <Link
                    href="/audit"
                    className="inline-flex min-h-[52px] items-center gap-2 self-start rounded-full border border-white/12 bg-white/[0.04] px-6 py-4 text-sm font-semibold text-white transition-all duration-300 ease-out hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#03111c] lg:self-end"
                  >
                    View our audit approach
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>

                <ul className="mt-10 flex flex-wrap gap-3" aria-label="Supported standards">
                  {trustItems.map((item) => (
                    <li key={item}>
                      <span className="inline-flex rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white/85">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section
          aria-labelledby="contact-cta-title"
          className="relative"
        >
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <ScrollReveal>
                <div>
                  <SectionEyebrow>Let’s build something better</SectionEyebrow>

                  <h2
                    id="contact-cta-title"
                    className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
                  >
                    Need an accessibility partner that combines audits, fixes, and
                    ongoing support?
                  </h2>

                  <p className="mt-5 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
                    We help organizations move faster with clearer reporting,
                    practical remediation guidance, and a more mature accessibility
                    workflow.
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-300">
                    <span>See how Accessive fits your workflow</span>
                    <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                  <Link
                    href="/contact"
                    className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-cyan-400 px-7 py-4 text-base font-semibold text-slate-950 transition-all duration-300 ease-out hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#03111c]"
                  >
                    Book expert audit
                  </Link>

                  <Link
                    href="/scan"
                    className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/12 bg-white/[0.02] px-7 py-4 text-base font-semibold text-white transition-all duration-300 ease-out hover:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#03111c]"
                  >
                    Run free scan
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}