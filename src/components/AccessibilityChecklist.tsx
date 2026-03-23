"use client";

import React, { useId, useMemo, useState } from "react";
import Link from "next/link";
import AnimatedGradient from "@/components/AnimatedGradient";
import ScrollReveal from "@/components/ScrollReveal";

type Level = "A" | "AA" | "AAA";
type FilterLevel = "ALL" | Level;

type ChecklistItem = {
  criterion: string;
  description: string;
  level: Level;
};

const checklistItems: ChecklistItem[] = [
  { criterion: "1.1.1", description: "Provide text alternatives for non-text content.", level: "A" },
  { criterion: "1.2.1", description: "Provide an alternative to audio-only and video-only content.", level: "A" },
  { criterion: "1.2.2", description: "Provide captions for prerecorded videos with audio.", level: "A" },
  { criterion: "1.2.3", description: "Provide audio description or an alternative for prerecorded video.", level: "A" },
  { criterion: "1.3.1", description: "Use semantic structure and preserve information and relationships.", level: "A" },
  { criterion: "1.3.2", description: "Present content in a meaningful reading sequence.", level: "A" },
  { criterion: "1.3.3", description: "Do not rely on sensory cues alone in instructions.", level: "A" },
  { criterion: "1.4.1", description: "Do not use color as the only way to convey meaning.", level: "A" },
  { criterion: "1.4.2", description: "Do not autoplay audio without controls.", level: "A" },
  { criterion: "2.1.1", description: "Ensure all functionality works with a keyboard.", level: "A" },
  { criterion: "2.1.2", description: "Avoid keyboard traps.", level: "A" },
  { criterion: "2.1.4", description: "Avoid single-key shortcuts or provide controls to disable or change them.", level: "A" },
  { criterion: "2.2.1", description: "Provide user controls for time limits.", level: "A" },
  { criterion: "2.2.2", description: "Allow moving content to be paused, stopped, or hidden.", level: "A" },
  { criterion: "2.3.1", description: "Avoid flashing content above safe thresholds.", level: "A" },
  { criterion: "2.4.1", description: "Provide a skip link or similar bypass mechanism.", level: "A" },
  { criterion: "2.4.2", description: "Use clear and descriptive page titles.", level: "A" },
  { criterion: "2.4.3", description: "Maintain a logical focus order.", level: "A" },
  { criterion: "2.4.4", description: "Make each link’s purpose clear from context.", level: "A" },
  { criterion: "2.5.1", description: "Support pointer gestures with simpler alternatives.", level: "A" },
  { criterion: "2.5.2", description: "Support pointer cancellation where applicable.", level: "A" },
  { criterion: "2.5.3", description: "Visible labels should match accessible names.", level: "A" },
  { criterion: "2.5.4", description: "Motion-triggered actions should also work via standard controls.", level: "A" },
  { criterion: "3.1.1", description: "Declare the page language.", level: "A" },
  { criterion: "3.2.1", description: "Elements should not change unexpectedly on focus.", level: "A" },
  { criterion: "3.2.2", description: "Elements should not change unexpectedly on input.", level: "A" },
  { criterion: "3.3.1", description: "Clearly identify input errors.", level: "A" },
  { criterion: "3.3.2", description: "Provide labels and instructions for form fields.", level: "A" },
  { criterion: "4.1.1", description: "Avoid major parsing or code errors.", level: "A" },
  { criterion: "4.1.2", description: "Expose correct name, role, and value for UI components.", level: "A" },

  { criterion: "1.2.4", description: "Provide captions for live video.", level: "AA" },
  { criterion: "1.2.5", description: "Provide audio description for prerecorded video.", level: "AA" },
  { criterion: "1.3.4", description: "Do not lock users into a single screen orientation.", level: "AA" },
  { criterion: "1.3.5", description: "Identify common input purposes programmatically.", level: "AA" },
  { criterion: "1.4.3", description: "Meet minimum color contrast for text.", level: "AA" },
  { criterion: "1.4.4", description: "Allow text resizing up to 200 percent without loss.", level: "AA" },
  { criterion: "1.4.5", description: "Avoid using images of text.", level: "AA" },
  { criterion: "1.4.10", description: "Support reflow and responsive layouts.", level: "AA" },
  { criterion: "1.4.11", description: "Meet non-text contrast requirements.", level: "AA" },
  { criterion: "1.4.12", description: "Text spacing should remain usable when overridden.", level: "AA" },
  { criterion: "1.4.13", description: "Hover and focus content must remain accessible.", level: "AA" },
  { criterion: "2.4.5", description: "Provide multiple ways to find content.", level: "AA" },
  { criterion: "2.4.6", description: "Use clear headings and labels.", level: "AA" },
  { criterion: "2.4.7", description: "Keep keyboard focus visible.", level: "AA" },
  { criterion: "3.1.2", description: "Indicate language changes in content.", level: "AA" },
  { criterion: "3.2.3", description: "Keep navigation consistent.", level: "AA" },
  { criterion: "3.2.4", description: "Keep identification of controls consistent.", level: "AA" },
  { criterion: "3.3.3", description: "Suggest fixes when users make input errors.", level: "AA" },
  { criterion: "3.3.4", description: "Provide error prevention for legal, financial, or data actions.", level: "AA" },
  { criterion: "4.1.3", description: "Expose status messages to assistive technologies.", level: "AA" },

  { criterion: "1.2.6", description: "Provide sign language for prerecorded video.", level: "AAA" },
  { criterion: "1.2.7", description: "Provide extended audio description.", level: "AAA" },
  { criterion: "1.2.8", description: "Provide a full text alternative for prerecorded media.", level: "AAA" },
  { criterion: "1.2.9", description: "Provide alternatives for live audio-only content.", level: "AAA" },
  { criterion: "1.3.6", description: "Identify purpose to support personalization where applicable.", level: "AAA" },
  { criterion: "1.4.6", description: "Meet enhanced contrast requirements.", level: "AAA" },
  { criterion: "1.4.7", description: "Keep background audio low or absent.", level: "AAA" },
  { criterion: "1.4.8", description: "Offer users additional visual presentation options.", level: "AAA" },
  { criterion: "1.4.9", description: "Do not use images of text without exception.", level: "AAA" },
  { criterion: "2.1.3", description: "Make all functionality keyboard accessible without exception.", level: "AAA" },
  { criterion: "2.2.3", description: "Avoid time limits.", level: "AAA" },
  { criterion: "2.2.4", description: "Avoid interruptions.", level: "AAA" },
  { criterion: "2.2.5", description: "Preserve user data when re-authentication is required.", level: "AAA" },
  { criterion: "2.2.6", description: "Warn users before timeouts that may cause data loss.", level: "AAA" },
  { criterion: "2.3.2", description: "Do not flash content more than three times per second.", level: "AAA" },
  { criterion: "2.3.3", description: "Allow motion animations from interactions to be disabled.", level: "AAA" },
  { criterion: "2.4.8", description: "Help users understand where they are.", level: "AAA" },
  { criterion: "2.4.9", description: "Make link purpose clear from the link text alone.", level: "AAA" },
  { criterion: "2.4.10", description: "Use section headings to structure content.", level: "AAA" },
  { criterion: "2.5.5", description: "Provide sufficiently large pointer targets.", level: "AAA" },
  { criterion: "2.5.6", description: "Do not restrict available input methods.", level: "AAA" },
  { criterion: "3.1.3", description: "Explain unusual words.", level: "AAA" },
  { criterion: "3.1.4", description: "Explain abbreviations.", level: "AAA" },
  { criterion: "3.1.5", description: "Keep reading level approachable where possible.", level: "AAA" },
  { criterion: "3.1.6", description: "Explain pronunciation when meaning depends on it.", level: "AAA" },
  { criterion: "3.2.5", description: "Only change context when the user requests it.", level: "AAA" },
  { criterion: "3.3.5", description: "Provide help and detailed instructions.", level: "AAA" },
  { criterion: "3.3.6", description: "Provide broad error prevention support.", level: "AAA" },
];

