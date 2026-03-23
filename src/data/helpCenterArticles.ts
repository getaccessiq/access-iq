export type HelpArticleTag = "Beginner" | "Compliance" | "Strategy" | "Testing";

export type HelpArticle = {
  slug: string;
  title: string;
  tag: HelpArticleTag;
  excerpt: string;
  description: string;
  readTime: string;
  category: string;
  content: {
    intro: string;
    sections: Array<{
      heading: string;
      paragraphs: string[];
      bullets?: string[];
    }>;
  };
};

export const helpCenterArticles: HelpArticle[] = [
  {
    slug: "understanding-wcag-beginners-guide",
    title: "Understanding WCAG: Beginner's Guide",
    tag: "Beginner",
    excerpt:
      "Learn what WCAG means, why it matters, and how to use it as a practical framework for improving digital accessibility.",
    description:
      "A practical introduction to WCAG, including its core principles, conformance levels, and how teams can use it to build a more accessible digital experience over time.",
    readTime: "6 min read",
    category: "WCAG Fundamentals",
    content: {
      intro:
        "WCAG stands for Web Content Accessibility Guidelines. It is the most widely used framework for making websites, applications, and digital products more accessible to people with disabilities.",
      sections: [
        {
          heading: "What WCAG actually is",
          paragraphs: [
            "WCAG is a structured set of technical and practical recommendations for improving digital accessibility. It helps organizations reduce barriers for users who rely on assistive technologies, keyboard navigation, captions, sufficient contrast, and predictable interfaces.",
            "Most accessibility audits, legal reviews, remediation projects, and compliance programs are ultimately mapped back to WCAG success criteria."
          ],
        },
        {
          heading: "The four core principles",
          paragraphs: [
            "WCAG is built around four guiding principles: perceivable, operable, understandable, and robust. Together, these principles form the foundation of accessible digital experiences and are often referred to as POUR."
          ],
          bullets: [
            "Perceivable: users must be able to perceive the information presented",
            "Operable: users must be able to navigate and interact with the interface",
            "Understandable: content and interface behavior must be clear and predictable",
            "Robust: content should work reliably with current and future assistive technologies"
          ],
        },
        {
          heading: "Conformance levels",
          paragraphs: [
            "WCAG includes three conformance levels: A, AA, and AAA. In most commercial, institutional, and legal contexts, AA is the practical benchmark organizations are expected to meet.",
            "For most websites, SaaS platforms, and public-facing digital products, WCAG 2.2 AA is the strongest and most realistic target."
          ],
        },
        {
          heading: "How teams should use WCAG",
          paragraphs: [
            "WCAG should not be treated as a checklist that only appears at the end of a project. The most effective teams use it throughout design, development, QA, and content publishing.",
            "That approach reduces rework, lowers remediation cost, improves usability, and creates more consistent accessibility outcomes across the entire product."
          ],
        },
      ],
    },
  },
  {
    slug: "fixing-non-text-content-issues",
    title: "How to Fix Non-Text Content Issues",
    tag: "Compliance",
    excerpt:
      "Understand how to handle images, icons, charts, and other non-text elements in a way that supports accessibility and compliance.",
    description:
      "A practical guide to fixing non-text content issues, including alt text, decorative images, functional icons, complex visuals, and common implementation mistakes.",
    readTime: "5 min read",
    category: "Issue Remediation",
    content: {
      intro:
        "Non-text content issues are among the most common accessibility problems. They usually affect images, icons, infographics, controls, charts, and other visual elements that need meaningful text alternatives.",
      sections: [
        {
          heading: "Use alt text intentionally",
          paragraphs: [
            "If an image communicates meaning, it needs alternative text that conveys the same purpose to users of assistive technology.",
            "If an image is purely decorative, it should usually be hidden from assistive technology instead of being announced with unnecessary or distracting text."
          ],
        },
        {
          heading: "Functional images and icons",
          paragraphs: [
            "If an image or icon acts like a button or link, the accessible label should describe the action or outcome, not the visual appearance of the element."
          ],
          bullets: [
            "Bad: magnifying glass icon",
            "Good: Search",
            "Bad: blue arrow",
            "Good: Open report"
          ],
        },
        {
          heading: "Complex visuals",
          paragraphs: [
            "Charts, diagrams, and infographics often require more than short alt text. In those cases, provide a nearby summary, a structured explanation of the key information, or a text alternative that communicates the same meaning."
          ],
        },
        {
          heading: "Common mistakes",
          paragraphs: [
            "The most common problems include missing alt text, redundant alt text, incorrect labels on clickable icons, and decorative graphics being announced unnecessarily by screen readers.",
            "These mistakes often appear small in isolation, but they can create major usability issues when repeated across templates and workflows."
          ],
        },
      ],
    },
  },
  {
    slug: "creating-ada-compliance-checklist",
    title: "Creating an ADA Compliance Checklist",
    tag: "Strategy",
    excerpt:
      "Build a practical compliance checklist for your website, workflows, and internal accessibility review process.",
    description:
      "Learn how to turn accessibility expectations into a practical internal checklist for audits, prioritization, remediation planning, ownership, and long-term governance.",
    readTime: "7 min read",
    category: "Compliance Strategy",
    content: {
      intro:
        "An ADA compliance checklist should help your team move from reactive fixes to a repeatable accessibility process. It should not simply list problems — it should support prioritization, accountability, and continuous improvement.",
      sections: [
        {
          heading: "Start with the high-risk areas",
          paragraphs: [
            "Begin with the templates, workflows, and components that affect the largest number of users. This usually includes navigation, menus, forms, account areas, modals, checkout flows, dashboards, and authentication steps.",
            "Prioritizing high-impact areas first helps your team reduce both accessibility risk and remediation effort more effectively."
          ],
        },
        {
          heading: "Group by workflow",
          paragraphs: [
            "Your checklist should reflect how your team actually operates. Instead of organizing everything as a flat technical list, structure it around design review, engineering implementation, QA validation, content publishing, and ongoing monitoring."
          ],
          bullets: [
            "Design: color contrast, focus states, labels, layout clarity",
            "Development: semantic HTML, keyboard support, ARIA use",
            "QA: screen reader checks, zoom checks, keyboard-only flows",
            "Content: alt text, heading structure, link clarity"
          ],
        },
        {
          heading: "Track ownership",
          paragraphs: [
            "Each checklist item should have a clear owner. Without ownership, accessibility remains a vague intention instead of an operational process that can actually be maintained over time.",
            "Assigning responsibility also makes it easier to prevent accessibility regressions after launch."
          ],
        },
        {
          heading: "Review regularly",
          paragraphs: [
            "Your checklist should evolve alongside your product. New features, third-party tools, design updates, and component changes can all introduce new accessibility risks.",
            "Regular review turns the checklist into a living part of your workflow rather than a one-time compliance exercise."
          ],
        },
      ],
    },
  },
  {
    slug: "accessibility-audit-best-practices",
    title: "Conducting an Accessibility Audit: Best Practices",
    tag: "Testing",
    excerpt:
      "Learn how to run a more useful accessibility audit that surfaces risk, priorities, and actionable next steps.",
    description:
      "A practical overview of what makes an accessibility audit valuable, including scope definition, prioritization, manual review, documentation quality, and remediation guidance.",
    readTime: "8 min read",
    category: "Audit Process",
    content: {
      intro:
        "A strong accessibility audit does more than identify issues. It should help your team understand real user impact, prioritize the right fixes, and move toward measurable accessibility improvement.",
      sections: [
        {
          heading: "Define the audit scope clearly",
          paragraphs: [
            "Do not audit random pages in isolation. A useful audit focuses on critical templates, important user journeys, and reusable components that shape the product experience.",
            "A smaller, well-defined audit scope is often more valuable than a broad audit with weak coverage and unclear priorities."
          ],
        },
        {
          heading: "Combine automated and manual testing",
          paragraphs: [
            "Automated tools are useful for identifying patterns and common failures, but they only catch part of the accessibility picture. Manual testing is still essential for keyboard behavior, screen reader usability, focus order, interaction quality, and labeling accuracy.",
            "The most reliable audits combine both approaches."
          ],
        },
        {
          heading: "Prioritize by impact",
          paragraphs: [
            "Not every issue has the same impact. Strong audit reporting prioritizes findings based on severity, frequency, affected workflows, legal exposure, and the number of users potentially blocked by the issue."
          ],
        },
        {
          heading: "Document fixes in a way developers can use",
          paragraphs: [
            "The most useful audit findings go beyond naming the problem. They explain the affected element, summarize the issue, map it to WCAG, describe the user impact, and provide practical remediation guidance.",
            "Clear documentation shortens handoff time and makes implementation significantly more efficient."
          ],
        },
      ],
    },
  },
];

export function getHelpArticleBySlug(slug: string) {
  return helpCenterArticles.find((article) => article.slug === slug);
}