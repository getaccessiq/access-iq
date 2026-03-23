"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

type Intent = "demo" | "question" | "audit";

type QualificationForm = {
  name: string;
  email: string;
  website: string;
  companySize: string;
  message: string;
};

type CrispCommand = [string, unknown, unknown?];
type CrispQueue = CrispCommand[] & {
  push: (...items: CrispCommand[]) => number;
};

declare global {
  interface Window {
    $crisp?: CrispQueue;
    CRISP_WEBSITE_ID?: string;
  }

  interface WindowEventMap {
    "open-accessiq-chat": CustomEvent<{ intent?: Intent }>;
    "close-accessiq-chat": Event;
  }
}

type PremiumAccessiQChatProps = {
  showLauncher?: boolean;
};

const enableCrisp = true;

const fallbackLinks = {
  demo: "/book-demo",
  audit: "/contact?intent=audit",
  contact: "/contact",
};

const companySizes = [
  "1–10 employees",
  "11–50 employees",
  "51–200 employees",
  "201+ employees",
];

const intentConfig: Record<
  Intent,
  {
    title: string;
    description: string;
    intro: string;
    icon: React.ReactNode;
    defaultMessage: string;
  }
> = {
  demo: {
    title: "Book a demo",
    description: "See how AccessiQ improves accessibility workflows.",
    intro: "We’ll guide you through the platform and show the best setup for your team.",
    icon: <CalendarDays className="h-5 w-5" />,
    defaultMessage: "I would like to book a demo for AccessiQ.",
  },
  question: {
    title: "Ask a question",
    description: "Get guidance on compliance, audits, or remediation.",
    intro: "Tell us what you need help with and we’ll route you to the right specialist.",
    icon: <MessageSquareText className="h-5 w-5" />,
    defaultMessage:
      "I have a question about accessibility compliance and remediation.",
  },
  audit: {
    title: "Request an audit",
    description: "Start with a structured accessibility review.",
    intro: "Share your website and goals so we can recommend the right audit path.",
    icon: <ShieldCheck className="h-5 w-5" />,
    defaultMessage: "I would like to request an accessibility audit.",
  },
};

export function openAccessiQChat(intent?: Intent) {
  if (typeof window === "undefined") return;

  window.dispatchEvent(
    new CustomEvent("open-accessiq-chat", {
      detail: intent ? { intent } : {},
    })
  );
}

export function closeAccessiQChat() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event("close-accessiq-chat"));
}

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function useCrisp() {
  const hideLauncherDom = () => {
    if (typeof document === "undefined") return;

    const styleId = "accessiq-hide-crisp-launcher";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.innerHTML = `
        #crisp-chatbox .cc-kv6t,
        #crisp-chatbox .cc-1brb6,
        #crisp-chatbox .cc-1xry,
        #crisp-chatbox .cc-unoo,
        #crisp-chatbox [class*="launcher"],
        #crisp-chatbox [class*="button"] {
          opacity: 0 !important;
          visibility: hidden !important;
          pointer-events: none !important;
        }
      `;
      document.head.appendChild(style);
    }
  };

  useEffect(() => {
    if (!enableCrisp) return;
    if (typeof window === "undefined") return;

    const websiteId = process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID;
    if (!websiteId) return;

    if (!window.$crisp) {
      window.$crisp = [] as unknown as CrispQueue;
    }

    window.CRISP_WEBSITE_ID = websiteId;

    window.$crisp.push(["safe", true]);
    window.$crisp.push(["do", "chat:hide"]);
    hideLauncherDom();

    const existingScript = document.querySelector('script[data-crisp="true"]');
    if (existingScript) return;

    const script = document.createElement("script");
    script.src = "https://client.crisp.chat/l.js";
    script.async = true;
    script.setAttribute("data-crisp", "true");

    script.onload = () => {
      window.$crisp?.push(["do", "chat:hide"]);
      hideLauncherDom();

      setTimeout(() => {
        window.$crisp?.push(["do", "chat:hide"]);
        hideLauncherDom();
      }, 500);
    };

    document.head.appendChild(script);
  }, []);

  const push = (command: CrispCommand) => {
    if (typeof window === "undefined") return;
    if (!window.$crisp) return;
    window.$crisp.push(command);
  };

  const openChat = () => {
    push(["do", "chat:show"]);
    push(["do", "chat:open"]);

    setTimeout(() => {
      const crispRoot = document.getElementById("crisp-chatbox");
      if (crispRoot) {
        const possibleLaunchers = crispRoot.querySelectorAll(
          '[class*="launcher"], [class*="button"], .cc-kv6t, .cc-1brb6, .cc-1xry, .cc-unoo'
        );

        possibleLaunchers.forEach((el) => {
          const htmlEl = el as HTMLElement;
          htmlEl.style.opacity = "0";
          htmlEl.style.visibility = "hidden";
          htmlEl.style.pointerEvents = "none";
        });
      }
    }, 250);
  };

  const hideChat = () => {
    push(["do", "chat:hide"]);
  };

  const sendMessage = (message: string) => {
    push(["do", "message:send", ["text", message]]);
  };

  const setUser = (data: Partial<QualificationForm>) => {
    if (data.email && isValidEmail(data.email)) {
      push(["set", "user:email", [data.email]]);
    }

    if (data.name?.trim()) {
      push(["set", "user:nickname", [data.name.trim()]]);
    }
  };

  const setSessionData = (data: Record<string, string>) => {
    const entries = Object.entries(data)
      .filter(([, value]) => value !== "")
      .map(([key, value]) => [key, value] as [string, string]);

    if (!entries.length) return;

    push(["set", "session:data", [entries]]);
  };

  return { openChat, hideChat, sendMessage, setUser, setSessionData };
}

