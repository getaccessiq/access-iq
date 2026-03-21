"use client";

import React, { useEffect, useId, useState } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

type Testimonial = {
  quote: string;
  name: string;
  title: string;
  company: string;
  image: string;
};

type Stat = {
  label: string;
  value: string;
  valueClassName?: string;
  suffix?: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "AccessIQ helped us understand our legal obligations, reduce compliance risk, and improve usability across our entire platform.",
    name: "Adam Miller",
    title: "Founder",
    company: "Globadmin Services",
    image: "/images/frame-55-person.png",
  },
  {
    quote:
      "The compliance documentation alone saved us thousands in legal consultation fees. AccessIQ made the certification process clear, efficient, and stress-free.",
    name: "Michael Chen",
    title: "Head of Compliance",
    company: "FinanceHub Inc.",
    image: "/images/frame-56-person.png",
  },
  {
    quote:
      "Within three months, we dramatically improved accessibility across our digital experience. The ongoing monitoring helped our team stay ahead of issues.",
    name: "Emily Rodriguez",
    title: "Director of Digital",
    company: "HealthFirst Group",
    image: "/images/frame-55-person.png",
  },
];

const topStats: Stat[] = [
  {
    label: "WCAG Compliance Score",
    value: "87%",
    valueClassName: "gradient-text",
  },
  {
    label: "Critical Issues Identified",
    value: "12",
    valueClassName: "text-white",
  },
];

