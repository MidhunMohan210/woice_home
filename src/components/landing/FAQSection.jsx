const faqs = [
  {
    question: "Can I keep negative feedback private?",
    answer:
      "Yes. Woice separates private complaints from public-ready praise so your team can respond internally first.",
  },
  {
    question: "Can I publish testimonials on my website?",
    answer:
      "Yes. Approved customer feedback can be turned into testimonial content that is ready to embed on your site.",
  },
  {
    question: "Does Woice help with Google reviews too?",
    answer:
      "Yes. When a customer has a strong experience, you can guide them toward leaving a public review.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-16 sm:py-20">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
            FAQ
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            A few quick answers before you get started.
          </h2>
        </div>

        <div className="mt-10 grid gap-4">
          {faqs.map((item) => (
            <div
              key={item.question}
              className="rounded-3xl border border-black/8 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold tracking-tight">
                {item.question}
              </h3>
              <p className="mt-3 max-w-3xl text-base leading-7 text-muted-foreground">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
