"use client";

import React, { useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import AnimatedGradient from "./AnimatedGradient";
import ScrollReveal from "./ScrollReveal";
import { helpCenterArticles, type HelpArticle } from "@/data/helpCenterArticles";

type ResourceCard = {
  title: string;
  description: string;
  cta: string;
  icon: "start" | "testing" | "legal";
  href: string;
};

type ArticleItem = HelpArticle;

const resourceCards: ResourceCard[] = [
  {
    title: "Getting Started",
    description:
      "Learn the foundations of accessibility compliance and the first steps for improving your website.",
    cta: "Getting Started Guide",
    icon: "start",
    href: "/help-center/understanding-wcag-beginners-guide",
  },
  {
    title: "Accessibility Testing",
    description:
      "Discover how to test your website for accessibility issues and prioritize what to fix first.",
    cta: "Guides & Testing Tools",
    icon: "testing",
    href: "/help-center/accessibility-audit-best-practices",
  },
  {
    title: "Compliance & Legal Risk",
    description:
      "Understand legal requirements, risk exposure, and how to reduce the chance of ADA lawsuits.",
    cta: "Compliance Requirements",
    icon: "legal",
    href: "/help-center/creating-ada-compliance-checklist",
  },
];

function SearchIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M21 21L16.65 16.65"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12H19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path
        d="M13 6L19 12L13 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3L13.9 8.1L19 10L13.9 11.9L12 17L10.1 11.9L5 10L10.1 8.1L12 3Z"
        fill="currentColor"
      />
    </svg>
  );
}

function StartIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 30 30" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="startGrad" x1="5" y1="15" x2="25" y2="15" gradientUnits="userSpaceOnUse">
          <stop stopColor="#24D3A7" />
          <stop offset="1" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
      <path
        d="M15 4L22 8V14C22 19 18.7 23.2 15 24.5C11.3 23.2 8 19 8 14V8L15 4Z"
        stroke="url(#startGrad)"
        strokeWidth="2.2"
      />
      <path
        d="M15 10V16"
        stroke="url(#startGrad)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="15" cy="19.5" r="1.2" fill="#24D3A7" />
    </svg>
  );
}

function TestingIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 30 30" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="testingGrad" x1="5" y1="15" x2="25" y2="15" gradientUnits="userSpaceOnUse">
          <stop stopColor="#24D3A7" />
          <stop offset="1" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
      <rect x="6" y="7" width="18" height="17" rx="4" stroke="url(#testingGrad)" strokeWidth="2.2" />
      <path d="M10 4.8V9" stroke="url(#testingGrad)" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M20 4.8V9" stroke="url(#testingGrad)" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M9.5 13.5H20.5" stroke="url(#testingGrad)" strokeWidth="2.2" strokeLinecap="round" />
      <path
        d="M11.5 17L14 19.5L19 14.5"
        stroke="url(#testingGrad)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LegalIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 30 30" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="legalGrad" x1="5" y1="15" x2="25" y2="15" gradientUnits="userSpaceOnUse">
          <stop stopColor="#24D3A7" />
          <stop offset="1" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
      <path d="M15 6V24" stroke="url(#legalGrad)" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M9 10H21" stroke="url(#legalGrad)" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M10 10L7 15H13L10 10Z" stroke="url(#legalGrad)" strokeWidth="2" strokeLinejoin="round" />
      <path d="M20 10L17 15H23L20 10Z" stroke="url(#legalGrad)" strokeWidth="2" strokeLinejoin="round" />
      <path d="M11 24H19" stroke="url(#legalGrad)" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

function ChatBubbleIcon() {
  return (
    <svg width="54" height="54" viewBox="0 0 34 34" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="chatBubbleGrad" x1="5" y1="17" x2="29" y2="17" gradientUnits="userSpaceOnUse">
          <stop stopColor="#24D3A7" />
          <stop offset="1" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
      <path
        d="M9.5 8H24.5C27 8 29 10 29 12.5V17.5C29 20 27 22 24.5 22H17.8L12.2 26.1C11.3 26.8 10 26.1 10 25V22H9.5C7 22 5 20 5 17.5V12.5C5 10 7 8 9.5 8Z"
        fill="url(#chatBubbleGrad)"
      />
      <circle cx="13" cy="15" r="1.3" fill="white" />
      <circle cx="17" cy="15" r="1.3" fill="white" />
      <circle cx="21" cy="15" r="1.3" fill="white" />
    </svg>
  );
}

function ResourceCardIcon({ type }: { type: ResourceCard["icon"] }) {
  return (
    <div className="mb-7 flex h-24 w-24 items-center justify-center rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.075),rgba(255,255,255,0.04))] shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_10px_30px_rgba(34,211,238,0.12)]">
      {type === "start" && <StartIcon />}
      {type === "testing" && <TestingIcon />}
      {type === "legal" && <LegalIcon />}
    </div>
  );
}

function ResourceCard({ title, description, cta, icon, href }: ResourceCard) {
  return (
    <a
      href={href}
      className="group flex h-full flex-col rounded-[30px] border border-white/10 bg-white/[0.04] p-7 shadow-[0_20px_60px_rgba(0,0,0,0.20)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-300/25 hover:bg-white/[0.055] hover:shadow-[0_28px_80px_rgba(0,0,0,0.28)] md:p-8"
    >
      <ResourceCardIcon type={icon} />

      <h3 className="text-[22px] font-semibold tracking-[-0.03em] text-white md:text-[24px]">
        {title}
      </h3>

      <p className="mt-4 flex-1 text-[16px] leading-8 text-slate-300">{description}</p>

      <div className="mt-8 inline-flex items-center gap-2 text-[16px] font-semibold text-cyan-300 transition group-hover:gap-3 group-hover:text-cyan-200">
        <span>{cta}</span>
        <ArrowRightIcon />
      </div>
    </a>
  );
}

function ArticleTag({
  children,
  tone = "default",
}: {
  children: React.ReactNode;
  tone?: "default" | "compliance" | "strategy" | "testing";
}) {
  const toneClass =
    tone === "compliance"
      ? "bg-[#10352d] text-[#7ce1c4]"
      : tone === "strategy"
        ? "bg-[#1b2340] text-[#9cabff]"
        : tone === "testing"
          ? "bg-[#102b36] text-[#79d6ff]"
          : "bg-white/10 text-slate-300";

  return (
    <span
      className={`rounded-full px-3 py-1 text-[12px] font-semibold tracking-[0.01em] ${toneClass}`}
    >
      {children}
    </span>
  );
}

function getArticleTone(tag: ArticleItem["tag"]) {
  if (tag === "Compliance") return "compliance";
  if (tag === "Strategy") return "strategy";
  if (tag === "Testing") return "testing";
  return "default";
}

function ArticleRow({ slug, title, tag }: ArticleItem) {
  return (
    <a
      href={`/help-center/${slug}`}
      className="group flex items-center justify-between gap-4 rounded-[22px] border border-transparent px-3 py-3 transition-all duration-200 hover:border-white/10 hover:bg-white/[0.03]"
    >
      <div className="flex min-w-0 items-center gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] text-cyan-300">
          <SearchIcon />
        </div>

        <span className="truncate text-[18px] tracking-[-0.02em] text-white transition group-hover:text-cyan-200">
          {title}
        </span>
      </div>

      <ArticleTag tone={getArticleTone(tag)}>{tag}</ArticleTag>
    </a>
  );
}

function SectionButton({
  children,
  href = "#",
}: {
  children: React.ReactNode;
  href?: string;
}) {
  return (
    <a
      href={href}
      className="inline-flex min-h-[58px] items-center justify-center rounded-full px-8 py-3 text-[17px] font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:opacity-95"
      style={{
        background: "linear-gradient(135deg, #12c7a5, #0b8fce)",
        boxShadow: "0 16px 40px rgba(11, 143, 206, 0.22)",
      }}
    >
      {children}
    </a>
  );
}

function MiniMetric({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-xl">
      <div className="text-[20px] font-semibold tracking-[-0.03em] text-white">{value}</div>
      <div className="mt-1 text-sm text-slate-400">{label}</div>
    </div>
  );
}

function DarkPanel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.025))] shadow-[0_20px_60px_rgba(0,0,0,0.20)] backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}

function EmptySearchState({ query }: { query: string }) {
  return (
    <DarkPanel className="mt-10 px-8 py-12 text-center md:px-14">
      <div className="mx-auto max-w-2xl">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[24px] border border-white/10 bg-white/[0.04] text-cyan-300">
          <SearchIcon />
        </div>
        <h3 className="mt-6 text-[28px] font-semibold tracking-[-0.04em] text-white">
          No results found
        </h3>
        <p className="mt-3 text-[17px] leading-8 text-slate-300">
          We couldn&apos;t find any matches for{" "}
          <span className="font-semibold text-white">&quot;{query}&quot;</span>.
          Try a broader keyword like WCAG, ADA, audit, testing, or compliance.
        </p>
      </div>
    </DarkPanel>
  );
}

