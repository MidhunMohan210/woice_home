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
    <li className="flex items-start gap-3 text-sm leading-6 text-white/52 sm:text-[15px]">
      <span className="mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-400/10">
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
      className="relative overflow-hidden bg-[#080809] py-20 sm:py-28"
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
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 flex items-center justify-center gap-2.5">
            <div className="h-px w-7 bg-white/14" />
            <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-white/28">
              Pricing
            </p>
            <div className="h-px w-7 bg-white/14" />
          </div>

          <h2 className="text-balance text-[2rem] font-semibold tracking-tight text-white/92 sm:text-[2.8rem]">
            Free{" "}
            <em className="font-semibold not-italic text-violet-400/90">
              during
            </em>{" "}
            beta.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-[14px] leading-7 text-white/48 sm:text-[15px]">
           Start collecting feedback and testimonials for free while Woice is in beta. No credit card. No hidden charges.
          </p>
        </div>

        {/* ── Card ── */}
        <div className="relative mx-auto mt-12 max-w-3xl overflow-hidden rounded-[28px] p-6 sm:mt-14 sm:p-8">
          {/* Gradient border layer */}
          <div
            className="pointer-events-none absolute inset-0 rounded-[28px]"
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
            <div className="flex flex-col gap-6 border-b border-white/8 pb-8 sm:flex-row sm:items-end sm:justify-between">
              <div>
                {/* Badge */}
                <div className="inline-flex items-center gap-1.5 rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-violet-400">
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-violet-400"
                    style={{
                      boxShadow: "0 0 6px #a78bfa",
                      animation: "pricing-pulse 2.4s ease-in-out infinite",
                    }}
                  />
                  Beta plan
                </div>

                <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white/92">
                  Woice Beta
                </h3>
                <p className="mt-2 max-w-[34ch] text-sm leading-6 text-white/48 sm:text-[15px]">
                  Everything you need to collect feedback, manage testimonials,
                  and build trust — free during beta.{" "}
                </p>
              </div>

              {/* Price */}
              <div className="shrink-0 sm:text-right">
                <div>
                  <span className="text-5xl font-semibold tracking-tight text-white/92">
                    ₹0
                  </span>
                  <span className="ml-2 text-base font-medium text-white/28">
                    / month
                  </span>
                </div>
                <p className="mt-2 text-sm text-white/28">
                  No credit card required
                </p>
              </div>
            </div>

            {/* Features */}
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-4">
              {planHighlights.map((item) => (
                <HighlightItem key={item} item={item} />
              ))}
            </ul>

            {/* Actions */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {/* <a
                href="#"
                className="group  inline-flex h-20 sm:h-12 flex-1 items-center justify-center gap-2 rounded-full bg-indigo-500 px-6 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:bg-indigo-400 active:translate-y-0"
                style={{
                  boxShadow:
                    "0 0 0 1px rgba(109,106,246,0.5) inset, 0 8px 20px rgba(109,106,246,0.28)",
                }}
              >
                Join beta
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a> */}
              <a
               style={{
                  boxShadow:
                    "0 0 0 1px rgba(109,106,246,0.5) inset, 0 8px 20px rgba(109,106,246,0.28)",
                }}
                href="#faq"
                className="inline-flex h-12 items-center justify-center rounded-full bg-indigo-500 px-6 text-sm font-semibold  transition-all duration-200 hover:-translate-y-px hover:bg-indigo-400 active:translate-y-0 text-white "
              >
                Join beta
              </a>
              <a
                href="#faq"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 px-6 text-sm font-semibold text-white/52 transition-all duration-200 hover:border-white/14 hover:bg-white/[0.03] hover:text-white/86 sm:min-w-[160px]"
              >
                Read FAQ
              </a>
            </div>
          </div>
        </div>

        {/* Guarantee note */}
        <p className="mx-auto mt-5 flex max-w-3xl items-center justify-center gap-1.5 text-[12px] text-white/24">
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
