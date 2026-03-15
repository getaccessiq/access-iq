import AnimatedGradient from "./AnimatedGradient";

type PlanKey = "starter" | "professional" | "enterprise";

type MonitoringPlan = {
  key: PlanKey;
  label: string;
  title: string;
  price: string;
  priceSuffix: string;
  shortDescription: string;
  idealFor: string;
  highlights: string[];
  cta: string;
  featured?: boolean;
  badge?: string;
};

type ComparisonRow = {
  feature: string;
  values: Record<PlanKey, boolean | string>;
};

const monitoringPlans: MonitoringPlan[] = [
  {
    key: "starter",
    label: "STARTER",
    title: "Starter Monitoring",
    price: "$49",
    priceSuffix: "/mo",
    shortDescription:
      "Recurring accessibility scans for small websites that need essential visibility, issue alerts, and basic reporting.",
    idealFor:
      "Best for brochure sites, small business websites, and single-site monitoring.",
    highlights: [
      "Up to 500 pages monitored",
      "Weekly automated scans",
      "Email alerts for new issues",
      "Basic reporting dashboard",
    ],
    cta: "Start Starter Plan",
    featured: false,
  },
  {
    key: "professional",
    label: "MOST POPULAR",
    title: "Professional Monitoring",
    price: "$199",
    priceSuffix: "/mo",
    shortDescription:
      "Continuous accessibility monitoring for growing teams that need more coverage, faster scans, smarter alerts, and stronger reporting.",
    idealFor:
      "Best for SaaS products, marketing teams, and growing multi-page websites.",
    highlights: [
      "Up to 6000 pages monitored",
      "Daily automated scans",
      "Email + Slack alerts",
      "Advanced reporting dashboard",
    ],
    cta: "Start Professional Plan",
    featured: true,
    badge: "Recommended",
  },
  {
    key: "enterprise",
    label: "ENTERPRISE",
    title: "Enterprise Monitoring",
    price: "$499",
    priceSuffix: "/mo",
    shortDescription:
      "High-frequency monitoring for organizations that need unlimited coverage, custom workflows, white-label reporting, and premium support.",
    idealFor:
      "Best for agencies, enterprise teams, and high-volume multi-site environments.",
    highlights: [
      "Unlimited pages monitored",
      "Hourly automated scans",
      "Custom integrations",
      "Dedicated support + SLA",
    ],
    cta: "Talk to Sales",
    featured: false,
  },
];

const comparisonRows: ComparisonRow[] = [
  {
    feature: "Pages monitored",
    values: {
      starter: "Up to 500 pages",
      professional: "Up to 6000 pages",
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

function renderCellValue(value: boolean | string) {
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
}

export default function AccessIQMonitoringPricingSection() {
  return (
    <section className="relative bg-[#020817] text-white">
      <AnimatedGradient />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,8,23,0.68)_0%,rgba(2,8,23,0.84)_28%,rgba(2,8,23,0.92)_62%,rgba(1,5,15,0.98)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_28%),radial-gradient(circle_at_bottom,rgba(6,182,212,0.07),transparent_42%)]" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:42px_42px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-24 pb-16 sm:px-6 lg:px-8 lg:pt-28 lg:pb-20">
        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-300 shadow-[0_0_24px_rgba(34,211,238,0.10)]">
            Accessibility Monitoring
          </div>

          <h2 className="mx-auto mt-5 max-w-4xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Continuous accessibility monitoring
            <span className="block pb-1 bg-gradient-to-r from-white via-cyan-100 to-cyan-300 bg-clip-text text-transparent">
              built for ongoing compliance
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
            Detect accessibility issues before they turn into compliance risk.
            Compare plans for scan coverage, alerting, reporting, and support.
          </p>


          <div className="mx-auto mt-12 h-px max-w-4xl bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
        </div>

        <div className="mt-24 grid gap-6 lg:grid-cols-3">
          {monitoringPlans.map((plan) => (
            <article
              key={plan.key}
              className={`group relative rounded-[26px] border backdrop-blur-xl transition-all duration-300 ${
                plan.featured
                  ? "translate-y-[-4px] border-cyan-300/45 bg-white/[0.055] shadow-[0_0_0_1px_rgba(34,211,238,0.14),0_18px_55px_rgba(6,182,212,0.16),0_0_60px_rgba(34,211,238,0.06)]"
                  : "border-white/10 bg-white/[0.03] shadow-[0_18px_60px_rgba(0,0,0,0.30)] hover:border-cyan-400/20 hover:bg-white/[0.04]"
              }`}
            >
              <div
                className={`pointer-events-none absolute inset-x-0 top-0 h-px ${
                  plan.featured
                    ? "bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent"
                    : "bg-gradient-to-r from-transparent via-white/15 to-transparent"
                }`}
              />

              {plan.badge && (
                <div className="absolute left-1/2 -top-5 z-10 -translate-x-1/2">
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

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {plan.shortDescription}
                </p>

                <div className="mt-4 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-xs leading-6 text-slate-300">
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

        <div className="mt-10 overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] shadow-[0_18px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl">
          <div className="border-b border-white/10 px-5 py-4 sm:px-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white sm:text-xl">
                  Compare every monitoring feature
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  Review scan coverage, alerting, reporting, team access, and support in one place.
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
                        {renderCellValue(row.values[plan.key])}
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

        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-5 text-center text-sm text-slate-300 sm:flex-row sm:text-left">
          <div className="max-w-3xl">
            Need broader scan coverage, custom reporting, or a monitoring workflow tailored to your organization?
            <span className="font-semibold text-white">
              {" "}
              We can scope a monitoring plan around your compliance process.
            </span>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-300 transition hover:border-cyan-300/40 hover:bg-cyan-400/15 hover:text-white"
          >
            Request Custom Monitoring Scope
          </button>
        </div>
      </div>
    </section>
  );
}