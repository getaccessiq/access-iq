"use client";

import React, { useState } from "react";
import AnimatedGradient from "../AnimatedGradient";
import BookDemoButton from "@/components/BookDemoButton";
import ScrollReveal from "../ScrollReveal";

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
  { value: "audit", label: "Accessibility Audit (ADA / WCAG)" },
  { value: "scan", label: "Quick Accessibility Scan" },
  { value: "remediation", label: "Accessibility Remediation" },
  { value: "compliance", label: "ADA / WCAG Compliance Consultation" },
  { value: "monitoring", label: "Continuous Accessibility Monitoring" },
  { value: "training", label: "Accessibility Training" },
  { value: "enterprise", label: "Enterprise Accessibility Program" },
  { value: "not-sure", label: "Not sure – need guidance" },
];

const helpCards: HelpCardItem[] = [
  {
    title: "Explore Our Help Center",
    description: "Browse our knowledge base, accessibility guides, and compliance resources.",
    cta: "Visit Help Center",
    icon: "help",
    href: "/help-center",
  },
  {
    title: "Schedule a Personalized Demo",
    description: "See how AccessIQ helps organizations achieve WCAG and ADA compliance.",
    cta: "Book Your Demo",
    icon: "demo",
  },
  {
    title: "Accessibility Support",
    description: "Get answers from our compliance experts and connect with a specialist.",
    cta: "Start Live Chat",
    icon: "chat",
  },
];

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function GradientCheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="gCheck" x1="18" y1="10" x2="2" y2="10" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3770FD" />
          <stop offset="0.5" stopColor="#2FB8DC" />
          <stop offset="1" stopColor="#00E19A" />
        </linearGradient>
      </defs>
      <circle cx="10" cy="10" r="8.5" fill="url(#gCheck)" fillOpacity="0.14" />
      <path
        d="M6 10.3L8.6 12.9L14 7.5"
        stroke="url(#gCheck)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12H19" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      <path
        d="M13 6L19 12L13 18"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="mailGrad" x1="20" y1="12" x2="4" y2="12" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3770FD" />
          <stop offset="0.5" stopColor="#2FB8DC" />
          <stop offset="1" stopColor="#00E19A" />
        </linearGradient>
      </defs>
      <path
        d="M4 7.5C4 6.67 4.67 6 5.5 6H18.5C19.33 6 20 6.67 20 7.5V16.5C20 17.33 19.33 18 18.5 18H5.5C4.67 18 4 17.33 4 16.5V7.5Z"
        stroke="url(#mailGrad)"
        strokeWidth="1.8"
      />
      <path
        d="M5 7L10.94 11.46C11.57 11.93 12.43 11.93 13.06 11.46L19 7"
        stroke="url(#mailGrad)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="phoneGrad" x1="20" y1="12" x2="4" y2="12" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3770FD" />
          <stop offset="0.5" stopColor="#2FB8DC" />
          <stop offset="1" stopColor="#00E19A" />
        </linearGradient>
      </defs>
      <path
        d="M15.95 14.55L13.9 16.6C10.95 15.1 8.9 13.05 7.4 10.1L9.45 8.05C9.75 7.75 9.85 7.31 9.72 6.91L8.82 4.2C8.65 3.69 8.17 3.34 7.63 3.34H4.5C3.84 3.34 3.3 3.88 3.34 4.54C3.64 9.37 5.7 13.99 9.17 17.46C12.64 20.93 17.26 22.99 22.09 23.29C22.75 23.33 23.29 22.79 23.29 22.13V19C23.29 18.46 22.94 17.98 22.43 17.81L19.72 16.91C19.32 16.78 18.88 16.88 18.58 17.18L16.53 19.23"
        transform="scale(.78) translate(1.6 1)"
        stroke="url(#phoneGrad)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="locGrad" x1="18" y1="12.75" x2="6" y2="12.75" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3770FD" />
          <stop offset="0.5" stopColor="#2FB8DC" />
          <stop offset="1" stopColor="#00E19A" />
        </linearGradient>
      </defs>
      <path
        d="M12 21C12 21 18 15.6 18 10.5C18 7.19 15.31 4.5 12 4.5C8.69 4.5 6 7.19 6 10.5C6 15.6 12 21 12 21Z"
        stroke="url(#locGrad)"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="10.5" r="2.2" stroke="url(#locGrad)" strokeWidth="1.8" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="clockGrad" x1="20.25" y1="12" x2="3.75" y2="12" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3770FD" />
          <stop offset="0.5" stopColor="#2FB8DC" />
          <stop offset="1" stopColor="#00E19A" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="8.25" stroke="url(#clockGrad)" strokeWidth="1.8" />
      <path d="M12 7.8V12L15.2 13.9" stroke="url(#clockGrad)" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="chatGrad" x1="19.25" y1="12.5" x2="4.75" y2="12.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3770FD" />
          <stop offset="0.5" stopColor="#2FB8DC" />
          <stop offset="1" stopColor="#00E19A" />
        </linearGradient>
      </defs>
      <path
        d="M7 17.25L4.75 19V7.75C4.75 6.78 5.53 6 6.5 6H17.5C18.47 6 19.25 6.78 19.25 7.75V15.25C19.25 16.22 18.47 17 17.5 17H7Z"
        stroke="url(#chatGrad)"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M8.5 11.5H15.5" stroke="url(#chatGrad)" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M8.5 8.8H13.7" stroke="url(#chatGrad)" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function HelpCenterIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="helpCardGrad" x1="3" y1="15" x2="27" y2="15" gradientUnits="userSpaceOnUse">
          <stop stopColor="#24D3A7" />
          <stop offset="1" stopColor="#5D8BFF" />
        </linearGradient>
      </defs>
      <path
        d="M8.5 6.5H21.5C24.5376 6.5 27 8.96243 27 12V15C27 18.0376 24.5376 20.5 21.5 20.5H15.4L10.2 24.5C9.54467 25.0041 8.6 24.5369 8.6 23.71V20.5H8.5C5.46243 20.5 3 18.0376 3 15V12C3 8.96243 5.46243 6.5 8.5 6.5Z"
        fill="url(#helpCardGrad)"
      />
      <circle cx="10.5" cy="13.5" r="1.35" fill="white" />
      <circle cx="15" cy="13.5" r="1.35" fill="white" />
      <circle cx="19.5" cy="13.5" r="1.35" fill="white" />
    </svg>
  );
}

function DemoCalendarIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="demoCardGrad" x1="5" y1="15" x2="25" y2="15" gradientUnits="userSpaceOnUse">
          <stop stopColor="#24D3A7" />
          <stop offset="1" stopColor="#5D8BFF" />
        </linearGradient>
      </defs>
      <rect x="5" y="6.5" width="20" height="19" rx="5" stroke="url(#demoCardGrad)" strokeWidth="2.4" />
      <path d="M10 4.8V9" stroke="url(#demoCardGrad)" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M20 4.8V9" stroke="url(#demoCardGrad)" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M5.8 11.2H24.2" stroke="url(#demoCardGrad)" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="11" cy="15.5" r="1.2" fill="#6AA7FF" />
      <circle cx="15" cy="15.5" r="1.2" fill="#6AA7FF" />
      <circle cx="19" cy="15.5" r="1.2" fill="#6AA7FF" />
      <circle cx="11" cy="19.5" r="1.2" fill="#6AA7FF" />
      <circle cx="15" cy="19.5" r="1.2" fill="#6AA7FF" />
    </svg>
  );
}

function LiveChatIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="liveChatCardGrad" x1="3" y1="15" x2="27" y2="15" gradientUnits="userSpaceOnUse">
          <stop stopColor="#24D3A7" />
          <stop offset="1" stopColor="#5D8BFF" />
        </linearGradient>
      </defs>
      <path
        d="M8.5 6.5H21.5C24.5376 6.5 27 8.96243 27 12V15C27 18.0376 24.5376 20.5 21.5 20.5H15.4L10.2 24.5C9.54467 25.0041 8.6 24.5369 8.6 23.71V20.5H8.5C5.46243 20.5 3 18.0376 3 15V12C3 8.96243 5.46243 6.5 8.5 6.5Z"
        fill="url(#liveChatCardGrad)"
      />
      <circle cx="10.5" cy="13.5" r="1.35" fill="white" />
      <circle cx="15" cy="13.5" r="1.35" fill="white" />
      <circle cx="19.5" cy="13.5" r="1.35" fill="white" />
    </svg>
  );
}

function CardIconShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#1f6fff]/40 bg-white/[0.03]">
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
    <div className="rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.02))] px-5 py-5 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
      <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
        {label}
      </div>
      <div className="mt-4">{children}</div>
    </div>
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
    <div className={`flex gap-4 ${alignStart ? "items-start" : "items-center"}`}>
      <CardIconShell>{icon}</CardIconShell>
      <div className={`${alignStart ? "pt-1" : ""} text-[15px] leading-8 text-slate-200`}>
        {children}
      </div>
    </div>
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

  const ctaClassName =
    "mt-6 inline-flex min-h-[50px] w-fit items-center justify-center gap-2 rounded-full px-6 py-3 text-[13px] font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:opacity-90";

  return (
    <div className="flex flex-col rounded-[26px] border border-[#d9f5ef] bg-white p-6 shadow-[0_16px_40px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(0,0,0,0.10)]">
      <div
        className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl"
        style={{ background: "rgba(0,212,170,0.10)" }}
      >
        {renderIcon()}
      </div>

      <h3 className="text-[20px] font-semibold tracking-[-0.02em] text-[#0b0f1a]">{title}</h3>
      <p className="mt-2 flex-1 text-[15px] leading-7 text-slate-500">{description}</p>

      {icon === "demo" ? (
        <BookDemoButton
          className={`${ctaClassName} bg-[linear-gradient(135deg,#00d4aa,#0088cc)] shadow-[0_10px_24px_rgba(0,136,204,0.22)]`}
        >
          {cta}
        </BookDemoButton>
      ) : href ? (
        <a
          href={href}
          className={ctaClassName}
          style={{ background: "linear-gradient(135deg, #00d4aa, #0088cc)" }}
        >
          {cta}
        </a>
      ) : (
        <button
          type="button"
          className={ctaClassName}
          style={{ background: "linear-gradient(135deg, #00d4aa, #0088cc)" }}
        >
          {cta}
        </button>
      )}
    </div>
  );
}

