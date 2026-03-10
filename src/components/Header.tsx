"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [signInModalOpen, setSignInModalOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (signInModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [signInModalOpen]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out"
      style={{
        padding: scrolled ? "8px 0" : "12px 0",
      }}
    >
      {/* Full-width backdrop that fades in on scroll */}
      <div
        className="absolute inset-0 transition-all duration-500 ease-out"
        style={{
          background: scrolled
            ? "rgba(10, 14, 26, 0.92)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(255, 255, 255, 0.06)"
            : "1px solid transparent",
        }}
      />

      <div className="container mx-auto relative">
        {/* Floating card nav */}
        <div
          className="flex items-center justify-between px-5 transition-all duration-500 ease-out relative"
          style={{
            height: scrolled ? "52px" : "56px",
            borderRadius: scrolled ? "12px" : "16px",
            background: scrolled
              ? "rgba(8, 12, 22, 0.9)"
              : "#0b1120",
            border: scrolled
              ? "1px solid rgba(255, 255, 255, 0.1)"
              : "1px solid rgba(255, 255, 255, 0.12)",
            boxShadow: scrolled
              ? "0 2px 20px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.06)"
              : "0 4px 40px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 212, 170, 0.08), 0 0 0 1px rgba(0, 212, 170, 0.18)",
          }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logos/accessiq-logo.png"
              alt="AccessIQ"
              width={140}
              height={36}
              className="h-[32px] w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation - center */}
          <nav className="hidden lg:flex items-center gap-7">
            <Link href="/" className="text-white text-[13px] font-medium hover:text-[#00d4aa] transition-colors">Home</Link>
            <Link href="/audit" className="text-gray-300 text-[13px] font-medium hover:text-[#00d4aa] transition-colors">Audit</Link>
            <Link href="/compliance" className="text-gray-300 text-[13px] font-medium hover:text-[#00d4aa] transition-colors">Compliance</Link>
            <Link href="/prices" className="text-gray-300 text-[13px] font-medium hover:text-[#00d4aa] transition-colors">Prices</Link>
            <Link href="/contact" className="text-gray-300 text-[13px] font-medium hover:text-[#00d4aa] transition-colors">Contact</Link>
          </nav>

          {/* Right side buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Sign in - gradient border button */}
            <div
              className="rounded-full p-[1px] transition-opacity hover:opacity-80"
              style={{
                background: "linear-gradient(135deg, #00d4aa, #0088cc)",
              }}
            >
              <button
                className="text-gray-200 text-[13px] font-medium px-5 py-[7px] rounded-full hover:text-white transition-colors"
                style={{ background: "#0b1120" }}
                onClick={() => setSignInModalOpen(true)}
              >
                Sign in
              </button>
            </div>
            <a
              href="https://accessiq.tech/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View the live demo of AccessIQ accessibility compliance platform"
              className="text-white text-[13px] font-semibold px-5 py-2 rounded-full transition-opacity hover:opacity-90 inline-block"
              style={{
                background: "linear-gradient(135deg, #00d4aa 0%, #0088cc 100%)",
              }}
            >
              View Live Demo
            </a>
          </div>

          {/* Mobile menu button */}
          <button
  className="lg:hidden text-white"
  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
  aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
  aria-expanded={mobileMenuOpen}
  aria-controls="mobile-menu"
>
  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
    {mobileMenuOpen ? (
      <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
    ) : (
      <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
    )}
  </svg>
</button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mx-6 mt-2 rounded-xl px-5 py-4 backdrop-blur-xl relative" style={{ background: "rgba(13, 17, 30, 0.95)", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
          <nav className="flex flex-col gap-4">
            <Link href="/" className="text-white text-sm font-medium">Home</Link>
            <Link href="/audit" className="text-gray-300 text-sm font-medium">Audit</Link>
            <Link href="/compliance" className="text-gray-300 text-sm font-medium">Compliance</Link>
            <Link href="/prices" className="text-gray-300 text-sm font-medium">Prices</Link>
            <Link href="/contact" className="text-gray-300 text-sm font-medium">Contact</Link>
            <div className="flex gap-3 pt-3 border-t border-white/10">
              <div className="rounded-full p-[1px]" style={{ background: "linear-gradient(135deg, #00d4aa, #0088cc)" }}>
                <button className="text-gray-200 text-sm font-medium px-5 py-2 rounded-full" style={{ background: "#0b1120" }} onClick={() => { setSignInModalOpen(true); setMobileMenuOpen(false); }}>Sign in</button>
              </div>
              <a href="https://demo.getaccessiq.com" target="_blank" rel="noopener noreferrer" className="text-white text-sm font-semibold px-5 py-2.5 rounded-full inline-block text-center" style={{ background: "linear-gradient(135deg, #00d4aa, #0088cc)" }}>View Live Demo</a>
            </div>
          </nav>
        </div>
      )}
      {/* Sign-In Coming Soon Modal */}
      {signInModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          onClick={() => setSignInModalOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal card */}
          <div
            className="relative w-full max-w-[580px] rounded-2xl overflow-hidden"
            style={{
              background: "linear-gradient(160deg, #0f3451 0%, #0c2d4a 25%, #0a2540 50%, #0d2844 75%, #091e38 100%)",
              boxShadow: "0 25px 80px rgba(0,0,0,0.6), 0 0 40px rgba(0,212,170,0.08)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
              {/* Top row: Logo + Close with slightly lighter header bg */}
              <div
                className="flex items-center justify-between px-8 md:px-10 py-5"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  borderBottom: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <Image
                  src="/images/logos/accessiq-logo.png"
                  alt="AccessIQ"
                  width={140}
                  height={36}
                  className="h-[30px] w-auto object-contain"
                />
                <button
                  onClick={() => setSignInModalOpen(false)}
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white/[0.06] border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M18 6L6 18M6 6l12 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>

              {/* Content with animated center glow */}
              <div className="relative text-center px-8 md:px-10 pt-8 pb-10 overflow-hidden">
                {/* Animated white light glow */}
                <div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full pointer-events-none"
                  style={{
                    background: "radial-gradient(circle, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 40%, transparent 70%)",
                    animation: "popupGlow 4s ease-in-out infinite",
                  }}
                />
                <style jsx>{`
                  @keyframes popupGlow {
                    0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(0.9); }
                    50% { opacity: 1; transform: translate(-50%, -50%) scale(1.1); }
                  }
                `}</style>
                <h2 className="text-white text-2xl md:text-[28px] font-bold mb-4 leading-tight">
                  Sign-In Access Coming Soon
                </h2>
                <p className="text-gray-400 text-[15px] leading-relaxed mb-8">
                  Our sign-in portal is not currently available. Enter your email below to be notified as soon as our service goes live for user logins.
                </p>

                {/* Email input */}
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full bg-[#0b1120] border border-white/10 rounded-xl px-5 py-3.5 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-[#00d4aa]/40 transition-colors mb-5"
                />

                {/* CTA button */}
                <button
                  className="inline-flex items-center gap-2 text-white text-sm font-semibold px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity"
                  style={{
                    background: "linear-gradient(135deg, #00d4aa, #0088cc)",
                  }}
                >
                  Notify Me When Live
                </button>
              </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
