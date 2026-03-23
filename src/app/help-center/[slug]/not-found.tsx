import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HelpArticleNotFound() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#07101d] pt-28 text-white">
        <section className="px-6 pb-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">

            {/* ICON */}
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[24px] border border-white/10 bg-white/[0.04] text-cyan-300">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path
                  d="M10 4H4V10"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M20 20L14 14"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <circle
                  cx="10"
                  cy="10"
                  r="6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
              </svg>
            </div>

            {/* HEADLINE */}
            <h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Article not found
            </h1>

            {/* TEXT */}
            <p className="mt-5 text-[18px] leading-8 text-slate-300">
              The help article you are looking for does not exist, may have been
              moved, or the link is no longer valid.
            </p>

            {/* SUGGESTION */}
            <p className="mt-3 text-[16px] text-slate-400">
              Try searching for topics like WCAG, ADA compliance, accessibility audits,
              or testing workflows.
            </p>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="/help-center"
                className="inline-flex min-h-[56px] items-center justify-center rounded-full px-7 py-3 text-[16px] font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:opacity-95"
                style={{
                  background: "linear-gradient(135deg, #12c7a5, #0b8fce)",
                  boxShadow: "0 16px 40px rgba(11, 143, 206, 0.22)",
                }}
              >
                Go to Help Center
              </a>

              <a
                href="/contact"
                className="inline-flex min-h-[56px] items-center justify-center rounded-full border border-white/10 px-7 py-3 text-[16px] font-semibold text-white transition-all duration-300 hover:bg-white/[0.06]"
              >
                Contact Support
              </a>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}