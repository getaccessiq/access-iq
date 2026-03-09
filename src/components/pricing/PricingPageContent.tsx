"use client";

import React from "react";
import Image from "next/image";
import AnimatedGradient from "../AnimatedGradient";
import ScrollReveal from "../ScrollReveal";

const plans = [
  {
    label: "PROFESSIONAL",
    title: "Expert Audit",
    price: "$1500+",
    period: "",
    description: "Automated + manual WCAG review with prioritized issues.",
    features: [
      "Automated scan + manual WCAG",
      "Prioritised issue report (legal & UX-focused)",
      "Fixing & remediation guidance",
    ],
    featured: false,
  },
  {
    label: "PROFESSIONAL",
    title: "Monitoring",
    price: "$450",
    period: "/month",
    description: "Automated scans with manual spot checks and trend reports.",
    features: [
      "Code remediation of critical & major issues",
      "Secure PRs (GitHub, GitLab, etc.)",
      "Expert-verification & retesting",
      "PR-ready delivery",
    ],
    featured: true,
  },
  {
    label: "PROFESSIONAL",
    title: "Monitoring",
    price: "$450",
    period: "/month",
    description: "Automated scans with manual spot checks and trend reports.",
    features: [
      "Automated scanning (weekly / daily)",
      "Manual ADA spot checks",
      "Compliance trend reporting",
      "Alerts for new violations",
    ],
    featured: false,
  },
];