export default function HelpCenterPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const resultsRef = useRef<HTMLDivElement | null>(null);

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredResourceCards = useMemo(() => {
    if (!normalizedQuery) return resourceCards;

    return resourceCards.filter((card) =>
      [card.title, card.description, card.cta, card.icon]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery)
    );
  }, [normalizedQuery]);

  const filteredArticles = useMemo(() => {
    if (!normalizedQuery) return helpCenterArticles;

    return helpCenterArticles.filter((article) =>
      [
        article.title,
        article.tag,
        article.excerpt,
        article.description,
        article.category,
        article.content.intro,
        ...article.content.sections.flatMap((section) => [
          section.heading,
          ...section.paragraphs,
          ...(section.bullets ?? []),
        ]),
      ]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery)
    );
  }, [normalizedQuery]);

  const hasSearch = normalizedQuery.length > 0;
  const hasResults = filteredResourceCards.length > 0 || filteredArticles.length > 0;

  const handleSearch = () => {
    if (!normalizedQuery) {
      resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    const exactMatch = filteredArticles.find(
      (article) =>
        article.title.toLowerCase() === normalizedQuery ||
        article.slug.toLowerCase() === normalizedQuery.replace(/\s+/g, "-")
    );

    if (exactMatch) {
      router.push(`/help-center/${exactMatch.slug}`);
      return;
    }

    resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <section className="relative overflow-hidden bg-[#07101d]">
      <AnimatedGradient />

      <div className="relative z-10">
        <section className="relative overflow-hidden px-6 pb-10 pt-[48px] md:pb-12 md:pt-[58px] lg:px-8">
          <div className="absolute inset-x-0 top-0 -z-10 h-[780px] overflow-hidden">
            <div className="absolute left-1/2 top-[-160px] h-[620px] w-[1160px] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(circle_at_center,rgba(38,95,190,0.34),rgba(7,16,29,0.03)_58%,transparent_72%)]" />
            <div className="absolute left-[10%] top-[18%] h-[220px] w-[220px] rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="absolute right-[12%] top-[16%] h-[260px] w-[260px] rounded-full bg-sky-500/10 blur-3xl" />
            <div className="absolute inset-x-0 bottom-0 h-[220px] bg-[linear-gradient(to_bottom,transparent_0%,rgba(7,16,29,0.65)_55%,#07101d_100%)]" />
          </div>

          <div className="mx-auto max-w-7xl">
            <ScrollReveal animation="fade-in-up" delay={90}>
              <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-cyan-300/15 bg-white/[0.04] px-4 py-2 text-[13px] font-medium text-cyan-200 backdrop-blur-xl shadow-[0_0_30px_rgba(34,211,238,0.05)]">
                <span className="text-cyan-300">
                  <SparkIcon />
                </span>
                Accessibility education, compliance clarity, and legal-risk guidance
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-in-up" delay={140}>
              <div className="mx-auto mt-2 max-w-5xl text-center">
                <h1 className="text-balance text-4xl font-semibold tracking-[-0.055em] text-white sm:text-5xl lg:text-[72px] lg:leading-[0.92]">
                  Accessibility Help &
                  <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
                    {" "}
                    Compliance Resources
                  </span>
                </h1>

                <p className="mx-auto mt-2 max-w-3xl text-[18px] leading-8 text-slate-300 md:text-[21px]">
                  Understand accessibility requirements, identify common issues, and
                  learn how to reduce legal risk with practical guidance built for real teams.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-in-up" delay={200}>
              <div className="mx-auto mt-6 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
                <MiniMetric value="WCAG 2.2" label="Standards guidance" />
                <MiniMetric value="ADA Risk" label="Compliance awareness" />
                <MiniMetric value="Actionable" label="Next-step resources" />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-in-up" delay={240}>
              <form
                onSubmit={handleSearchSubmit}
                className="mx-auto mt-8 max-w-4xl translate-y-12 rounded-[30px] border border-white/10 bg-white/[0.92] p-3 shadow-[0_30px_100px_rgba(15,23,42,0.20)] backdrop-blur-xl"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-center">
                  <div className="flex min-w-0 flex-1 items-center gap-3 px-4 text-slate-400">
                    <SearchIcon />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search guides, articles, WCAG topics, or ADA questions..."
                      className="h-[58px] w-full border-0 bg-transparent text-[18px] text-[#0b1220] outline-none placeholder:text-slate-400 md:text-[19px]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex min-h-[58px] shrink-0 items-center justify-center rounded-[20px] px-8 text-[17px] font-semibold text-white transition duration-300 hover:scale-[1.01] hover:opacity-95"
                    style={{
                      background: "linear-gradient(135deg, #12c7a5, #0b8fce)",
                      boxShadow: "0 14px 30px rgba(11, 143, 206, 0.22)",
                    }}
                  >
                    Search
                  </button>
                </div>
              </form>
            </ScrollReveal>
          </div>
        </section>

        <section ref={resultsRef} className="bg-[#07101d] px-6 pb-24 pt-14 lg:px-8">
          <div className="mx-auto max-w-7xl">
            {!hasResults && hasSearch ? (
              <EmptySearchState query={searchQuery} />
            ) : (
              <>
                {filteredResourceCards.length > 0 && (
                  <ScrollReveal animation="fade-in-up" delay={120} stagger>
                    <div className="grid gap-7 lg:grid-cols-3">
                      {filteredResourceCards.map((card) => (
                        <ResourceCard key={card.title} {...card} />
                      ))}
                    </div>
                  </ScrollReveal>
                )}

                <div className="mt-10 grid items-stretch gap-7 lg:grid-cols-[1.58fr_1fr]">
                  {filteredArticles.length > 0 ? (
                    <ScrollReveal animation="fade-in-up" delay={180}>
                      <DarkPanel className="h-full p-8 md:p-10">
                        <div className="flex items-start justify-between gap-6">
                          <div>
                            <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-cyan-300">
                              {hasSearch ? "Search results" : "Most viewed"}
                            </p>
                            <h2 className="mt-3 text-[34px] font-semibold tracking-[-0.045em] text-white md:text-[40px]">
                              {hasSearch ? "Matching Help Articles" : "Popular Help Articles"}
                            </h2>
                          </div>

                          <div className="hidden rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-slate-300 md:block">
                            {hasSearch
                              ? `${filteredArticles.length} result${filteredArticles.length === 1 ? "" : "s"}`
                              : "Updated weekly"}
                          </div>
                        </div>

                        <div className="mt-8 space-y-2">
                          {filteredArticles.map((article) => (
                            <ArticleRow key={article.slug} {...article} />
                          ))}
                        </div>

                        <a
                          href="/help-center"
                          className="mt-8 inline-flex items-center gap-2 text-[18px] font-semibold text-cyan-300 transition hover:gap-3 hover:text-cyan-200"
                        >
                          <span>{hasSearch ? "See all matching articles" : "See all articles"}</span>
                          <ArrowRightIcon />
                        </a>
                      </DarkPanel>
                    </ScrollReveal>
                  ) : (
                    <div />
                  )}

                  <ScrollReveal animation="fade-in-up" delay={220}>
                    <DarkPanel className="relative flex h-full overflow-hidden p-8 md:p-10">
                      <div className="absolute right-[-40px] top-[-30px] h-[140px] w-[140px] rounded-full bg-cyan-400/10 blur-3xl" />
                      <div className="absolute bottom-[-30px] left-[-20px] h-[120px] w-[120px] rounded-full bg-sky-400/10 blur-3xl" />

                      <div className="relative flex h-full w-full flex-col">
                        <div className="flex items-start gap-4">
                          <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.075),rgba(255,255,255,0.04))] shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_10px_30px_rgba(34,211,238,0.12)]">
                            <ChatBubbleIcon />
                          </div>

                          <div className="min-w-0 pt-1">
                            <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-cyan-300">
                              Get support
                            </p>

                            <h2 className="mt-2 text-[28px] font-semibold leading-[1.08] tracking-[-0.04em] text-white md:text-[32px]">
                              Need Further Assistance?
                            </h2>
                          </div>
                        </div>

                        <p className="mt-6 text-[18px] leading-9 text-slate-300">
                          Ask questions, get personalized assistance, or speak with an expert
                          about accessibility compliance and legal risk.
                        </p>

                        <div className="mt-6 rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
                          <div className="text-sm font-medium text-slate-400">
                            Best for teams that need
                          </div>
                          <div className="mt-2 text-[16px] leading-7 text-white">
                            Expert guidance, audit direction, remediation planning, or
                            compliance clarification.
                          </div>
                        </div>

                        <div className="mt-auto pt-10">
                          <SectionButton href="/contact">Contact Us</SectionButton>
                        </div>
                      </div>
                    </DarkPanel>
                  </ScrollReveal>
                </div>
              </>
            )}

            <ScrollReveal animation="fade-in-up" delay={260}>
              <DarkPanel className="relative mt-10 overflow-hidden px-8 py-12 text-center md:px-14 md:py-16">
                <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(12,141,136,0.35),transparent)]" />
                <div className="absolute left-1/2 top-0 h-[180px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(18,199,165,0.10),transparent_70%)]" />

                <div className="relative">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-cyan-300">
                    Explore further
                  </p>

                  <h2 className="mt-3 text-[34px] font-semibold tracking-[-0.045em] text-white md:text-[48px]">
                    Explore Our Help Center
                  </h2>

                  <p className="mx-auto mt-5 max-w-3xl text-[18px] leading-9 text-slate-300 md:text-[20px]">
                    Browse accessibility guides, testing workflows, compliance references,
                    and practical resources built to help your team move faster.
                  </p>

                  <div className="mt-10">
                    <SectionButton href="/help-center">Visit Help Center</SectionButton>
                  </div>
                </div>
              </DarkPanel>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </section>
  );
}