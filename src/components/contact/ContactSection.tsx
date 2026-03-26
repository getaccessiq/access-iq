"use client";

import React, { useMemo, useState } from "react";

type FormData = {
  firstName: string;
  email: string;
  businessName: string;
  service: string;
  message: string;
};

type ContactItem = {
  label: string;
  value: React.ReactNode;
  icon: React.ReactNode;
};

const initialFormData: FormData = {
  firstName: "",
  email: "",
  businessName: "",
  service: "",
  message: "",
};

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactItems = useMemo<ContactItem[]>(
    () => [
      {
        label: "Email",
        value: (
          <a
            href="mailto:info@getaccessiq.com"
            className="transition-colors hover:text-[#009fd9]"
          >
            info@getaccessiq.com
          </a>
        ),
        icon: <EmailIcon />,
      },
      {
        label: "Phone",
        value: (
          <a
            href="tel:+18333625610"
            className="transition-colors hover:text-[#009fd9]"
          >
            +1 833-362-5610
          </a>
        ),
        icon: <PhoneIcon />,
      },
      {
        label: "Address",
        value: (
          <>
            7160 Squirebeam Dr, Ste 80 #350
            <br />
            Sterling, VA 20166
          </>
        ),
        icon: <LocationIcon />,
      },
      {
        label: "Service hours",
        value: (
          <>
            Monday – Friday: 9 AM – 6 PM EST
            <br />
            Saturday: 9 AM – 5 PM EST
          </>
        ),
        icon: <ClockIcon />,
      },
    ],
    []
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (isSubmitted) setIsSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden bg-[#f8f9fb] py-14 sm:py-16 lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-[-10%] top-10 h-64 w-64 rounded-full bg-[#00d4aa]/8 blur-3xl" />
        <div className="absolute right-[-8%] top-16 h-72 w-72 rounded-full bg-[#0088cc]/8 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <span className="inline-flex items-center rounded-full border border-[#cfe8e3] bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#00a37a] shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
            Contact accessive
          </span>

          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#0b0f1a] sm:text-4xl lg:text-5xl">
            Get expert guidance on accessibility, compliance, and remediation.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#5f6b7f] sm:text-base">
            Reach out for a consultation, audit discussion, or implementation support.
            We’ll help you understand your accessibility risks and next steps.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <aside className="relative overflow-hidden rounded-[28px] border border-[#d9ece7] bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.06)] sm:p-8 lg:p-9">
            <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(0,160,140,0.35),transparent)]" />

            <div className="mb-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#00a37a]">
                Contact information
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#0b0f1a]">
                Talk to our accessibility team
              </h3>
              <p className="mt-3 max-w-md text-sm leading-7 text-[#627085]">
                Choose the best way to reach us. For faster support, include your
                website URL and a short summary of what you need help with.
              </p>
            </div>

            <div className="space-y-4">
              {contactItems.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[22px] border border-[#e1f0eb] bg-[linear-gradient(180deg,#f7fbfa_0%,#f3f8f7_100%)] p-4 sm:p-5"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#00d4aa]/10 text-[#00a6bf]">
                      {item.icon}
                    </div>

                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#7a8798]">
                        {item.label}
                      </p>
                      <div className="mt-2 text-sm leading-7 text-[#0b0f1a]">
                        {item.value}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-[22px] border border-[#e1f0eb] bg-[linear-gradient(180deg,#f7fbfa_0%,#f3f8f7_100%)] p-4 sm:p-5">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#00d4aa]/10 text-[#00a6bf]">
                  <SupportIcon />
                </div>

                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#7a8798]">
                    Support availability
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[#5f6b7f]">
                    Our specialists are available by email and live chat to help
                    with audits, remediation planning, and compliance questions.
                  </p>
                </div>
              </div>
            </div>
          </aside>

          <div className="relative overflow-hidden rounded-[28px] border border-[#d9ece7] bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.06)] sm:p-8 lg:p-9">
            <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(0,136,204,0.35),transparent)]" />

            <div className="mb-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#008fc4]">
                Request consultation
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#0b0f1a]">
                Tell us what you need
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-7 text-[#627085]">
                Share your goals, website details, and the type of support you’re
                looking for. Our team will review your request and respond within
                one business day.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <FieldLabel htmlFor="firstName" label="First name" />
                <FieldLabel htmlFor="email" label="Email" />
              </div>

              <div className="-mt-1 grid gap-5 sm:grid-cols-2">
                <InputField
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                  autoComplete="given-name"
                />
                <InputField
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your work email"
                  autoComplete="email"
                />
              </div>

              <FieldLabel htmlFor="businessName" label="Business name" />
              <InputField
                id="businessName"
                name="businessName"
                type="text"
                value={formData.businessName}
                onChange={handleChange}
                placeholder="Enter your company or organization name"
                autoComplete="organization"
              />

              <FieldLabel
                htmlFor="service"
                label="What kind of service are you looking for?"
              />
              <SelectField
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="">Select a service</option>
                <option value="audit">Accessibility audit</option>
                <option value="remediation">Accessibility remediation</option>
                <option value="monitoring">Continuous monitoring</option>
                <option value="consultation">Compliance consultation</option>
              </SelectField>

              <FieldLabel
                htmlFor="message"
                label="Anything else you’d like to share?"
              />
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your site, goals, timeline, or any compliance concerns."
                rows={5}
                className={fieldClassName}
              />

              <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-[#00d4aa]/40"
                  style={{
                    background: "linear-gradient(135deg, #00d4aa 0%, #0088cc 100%)",
                    boxShadow: "0 14px 34px rgba(0,136,204,0.18)",
                  }}
                >
                  Submit inquiry
                </button>

                <p className="text-sm text-[#7a8798]">
                  We usually reply within one business day.
                </p>
              </div>

              {isSubmitted ? (
                <div className="rounded-2xl border border-[#d9ece7] bg-[#f5fbf9] px-4 py-3 text-sm text-[#33616d]">
                  Your inquiry has been prepared. Connect your submit logic to send
                  the request.
                </div>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function FieldLabel({
  htmlFor,
  label,
}: {
  htmlFor: string;
  label: string;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-[#7a8798]"
    >
      {label}
    </label>
  );
}

const fieldClassName =
  "w-full rounded-[18px] border border-[#d8ebe6] bg-[#f7fbfa] px-4 py-3.5 text-sm text-[#0b0f1a] placeholder:text-[#8b96a8] outline-none transition-all duration-200 focus:border-[#00c7a7] focus:bg-white focus:ring-4 focus:ring-[#00d4aa]/10";

function InputField(
  props: React.InputHTMLAttributes<HTMLInputElement>
) {
  return <input {...props} className={fieldClassName} />;
}

function SelectField(
  props: React.SelectHTMLAttributes<HTMLSelectElement>
) {
  return (
    <select
      {...props}
      className={`${fieldClassName} appearance-none pr-12`}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%236b7280' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 16px center",
      }}
    />
  );
}

function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect
        x="2"
        y="4"
        width="20"
        height="16"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M2 7l10 7 10-7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12 7v5l3 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 13a8 8 0 1 1 16 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M4 13v3a2 2 0 0 0 2 2h1v-5H6a2 2 0 0 0-2 2Zm16 0v3a2 2 0 0 1-2 2h-1v-5h1a2 2 0 0 1 2 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M12 18v2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}