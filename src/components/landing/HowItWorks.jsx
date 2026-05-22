const steps = [
  {
    number: "01",
    title: "Share your feedback link",
    description:
      "Send your Woice link through WhatsApp, invoice, QR code, or follow-up message.",
  },
  {
    number: "02",
    title: "Woice separates responses",
    description:
      "Happy customers move toward testimonials. Low-rated feedback stays private.",
  },
  {
    number: "03",
    title: "Publish trust, resolve issues",
    description:
      "Approve testimonials for your website and handle complaints before they go public.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-[#212529] py-16 text-white scroll-mt-20 sm:py-20 sm:scroll-mt-28"
    >
      <div className="section-shell">
        <div className="max-w-2xl">
          <div className="flex items-center gap-4 mb-3">
            <div className="h-px w-6 bg-slate-300 sm:w-8" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/45 sm:text-xs">
              How it works
            </p>
          </div>

          <h2 className="mt-4 max-w-[18ch] text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl lg:leading-tight">
            How Woice works
          </h2>
        </div>

        <div className="mt-10 border-t border-white/8 sm:mt-12">
          {steps.map((step) => (
            <div
              key={step.number}
              className="grid gap-4 border-b border-white/8 py-7 sm:py-8 md:grid-cols-[88px_minmax(0,1fr)_minmax(0,1.55fr)] md:gap-6 lg:grid-cols-[96px_minmax(0,0.95fr)_minmax(0,1.65fr)] lg:gap-8"
            >
              <div className="text-2xl font-medium tracking-tight text-white/35 sm:text-3xl">
                {step.number}
              </div>

              <h3 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                {step.title}
              </h3>

              <p className="max-w-xl text-xs leading-6 text-white/58 sm:text-sm sm:leading-7">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
