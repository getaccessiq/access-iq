"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden" style={{ background: "linear-gradient(180deg, #060a14 0%, #070c16 50%, #080e18 100%)" }}>
      {/* Left side glowing gradient - animated */}
      <div
        className="footer-glow-left absolute pointer-events-none"
        style={{
          left: "-100px",
          top: "-50px",
          width: "700px",
          height: "120%",
          background: "radial-gradient(ellipse at 30% 50%, rgba(0,136,204,0.4) 0%, rgba(0,180,216,0.2) 20%, rgba(0,136,204,0.08) 40%, transparent 65%)",
          filter: "blur(50px)",
        }}
      />
      {/* Right side glowing gradient - animated */}
      <div
        className="footer-glow-right absolute pointer-events-none"
        style={{
          right: "-100px",
          top: "-50px",
          width: "700px",
          height: "120%",
          background: "radial-gradient(ellipse at 70% 50%, rgba(0,212,170,0.4) 0%, rgba(0,180,216,0.2) 20%, rgba(0,212,170,0.08) 40%, transparent 65%)",
          filter: "blur(50px)",
        }}
      />

      {/* Top gradient divider */}
      <div className="gradient-line" />

      <div className="relative z-10 mx-auto container px-6 pt-14 pb-8">
        {/* Top row: Logo on mobile stacks above, on desktop sits beside menu */}
        <ScrollReveal animation="fade-in" duration={800}>
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 mb-14">
            {/* Logo + vertical line */}
            <div className="flex items-start gap-8 lg:gap-12 flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logos/accessiq-logo.png"
                  alt="AccessIQ"
                  width={300}
                  height={70}
                  className="h-[48px] lg:h-[60px] w-auto object-contain"
                />
              </Link>
              {/* Vertical divider - hidden on mobile */}
              <div className="hidden lg:block w-px self-stretch" style={{ background: "linear-gradient(180deg, transparent, rgba(0,212,170,0.4), rgba(0,136,204,0.4), transparent)" }} />
            </div>

            {/* Horizontal divider - visible only on mobile */}
            <div className="lg:hidden h-px w-full" style={{ background: "linear-gradient(90deg, transparent, rgba(0,212,170,0.4), rgba(0,136,204,0.4), transparent)" }} />

            {/* Menu columns */}
            <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8">

            {/* PAGES */}
            <div>
              <h4 className="text-white font-semibold text-xs tracking-widest uppercase mb-5">Pages</h4>
              <ul className="space-y-3">
                {["Audit Services", "Compliance Standards", "Pricing", "View Demo"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-gray-300 text-sm hover:text-white transition-colors">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* COMPANY */}
            <div>
              <h4 className="text-white font-semibold text-xs tracking-widest uppercase mb-5">Company</h4>
              <ul className="space-y-3">
                {["About us", "Contact us", "Support 24/5"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-gray-300 text-sm hover:text-white transition-colors">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* RESOURCES */}
            <div>
              <h4 className="text-white font-semibold text-xs tracking-widest uppercase mb-5">Resources</h4>
              <ul className="space-y-3">
                {["WCAG checklist", "Privacy policy", "Terms of use"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-gray-300 text-sm hover:text-white transition-colors">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTACT */}
            <div className="md:col-span-1 md:min-w-[220px]">
              <h4 className="text-white font-semibold text-xs tracking-widest uppercase mb-5">Contact</h4>
              <ul className="space-y-4">
                {/* Email */}
                <li className="flex items-center gap-3">
                  <div className="flex items-center justify-center flex-shrink-0">
                    <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M14.67 1.0368C12.717 0.987732 10.783 0.987732 8.82999 1.0368L8.77182 1.03826C7.247 1.07654 6.02002 1.10735 5.0367 1.2786C4.0072 1.45789 3.17048 1.80177 2.46362 2.51132C1.75971 3.2179 1.41764 4.04259 1.24176 5.0554C1.07429 6.01977 1.04878 7.2168 1.01719 8.69963L1.01593 8.75843C0.994689 9.75473 0.994689 10.7452 1.01594 11.7416L1.01719 11.8003C1.04879 13.2832 1.07429 14.4802 1.24176 15.4446C1.41764 16.4574 1.75972 17.2821 2.46362 17.9886C3.17048 18.6982 4.0072 19.0421 5.0367 19.2214C6.02001 19.3926 7.24697 19.4234 8.77177 19.4617L8.82999 19.4632C10.783 19.5122 12.717 19.5122 14.67 19.4632L14.7282 19.4617C16.253 19.4234 17.48 19.3926 18.4633 19.2214C19.4928 19.0421 20.3295 18.6982 21.0364 17.9886C21.7403 17.2821 22.0824 16.4574 22.2582 15.4446C22.4257 14.4802 22.4512 13.2832 22.4828 11.8003L22.4841 11.7416C22.5053 10.7452 22.5053 9.75473 22.4841 8.75843L22.4828 8.69963C22.4512 7.21682 22.4257 6.01979 22.2582 5.05542C22.0824 4.04261 21.7403 3.21792 21.0364 2.51134C20.3295 1.80179 19.4928 1.45791 18.4633 1.27862C17.48 1.10736 16.253 1.07655 14.7282 1.03827L14.67 1.0368ZM7.13182 6.10452C6.77527 5.89371 6.31533 6.01186 6.10452 6.36841C5.89371 6.72497 6.01186 7.18491 6.36841 7.39572L9.31043 9.13513C10.1813 9.65003 10.9327 10.0001 11.7501 10.0001C12.5675 10.0001 13.319 9.65003 14.1898 9.13513L17.1318 7.39572C17.4884 7.18491 17.6065 6.72497 17.3957 6.36841C17.1849 6.01186 16.725 5.89371 16.3684 6.10452L13.4264 7.84395C12.582 8.34313 12.1331 8.50013 11.7501 8.50013C11.3671 8.50013 10.9182 8.34313 10.0738 7.84395L7.13182 6.10452Z" fill="#FDFDFD"/>
                    </svg>
                  </div>
                  <span className="text-gray-300 text-sm">support@getaccessiq.com</span>
                </li>
                {/* Phone */}
                <li className="flex items-center gap-3">
                  <div className="flex items-center justify-center flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.6252 14.174L20.2682 15.75C20.8142 16.076 21.0961 16.71 20.9711 17.334C20.4601 19.893 17.8902 21.533 15.3732 20.842C9.4342 19.212 4.79509 14.587 3.15909 8.635C2.46709 6.117 4.10519 3.54498 6.66519 3.03298L6.68204 3.02999C7.30704 2.90499 7.94419 3.18799 8.26919 3.73699L9.83218 6.376C10.3882 7.315 10.112 8.52398 9.20303 9.12798L7.54214 10.233C8.71414 13.04 10.9541 15.289 13.7531 16.459L14.8681 14.794C15.4771 13.887 16.6872 13.615 17.6252 14.174Z" fill="#FDFDFD"/>
                    </svg>
                  </div>
                  <span className="text-gray-300 text-sm">(833) 232-2730</span>
                </li>
                {/* Address */}
                <li className="flex items-start gap-3">
                  <div className="flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.50112 0C4.26209 0 0 4.26209 0 9.50112C0 15.071 5.1742 18.4891 8.59795 20.7504L9.19038 21.1439C9.28427 21.2065 9.39269 21.2378 9.49999 21.2378C9.6073 21.2378 9.71573 21.2065 9.80963 21.1439L10.402 20.7504C13.8258 18.4891 19 15.071 19 9.50112C19.0022 4.26209 14.7401 0 9.50112 0ZM9.50112 12.2956C7.95747 12.2956 6.70667 11.0448 6.70667 9.50112C6.70667 7.95746 7.95747 6.70667 9.50112 6.70667C11.0448 6.70667 12.2956 7.95746 12.2956 9.50112C12.2956 11.0448 11.0448 12.2956 9.50112 12.2956Z" fill="#FDFDFD"/>
                    </svg>
                  </div>
                  <span className="text-gray-300 text-sm leading-relaxed">15257 Amberly Dr Ste 367<br />Tampa, FL 33647, USA</span>
                </li>
              </ul>
            </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom divider */}
        <div className="gradient-line mb-6" />

        {/* Bottom copyright row */}
        <ScrollReveal animation="fade-in" delay={200}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6">
            <span className="text-gray-400 text-xs">&copy; 2024. GetAccessIQ.</span>
            <span className="text-gray-400 text-xs">All rights reserved.</span>
            <Link href="#" className="text-gray-400 text-xs hover:text-white transition-colors">Terms of Use.</Link>
            <Link href="#" className="text-gray-400 text-xs hover:text-white transition-colors">Privacy Policy.</Link>
            <Link href="#" className="text-gray-400 text-xs hover:text-white transition-colors">Accessibility</Link>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;
