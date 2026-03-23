"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  getHelpArticleBySlug,
  helpCenterArticles,
} from "@/data/helpCenterArticles";

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function ArrowLeftIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M19 12H5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path
        d="M11 18L5 12L11 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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

function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 7.8V12L15.2 13.9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
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

function getArticleTone(tag: string) {
  if (tag === "Compliance") return "compliance";
  if (tag === "Strategy") return "strategy";
  if (tag === "Testing") return "testing";
  return "default";
}

export default function HelpArticlePage() {
  const params = useParams<{ slug: string }>();
  const slug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug;
  const article = slug ? getHelpArticleBySlug(slug) : undefined;

  const [activeSection, setActiveSection] = useState<string>("");
  const [progress, setProgress] = useState(0);

  if (!article) {
    notFound();
  }

  const sections = useMemo(() => {
    return article.content.sections.map((section) => ({
      ...section,
      id: slugify(section.heading),
    }));
  }, [article]);

  const relatedArticles = helpCenterArticles
    .filter((a) => a.slug !== article.slug)
    .sort((a, b) => {
      const scoreA =
        (a.tag === article.tag ? 2 : 0) + (a.category === article.category ? 1 : 0);
      const scoreB =
        (b.tag === article.tag ? 2 : 0) + (b.category === article.category ? 1 : 0);
      return scoreB - scoreA;
    })
    .slice(0, 3);

  useEffect(() => {
    const ids = sections.map((section) => section.id);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    elements.forEach((el) => observer.observe(el));

    if (!activeSection && elements[0]) {
      setActiveSection(elements[0].id);
    }

    return () => observer.disconnect();
  }, [sections, activeSection]);

  useEffect(() => {
    const handleScroll = () => {
      const articleBody = document.getElementById("article-body");
      if (!articleBody) return;

      const rect = articleBody.getBoundingClientRect();
      const scrollTop = window.scrollY || window.pageYOffset;
      const start = rect.top + scrollTop - 140;
      const end = start + articleBody.offsetHeight - window.innerHeight;
      const raw = ((scrollTop - start) / Math.max(end - start, 1)) * 100;
      const clamped = Math.min(100, Math.max(0, raw));
      setProgress(clamped);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#07101d] pt-28 text-white">
        <div className="fixed left-0 right-0 top-0 z-[60] h-[3px] bg-white/5">
          <div
            className="h-full transition-[width] duration-150"
            style={{
              width: `${progress}%`,
              background: "linear-gradient(90deg, #12c7a5, #0b8fce)",
            }}
          />
        </div>

        <section className="relative overflow-hidden px-6 pb-12 lg:px-8">
          <div className="absolute inset-x-0 top-0 -z-10 h-[520px] overflow-hidden">
            <div className="absolute left-1/2 top-[-140px] h-[520px] w-[980px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(38,95,190,0.28),rgba(7,16,29,0.02)_60%,transparent_72%)]" />
            <div className="absolute left-[12%] top-[18%] h-[180px] w-[180px] rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="absolute right-[10%] top-[16%] h-[220px] w-[220px] rounded-full bg-sky-500/10 blur-3xl" />
          </div>

          <div className="mx-auto max-w-7xl">
            <Link
              href="/help-center"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[14px] font-medium text-slate-200 backdrop-blur-xl transition hover:border-cyan-300/20 hover:bg-white/[0.06] hover:text-white"
            >
              <ArrowLeftIcon />
              Back to Help Center
            </Link>

            <div className="mt-8 max-w-4xl">
              <div className="flex flex-wrap items-center gap-3">
                <div className="rounded-full border border-cyan-300/15 bg-white/[0.04] px-4 py-2 text-[13px] font-medium text-cyan-200 backdrop-blur-xl">
                  {article.category}
                </div>

                <ArticleTag tone={getArticleTone(article.tag)}>{article.tag}</ArticleTag>

                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[13px] font-medium text-slate-300 backdrop-blur-xl">
                  <ClockIcon />
                  {article.readTime}
                </div>
              </div>

              <h1 className="mt-6 max-w-5xl text-balance text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl lg:text-[68px] lg:leading-[0.98]">
                {article.title}
              </h1>

              <p className="mt-6 max-w-3xl text-[18px] leading-8 text-slate-300 md:text-[21px]">
                {article.description}
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 pb-24 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-12">
            <aside className="hidden lg:block">
              <div className="sticky top-28 rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.02))] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.20)] backdrop-blur-xl">
                <div className="text-[12px] font-semibold uppercase tracking-[0.22em] text-cyan-300">
                  On this page
                </div>

                <nav className="mt-5 space-y-1">
                  {sections.map((section, index) => {
                    const isActive = activeSection === section.id;

                    return (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className={`group flex items-start gap-3 rounded-2xl px-3 py-3 text-[14px] leading-6 transition-all ${
                          isActive
                            ? "bg-white/[0.06] text-white"
                            : "text-slate-400 hover:bg-white/[0.04] hover:text-slate-200"
                        }`}
                      >
                        <span
                          className={`mt-[7px] h-2 w-2 shrink-0 rounded-full transition ${
                            isActive ? "bg-cyan-300" : "bg-white/15 group-hover:bg-white/30"
                          }`}
                        />
                        <span>
                          <span className="mr-2 text-slate-500">{String(index + 1).padStart(2, "0")}</span>
                          {section.heading}
                        </span>
                      </a>
                    );
                  })}
                </nav>

                <div className="mt-6 rounded-[22px] border border-white/10 bg-white/[0.04] p-4">
                  <div className="text-sm font-medium text-slate-400">Reading progress</div>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full transition-[width] duration-150"
                      style={{
                        width: `${progress}%`,
                        background: "linear-gradient(90deg, #12c7a5, #0b8fce)",
                      }}
                    />
                  </div>
                  <div className="mt-2 text-sm text-slate-300">{Math.round(progress)}% completed</div>
                </div>

                <div className="mt-6 rounded-[22px] border border-white/10 bg-white/[0.04] p-4">
                  <div className="text-sm font-medium text-slate-400">Need help?</div>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Speak with an expert about accessibility compliance, audits, or remediation planning.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:gap-3 hover:text-cyan-200"
                  >
                    Contact Support
                    <ArrowRightIcon />
                  </Link>
                </div>
              </div>
            </aside>

            <article
              id="article-body"
              className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.02))] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.20)] backdrop-blur-xl md:p-10 lg:p-12"
            >
              <div className="rounded-[26px] border border-white/10 bg-white/[0.04] p-6 md:p-7">
                <p className="text-[18px] leading-8 text-slate-200">{article.content.intro}</p>
              </div>

              <div className="mt-10 space-y-12">
                {sections.map((section) => (
                  <section key={section.id} id={section.id} className="scroll-mt-32">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-1.5 rounded-full bg-[linear-gradient(180deg,#12c7a5,#0b8fce)]" />
                      <h2 className="text-[28px] font-semibold tracking-[-0.03em] text-white md:text-[34px]">
                        {section.heading}
                      </h2>
                    </div>

                    <div className="mt-5 space-y-4">
                      {section.paragraphs.map((paragraph, index) => (
                        <p key={index} className="text-[17px] leading-8 text-slate-300">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {section.bullets && section.bullets.length > 0 && (
                      <div className="mt-6 rounded-[24px] border border-white/10 bg-white/[0.04] p-5 md:p-6">
                        <ul className="space-y-3">
                          {section.bullets.map((bullet, index) => (
                            <li
                              key={index}
                              className="flex gap-3 text-[17px] leading-8 text-slate-300"
                            >
                              <span className="mt-[11px] h-2.5 w-2.5 shrink-0 rounded-full bg-cyan-300" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </section>
                ))}
              </div>

              {relatedArticles.length > 0 && (
                <div className="mt-14 border-t border-white/10 pt-10">
                  <div className="text-[12px] font-semibold uppercase tracking-[0.22em] text-cyan-300">
                    Continue reading
                  </div>
                  <h3 className="mt-3 text-[28px] font-semibold tracking-[-0.03em] text-white md:text-[34px]">
                    Related Articles
                  </h3>

                  <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {relatedArticles.map((item) => (
                      <Link
                        key={item.slug}
                        href={`/help-center/${item.slug}`}
                        className="group rounded-[24px] border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.06]"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <ArticleTag tone={getArticleTone(item.tag)}>{item.tag}</ArticleTag>
                          <span className="text-xs text-slate-500">{item.readTime}</span>
                        </div>

                        <div className="mt-4 text-[18px] font-semibold leading-7 text-white transition group-hover:text-cyan-200">
                          {item.title}
                        </div>

                        <p className="mt-3 text-sm leading-7 text-slate-400">
                          {item.excerpt}
                        </p>

                        <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition group-hover:gap-3 group-hover:text-cyan-200">
                          Read article
                          <ArrowRightIcon />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-14 border-t border-white/10 pt-8">
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/help-center"
                    className="inline-flex min-h-[56px] items-center justify-center gap-2 rounded-full px-7 py-3 text-[16px] font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:opacity-95"
                    style={{
                      background: "linear-gradient(135deg, #12c7a5, #0b8fce)",
                      boxShadow: "0 16px 40px rgba(11, 143, 206, 0.22)",
                    }}
                  >
                    <ArrowLeftIcon />
                    Back to Help Center
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex min-h-[56px] items-center justify-center rounded-full border border-white/10 px-7 py-3 text-[16px] font-semibold text-white transition-all duration-300 hover:bg-white/[0.06]"
                  >
                    Contact Support
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}