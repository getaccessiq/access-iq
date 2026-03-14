export default function AccessibilityStatementPage() {
  return (
    <main className="min-h-screen bg-[#050b1a] text-white">
      <section className="mx-auto max-w-5xl px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Accessibility Statement
        </h1>

        <p className="mt-6 text-lg text-gray-300 leading-relaxed">
          AccessIQ is committed to ensuring digital accessibility for people
          with disabilities. We continuously work to improve the user
          experience for everyone and apply relevant accessibility standards
          to enhance usability and inclusivity.
        </p>

        <div className="mt-12 space-y-10">
          <section>
            <h2 className="text-2xl font-semibold">Our Commitment</h2>
            <p className="mt-4 text-gray-300 leading-relaxed">
              We strive to make our website accessible to the widest possible
              audience, regardless of technology or ability. Our goal is to
              support inclusive access and reduce barriers for visitors who
              rely on assistive technologies such as screen readers, keyboard
              navigation, magnification software, or voice input tools.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Accessibility Standards</h2>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Our website aims to conform to the Web Content Accessibility
              Guidelines (WCAG) 2.1 Level AA and considers broader accessibility
              expectations related to ADA, Section 508, and EN 301 549.
            </p>

            <ul className="mt-6 list-disc pl-6 space-y-2 text-gray-300">
              <li>WCAG 2.1 Level AA</li>
              <li>ADA accessibility considerations</li>
              <li>Section 508 compliance guidance</li>
              <li>EN 301 549 accessibility principles</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Accessibility Measures</h2>
            <p className="mt-4 text-gray-300 leading-relaxed">
              To support accessibility we take the following measures:
            </p>

            <ul className="mt-6 list-disc pl-6 space-y-2 text-gray-300">
              <li>Regular accessibility reviews of design and structure</li>
              <li>Automated accessibility testing tools</li>
              <li>Manual accessibility checks and improvements</li>
              <li>Continuous monitoring and updates</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Feedback</h2>
            <p className="mt-4 text-gray-300 leading-relaxed">
              We welcome feedback on the accessibility of our website.
              If you encounter accessibility barriers or require assistance,
              please contact us.
            </p>

            <div className="mt-6 space-y-2 text-gray-300">
              <p>Email: support@getaccessiq.com</p>
              <p>Phone: (833) 232-2730</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Ongoing Improvements</h2>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Accessibility is an ongoing effort. We continue to evaluate our
              website and implement improvements to support a more inclusive
              digital experience for all users.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}