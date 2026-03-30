"use client";

import React, { useId, useState } from "react";
import AnimatedGradient from "../AnimatedGradient";
import BookDemoButton from "@/components/BookDemoButton";
import ScrollReveal from "../ScrollReveal";
import { openAccessiQChat } from "@/components/premium-accessiq-chat";

type FormDataType = {
  firstName: string;
  email: string;
  businessName: string;
  service: string;
  message: string;
};

type FormErrors = {
  firstName?: string;
  email?: string;
  service?: string;
  message?: string;
};

type HelpCardIcon = "help" | "demo" | "chat";

type HelpCardItem = {
  title: string;
  description: string;
  cta: string;
  icon: HelpCardIcon;
  href?: string;
};

const initialFormData: FormDataType = {
  firstName: "",
  email: "",
  businessName: "",
  service: "",
  message: "",
};

const serviceOptions = [
  { value: "", label: "Select a service" },
  { value: "audit", label: "Accessibility Audit" },
  { value: "remediation", label: "Accessibility Remediation" },
  { value: "monitoring", label: "Monitoring & Ongoing Support" },
  { value: "consultation", label: "Compliance Consultation" },
  { value: "training", label: "Accessibility Training" },
  { value: "other", label: "Other" },
] as const;

const helpCards: HelpCardItem[] = [
  {
    title: "Help Center",
    description:
      "Browse remediation guides, step-by-step WCAG fixes, and practical examples.",
    cta: "Explore fixes",
    icon: "help",
    href: "/help-center",
  },
  {
    title: "Book a Demo",
    description:
      "Explore the Accessive dashboard and see how continuous monitoring keeps you ahead of issues.",
    cta: "Book expert session",
    icon: "demo",
  },
  {
    title: "Live Chat",
    description:
      "Get immediate guidance on your audit results, ADA risk, remediation priorities, and the best next steps for your team.",
    cta: "Start conversation",
    icon: "chat",
  },
];

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function CardIconShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cyan-400/25 bg-white/[0.03] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:h-12 sm:w-12">
      {children}
    </div>
  );
}

