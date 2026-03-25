"use client";

import { useState } from "react";

export default function CertificationPortalLogin() {
  const [error, setError] = useState("");
  const [certificationId, setCertificationId] = useState("");

  const highlights = [
    "Verified certificate records",
    "Legal support documentation",
    "Restricted portal access",
  ];

  const formatCertificationId = (value: string) => {
    const cleaned = value.toUpperCase().replace(/[^A-Z0-9]/g, "");
    let result = "";

    if (cleaned.startsWith("AIQ")) {
      result = "AIQ";
      const rest = cleaned.slice(3);

      if (rest.length > 0) {
        result += "-" + rest.slice(0, 4);
      }

      if (rest.length > 4) {
        result += "-" + rest.slice(4, 10);
      }
    } else {
      const aiqPrefix = "AIQ";
      const partialPrefix = cleaned.slice(0, 3);

      result = partialPrefix;
      if (partialPrefix.length === 3 && partialPrefix === aiqPrefix) {
        result = "AIQ";
      }
    }

    return result.slice(0, 15);
  };

  const isValidCertificationId = (value: string) => {
    return /^AIQ-\d{4}-\d{6}$/.test(value);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatCertificationId(e.target.value);
    setCertificationId(formattedValue);

    if (error) {
      setError("");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isValidCertificationId(certificationId)) {
      setError(
        "Please enter a valid Certification ID"
      );
      return;
    }

    setError("Invalid login. Please check your Certification ID and try again.");
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#031224] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(35,212,255,0.18),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(0,175,255,0.14),_transparent_25%),radial-gradient(circle_at_center,_rgba(0,214,201,0.08),_transparent_35%)]" />
      <div className="absolute left-[-8%] top-[10%] h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-[-8%] right-[5%] h-72 w-72 rounded-full bg-teal-400/10 blur-3xl" />
      <div className="absolute inset-0 opacity-[0.1] [background-image:radial-gradient(rgba(255,255,255,0.85)_0.7px,transparent_0.7px)] [background-size:28px_28px]" />

      <div className="relative mx-auto flex max-w-[1380px] flex-col gap-10 px-6 py-8 lg:min-h-screen lg:flex-row lg:items-center lg:justify-between lg:px-10 xl:px-14">
        <section className="w-full max-w-[720px]">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-white/5 px-4 py-2 text-sm text-cyan-200 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,0.95)]" />
            AccessIQ Certification Portal
          </div>

          <h1 className="max-w-4xl text-4xl font-semibold leading-[0.98] tracking-tight text-white sm:text-5xl lg:text-[68px]">
            Welcome to the{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-teal-300 bg-clip-text text-transparent">
              Certification Portal
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-[21px]">
            Access verified certification records and legal support documents
            through a secure, restricted portal experience.
          </p>

          <div className="mt-6 h-px w-full max-w-xl bg-gradient-to-r from-cyan-400/70 via-cyan-200/20 to-transparent" />

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm font-medium text-slate-200 backdrop-blur-xl transition duration-300 hover:border-cyan-300/25 hover:bg-white/[0.06]"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.9)]" />
                  <span>{item}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 max-w-[560px] rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/25 bg-gradient-to-br from-white/10 to-cyan-400/10 text-cyan-200 shadow-[0_0_25px_rgba(34,211,238,0.12)]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M12 3l7 3v5c0 4.5-2.9 8.2-7 10-4.1-1.8-7-5.5-7-10V6l7-3z" />
                  <path d="m9.2 12.2 1.9 1.9 3.9-4.4" />
                </svg>
              </div>

              <div>
                <p className="text-lg font-semibold text-white">
                  Secure client-only certificate access
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  This portal is designed for verified AccessIQ clients who need
                  access to certification details, legal support documentation,
                  and protected audit-related records.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative w-full max-w-[420px]">
          <div className="absolute inset-0 rounded-[32px] bg-cyan-400/16 blur-3xl" />

          <div className="relative overflow-hidden rounded-[28px] border border-cyan-300/40 bg-[linear-gradient(180deg,rgba(11,35,61,0.96),rgba(6,20,40,0.98))] p-[1px] shadow-[0_0_38px_rgba(34,211,238,0.16)]">
            <div className="rounded-[27px] border border-white/10 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_30%),linear-gradient(180deg,rgba(17,44,74,0.95),rgba(6,18,37,0.99))] p-4 sm:p-5 backdrop-blur-2xl">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-[18px] border border-cyan-300/30 bg-gradient-to-br from-teal-300/25 via-cyan-300/10 to-blue-500/15 shadow-[0_0_28px_rgba(34,211,238,0.14)]">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 p-2 backdrop-blur-md">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 text-cyan-200"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M12 3l7 3v5c0 4.5-2.9 8.2-7 10-4.1-1.8-7-5.5-7-10V6l7-3z" />
                    <path d="m9.2 12.2 1.9 1.9 3.9-4.4" />
                  </svg>
                </div>
              </div>

              <div className="text-center">
                <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-cyan-200/80 sm:text-xs">
                  Verified portal access
                </p>

                <h2 className="mt-2 text-2xl font-semibold leading-tight text-white sm:text-3xl">
                  Certificate access
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Available only for clients with an active{" "}
                  <span className="text-cyan-300">Legal Support Letter</span>.
                </p>
              </div>

              <div className="mt-4 rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.05] p-3.5 text-sm text-slate-300">
                <p className="font-medium text-white">Access requirement</p>
                <p className="mt-1 leading-6 text-slate-400">
                  Portal access is activated automatically after purchasing the
                  Legal Support Letter add-on.
                </p>
              </div>

              <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
                <div
                  className={`rounded-2xl border px-4 py-3 backdrop-blur-md transition ${
                    error
                      ? "border-red-400/50 bg-red-500/10"
                      : "border-white/15 bg-white/[0.05] focus-within:border-cyan-300/55 focus-within:shadow-[0_0_0_3px_rgba(34,211,238,0.08)]"
                  }`}
                >
                  <label
                    htmlFor="certificationId"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Certification ID
                  </label>

                  <div className="flex items-center gap-3">
                    <svg
                      viewBox="0 0 24 24"
                      className={`h-5 w-5 ${
                        error ? "text-red-300" : "text-slate-400"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path d="M8 7h8" />
                      <path d="M8 12h8" />
                      <path d="M8 17h5" />
                      <rect x="4" y="4" width="16" height="16" rx="2" />
                    </svg>

                    <input
                      id="certificationId"
                      type="text"
                      inputMode="text"
                      autoComplete="off"
                      placeholder="e.g. AIQ-2026-004812"
                      value={certificationId}
                      onChange={handleInputChange}
                      maxLength={15}
                      className="w-full bg-transparent text-white uppercase placeholder:text-slate-500 focus:outline-none"
                    />
                  </div>
                </div>

                {error && (
                  <div className="rounded-2xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full rounded-2xl border border-cyan-200/20 bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 px-5 py-3.5 text-base font-semibold text-white shadow-[0_14px_35px_rgba(0,163,255,0.30)] transition duration-300 hover:scale-[1.01] hover:shadow-[0_18px_45px_rgba(0,163,255,0.40)]"
                >
                  Access Portal
                </button>
              </form>

              <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.04] p-3.5">
                <p className="font-medium text-white">No portal access yet?</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Portal access is included with the{" "}
                  <span className="text-cyan-300">Legal Support Letter</span>.
                </p>

                <a
                  href="/pricing"
                  className="mt-3 inline-flex items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.06] px-4 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-200/40 hover:bg-cyan-300/[0.10] hover:text-white"
                >
                  Get Legal Support Letter
                </a>
              </div>

              <p className="mt-4 text-center text-sm leading-6 text-slate-400">
                Need help locating your Certification ID?{" "}
                <a
                  href="/contact"
                  className="font-medium text-cyan-300 transition hover:text-white"
                >
                  Contact Support
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}