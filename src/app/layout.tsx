import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

// 👉 Rename empfohlen (optional, aber sauberer)
import PremiumAccessiveChat from "@/components/premium-accessiq-chat";

const inter = Inter({
  subsets: ["latin"],
  display: "swap", // besser für Performance
});

export const metadata: Metadata = {
  metadataBase: new URL("https://getaccessive.com"), // 🔥 wichtig für SEO

  title: {
    default: "Accessive – WCAG Accessibility Audits & Compliance",
    template: "%s | Accessive",
  },

  description:
    "Accessive delivers human-verified WCAG accessibility audits, remediation support, and compliance solutions. Reduce legal risk and achieve real accessibility.",

  keywords: [
    "WCAG audit",
    "accessibility compliance",
    "ADA compliance",
    "website accessibility",
    "accessibility audit service",
    "WCAG 2.2",
    "Section 508",
  ],

  authors: [{ name: "Accessive" }],

  creator: "Accessive",

  openGraph: {
    title: "Accessive – Accessibility Audits & Compliance",
    description:
      "Human-verified WCAG audits, real fixes, and compliance you can trust.",
    url: "https://getaccessive.com",
    siteName: "Accessive",
    images: [
      {
        url: "/og-image.png", // 👉 später erstellen
        width: 1200,
        height: 630,
        alt: "Accessive Accessibility Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Accessive – Accessibility Audits & Compliance",
    description:
      "Real WCAG audits. Real fixes. Real compliance.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-[#06111f] text-white`}
      >
        {children}

        {/* 💬 Global Chat */}
        <PremiumAccessiveChat />

        {/* 📊 Analytics */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}