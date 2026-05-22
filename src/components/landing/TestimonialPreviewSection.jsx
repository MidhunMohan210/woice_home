import Image from "next/image";

import dashboardPreview from "../../assets/product preview/dashboard.png";

export default function TestimonialPreviewSection() {
  return (
    <section
      id="product-preview"
      className="relative -mt-10 pb-16 sm:-mt-14 sm:pb-20 lg:-mt-24"
    >
      <div className="section-shell">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center sm:mb-10">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Product dashboard
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              See the full feedback flow in one clean workspace.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              Monitor incoming feedback, protect private complaints, and turn
              approved responses into proof your next customer can trust.
            </p>
          </div>

          <div className="relative rounded-[28px] border border-white/70 bg-white/70 p-2 shadow-[0_34px_90px_-36px_rgba(15,23,42,0.35)] backdrop-blur-xl sm:rounded-[36px] sm:p-3">
            <div className="pointer-events-none absolute inset-x-10 -top-6 h-24 rounded-full bg-sky-300/25 blur-3xl sm:inset-x-20 sm:h-32" />
            <div className="relative overflow-hidden rounded-[22px] border border-slate-200/80 bg-slate-950 shadow-[0_18px_50px_-24px_rgba(2,6,23,0.5)] sm:rounded-[30px]">
              <Image
                src={dashboardPreview}
                alt="Woice product dashboard preview"
                priority
                className="h-auto w-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