function InfoCard({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section
      aria-label={label}
      className="rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.02))] px-4 py-4 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:rounded-[24px] sm:px-5 sm:py-5"
    >
      <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
        {label}
      </h3>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function InfoRow({
  icon,
  children,
  alignStart = false,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
  alignStart?: boolean;
}) {
  return (
    <div className={`flex gap-3 sm:gap-4 ${alignStart ? "items-start" : "items-center"}`}>
      <CardIconShell>{icon}</CardIconShell>
      <div className={`min-w-0 flex-1 ${alignStart ? "pt-1" : ""}`}>{children}</div>
    </div>
  );
}

function FieldError({
  id,
  message,
}: {
  id: string;
  message?: string;
}) {
  if (!message) return null;

  return (
    <p id={id} className="mt-2 text-sm leading-6 text-red-300">
      {message}
    </p>
  );
}

function HelpCard({
  title,
  description,
  cta,
  icon,
  href,
}: {
  title: string;
  description: string;
  cta: string;
  icon: HelpCardIcon;
  href?: string;
}) {
  const isFeatured = icon === "chat";

  const renderIcon = () => {
    switch (icon) {
      case "help":
        return <HelpCenterIcon />;
      case "demo":
        return <DemoCalendarIcon />;
      case "chat":
        return <LiveChatIcon />;
      default:
        return <HelpCenterIcon />;
    }
  };

  const cardClassName = isFeatured
    ? "group relative flex h-full min-h-[370px] flex-col overflow-hidden rounded-[30px] border border-cyan-300/40 bg-[linear-gradient(180deg,rgba(16,44,82,0.95),rgba(8,27,56,0.95))] p-6 shadow-[0_0_0_1px_rgba(103,232,249,0.10),0_0_36px_rgba(34,211,238,0.12),0_24px_64px_rgba(0,0,0,0.30)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_0_1px_rgba(103,232,249,0.14),0_0_46px_rgba(34,211,238,0.18),0_28px_80px_rgba(0,0,0,0.34)] sm:p-7"
    : "group relative flex h-full min-h-[370px] flex-col overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(10,24,46,0.94),rgba(6,18,36,0.96))] p-6 shadow-[0_18px_46px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/20 hover:shadow-[0_24px_60px_rgba(0,0,0,0.28)] sm:p-7";

  const iconShellClass = isFeatured
    ? "relative flex h-16 w-16 items-center justify-center rounded-[20px] border border-cyan-200/30 bg-[linear-gradient(180deg,rgba(223,255,251,0.98),rgba(210,248,244,0.92))] text-[#0b8ed3] shadow-[0_14px_34px_rgba(0,0,0,0.18)]"
    : "relative flex h-16 w-16 items-center justify-center rounded-[20px] border border-cyan-200/20 bg-[linear-gradient(180deg,rgba(232,252,248,0.95),rgba(218,246,242,0.90))] text-[#0b8ed3] shadow-[0_10px_26px_rgba(0,0,0,0.14)]";

  const secondaryCtaClass =
    "mt-8 inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#00d4aa,#0088cc)] px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_12px_30px_rgba(0,136,204,0.20)] transition-all duration-200 hover:scale-[1.01] hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#081427] sm:w-fit";

  const featuredCtaClass =
    "mt-8 inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full border border-cyan-200/50 bg-[linear-gradient(135deg,rgba(24,211,223,0.18),rgba(0,136,204,0.28))] px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_10px_28px_rgba(34,211,238,0.14)] transition-all duration-200 hover:scale-[1.01] hover:border-cyan-200/70 hover:bg-[linear-gradient(135deg,rgba(24,211,223,0.24),rgba(0,136,204,0.34))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#081427] sm:w-fit";

  return (
    <article className={cardClassName}>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className={
            isFeatured
              ? "absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(103,232,249,0.16),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(0,212,170,0.10),transparent_28%)]"
              : "absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.08),transparent_22%),radial-gradient(circle_at_bottom_left,rgba(0,212,170,0.06),transparent_26%)]"
          }
        />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.24),transparent)]" />
      </div>

      <div className="relative flex h-full flex-col">
        <div className={iconShellClass}>{renderIcon()}</div>

        <h3 className="mt-8 max-w-[14ch] text-[30px] font-semibold leading-[1.05] tracking-[-0.04em] text-white">
          {title}
        </h3>

        <p className="mt-4 max-w-[30ch] flex-1 text-[17px] leading-8 text-slate-300">
          {description}
        </p>

        {icon === "demo" ? (
          <BookDemoButton className={secondaryCtaClass}>{cta}</BookDemoButton>
        ) : icon === "chat" ? (
          <button
            type="button"
            onClick={() => openAccessiQChat("question")}
            className={featuredCtaClass}
            aria-label="Start live chat with an accessibility specialist"
          >
            {cta}
            <ArrowRightIcon />
          </button>
        ) : href ? (
          <a href={href} className={secondaryCtaClass}>
            {cta}
          </a>
        ) : (
          <button type="button" className={secondaryCtaClass}>
            {cta}
          </button>
        )}
      </div>
    </article>
  );
}

