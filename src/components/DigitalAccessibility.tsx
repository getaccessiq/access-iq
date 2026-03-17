"use client";

import React, { useId, useState } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    quote:
      "AccessIQ provided us with the expertise we needed to understand our legal obligations, and the tools and training we needed to meet them efficiently reducing risk and improving usability for every customer.",
    name: "Adam Miller",
    title: "Founder",
    company: "Globadmin services",
  },
  {
    quote:
      "The compliance documentation alone saved us thousands in legal consultation fees. AccessIQ made our WCAG 2.1 AA certification process seamless and stress-free.",
    name: "Michael Chen",
    title: "Head of Compliance",
    company: "FinanceHub Inc.",
  },
  {
    quote:
      "We went from 47% to 98% accessibility compliance in just three months. The real-time monitoring dashboard keeps us on track and ahead of any potential issues.",
    name: "Emily Rodriguez",
    title: "Director of Digital",
    company: "HealthFirst Group",
  },
];

const stats = [
  { label: "WCAG Compliance", value: "87%", valueClassName: "gradient-text" },
  { label: "Critical Issues Found", value: "12", valueClassName: "text-white" },
  { label: "Pages Scanned", value: "1,248", valueClassName: "gradient-text" },
];

function ArrowRightIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M5 12h14m-7-7l7 7-7 7"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ExternalArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M7 17L17 7M17 7H7M17 7V17"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DarkCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col justify-center px-6 py-5 ${className}`}
      style={{
        borderRadius: "16px",
        background: "linear-gradient(180deg, #111d2e 0%, #0c1622 100%)",
        border: "1px solid rgba(0, 212, 170, 0.12)",
      }}
    >
      {children}
    </div>
  );
}

const DigitalAccessibility = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonialRegionId = useId();
  const testimonialHeadingId = useId();
  const activeItem = testimonials[activeTestimonial];

  const showPreviousTestimonial = () => {
    setActiveTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const showNextTestimonial = () => {
    setActiveTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      aria-labelledby="digital-accessibility-heading"
      className="relative overflow-hidden py-20 md:py-28"
      style={{
        background:
          "linear-gradient(180deg, #020408 0%, #040810 30%, #050a12 50%, #040810 70%, #020408 100%)",
      }}
    >
      <div
        className="absolute top-0 left-0 w-[900px] h-[900px] pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at 30% 40%, rgba(0,212,170,0.22) 0%, rgba(0,180,216,0.12) 30%, rgba(0,136,204,0.06) 50%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute top-[40%] left-0 w-[700px] h-[700px] pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at 20% 60%, rgba(0,212,170,0.25) 0%, rgba(0,180,216,0.15) 25%, rgba(0,136,204,0.06) 50%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />
      <div
        className="absolute top-[35%] right-[30%] w-[500px] h-[500px] pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle, rgba(0,136,204,0.18) 0%, rgba(0,212,170,0.08) 40%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      <div className="container mx-auto">
        <ScrollReveal animation="fade-in-up">
          <div className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <h2
                id="digital-accessibility-heading"
                className="text-3xl md:text-4xl lg:text-[46px] font-bold text-white leading-tight"
              >
                Digital Accessibility
              </h2>
              <p className="mt-3 text-2xl md:text-3xl lg:text-[34px] font-bold leading-tight">
                <span className="gradient-text">Services You Can Trust</span>
              </p>
            </div>

            <p className="max-w-md text-base leading-relaxed text-gray-300 lg:pb-1">
              Track and improve your website&apos;s accessibility with real-time
              insights and comprehensive audits. We help you stay ahead of ADA
              and WCAG compliance and eliminate legal risks.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-in-up" duration={800}>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="relative flex items-center">
              <Image
                src="/images/digital-accessibility-dashboard-new.png"
                alt="Dashboard showing accessibility trends and issue tracking over time"
                width={1000}
                height={650}
                className="h-auto w-full scale-110 origin-center"
              />
            </div>

            <div className="flex flex-col gap-4 pb-14">
              <div className="grid flex-1 grid-cols-2 gap-4">
                {stats.slice(0, 2).map((stat) => (
                  <DarkCard key={stat.label}>
                    <div className="mb-3 text-xs font-medium uppercase tracking-wide text-gray-400">
                      {stat.label}
                    </div>
                    <div className={`text-4xl font-bold ${stat.valueClassName}`}>
                      {stat.value}
                    </div>
                  </DarkCard>
                ))}
              </div>

              <div className="grid flex-1 grid-cols-2 gap-4">
                <DarkCard>
                  <div className="mb-3 text-xs font-medium uppercase tracking-wide text-gray-400">
                    Pages Scanned
                  </div>
                  <div className="text-4xl font-bold gradient-text">1,248</div>
                </DarkCard>

                <DarkCard>
                  <div className="mb-3 text-xs font-medium uppercase tracking-wide text-gray-400">
                    Avg. Fix Time
                  </div>
                  <div className="text-4xl font-bold text-white">
                    2.1{" "}
                    <span className="text-lg font-normal text-gray-400">
                      Days
                    </span>
                  </div>
                </DarkCard>
              </div>

              <DarkCard>
                <div className="mb-3 text-xs font-medium uppercase tracking-wide text-gray-400">
                  Average Fix Time
                </div>
                <button
                  type="button"
                  className="flex w-fit items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  style={{
                    borderRadius: "9999px",
                    background: "linear-gradient(135deg, #00d4aa, #0088cc)",
                  }}
                  aria-label="Get accessibility report"
                >
                  Get Accessibility Report
                  <ArrowRightIcon />
                </button>
              </DarkCard>
            </div>
          </div>
        </ScrollReveal>

        <div className="mb-28 mt-28 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal animation="fade-in-left">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-[46px] font-bold text-white leading-tight">
                Expert audit completed.
              </h2>
              <p className="mt-3 mb-6 text-2xl md:text-3xl lg:text-[34px] font-bold leading-tight">
                <span className="gradient-text">Verified. Certified.</span>
              </p>

              <p className="mb-8 max-w-md text-base leading-relaxed text-gray-300">
                Following the expert audit, clients receive a verifiable
                accessibility record and access to a certification portal that
                supports audits and compliance tracking.
              </p>

              <button
                type="button"
                className="flex cursor-pointer items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{
                  borderRadius: "9999px",
                  background: "linear-gradient(135deg, #00d4aa, #0088cc)",
                }}
                aria-label="Open certificate portal"
              >
                Certificate portal
                <ExternalArrowIcon />
              </button>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-in-right" delay={300} duration={800}>
            <div className="relative">
              <Image
                src="/images/cert-image-new.png"
                alt="Accessibility compliance certificate preview"
                width={900}
                height={630}
                className="h-auto w-full scale-[1.3] origin-center"
              />
            </div>
          </ScrollReveal>
        </div>

        <div
          className="relative pointer-events-none"
          style={{ height: 0 }}
          aria-hidden="true"
        >
          <div
            className="absolute pointer-events-none"
            style={{
              right: "-250px",
              top: "-60px",
              width: "800px",
              height: "800px",
              background:
                "radial-gradient(circle at 50% 0%, rgba(0,212,170,0.65) 0%, rgba(0,180,216,0.35) 10%, rgba(0,136,204,0.18) 25%, rgba(0,212,170,0.06) 45%, transparent 65%)",
              filter: "blur(60px)",
            }}
          />
          <div
            className="absolute pointer-events-none"
            style={{
              right: "-400px",
              top: "-40px",
              width: "1200px",
              height: "1000px",
              background:
                "radial-gradient(circle at 50% 0%, rgba(0,212,170,0.3) 0%, rgba(0,180,216,0.12) 20%, rgba(0,136,204,0.04) 40%, transparent 60%)",
              filter: "blur(100px)",
            }}
          />
          <div
            className="absolute pointer-events-none"
            style={{
              right: "-550px",
              top: "-20px",
              width: "1600px",
              height: "1200px",
              background:
                "radial-gradient(circle at 50% 0%, rgba(0,136,204,0.12) 0%, rgba(0,212,170,0.04) 20%, rgba(0,180,216,0.015) 40%, transparent 55%)",
              filter: "blur(140px)",
            }}
          />
        </div>

        <div className="relative">
          <ScrollReveal animation="fade-in-up">
            <div className="relative z-10 mb-12">
              <h2
                id={testimonialHeadingId}
                className="text-3xl md:text-4xl lg:text-[46px] font-bold text-white leading-tight"
              >
                Trusted by{" "}
                <span className="gradient-text">industry Leaders</span>
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-in-up" delay={200}>
            <section
              aria-labelledby={testimonialHeadingId}
              className="relative z-10"
            >
              <div className="flex items-stretch gap-8 lg:gap-10">
                <div
                  className="relative w-[280px] flex-shrink-0 overflow-hidden"
                  style={{ borderRadius: "12px" }}
                >
                  <Image
                    src="/images/frame-55-person.png"
                    alt={`Portrait of ${activeItem.name}`}
                    width={280}
                    height={350}
                    className="h-full w-full object-cover"
                    style={{ borderRadius: "12px" }}
                  />
                </div>

                <article
                  className="flex flex-1 flex-col justify-between"
                  aria-roledescription="carousel"
                  aria-label="Client testimonial"
                >
                  <div
                    id={testimonialRegionId}
                    aria-live="polite"
                    aria-atomic="true"
                  >
                    <p className="text-xl font-light leading-relaxed text-gray-200 md:text-2xl lg:text-[26px]">
                      &ldquo;{activeItem.quote}&rdquo;
                    </p>

                    <div className="sr-only">
                      Testimonial {activeTestimonial + 1} of{" "}
                      {testimonials.length}
                    </div>

                    <div className="mt-10 flex items-end justify-between">
                      <div>
                        <div className="text-xl font-bold text-white md:text-2xl">
                          {activeItem.name}
                        </div>
                        <div className="mt-1 text-sm text-gray-400">
                          {activeItem.title}, {activeItem.company}
                        </div>
                      </div>

                      <div
                        className="flex items-center gap-3"
                        aria-label="Testimonial navigation"
                      >
                        <button
                          type="button"
                          onClick={showPreviousTestimonial}
                          className="flex h-12 w-12 items-center justify-center rounded-full cursor-pointer transition-opacity hover:opacity-80"
                          style={{
                            background: "rgba(255,255,255,0.08)",
                            border: "1px solid rgba(255,255,255,0.15)",
                          }}
                          aria-label="Show previous testimonial"
                          aria-controls={testimonialRegionId}
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden="true"
                            focusable="false"
                          >
                            <path
                              d="M19 12H5m7-7l-7 7 7 7"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>

                        <button
                          type="button"
                          onClick={showNextTestimonial}
                          className="flex h-12 w-12 items-center justify-center rounded-full cursor-pointer transition-opacity hover:opacity-80"
                          style={{
                            background:
                              "linear-gradient(135deg, #00d4aa, #0088cc)",
                          }}
                          aria-label="Show next testimonial"
                          aria-controls={testimonialRegionId}
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden="true"
                            focusable="false"
                          >
                            <path
                              d="M5 12h14m-7-7l7 7-7 7"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </section>
          </ScrollReveal>
        </div>

        <ScrollReveal animation="scale-in" duration={800}>
          <div className="relative mt-20 md:mt-28">
            <div
              className="relative overflow-hidden rounded-2xl"
              style={{ border: "1px solid rgba(0,212,170,0.15)" }}
            >
              <div
                className="absolute inset-0"
                aria-hidden="true"
                style={{
                  background:
                    "linear-gradient(135deg, #0a8a7a 0%, #0c7a8a 20%, #1565a0 50%, #2855a0 70%, #4060b0 100%)",
                }}
              />

              <div
                className="absolute top-0 left-0 h-full w-full pointer-events-none"
                aria-hidden="true"
                style={{
                  background:
                    "radial-gradient(ellipse at 0% 50%, rgba(0,212,170,0.3) 0%, transparent 50%)",
                }}
              />
              <div
                className="absolute top-0 right-0 h-full w-full pointer-events-none"
                aria-hidden="true"
                style={{
                  background:
                    "radial-gradient(ellipse at 100% 0%, rgba(80,120,200,0.3) 0%, transparent 50%)",
                }}
              />

              <div
                className="absolute bottom-0 left-1/2 h-[75%] w-full -translate-x-1/2 pointer-events-none"
                aria-hidden="true"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 100%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.6) 8%, rgba(255,255,255,0.35) 18%, rgba(255,255,255,0.15) 32%, rgba(255,255,255,0.05) 48%, transparent 65%)",
                  filter: "blur(8px)",
                }}
              />
              <div
                className="absolute bottom-0 left-1/2 h-[45%] w-[60%] -translate-x-1/2 pointer-events-none"
                aria-hidden="true"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 100%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.4) 20%, rgba(255,255,255,0.1) 45%, transparent 65%)",
                  filter: "blur(5px)",
                }}
              />

              <div
                className="absolute -top-6 -right-12 pointer-events-none md:-top-4 md:-right-10"
                aria-hidden="true"
                style={{ opacity: 0.08, transform: "rotate(-30deg)" }}
              >
                <Image
                  src="/images/favicon-icon.png"
                  alt=""
                  width={200}
                  height={200}
                  className="h-[160px] w-[160px] md:h-[200px] md:w-[200px]"
                />
              </div>

              <div className="relative z-10 px-8 py-14 text-center md:px-16 md:py-16">
                <h2 className="mb-4 text-2xl font-bold leading-tight text-white md:text-3xl lg:text-[40px] whitespace-nowrap">
                  Get Your Verified Accessibility Report Today
                </h2>
                <p className="mx-auto mb-8 max-w-xl text-base text-white/85">
                  Ensure your site is WCAG ADA compliant and minimizes legal
                  risk.
                </p>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#0b1a2a] transition-colors hover:bg-gray-100"
                  aria-label="Start your audit"
                >
                  Start Your Audit
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7v10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div
              className="cta-bottom-glow absolute bottom-0 left-0 h-[50px] w-full pointer-events-none"
              aria-hidden="true"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 0%, rgba(0,212,170,0.8) 0%, rgba(0,180,216,0.5) 10%, rgba(0,136,204,0.25) 25%, rgba(0,180,216,0.1) 45%, rgba(0,136,204,0.03) 65%, transparent 85%)",
                filter: "blur(8px)",
                transform: "translateY(100%)",
              }}
            />
            <div
              className="cta-bottom-glow-2 absolute bottom-0 left-0 h-[40px] w-full pointer-events-none"
              aria-hidden="true"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 0%, rgba(0,212,170,0.5) 0%, rgba(80,160,220,0.2) 20%, rgba(0,136,204,0.05) 45%, transparent 70%)",
                filter: "blur(15px)",
                transform: "translateY(120%)",
              }}
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default DigitalAccessibility;