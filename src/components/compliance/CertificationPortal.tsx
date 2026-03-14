"use client";

import React from "react";
import Image from "next/image";
import ScrollReveal from "../ScrollReveal";

const CertificationPortal = () => {
  return (
    <section className="relative bg-[#f8f9fb] pb-0">
      {/* Divider */}
      <div className="container mx-auto">
        <div className="h-px bg-gray-200" />
      </div>

      <div className="py-16 md:py-24">
        <div className="container mx-auto">
          {/* Section Header */}
          <ScrollReveal animation="fade-in-up">
          <div className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl lg:text-[46px] font-bold text-[#0b0f1a] leading-tight">
              Your Certification Portal &amp;{" "}
              <span className="gradient-text">Continuous Monitoring</span>
            </h2>
          </div>

          </ScrollReveal>

          {/* Feature badges row */}
          <ScrollReveal animation="fade-in-up" delay={100}>
          <div className="flex items-center justify-center gap-6 md:gap-10 flex-wrap mb-14">
            {[
              "Reduce Legal Risk",
              "Meet WCAG 2.2 AA",
              "Stay Compliant Automatically",
            ].map((badge) => (
              <div key={badge} className="flex items-center gap-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5 13l4 4L19 7"
                    stroke="#00d4aa"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-gray-500 text-sm font-medium">
                  {badge}
                </span>
              </div>
            ))}
          </div>
          </ScrollReveal>

          {/* Main content grid - image left, cards + button right */}
          <div className="grid lg:grid-cols-[50%_50%] gap-8 lg:gap-10 items-center">
            {/* Left - Dashboard image with border glow */}
            <ScrollReveal animation="fade-in-left" delay={200} duration={800}>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/images/certification-portal.png"
                  alt="Certification Portal Dashboard"
                  width={700}
                  height={580}
                  className="w-full h-auto"
                />
              </div>
            </div>
            </ScrollReveal>

            {/* Right - 2 feature cards side by side + button */}
            <ScrollReveal animation="fade-in-right" delay={400} duration={800}>
            <div>
              <div className="grid grid-cols-2 gap-5">
                {/* Audit ID Card */}
                <div className="bg-white rounded-2xl p-6 border border-[#d5f0ea] flex flex-col">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: "rgba(0,212,170,0.10)" }}
                  >
                    <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M3.75 6.66671C3.75 4.13541 5.80203 2.08337 8.33333 2.08337H28.3333C30.8647 2.08337 32.9167 4.13541 32.9167 6.66671V20.7594C31.3557 19.7515 29.4962 19.1667 27.5 19.1667C21.9772 19.1667 17.5 23.6439 17.5 29.1667C17.5 32.9317 19.5807 36.2109 22.655 37.9167H8.33333C5.80203 37.9167 3.75 35.8647 3.75 33.3334V6.66671ZM12.5 10.4167C11.8096 10.4167 11.25 10.9764 11.25 11.6667C11.25 12.3571 11.8096 12.9167 12.5 12.9167H24.1667C24.857 12.9167 25.4167 12.3571 25.4167 11.6667C25.4167 10.9764 24.857 10.4167 24.1667 10.4167H12.5ZM12.5 17.0834C11.8096 17.0834 11.25 17.643 11.25 18.3334C11.25 19.0237 11.8096 19.5834 12.5 19.5834H17.5C18.1903 19.5834 18.75 19.0237 18.75 18.3334C18.75 17.643 18.1903 17.0834 17.5 17.0834H12.5Z" fill="url(#cpGrad3a)" fillOpacity="0.8"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M27.5 25C25.1988 25 23.3333 26.8655 23.3333 29.1666C23.3333 31.4678 25.1988 33.3333 27.5 33.3333C28.651 33.3333 29.6905 32.8688 30.4463 32.113C31.2022 31.3571 31.6667 30.3176 31.6667 29.1666C31.6667 26.8655 29.8012 25 27.5 25ZM20 29.1666C20 25.0245 23.3578 21.6666 27.5 21.6666C31.6422 21.6666 35 25.0245 35 29.1666C35 30.6335 34.5778 32.0033 33.8497 33.1593L36.1785 35.4881C36.8293 36.139 36.8293 37.1943 36.1785 37.8451C35.5277 38.496 34.4723 38.496 33.8215 37.8451L31.4927 35.5163C30.3367 36.2445 28.9668 36.6666 27.5 36.6666C23.3578 36.6666 20 33.3088 20 29.1666Z" fill="url(#cpGrad3b)" fillOpacity="0.8"/>
                      <defs>
                        <linearGradient id="cpGrad3a" x1="34.8449" y1="20" x2="3.74997" y2="20.0087" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#3770FD"/>
                          <stop offset="0.5" stopColor="#2FB8DC"/>
                          <stop offset="1" stopColor="#00E19A"/>
                        </linearGradient>
                        <linearGradient id="cpGrad3b" x1="37.7684" y1="29.9999" x2="20" y2="30.006" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#3770FD"/>
                          <stop offset="0.5" stopColor="#2FB8DC"/>
                          <stop offset="1" stopColor="#00E19A"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  <h3 className="text-[#0b0f1a] text-lg font-bold mb-3">
                    Audit ID
                  </h3>
                  <p className="text-gray-500 text-[14px] leading-relaxed">
                    Instant audit overview with certificate, glance score and
                    issue lists.
                  </p>
                </div>

                {/* Real-Time Monitoring Card */}
                <div className="bg-white rounded-2xl p-6 border border-[#d5f0ea] flex flex-col">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: "rgba(0,136,204,0.10)" }}
                  >
                    <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M20.0007 2.08325C10.1056 2.08325 2.08398 10.1048 2.08398 19.9999C2.08398 29.8951 10.1056 37.9166 20.0007 37.9166C29.8958 37.9166 37.9173 29.8951 37.9173 19.9999C37.9173 10.1048 29.8958 2.08325 20.0007 2.08325ZM21.6673 11.6666C21.6673 10.7461 20.9212 9.99992 20.0007 9.99992C19.0802 9.99992 18.334 10.7461 18.334 11.6666V16.18C16.8623 16.8229 15.834 18.2913 15.834 19.9999C15.834 22.3011 17.6995 24.1666 20.0007 24.1666C20.538 24.1666 21.0517 24.0649 21.5233 23.8796L23.8222 26.1784C24.473 26.8293 25.5283 26.8293 26.1792 26.1784C26.83 25.5276 26.83 24.4723 26.1792 23.8214L23.8803 21.5226C24.0657 21.0509 24.1673 20.5373 24.1673 19.9999C24.1673 18.2913 23.139 16.8229 21.6673 16.18V11.6666Z" fill="url(#cpGrad2)" fillOpacity="0.8"/>
                      <defs>
                        <linearGradient id="cpGrad2" x1="40.2862" y1="19.9999" x2="2.08395" y2="20.013" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#3770FD"/>
                          <stop offset="0.5" stopColor="#2FB8DC"/>
                          <stop offset="1" stopColor="#00E19A"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  <h3 className="text-[#0b0f1a] text-lg font-bold mb-3">
                    Real-Time Monitoring
                  </h3>
                  <p className="text-gray-500 text-[14px] leading-relaxed">
                    Continuous scanning &amp; alerts when compliance issues found
                    or accessibility levels change.
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-8">
                <button
                  className="flex items-center gap-2 text-white text-sm font-semibold px-7 py-3 rounded-full hover:opacity-90 transition-opacity"
                  style={{
                    background: "linear-gradient(135deg, #00d4aa, #0088cc)",
                  }}
                >
                  View Projects
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationPortal;