const ContactPageContent = () => {
  const statusId = useId();
  const formDescriptionId = useId();

  const [formData, setFormData] = useState<FormDataType>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState<"success" | "error" | "">("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: undefined,
    }));

    if (status) {
      setStatus("");
      setStatusType("");
    }
  };

  const validateForm = () => {
    const nextErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      nextErrors.firstName = "First name is required.";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Email address is required.";
    } else if (!isValidEmail(formData.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!formData.service.trim()) {
      nextErrors.service = "Please select a service.";
    }

    if (!formData.message.trim()) {
      nextErrors.message = "Please share a few details about your request.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus("");
      setStatusType("");
      return;
    }

    setIsSubmitting(true);
    setStatus("");
    setStatusType("");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName.trim(),
          email: formData.email.trim(),
          businessName: formData.businessName.trim(),
          service: formData.service.trim(),
          message: formData.message.trim(),
        }),
      });

      const result = await response.json().catch(() => null);

      if (response.ok) {
        setStatus("Your inquiry has been sent successfully.");
        setStatusType("success");
        setFormData(initialFormData);
        setErrors({});
      } else {
        setStatus(result?.error || "Something went wrong. Please try again.");
        setStatusType("error");
      }
    } catch {
      setStatus("Failed to send message. Please try again.");
      setStatusType("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputBaseClass =
    "min-h-[52px] w-full rounded-2xl border bg-[#08111f]/95 px-4 py-3.5 text-sm text-white placeholder:text-slate-500 outline-none transition-all duration-200 focus:border-cyan-300/50 focus:ring-4 focus:ring-cyan-400/10";
  const inputNormalClass = "border-white/10";
  const inputErrorClass = "border-red-400/60 ring-4 ring-red-400/10";

  return (
    <main id="main-content" className="relative overflow-hidden bg-[#07101d]">
      <AnimatedGradient />

      <div className="relative z-10">
        <section
          aria-labelledby="contact-page-title"
          className="relative overflow-hidden pb-10 pt-[88px] sm:pb-12 sm:pt-[96px] md:pb-16 md:pt-[116px]"
        >
          <div className="absolute inset-0 -z-10" aria-hidden="true">
            <div className="absolute left-1/2 top-0 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-cyan-400/8 blur-3xl sm:h-[420px] sm:w-[420px]" />
            <div className="absolute left-[8%] top-[12%] h-[220px] w-[220px] rounded-full bg-teal-400/8 blur-3xl sm:h-[280px] sm:w-[280px]" />
            <div className="absolute right-[10%] top-[16%] h-[240px] w-[240px] rounded-full bg-sky-500/8 blur-3xl sm:h-[320px] sm:w-[320px]" />
          </div>

          <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
            <ScrollReveal animation="fade-in-up" delay={120}>
              <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-400/20 bg-white/[0.03] px-4 py-2 text-[12px] font-medium text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,0.05)] backdrop-blur-xl sm:text-[13px]">
                <span
                  className="h-2 w-2 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.95)]"
                  aria-hidden="true"
                />
                <span className="text-balance">Accessibility Compliance Consultation</span>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-in-up" delay={180}>
              <h1
                id="contact-page-title"
                className="mx-auto mt-6 max-w-5xl text-balance text-[34px] font-semibold tracking-[-0.04em] text-white sm:mt-7 sm:text-5xl lg:text-[64px] lg:leading-[1.02]"
              >
                Speak With a{" "}
                <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
                  WCAG & ADA
                </span>{" "}
                Compliance Specialist
              </h1>
            </ScrollReveal>

            <ScrollReveal animation="fade-in-up" delay={240}>
              <p className="mx-auto mt-5 max-w-3xl text-[16px] leading-7 text-slate-300 sm:mt-6 sm:text-lg sm:leading-8 lg:text-[20px]">
                Get expert guidance on accessibility compliance, ADA risk, and practical next
                steps to improve your website and reduce legal exposure.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-in-up" delay={290}>
              <p className="mt-7 text-center text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-300/75 sm:mt-8 sm:text-xs">
                Standards we support
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-in-up" delay={340}>
              <ul className="mt-4 flex flex-wrap items-center justify-center gap-3 sm:mt-5 sm:gap-4">
                {["WCAG 2.2 AA", "ADA", "Section 508", "EN 301 549"].map((badge) => (
                  <li
                    key={badge}
                    className="inline-flex min-h-[40px] items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-slate-200 backdrop-blur-xl transition duration-300 hover:border-cyan-300/25 hover:bg-white/[0.06] hover:text-white"
                  >
                    <GradientCheckIcon />
                    <span>{badge}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </section>

        <section
          aria-labelledby="contact-details-title"
          className="container mx-auto px-4 py-6 sm:px-6 sm:py-8 md:py-14 lg:px-8"
        >
          <ScrollReveal animation="fade-in-up" delay={200} duration={800}>
            <div
              className="rounded-[24px] p-[1px] shadow-[0_0_60px_rgba(0,212,170,0.08)] sm:rounded-[28px]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0,212,170,0.85), rgba(0,136,204,0.9), rgba(0,212,170,0.75))",
              }}
            >
              <div className="overflow-hidden rounded-[23px] bg-[linear-gradient(180deg,#111d2e_0%,#0c1622_100%)] sm:rounded-[27px]">
                <div className="grid lg:grid-cols-[38%_62%]">
                  <div className="border-b border-white/8 p-5 sm:p-7 md:p-9 lg:border-b-0 lg:border-r lg:border-white/8 xl:p-10">
                    <div className="max-w-md">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-300/75 sm:tracking-[0.28em]">
                        Contact details
                      </p>
                      <h2
                        id="contact-details-title"
                        className="mt-3 text-[24px] font-semibold tracking-[-0.03em] text-white sm:text-[28px] md:text-[30px]"
                      >
                        Contact AccessIQ
                      </h2>
                      <p className="mt-3 text-[15px] leading-7 text-slate-300">
                        Connect with our accessibility team to discuss audits, remediation,
                        compliance consultation, or ongoing monitoring.
                      </p>
                    </div>

                    <div className="mt-7 space-y-4 sm:mt-8">
                      <InfoCard label="Email">
                        <InfoRow icon={<EmailIcon />}>
                          <a
                            href="mailto:hello@accessive.co"
                            className="break-all text-[15px] leading-7 text-slate-200 underline-offset-4 hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c1622]"
                          >
                            hello@accessive.co
                          </a>
                        </InfoRow>
                      </InfoCard>

                      <InfoCard label="Call us">
                        <InfoRow icon={<PhoneIcon />}>
                          <a
                            href="tel:+18332322730"
                            aria-label="Call Accessive at (833) 232-2730"
                            className="group relative inline-flex w-full min-h-[72px] items-center rounded-[22px] px-4 py-3 text-white transition-all duration-300 hover:bg-white/[0.035] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c1622]"
                          >
                            <span
                              aria-hidden="true"
                              className="pointer-events-none absolute inset-x-3 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(103,232,249,0.22),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                            />

                            <span className="flex min-w-0 flex-col">
                              <span className="mb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-200/60">
                                Direct line
                              </span>

                              <span className="text-[22px] font-semibold leading-none tracking-[-0.025em] text-white/95 transition-colors duration-300 group-hover:text-white sm:text-[24px]">
                                (833) 232-2730
                              </span>

                              <span className="mt-2 text-[13px] leading-5 text-slate-300">
                                Mon–Fri · 9:00 AM – 5:00 PM ET
                              </span>
                            </span>

                            <span
                              aria-hidden="true"
                              className="ml-auto hidden shrink-0 items-center text-cyan-200/0 transition-all duration-300 group-hover:text-cyan-200/80 md:inline-flex"
                            >
                              <svg
                                viewBox="0 0 24 24"
                                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M7 17L17 7" />
                                <path d="M17 7H8" />
                                <path d="M17 7v9" />
                              </svg>
                            </span>
                          </a>
                        </InfoRow>
                      </InfoCard>

                      <InfoCard label="Service Hours">
                        <InfoRow icon={<ClockIcon />} alignStart>
                          <div className="min-w-0">
                            <dl aria-label="Service hours" className="space-y-3">
                              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-3">
                                <dt className="text-[15px] font-medium leading-6 text-white">
                                  Mon–Fri
                                </dt>
                                <dd
                                  className="text-[15px] leading-6 text-slate-200"
                                  aria-label="9:00 AM to 5:00 PM Eastern Time"
                                >
                                  9:00 AM – 5:00 PM ET
                                </dd>
                              </div>

                              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-3">
                                <dt className="text-[15px] font-medium leading-6 text-white">
                                  Sat
                                </dt>
                                <dd
                                  className="text-[15px] leading-6 text-slate-200"
                                  aria-label="9:00 AM to 2:00 PM Eastern Time"
                                >
                                  9:00 AM – 2:00 PM ET
                                </dd>
                              </div>
                            </dl>
                          </div>
                        </InfoRow>
                      </InfoCard>

                      <InfoCard label="Address">
                        <InfoRow icon={<LocationIcon />} alignStart>
                          <address className="not-italic text-[15px] leading-7 text-slate-200">
                            <div>Assure Digital Group LLC</div>
                            <div>15257 Amberly Dr Ste 367</div>
                            <div>Tampa, FL 33647, United States</div>
                          </address>
                        </InfoRow>
                      </InfoCard>
                    </div>
                  </div>

                  <div className="p-5 sm:p-7 md:p-9 xl:p-10">
                    <div className="max-w-2xl">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-300/75 sm:tracking-[0.28em]">
                        Consultation request
                      </p>
                      <h2 className="mt-3 text-[24px] font-semibold tracking-[-0.03em] text-white sm:text-[28px] md:text-[30px]">
                        Request Your Consultation
                      </h2>
                      <p className="mt-3 text-[15px] leading-7 text-slate-300">
                        Tell us about your accessibility needs and our team will review your
                        request and get back to you with the most relevant next steps.
                      </p>
                    </div>

                    <form
                      onSubmit={handleSubmit}
                      className="mt-7 space-y-5 sm:mt-8"
                      noValidate
                      aria-describedby={formDescriptionId}
                    >
                      <p id={formDescriptionId} className="sr-only">
                        Required fields are first name, email, service, and message.
                      </p>

                      <div className="grid gap-5 md:grid-cols-2">
                        <div>
                          <label
                            htmlFor="firstName"
                            className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 sm:tracking-[0.24em]"
                          >
                            First Name <span className="text-red-300">*</span>
                          </label>
                          <input
                            id="firstName"
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="Enter your first name"
                            autoComplete="given-name"
                            aria-invalid={errors.firstName ? "true" : "false"}
                            aria-describedby={errors.firstName ? "firstName-error" : undefined}
                            className={`${inputBaseClass} ${
                              errors.firstName ? inputErrorClass : inputNormalClass
                            }`}
                          />
                          <FieldError id="firstName-error" message={errors.firstName} />
                        </div>

                        <div>
                          <label
                            htmlFor="email"
                            className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 sm:tracking-[0.24em]"
                          >
                            Email <span className="text-red-300">*</span>
                          </label>
                          <input
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email address"
                            autoComplete="email"
                            inputMode="email"
                            aria-invalid={errors.email ? "true" : "false"}
                            aria-describedby={errors.email ? "email-error" : undefined}
                            className={`${inputBaseClass} ${
                              errors.email ? inputErrorClass : inputNormalClass
                            }`}
                          />
                          <FieldError id="email-error" message={errors.email} />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="businessName"
                          className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 sm:tracking-[0.24em]"
                        >
                          Business Name
                        </label>
                        <input
                          id="businessName"
                          type="text"
                          name="businessName"
                          value={formData.businessName}
                          onChange={handleChange}
                          placeholder="Your company name"
                          autoComplete="organization"
                          className={`${inputBaseClass} ${inputNormalClass}`}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="service"
                          className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 sm:tracking-[0.24em]"
                        >
                          What kind of service are you looking for?{" "}
                          <span className="text-red-300">*</span>
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          aria-invalid={errors.service ? "true" : "false"}
                          aria-describedby={errors.service ? "service-error" : undefined}
                          className={`${inputBaseClass} ${
                            errors.service ? inputErrorClass : inputNormalClass
                          } appearance-none pr-12`}
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%2394a3b8' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "right 16px center",
                          }}
                        >
                          {serviceOptions.map((option) => (
                            <option
                              key={option.value || "empty"}
                              value={option.value}
                              className="bg-[#0b1120]"
                            >
                              {option.label}
                            </option>
                          ))}
                        </select>
                        <FieldError id="service-error" message={errors.service} />
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 sm:tracking-[0.24em]"
                        >
                          Anything else you&apos;d like to share?{" "}
                          <span className="text-red-300">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your website, goals, accessibility issues, or compliance concerns."
                          rows={6}
                          aria-invalid={errors.message ? "true" : "false"}
                          aria-describedby={errors.message ? "message-error" : undefined}
                          className={`${inputBaseClass} ${
                            errors.message ? inputErrorClass : inputNormalClass
                          } min-h-[152px] resize-y`}
                        />
                        <FieldError id="message-error" message={errors.message} />
                      </div>

                      {status && (
                        <div
                          id={statusId}
                          role="status"
                          aria-live="polite"
                          className={`rounded-2xl border px-4 py-3 text-sm leading-6 ${
                            statusType === "success"
                              ? "border-emerald-400/30 bg-emerald-500/10 text-emerald-200"
                              : "border-red-400/30 bg-red-500/10 text-red-200"
                          }`}
                        >
                          {status}
                        </div>
                      )}

                      <div className="mt-2 border-t border-white/8 pt-6">
                        <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between xl:gap-8">
                          <div className="max-w-[760px]">
                            <p className="text-[15px] leading-7 text-slate-300 sm:leading-8">
                              Fields marked with <span className="text-red-300">*</span> are
                              required. Our team will respond within one business day with the most
                              relevant next steps.
                            </p>

                            <ul className="mt-5 space-y-3">
                              <li className="flex items-start gap-3 text-[15px] text-slate-300">
                                <span className="mt-0.5 shrink-0" aria-hidden="true">
                                  <GradientCheckIcon />
                                </span>
                                <span>No-obligation consultation</span>
                              </li>
                              <li className="flex items-start gap-3 text-[15px] text-slate-300">
                                <span className="mt-0.5 shrink-0" aria-hidden="true">
                                  <GradientCheckIcon />
                                </span>
                                <span>Reviewed by accessibility specialists</span>
                              </li>
                              <li className="flex items-start gap-3 text-[15px] text-slate-300">
                                <span className="mt-0.5 shrink-0" aria-hidden="true">
                                  <GradientCheckIcon />
                                </span>
                                <span>Response within one business day</span>
                              </li>
                            </ul>
                          </div>

                          <div className="w-full shrink-0 xl:w-auto xl:pt-1">
                            <button
                              type="submit"
                              disabled={isSubmitting}
                              aria-describedby={status ? statusId : undefined}
                              className="inline-flex min-h-[56px] w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-semibold text-white transition-all duration-200 hover:scale-[1.01] hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c1622] sm:min-w-[220px] sm:w-auto"
                              style={{
                                background: "linear-gradient(135deg, #00d4aa, #0088cc)",
                                boxShadow: "0 12px 30px rgba(0, 136, 204, 0.22)",
                              }}
                            >
                              {isSubmitting ? "Sending..." : "Submit Inquiry"}
                              {!isSubmitting && <ArrowRightIcon />}
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        <section className="container mx-auto px-4 pb-20 sm:px-6 md:pb-24 lg:px-8 lg:pb-32">
          <ScrollReveal animation="fade-in-up">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-300/75 sm:tracking-[0.28em]">
                Support options
              </p>
              <h2 className="mt-3 text-[26px] font-semibold tracking-[-0.03em] text-white sm:text-[28px] md:text-[40px]">
                Not sure how to fix your accessibility issues?
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-slate-300 md:text-base">
                Based on your audit results, here are your next steps.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-in-up" delay={200} stagger>
            <div className="mt-8 grid gap-5 sm:mt-10 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
              {helpCards.map((card) => (
                <HelpCard
                  key={card.title}
                  title={card.title}
                  description={card.description}
                  cta={card.cta}
                  icon={card.icon}
                  href={card.href}
                />
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-in-up" delay={260}>
            <p className="mt-10 text-center text-[15px] leading-7 text-slate-300 md:mt-12 md:text-[18px]">
              Fix critical accessibility issues before they become a legal risk.
            </p>
          </ScrollReveal>
        </section>
      </div>
    </main>
  );
};

export default ContactPageContent;

/* ---------------------------------- Icons --------------------------------- */

function GradientCheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="h-4 w-4 shrink-0"
      fill="none"
    >
      <defs>
        <linearGradient id="check-gradient" x1="0" y1="0" x2="20" y2="20">
          <stop offset="0%" stopColor="#00d4aa" />
          <stop offset="100%" stopColor="#0088cc" />
        </linearGradient>
      </defs>
      <path
        d="M4.5 10.5L8 14L15.5 6.5"
        stroke="url(#check-gradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M13 5l7 7-7 7" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 text-cyan-200"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 text-cyan-200"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.63 2.62a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.46-1.24a2 2 0 0 1 2.11-.45c.84.3 1.72.51 2.62.63A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 text-cyan-200"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 text-cyan-200"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 21s-7-4.35-7-11a7 7 0 1 1 14 0c0 6.65-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 text-cyan-200"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
    </svg>
  );
}

function HelpCenterIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M9.09 9a3 3 0 1 1 5.82 1c0 2-3 2-3 4" />
      <path d="M12 17h.01" />
    </svg>
  );
}

function DemoCalendarIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4" />
      <path d="M8 2v4" />
      <path d="M3 10h18" />
    </svg>
  );
}

function LiveChatIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
    </svg>
  );
}