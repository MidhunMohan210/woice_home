import { Globe, Mail } from "lucide-react";
import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";

const lastUpdated = "May 23, 2026";

const termsSections = [
  {
    title: "Introduction",
    content: [
      "Welcome to Woice. These Terms and Conditions explain the rules for using our website, dashboard, feedback forms, testimonial pages, widgets, and related services.",
      "By accessing or using Woice, you agree to these Terms. If you do not agree, please do not use the service.",
    ],
  },
  {
    title: "Use of Woice",
    content: [
      "Woice is designed to help businesses collect customer feedback, manage private feedback, approve and publish testimonials, and guide happy customers to leave reviews on platforms such as Google.",
      "You may use Woice only for lawful business purposes and in accordance with these Terms.",
    ],
  },
  {
    title: "Business Accounts",
    content: [
      "Businesses may need to create an account to use Woice features. You are responsible for keeping your login details secure and for all activity that happens under your account.",
      "You agree to provide accurate business information and keep it updated when necessary.",
    ],
  },
  {
    title: "Customer Feedback and Testimonials",
    content: [
      "Woice allows businesses to collect ratings, feedback, and testimonials from customers through review links or feedback forms.",
      "Businesses are responsible for ensuring that they have the right to collect, manage, and use customer-submitted content.",
    ],
  },
  {
    title: "Public Testimonials",
    content: [
      "Businesses can approve and publish selected testimonials on public testimonial pages or website widgets.",
      "By approving a testimonial for public display, the business confirms that it has the required permission to publish that testimonial.",
      "Woice is not responsible for the accuracy, legality, or reliability of testimonials published by businesses.",
    ],
  },
  {
    title: "Private Feedback",
    content: [
      "Low-rated or complaint-type feedback may be treated as private feedback inside the business dashboard.",
      "Private feedback is intended to help businesses understand customer issues and improve their service. Businesses should handle private feedback responsibly and professionally.",
    ],
  },
  {
    title: "Google Review Redirect",
    content: [
      "Woice may allow businesses to add a Google Review link. After a positive feedback flow, customers may be redirected to Google to leave a review.",
      "Woice does not control Google reviews, Google's platform, or whether a customer chooses to submit a Google review.",
    ],
  },
  {
    title: "User Responsibilities",
    content: [
      "When using Woice, you agree not to misuse the platform, submit false information, publish misleading testimonials, violate customer privacy, or use the service in a way that harms Woice, other users, or third parties.",
      "Businesses are responsible for complying with applicable laws related to customer data, testimonials, advertising, and privacy.",
    ],
  },
  {
    title: "Prohibited Use",
    content: [
      "You may not use Woice to:",
    ],
    items: [
      "Collect or publish fake reviews",
      "Mislead customers or website visitors",
      "Upload harmful, abusive, illegal, or offensive content",
      "Attempt to hack, disrupt, or overload the platform",
      "Copy, resell, or exploit the service without permission",
      "Violate the rights of customers, businesses, or third parties",
    ],
  },
  {
    title: "Beta Usage and Pricing",
    content: [
      "Woice may offer free beta access, trial access, or promotional plans.",
      "During beta, some features may change, be limited, or be removed as the product improves. Beta access does not guarantee permanent free access.",
      "Pricing, plans, and feature availability may change in the future. Any paid plans will be clearly communicated before billing begins.",
    ],
  },
  {
    title: "Content Ownership",
    content: [
      "Businesses and customers retain ownership of the content they submit, such as feedback, ratings, and testimonials.",
      "By submitting or approving content through Woice, you give Woice permission to store, process, display, and deliver that content as needed to provide the service.",
      "Woice may use aggregated or non-personal usage data to improve the platform.",
    ],
  },
  {
    title: "Service Availability",
    content: [
      "We aim to keep Woice reliable and available, but we do not guarantee that the service will always be uninterrupted, error-free, or available at all times.",
      "We may update, modify, suspend, or discontinue parts of the service when needed.",
    ],
  },
  {
    title: "Limitation of Liability",
    content: [
      'Woice is provided on an "as is" and "as available" basis.',
      "To the maximum extent allowed by law, Woice is not responsible for indirect, incidental, special, or consequential damages, including loss of business, loss of revenue, loss of data, or reputation-related losses arising from use of the service.",
    ],
  },
  {
    title: "Account Suspension or Termination",
    content: [
      "We may suspend or terminate access to Woice if we believe a user or business has violated these Terms, misused the platform, created risk for others, or used the service unlawfully.",
      "Businesses may stop using Woice at any time and may request account or data deletion by contacting us.",
    ],
  },
  {
    title: "Changes to These Terms",
    content: [
      'We may update these Terms and Conditions from time to time. When changes are made, we will update the "Last updated" date at the top of this page.',
      "Continued use of Woice after changes means you accept the updated Terms.",
    ],
  },
];

