"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const footerLinks = {
  pages: [
    { label: "Audit Services", href: "/audit" },
    { label: "Compliance Standards", href: "/compliance-standards" },
    { label: "Pricing", href: "/prices" },
    { label: "View Demo", href: "https://demo.getaccessiq.com", external: true },
  ],
  company: [
    { label: "About us", href: "/about" },
    { label: "Contact us", href: "/contact" },
    { label: "Support 24/5", href: "/support" },
    { label: "Careers", href: "/careers" },
  ],
  resources: [
    { label: "WCAG checklist", href: "/wcag-checklist" },
    { label: "Privacy policy", href: "/privacy-policy" },
    { label: "Terms of use", href: "/terms-of-use" },
    { label: "Accessibility Statement", href: "/accessibility-statement" },
  ],
};

const socialLinks = {
  youtube: "https://www.youtube.com/",
  facebook: "https://www.facebook.com/",
  instagram: "https://www.instagram.com/",
  linkedin: "https://www.linkedin.com/",
};

const Footer = () => {
  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #050913 0%, #060b15 45%, #070d18 100%)",
      }}
    >
      {/* Ambient glow left */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: "-120px",
          top: "40px",
          width: "640px",
          height: "520px",
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(0,180,216,0.22) 0%, rgba(0,136,204,0.12) 28%, rgba(0,136,204,0.04) 48%, transparent 72%)",
          filter: "blur(52px)",
        }}
      />

      {/* Ambient glow right */}
      <div
        className="absolute pointer-events-none"
        style={{
          right: "-160px",
          top: "80px",
          width: "640px",
          height: "520px",
          background:
            "radial-gradient(ellipse at 70% 50%, rgba(0,212,170,0.18) 0%, rgba(0,180,216,0.12) 24%, rgba(0,212,170,0.04) 46%, transparent 72%)",
          filter: "blur(58px)",
        }}
      />

      {/* Top divider */}
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(0,212,170,0.18), rgba(0,136,204,0.18), transparent)",
        }}
      />

      <div className="relative z-10 container mx-auto px-6 pt-16 pb-8">
        <ScrollReveal animation="fade-in" duration={800}>
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.8fr_0.8fr_0.9fr_1.2fr] gap-10 lg:gap-12 items-start">
            {/* LEFT BRAND COLUMN */}
            <div className="pr-0 lg:pr-4">
              <Link href="/" className="inline-flex items-center mb-8">
                <Image
                  src="/images/logos/accessiq-logo.png"
                  alt="AccessIQ"
                  width={300}
                  height={70}
                  className="h-[48px] lg:h-[58px] w-auto object-contain"
                />
              </Link>

              <div className="mb-2">
                <div className="relative inline-block rounded-[24px] border border-white/8 bg-white/[0.02] p-2 shadow-[0_18px_50px_rgba(0,0,0,0.28)]">
                  <Image
                    src="https://www.getaccessiq.com/_next/image?url=%2Fimages%2Flogos%2Flogo.jpg&w=1080&q=75"
                    alt="WCAG, ADA, Section 508 and EN 301 549 compliance badges"
                    width={540}
                    height={150}
                    className="h-auto w-[300px] md:w-[340px] rounded-[18px] object-contain"
                    unoptimized
                  />
                </div>
              </div>
            </div>

            {/* PAGES */}
            <div>
              <h4 className="text-white font-semibold text-[13px] tracking-[0.16em] uppercase mb-6">
                Pages
              </h4>
              <ul className="space-y-5">
                {footerLinks.pages.map((item) => (
                  <li key={item.label}>
                    {item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 text-[15px] hover:text-white transition-colors"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-gray-300 text-[15px] hover:text-white transition-colors"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* COMPANY */}
            <div>
              <h4 className="text-white font-semibold text-[13px] tracking-[0.16em] uppercase mb-6">
                Company
              </h4>
              <ul className="space-y-5">
                {footerLinks.company.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-gray-300 text-[15px] hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* RESOURCES */}
            <div>
              <h4 className="text-white font-semibold text-[13px] tracking-[0.16em] uppercase mb-6">
                Resources
              </h4>
              <ul className="space-y-5">
                {footerLinks.resources.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className={`text-[15px] transition-colors ${
                        item.label === "Accessibility Statement"
                          ? "text-[#36bfff] hover:text-white"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTACT */}
            <div className="min-w-[280px] lg:min-w-[300px] lg:pl-4">
              <h4 className="text-white font-semibold text-[13px] tracking-[0.16em] uppercase mb-6">
                Contact
              </h4>

              <ul className="space-y-5">
                <li className="flex items-center gap-4">
                  <div className="flex items-center justify-center flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M3 7.75C3 6.23122 4.23122 5 5.75 5H18.25C19.7688 5 21 6.23122 21 7.75V16.25C21 17.7688 19.7688 19 18.25 19H5.75C4.23122 19 3 17.7688 3 16.25V7.75Z"
                        stroke="#FDFDFD"
                        strokeWidth="1.8"
                      />
                      <path
                        d="M5 7L10.94 11.455C11.5628 11.9221 12.4372 11.9221 13.06 11.455L19 7"
                        stroke="#FDFDFD"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <a
                    href="mailto:support@getaccessiq.com"
                    className="text-gray-300 text-[15px] hover:text-white transition-colors"
                  >
                    support@getaccessiq.com
                  </a>
                </li>

                <li className="flex items-center gap-4">
                  <div className="flex items-center justify-center flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M17.6252 14.174L20.2682 15.75C20.8142 16.076 21.0961 16.71 20.9711 17.334C20.4601 19.893 17.8902 21.533 15.3732 20.842C9.4342 19.212 4.79509 14.587 3.15909 8.635C2.46709 6.117 4.10519 3.54498 6.66519 3.03298L6.68204 3.02999C7.30704 2.90499 7.94419 3.18799 8.26919 3.73699L9.83218 6.376C10.3882 7.315 10.112 8.52398 9.20303 9.12798L7.54214 10.233C8.71414 13.04 10.9541 15.289 13.7531 16.459L14.8681 14.794C15.4771 13.887 16.6872 13.615 17.6252 14.174Z"
                        fill="#FDFDFD"
                      />
                    </svg>
                  </div>
                  <a
                    href="tel:+18332322730"
                    className="text-gray-300 text-[15px] hover:text-white transition-colors"
                  >
                    (833) 232-2730
                  </a>
                </li>

                <li className="flex items-start gap-4">
                  <div className="flex items-center justify-center flex-shrink-0 mt-1">
                    <svg width="21" height="24" viewBox="0 0 19 22" fill="none">
                      <path
                        d="M9.50112 0C4.26209 0 0 4.26209 0 9.50112C0 15.071 5.1742 18.4891 8.59795 20.7504L9.19038 21.1439C9.28427 21.2065 9.39269 21.2378 9.49999 21.2378C9.6073 21.2378 9.71573 21.2065 9.80963 21.1439L10.402 20.7504C13.8258 18.4891 19 15.071 19 9.50112C19.0022 4.26209 14.7401 0 9.50112 0ZM9.50112 12.2956C7.95747 12.2956 6.70667 11.0448 6.70667 9.50112C6.70667 7.95746 7.95747 6.70667 9.50112 6.70667C11.0448 6.70667 12.2956 7.95746 12.2956 9.50112C12.2956 11.0448 11.0448 12.2956 9.50112 12.2956Z"
                        fill="#FDFDFD"
                      />
                    </svg>
                  </div>

                  <a
                    href="https://maps.google.com/?q=15257+Amberly+Dr+Ste+367+Tampa+FL+33647+USA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="max-w-[260px] text-gray-300 text-[15px] leading-[1.55] hover:text-white transition-colors"
                  >
                    Assure Digital Group LLC,
                    <br />
                    15257 Amberly Dr Ste 367
                    <br />
                    Tampa, FL 33647, USA
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </ScrollReveal>

        {/* Main divider */}
        <div
          className="h-px w-full mt-12 mb-6"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(0,212,170,0.32), rgba(0,136,204,0.32), transparent)",
            boxShadow: "0 0 18px rgba(0,180,216,0.2)",
          }}
        />

        {/* Bottom row */}
        <ScrollReveal animation="fade-in" delay={200}>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-5">
            {/* Social icons */}
            <div className="flex items-center gap-4">
              {/* YouTube */}
              <a
                href={socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/20 transition-all shadow-[0_10px_25px_rgba(0,0,0,0.18)]"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M22.54 6.42C22.29 5.48 21.56 4.75 20.62 4.5C18.93 4 12 4 12 4C12 4 5.07 4 3.38 4.45C2.44 4.7 1.71 5.43 1.46 6.37C1 8.06 1 12 1 12C1 12 1 15.94 1.46 17.58C1.71 18.52 2.44 19.25 3.38 19.5C5.07 19.95 12 19.95 12 19.95C12 19.95 18.93 19.95 20.62 19.5C21.56 19.25 22.29 18.52 22.54 17.58C23 15.94 23 12 23 12C23 12 23 8.06 22.54 6.42ZM9.8 15.02V8.98L15.55 12L9.8 15.02Z"
                    fill="#FDFDFD"
                  />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/20 transition-all shadow-[0_10px_25px_rgba(0,0,0,0.18)]"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M13.5 9H15.75L16 6H13.5C11.57 6 10.5 7.13 10.5 9.09V11H8V14H10.5V21H13.5V14H15.75L16 11H13.5V9Z"
                    fill="#FDFDFD"
                  />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/20 transition-all shadow-[0_10px_25px_rgba(0,0,0,0.18)]"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                    stroke="#FDFDFD"
                    strokeWidth="1.8"
                  />
                  <circle cx="12" cy="12" r="4.2" stroke="#FDFDFD" strokeWidth="1.8" />
                  <circle cx="17.2" cy="6.8" r="1.2" fill="#FDFDFD" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/20 transition-all shadow-[0_10px_25px_rgba(0,0,0,0.18)]"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6.94 8.5H3.56V19.5H6.94V8.5ZM5.25 3C4.17 3 3.5 3.72 3.5 4.66C3.5 5.58 4.15 6.31 5.21 6.31H5.23C6.33 6.31 7 5.58 7 4.66C6.98 3.72 6.33 3 5.25 3ZM20.5 13.02C20.5 9.63 18.69 8.05 16.28 8.05C14.34 8.05 13.47 9.12 12.99 9.86V8.5H9.61C9.65 9.4 9.61 19.5 9.61 19.5H12.99V13.36C12.99 13.03 13.01 12.7 13.11 12.46C13.37 11.8 13.96 11.11 14.96 11.11C16.27 11.11 16.8 12.12 16.8 13.6V19.5H20.18V13.02H20.5Z"
                    fill="#FDFDFD"
                  />
                </svg>
              </a>
            </div>

            {/* Copyright / trademark / accessibility */}
            <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-4 text-center text-[13px] text-gray-400">
              <span>© 2026 AccessIQ. All rights reserved.</span>

              <span className="hidden lg:inline text-white/20">·</span>

              <span>A product of Assure Digital Group LLC</span>

              <span className="hidden lg:inline text-white/20">·</span>

              <Link
                href="/accessibility-statement"
                className="inline-flex items-center gap-1.5 text-[#36bfff] hover:text-white transition-colors"
              >
                Accessibility Statement
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 17L17 7M17 7H8M17 7V16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;