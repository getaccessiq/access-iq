import Link from "next/link";
import AnimatedGradient from "./AnimatedGradient";

export default function AccessIQAuditPricingSection() {
  const auditPlans = [
    {
      key: "essential",
      label: "ESSENTIAL",
      title: "Essential Audit",
      price: "$750",
      priceSuffix: "one-time",
      shortDescription:
        "Manual audit for small websites and first-time compliance reviews.",
      cta: "Request Essential Audit",
      featured: false,
    },
    {
      key: "business",
      label: "MOST POPULAR",
      title: "Business Audit",
      price: "$1,500+",
      priceSuffix: "one-time",
      shortDescription:
        "Broader audit coverage with stronger documentation and remediation guidance.",
      cta: "Book Business Audit",
      featured: true,
      badge: "Recommended",
    },
    {
      key: "enterprise",
      label: "ENTERPRISE",
      title: "Enterprise Audit",
      price: "$3,500+",
      priceSuffix: "one-time",
      shortDescription:
        "Premium audit scope for complex websites, regulated industries, and larger teams.",
      cta: "Talk to an Expert",
      featured: false,
    },
  ];

  const comparisonRows = [
    {
      feature: "Manual accessibility audit",
      values: { essential: true, business: true, enterprise: true },
    },
    {
      feature: "WCAG 2.1 / 2.2 issue review",
      values: { essential: true, business: true, enterprise: true },
    },
    {
      feature: "Pages / coverage",
      values: {
        essential: "Up to 10 key pages",
        business: "Templates + core user flows",
        enterprise: "Expanded complex flows",
      },
    },
    {
      feature: "Severity-based findings report",
      values: { essential: true, business: true, enterprise: true },
    },
    {
      feature: "Detailed findings with screenshots",
      values: { essential: false, business: true, enterprise: true },
    },
    {
      feature: "Prioritized remediation recommendations",
      values: { essential: true, business: true, enterprise: true },
    },
    {
      feature: "Developer-ready issue documentation",
      values: { essential: false, business: true, enterprise: true },
    },
    {
      feature: "ADA / legal risk review",
      values: { essential: false, business: true, enterprise: true },
    },
    {
      feature: "Executive summary / compliance report",
      values: { essential: false, business: false, enterprise: true },
    },
    {
      feature: "Post-audit review call",
      values: { essential: false, business: true, enterprise: true },
    },
    {
      feature: "Remediation consultation",
      values: { essential: false, business: false, enterprise: true },
    },
    {
      feature: "Optional re-test planning",
      values: { essential: false, business: false, enterprise: true },
    },
  ];

  const renderCellValue = (value: boolean | string) => {
    if (value === true) {
      return (
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-sm font-semibold text-cyan-300">
          ✓
        </span>
      );
    }

    if (value === false) {
      return (
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-sm font-semibold text-slate-500">
          —
        </span>
      );
    }

    return <span className="text-sm leading-6 text-slate-200">{value}</span>;
  };

  return (
    <section className="relative overflow-hidden bg-[#020817] text-white">
      {/* Animated background */}
      <AnimatedGradient />

      {/* Dark overlays */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,8,23,0.72)_0%,rgba(2,8,23,0.82)_30%,rgba(2,8,23,0.90)_65%,rgba(1,5,15,0.96)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_28%),radial-gradient(circle_at_bottom,rgba(6,182,212,0.06),transparent_40%)]" />
        <div className="absolute -left-20 top-1/3 h-60 w-60 rounded-full bg-sky-500/8 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-teal-400/8 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:42px_42px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-8 flex justify-start">
          <Link
            href="/prices"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-cyan-300 transition hover:border-cyan-300/40 hover:bg-cyan-400/10 hover:text-white"
          >
            ← Back to Pricing
          </Link>
        </div>

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-300 shadow-[0_0_24px_rgba(34,211,238,0.10)]">
            Audit Pricing
          </div>

          <h2 className="mx-auto mt-5 max-w-4xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Accessibility audit plans
            <span className="block bg-gradient-to-r from-white via-cyan-100 to-cyan-300 bg-clip-text text-transparent">
              with transparent package pricing
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
            Compare our three manual audit packages at a glance, then review the
            full deliverables below in a detailed comparison table.
          </p>
        </div>

        {/* Compact pricing cards */}
        <div className="mt-20 grid gap-6 lg:grid-cols-3">
          {auditPlans.map((plan) => (
            <article
              key={plan.key}
              className={`group relative rounded-[24px] border backdrop-blur-xl transition-all duration-300 ${
                plan.featured
                  ? "border-cyan-300/45 bg-white/[0.05] shadow-[0_0_0_1px_rgba(34,211,238,0.14),0_16px_50px_rgba(6,182,212,0.14),0_0_50px_rgba(34,211,238,0.05)]"
                  : "border-white/10 bg-white/[0.03] shadow-[0_16px_60px_rgba(0,0,0,0.28)] hover:border-cyan-400/20 hover:bg-white/[0.04]"
              }`}
            >
              <div
                className={`pointer-events-none absolute inset-x-0 top-0 h-px ${
                  plan.featured
                    ? "bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent"
                    : "bg-gradient-to-r from-transparent via-white/15 to-transparent"
                }`}
              />

              {plan.badge && (
                <div className="absolute left-1/2 -top-3 z-10 -translate-x-1/2">
                  <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200/25 bg-gradient-to-r from-teal-300 to-cyan-400 px-4 py-1.5 text-xs font-semibold text-slate-950 shadow-[0_8px_24px_rgba(34,211,238,0.24)]">
                    <span>✦</span>
                    {plan.badge}
                  </div>
                </div>
              )}

              <div className="p-5 sm:p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-400">
                    {plan.label}
                  </span>

                  {plan.featured && (
                    <span className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-cyan-200">
                      Best value
                    </span>
                  )}
                </div>

                <h3 className="mt-4 text-[28px] font-semibold leading-tight text-white">
                  {plan.title}
                </h3>

                <div className="mt-4 flex items-end gap-2">
                  <span className="text-4xl font-semibold tracking-tight text-white">
                    {plan.price}
                  </span>
                  <span className="pb-1 text-sm text-slate-400">
                    {plan.priceSuffix}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-6 text-slate-300">
                  {plan.shortDescription}
                </p>

                <div className="mt-5 space-y-2 text-sm text-slate-200">
                  {comparisonRows.slice(0, 4).map((row) => {
                    const value =
                      row.values[plan.key as keyof typeof row.values];

                    return (
                      <div
                        key={`${plan.key}-${row.feature}`}
                        className="flex items-start gap-3"
                      >
                        <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-cyan-400/25 bg-cyan-400/10 text-[11px] text-cyan-300">
                          {value === false ? "—" : "✓"}
                        </span>
                        <span className="leading-6 text-slate-200/95">
                          {row.feature}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6">
                  <button
                    type="button"
                    className={`inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                      plan.featured
                        ? "bg-gradient-to-r from-teal-300 via-cyan-400 to-sky-400 text-slate-950 shadow-[0_12px_28px_rgba(34,211,238,0.22)] hover:scale-[1.01] hover:shadow-[0_16px_34px_rgba(34,211,238,0.30)]"
                        : "border border-cyan-400/20 bg-white/[0.02] text-cyan-300 hover:border-cyan-300/50 hover:bg-cyan-400/10 hover:text-white"
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Comparison table */}
        <div className="mt-8 overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.035] shadow-[0_16px_70px_rgba(0,0,0,0.26)] backdrop-blur-xl">
          <div className="border-b border-white/10 px-5 py-4 sm:px-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white sm:text-xl">
                  Compare all audit deliverables
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  A full feature overview to help teams choose the right audit
                  scope.
                </p>
              </div>

              <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Transparent pricing
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.02]">
                  <th className="min-w-[220px] px-5 py-4 text-left text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 sm:px-6">
                    Features
                  </th>
                  {auditPlans.map((plan) => (
                    <th
                      key={plan.key}
                      className={`min-w-[220px] px-5 py-4 text-left sm:px-6 ${
                        plan.featured ? "bg-cyan-400/[0.03]" : ""
                      }`}
                    >
                      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-400">
                        {plan.label}
                      </div>
                      <div className="mt-2 text-lg font-semibold text-white">
                        {plan.title}
                      </div>
                      <div className="mt-1 flex items-end gap-2">
                        <span className="text-2xl font-semibold text-white">
                          {plan.price}
                        </span>
                        <span className="pb-0.5 text-xs text-slate-400">
                          {plan.priceSuffix}
                        </span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {comparisonRows.map((row, index) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-white/10 ${
                      index % 2 === 0 ? "bg-transparent" : "bg-white/[0.012]"
                    }`}
                  >
                    <td className="px-5 py-4 text-sm font-medium text-white sm:px-6">
                      {row.feature}
                    </td>

                    {auditPlans.map((plan) => (
                      <td
                        key={`${row.feature}-${plan.key}`}
                        className={`px-5 py-4 align-middle sm:px-6 ${
                          plan.featured ? "bg-cyan-400/[0.018]" : ""
                        }`}
                      >
                        {renderCellValue(
                          row.values[plan.key as keyof typeof row.values]
                        )}
                      </td>
                    ))}
                  </tr>
                ))}

                <tr>
                  <td className="px-5 py-5 sm:px-6" />
                  {auditPlans.map((plan) => (
                    <td
                      key={`cta-${plan.key}`}
                      className={`px-5 py-5 sm:px-6 ${
                        plan.featured ? "bg-cyan-400/[0.018]" : ""
                      }`}
                    >
                      <button
                        type="button"
                        className={`inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                          plan.featured
                            ? "bg-gradient-to-r from-teal-300 via-cyan-400 to-sky-400 text-slate-950 shadow-[0_12px_28px_rgba(34,211,238,0.22)] hover:scale-[1.01] hover:shadow-[0_16px_34px_rgba(34,211,238,0.30)]"
                            : "border border-cyan-400/20 bg-white/[0.02] text-cyan-300 hover:border-cyan-300/50 hover:bg-cyan-400/10 hover:text-white"
                        }`}
                      >
                        {plan.cta}
                      </button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom trust row */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-center text-sm text-slate-300 sm:flex-row sm:text-left">
          <div>
            Manual audits aligned with{" "}
            <span className="font-semibold text-white">WCAG 2.1 / 2.2</span> and
            built to support real remediation work.
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:border-cyan-300/40 hover:bg-cyan-400/15 hover:text-white"
          >
            Request custom scope
          </button>
        </div>
      </div>
    </section>
  );
}