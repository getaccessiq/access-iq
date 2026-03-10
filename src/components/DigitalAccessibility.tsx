"use client";

import React, { useState } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    quote: "AccessIQ provided us with the expertise we needed to understand our legal obligations, and the tools and training we needed to meet them efficiently reducing risk and improving usability for every customer.",
    name: "Adam Miller",
    title: "Founder",
    company: "Globadmin services",
  },
  {
    quote: "The compliance documentation alone saved us thousands in legal consultation fees. AccessIQ made our WCAG 2.1 AA certification process seamless and stress-free.",
    name: "Michael Chen",
    title: "Head of Compliance",
    company: "FinanceHub Inc.",
  },
  {
    quote: "We went from 47% to 98% accessibility compliance in just three months. The real-time monitoring dashboard keeps us on track and ahead of any potential issues.",
    name: "Emily Rodriguez",
    title: "Director of Digital",
    company: "HealthFirst Group",
  },
];

const DigitalAccessibility = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #020408 0%, #040810 30%, #050a12 50%, #040810 70%, #020408 100%)",
      }}
    >
      {/* Heavy gradient glow: heading area flowing down to bottom-left */}
      <div
        className="absolute top-0 left-0 w-[900px] h-[900px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 30% 40%, rgba(0,212,170,0.22) 0%, rgba(0,180,216,0.12) 30%, rgba(0,136,204,0.06) 50%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      {/* Strong teal glow at bottom-left of chart area */}
      <div
        className="absolute top-[40%] left-0 w-[700px] h-[700px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 20% 60%, rgba(0,212,170,0.25) 0%, rgba(0,180,216,0.15) 25%, rgba(0,136,204,0.06) 50%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />
      {/* Glow at bottom-right corner of image area */}
      <div
        className="absolute top-[35%] right-[30%] w-[500px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,136,204,0.18) 0%, rgba(0,212,170,0.08) 40%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      <div className="container mx-auto">
        {/* Section Header - Title left, Description right */}
        <ScrollReveal animation="fade-in-up">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-14">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-[46px] font-bold text-white leading-tight">
              Digital Accessibility
            </h2>
            <p className="text-2xl md:text-3xl lg:text-[34px] font-bold leading-tight mt-3">
              <span className="gradient-text">Services You Can Trust</span>
            </p>
          </div>
          <p className="text-gray-300 text-base max-w-md leading-relaxed lg:pb-1">
            Track and improve your website&apos;s accessibility with real-time insights and comprehensive audits. We help you stay ahead of ADA &amp; WCAG compliance and eliminate legal risks.
          </p>
        </div>
        </ScrollReveal>

        {/* Main Content - Chart left, Stats right */}
        <ScrollReveal animation="fade-in-up" duration={800}>
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left - Chart Image */}
          <div className="relative flex items-center">
            <Image
              src="/images/digital-accessibility-dashboard-new.png"
              alt="Accessibility Issues Over Time"
              width={1000}
              height={650}
              className="w-full h-auto scale-110 origin-center"
            />
          </div>

          {/* Right - Stat Cards */}
          <div className="flex flex-col gap-4 pb-14">
            {/* Top row - 2 cards */}
            <div className="grid grid-cols-2 gap-4 flex-1">
              <div
                className="flex flex-col justify-center px-6 py-5"
                style={{
                  borderRadius: "16px",
                  background: "linear-gradient(180deg, #111d2e 0%, #0c1622 100%)",
                  border: "1px solid rgba(0, 212, 170, 0.12)",
                }}
              >
                <div className="text-gray-400 text-xs font-medium tracking-wide uppercase mb-3">WCAG Compliance</div>
                <div className="text-4xl font-bold gradient-text">87%</div>
              </div>
              <div
                className="flex flex-col justify-center px-6 py-5"
                style={{
                  borderRadius: "16px",
                  background: "linear-gradient(180deg, #111d2e 0%, #0c1622 100%)",
                  border: "1px solid rgba(0, 212, 170, 0.12)",
                }}
              >
                <div className="text-gray-400 text-xs font-medium tracking-wide uppercase mb-3">Critical Issues Found</div>
                <div className="text-4xl font-bold text-white">12</div>
              </div>
            </div>

            {/* Middle row - 2 cards */}
            <div className="grid grid-cols-2 gap-4 flex-1">
              <div
                className="flex flex-col justify-center px-6 py-5"
                style={{
                  borderRadius: "16px",
                  background: "linear-gradient(180deg, #111d2e 0%, #0c1622 100%)",
                  border: "1px solid rgba(0, 212, 170, 0.12)",
                }}
              >
                <div className="text-gray-400 text-xs font-medium tracking-wide uppercase mb-3">Pages Scanned</div>
                <div className="text-4xl font-bold gradient-text">1,248</div>
              </div>
              <div
                className="flex flex-col justify-center px-6 py-5"
                style={{
                  borderRadius: "16px",
                  background: "linear-gradient(180deg, #111d2e 0%, #0c1622 100%)",
                  border: "1px solid rgba(0, 212, 170, 0.12)",
                }}
              >
                <div className="text-gray-400 text-xs font-medium tracking-wide uppercase mb-3">Avg. Fix Time</div>
                <div className="text-4xl font-bold text-white">
                  2.1 <span className="text-lg font-normal text-gray-400">Days</span>
                </div>
              </div>
            </div>

            {/* Bottom - Average Fix Time + CTA */}
            <div
              className="flex flex-col justify-center px-6 py-5"
              style={{
                borderRadius: "16px",
                background: "linear-gradient(180deg, #111d2e 0%, #0c1622 100%)",
                border: "1px solid rgba(0, 212, 170, 0.12)",
              }}
            >
              <div className="text-gray-400 text-xs font-medium tracking-wide uppercase mb-3">Average Fix Time</div>
              <button
                className="flex items-center gap-2 text-white text-sm font-semibold px-5 py-2.5 hover:opacity-90 transition-opacity"
                style={{
                  borderRadius: "9999px",
                  background: "linear-gradient(135deg, #00d4aa, #0088cc)",
                  width: "fit-content",
                }}
              >
                Get Accessibility Report
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14m-7-7l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        </ScrollReveal>

        {/* Expert Audit Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-28 mb-28">
          {/* Left Content */}
          <ScrollReveal animation="fade-in-left">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-[46px] font-bold text-white leading-tight">
              Expert audit completed.
            </h2>
            <p className="text-2xl md:text-3xl lg:text-[34px] font-bold leading-tight mt-3 mb-6">
              <span className="gradient-text">Verified. Certified.</span>
            </p>

            <p className="text-gray-300 text-base leading-relaxed mb-8 max-w-md">
              Following the expert audit, clients receive a verifiable accessibility and access to a citification portal that supports audits. and compliance tracking.
            </p>

            <button
              className="flex items-center gap-2 text-white font-semibold px-7 py-3.5 hover:opacity-90 transition-opacity text-sm cursor-pointer"
              style={{
                borderRadius: "9999px",
                background: "linear-gradient(135deg, #00d4aa, #0088cc)",
              }}
            >
              Certificate portal
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          </ScrollReveal>

          {/* Right - Certificate image */}
          <ScrollReveal animation="fade-in-right" delay={300} duration={800}>
          <div className="relative">
            <Image
              src="/images/cert-image-new.png"
              alt="Certificate of Accessibility Compliance"
              width={900}
              height={630}
              className="w-full h-auto scale-[1.3] origin-center"
            />
          </div>
          </ScrollReveal>
        </div>

        {/* Spreading gradient light between Expert Audit and Testimonial */}
        <div className="relative pointer-events-none" style={{ height: 0 }}>
          {/* Core strong glow - top center, spreads down */}
          <div
            className="absolute pointer-events-none"
            style={{
              right: "-250px",
              top: "-60px",
              width: "800px",
              height: "800px",
              background: "radial-gradient(circle at 50% 0%, rgba(0,212,170,0.65) 0%, rgba(0,180,216,0.35) 10%, rgba(0,136,204,0.18) 25%, rgba(0,212,170,0.06) 45%, transparent 65%)",
              filter: "blur(60px)",
            }}
          />
          {/* Mid spread - softer, wider */}
          <div
            className="absolute pointer-events-none"
            style={{
              right: "-400px",
              top: "-40px",
              width: "1200px",
              height: "1000px",
              background: "radial-gradient(circle at 50% 0%, rgba(0,212,170,0.3) 0%, rgba(0,180,216,0.12) 20%, rgba(0,136,204,0.04) 40%, transparent 60%)",
              filter: "blur(100px)",
            }}
          />
          {/* Outer soft wash */}
          <div
            className="absolute pointer-events-none"
            style={{
              right: "-550px",
              top: "-20px",
              width: "1600px",
              height: "1200px",
              background: "radial-gradient(circle at 50% 0%, rgba(0,136,204,0.12) 0%, rgba(0,212,170,0.04) 20%, rgba(0,180,216,0.015) 40%, transparent 55%)",
              filter: "blur(140px)",
            }}
          />
        </div>

        {/* Trusted By - Testimonial Slider */}
        <div className="relative">
          {/* removed - glow moved to between sections */}

          <ScrollReveal animation="fade-in-up">
          <div className="relative z-10 mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-[46px] font-bold text-white leading-tight">
              Trusted by{" "}
              <span className="gradient-text">industry Leaders</span>
            </h2>
          </div>
          </ScrollReveal>

          {/* Testimonial Layout: Image left, Quote right */}
          <ScrollReveal animation="fade-in-up" delay={200}>
          <div className="relative z-10 flex gap-8 lg:gap-10 items-stretch">
          {/* Left - Person Image (smaller) */}
          <div className="flex-shrink-0 relative overflow-hidden w-[280px]" style={{ borderRadius: "12px" }}>
            <Image
              src="/images/frame-55-person.png"
              alt={testimonials[activeTestimonial].name}
              width={280}
              height={350}
              className="w-full h-full object-cover"
              style={{ borderRadius: "12px" }}
            />
          </div>

          {/* Right - Quote, Name, Navigation */}
          <div className="flex-1 flex flex-col justify-between">
            {/* Quote */}
            <p className="text-gray-200 text-xl md:text-2xl lg:text-[26px] leading-relaxed font-light">
              &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
            </p>

            {/* Bottom row: Name left, Arrows right */}
            <div className="flex items-end justify-between mt-10">
              {/* Person Info */}
              <div>
                <div className="text-white font-bold text-xl md:text-2xl">{testimonials[activeTestimonial].name}</div>
                <div className="text-gray-400 text-sm mt-1">
                  {testimonials[activeTestimonial].title}, {testimonials[activeTestimonial].company}
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-3">
               <button
  onClick={() =>
    setActiveTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    )
  }
  className="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-opacity hover:opacity-80"
  style={{
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.15)",
  }}
  aria-label="Show previous testimonial"
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
  onClick={() =>
    setActiveTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    )
  }
  className="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-opacity hover:opacity-80"
  style={{
    background: "linear-gradient(135deg, #00d4aa, #0088cc)",
  }}
  aria-label="Show next testimonial"
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
          </div>
          </ScrollReveal>
        </div>

        {/* CTA Banner */}
        <ScrollReveal animation="scale-in" duration={800}>
        <div className="mt-20 md:mt-28 relative">
          {/* The card */}
          <div className="relative rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(0,212,170,0.15)" }}>
            {/* Gradient background - teal to blue */}
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #0a8a7a 0%, #0c7a8a 20%, #1565a0 50%, #2855a0 70%, #4060b0 100%)" }} />

            {/* Subtle overlay glows */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{ background: "radial-gradient(ellipse at 0% 50%, rgba(0,212,170,0.3) 0%, transparent 50%)" }} />
            <div className="absolute top-0 right-0 w-full h-full pointer-events-none" style={{ background: "radial-gradient(ellipse at 100% 0%, rgba(80,120,200,0.3) 0%, transparent 50%)" }} />

            {/* Bottom center white glow - hard and strong */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[75%] pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.6) 8%, rgba(255,255,255,0.35) 18%, rgba(255,255,255,0.15) 32%, rgba(255,255,255,0.05) 48%, transparent 65%)", filter: "blur(8px)" }} />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[45%] pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.4) 20%, rgba(255,255,255,0.1) 45%, transparent 65%)", filter: "blur(5px)" }} />

            {/* Favicon icon - top right corner, rotated */}
            <div className="absolute -top-6 -right-12 md:-top-4 md:-right-10 pointer-events-none" style={{ opacity: 0.08, transform: "rotate(-30deg)" }}>
              <Image
                src="/images/favicon-icon.png"
                alt=""
                width={200}
                height={200}
                className="w-[160px] h-[160px] md:w-[200px] md:h-[200px]"
              />
            </div>

            {/* Content */}
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

          {/* Shadow glow below CTA - full width, max 50px, strong center fading to sides */}
          <div className="cta-bottom-glow absolute bottom-0 left-0 w-full h-[50px] pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(0,212,170,0.8) 0%, rgba(0,180,216,0.5) 10%, rgba(0,136,204,0.25) 25%, rgba(0,180,216,0.1) 45%, rgba(0,136,204,0.03) 65%, transparent 85%)", filter: "blur(8px)", transform: "translateY(100%)" }} />
          <div className="cta-bottom-glow-2 absolute bottom-0 left-0 w-full h-[40px] pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(0,212,170,0.5) 0%, rgba(80,160,220,0.2) 20%, rgba(0,136,204,0.05) 45%, transparent 70%)", filter: "blur(15px)", transform: "translateY(120%)" }} />
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default DigitalAccessibility;