const levelMeta: Record<Level, { label: string; badge: string; description: string }> = {
  A: {
    label: "Level A",
    badge: "Minimum foundation",
    description: "The core accessibility requirements every page should meet.",
  },
  AA: {
    label: "Level AA",
    badge: "Recommended standard",
    description: "The most practical and widely expected target for accessible websites.",
  },
  AAA: {
    label: "Level AAA",
    badge: "Advanced excellence",
    description: "Additional enhancements for exceptional accessibility coverage.",
  },
};

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l7 3v6c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V6l7-3z" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  );
}

type LevelPillProps = {
  active: boolean;
  onClick: () => void;
  label: string;
  count: number;
};

function LevelPill({ active, onClick, label, count }: LevelPillProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={[
        "inline-flex min-h-[46px] items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#06111f]",
        active
          ? "border-cyan-300/70 bg-cyan-400/15 text-white shadow-[0_0_0_1px_rgba(103,232,249,0.08)]"
          : "border-white/10 bg-white/[0.04] text-white/78 hover:border-white/20 hover:bg-white/[0.08] hover:text-white",
      ].join(" ")}
    >
      <span>{label}</span>
      <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-white/80">
        {count}
      </span>
    </button>
  );
}

function FeatureCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <article className="h-full rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-6 shadow-[0_18px_70px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:p-7">
      <div className="mb-5 inline-flex rounded-2xl bg-cyan-400/10 p-3 text-cyan-200">
        {icon}
      </div>
      <h2 className="text-xl font-semibold tracking-tight text-white">{title}</h2>
      <p className="mt-3 text-sm leading-7 text-white/72 sm:text-[15px]">{text}</p>
    </article>
  );
}

