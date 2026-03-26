"use client";

import React from "react";
import ScrollReveal from "../ScrollReveal";

type Plan = {
  key: "scan" | "audit" | "monitoring";
  sectionId: string;
  label: string;
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonLink: string;
  featured: boolean;
};

const plans: Plan[] = [
  {
    key: "scan",
    sectionId: "scan-pricing-overview",
    label: "Free Scan",
    title: "Accessibility Quick Scan",
    price: "Free",
    period: "",
    description: "Automated scan to detect common WCAG accessibility issues.",
    features: [
      "Instant accessibility scan",
      "Detection of common WCAG issues",
      "Overview of critical errors",
      "Basic accessibility report",
    ],
    buttonText: "Run Free Scan",
    buttonLink: "/scan",
    featured: false,
  },
  {
    key: "audit",
    sectionId: "audit-pricing-overview",
    label: "Most Popular",
    title: "Expert Accessibility Audit",
    price: "from $750",
    period: "one-time",
    description: "Comprehensive WCAG audit with prioritized remediation.",
    features: [
      "Automated + manual WCAG review",
      "Full WCAG 2.1 / 2.2 compliance check",
      "Legal risk assessment (ADA)",
      "Accessibility verification",
    ],
    buttonText: "View Audit Plans",
    buttonLink: "/audit-pricing",
    featured: true,
  },
  {
    key: "monitoring",
    sectionId: "monitoring-pricing-overview",
    label: "Professional",
    title: "Accessibility Monitoring",
    price: "from $49",
    period: "/month",
    description: "Automated scans with manual spot checks",
    features: [
      "Automated accessibility scans",
      "Weekly / daily monitoring",
      "Alerts for new violations",
      "Accessibility history tracking",
    ],
    buttonText: "View Monitoring Plans",
    buttonLink: "/monitoring-pricing",
    featured: false,
  },
];

const isExternalLink = (url = "") => /^https?:\/\//i.test(url);

const getLinkProps = (url = "") =>
  isExternalLink(url)
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

const PricingCards = () => {
  return (
    <section id="pricing" className="relative scroll-mt-32 py-20 md:py-28">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 20%, rgba(0,136,204,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="container relative mx-auto px-4 md:px-6 lg:px-8">
        <ScrollReveal animation="fade-in-up">
          <div className="mb-14 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#00d4aa]/20 bg-[#00d4aa]/[0.06] px-4 py-2">
              <span className="text-[13px] font-medium text-[#00d4aa]">
                Transparent Pricing
              </span>
            </div>

            <h2 className="mb-5 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-[46px]">
              Accessibility &amp; Compliance
              <br />
              Plans for Every Business
            </h2>

            <p className="mx-auto max-w-lg text-base leading-relaxed text-gray-400">
              Expert audits, verified fixes, and continuous monitoring for ADA
              and WCAG compliance.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-in-up" delay={200} stagger>
          <div className="mx-auto grid max-w-5xl items-start gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.key}
                id={plan.sectionId}
                className="relative flex scroll-mt-28 flex-col rounded-2xl"
                style={
                  plan.featured
                    ? {
                        background:
                          "linear-gradient(180deg, #111d2e 0%, #0c1622 100%)",
                        border: "1px solid rgba(0,212,170,0.25)",
                        boxShadow:
                          "0 0 30px rgba(0,212,170,0.08), 0 20px 60px rgba(0,0,0,0.3)",
                      }
                    : {
                        background:
                          "linear-gradient(180deg, #111d2e 0%, #0c1622 100%)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }
                }
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 z-10 -translate-x-1/2">
                    <div
                      className="flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold text-white"
                      style={{
                        background:
                          "linear-gradient(135deg, #00d4aa, #0088cc)",
                      }}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                          fill="#FFD700"
                        />
                      </svg>
                      Recommended
                    </div>
                  </div>
                )}

                <div
                  className={`flex flex-1 flex-col p-7 ${
                    plan.featured ? "pt-9" : ""
                  }`}
                >
                  <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#0088cc]">
                    {plan.label}
                  </div>

                  <h3 className="mb-4 text-xl font-bold text-white">
                    {plan.title}
                  </h3>

                  <div className="mb-3 flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-white">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-sm font-medium text-gray-400">
                        {plan.period}
                      </span>
                    )}
                  </div>

                  <p className="mb-6 text-sm leading-relaxed text-gray-400">
                    {plan.description}
                  </p>

                  <ul className="mb-8 flex-1 space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="mt-0.5 shrink-0"
                          aria-hidden="true"
                        >
                          <path
                            d="M5 13l4 4L19 7"
                            stroke="#00d4aa"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={plan.buttonLink}
                    {...getLinkProps(plan.buttonLink)}
                    className="flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold transition-opacity hover:opacity-90"
                    style={
                      plan.featured
                        ? {
                            background:
                              "linear-gradient(135deg, #00d4aa, #0088cc)",
                            color: "white",
                          }
                        : {
                            background: "transparent",
                            border: "1px solid rgba(0,212,170,0.3)",
                            color: "#00d4aa",
                          }
                    }
                  >
                    {plan.buttonText}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PricingCards;