const addOns = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" stroke="url(#addOnGrad1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 12h6M9 16h6" stroke="url(#addOnGrad1)" strokeWidth="1.5" strokeLinecap="round" />
        <defs>
          <linearGradient id="addOnGrad1" x1="5" y1="12" x2="19" y2="12" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3770FD" /><stop offset="0.5" stopColor="#2FB8DC" /><stop offset="1" stopColor="#00E19A" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Express",
    subtitle: "Fixes",
    description: "Critical issues fixed within 48h",
    price: "+25-40%",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="url(#addOnGrad2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
          <linearGradient id="addOnGrad2" x1="3" y1="12" x2="21" y2="12" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3770FD" /><stop offset="0.5" stopColor="#2FB8DC" /><stop offset="1" stopColor="#00E19A" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Legal",
    subtitle: "Support Letter",
    description: "Compliance summary for legal teams",
    price: "$1,5K-3K",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" stroke="url(#addOnGrad3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
          <linearGradient id="addOnGrad3" x1="4" y1="12" x2="20" y2="12" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3770FD" /><stop offset="0.5" stopColor="#2FB8DC" /><stop offset="1" stopColor="#00E19A" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Design / UX",
    subtitle: "Accessibility",
    description: "Accessible UX enhancements",
    price: "+25-40%",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" stroke="url(#addOnGrad4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" stroke="url(#addOnGrad4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
          <linearGradient id="addOnGrad4" x1="2" y1="12" x2="21.5" y2="12" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3770FD" /><stop offset="0.5" stopColor="#2FB8DC" /><stop offset="1" stopColor="#00E19A" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Custom",
    subtitle: "Requests",
    description: "Custom requests for your business",
    price: "",
  },
];

const PricingPageContent = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0a0e1a]">
      {/* Single animated gradient background for entire page */}
      <AnimatedGradient />

      <div className="relative z-10">
        {/* ====== HERO SECTION ====== */}
        <div className="container mx-auto pt-[120px] pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[540px]">
            {/* Left side - Text content */}
            <div>
              {/* Badge */}
              <ScrollReveal animation="fade-in-up" delay={100}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00d4aa]/20 bg-[#00d4aa]/[0.06] mb-7">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" fill="none" stroke="#00d4aa" strokeWidth="1.5" />
                    <path d="M9 12l2 2 4-4" stroke="#00d4aa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-white text-[13px] font-medium">Transparent Pricing</span>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-in-up" delay={200}>
                <h1 className="text-[34px] md:text-[42px] lg:text-[50px] font-bold leading-[1.15] text-white mb-6 tracking-tight">
                  Compliance That Costs{" "}
                  <br className="hidden md:block" />
                  Less Than One Lawsuit
                </h1>
              </ScrollReveal>

              <ScrollReveal animation="fade-in-up" delay={300}>
                <p className="text-gray-300 text-[17px] leading-[1.7] mb-8 max-w-[540px]">
                  Manual accessibility testing and legal-grade compliance for WCAG, ADA, Section 508 and EN 301 549.
                </p>
              </ScrollReveal>

              <ScrollReveal animation="fade-in-up" delay={400}>
                <div className="flex items-center gap-4 mb-10">
                  <button className="bg-gradient-to-r from-[#00d4aa] to-[#0088cc] text-white text-[14px] font-semibold px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-[#00d4aa]/20">
                    Start Free Accessibility Audit
                  </button>
                  <a
                    href="https://demo.getaccessiq.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-[14px] font-medium px-7 py-3.5 rounded-full border border-white/20 hover:border-white/40 hover:bg-white/[0.03] transition-all"
                  >
                    View Live Demo
                  </a>
                </div>
              </ScrollReveal>

              {/* Feature badges */}
              <ScrollReveal animation="fade-in-up" delay={500}>
                <div className="flex items-center gap-4 md:gap-6 flex-wrap">
                  {[
                    "Manual Testing",
                    "Real User Scenarios",
                    "No Overlays",
                    "No False Scenarios",
                  ].map((label) => (
                    <div key={label} className="flex items-center gap-2">
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center"
                        style={{
                          background: "linear-gradient(135deg, rgba(0,212,170,0.15), rgba(0,136,204,0.15))",
                          border: "1px solid rgba(0,212,170,0.2)",
                        }}
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                          <path d="M5 13l4 4L19 7" stroke="#00d4aa" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <span className="text-gray-300 text-sm font-medium">{label}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Right side - Dashboard image */}
            <ScrollReveal animation="fade-in-right" delay={400} duration={800}>
              <div className="relative">
                <div className="absolute -inset-8 bg-[#00d4aa]/[0.04] rounded-3xl blur-3xl" />
                <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl shadow-black/40">
                  <Image
                    src="/images/dashboard.png"
                    alt="AccessIQ Dashboard Overview"
                    width={720}
                    height={480}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Bottom spacer */}
        <div className="h-16" />

        {/* ====== PRICING CARDS SECTION ====== */}
        <div className="relative py-20 md:py-28">
          {/* Section-specific subtle glow overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at 50% 20%, rgba(0,136,204,0.08) 0%, transparent 60%)",
            }}
          />

          <div className="container mx-auto relative">
            <ScrollReveal animation="fade-in-up">
              <div className="text-center mb-14">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00d4aa]/20 bg-[#00d4aa]/[0.06] mb-6">
                  <span className="text-[#00d4aa] text-[13px] font-medium">Pricing</span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-[46px] font-bold text-white leading-tight mb-5">
                  Accessibility &amp; Compliance
                  <br />
                  Plans for Every Business
                </h2>
                <p className="text-gray-400 text-base max-w-lg mx-auto leading-relaxed">
                  Expert audits, verified fixes, and continuous monitoring for ADA and WCAG compliance.
                </p>
              </div>
            </ScrollReveal>

            {/* Pricing Cards Grid */}
            <ScrollReveal animation="fade-in-up" delay={200} stagger>
              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
                {plans.map((plan, index) => (
                  <div
                    key={index}
                    className="relative rounded-2xl flex flex-col"
                    style={
                      plan.featured
                        ? {
                            background: "linear-gradient(180deg, #111d2e 0%, #0c1622 100%)",
                            border: "1px solid rgba(0,212,170,0.25)",
                            boxShadow: "0 0 30px rgba(0,212,170,0.08), 0 20px 60px rgba(0,0,0,0.3)",
                          }
                        : {
                            background: "linear-gradient(180deg, #111d2e 0%, #0c1622 100%)",
                            border: "1px solid rgba(255,255,255,0.08)",
                          }
                    }
                  >
                    {plan.featured && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                        <div
                          className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-white text-xs font-semibold"
                          style={{ background: "linear-gradient(135deg, #00d4aa, #0088cc)" }}
                        >
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#FFD700" />
                          </svg>
                          Recommended
                        </div>
                      </div>
                    )}

                    <div className={`p-7 flex flex-col flex-1 ${plan.featured ? "pt-9" : ""}`}>
                      <div className="text-[#0088cc] text-xs font-semibold tracking-wider uppercase mb-4">{plan.label}</div>
                      <h3 className="text-white text-xl font-bold mb-4">{plan.title}</h3>
                      <div className="flex items-baseline gap-1 mb-3">
                        <span className="text-white text-4xl font-bold">{plan.price}</span>
                        {plan.period && <span className="text-gray-400 text-sm font-medium">{plan.period}</span>}
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed mb-6">{plan.description}</p>
                      <ul className="space-y-3 mb-8 flex-1">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0">
                              <path d="M5 13l4 4L19 7" stroke="#00d4aa" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <button
                        className="w-full flex items-center justify-center gap-2 text-sm font-semibold py-3 rounded-full transition-opacity hover:opacity-90"
                        style={
                          plan.featured
                            ? { background: "linear-gradient(135deg, #00d4aa, #0088cc)", color: "white" }
                            : { background: "transparent", border: "1px solid rgba(0,212,170,0.3)", color: "#00d4aa" }
                        }
                      >
                        See Full Plan
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* ====== ADD-ONS SECTION ====== */}
        <div className="relative py-20 md:py-28">
          {/* Section-specific subtle glow overlay - different from pricing */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at 30% 50%, rgba(0,212,170,0.06) 0%, transparent 50%), radial-gradient(ellipse at 70% 50%, rgba(0,136,204,0.06) 0%, transparent 50%)",
            }}
          />
          {/* Subtle top divider */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(0,212,170,0.2), rgba(0,136,204,0.2), transparent)" }} />

          <div className="container mx-auto relative">
            <ScrollReveal animation="fade-in-up">
              <div className="text-center mb-14">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00d4aa]/20 bg-[#00d4aa]/[0.06] mb-6">
                  <span className="text-[#00d4aa] text-[13px] font-medium">Enhance Your Plan</span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-[46px] font-bold text-white leading-tight mb-5">Add-Ons</h2>
                <p className="text-gray-400 text-base max-w-lg mx-auto leading-relaxed">
                  All add-ons are delivered by senior accessibility experts and aligned with WCAG 2.1 AA &amp; ADA requirements.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-in-up" delay={200} stagger>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {addOns.map((addon, index) => (
                  <div
                    key={index}
                    className="rounded-2xl p-6 flex flex-col text-center"
                    style={{
                      background: "linear-gradient(180deg, #111d2e 0%, #0c1622 100%)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <div className="flex justify-center mb-5">
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ background: "rgba(0,212,170,0.10)" }}>
                        {addon.icon}
                      </div>
                    </div>
                    <h3 className="text-white text-lg font-bold mb-1">{addon.title}</h3>
                    <p className="text-[#0088cc] text-sm font-medium underline underline-offset-2 mb-3">{addon.subtitle}</p>
                    <p className="text-gray-400 text-[13px] leading-relaxed mb-4 flex-1">{addon.description}</p>
                    {addon.price && <div className="text-white text-2xl font-bold mb-5">{addon.price}</div>}
                    <button
                      className="w-full flex items-center justify-center gap-2 text-white text-[13px] font-semibold py-2.5 rounded-full hover:opacity-90 transition-opacity"
                      style={{ background: "linear-gradient(135deg, #00d4aa, #0088cc)" }}
                    >
                      Request now
                    </button>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* ====== CTA SECTION ====== */}
        <div className="relative py-20 md:py-28">
          {/* Section-specific glow - stronger center glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at 50% 80%, rgba(0,212,170,0.05) 0%, transparent 50%)",
            }}
          />

          <div className="container mx-auto relative">
            <ScrollReveal animation="scale-in" duration={800}>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(0,212,170,0.15)" }}>
                  <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #0a8a7a 0%, #0c7a8a 20%, #1565a0 50%, #2855a0 70%, #4060b0 100%)" }} />
                  <div className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{ background: "radial-gradient(ellipse at 0% 50%, rgba(0,212,170,0.3) 0%, transparent 50%)" }} />
                  <div className="absolute top-0 right-0 w-full h-full pointer-events-none" style={{ background: "radial-gradient(ellipse at 100% 0%, rgba(80,120,200,0.3) 0%, transparent 50%)" }} />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[75%] pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.6) 8%, rgba(255,255,255,0.35) 18%, rgba(255,255,255,0.15) 32%, rgba(255,255,255,0.05) 48%, transparent 65%)", filter: "blur(8px)" }} />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[45%] pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.4) 20%, rgba(255,255,255,0.1) 45%, transparent 65%)", filter: "blur(5px)" }} />
                  <div className="absolute -top-6 -right-12 md:-top-4 md:-right-10 pointer-events-none" style={{ opacity: 0.08, transform: "rotate(-30deg)" }}>
                    <Image src="/images/favicon-icon.png" alt="" width={200} height={200} className="w-[160px] h-[160px] md:w-[200px] md:h-[200px]" />
                  </div>
                  <div className="relative z-10 px-8 md:px-16 py-14 md:py-16 text-center">
                    <h2 className="text-2xl md:text-3xl lg:text-[40px] font-bold text-white mb-4 leading-tight whitespace-nowrap">
                      Get Your Verified Accessibility Report Today
                    </h2>
                    <p className="text-white/85 text-base max-w-xl mx-auto mb-8">
                      Ensure your site is WCAG ADA compliant and minimizes legal risk.
                    </p>
                    <button className="inline-flex items-center gap-2 bg-white text-[#0b1a2a] font-semibold px-8 py-3.5 rounded-full hover:bg-gray-100 transition-colors text-sm cursor-pointer">
                      Start Your Audit
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-[50px] pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(0,212,170,0.8) 0%, rgba(0,180,216,0.5) 10%, rgba(0,136,204,0.25) 25%, rgba(0,180,216,0.1) 45%, rgba(0,136,204,0.03) 65%, transparent 85%)", filter: "blur(8px)", transform: "translateY(100%)" }} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPageContent;
