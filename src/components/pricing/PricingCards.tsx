"use client";

import React from "react";
import ScrollReveal from "../ScrollReveal";

const plans = [
  {
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
    buttonLink: "https://access-iq.vercel.app/scan",
    featured: false,
  },
  {
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
    <section id="pricing" className="relative py-20 md:py-28 scroll-mt-32">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 20%, rgba(0,136,204,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="container mx-auto relative px-4 md:px-6 lg:px-8">
        <ScrollReveal animation="fade-in-up">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00d4aa]/20 bg-[#00d4aa]/[0.06] mb-6">
              <span className="text-[#00d4aa] text-[13px] font-medium">
                Transparent Pricing
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-[46px] font-bold text-white leading-tight mb-5">
              Accessibility &amp; Compliance
              <br />
              Plans for Every Business
            </h2>

            <p className="text-gray-400 text-base max-w-lg mx-auto leading-relaxed">
              Expert audits, verified fixes, and continuous monitoring for ADA
              and WCAG compliance.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-in-up" delay={200} stagger>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="relative rounded-2xl flex flex-col"
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
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <div
                      className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-white text-xs font-semibold"
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
                  className={`p-7 flex flex-col flex-1 ${
                    plan.featured ? "pt-9" : ""
                  }`}
                >
                  <div className="text-[#0088cc] text-xs font-semibold tracking-wider uppercase mb-4">
                    {plan.label}
                  </div>

                  <h3 className="text-white text-xl font-bold mb-4">
                    {plan.title}
                  </h3>

                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-white text-4xl font-bold">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-gray-400 text-sm font-medium">
                        {plan.period}
                      </span>
                    )}
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {plan.description}
                  </p>

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="mt-0.5 shrink-0"
                        >
                          <path
                            d="M5 13l4 4L19 7"
                            stroke="#00d4aa"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={plan.buttonLink}
                    {...getLinkProps(plan.buttonLink)}
                    className="w-full flex items-center justify-center gap-2 text-sm font-semibold py-3 rounded-full transition-opacity hover:opacity-90"
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