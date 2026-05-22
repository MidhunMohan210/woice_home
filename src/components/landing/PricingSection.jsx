import { ArrowRight, Check, ShieldCheck } from "lucide-react";

const planHighlights = [
  "Unlimited feedback collection",
  "Private feedback inbox",
  "Testimonial approval system",
  "Google review redirect",
  "Website testimonial widget",
  // "Email support",
];

function HighlightItem({ item }) {
  return (
    <li className="flex items-start gap-2.5 text-[13px] leading-6 text-white/52 sm:gap-3 sm:text-[15px]">
      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-400/10 sm:h-[18px] sm:w-[18px]">
        <Check className="size-2.5 stroke-[2.5] text-emerald-400" />
      </span>
      <span>{item}</span>
    </li>
  );
}

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-[#080809] py-12 sm:py-28"
    >
      {/* Ambient background glows */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 72% 54% at 50% 40%, rgba(109,106,246,0.09) 0%, transparent 70%), " +
            "radial-gradient(ellipse 40% 30% at 80% 70%, rgba(167,139,250,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="section-shell relative">
        {/* ── Header ── */}
        <div className="mx-auto max-w-xl text-center sm:max-w-3xl">
          <div className="mb-2.5 flex items-center justify-center gap-2 sm:mb-4 sm:gap-2.5">
            <div className="h-px w-4 bg-white/14 sm:w-7" />
            <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-white/80">
              Pricing
            </p>
            <div className="h-px w-4 bg-white/14 sm:w-7" />
          </div>

          <h2 className="text-balance text-[1.45rem] font-semibold tracking-tight text-white/92 sm:text-[2.8rem]">
            Free{" "}
            <em className="font-semibold not-italic text-violet-400/90">
              during
            </em>{" "}
            beta.
          </h2>
          <p className="mx-auto mt-2.5 max-w-sm text-pretty text-[12px] leading-5.5 text-white/48 sm:mt-4 sm:max-w-xl sm:text-[15px] sm:leading-7">
           Start collecting feedback and testimonials for free while Woice is in beta. No credit card. No hidden charges.
          </p>
        </div>

        {/* ── Card ── */}
        <div className="relative mx-auto mt-8 max-w-3xl overflow-hidden rounded-[22px] p-3.5 sm:mt-14 sm:rounded-[28px] sm:p-8">
          {/* Gradient border layer */}
          <div
              className="pointer-events-none absolute inset-0 rounded-[22px] sm:rounded-[28px]"
            style={{
              background:
                "linear-gradient(#0e0f12, #0e0f12) padding-box, " +
                "linear-gradient(135deg, rgba(167,139,250,0.3) 0%, rgba(109,106,246,0.15) 40%, rgba(255,255,255,0.06) 100%) border-box",
              border: "1px solid transparent",
              boxShadow:
                "0 0 0 1px rgba(255,255,255,0.04) inset, " +
                "0 32px 80px rgba(0,0,0,0.55), " +
                "0 4px 20px rgba(0,0,0,0.3)",
            }}
          />

          {/* Top hairline glow */}
          <div
            className="pointer-events-none absolute inset-x-[8%] top-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(167,139,250,0.45), rgba(109,106,246,0.3), transparent)",
            }}
          />

          {/* Corner ambient blob */}
          <div
            className="pointer-events-none absolute -right-14 -top-14 h-56 w-56 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(109,106,246,0.11) 0%, transparent 70%)",
            }}
          />

          {/* Card content */}
          <div className="relative">
            {/* Top row */}
            <div className="flex flex-col gap-4 border-b border-white/8 pb-5 sm:gap-6 sm:pb-8 sm:flex-row sm:items-end sm:justify-between">
              <div>
                {/* Badge */}
                <div className="inline-flex items-center gap-1 rounded-full border border-violet-400/20 bg-violet-400/10 px-2 py-1 text-[8px] font-semibold uppercase tracking-[0.14em] text-violet-400 sm:px-3 sm:text-[10px] sm:tracking-[0.18em]">
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-violet-400"
                    style={{
                      boxShadow: "0 0 6px #a78bfa",
                      animation: "pricing-pulse 2.4s ease-in-out infinite",
                    }}
                  />
                  Beta plan
                </div>

                <h3 className="mt-2.5 text-[1.35rem] font-semibold tracking-tight text-white/92 sm:mt-4 sm:text-3xl">
                  Woice Beta
                </h3>
                <p className="mt-1.5 max-w-[30ch] text-[12px] leading-5.5 text-white/48 sm:max-w-[34ch] sm:text-[15px]">
                  Everything you need to collect feedback, manage testimonials,
                  and build trust — free during beta.{" "}
                </p>
              </div>

              {/* Price */}
              <div className="shrink-0 sm:text-right">
                <div>
                  <span className="text-[2rem] font-semibold tracking-tight text-white/92 sm:text-5xl">
                    ₹0
                  </span>
                  <span className="ml-1.5 text-[12px] font-medium text-white/28 sm:ml-2 sm:text-base">
                    / month
                  </span>
                </div>
                <p className="mt-1 text-[12px] text-white/28 sm:mt-2 sm:text-sm">
                  No credit card required
                </p>
              </div>
            </div>

            {/* Features */}
            <ul className="mt-5 grid gap-2 sm:mt-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-4">
              {planHighlights.map((item) => (
                <HighlightItem key={item} item={item} />
              ))}
            </ul>

            {/* Actions */}
            <div className="mt-5 flex w-full flex-col gap-2 sm:mt-8 sm:flex-row sm:gap-3">
         
              <button
               style={{
                  boxShadow:
                    "0 0 0 1px rgba(109,106,246,0.5) inset, 0 8px 20px rgba(109,106,246,0.28)",
                }}
                href="#faq"
                className="inline-flex h-10 items-center justify-center rounded-full bg-indigo-500 px-4 text-[13px] font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:bg-indigo-400 active:translate-y-0 sm:h-12 sm:w-3/4 sm:px-6 sm:text-sm"
              >
                Join beta
              </button>
              <a
                href="#faq"
                className="inline-flex h-10 items-center justify-center rounded-full border border-white/10 px-4 text-[13px] font-semibold text-white/52 transition-all duration-200 hover:border-white/14 hover:bg-white/[0.03] hover:text-white/86 sm:h-12 sm:min-w-[160px] sm:px-6 sm:text-sm"
              >
                Read FAQ
              </a>
            </div>
          </div>
        </div>

        {/* Guarantee note */}
        <p className="mx-auto mt-3.5 flex max-w-xl items-center justify-center gap-1.5 px-3 text-center text-[10px] leading-4.5 text-white/24 sm:mt-5 sm:max-w-3xl sm:text-[12px]">
          <ShieldCheck className="size-3.5 shrink-0" strokeWidth={2} />
          Cancel anytime · Price locked for early users · Upgrade options coming
          soon
        </p>
      </div>

      <style>{`
        @keyframes pricing-pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.35; }
        }
      `}</style>
    </section>
  );
}