const bottomStats: Stat[] = [
  {
    label: "Pages Scanned",
    value: "1,248",
    valueClassName: "gradient-text",
  },
  {
    label: "Avg. Fix Time",
    value: "2.1",
    valueClassName: "text-white",
    suffix: "Days",
  },
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

function ChevronLeftIcon() {
  return (
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
  );
}

function ChevronRightIcon() {
  return (
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

function StatCard({ label, value, valueClassName, suffix }: Stat) {
  return (
    <DarkCard>
      <div className="mb-3 text-xs font-medium uppercase tracking-wide text-gray-400">
        {label}
      </div>

      <div className={`text-4xl font-bold ${valueClassName ?? "text-white"}`}>
        {value}
        {suffix ? (
          <span className="ml-2 text-lg font-normal text-gray-400">
            {suffix}
          </span>
        ) : null}
      </div>
    </DarkCard>
  );
}

function DecorativeBackground() {
  return (
    <>
      <div
        className="pointer-events-none absolute left-0 top-0 h-[900px] w-[900px]"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at 30% 40%, rgba(0,212,170,0.22) 0%, rgba(0,180,216,0.12) 30%, rgba(0,136,204,0.06) 50%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="pointer-events-none absolute left-0 top-[40%] h-[700px] w-[700px]"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at 20% 60%, rgba(0,212,170,0.25) 0%, rgba(0,180,216,0.15) 25%, rgba(0,136,204,0.06) 50%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />
      <div
        className="pointer-events-none absolute right-[30%] top-[35%] h-[500px] w-[500px]"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle, rgba(0,136,204,0.18) 0%, rgba(0,212,170,0.08) 40%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />
    </>
  );
}

function SideGlowCluster() {
  return (
    <div
      className="pointer-events-none relative"
      style={{ height: 0 }}
      aria-hidden="true"
    >
      <div
        className="pointer-events-none absolute"
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
        className="pointer-events-none absolute"
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
        className="pointer-events-none absolute"
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
  );
}

const DigitalAccessibility = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);

  const testimonialHeadingId = useId();
  const testimonialRegionId = useId();

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

  const goToTestimonial = (index: number) => {
    setActiveTestimonial(index);
  };

  const handleCarouselKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showPreviousTestimonial();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      showNextTestimonial();
    }
  };

  useEffect(() => {
    if (isCarouselPaused) return;

    const interval = window.setInterval(() => {
      setActiveTestimonial((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5500);

    return () => window.clearInterval(interval);
  }, [isCarouselPaused]);

  return (
    <section
      aria-labelledby="digital-accessibility-heading"
      className="relative overflow-hidden py-20 md:py-28"
      style={{
        background:
          "linear-gradient(180deg, #020408 0%, #040810 30%, #050a12 50%, #040810 70%, #020408 100%)",
      }}
    >
      <DecorativeBackground />

      <div className="container mx-auto">
        <ScrollReveal animation="fade-in-up">
          <div className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <h2
                id="digital-accessibility-heading"
                className="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-[46px]"
              >
                Digital Accessibility
              </h2>
              <p className="mt-3 text-2xl font-bold leading-tight md:text-3xl lg:text-[34px]">
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
                className="h-auto w-full origin-center scale-110"
              />
            </div>

            <div className="flex flex-col gap-4 pb-14">
              <div className="grid flex-1 grid-cols-2 gap-4">
                {topStats.map((stat) => (
                  <StatCard key={stat.label} {...stat} />
                ))}
              </div>

              <div className="grid flex-1 grid-cols-2 gap-4">
                {bottomStats.map((stat) => (
                  <StatCard key={stat.label} {...stat} />
                ))}
              </div>

              <DarkCard>
                <div className="mb-3 text-xs font-medium uppercase tracking-wide text-gray-400">
                  View Full Compliance Report
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
              <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-[46px]">
                Expert audit completed.
              </h2>
              <p className="mb-6 mt-3 text-2xl font-bold leading-tight md:text-3xl lg:text-[34px]">
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
                className="h-auto w-full origin-center scale-[1.3]"
              />
            </div>
          </ScrollReveal>
        </div>

        <SideGlowCluster />

        {/* ======================================== */}
        {/* PREMIUM TESTIMONIAL CAROUSEL START */}
        {/* ======================================== */}
        <div className="relative">
          <ScrollReveal animation="fade-in-up">
            <div className="relative z-10 mb-10 md:mb-12">
              <h2
                id={testimonialHeadingId}
                className="text-3xl font-bold leading-[1.02] text-white md:text-4xl lg:text-[46px]"
              >
                Trusted by <span className="gradient-text">industry leaders</span>
              </h2>

              <p className="mt-4 flex items-center gap-3 text-sm font-medium text-gray-300 md:text-base">
                <span className="tracking-[0.12em] text-white/80">★★★★★</span>
                <span className="text-white">Trusted by compliance-focused teams</span>
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-in-up" delay={200}>
            <section
              aria-labelledby={testimonialHeadingId}
              className="relative z-10"
              onMouseEnter={() => setIsCarouselPaused(true)}
              onMouseLeave={() => setIsCarouselPaused(false)}
              onFocusCapture={() => setIsCarouselPaused(true)}
              onBlurCapture={() => setIsCarouselPaused(false)}
              onKeyDown={handleCarouselKeyDown}
            >
              <div
                className="relative overflow-hidden rounded-[30px] border border-white/7 p-4 shadow-[0_22px_78px_rgba(0,0,0,0.34)] backdrop-blur-md md:p-5 lg:p-6"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.024) 0%, rgba(255,255,255,0.012) 100%)",
                }}
              >
                <div
                  className="pointer-events-none absolute inset-0"
                  aria-hidden="true"
                  style={{
                    background:
                      "radial-gradient(circle at 0% 0%, rgba(0,212,170,0.065) 0%, transparent 30%), radial-gradient(circle at 100% 100%, rgba(0,136,204,0.07) 0%, transparent 28%)",
                  }}
                />

                <div
                  className="pointer-events-none absolute inset-y-0 left-[28%] hidden w-[32%] lg:block"
                  aria-hidden="true"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, rgba(8,16,28,0.18) 18%, rgba(8,16,28,0.34) 50%, rgba(8,16,28,0.1) 82%, transparent 100%)",
                  }}
                />

                <div className="relative flex flex-col gap-6 lg:flex-row lg:items-stretch lg:gap-10">
                  <div className="w-full lg:max-w-[230px] xl:max-w-[240px]">
                    <div className="relative -mb-[2px] overflow-hidden rounded-[24px] border border-white/10 bg-[#0b1320] shadow-[0_18px_40px_rgba(0,0,0,0.22)]">
                      <div
                        className="absolute inset-x-0 top-0 z-10 h-20"
                        aria-hidden="true"
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.03) 45%, transparent 100%)",
                        }}
                      />

                      <div
                        className="absolute inset-0 z-[1]"
                        aria-hidden="true"
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.06) 45%, rgba(0,0,0,0.28) 100%)",
                        }}
                      />

                      <Image
                        src={activeItem.image}
                        alt={`Portrait of ${activeItem.name}`}
                        width={320}
                        height={420}
                        className="h-[270px] w-full object-cover md:h-[300px] lg:h-[335px]"
                      />

                      <div className="absolute inset-x-0 bottom-0 z-10 p-3">
                        <div className="rounded-[20px] border border-white/10 bg-black/45 px-4 py-3 backdrop-blur-md">
                          <div className="text-[15px] font-semibold leading-tight text-white">
                            {activeItem.name}
                          </div>
                          <div className="mt-1 text-xs leading-relaxed text-gray-300">
                            {activeItem.title} · {activeItem.company}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <article
                    className="flex min-h-[290px] flex-1 flex-col justify-between md:min-h-[320px] lg:min-h-[318px]"
                    aria-roledescription="carousel"
                    aria-label="Client testimonials"
                  >
                    <div
                      id={testimonialRegionId}
                      aria-live="polite"
                      aria-atomic="true"
                      className="flex h-full flex-col"
                    >
                      <div className="mb-6 flex items-center justify-between gap-4">
                        <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-[12px] font-medium uppercase tracking-[0.22em] text-gray-300">
                          <span
                            className="h-2.5 w-2.5 rounded-full bg-[#00d4aa] shadow-[0_0_14px_rgba(0,212,170,0.38)]"
                            aria-hidden="true"
                          />
                          Client success story
                        </div>

                        <div className="text-sm font-medium text-gray-400">
                          <span className="text-white">
                            {String(activeTestimonial + 1).padStart(2, "0")}
                          </span>
                          <span className="mx-2 text-gray-600">/</span>
                          <span>{String(testimonials.length).padStart(2, "0")}</span>
                        </div>
                      </div>

                      <blockquote className="max-w-[940px]">
                        <p className="text-[30px] font-light leading-[1.42] tracking-[-0.02em] text-gray-100 md:text-[32px] md:leading-[1.4] lg:text-[34px] lg:leading-[1.42]">
                          &ldquo;{activeItem.quote}&rdquo;
                        </p>
                      </blockquote>

                      <div className="sr-only">
                        Testimonial {activeTestimonial + 1} of {testimonials.length}
                      </div>

                      <div className="mt-8 grid grid-cols-1 gap-5 border-t border-white/10 pt-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
                        <div className="max-w-[620px]">
                          <div className="text-[20px] font-bold leading-tight text-white md:text-[24px]">
                            {activeItem.name}
                          </div>
                          <div className="mt-2 text-[15px] leading-relaxed text-gray-400 md:text-base">
                            {activeItem.title}, {activeItem.company}
                          </div>
                        </div>

                        <div className="flex items-center md:justify-end">
                          <div
                            className="inline-flex items-center gap-4 rounded-full border border-white/10 bg-black/10 px-3 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] backdrop-blur-md"
                            aria-label="Testimonial controls"
                          >
                            <div
                              className="flex items-center gap-2.5 pr-1"
                              role="tablist"
                              aria-label="Select testimonial"
                            >
                              {testimonials.map((item, index) => {
                                const isActive = index === activeTestimonial;

                                return (
                                  <button
                                    key={`${item.name}-${index}`}
                                    type="button"
                                    role="tab"
                                    aria-selected={isActive}
                                    aria-controls={testimonialRegionId}
                                    aria-label={`Show testimonial ${index + 1} from ${item.name}`}
                                    onClick={() => goToTestimonial(index)}
                                    className={`relative rounded-full transition-all duration-300 ${
                                      isActive
                                        ? "h-3.5 w-14 bg-white"
                                        : "h-3.5 w-3.5 bg-white/25 hover:bg-white/45"
                                    }`}
                                  >
                                    <span className="sr-only">{item.name}</span>
                                  </button>
                                );
                              })}
                            </div>

                            <div className="h-8 w-px bg-white/10" aria-hidden="true" />

                            <div
                              className="flex items-center gap-3"
                              aria-label="Testimonial navigation"
                            >
                              <button
                                type="button"
                                onClick={showPreviousTestimonial}
                                className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] transition-all duration-300 hover:border-white/25 hover:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-white/20"
                                aria-label="Show previous testimonial"
                                aria-controls={testimonialRegionId}
                              >
                                <span className="transition-transform duration-300 group-hover:-translate-x-0.5">
                                  <ChevronLeftIcon />
                                </span>
                              </button>

                              <button
                                type="button"
                                onClick={showNextTestimonial}
                                className="group flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-[#00d4aa]/30"
                                style={{
                                  background: "linear-gradient(135deg, #00d4aa, #0088cc)",
                                  boxShadow: "0 14px 34px rgba(0, 212, 170, 0.24)",
                                }}
                                aria-label="Show next testimonial"
                                aria-controls={testimonialRegionId}
                              >
                                <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                                  <ChevronRightIcon />
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </section>
          </ScrollReveal>
        </div>
         {/* ======================================== */}
        {/* PREMIUM TESTIMONIAL CAROUSEL END */}
        {/* ======================================== */}

        <ScrollReveal animation="scale-in" duration={800}>
          <div className="relative mt-32 md:mt-36">
            <div className="mx-auto max-w-[1180px]">
              <div
                className="group relative overflow-hidden rounded-[32px] border border-white/10 shadow-[0_32px_120px_rgba(0,0,0,0.4)]"
                style={{
                  background:
                    "linear-gradient(135deg, #0c8d88 0%, #117b98 28%, #2b67b7 68%, #4664c8 100%)",
                }}
              >
                <div
                  className="pointer-events-none absolute inset-0"
                  aria-hidden="true"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.035) 0%, rgba(255,255,255,0.018) 100%)",
                  }}
                />

                <div
                  className="pointer-events-none absolute left-0 top-0 h-full w-full"
                  aria-hidden="true"
                  style={{
                    background:
                      "radial-gradient(ellipse at 0% 50%, rgba(0,212,170,0.24) 0%, transparent 52%)",
                  }}
                />
                <div
                  className="pointer-events-none absolute right-0 top-0 h-full w-full"
                  aria-hidden="true"
                  style={{
                    background:
                      "radial-gradient(ellipse at 100% 0%, rgba(120,150,255,0.18) 0%, transparent 50%)",
                  }}
                />

                <div
                  className="pointer-events-none absolute left-1/2 top-0 h-full w-[60%] -translate-x-1/2"
                  aria-hidden="true"
                  style={{
                    background:
                      "radial-gradient(ellipse at 50% 28%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.04) 22%, transparent 60%)",
                    filter: "blur(8px)",
                  }}
                />

                <div
                  className="pointer-events-none absolute bottom-0 left-1/2 h-[68%] w-[76%] -translate-x-1/2 transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                  style={{
                    background:
                      "radial-gradient(ellipse at 50% 100%, rgba(255,255,255,0.56) 0%, rgba(255,255,255,0.24) 18%, rgba(255,255,255,0.08) 38%, transparent 68%)",
                    filter: "blur(10px)",
                  }}
                />

                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/12"
                  aria-hidden="true"
                />

                <div
                  className="pointer-events-none absolute -right-10 -top-6 md:-right-8 md:-top-4"
                  aria-hidden="true"
                  style={{ opacity: 0.05, transform: "rotate(-24deg)" }}
                >
                  <Image
                    src="/images/favicon-icon.png"
                    alt=""
                    width={220}
                    height={220}
                    className="h-[130px] w-[130px] md:h-[190px] md:w-[190px]"
                  />
                </div>

                <div className="relative z-10 px-6 py-16 text-center md:px-12 md:py-16 lg:px-16 lg:py-20">
                  <div className="mx-auto max-w-[940px]">
                    <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.22em] text-white/85 backdrop-blur-sm md:text-[11px]">
                      <span
                        className="h-2.5 w-2.5 rounded-full bg-white/90 shadow-[0_0_12px_rgba(255,255,255,0.45)]"
                        aria-hidden="true"
                      />
                      Verified accessibility reporting
                    </div>

                    <h2 className="mx-auto max-w-[1020px] text-balance text-4xl font-bold leading-[1.03] tracking-[-0.01em] text-white md:text-5xl lg:text-[58px]">
                      Get Your Verified Accessibility Report Today
                    </h2>

                    <p className="mx-auto mt-5 max-w-[780px] text-sm leading-relaxed text-white/85 md:text-lg">
                      Ensure your site is WCAG and ADA aligned, reduce legal exposure,
                      and get a clear path to remediation with a report your team can act on.
                    </p>

                    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                      <button
                        type="button"
                        className="group inline-flex min-w-[220px] items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#0b1a2a] shadow-[0_14px_40px_rgba(255,255,255,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/95 focus:outline-none focus:ring-2 focus:ring-white/30"
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
                          className="transition-transform duration-300 group-hover:translate-x-0.5"
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

                      <button
                        type="button"
                        className="inline-flex min-w-[220px] items-center justify-center gap-2 rounded-full border border-white/18 bg-white/8 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/24 hover:bg-white/12 focus:outline-none focus:ring-2 focus:ring-white/20"
                        aria-label="View sample report"
                      >
                        View Sample Report
                      </button>
                    </div>

                    <div className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-white/72 md:gap-x-5 md:text-sm">
                      <span>No credit card required</span>
                      <span
                        className="hidden h-1 w-1 rounded-full bg-white/30 sm:inline-block"
                        aria-hidden="true"
                      />
                      <span>Clear remediation guidance</span>
                      <span
                        className="hidden h-1 w-1 rounded-full bg-white/30 sm:inline-block"
                        aria-hidden="true"
                      />
                      <span>Built for compliance-focused teams</span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="pointer-events-none absolute bottom-0 left-0 h-[64px] w-full"
                aria-hidden="true"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 0%, rgba(0,212,170,0.58) 0%, rgba(0,180,216,0.24) 18%, rgba(0,136,204,0.08) 40%, transparent 78%)",
                  filter: "blur(14px)",
                  transform: "translateY(108%)",
                }}
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default DigitalAccessibility;