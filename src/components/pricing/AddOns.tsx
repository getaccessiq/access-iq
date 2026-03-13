import React from "react";

const addOns = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          stroke="url(#addOnGrad1)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 12h6M9 16h6"
          stroke="url(#addOnGrad1)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="addOnGrad1" x1="5" y1="12" x2="19" y2="12" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3770FD" />
            <stop offset="0.5" stopColor="#2FB8DC" />
            <stop offset="1" stopColor="#00E19A" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Express",
    subtitle: "Fixes",
    description: "Critical issues fixed within 48h",
    price: "+25-40%",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          stroke="url(#addOnGrad2)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id="addOnGrad2" x1="3" y1="12" x2="21" y2="12" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3770FD" />
            <stop offset="0.5" stopColor="#2FB8DC" />
            <stop offset="1" stopColor="#00E19A" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Legal",
    subtitle: "Support Letter",
    description: "Compliance summary for legal teams",
    price: "$1,5K-3K",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"
          stroke="url(#addOnGrad3)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id="addOnGrad3" x1="4" y1="12" x2="20" y2="12" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3770FD" />
            <stop offset="0.5" stopColor="#2FB8DC" />
            <stop offset="1" stopColor="#00E19A" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Design / UX",
    subtitle: "Accessibility",
    description: "Accessible UX enhancements",
    price: "+25-40%",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path
          d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"
          stroke="url(#addOnGrad4)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"
          stroke="url(#addOnGrad4)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id="addOnGrad4" x1="2" y1="12" x2="21.5" y2="12" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3770FD" />
            <stop offset="0.5" stopColor="#2FB8DC" />
            <stop offset="1" stopColor="#00E19A" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Custom",
    subtitle: "Requests",
    description: "Custom requests for your business",
    price: "",
  },
];

const AddOns = () => {
  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0a0e1a 0%, #0c1220 50%, #0a0e1a 100%)",
      }}
    >
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00d4aa]/20 bg-[#00d4aa]/[0.06] mb-6">
            <span className="text-[#00d4aa] text-[13px] font-medium">
              Enhance Your Plan
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-[46px] font-bold text-white leading-tight mb-5">
            Add-On Services
          </h2>
          <p className="text-gray-400 text-base max-w-lg mx-auto leading-relaxed">
            All add-ons are delivered by senior accessibility experts and aligned with 
            WCAG 2.1 AA &amp; ADA requirements.
          </p>
        </div>

        {/* Add-On Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {addOns.map((addon, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 flex flex-col text-center"
              style={{
                background: "linear-gradient(180deg, #111d2e 0%, #0c1622 100%)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {/* Icon */}
              <div className="flex justify-center mb-5">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(0,212,170,0.10)" }}
                >
                  {addon.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-white text-lg font-bold mb-1">
                {addon.title}
              </h3>

              {/* Subtitle */}
              <p className="text-[#0088cc] text-sm font-medium underline underline-offset-2 mb-3">
                {addon.subtitle}
              </p>

              {/* Description */}
              <p className="text-gray-400 text-[13px] leading-relaxed mb-4 flex-1">
                {addon.description}
              </p>

              {/* Price */}
              {addon.price && (
                <div className="text-white text-2xl font-bold mb-5">
                  {addon.price}
                </div>
              )}

              {/* CTA */}
              <button
                className="w-full flex items-center justify-center gap-2 text-white text-[13px] font-semibold py-2.5 rounded-full hover:opacity-90 transition-opacity"
                style={{
                  background: "linear-gradient(135deg, #00d4aa, #0088cc)",
                }}
              >
                Request now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AddOns;
