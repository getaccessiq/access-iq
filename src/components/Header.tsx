"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Audit", href: "/audit" },
  { label: "Compliance", href: "/compliance" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [signInModalOpen, setSignInModalOpen] = useState(false);

  const [notifyEmail, setNotifyEmail] = useState("");
  const [notifyLoading, setNotifyLoading] = useState(false);
  const [notifySuccess, setNotifySuccess] = useState(false);
  const [notifyError, setNotifyError] = useState("");

  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 18);

      if (mobileMenuOpen) {
        lastScrollY.current = currentScrollY;
        return;
      }

      if (currentScrollY <= 24) {
        setHeaderVisible(true);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 110) {
        setHeaderVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        setHeaderVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (signInModalOpen || mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [signInModalOpen, mobileMenuOpen]);

  const isActive = (href: string) => {
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
    } catch {
      setNotifyError("Something went wrong. Please try again.");
    } finally {
      setNotifyLoading(false);
    }
  };

  const navLinkClass = (active: boolean) =>
    `group relative inline-flex items-center justify-center text-[14px] font-medium tracking-[-0.01em] transition-all duration-300 ${
      active ? "text-white" : "text-slate-300 hover:text-white"
    }`;

  const mobileNavLinkClass = (active: boolean) =>
    `group relative inline-flex w-fit items-center text-[15px] font-medium transition-colors duration-300 ${
      active ? "text-white" : "text-slate-300 hover:text-white"
    }`;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300 ease-out ${
          headerVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="pointer-events-none absolute inset-0">
          <div
            className={`absolute inset-0 transition-all duration-500 ${
              scrolled
                ? "bg-[rgba(2,8,23,0.42)] backdrop-blur-2xl"
                : "bg-transparent"
            }`}
          />
          <div
            className={`absolute inset-x-0 top-0 h-px transition-opacity duration-500 ${
              scrolled ? "opacity-100" : "opacity-0"
            } bg-gradient-to-r from-transparent via-cyan-300/18 to-transparent`}
          />
          <div
            className={`absolute inset-x-0 bottom-0 h-px transition-opacity duration-500 ${
              scrolled ? "opacity-100" : "opacity-0"
            } bg-gradient-to-r from-transparent via-white/8 to-transparent`}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pt-3 pb-3 sm:px-6 lg:px-8">
          <div
            className={`relative overflow-hidden rounded-[24px] border transition-all duration-500 ${
              scrolled
                ? "h-[62px] border-white/[0.08] bg-[rgba(7,11,20,0.70)] shadow-[0_12px_42px_rgba(0,0,0,0.34)] backdrop-blur-2xl"
                : "h-[74px] border-white/[0.09] bg-[linear-gradient(180deg,rgba(7,11,20,0.94)_0%,rgba(4,8,18,0.92)_100%)] shadow-[0_18px_56px_rgba(0,0,0,0.40)]"
            }`}
          >
            <div className="pointer-events-none absolute inset-0 rounded-[24px]">
              <div
                className="absolute inset-x-0 top-0 h-[1.5px]"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(34,211,238,0.58) 50%, transparent 100%)",
                  boxShadow: "0 0 12px rgba(34,211,238,0.20)",
                }}
              />
              <div
                className="absolute inset-x-0 bottom-0 h-px"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.10) 50%, transparent 100%)",
                }}
              />
              <div className="absolute -left-28 top-0 h-full w-44 bg-cyan-400/8 blur-3xl" />
              <div className="absolute -right-24 top-0 h-full w-44 bg-sky-400/8 blur-3xl" />
            </div>

            <div className="relative flex h-full items-center justify-between px-5 sm:px-6 lg:px-7">
              <Link href="/" className="flex shrink-0 items-center">
                <Image
                  src="/images/logos/Logo_Accessiv.png"
                  alt="Accessive"
                  width={158}
                  height={40}
                  className="h-[32px] w-auto object-contain md:h-[34px]"
                  priority
                />
              </Link>

              <nav className="hidden lg:flex items-center gap-9">
                {navItems.map((item) => {
                  const active = isActive(item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={navLinkClass(active)}
                      aria-current={active ? "page" : undefined}
                    >
                      <span className="transition-transform duration-300 group-hover:-translate-y-[1px]">
                        {item.label}
                      </span>

                      <span
                        className={`absolute left-1/2 -bottom-[13px] h-[2px] -translate-x-1/2 rounded-full transition-all duration-300 ${
                          active
                            ? "w-8 opacity-100"
                            : "w-0 opacity-0 group-hover:w-6 group-hover:opacity-70"
                        }`}
                        style={{
                          background:
                            "linear-gradient(90deg, rgba(34,211,238,0.10) 0%, #38bdf8 45%, #22d3ee 100%)",
                          boxShadow: active
                            ? "0 0 10px rgba(56,189,248,0.32)"
                            : "none",
                        }}
                      />
                    </Link>
                  );
                })}
              </nav>

              <div className="hidden lg:flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setSignInModalOpen(true)}
                  className="inline-flex h-11 items-center justify-center rounded-full border border-cyan-400/45 bg-transparent px-6 text-[14px] font-semibold text-white transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-400/8 hover:shadow-[0_0_20px_rgba(34,211,238,0.10)]"
                >
                  Sign in
                </button>

                <a
                  href="https://accessiq.tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View the live demo of AccessIQ accessibility compliance platform"
                  className="inline-flex h-12 items-center justify-center rounded-full px-7 text-[14px] font-semibold text-slate-950 transition-all duration-300 hover:scale-[1.015] hover:shadow-[0_18px_34px_rgba(34,211,238,0.24)]"
                  style={{
                    background:
                      "linear-gradient(135deg, #2dd4bf 0%, #22d3ee 48%, #0ea5e9 100%)",
                    boxShadow: "0 12px 26px rgba(34,211,238,0.18)",
                  }}
                >
                  View Live Demo
                </a>
              </div>

              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition-colors hover:bg-white/[0.08] lg:hidden"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                aria-label={
                  mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
                }
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
              >
                <svg
                  width="22"
                  height="22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" d="M6 6l10 10M6 16L16 6" />
                  ) : (
                    <path strokeLinecap="round" d="M3 6h16M3 11h16M3 16h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div
              id="mobile-menu"
              className="mt-3 overflow-hidden rounded-[22px] border border-white/[0.08] bg-[rgba(7,11,20,0.90)] shadow-[0_20px_56px_rgba(0,0,0,0.44)] backdrop-blur-2xl lg:hidden"
            >
              <div
                className="h-px"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(34,211,238,0.40) 50%, transparent 100%)",
                }}
              />

              <nav className="flex flex-col gap-5 px-5 py-5">
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
                            "linear-gradient(90deg, #38bdf8 0%, #22d3ee 100%)",
                        }}
                      />
                    </Link>
                  );
                })}

                <div className="mt-1 grid grid-cols-2 gap-3 border-t border-white/10 pt-4">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-full border border-cyan-400/40 bg-transparent px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-cyan-400/10"
                    onClick={() => {
                      setSignInModalOpen(true);
                      setMobileMenuOpen(false);
                    }}
                  >
                    Sign in
                  </button>

                  <a
                    href="https://demo.getaccessiq.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full px-4 py-3 text-center text-sm font-semibold text-slate-950"
                    style={{
                      background:
                        "linear-gradient(135deg, #2dd4bf 0%, #22d3ee 48%, #0ea5e9 100%)",
                    }}
                  >
                    Live Demo
                  </a>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {signInModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          onClick={() => setSignInModalOpen(false)}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

          <div
            className="relative w-full max-w-[580px] overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(160deg,#0d2942_0%,#0a2339_32%,#081c30_64%,#061524_100%)] shadow-[0_30px_90px_rgba(0,0,0,0.62)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-1/2 top-0 h-px w-[72%] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />
              <div className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
            </div>

            <div className="relative flex items-center justify-between border-b border-white/8 px-7 py-5 md:px-8">
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
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] transition-colors hover:bg-white/[0.10]"
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

            <div className="relative px-7 pb-8 pt-7 text-center md:px-8 md:pb-9">
              <div className="mx-auto inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Coming soon
              </div>

              <h2 className="mt-4 text-2xl font-semibold leading-tight text-white md:text-[30px]">
                Sign-in access is launching soon
              </h2>

              <p className="mx-auto mt-4 max-w-md text-[15px] leading-7 text-slate-300">
                Enter your email and we’ll let you know as soon as the AccessIQ
                sign-in portal is available.
              </p>

              <div className="mt-7">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={notifyEmail}
                  onChange={(e) => setNotifyEmail(e.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-[#09111f] px-5 py-4 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-cyan-400/40"
                />
              </div>

              <button
                type="button"
                onClick={handleNotify}
                disabled={notifyLoading}
                className="mt-5 inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60"
                style={{
                  background:
                    "linear-gradient(135deg, #2dd4bf 0%, #22d3ee 48%, #0ea5e9 100%)",
                  boxShadow: "0 14px 30px rgba(34,211,238,0.22)",
                }}
              >
                {notifyLoading ? "Sending..." : "Notify me when live"}
              </button>

              {notifySuccess && (
                <p className="mt-4 text-sm text-emerald-400">
                  Thank you! We’ll notify you when sign-in goes live.
                </p>
              )}

              {notifyError && (
                <p className="mt-4 text-sm text-red-400">{notifyError}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;