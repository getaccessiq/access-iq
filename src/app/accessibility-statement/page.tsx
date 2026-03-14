import Link from "next/link";

const standards = [
  "WCAG 2.2 Level AA",
  "ADA accessibility considerations",
  "Section 508 guidance",
  "EN 301 549 accessibility principles",
];

const measures = [
  "Regular accessibility reviews of design, structure, and core user journeys",
  "Automated accessibility testing tools",
  "Manual accessibility checks and remediation reviews",
  "Continuous monitoring and ongoing improvements",
];

const assessmentMethods = [
  "Automated accessibility testing",
  "Manual accessibility evaluation",
  "Ongoing monitoring and periodic review",
];

const summaryItems = [
  "We work toward WCAG 2.2 AA conformance.",
  "Accessibility is reviewed on an ongoing basis.",
  "Accessibility feedback can be sent directly to our support team.",
];

function CheckCard({ text }: { text: string }) {
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

export default function AccessibilityStatementPage() {
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
              Accessibility & Compliance
            </span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight leading-[1.05] md:text-5xl lg:text-6xl">
            Accessibility Statement
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
            AccessIQ, a product of Assure Digital Group LLC, is committed to
            improving digital accessibility for people with disabilities. We
            continue to review and improve the usability of our website to
            support broader and more inclusive access for all users.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {["WCAG 2.2 AA", "ADA", "Section 508", "EN 301 549"].map((item) => (
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
                    Our Commitment
                  </h2>
                  <p className="mt-4 leading-relaxed text-gray-300">
                    We strive to make our website accessible to the widest
                    possible audience, regardless of technology or ability. Our
                    goal is to reduce barriers for visitors who rely on
                    assistive technologies such as screen readers, keyboard
                    navigation, magnification software, captions, or voice input
                    tools.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold tracking-tight">
                    Accessibility Standards
                  </h2>
                  <p className="mt-4 leading-relaxed text-gray-300">
                    Our website is designed with reference to the Web Content
                    Accessibility Guidelines (WCAG) 2.2 Level AA and broader
                    accessibility expectations associated with the Americans
                    with Disabilities Act (ADA), Section 508, and EN 301 549.
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {standards.map((item) => (
                      <CheckCard key={item} text={item} />
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold tracking-tight">
                    Conformance Status
                  </h2>
                  <p className="mt-4 leading-relaxed text-gray-300">
                    The Web Content Accessibility Guidelines (WCAG) define
                    requirements for designers and developers to improve
                    accessibility for people with disabilities. AccessIQ aims to
                    conform to WCAG 2.2 Level AA for its public-facing website,
                    while recognizing that accessibility is an ongoing process
                    of evaluation and improvement.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold tracking-tight">
                    Accessibility Measures
                  </h2>
                  <p className="mt-4 leading-relaxed text-gray-300">
                    To support accessibility, we take the following measures:
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {measures.map((item) => (
                      <CheckCard key={item} text={item} />
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold tracking-tight">
                    Assessment Approach
                  </h2>
                  <p className="mt-4 leading-relaxed text-gray-300">
                    We evaluate accessibility using a combination of technical
                    review, manual checks, and ongoing monitoring methods.
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {assessmentMethods.map((item) => (
                      <CheckCard key={item} text={item} />
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold tracking-tight">
                    Limitations & Alternatives
                  </h2>
                  <p className="mt-4 leading-relaxed text-gray-300">
                    Despite our efforts to improve accessibility, some content
                    or areas of the website may not yet fully conform to all
                    accessibility expectations in every scenario. Accessibility
                    improvements are ongoing.
                  </p>
                  <p className="mt-4 leading-relaxed text-gray-300">
                    If you encounter an accessibility barrier, please contact us
                    and we will make reasonable efforts to provide the
                    information, service, or support you need in an accessible
                    format.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold tracking-tight">
                    Ongoing Improvements
                  </h2>
                  <p className="mt-4 leading-relaxed text-gray-300">
                    Accessibility is an ongoing effort. We continue to review,
                    test, and improve our website to support a more inclusive
                    digital experience over time.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold tracking-tight">
                    Contact Information
                  </h2>
                  <p className="mt-4 leading-relaxed text-gray-300">
                    If you experience difficulty accessing content on this
                    website, or if you would like to report an accessibility
                    issue, please contact us at:
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
                    This accessibility statement applies to the public-facing
                    AccessIQ website operated by Assure Digital Group LLC.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#0b1424] p-5">
                  <h3 className="mb-3 text-lg font-semibold">
                    Feedback & Support
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-300">
                    If you encounter accessibility barriers or need assistance,
                    please contact us and we will make reasonable efforts to
                    support you.
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
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}