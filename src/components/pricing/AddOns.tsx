"use client";

import React from "react";
import ScrollReveal from "../ScrollReveal";

const addOns = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          stroke="url(#addOnGrad1)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 12h6M9 16h6"
          stroke="url(#addOnGrad1)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id="addOnGrad1"
            x1="5"
            y1="12"
            x2="19"
            y2="12"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3770FD" />
            <stop offset="0.5" stopColor="#2FB8DC" />
            <stop offset="1" stopColor="#00E19A" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Express Fixes",
    subtitle: "Most Requested",
    description: "Critical accessibility issues fixed within 48 hours.",
    price: "+25–40% project fee",
    buttonText: "Fix Issues Fast",
    buttonLink: "/contact",
    featured: true,
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          stroke="url(#addOnGrad2)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient
            id="addOnGrad2"
            x1="3"
            y1="12"
            x2="21"
            y2="12"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3770FD" />
            <stop offset="0.5" stopColor="#2FB8DC" />
            <stop offset="1" stopColor="#00E19A" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Legal",
    subtitle: "Support Letter",
    description: "Compliance summary and documentation for legal teams.",
    price: "$1,500–$3,000",
    buttonText: "Get Legal Letter",
    buttonLink: "/contact",
    featured: false,
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"
          stroke="url(#addOnGrad3)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient
            id="addOnGrad3"
            x1="4"
            y1="12"
            x2="20"
            y2="12"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3770FD" />
            <stop offset="0.5" stopColor="#2FB8DC" />
            <stop offset="1" stopColor="#00E19A" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Design / UX",
    subtitle: "Accessibility",
    description: "Accessible UX improvements for better user journeys.",
    price: "+25–40% project fee",
    buttonText: "Improve UX",
    buttonLink: "/contact",
    featured: false,
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path
          d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"
          stroke="url(#addOnGrad4)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"
          stroke="url(#addOnGrad4)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient
            id="addOnGrad4"
            x1="2"
            y1="12"
            x2="21.5"
            y2="12"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3770FD" />
            <stop offset="0.5" stopColor="#2FB8DC" />
            <stop offset="1" stopColor="#00E19A" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Custom Requests",
    subtitle: "Tailored Support",
    description: "Custom accessibility requests for your business needs.",
    price: "Custom quote",
    buttonText: "Request Quote",
    buttonLink: "/contact",
    featured: false,
  },
];

const AddOns = () => {
  return (
    <section className="relative py-20 md:py-28">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(0,212,170,0.06) 0%, transparent 50%), radial-gradient(ellipse at 70% 50%, rgba(0,136,204,0.06) 0%, transparent 50%)",
        }}
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(0,212,170,0.2), rgba(0,136,204,0.2), transparent)",
        }}
      />

      <div className="container mx-auto relative px-4 md:px-6 lg:px-8">
        <ScrollReveal animation="fade-in-up">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00d4aa]/20 bg-[#00d4aa]/[0.06] mb-6">
              <span className="text-[#00d4aa] text-[13px] font-medium">
                Advanced Compliance Add-Ons
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-[46px] font-bold text-white leading-tight mb-5">
              Optional Add-Ons for Advanced Compliance
            </h2>

            <p className="text-gray-400 text-base max-w-2xl mx-auto leading-relaxed">
              Extend your accessibility program with expert-led remediation,
              legal documentation, UX improvements, and custom support aligned
              with WCAG 2.1 AA and ADA requirements.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-in-up" delay={200} stagger>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {addOns.map((addon, index) => (
              <div
                key={index}
                className="group relative rounded-2xl p-6 flex flex-col text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.35)]"
                style={{
                  background:
                    "linear-gradient(180deg, #111d2e 0%, #0c1622 100%)",
                  border: addon.featured
                    ? "1px solid rgba(0,212,170,0.22)"
                    : "1px solid rgba(255,255,255,0.08)",
                  boxShadow: addon.featured
                    ? "0 0 24px rgba(0,212,170,0.08), 0 20px 60px rgba(0,0,0,0.22)"
                    : "none",
                }}
              >
                {addon.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <div
                      className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-white text-[11px] font-semibold"
                      style={{
                        background:
                          "linear-gradient(135deg, #00d4aa, #0088cc)",
                        boxShadow: "0 8px 24px rgba(0,212,170,0.16)",
                      }}
                    >
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                          fill="#FFD700"
                        />
                      </svg>
                      Most Requested
                    </div>
                  </div>
                )}

                <div className="flex justify-center mb-5 mt-2">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{
                      background: "rgba(0,212,170,0.10)",
                      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
                    }}
                  >
                    {addon.icon}
                  </div>
                </div>

                <h3 className="text-white text-[18px] font-bold mb-2">
                  {addon.title}
                </h3>

                <p className="text-[#22b8ff] text-sm font-medium mb-4">
                  {addon.subtitle}
                </p>

                <div className="text-white text-[18px] md:text-[20px] font-bold mb-4">
                  {addon.price}
                </div>

                <p className="text-gray-400 text-[14px] leading-relaxed mb-6 flex-1">
                  {addon.description}
                </p>

                <a
                  href={addon.buttonLink}
                  className="w-full flex items-center justify-center gap-2 text-white text-[14px] font-semibold py-3 rounded-full transition-all duration-300 hover:opacity-95 hover:scale-[1.01]"
                  style={{
                    background: "linear-gradient(135deg, #00d4aa, #0088cc)",
                    boxShadow: "0 12px 30px rgba(0,212,170,0.18)",
                  }}
                >
                  {addon.buttonText}
                </a>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AddOns;