export const metadata = {
  title: "Terms and Conditions | Woice",
  description:
    "Read the terms that govern use of Woice, including business accounts, testimonials, private feedback, and service usage.",
};

function TermsCard({ index, title, content, items }) {
  return (
    <section className="grid gap-4 border-t border-slate-200 py-6 sm:grid-cols-[250px_minmax(0,1fr)] sm:gap-8 sm:py-10">
      <div className="flex items-center gap-3 sm:items-start">
        <span className="rounded-full bg-sky-50 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
          {String(index).padStart(2, "0")}
        </span>
        <h2 className="text-lg font-semibold tracking-tight text-slate-900 sm:text-2xl">
          {title}
        </h2>
      </div>

      <div className="space-y-3 text-[13px] leading-6 text-slate-600 sm:space-y-4 sm:text-[15px] sm:leading-7">
        {content.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}

        {items ? (
          <ul className="space-y-2 pt-1 text-[13px] leading-6 text-slate-600 sm:text-[15px] sm:leading-7">
            {items.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}

export default function TermsAndConditionsPage() {
  return (
    <>
      <Navbar linkPrefix="/" />
      <main className="min-h-screen bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_18%,#ffffff_100%)] text-slate-900">
        <div className="mx-auto flex w-full max-w-5xl flex-col px-5 pb-14 pt-22 sm:px-8 sm:pb-24 sm:pt-44">
          <div className="mx-auto w-full max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-sky-100 bg-sky-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-700 sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.24em]">
              Terms & Conditions
            </div>

          <div className="mt-4 sm:mt-5">
            <div className="inline-flex items-center rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-[11px] text-emerald-700 sm:text-xs">
              Last updated: {lastUpdated}
            </div>
          </div>

          <h1 className="mt-6 max-w-2xl text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:mt-8 sm:text-5xl md:text-6xl">
            Terms and Conditions
          </h1>

          <p className="mt-4 max-w-2xl text-pretty text-[15px] leading-7 text-slate-600 sm:mt-5 sm:text-lg sm:leading-8">
            These terms explain how businesses and users can access and use
            Woice, including feedback collection, testimonial publishing,
            private complaint handling, and related product features.
          </p>
        </div>

        <div className="mx-auto mt-10 w-full max-w-4xl sm:mt-20">
          {termsSections.map((section, index) => (
            <TermsCard
              key={section.title}
              index={index + 1}
              title={section.title}
              content={section.content}
              items={section.items}
            />
          ))}
        </div>

        <section className="mx-auto mt-2 w-full max-w-4xl border-t border-slate-200 py-8 sm:mt-6 sm:py-12">
          <div className="grid gap-5 sm:grid-cols-[180px_minmax(0,1fr)] sm:gap-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700 sm:text-sm">
                Contact Us
              </p>
              <h2 className="mt-2 text-xl font-semibold tracking-tight text-slate-900 sm:mt-3 sm:text-2xl">
                Questions about these terms?
              </h2>
            </div>

            <div>
              <p className="max-w-2xl text-[13px] leading-6 text-slate-600 sm:text-[15px] sm:leading-7">
                For questions about these Terms and Conditions, please reach
                out to us using the contact details below.
              </p>

              <div className="mt-5 grid gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-4">
                <a
                  href="mailto:contact@woice.it.com"
                  className="rounded-2xl border border-sky-100 bg-sky-50/40 p-4 transition-colors hover:bg-sky-50 sm:p-5"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-sky-100 bg-white text-sky-700 sm:h-10 sm:w-10">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">Email</p>
                      <p className="text-[13px] text-slate-500 sm:text-sm">
                        contact@woice.it.com
                      </p>
                    </div>
                  </div>
                </a>

                <a
                  href="https://www.woice.it.com"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-emerald-100 bg-emerald-50/40 p-4 transition-colors hover:bg-emerald-50 sm:p-5"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-100 bg-white text-emerald-700 sm:h-10 sm:w-10">
                      <Globe className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">Website</p>
                      <p className="text-[13px] text-slate-500 sm:text-sm">
                        www.woice.it.com
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
