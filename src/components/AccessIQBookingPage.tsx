"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

export default function AccessIQBookingPage() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi();

      cal("ui", {
        styles: {
          branding: {
            brandColor: "#0c8d88",
          },
        },
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <section className="w-full py-20">
      <div className="mx-auto max-w-6xl px-4">

        {/* HEADER */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-semibold tracking-tight">
            Book your free demo
          </h1>
          <p className="mt-2 text-neutral-500">
            15-minute accessibility audit
          </p>
        </div>

        {/* CARD */}
        <div className="rounded-2xl border border-neutral-200 shadow-lg overflow-hidden">
          <div className="h-[700px] w-full">
            <Cal
              calLink="accessiq/demo"
              style={{ width: "100%", height: "100%" }}
              config={{
                layout: "month_view",
              }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}