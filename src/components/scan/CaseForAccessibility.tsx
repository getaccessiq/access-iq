"use client";

import Image from "next/image";
import ScrollReveal from "../ScrollReveal";

const CaseForAccessibility = () => {
  return (
    <section className="relative bg-white pb-24">
      <div className="container mx-auto">
        {/* Divider */}
        <div className="h-px bg-gray-100 mb-20" />

        <div className="grid lg:grid-cols-[5fr_7fr] gap-12 lg:gap-16 items-start">

          {/* Left */}
          <ScrollReveal animation="fade-in-left">
            <div className="lg:pt-4">
              <h2 className="text-4xl md:text-5xl lg:text-[52px] font-bold text-[#0b0f1a] leading-[1.1] mb-5">
                The case for<br />accessibility
              </h2>
              <p className="text-gray-400 text-base leading-relaxed max-w-sm">
                Inclusion is a business advantage, not just compliance box ticking.
              </p>
            </div>
          </ScrollReveal>

          {/* Right — 2x2 grid */}
          <ScrollReveal animation="fade-in-right" delay={200}>
            <div className="grid grid-cols-2 gap-4">

              {/* Card 1 — $13 trillion */}
              <div
                className="rounded-2xl p-6 border border-gray-100"
                style={{ background: "#f4f6f9" }}
              >
                <div className="mb-4">
                  <Image
                    src="/images/trillion.png"
                    alt="People icon"
                    width={52}
                    height={52}
                    className="w-[38px] h-[38px] object-contain"
                  />
                </div>
                <div className="text-[#0b0f1a] text-[28px] font-bold leading-tight mb-2">
                  $13 trillion
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Global spending power of people with disabilities
                </p>
              </div>

              {/* Card 2 — 98% */}
              <div
                className="rounded-2xl p-6 border border-gray-100"
                style={{ background: "#f4f6f9" }}
              >
                <div className="mb-4">
                  <Image
                    src="/images/percent.png"
                    alt="Accessibility icon"
                    width={52}
                    height={52}
                    className="w-[38px] h-[38px] object-contain"
                  />
                </div>
                <div className="text-[#0b0f1a] text-[28px] font-bold leading-tight mb-2">
                  98%
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Of websites have accessibility issues
                </p>
              </div>

              {/* Card 3 — 23% */}
              <div
                className="rounded-2xl p-6 border border-gray-100"
                style={{ background: "#f4f6f9" }}
              >
                <div className="mb-4">
                  <Image
                    src="/images/23-percent.png"
                    alt="Chart icon"
                    width={52}
                    height={52}
                    className="w-[38px] h-[38px] object-contain"
                  />
                </div>
                <div className="text-[#0b0f1a] text-[28px] font-bold leading-tight mb-2">
                  23%
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Increase in organic traffic for accessible sites
                </p>
              </div>

              {/* Card 4 — ADA Lawsuit Risk */}
              <div
                className="rounded-2xl p-6 border border-gray-100 flex flex-col overflow-hidden lg:overflow-visible"
                style={{ background: "#f4f6f9" }}
              >
                <div className="text-[#0b0f1a] text-[22px] font-bold leading-tight mb-3">
                  $3+ Billion<br />ADA Lawsuit Risk
                </div>
                {/* Bottom row: text left, image right — never overlap */}
                <div className="flex items-end justify-between gap-2 mt-auto">
                  <p className="text-gray-500 text-sm leading-relaxed flex-1 min-w-0">
                    Thousands of ADA accessibility lawsuits are filed against websites every year.
                  </p>
                  <div className="flex-shrink-0 w-[38%] lg:w-[46%] lg:-mr-[42px] pointer-events-none select-none">
                    <Image
                      src="/images/law.png"
                      alt="Gavel"
                      width={220}
                      height={180}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>

            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default CaseForAccessibility;