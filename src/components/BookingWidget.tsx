"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

declare global {
  interface Window {
    SimplybookWidget?: new (config: Record<string, unknown>) => unknown;
  }
}

const SIMPLYBOOK_SCRIPT_SRC = "https://widget.simplybook.it/v2/widget/widget.js";
const SIMPLYBOOK_CONTAINER_ID = "sbw_xe3kg9";

const widgetConfig = {
  widget_type: "iframe",
  url: "https://accessive.simplybook.it",
  theme: "adacompliant",
  theme_settings: {
    timeline_hide_unavailable: "1",
    hide_past_days: "0",
    timeline_show_end_time: "0",
    timeline_modern_display: "as_slots",
    display_item_mode: "block",
    sb_review_image: "",
    hide_img_mode: "0",
    show_sidebar: "1",
  },
  timeline: "modern",
  datepicker: "top_calendar",
  is_rtl: false,
  app_config: {
    clear_session: 0,
    predefined: [],
    allow_switch_to_ada: 0,
  },
  container_id: SIMPLYBOOK_CONTAINER_ID,
} as const;

type WidgetStatus = "loading" | "ready" | "error";

export default function BookingWidget() {
  const widgetContainerRef = useRef<HTMLDivElement | null>(null);
  const [status, setStatus] = useState<WidgetStatus>("loading");

  const config = useMemo(() => widgetConfig, []);

  useEffect(() => {
    let cancelled = false;

    const initWidget = () => {
      if (cancelled || !window.SimplybookWidget) return;

      try {
        if (widgetContainerRef.current) {
          widgetContainerRef.current.innerHTML = "";
        }

        new window.SimplybookWidget(config);

        if (!cancelled) {
          setStatus("ready");
        }
      } catch (error) {
        console.error("Failed to initialize SimplyBook widget:", error);
        if (!cancelled) {
          setStatus("error");
        }
      }
    };

    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[src="${SIMPLYBOOK_SCRIPT_SRC}"]`
    );

    if (window.SimplybookWidget) {
      initWidget();
      return () => {
        cancelled = true;
      };
    }

    if (existingScript) {
      const handleLoad = () => initWidget();
      const handleError = () => {
        if (!cancelled) setStatus("error");
      };

      existingScript.addEventListener("load", handleLoad);
      existingScript.addEventListener("error", handleError);

      return () => {
        cancelled = true;
        existingScript.removeEventListener("load", handleLoad);
        existingScript.removeEventListener("error", handleError);
      };
    }

    const script = document.createElement("script");
    script.src = SIMPLYBOOK_SCRIPT_SRC;
    script.async = true;

    script.onload = () => initWidget();
    script.onerror = () => {
      if (!cancelled) setStatus("error");
    };

    document.head.appendChild(script);

    return () => {
      cancelled = true;
      script.onload = null;
      script.onerror = null;
    };
  }, [config]);

  return (
    <div className="relative">
      {status === "loading" && (
        <div className="absolute inset-0 z-10 flex min-h-[760px] items-center justify-center rounded-[28px] border border-white/10 bg-[#091527]/80 backdrop-blur-md">
          <div className="text-center">
            <div className="mx-auto mb-4 h-11 w-11 animate-spin rounded-full border-2 border-white/15 border-t-white" />
            <p className="text-sm font-medium text-white/75">
              Booking widget is loading…
            </p>
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="absolute inset-0 z-10 flex min-h-[760px] items-center justify-center rounded-[28px] border border-red-400/20 bg-[#091527]/90 backdrop-blur-md">
          <div className="max-w-sm text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-400/15 text-red-200">
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 9v4" />
                <path d="M12 17h.01" />
                <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
              </svg>
            </div>

            <h3 className="text-lg font-semibold text-white">
              Unable to load the booking widget
            </h3>
            <p className="mt-2 text-sm leading-6 text-white/65">
              Please refresh the page or try again in a moment.
            </p>
          </div>
        </div>
      )}

      <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white shadow-[0_35px_120px_rgba(0,0,0,0.35)]">
        <div
          id={SIMPLYBOOK_CONTAINER_ID}
          ref={widgetContainerRef}
          className="min-h-[760px]"
        />
      </div>
    </div>
  );
}