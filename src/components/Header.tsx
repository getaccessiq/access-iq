"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Audit", href: "/audit" },
  { label: "Compliance", href: "/compliance" },
  { label: "Prices", href: "/prices" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [signInModalOpen, setSignInModalOpen] = useState(false);

  const [notifyEmail, setNotifyEmail] = useState("");
  const [notifyLoading, setNotifyLoading] = useState(false);
  const [notifySuccess, setNotifySuccess] = useState(false);
  const [notifyError, setNotifyError] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

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

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const handleNotify = async () => {
    setNotifyError("");
    setNotifySuccess(false);

    const email = notifyEmail.trim();

    if (!email) {
      setNotifyError("Please enter your email address.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setNotifyError("Please enter a valid email address.");
      return;
    }

    setNotifyLoading(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          notifyEmail: email,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setNotifyError(data?.error || "Failed to send request.");
        return;
      }

      setNotifySuccess(true);
      setNotifyEmail("");
    } catch (error) {
      setNotifyError("Something went wrong. Please try again.");
    } finally {
      setNotifyLoading(false);
    }
  };

  const navLinkClass = (active) =>
    `relative inline-flex items-center text-[13px] font-medium transition-colors duration-200 ${
      active ? "text-white" : "text-gray-300 hover:text-[#00d4aa]"
    }`;

  const mobileNavLinkClass = (active) =>
    `relative inline-flex w-fit items-center text-sm font-medium transition-colors duration-200 ${
      active ? "text-white" : "text-gray-300 hover:text-[#00d4aa]"
    }`;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out"
      style={{
        padding: scrolled ? "8px 0" : "12px 0",
      }}
    >
      <div
        className="absolute inset-0 transition-all duration-500 ease-out"
        style={{
          background: scrolled ? "rgba(10, 14, 26, 0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(255, 255, 255, 0.06)"
            : "1px solid transparent",
        }}
      />

      <div className="container mx-auto relative">
        <div
          className="relative flex items-center justify-between px-5 transition-all duration-500 ease-out"
          style={{
            height: scrolled ? "52px" : "56px",
            borderRadius: scrolled ? "12px" : "16px",
            background: scrolled ? "rgba(8, 12, 22, 0.9)" : "#0b1120",
            border: scrolled
              ? "1px solid rgba(255, 255, 255, 0.10)"
              : "1px solid rgba(255, 255, 255, 0.12)",
            boxShadow: scrolled
              ? "0 2px 20px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.06)"
              : "0 4px 40px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 212, 170, 0.08), 0 0 0 1px rgba(0, 212, 170, 0.18)",
          }}
        >
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/images/logos/accessiq-logo.png"
              alt="AccessIQ"
              width={140}
              height={36}
              className="h-[32px] w-auto object-contain"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={navLinkClass(active)}
                  aria-current={active ? "page" : undefined}
                >
                  <span>{item.label}</span>

                  <span
                    className={`absolute left-0 -bottom-2 h-[2px] rounded-full transition-all duration-300 ${
                      active ? "w-full opacity-100" : "w-0 opacity-0"
                    }`}
                    style={{
                      background:
                        "linear-gradient(90deg, #36bfff 0%, #0088cc 100%)",
                    }}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <div
              className="rounded-full p-[1px] transition-opacity hover:opacity-80"
              style={{
                background: "linear-gradient(135deg, #00d4aa, #0088cc)",
              }}
            >
              <button
                type="button"
                onClick={() => setSignInModalOpen(true)}
                className="rounded-full px-5 py-[7px] text-[13px] font-medium text-gray-200 transition-colors hover:text-white"
                style={{ background: "#0b1120" }}
              >
                Sign in
              </button>
            </div>

            <a
              href="https://accessiq.tech/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View the live demo of AccessIQ accessibility compliance platform"
              className="inline-block rounded-full px-5 py-2 text-[13px] font-semibold text-white transition-opacity hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #00d4aa 0%, #0088cc 100%)",
              }}
            >
              View Live Demo
            </a>
          </div>

          <button
            type="button"
            className="lg:hidden text-white"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={
              mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="relative mx-6 mt-2 rounded-xl px-5 py-4 backdrop-blur-xl lg:hidden"
          style={{
            background: "rgba(13, 17, 30, 0.95)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={mobileNavLinkClass(active)}
                  aria-current={active ? "page" : undefined}
                >
                  <span>{item.label}</span>

                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] rounded-full transition-all duration-300 ${
                      active ? "w-full opacity-100" : "w-0 opacity-0"
                    }`}
                    style={{
                      background:
                        "linear-gradient(90deg, #36bfff 0%, #0088cc 100%)",
                    }}
                  />
                </Link>
              );
            })}

            <div className="flex gap-3 pt-3 border-t border-white/10">
              <div
                className="rounded-full p-[1px]"
                style={{
                  background: "linear-gradient(135deg, #00d4aa, #0088cc)",
                }}
              >
                <button
                  type="button"
                  className="rounded-full px-5 py-2 text-sm font-medium text-gray-200"
                  style={{ background: "#0b1120" }}
                  onClick={() => {
                    setSignInModalOpen(true);
                    setMobileMenuOpen(false);
                  }}
                >
                  Sign in
                </button>
              </div>

              <a
                href="https://demo.getaccessiq.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full px-5 py-2.5 text-center text-sm font-semibold text-white"
                style={{
                  background: "linear-gradient(135deg, #00d4aa, #0088cc)",
                }}
              >
                View Live Demo
              </a>
            </div>
          </nav>
        </div>
      )}

      {signInModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          onClick={() => setSignInModalOpen(false)}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          <div
            className="relative w-full max-w-[580px] overflow-hidden rounded-2xl"
            style={{
              background:
                "linear-gradient(160deg, #0f3451 0%, #0c2d4a 25%, #0a2540 50%, #0d2844 75%, #091e38 100%)",
              boxShadow:
                "0 25px 80px rgba(0,0,0,0.6), 0 0 40px rgba(0,212,170,0.08)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="flex items-center justify-between px-8 py-5 md:px-10"
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
                type="button"
                onClick={() => setSignInModalOpen(false)}
                aria-label="Close sign-in modal"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] transition-colors hover:bg-white/10"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M18 6L6 18M6 6l12 12"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div className="relative overflow-hidden px-8 pt-8 pb-10 text-center md:px-10">
              <div
                className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 40%, transparent 70%)",
                  animation: "popupGlow 4s ease-in-out infinite",
                }}
              />

              <style jsx>{`
                @keyframes popupGlow {
                  0%,
                  100% {
                    opacity: 0.5;
                    transform: translate(-50%, -50%) scale(0.9);
                  }
                  50% {
                    opacity: 1;
                    transform: translate(-50%, -50%) scale(1.1);
                  }
                }
              `}</style>

              <h2 className="mb-4 text-2xl font-bold leading-tight text-white md:text-[28px]">
                Sign-In Access Coming Soon
              </h2>

              <p className="mb-8 text-[15px] leading-relaxed text-gray-400">
                Our sign-in portal is not currently available. Enter your email
                below to be notified as soon as our service goes live for user
                logins.
              </p>

              <input
                type="email"
                placeholder="Enter your email address"
                value={notifyEmail}
                onChange={(e) => setNotifyEmail(e.target.value)}
                className="mb-5 w-full rounded-xl border border-white/10 bg-[#0b1120] px-5 py-3.5 text-sm text-white placeholder:text-gray-600 focus:border-[#00d4aa]/40 focus:outline-none transition-colors"
              />

              <button
                type="button"
                onClick={handleNotify}
                disabled={notifyLoading}
                className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                style={{
                  background: "linear-gradient(135deg, #00d4aa, #0088cc)",
                }}
              >
                {notifyLoading ? "Sending..." : "Notify Me When Live"}
              </button>

              {notifySuccess && (
                <p className="mt-4 text-sm text-green-400">
                  Thank you! We will notify you when sign-in access goes live.
                </p>
              )}

              {notifyError && (
                <p className="mt-4 text-sm text-red-400">{notifyError}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