export default function AccessibilityChecklist() {
  const [selectedLevel, setSelectedLevel] = useState<FilterLevel>("AA");
  const [query, setQuery] = useState("");
  const resultsId = useId();

  const counts = useMemo(
    () => ({
      A: checklistItems.filter((item) => item.level === "A").length,
      AA: checklistItems.filter((item) => item.level === "AA").length,
      AAA: checklistItems.filter((item) => item.level === "AAA").length,
    }),
    [],
  );

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return checklistItems.filter((item) => {
      const matchesLevel = selectedLevel === "ALL" || item.level === selectedLevel;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        item.criterion.toLowerCase().includes(normalizedQuery) ||
        item.description.toLowerCase().includes(normalizedQuery) ||
        item.level.toLowerCase().includes(normalizedQuery);

      return matchesLevel && matchesQuery;
    });
  }, [query, selectedLevel]);

  const sidebarTitle =
    selectedLevel === "ALL" ? "All WCAG levels" : levelMeta[selectedLevel].label;

  const sidebarBadge =
    selectedLevel === "ALL" ? "Full overview" : levelMeta[selectedLevel].badge;

  const sidebarDescription =
    selectedLevel === "ALL"
      ? "Review the full checklist across foundational, recommended, and advanced criteria."
      : levelMeta[selectedLevel].description;

  return (
    <>
      <a
        href="#wcag-checklist-results"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[120] focus:rounded-xl focus:bg-white focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-slate-950"
      >
        Skip to checklist results
      </a>

      <div className="relative isolate overflow-hidden bg-[#06111f] text-white">
        <AnimatedGradient />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.15),transparent_28%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_25%),linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent_30%)]"
        />

        <section className="relative border-b border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 pt-24 pb-16 sm:px-8 sm:pt-28 sm:pb-20 lg:px-10 lg:pt-32 lg:pb-24">
            <ScrollReveal>
              <div className="max-w-5xl">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200">
                  <ShieldIcon />
                  WCAG 2.1 checklist
                </div>

                <h1 className="max-w-5xl text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.02]">
                  Practical WCAG checklist for teams building accessible websites
                </h1>

                <p className="mt-6 max-w-3xl text-base leading-8 text-white/74 sm:text-lg">
                  Review essential success criteria across Level A, AA, and AAA in a clean,
                  searchable checklist designed for audits, QA reviews, remediation planning,
                  and ongoing monitoring.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-white/75">
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5">
                    WCAG 2.1
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5">
                    ADA-aligned workflow
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5">
                    Manual + automated testing
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5">
                    Audit-ready structure
                  </span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="grid gap-4 md:grid-cols-3 md:gap-5">
                <FeatureCard
                  icon={<CheckIcon />}
                  title="Built for real remediation"
                  text="Use this page as a working checklist during audits, design reviews, bug fixing, and developer QA."
                />
                <FeatureCard
                  icon={<SearchIcon />}
                  title="Quickly searchable"
                  text="Filter by level or search by success criterion to find the checks your team needs right now."
                />
                <FeatureCard
                  icon={<ShieldIcon />}
                  title="Best-practice target"
                  text="Most teams should aim for Level AA as the practical compliance baseline for modern websites."
                />
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="relative">
          <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
            <ScrollReveal>
              <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-5 shadow-[0_18px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-7">
                <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
                  <div className="max-w-3xl">
                    <p className="text-sm font-medium uppercase tracking-[0.16em] text-cyan-200/85">
                      Filter checklist
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
                      Browse WCAG success criteria by level
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-white/68 sm:text-base">
                      Search by criterion number, keyword, or level. Start with Level AA if you
                      want the most practical compliance target.
                    </p>
                  </div>

                  <div className="w-full xl:max-w-md">
                    <label
                      htmlFor="wcag-search"
                      className="mb-2 block text-sm font-medium text-white/86"
                    >
                      Search the checklist
                    </label>

                    <div className="relative">
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/45"
                      >
                        <SearchIcon />
                      </span>

                      <input
                        id="wcag-search"
                        type="search"
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                        aria-describedby={resultsId}
                        placeholder="Search by criterion, keyword, or level"
                        className="h-12 w-full rounded-2xl border border-white/10 bg-[#0b1a2b] pl-12 pr-4 text-sm text-white placeholder:text-white/35 focus:border-cyan-300/50 focus:outline-none focus:ring-2 focus:ring-cyan-300/30"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <LevelPill
                    active={selectedLevel === "ALL"}
                    onClick={() => setSelectedLevel("ALL")}
                    label="All levels"
                    count={checklistItems.length}
                  />
                  <LevelPill
                    active={selectedLevel === "A"}
                    onClick={() => setSelectedLevel("A")}
                    label="Level A"
                    count={counts.A}
                  />
                  <LevelPill
                    active={selectedLevel === "AA"}
                    onClick={() => setSelectedLevel("AA")}
                    label="Level AA"
                    count={counts.AA}
                  />
                  <LevelPill
                    active={selectedLevel === "AAA"}
                    onClick={() => setSelectedLevel("AAA")}
                    label="Level AAA"
                    count={counts.AAA}
                  />
                </div>

                <p id={resultsId} className="mt-5 text-sm text-white/60" aria-live="polite">
                  Showing {filteredItems.length} result{filteredItems.length === 1 ? "" : "s"}.
                </p>
              </div>
            </ScrollReveal>

            <div className="mt-8 grid gap-6 xl:grid-cols-[320px_minmax(0,1fr)]">
              <ScrollReveal>
                <aside className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl xl:sticky xl:top-24 xl:h-fit">
                  <h3 className="text-lg font-semibold text-white">{sidebarTitle}</h3>

                  <p className="mt-2 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-200">
                    {sidebarBadge}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-white/70">{sidebarDescription}</p>

                  <div className="mt-6 space-y-3">
                    <div className="rounded-2xl border border-white/10 bg-[#0a1626] p-4">
                      <p className="text-xs uppercase tracking-[0.16em] text-white/45">
                        Visible results
                      </p>
                      <p className="mt-2 text-2xl font-semibold text-white">
                        {filteredItems.length}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-[#0a1626] p-4">
                      <p className="text-xs uppercase tracking-[0.16em] text-white/45">
                        Recommended target
                      </p>
                      <p className="mt-2 text-base font-medium text-white">WCAG 2.1 AA</p>
                      <p className="mt-2 text-sm leading-6 text-white/65">
                        A practical baseline for most organizations and public-facing websites.
                      </p>
                    </div>
                  </div>
                </aside>
              </ScrollReveal>

              <ScrollReveal>
                <section
                  id="wcag-checklist-results"
                  aria-labelledby="wcag-checklist-results-heading"
                  className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] shadow-[0_18px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl"
                >
                  <div className="border-b border-white/10 px-5 py-4 sm:px-6">
                    <h3
                      id="wcag-checklist-results-heading"
                      className="text-lg font-semibold text-white"
                    >
                      Checklist results
                    </h3>
                  </div>

                  <div className="hidden grid-cols-[110px_110px_minmax(0,1fr)] gap-4 border-b border-white/10 bg-white/[0.04] px-6 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/55 md:grid">
                    <span>Level</span>
                    <span>Criterion</span>
                    <span>Description</span>
                  </div>

                  <ul role="list" className="divide-y divide-white/8">
                    {filteredItems.map((item) => (
                      <li key={`${item.level}-${item.criterion}`} className="px-5 py-5 sm:px-6">
                        <div className="grid gap-3 md:grid-cols-[110px_110px_minmax(0,1fr)] md:gap-4">
                          <div className="md:pt-0.5">
                            <p className="mb-2 text-[11px] uppercase tracking-[0.16em] text-white/40 md:hidden">
                              Level
                            </p>
                            <span
                              className={[
                                "inline-flex rounded-full px-3 py-1 text-xs font-semibold",
                                item.level === "A"
                                  ? "bg-white/10 text-white/85"
                                  : item.level === "AA"
                                    ? "bg-cyan-400/15 text-cyan-200"
                                    : "bg-violet-400/15 text-violet-200",
                              ].join(" ")}
                            >
                              {item.level}
                            </span>
                          </div>

                          <div>
                            <p className="mb-2 text-[11px] uppercase tracking-[0.16em] text-white/40 md:hidden">
                              Criterion
                            </p>
                            <p className="text-sm font-medium text-white/92">{item.criterion}</p>
                          </div>

                          <div>
                            <p className="mb-2 text-[11px] uppercase tracking-[0.16em] text-white/40 md:hidden">
                              Description
                            </p>
                            <p className="text-sm leading-7 text-white/72">{item.description}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>

                  {filteredItems.length === 0 && (
                    <div className="px-6 py-12 text-center text-sm text-white/62">
                      No checklist items match your search. Try another keyword or select a
                      different WCAG level.
                    </div>
                  )}
                </section>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="relative border-t border-white/10">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
            <ScrollReveal>
              <div className="rounded-[32px] border border-cyan-400/20 bg-[linear-gradient(135deg,rgba(8,145,178,0.16),rgba(37,99,235,0.14),rgba(15,23,42,0.45))] p-6 shadow-[0_24px_100px_rgba(0,0,0,0.32)] backdrop-blur-xl sm:p-8 lg:p-10">
                <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-10">
                  <div className="max-w-3xl">
                    <p className="text-sm font-medium uppercase tracking-[0.16em] text-cyan-200/85">
                      Need help turning this into action?
                    </p>
                    <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[52px] lg:leading-[1.04]">
                      AccessIQ combines manual audits, remediation support, and ongoing monitoring
                    </h2>
                    <p className="mt-4 max-w-2xl text-base leading-8 text-white/76 sm:text-lg">
                      Use this checklist as your starting point, then move faster with expert-led
                      testing, developer-ready findings, and practical fixes aligned to WCAG and ADA
                      expectations.
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row lg:self-end lg:justify-end lg:pt-10">
                    <Link
                      href="/scan"
                      className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-2xl bg-white px-7 py-3 text-sm font-semibold text-slate-950 shadow-[0_14px_36px_rgba(255,255,255,0.16)] transition hover:-translate-y-0.5 hover:bg-cyan-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#06111f]"
                    >
                      <span>Start Free Scan</span>
                      <span className="transition-transform group-hover:translate-x-0.5">
                        <ArrowRightIcon />
                      </span>
                    </Link>

                    <Link
                      href="/contact"
                      className="inline-flex min-h-[52px] items-center justify-center rounded-2xl border border-white/15 bg-white/[0.06] px-7 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.10] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#06111f]"
                    >
                      Book Expert Audit
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  );
}