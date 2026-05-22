"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    value: "item-1",
    question: "Is Woice free to use?",
    answer:
      "Yes. Woice is currently free during beta. You can collect feedback, manage testimonials, and use the website widget without payment while the beta is active.",
  },
  {
    value: "item-2",
    question: "What happens to negative feedback?",
    answer:
      "Low-rated feedback is kept private inside your dashboard. It does not appear publicly, so your team can understand the issue, respond professionally, and resolve it before it affects your reputation.",
  },
  {
    value: "item-3",
    question: "Can I show testimonials on my website?",
    answer:
      "Yes. Once you approve a testimonial, you can display it on your public testimonial page or embed it directly on your website using the Woice testimonial widget.",
  },
  {
    value: "item-4",
    question: "Can Woice help me get more Google reviews?",
    answer:
      "Yes. After a happy customer shares positive feedback, Woice can guide them to your Google review link. This helps turn private positive feedback into public trust.",
  },
  {
    value: "item-5",
    question: "Do I need technical knowledge to set it up?",
    answer:
      "No. Woice is designed to be simple for business owners. During beta, setup support can also be provided so you can start collecting feedback quickly.",
  },
  {
    value: "item-6",
    question: "Who is Woice best for?",
    answer:
      "Woice is best for clinics, salons, coaching centers, agencies, local businesses, service providers, and any business that wants to collect feedback and build trust online.",
  },
];

export default function FAQSection() {
  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#050816] py-10 scroll-mt-20 sm:py-24 sm:scroll-mt-28 lg:py-28"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.08),transparent_24%),linear-gradient(180deg,#050816_0%,#030712_100%)]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(148,163,184,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.22)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <div className="section-shell relative px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-sm text-center sm:max-w-2xl">
           <div className="mb-2 flex items-center justify-center gap-1.5 sm:mb-4 sm:gap-2.5">
            <div className="h-px w-4 bg-white/14 sm:w-7" />
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/80 sm:text-[11px] sm:tracking-[0.24em]">
              FAQ
            </p>
            <div className="h-px w-4 bg-white/14 sm:w-7" />
          </div>

          <h2 className="mt-2 text-[1.3rem] font-semibold tracking-tight text-white sm:mt-5 sm:text-4xl lg:text-5xl">
            Frequently asked questions  
          </h2>

          <p className="mx-auto mt-2 max-w-[17rem] text-[11px] leading-5 text-slate-400 sm:mt-4 sm:max-w-xl sm:text-[15px] sm:leading-7">
            Everything you need to know before using Woice during beta.
          </p>
        </div>

        <div className="mx-auto mt-6 max-w-3xl sm:mt-14 sm:max-w-5xl">
          <Accordion defaultValue={["item-1"]}>
            {faqs.map((item, index) => (
              <AccordionItem
                key={item.value}
                value={item.value}
                className={[
                  "border-x-0 border-t-0 border-b border-white/10 bg-transparent px-0",
                  index === 0 ? "border-t border-white/10" : "",
                ].join(" ")}
              >
                <AccordionTrigger className="py-3 text-[11px]  tracking-tight text-white/80 hover:text-white sm:py-6 sm:text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="max-w-3xl pb-3 pr-6 text-[11px] leading-5 text-slate-400 sm:pb-6 sm:pr-10 sm:text-[15px] sm:leading-7">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
