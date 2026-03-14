import Link from "next/link";

const summaryItems = [
  "We collect only the information reasonably necessary to operate, improve, and secure the website.",
  "We do not sell personal information.",
  "Privacy-related questions can be directed to our team at any time.",
];

function InfoCard({ text }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-[#0b1424] px-4 py-4">
      <div className="mt-0.5 shrink-0">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path
            d="M5 13l4 4L19 7"
            stroke="#00d4aa"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <span className="text-sm leading-relaxed text-gray-200">{text}</span>
    </div>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050b1a] text-white">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at top left, rgba(0,180,216,0.12) 0%, transparent 34%), radial-gradient(ellipse at bottom right, rgba(0,212,170,0.10) 0%, transparent 34%)",
        }}
      />

      <section className="relative mx-auto max-w-6xl px-6 py-20 md:py-24">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-[#36bfff] transition-colors hover:text-white"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 6L9 12L15 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to Home
        </Link>

        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#00d4aa]/20 bg-[#00d4aa]/[0.06] px-4 py-2">
            <span className="text-[13px] font-medium text-[#00d4aa]">
              Legal & Compliance
            </span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight leading-[1.05] md:text-5xl lg:text-6xl">
            Privacy Policy
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
            This Privacy Policy explains how AccessIQ, a product of Assure
            Digital Group LLC, collects, uses, stores, and protects information
            when you visit or interact with our website. We are committed to
            handling personal information responsibly, transparently, and in a
            manner consistent with applicable privacy requirements.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {["Privacy", "Data Use", "Security", "AccessIQ"].map((item) => (
              <div
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-gray-200"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm">
          <div
            className="h-px w-full"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(0,212,170,0.45), rgba(0,136,204,0.45), transparent)",
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_0.65fr]">
            <div className="px-6 py-10 md:px-10 md:py-12">
              <div className="space-y-12">
                <section>
                  <h2 className="text-2xl font-semibold tracking-tight">
                    Who We Are
                  </h2>
                  <p className="mt-4 leading-relaxed text-gray-300">
                    AccessIQ is a product of Assure Digital Group LLC. This
                    Privacy Policy applies to the public-facing AccessIQ website
                    and related website interactions.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold tracking-tight">
                    Information We Collect
                  </h2>
                  <p className="mt-4 leading-relaxed text-gray-300">
                    We may collect information that you voluntarily provide,
                    including your name, email address, phone number, company
                    information, website URL, and any other details you choose
                    to submit through contact forms, audit requests, demo
                    requests, or similar interactions.
                  </p>
                  <p className="mt-4 leading-relaxed text-gray-300">
                    We may also collect certain information automatically when
                    you use the website, such as browser type, device type, IP
                    address, pages viewed, referring URLs, approximate location
                    derived from technical data, and general usage analytics.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold tracking-tight">
                    Categories of Sources
                  </h2>
                  <p className="mt-4 leading-relaxed text-gray-300">
                    We may collect personal information directly from you, from
                    your use of the website, from communications you send to us,
                    and from technologies used to operate and measure website
                    performance.
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {[
                      "Information you submit through forms or email",
                      "Technical data collected through website usage",
                      "Communication records and support requests",
                      "Analytics, security, and performance technologies",
                    ].map((item) => (
                      <InfoCard key={item} text={item} />
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold tracking-tight">
                    How We Use Information
                  </h2>
                  <p className="mt-4 leading-relaxed text-gray-300">
                    We use personal information for legitimate business and
                    operational purposes, including to respond to inquiries,
                    provide requested information, operate and improve the
                    website, maintain security, and support our services.
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {[
                      "Respond to contact requests and support inquiries",
                      "Provide requested services, audits, scans, or demo information",
                      "Improve website functionality and user experience",
                      "Maintain security, prevent misuse, and analyze performance",
                    ].map((item) => (
                      <InfoCard key={item} text={item} />
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold tracking-tight">
                    Cookies & Analytics
                  </h2>
                  <p className="mt-4 leading-relaxed text-gray-300">
                    We may use cookies and similar technologies to understand
                    website traffic, remember preferences, measure engagement,
                    improve website performance, and help secure the website.
                    Depending on your location, certain cookies may be subject
                    to consent or browser-based controls.
                  </p>
                  <p className="mt-4 leading-relaxed text-gray-300">
                    You may be able to manage certain cookie preferences through
                    your browser settings or any consent tools made available on
                    the website.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold tracking-tight">
                    When We Share Information
                  </h2>
                  <p className="mt-4 leading-relaxed text-gray-300">
                    We do not sell personal information. We may disclose
                    information to service providers, vendors, hosting partners,
                    analytics providers, or professional advisers where
                    reasonably necessary to operate the website, provide
                    services, comply with legal obligations, enforce our rights,
                    or protect the security and integrity of our systems.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold tracking-tight">
                    Data Retention
                  </h2>
                  <p className="mt-4 leading-relaxed text-gray-300">
                    We retain personal information only for as long as
                    reasonably necessary for the purposes described in this
                    policy, including business operations, recordkeeping,
                    security, dispute resolution, legal compliance, and
                    enforcement needs.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold tracking-tight">
                    Data Security
                  </h2>
                  <p className="mt-4 leading-relaxed text-gray-300">
                    We use reasonable administrative, technical, and
                    organizational safeguards designed to protect personal
                    information from unauthorized access, disclosure, misuse,
                    loss, or alteration. However, no transmission or storage
                    method can be guaranteed to be completely secure.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold tracking-tight">
                    International Data Transfers
                  </h2>
                  <p className="mt-4 leading-relaxed text-gray-300">
                    Depending on the services used to host, secure, analyze, or
                    support the website, personal information may be processed
                    or stored in countries other than your own. Where relevant,
                    we take reasonable steps intended to support compliance with
                    applicable data protection requirements.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold tracking-tight">
                    Third-Party Services
                  </h2>
                  <p className="mt-4 leading-relaxed text-gray-300">
                    Our website may rely on third-party tools and service
                    providers for hosting, analytics, communications, form
                    handling, demo experiences, security, or other operational
                    website functions. Those third parties may process
                    information in accordance with their own policies and
                    contractual terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold tracking-tight">
                    Your Rights & Choices
                  </h2>
                  <p className="mt-4 leading-relaxed text-gray-300">
                    Depending on your location and applicable law, you may have
                    rights relating to access, correction, deletion,
                    restriction, objection, or portability of certain personal
                    information. You may also contact us with questions about
                    how your information is handled.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold tracking-tight">
                    Children’s Privacy
                  </h2>
                  <p className="mt-4 leading-relaxed text-gray-300">
                    This website is not directed to children under 13, and we
                    do not knowingly collect personal information from children
                    under 13. If you believe a child has provided personal
                    information through the website, please contact us so we can
                    take appropriate steps.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold tracking-tight">
                    Changes to This Policy
                  </h2>
                  <p className="mt-4 leading-relaxed text-gray-300">
                    We may update this Privacy Policy from time to time to
                    reflect operational, legal, regulatory, or service-related
                    changes. Any updates will be posted on this page with a
                    revised effective date.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold tracking-tight">
                    Contact Information
                  </h2>
                  <p className="mt-4 leading-relaxed text-gray-300">
                    If you have questions about this Privacy Policy, our data
                    practices, or your privacy rights, you may contact us at:
                  </p>

                  <div className="mt-6 space-y-1 text-gray-300">
                    <p className="font-medium text-white">AccessIQ</p>
                    <p>a product of Assure Digital Group LLC</p>
                    <p>15257 Amberly Dr Ste 367</p>
                    <p>Tampa, FL 33647</p>
                    <p>United States</p>
                    <p className="mt-2">Email: support@getaccessiq.com</p>
                    <p>Phone: (833) 232-2730</p>
                  </div>
                </section>
              </div>
            </div>

            <aside className="border-t border-white/10 bg-white/[0.02] px-6 py-10 md:px-8 md:py-12 lg:border-l lg:border-t-0">
              <div className="space-y-6">
                <div className="rounded-2xl border border-[#00d4aa]/20 bg-[#00d4aa]/[0.05] p-5">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#00d4aa]">
                    Last updated
                  </p>
                  <p className="text-base font-medium text-white">
                    March 18, 2026
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#0b1424] p-5">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#36bfff]">
                    Scope
                  </p>
                  <p className="text-sm leading-relaxed text-gray-300">
                    This Privacy Policy applies to the AccessIQ website and
                    related services operated by Assure Digital Group LLC.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#0b1424] p-5">
                  <h3 className="mb-3 text-lg font-semibold">Quick Summary</h3>
                  <ul className="space-y-3 text-sm text-gray-300">
                    {summaryItems.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-[#00d4aa]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#0b1424] p-5">
                  <h3 className="mb-3 text-lg font-semibold">Contact</h3>
                  <p className="text-sm leading-relaxed text-gray-300">
                    Privacy-related questions can be directed to our team.
                  </p>

                  <div className="mt-5 space-y-4">
                    <a
                      href="mailto:support@getaccessiq.com"
                      className="flex items-center gap-3 text-gray-200 transition-colors hover:text-white"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M3 7.75C3 6.23122 4.23122 5 5.75 5H18.25C19.7688 5 21 6.23122 21 7.75V16.25C21 17.7688 19.7688 19 18.25 19H5.75C4.23122 19 3 17.7688 3 16.25V7.75Z"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        />
                        <path
                          d="M5 7L10.94 11.455C11.5628 11.9221 12.4372 11.9221 13.06 11.455L19 7"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      support@getaccessiq.com
                    </a>

                    <a
                      href="tel:+18332322730"
                      className="flex items-center gap-3 text-gray-200 transition-colors hover:text-white"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M17.6252 14.174L20.2682 15.75C20.8142 16.076 21.0961 16.71 20.9711 17.334C20.4601 19.893 17.8902 21.533 15.3732 20.842C9.4342 19.212 4.79509 14.587 3.15909 8.635C2.46709 6.117 4.10519 3.54498 6.66519 3.03298L6.68204 3.02999C7.30704 2.90499 7.94419 3.18799 8.26919 3.73699L9.83218 6.376C10.3882 7.315 10.112 8.52398 9.20303 9.12798L7.54214 10.233C8.71414 13.04 10.9541 15.289 13.7531 16.459L14.8681 14.794C15.4771 13.887 16.6872 13.615 17.6252 14.174Z"
                          fill="currentColor"
                        />
                      </svg>
                      (833) 232-2730
                    </a>
                  </div>

                  <div className="mt-5 text-sm leading-relaxed text-gray-300">
                    <p className="font-medium text-white">Assure Digital Group LLC</p>
                    <p>15257 Amberly Dr Ste 367</p>
                    <p>Tampa, FL 33647</p>
                    <p>United States</p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}