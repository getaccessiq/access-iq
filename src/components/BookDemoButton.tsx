"use client";

import React, { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

type BookDemoButtonProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function BookDemoButton({
  className = "",
  children = "Book Your Demo",
}: BookDemoButtonProps) {
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

  const openCalendar = async () => {
    const cal = await getCalApi();
    cal("modal", {
      calLink: "accessiq/demo",
      config: {
        layout: "month_view",
      },
    });
  };

  return (
    <button type="button" onClick={openCalendar} className={className}>
      {children}
    </button>
  );
}