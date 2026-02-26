import React from "react";
import Link from "next/link";
import Image from "next/image";

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

      <div className="relative z-10 mx-auto container pt-14 pb-8">
        <div className="flex gap-8 lg:gap-12 mb-14">
          {/* Logo + vertical line */}
          <div className="flex items-start gap-8 lg:gap-12 flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo-dark.png"
                alt="AccessIQ"
                width={300}
                height={70}
                className="h-[60px] w-auto object-contain"
              />
            </Link>
            {/* Vertical divider */}
            <div className="w-px self-stretch" style={{ background: "linear-gradient(180deg, transparent, rgba(0,212,170,0.4), rgba(0,136,204,0.4), transparent)" }} />
          </div>

          {/* Menu columns */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8">

          {/* PAGES */}
          <div>
            <h4 className="text-white font-semibold text-xs tracking-widest uppercase mb-5">Pages</h4>
            <ul className="space-y-3">
              {["Audit Services", "Compliance Standards", "Pricing", "View Demo"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-500 text-sm hover:text-gray-300 transition-colors">{item}</Link>
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
                  <Link href="#" className="text-gray-500 text-sm hover:text-gray-300 transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h4 className="text-white font-semibold text-xs tracking-widest uppercase mb-5">Resources</h4>
            <ul className="space-y-3">
              {["Wcag checklist", "Privacy policy", "Terms of use"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-500 text-sm hover:text-gray-300 transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-white font-semibold text-xs tracking-widest uppercase mb-5">Contact</h4>
            <ul className="space-y-4">
              {/* Email */}
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="4" width="20" height="16" rx="3" stroke="#0088cc" strokeWidth="1.5" />
                    <path d="M2 7l10 7 10-7" stroke="#0088cc" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="text-gray-400 text-sm">info@getaccessiqcom</span>
              </li>
              {/* Phone */}
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="#00d4aa" strokeWidth="1.5" />
                  </svg>
                </div>
                <span className="text-gray-400 text-sm">+1 833-232-2730</span>
              </li>
              {/* Address */}
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="#00d4aa" strokeWidth="1.5" />
                    <circle cx="12" cy="10" r="3" stroke="#00d4aa" strokeWidth="1.5" />
                  </svg>
                </div>
                <span className="text-gray-400 text-sm leading-relaxed">15257 Amberly Dr Ste 367<br />Tampa, FL 33647</span>
              </li>
            </ul>
          </div>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="gradient-line mb-6" />

        {/* Bottom copyright row */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6">
          <span className="text-gray-600 text-xs">&copy; 2024. GetAccessIQ.</span>
          <span className="text-gray-600 text-xs">All rights reserved.</span>
          <Link href="#" className="text-gray-600 text-xs hover:text-gray-400 transition-colors">Terms of Use.</Link>
          <Link href="#" className="text-gray-600 text-xs hover:text-gray-400 transition-colors">Privacy Policy.</Link>
          <Link href="#" className="text-gray-600 text-xs hover:text-gray-400 transition-colors">Accessibility</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
