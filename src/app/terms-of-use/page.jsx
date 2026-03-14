import Link from "next/link";

const summaryItems = [
  "Use of the website must comply with applicable laws and these terms.",
  "Website content is provided for general informational purposes only.",
  "Unauthorized access, copying, interference, or misuse is prohibited.",
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

export default function TermsOfUsePage() {
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
            Terms of Use
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
            These Terms of Use govern your access to and use of the AccessIQ
            website, a product of Assure Digital Group LLC. By accessing or
            using this website, you agree to these Terms of Use and to comply
            with all applicable laws and regulations.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {["Website Use", "User Responsibilities", "Legal Terms", "AccessIQ"].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-gray-200"
                >
                  {item}
                </div>
              )
            )}
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
                    Acceptance of Terms
                  </h2>
                  <p className="mt-4 leading-relaxed text-gray-300">
                    By accessing or using this website, you agree to be bound by
                    these Terms of Use and any related policies referenced on
                    this website, including our Privacy Policy and Accessibility
                    Statement. If you do not agree to these terms, you should
                    not use the website.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold tracking-tight">
                    Permitted Use
                  </h2>
                  <p className="mt-4 leading-relaxed text-gray-300">
                    You may use this website solely for lawful business,
                    informational, and evaluation purposes. You agree not to
                    misuse the website, interfere with its operation, attempt
                    unauthorized access, or use website content in violation of
                    applicable law or these Terms of Use.
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {[
                      "Use the website only for lawful purposes",
                      "Do not interfere with website functionality or security",
                      "Do not attempt unauthorized access to systems or data",
                      "Do not misuse forms, demo requests, scans, or contact features",
                    ].map((item) => (
                      <InfoCard key={item} text={item} />
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold tracking-tight">
                    Intellectual Property
                  </h2>
                  <p className="mt-4 leading-relaxed text-gray-300">
                    All website content, including text, graphics, branding,
                    logos, designs, layouts, visual elements, and other
                    materials, is owned by or licensed to AccessIQ, Assure
                    Digital Group LLC, or their licensors unless otherwise
                    stated. You may not reproduce, distribute, republish,
                    modify, transmit, display, or create derivative works from
                    website content without prior written permission.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold tracking-tight">
                    Informational Content Only
                  </h2>
                  <p className="mt-4 leading-relaxed text-gray-300">
                    The information provided on this website is for general
                    informational purposes only. Nothing on this website
                    constitutes legal advice, regulatory advice, compliance
                    advice, or any other professional advice. Any reliance on
                    website content is at your own risk.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold tracking-tight">
                    Third-Party Links
                  </h2>
                  <p className="mt-4 leading-relaxed text-gray-300">
                    This website may contain links to third-party websites,
                    platforms, or services for convenience or reference.
                    AccessIQ and Assure Digital Group LLC do not control and are
                    not responsible for the content, availability, privacy
                    practices, or policies of any third-party website or
                    service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold tracking-tight">
                    Disclaimer of Warranties
                  </h2>
                  <p className="mt-4 leading-relaxed text-gray-300">
                    This website and all content made available through it are
                    provided on an “as is” and “as available” basis, without
                    warranties of any kind, whether express, implied, or
                    statutory. To the fullest extent permitted by law, we
                    disclaim all warranties, including warranties of accuracy,
                    completeness, availability, merchantability, fitness for a
                    particular purpose, and non-infringement.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold tracking-tight">
                    Limitation of Liability
                  </h2>
                  <p className="mt-4 leading-relaxed text-gray-300">
                    To the fullest extent permitted by law, AccessIQ and Assure
                    Digital Group LLC shall not be liable for any indirect,
                    incidental, special, consequential, exemplary, or punitive
                    damages, or for any loss of profits, data, goodwill, or
                    business opportunity, arising out of or relating to your use
                    of, or inability to use, this website.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold tracking-tight">
                    Suspension or Termination
                  </h2>
                  <p className="mt-4 leading-relaxed text-gray-300">
                    We reserve the right to suspend, restrict, or terminate
                    access to the website at any time, without notice, if we
                    believe a user has violated these Terms of Use, applicable
                    law, or the security or integrity of the website.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold tracking-tight">
                    Changes to These Terms
                  </h2>
                  <p className="mt-4 leading-relaxed text-gray-300">
                    We may update these Terms of Use from time to time to
                    reflect changes to the website, our services, our business
                    operations, or legal requirements. Updated versions will be
                    posted on this page with a revised effective date. Continued
                    use of the website after any update constitutes acceptance
                    of the revised Terms of Use.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold tracking-tight">
                    Governing Law
                  </h2>
                  <p className="mt-4 leading-relaxed text-gray-300">
                    These Terms of Use shall be governed by and construed in
                    accordance with the laws of the State of Florida, without
                    regard to its conflict of law principles.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold tracking-tight">
                    Venue & Jurisdiction
                  </h2>
                  <p className="mt-4 leading-relaxed text-gray-300">
                    To the extent permitted by law, any dispute arising out of
                    or relating to these Terms of Use or your use of the website
                    shall be brought exclusively in the state or federal courts
                    located in Florida, and you consent to the jurisdiction of
                    those courts.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold tracking-tight">
                    Contact Information
                  </h2>
                  <p className="mt-4 leading-relaxed text-gray-300">
                    If you have questions about these Terms of Use, you may
                    contact us at:
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
                    These Terms of Use apply to the AccessIQ website and related
                    website content operated by Assure Digital Group LLC.
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
                    Questions about these terms can be directed to our team.
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