const ContactPageContent = () => {
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
      [name]: "",
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

  const handleSubmit = async (e: React.FormEvent) => {
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

      const result = await response.json();

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
    "w-full rounded-2xl border bg-[#08111f]/95 px-4 py-3.5 text-sm text-white placeholder:text-slate-500 outline-none transition-all duration-200 focus:border-cyan-300/50 focus:ring-4 focus:ring-cyan-400/10";
  const inputNormalClass = "border-white/10";
  const inputErrorClass = "border-red-400/60 ring-4 ring-red-400/10";

  return (
    <section className="relative overflow-hidden bg-[#07101d]">
      <AnimatedGradient />

      <div className="relative z-10">
        <section className="relative overflow-hidden pb-12 pt-[108px] md:pb-16 md:pt-[128px]">
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-400/8 blur-3xl" />
            <div className="absolute left-[8%] top-[12%] h-[280px] w-[280px] rounded-full bg-teal-400/8 blur-3xl" />
            <div className="absolute right-[10%] top-[16%] h-[320px] w-[320px] rounded-full bg-sky-500/8 blur-3xl" />
          </div>

          <div className="container mx-auto px-6 text-center lg:px-8">
            <ScrollReveal animation="fade-in-up" delay={120}>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-white/[0.03] px-4 py-2 text-[13px] font-medium text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,0.05)] backdrop-blur-xl">
                <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.95)]" />
                Accessibility Compliance Consultation
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-in-up" delay={180}>
              <h1 className="mx-auto mt-7 max-w-5xl text-balance text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-[64px] lg:leading-[1.02]">
                Speak With a{" "}
                <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
                  WCAG & ADA
                </span>{" "}
                Compliance Specialist
              </h1>
            </ScrollReveal>

            <ScrollReveal animation="fade-in-up" delay={240}>
              <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg lg:text-[20px]">
                Get expert guidance on accessibility compliance, ADA risk, and practical next
                steps to improve your website and reduce legal exposure.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-in-up" delay={290}>
              <p className="mt-8 text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-300/75 sm:text-xs">
                Standards we support
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-in-up" delay={340}>
              <div className="mt-5 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                {["WCAG 2.2 AA", "ADA", "Section 508", "EN 301 549"].map((badge) => (
                  <div
                    key={badge}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-slate-200 backdrop-blur-xl transition duration-300 hover:border-cyan-300/25 hover:bg-white/[0.06] hover:text-white"
                  >
                    <GradientCheckIcon />
                    <span>{badge}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="container mx-auto px-6 py-8 md:py-14 lg:px-8">
          <ScrollReveal animation="fade-in-up" delay={200} duration={800}>
            <div
              className="rounded-[28px] p-[1px] shadow-[0_0_60px_rgba(0,212,170,0.08)]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0,212,170,0.85), rgba(0,136,204,0.9), rgba(0,212,170,0.75))",
              }}
            >
              <div className="overflow-hidden rounded-[27px] bg-[linear-gradient(180deg,#111d2e_0%,#0c1622_100%)]">
                <div className="grid lg:grid-cols-[38%_62%]">
                  <div className="border-b border-white/8 p-7 md:p-9 lg:border-b-0 lg:border-r lg:border-white/8 xl:p-10">
                    <div className="max-w-md">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-300/75">
                        Contact details
                      </p>
                      <h2 className="mt-3 text-[28px] font-semibold tracking-[-0.03em] text-white md:text-[30px]">
                        Contact AccessIQ
                      </h2>
                      <p className="mt-3 text-[15px] leading-7 text-slate-400">
                        Connect with our accessibility team to discuss audits, remediation,
                        compliance consultation, or ongoing monitoring.
                      </p>
                    </div>

                    <div className="mt-8 space-y-4">
                      <InfoCard label="Email">
                        <InfoRow icon={<EmailIcon />}>
                          <p className="break-all text-[15px] leading-7 text-slate-200">
                            support@getaccessiq.com
                          </p>
                        </InfoRow>
                      </InfoCard>

                      <InfoCard label="Phone Number">
                        <InfoRow icon={<PhoneIcon />}>
                          <p className="text-[15px] leading-7 text-slate-200">(833) 232-2730</p>
                        </InfoRow>
                      </InfoCard>

                      <InfoCard label="Address">
                        <InfoRow icon={<LocationIcon />} alignStart>
                          <div className="space-y-0.5 text-[15px] leading-7 text-slate-200">
                            <div>Assure Digital Group LLC</div>
                            <div>15257 Amberly Dr Ste 367</div>
                            <div>Tampa, FL 33647, United States</div>
                          </div>
                        </InfoRow>
                      </InfoCard>

                      <InfoCard label="Service Hours">
                        <InfoRow icon={<ClockIcon />} alignStart>
                          <div className="space-y-0.5 text-[15px] leading-7 text-slate-200">
                            <div className="whitespace-nowrap">Monday - Friday 9:00 AM - 5:00 PM EST</div>
                            <div className="whitespace-nowrap">Saturday 9:00 AM - 2:00 PM EST</div>
                          </div>
                        </InfoRow>
                      </InfoCard>

                      <InfoCard label="Support Availability">
                        <InfoRow icon={<ChatIcon />} alignStart>
                          <p className="max-w-[280px] text-[15px] leading-7 text-slate-200">
                            Our accessibility specialists are available 24/7 via email and live chat.
                          </p>
                        </InfoRow>
                      </InfoCard>
                    </div>
                  </div>

                  <div className="p-7 md:p-9 xl:p-10">
                    <div className="max-w-2xl">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-300/75">
                        Consultation request
                      </p>
                      <h2 className="mt-3 text-[28px] font-semibold tracking-[-0.03em] text-white md:text-[30px]">
                        Request Your Consultation
                      </h2>
                      <p className="mt-3 text-[15px] leading-7 text-slate-400">
                        Tell us about your accessibility needs and our team will review your
                        request and get back to you with the most relevant next steps.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
                      <div className="grid gap-5 md:grid-cols-2">
                        <div>
                          <label
                            htmlFor="firstName"
                            className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400"
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
                            aria-invalid={!!errors.firstName}
                            aria-describedby={errors.firstName ? "firstName-error" : undefined}
                            className={`${inputBaseClass} ${errors.firstName ? inputErrorClass : inputNormalClass}`}
                          />
                          {errors.firstName && (
                            <p id="firstName-error" className="mt-2 text-sm text-red-300">
                              {errors.firstName}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="email"
                            className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400"
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
                            aria-invalid={!!errors.email}
                            aria-describedby={errors.email ? "email-error" : undefined}
                            className={`${inputBaseClass} ${errors.email ? inputErrorClass : inputNormalClass}`}
                          />
                          {errors.email && (
                            <p id="email-error" className="mt-2 text-sm text-red-300">
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="businessName"
                          className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400"
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
                          className={`${inputBaseClass} ${inputNormalClass}`}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="service"
                          className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400"
                        >
                          What kind of service are you looking for? <span className="text-red-300">*</span>
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          aria-invalid={!!errors.service}
                          aria-describedby={errors.service ? "service-error" : undefined}
                          className={`${inputBaseClass} ${errors.service ? inputErrorClass : inputNormalClass} appearance-none`}
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%2394a3b8' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "right 16px center",
                          }}
                        >
                          {serviceOptions.map((option) => (
                            <option key={option.value || "empty"} value={option.value} className="bg-[#0b1120]">
                              {option.label}
                            </option>
                          ))}
                        </select>
                        {errors.service && (
                          <p id="service-error" className="mt-2 text-sm text-red-300">
                            {errors.service}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400"
                        >
                          Anything else you&apos;d like to share? <span className="text-red-300">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your website, goals, accessibility issues, or compliance concerns."
                          rows={5}
                          aria-invalid={!!errors.message}
                          aria-describedby={errors.message ? "message-error" : undefined}
                          className={`${inputBaseClass} ${errors.message ? inputErrorClass : inputNormalClass} min-h-[148px] resize-none`}
                        />
                        {errors.message && (
                          <p id="message-error" className="mt-2 text-sm text-red-300">
                            {errors.message}
                          </p>
                        )}
                      </div>

                      {status && (
                        <div
                          className={`rounded-2xl border px-4 py-3 text-sm ${
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
                            <p className="text-[15px] leading-8 text-slate-500">
                              Fields marked with <span className="text-red-300">*</span> are required.
                              Our team will respond within one business day with the most relevant next steps.
                            </p>

                            <div className="mt-5 space-y-3">
                              <div className="inline-flex items-center gap-3 text-[15px] text-slate-300">
                                <GradientCheckIcon />
                                <span>No-obligation consultation</span>
                              </div>
                              <div className="inline-flex items-center gap-3 text-[15px] text-slate-300">
                                <GradientCheckIcon />
                                <span>Reviewed by accessibility specialists</span>
                              </div>
                              <div className="inline-flex items-center gap-3 text-[15px] text-slate-300">
                                <GradientCheckIcon />
                                <span>Response within one business day</span>
                              </div>
                            </div>
                          </div>

                          <div className="shrink-0 xl:pt-1">
                            <button
                              type="submit"
                              disabled={isSubmitting}
                              className="inline-flex min-h-[56px] min-w-[220px] items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-semibold text-white transition-all duration-200 hover:scale-[1.01] hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
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

        <section className="container mx-auto px-6 pb-24 md:pb-32 lg:px-8">
          <ScrollReveal animation="fade-in-up">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-300/75">
                Additional support
              </p>
              <h2 className="mt-3 text-[28px] font-semibold tracking-[-0.03em] text-white md:text-[40px]">
                Have Questions? We&apos;re Here to Help.
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-slate-400 md:text-base">
                Explore support resources, schedule a live walkthrough, or connect with a specialist.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-in-up" delay={200} stagger>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
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
        </section>
      </div>
    </section>
  );
};

export default ContactPageContent;