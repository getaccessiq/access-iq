import Link from "next/link";
import AnimatedGradient from "./AnimatedGradient";

type PlanKey = "starter" | "professional" | "enterprise";

export default function AccessIQMonitoringPricingSection() {
  const monitoringPlans = [
    {
      key: "starter" as PlanKey,
      label: "STARTER",
      title: "Starter Monitoring",
      price: "$49",
      priceSuffix: "/month",
      shortDescription:
        "For small websites that need recurring accessibility checks, basic alerts, and simple reporting.",
      idealFor: "Best for single-site businesses and brochure websites.",
      highlights: [
        "1 monitored website",
        "Weekly automated scans",
        "Email alerts for new issues",
        "Basic trend reporting",
      ],
      cta: "Choose Starter",
      featured: false,
    },
    {
      key: "professional" as PlanKey,
      label: "MOST POPULAR",
      title: "Professional Monitoring",
      price: "$149",
      priceSuffix: "/month",
      shortDescription:
        "For growing teams that need more coverage, faster scan frequency, team alerts, and stronger reporting.",
      idealFor: "Best for SaaS teams, marketing sites, and growing companies.",
      highlights: [
        "Up to 5 monitored websites",
        "Daily automated scans",
        "Email + Slack alerts",
        "Advanced reporting dashboard",
      ],
      cta: "Choose Professional",
      featured: true,
      badge: "Recommended",
    },
    {
      key: "enterprise" as PlanKey,
      label: "ENTERPRISE",
      title: "Enterprise Monitoring",
      price: "$499",
      priceSuffix: "/month",
      shortDescription:
        "For larger organizations that need high-frequency scans, custom workflows, white-label reporting, and premium support.",
      idealFor: "Best for agencies, enterprise teams, and multi-site organizations.",
      highlights: [
        "Unlimited monitored websites",
        "Hourly scans",
        "Custom integrations",
        "Dedicated support + SLA",
      ],
      cta: "Talk to Sales",
      featured: false,
    },
  ];

  const comparisonRows = [
    {
      feature: "Monitored websites",
      values: {
        starter: "1 website",
        professional: "Up to 5 websites",
        enterprise: "Unlimited",
      },
    },
    {
      feature: "Scan frequency",
      values: {
        starter: "Weekly",
        professional: "Daily",
        enterprise: "Hourly",
      },
    },
    {
      feature: "Automated accessibility scans",
      values: {
        starter: true,
        professional: true,
        enterprise: true,
      },
    },
    {
      feature: "Issue change detection",
      values: {
        starter: true,
        professional: true,
        enterprise: true,
      },
    },
    {
      feature: "Email alerts",
      values: {
        starter: true,
        professional: true,
        enterprise: true,
      },
    },
    {
      feature: "Slack alerts",
      values: {
        starter: false,
        professional: true,
        enterprise: true,
      },
    },
    {
      feature: "Dashboard history tracking",
      values: {
        starter: true,
        professional: true,
        enterprise: true,
      },
    },
    {
      feature: "Basic reports",
      values: {
        starter: true,
        professional: true,
        enterprise: true,
      },
    },
    {
      feature: "Advanced reports",
      values: {
        starter: false,
        professional: true,
        enterprise: true,
      },
    },
    {
      feature: "White-label reports",
      values: {
        starter: false,
        professional: false,
        enterprise: true,
      },
    },
    {
      feature: "Team access",
      values: {
        starter: "1 user",
        professional: "Up to 5 users",
        enterprise: "Custom",
      },
    },
    {
      feature: "Priority support",
      values: {
        starter: false,
        professional: true,
        enterprise: true,
      },
    },
    {
      feature: "Dedicated support contact",
      values: {
        starter: false,
        professional: false,
        enterprise: true,
      },
    },
    {
      feature: "Custom integrations",
      values: {
        starter: false,
        professional: false,
        enterprise: true,
      },
    },
    {
      feature: "SLA guarantee",
      values: {
        starter: false,
        professional: false,
        enterprise: true,
      },
    },
    {
      feature: "Best for",
      values: {
        starter: "Small websites",
        professional: "Growing teams",
        enterprise: "Agencies & enterprises",
      },
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
      <AnimatedGradient />

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,8,23,0.74)_0%,rgba(2,8,23,0.84)_30%,rgba(2,8,23,0.92)_65%,rgba(1,5,15,0.97)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_28%),radial-gradient(circle_at_bottom,rgba(6,182,212,0.06),transparent_40%)]" />
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

        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-300 shadow-[0_0_24px_rgba(34,211,238,0.10)]">
            Monitoring Pricing
          </div>

          <h2 className="mx-auto mt-5 max-w-4xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Accessibility monitoring plans
            <span className="block bg-gradient-to-r from-white via-cyan-100 to-cyan-300 bg-clip-text text-transparent">
              built for ongoing compliance visibility
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
            Compare our monitoring subscriptions at a glance, then review the
            full feature breakdown below in a detailed comparison table.
          </p>
        </div>

        <div className="mt-20 grid gap-6 lg:grid-cols-3">
          {monitoringPlans.map((plan) => (
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

                <div className="mt-4 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-xs leading-5 text-slate-300">
                  <span className="font-semibold text-white/90">Ideal for:</span>{" "}
                  {plan.idealFor}
                </div>

                <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <div className="mt-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  What’s included
                </div>

                <ul className="mt-4 space-y-3 text-sm text-slate-200">
                  {plan.highlights.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-cyan-400/25 bg-cyan-400/10 text-[11px] text-cyan-300">
                        ✓
                      </span>
                      <span className="leading-6 text-slate-200/95">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

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

        <div className="mt-8 overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.035] shadow-[0_16px_70px_rgba(0,0,0,0.26)] backdrop-blur-xl">
          <div className="border-b border-white/10 px-5 py-4 sm:px-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white sm:text-xl">
                  Compare all monitoring features
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  A full overview of scan coverage, alerts, reporting, and support.
                </p>
              </div>

              <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Subscription plans
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.02]">
                  <th className="min-w-[240px] px-5 py-4 text-left text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 sm:px-6">
                    Features
                  </th>
                  {monitoringPlans.map((plan) => (
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

                    {monitoringPlans.map((plan) => (
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
                  {monitoringPlans.map((plan) => (
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

        <div className="mt-8 flex flex-col items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-center text-sm text-slate-300 sm:flex-row sm:text-left">
          <div>
            Continuous monitoring designed to support{" "}
            <span className="font-semibold text-white">
              ongoing accessibility visibility
            </span>{" "}
            across websites, releases, and recurring compliance checks.
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:border-cyan-300/40 hover:bg-cyan-400/15 hover:text-white"
          >
            Request custom monitoring scope
          </button>
        </div>
      </div>
    </section>
  );
}