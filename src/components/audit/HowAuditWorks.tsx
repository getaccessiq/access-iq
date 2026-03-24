"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "../ScrollReveal";

type Step = {
  icon: React.ReactNode;
  title: string;
  description: string;
  bg: string;
};

const steps: Step[] = [
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        <g clipPath="url(#hawClip3)">
          <path
            d="M47.4392 44.6095L45.2841 42.4544L41.8223 38.9986L47.4032 33.4177C48.184 32.6356 48.183 31.3687 47.4009 30.5878C47.1948 30.3821 46.9463 30.2238 46.6728 30.124L28.7256 23.6128C26.647 22.8615 24.3529 23.9375 23.6015 26.0162C23.2841 26.8948 23.2839 27.8567 23.601 28.7354L30.1304 46.6826C30.245 46.9988 30.4375 47.2809 30.69 47.503C30.9425 47.7251 31.2469 47.88 31.5751 47.9533C31.7178 47.9843 31.8634 47.9997 32.0093 47.9993C32.54 47.9992 33.0489 47.7883 33.4241 47.413L38.999 41.8222L42.4548 45.278L44.6099 47.4331C45.4048 48.2008 46.6715 48.1788 47.4393 47.3838C48.1882 46.6084 48.1882 45.3791 47.4393 44.6036L47.4392 44.6095Z"
            fill="url(#hawGrad3a)"
          />
          <path
            d="M20.0102 40.0211C8.95893 40.0211 0 31.0622 0 20.0109C0 8.95963 8.95893 0.000610352 20.0102 0.000610352C31.0615 0.000610352 40.0205 8.95954 40.0205 20.0109C40.0205 21.116 39.1246 22.0119 38.0195 22.0119C36.9144 22.0119 36.0184 21.116 36.0184 20.0109C36.0184 11.1698 28.8513 4.00269 20.0102 4.00269C11.1691 4.00269 4.00208 11.1698 4.00208 20.0109C4.00208 28.852 11.1692 36.0191 20.0103 36.0191C21.1154 36.0191 22.0113 36.915 22.0113 38.0201C22.0113 39.1253 21.1153 40.0211 20.0102 40.0211Z"
            fill="url(#hawGrad3b)"
          />
          <path
            d="M16.1764 31.2567C15.9134 31.2568 15.653 31.2052 15.41 31.1046C9.28635 28.5612 6.38396 21.5353 8.9273 15.4116C11.4706 9.28786 18.4967 6.38556 24.6203 8.92889C27.5594 10.1497 29.8937 12.4875 31.11 15.4285C31.5498 16.4424 31.0844 17.6208 30.0707 18.0606C29.0568 18.5004 27.8784 18.0351 27.4386 17.0213C27.4294 17.0001 27.4206 16.9788 27.4122 16.9573C25.7182 12.8742 21.0349 10.9375 16.9519 12.6315C12.8689 14.3255 10.932 19.0087 12.626 23.0917C13.4373 25.0472 14.9902 26.6016 16.9449 27.4147C17.966 27.8373 18.4513 29.0077 18.0286 30.0288C17.877 30.3951 17.6201 30.7082 17.2903 30.9282C16.9606 31.1482 16.5729 31.2654 16.1765 31.2647L16.1764 31.2567Z"
            fill="url(#hawGrad3c)"
          />
        </g>
        <defs>
          <linearGradient
            id="hawGrad3a"
            x1="50.0271"
            y1="17.9865"
            x2="21.1968"
            y2="20.2569"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.057753" stopColor="#2EBCEB" />
            <stop offset="1" stopColor="#0000BC" />
          </linearGradient>
          <linearGradient
            id="hawGrad3b"
            x1="43.3117"
            y1="-8.75387"
            x2="-3.51939"
            y2="-5.06766"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.057753" stopColor="#2EBCEB" />
            <stop offset="1" stopColor="#0000BC" />
          </linearGradient>
          <linearGradient
            id="hawGrad3c"
            x1="33.1894"
            y1="2.91992"
            x2="5.95969"
            y2="5.06441"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.057753" stopColor="#2EBCEB" />
            <stop offset="1" stopColor="#0000BC" />
          </linearGradient>
          <clipPath id="hawClip3">
            <rect width="48" height="48" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    title: "Intake",
    description:
      "We review your templates, key user flows, and assistive technology targets.",
    bg: "linear-gradient(135deg, #e8f4fc, #ddeefa)",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M0 36C0 41.514 4.486 46 10 46H38C43.514 46 48 41.514 48 36V20H0V36ZM28 26H36C36.5304 26 37.0391 26.2107 37.4142 26.5858C37.7893 26.9609 38 27.4696 38 28C38 28.5304 37.7893 29.0391 37.4142 29.4142C37.0391 29.7893 36.5304 30 36 30H28C27.4696 30 26.9609 29.7893 26.5858 29.4142C26.2107 29.0391 26 28.5304 26 28C26 27.4696 26.2107 26.9609 26.5858 26.5858C26.9609 26.2107 27.4696 26 28 26ZM28 36H36C36.5304 36 37.0391 36.2107 37.4142 36.5858C37.7893 36.9609 38 37.4696 38 38C38 38.5304 37.7893 39.0391 37.4142 39.4142C37.0391 39.7893 36.5304 40 36 40H28C27.4696 40 26.9609 39.7893 26.5858 39.4142C26.2107 39.0391 26 38.5304 26 38C26 37.4696 26.2107 36.9609 26.5858 36.5858C26.9609 36.2107 27.4696 36 28 36ZM10.054 25.99C10.2344 25.7992 10.4506 25.6458 10.6902 25.5386C10.9299 25.4314 11.1884 25.3725 11.4508 25.3653C11.7133 25.358 11.9746 25.4026 12.2198 25.4964C12.4651 25.5902 12.6894 25.7314 12.88 25.912L14.91 27.832L18.586 24.156C18.961 23.781 19.4696 23.5703 20 23.5703C20.5304 23.5703 21.039 23.781 21.414 24.156C21.789 24.531 21.9997 25.0396 21.9997 25.57C21.9997 26.1004 21.789 26.609 21.414 26.984L17.45 30.948C16.7921 31.6098 15.9013 31.9876 14.9683 32.0007C14.0352 32.0138 13.1342 31.661 12.458 31.018L10.132 28.812C9.94133 28.6315 9.78811 28.4152 9.68109 28.1754C9.57407 27.9357 9.51536 27.6772 9.5083 27.4148C9.50124 27.1523 9.54598 26.891 9.63996 26.6459C9.73394 26.4007 9.87531 26.1765 10.056 25.986L10.054 25.99ZM10.054 35.99C10.2345 35.7993 10.4508 35.6461 10.6906 35.5391C10.9303 35.4321 11.1888 35.3734 11.4512 35.3663C11.7137 35.3592 11.975 35.404 12.2201 35.498C12.4653 35.5919 12.6895 35.7333 12.88 35.914L14.91 37.834L18.586 34.158C18.7717 33.9723 18.9921 33.825 19.2347 33.7245C19.4774 33.624 19.7374 33.5723 20 33.5723C20.2626 33.5723 20.5226 33.624 20.7653 33.7245C21.0079 33.825 21.2283 33.9723 21.414 34.158C21.5997 34.3437 21.747 34.5641 21.8475 34.8067C21.948 35.0494 21.9997 35.3094 21.9997 35.572C21.9997 35.8346 21.948 36.0946 21.8475 36.3372C21.747 36.5799 21.5997 36.8003 21.414 36.986L17.45 40.95C16.7921 41.6118 15.9013 41.9896 14.9683 42.0027C14.0352 42.0158 13.1342 41.663 12.458 41.02L10.132 38.814C9.94133 38.6335 9.78811 38.4172 9.68109 38.1774C9.57407 37.9377 9.51536 37.6792 9.5083 37.4168C9.50124 37.1543 9.54598 36.893 9.63996 36.6479C9.73394 36.4027 9.87531 36.1785 10.056 35.988L10.054 35.99ZM38 2H10C4.486 2 0 6.486 0 12V16H48V12C48 6.486 43.514 2 38 2ZM9 12C8.6059 11.9999 8.21569 11.9221 7.85164 11.7712C7.4876 11.6202 7.15684 11.3991 6.87827 11.1203C6.59969 10.8416 6.37875 10.5107 6.22806 10.1465C6.07736 9.78236 5.99987 9.3921 6 8.998C6.00013 8.6039 6.07788 8.21369 6.22882 7.84964C6.37976 7.4856 6.60092 7.15484 6.87968 6.87627C7.15844 6.59769 7.48934 6.37675 7.85349 6.22605C8.21764 6.07536 8.6079 5.99787 9.002 5.998C9.79791 5.99827 10.5611 6.3147 11.1237 6.87768C11.6863 7.44066 12.0023 8.20409 12.002 9C12.0017 9.79591 11.6853 10.5591 11.1223 11.1217C10.5593 11.6843 9.79591 12.0003 9 12ZM17 12C16.6059 11.9999 16.2157 11.9221 15.8516 11.7712C15.4876 11.6202 15.1568 11.3991 14.8783 11.1203C14.5997 10.8416 14.3787 10.5107 14.2281 10.1465C14.0774 9.78236 13.9999 9.3921 14 8.998C14.0001 8.6039 14.0779 8.21369 14.2288 7.84964C14.3798 7.4856 14.6009 7.15484 14.8797 6.87627C15.1584 6.59769 15.4893 6.37675 15.8535 6.22605C16.2176 6.07536 16.6079 5.99787 17.002 5.998C17.7979 5.99827 18.5611 6.3147 19.1237 6.87768C19.6863 7.44066 20.0023 8.20409 20.002 9C20.0017 9.79591 19.6853 10.5591 19.1223 11.1217C18.5593 11.6843 17.7959 12.0003 17 12Z"
          fill="url(#hawGrad4)"
        />
        <defs>
          <linearGradient
            id="hawGrad4"
            x1="51.9474"
            y1="-7.625"
            x2="-4.15544"
            y2="-2.80752"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.057753" stopColor="#2EBCEB" />
            <stop offset="1" stopColor="#0000BC" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Manual Expert Testing",
    description:
      "Certified accessibility engineers conduct in-depth WCAG 2.2 AA testing.",
    bg: "linear-gradient(135deg, #e8f4fc, #ddeefa)",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M4 14V38C4 43.514 8.486 48 14 48H34C39.514 48 44 43.514 44 38V14H4ZM24 36H16C15.4696 36 14.9609 35.7893 14.5858 35.4142C14.2107 35.0391 14 34.5304 14 34C14 33.4696 14.2107 32.9609 14.5858 32.5858C14.9609 32.2107 15.4696 32 16 32H24C24.5304 32 25.0391 32.2107 25.4142 32.5858C25.7893 32.9609 26 33.4696 26 34C26 34.5304 25.7893 35.0391 25.4142 35.4142C25.0391 35.7893 24.5304 36 24 36ZM32 26H16C15.4696 26 14.9609 25.7893 14.5858 25.4142C14.2107 25.0391 14 24.5304 14 24C14 23.4696 14.2107 22.9609 14.5858 22.5858C14.9609 22.2107 15.4696 22 16 22H32C32.5304 22 33.0391 22.2107 33.4142 22.5858C33.7893 22.9609 34 23.4696 34 24C34 24.5304 33.7893 25.0391 33.4142 25.4142C33.0391 25.7893 32.5304 26 32 26ZM44 10H4C4 4.486 8.486 0 14 0H34C39.514 0 44 4.486 44 10Z"
          fill="url(#hawGrad2)"
        />
        <defs>
          <linearGradient
            id="hawGrad2"
            x1="47.2895"
            y1="-10.5"
            x2="0.394182"
            y2="-7.42394"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.057753" stopColor="#2EBCEB" />
            <stop offset="1" stopColor="#0000BC" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Executive Summary",
    description:
      "Get a leadership-ready overview of risk, priority, and remediation steps.",
    bg: "linear-gradient(135deg, #e8f4fc, #ddeefa)",
  },
];