function PremiumOptionCard({
  title,
  description,
  icon,
  onClick,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative w-full overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-4 text-left transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/30 hover:bg-white/[0.06]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(124,58,237,0.18),transparent_40%)] opacity-0 transition duration-300 group-hover:opacity-100" />
      <div className="relative flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-white shadow-[0_10px_30px_rgba(0,0,0,0.24)]">
          {icon}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-[15px] font-semibold text-white sm:text-base">
              {title}
            </h3>
            <ArrowRight className="h-4 w-4 shrink-0 text-white/50 transition duration-300 group-hover:translate-x-1 group-hover:text-white" />
          </div>
          <p className="mt-1 text-sm leading-6 text-white/68">{description}</p>
        </div>
      </div>
    </button>
  );
}

export default function PremiumAccessiQChat({
  showLauncher = false,
}: PremiumAccessiQChatProps) {
  const [open, setOpen] = useState(false);
  const [selectedIntent, setSelectedIntent] = useState<Intent | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  const [form, setForm] = useState<QualificationForm>({
    name: "",
    email: "",
    website: "",
    companySize: "",
    message: "",
  });

  const { openChat, hideChat, sendMessage, setUser, setSessionData } = useCrisp();

  useEffect(() => {
    const openHandler = (event: CustomEvent<{ intent?: Intent }>) => {
      setOpen(true);
      setSubmitted(false);

      if (event.detail?.intent) {
        const intent = event.detail.intent;
        setSelectedIntent(intent);

        setForm((prev) => ({
          ...prev,
          message: prev.message || intentConfig[intent].defaultMessage,
        }));
      }
    };

    const closeHandler = () => {
      setOpen(false);
    };

    window.addEventListener("open-accessiq-chat", openHandler as EventListener);
    window.addEventListener("close-accessiq-chat", closeHandler);

    return () => {
      window.removeEventListener(
        "open-accessiq-chat",
        openHandler as EventListener
      );
      window.removeEventListener("close-accessiq-chat", closeHandler);
    };
  }, []);

  useEffect(() => {
    const handleOutside = (event: MouseEvent) => {
      if (!open || !panelRef.current) return;
      if (!panelRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  const isValid = useMemo(() => {
    if (!selectedIntent) return false;
    return Boolean(
      form.name.trim() && form.email.trim() && isValidEmail(form.email.trim())
    );
  }, [form.name, form.email, selectedIntent]);

  const chooseIntent = (intent: Intent) => {
    setSelectedIntent(intent);
    setSubmitted(false);

    setForm((prev) => ({
      ...prev,
      message: prev.message || intentConfig[intent].defaultMessage,
    }));
  };

  const resetToOverview = () => {
    setSubmitted(false);
    setSelectedIntent(null);
  };

  const handlePrimaryAction = () => {
    if (!selectedIntent) return;

    const payload = {
      intent: selectedIntent,
      name: form.name.trim(),
      email: form.email.trim(),
      website: form.website.trim(),
      companySize: form.companySize.trim(),
      message: form.message.trim(),
    };

    setUser({
      name: payload.name,
      email: payload.email,
    });

    setSessionData({
      accessiq_intent: payload.intent,
      accessiq_website: payload.website || "not_provided",
      accessiq_company_size: payload.companySize || "not_provided",
    });

    const composedMessage = [
      `Intent: ${payload.intent}`,
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      payload.website ? `Website: ${payload.website}` : null,
      payload.companySize ? `Company size: ${payload.companySize}` : null,
      payload.message ? `Message: ${payload.message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    if (enableCrisp && process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID) {
      sendMessage(composedMessage);
      hideChat();
      setSubmitted(true);
      return;
    }

    if (selectedIntent === "demo") {
      window.location.href = fallbackLinks.demo;
      return;
    }

    if (selectedIntent === "audit") {
      window.location.href = fallbackLinks.audit;
      return;
    }

    window.location.href = fallbackLinks.contact;
  };

  const currentIntent = selectedIntent ? intentConfig[selectedIntent] : null;

  return (
    <>
      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[80] bg-slate-950/40 backdrop-blur-[3px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        ) : null}
      </AnimatePresence>

      <div className="pointer-events-none fixed inset-x-0 bottom-5 z-[90] flex justify-end px-4 sm:bottom-6 sm:px-6 lg:px-8">
        <div className="pointer-events-auto relative w-full max-w-[440px]">
          <AnimatePresence>
            {open ? (
              <motion.div
                ref={panelRef}
                initial={{ opacity: 0, y: 20, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.985 }}
                transition={{ duration: 0.24, ease: "easeOut" }}
                className="mb-4 overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(9,15,30,0.96),rgba(2,6,23,0.98))] shadow-[0_32px_110px_rgba(2,6,23,0.60)]"
              >
                <div className="relative overflow-hidden border-b border-white/10 px-5 pb-5 pt-5 sm:px-6">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.22),transparent_30%),radial-gradient(circle_at_top_right,rgba(124,58,237,0.20),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent)]" />
                  <div className="relative flex items-start justify-between gap-4">
                    <div>
                      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-cyan-200/85">
                        <Sparkles className="h-3.5 w-3.5" />
                        Accessibility support
                      </div>

                      <h2 className="mt-3 text-xl font-semibold tracking-tight text-white sm:text-[22px]">
                        Talk to an accessibility expert
                      </h2>

                      <p className="mt-2 max-w-[28rem] text-sm leading-6 text-white/68">
                        Premium guidance for demos, audits, remediation, and accessibility compliance questions.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-white/70 transition hover:bg-white/10 hover:text-white"
                      aria-label="Close chat panel"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                <div className="space-y-4 px-5 py-5 sm:px-6 sm:py-6">
                  {!selectedIntent && !submitted ? (
                    <>
                      <div className="grid gap-3">
                        <PremiumOptionCard
                          title={intentConfig.demo.title}
                          description={intentConfig.demo.description}
                          icon={intentConfig.demo.icon}
                          onClick={() => chooseIntent("demo")}
                        />
                        <PremiumOptionCard
                          title={intentConfig.question.title}
                          description={intentConfig.question.description}
                          icon={intentConfig.question.icon}
                          onClick={() => chooseIntent("question")}
                        />
                        <PremiumOptionCard
                          title={intentConfig.audit.title}
                          description={intentConfig.audit.description}
                          icon={intentConfig.audit.icon}
                          onClick={() => chooseIntent("audit")}
                        />
                      </div>

                      <div className="rounded-[26px] border border-emerald-400/15 bg-[linear-gradient(180deg,rgba(16,185,129,0.10),rgba(16,185,129,0.05))] px-4 py-3">
                        <div className="flex items-center gap-2 text-sm font-medium text-emerald-200">
                          <CheckCircle2 className="h-4 w-4" />
                          Fast route to the right team
                        </div>
                        <p className="mt-1 text-sm leading-6 text-emerald-50/75">
                          Ideal for compliance questions, demo requests, audit planning, and remediation guidance.
                        </p>
                      </div>
                    </>
                  ) : submitted ? (
                    <div className="rounded-[28px] border border-emerald-400/20 bg-[linear-gradient(180deg,rgba(16,185,129,0.10),rgba(16,185,129,0.05))] p-5">
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-400/15 text-emerald-200">
                          <CheckCircle2 className="h-5 w-5" />
                        </div>

                        <div>
                          <h3 className="text-base font-semibold text-white">
                            Your request is ready
                          </h3>
                          <p className="mt-1 text-sm leading-6 text-white/72">
                            We prepared your details for the live chat so the conversation can start with context.
                          </p>
                        </div>
                      </div>

                      <div className="mt-5 flex flex-wrap gap-3">
                        <button
                          type="button"
                          onClick={() => {
                            setOpen(false);

                            setTimeout(() => {
                              openChat();
                            }, 180);
                          }}
                          className="inline-flex items-center justify-center rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-95"
                        >
                          Open live chat
                        </button>

                        <button
                          type="button"
                          onClick={resetToOverview}
                          className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                        >
                          Back
                        </button>
                      </div>
                    </div>
                  ) : currentIntent ? (
                    <div className="space-y-4">
                      <button
                        type="button"
                        onClick={resetToOverview}
                        className="text-sm font-medium text-cyan-200/85 transition hover:text-cyan-100"
                      >
                        ← Back to options
                      </button>

                      <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-4">
                        <div className="flex items-start gap-3">
                          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-white">
                            {currentIntent.icon}
                          </div>

                          <div>
                            <h3 className="text-base font-semibold text-white">
                              {currentIntent.title}
                            </h3>
                            <p className="mt-1 text-sm leading-6 text-white/68">
                              {currentIntent.intro}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="grid gap-3 sm:grid-cols-2">
                        <input
                          value={form.name}
                          onChange={(e) =>
                            setForm((prev) => ({
                              ...prev,
                              name: e.target.value,
                            }))
                          }
                          placeholder="Your name"
                          className="h-12 rounded-2xl border border-white/10 bg-white/[0.05] px-4 text-sm text-white outline-none placeholder:text-white/35 transition focus:border-cyan-300/40 focus:bg-white/[0.07]"
                        />

                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) =>
                            setForm((prev) => ({
                              ...prev,
                              email: e.target.value,
                            }))
                          }
                          placeholder="Work email"
                          className="h-12 rounded-2xl border border-white/10 bg-white/[0.05] px-4 text-sm text-white outline-none placeholder:text-white/35 transition focus:border-cyan-300/40 focus:bg-white/[0.07]"
                        />
                      </div>

                      <div className="grid gap-3 sm:grid-cols-[1.2fr_1fr]">
                        <input
                          value={form.website}
                          onChange={(e) =>
                            setForm((prev) => ({
                              ...prev,
                              website: e.target.value,
                            }))
                          }
                          placeholder="Website URL"
                          className="h-12 w-full rounded-2xl border border-white/10 bg-white/[0.05] px-4 text-sm text-white outline-none placeholder:text-white/35 transition focus:border-cyan-300/40 focus:bg-white/[0.07]"
                        />

                        <select
                          value={form.companySize}
                          onChange={(e) =>
                            setForm((prev) => ({
                              ...prev,
                              companySize: e.target.value,
                            }))
                          }
                          className="h-12 w-full rounded-2xl border border-white/10 bg-slate-900 px-4 pr-10 text-sm text-white outline-none transition focus:border-cyan-300/40"
                        >
                          <option value="">Company size</option>
                          {companySizes.map((size) => (
                            <option key={size} value={size}>
                              {size}
                            </option>
                          ))}
                        </select>
                      </div>

                      <textarea
                        value={form.message}
                        onChange={(e) =>
                          setForm((prev) => ({
                            ...prev,
                            message: e.target.value,
                          }))
                        }
                        placeholder="Tell us what you need help with"
                        rows={4}
                        className="w-full rounded-[24px] border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 transition focus:border-cyan-300/40 focus:bg-white/[0.07]"
                      />

                      <button
                        type="button"
                        onClick={handlePrimaryAction}
                        disabled={!isValid}
                        className={cn(
                          "inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl text-sm font-semibold transition",
                          isValid
                            ? "bg-[linear-gradient(135deg,#7c3aed_0%,#2563eb_55%,#06b6d4_100%)] text-white shadow-[0_16px_40px_rgba(37,99,235,0.35)] hover:brightness-110"
                            : "cursor-not-allowed bg-white/[0.08] text-white/40"
                        )}
                      >
                        Continue to live chat
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  ) : null}
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>

          {showLauncher ? (
            <motion.button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.985 }}
              className="group relative flex w-full items-center justify-between overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(135deg,rgba(124,58,237,0.95),rgba(37,99,235,0.96),rgba(6,182,212,0.92))] px-4 py-4 text-left shadow-[0_18px_50px_rgba(29,78,216,0.42)]"
              aria-expanded={open}
              aria-label="Open accessibility chat"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.22),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.08),transparent)]" />
              <div className="relative flex min-w-0 items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/14 backdrop-blur-md">
                  <MessageSquareText className="h-5 w-5 text-white" />
                </div>

                <div className="min-w-0">
                  <div className="truncate text-sm font-semibold text-white sm:text-[15px]">
                    Talk to an accessibility expert
                  </div>
                  <div className="truncate text-xs text-white/78 sm:text-sm">
                    Demo, audit, or live guidance
                  </div>
                </div>
              </div>

              <div className="relative flex items-center gap-2 pl-3 text-white/90">
                <div className="hidden items-center gap-2 rounded-full bg-black/14 px-2.5 py-1 text-[11px] font-medium sm:inline-flex">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-300" />
                  Online
                </div>

                <ArrowRight
                  className={cn(
                    "h-4 w-4 transition duration-300",
                    open && "rotate-90"
                  )}
                />
              </div>
            </motion.button>
          ) : null}
        </div>
      </div>
    </>
  );
}