const features = [
  "WCAG 2.2 AA aligned",
  "Human-verified and legally defensible",
  "Engineering-ready output",
] as const;

const logos = [
  { src: "/images/logos/cisco.svg", alt: "Cisco", h: "h-[30px]" },
  { src: "/images/logos/hpe.svg", alt: "Hewlett Packard Enterprise", h: "h-[30px]" },
  { src: "/images/logos/jpmorgan.svg", alt: "J.P. Morgan", h: "h-[20px]" },
  { src: "/images/logos/salesforce.svg", alt: "Salesforce", h: "h-[30px]" },
] as const;

const HowAuditWorks = () => {
  return (
    <section
      className="relative bg-[#f8f9fb] pb-0"
      aria-labelledby="how-audit-works-title"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gray-200" />
      </div>

      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-in-up">
            <div className="mb-6 text-center">
              <h2
                id="how-audit-works-title"
                className="text-3xl font-bold leading-tight text-[#0b0f1a] md:text-4xl lg:text-[46px]"
              >
                How Our Accessibility{" "}
                <span className="text-[#0d7fe8]">Audit Works</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-700">
                We prioritize end-user flows and assistive technology targets.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-12">
            <ScrollReveal animation="fade-in-left" duration={800} stagger>
              <ol className="space-y-5">
                {steps.map((step, index) => (
                  <li
                    key={step.title}
                    className="flex gap-4 rounded-2xl border border-gray-100 p-5 shadow-sm sm:gap-5 sm:p-6"
                    style={{ background: step.bg }}
                  >
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center"
                      aria-hidden="true"
                    >
                      {step.icon}
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="mb-1 text-lg font-bold text-[#0b0f1a]">
                        <span className="sr-only">Step {index + 1}: </span>
                        <span aria-hidden="true">Step {index + 1}: </span>
                        {step.title}
                      </h3>
                      <p className="text-[14px] leading-relaxed text-gray-700 sm:text-[15px]">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </ScrollReveal>

            <ScrollReveal animation="fade-in-right" delay={300} duration={800}>
              <aside className="h-fit rounded-2xl border border-gray-200 bg-white p-8 md:p-10">
                <h3 className="mb-6 text-xl font-bold leading-tight text-[#0b0f1a] md:text-2xl">
                  Trusted by leading legal and compliance teams
                </h3>

                <ul className="mb-8 space-y-4">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="mt-0.5 shrink-0"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path
                          d="M5 13l4 4L19 7"
                          stroke="#00a37a"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-[15px] text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-gray-200 pt-6">
                  <p className="sr-only">Trusted by Cisco, Hewlett Packard Enterprise, J.P. Morgan, and Salesforce.</p>
                  <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5 sm:justify-between">
                    {logos.map((logo) => (
                      <Image
                        key={logo.alt}
                        src={logo.src}
                        alt={logo.alt}
                        width={120}
                        height={38}
                        className={`${logo.h} w-auto object-contain`}
                      />
                    ))}
                  </div>
                </div>
              </aside>
            </ScrollReveal>
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex min-h-[48px] items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0d7fe8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f8f9fb]"
              style={{
                background: "linear-gradient(135deg, #00d4aa, #0088cc)",
              }}
              aria-label="Book an expert accessibility audit"
            >
              Book Expert Audit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowAuditWorks;