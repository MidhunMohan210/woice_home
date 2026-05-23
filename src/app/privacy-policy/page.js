import { Globe, Mail } from "lucide-react";

const lastUpdated = "May 23, 2026";

const policySections = [
  {
    title: "Introduction",
    content: [
      "Woice respects your privacy. This Privacy Policy explains how we collect, use, store, and protect information when businesses and their customers use our website, dashboard, feedback forms, testimonial pages, widgets, and related services.",
      "By using Woice, you agree to the practices described in this Privacy Policy.",
    ],
  },
  {
    title: "Information We Collect",
    content: [
      "When a business signs up or uses Woice, we may collect business name, owner or team member name, email address, phone number if provided, business logo or profile details, Google review link, and account login details.",
      "When a customer submits feedback through a Woice review link, we may collect customer name, rating, feedback message or testimonial, email address or phone number if provided, submission date and time, and the business the feedback belongs to.",
      "We may also collect limited technical information such as browser type, device information, pages visited, time of access, and basic usage activity.",
    ],
  },
  {
    title: "How We Use Information",
    content: [
      "We use collected information to provide and operate the Woice platform, create and manage business accounts, collect feedback and testimonials on behalf of businesses, show approved testimonials on public pages or website widgets, keep low-rated or private feedback inside the business dashboard, improve our services, prevent spam or misuse, provide customer support, and send important account-related communication.",
      "We do not sell personal information.",
    ],
  },
  {
    title: "Public Testimonials",
    content: [
      "If a customer submits a positive testimonial, the business may choose to approve and display it publicly. Public testimonials may include customer name, rating, testimonial message, date, or related display information.",
      "Businesses are responsible for approving only testimonials they have permission to publish.",
    ],
  },
  {
    title: "Private Feedback",
    content: [
      "Low-rated or complaint-type feedback may be treated as private feedback. This feedback is intended for the business owner or team and is not published publicly by default.",
      "Private feedback helps businesses understand customer issues and improve their service.",
    ],
  },
  {
    title: "Sharing of Information",
    content: [
      "We may share information only with the business account that owns the review link, service providers who help us run the platform, when required by law, or to protect Woice, our users, or the public from fraud, abuse, or security risks.",
      "We do not sell customer or business data to advertisers.",
    ],
  },
  {
    title: "Third-Party Services",
    content: [
      "Woice may use trusted third-party services for hosting, database storage, analytics, communication, or other technical operations.",
      "If a business adds a Google Review link, customers may be redirected to Google to leave a review. Google's own privacy policy applies once the customer visits Google.",
    ],
  },
  {
    title: "Data Storage and Security",
    content: [
      "We use reasonable technical and organizational measures to protect information from unauthorized access, misuse, loss, or disclosure.",
      "However, no internet-based service can be guaranteed to be completely secure.",
    ],
  },
  {
    title: "Data Retention",
    content: [
      "We keep information for as long as needed to provide our services, maintain business records, resolve disputes, prevent abuse, or comply with legal obligations.",
      "Businesses may request deletion of their account or data by contacting us.",
    ],
  },
  {
    title: "User Rights",
    content: [
      "Depending on applicable law, users may request to access their personal information, correct inaccurate information, request deletion of personal information, withdraw consent where applicable, or raise privacy-related concerns.",
    ],
  },
  {
    title: "Business Responsibility",
    content: [
      "Businesses using Woice are responsible for how they collect, use, approve, and publish customer feedback and testimonials.",
      "Businesses should ensure they have appropriate permission from customers before publishing testimonials publicly.",
    ],
  },
  {
    title: "Children's Privacy",
    content: [
      "Woice is intended for businesses and general customer feedback collection. We do not knowingly collect personal information from children.",
      "If we become aware that such information has been collected, we may delete it.",
    ],
  },
  {
    title: "Changes to This Policy",
    content: [
      'We may update this Privacy Policy from time to time. When we make changes, we will update the "Last updated" date at the top of this page.',
      "Continued use of Woice after changes means you accept the updated Privacy Policy.",
    ],
  },
];

export const metadata = {
  title: "Privacy Policy | Woice",
  description:
    "Learn how Woice collects, uses, stores, and protects business and customer information.",
};

function PolicyCard({ index, title, content }) {
  return (
    <section className="grid gap-4 border-t border-slate-200 py-6 sm:grid-cols-[200px_minmax(0,1fr)] sm:gap-8 sm:py-10">
      <div className="flex items-center gap-3 sm:items-start">
        <span className="rounded-full bg-sky-50 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
          {String(index).padStart(2, "0")}
        </span>
        <h2 className="text-lg font-semibold tracking-tight text-slate-900 sm:text-2xl">
          {title}
        </h2>
      </div>

      <div className="space-y-3 text-[13px] leading-6 text-slate-600 sm:mt-0 sm:space-y-4 sm:text-[15px] sm:leading-7">
        {content.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_18%,#ffffff_100%)] text-slate-900">
      <div className="mx-auto flex w-full max-w-5xl flex-col px-5 pb-14 pt-12 sm:px-8 sm:pb-24 sm:pt-24">
        <div className="mx-auto w-full max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-sky-100 bg-sky-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-700 sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.24em]">
            Privacy Policy
          </div>

          <div className="mt-4 sm:mt-5">
            <div className="inline-flex items-center rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-[11px] text-emerald-700 sm:text-xs">
              Last updated: {lastUpdated}
            </div>
          </div>

          <h1 className="mt-6 max-w-2xl text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:mt-8 sm:text-5xl md:text-6xl">
            Privacy Policy
          </h1>

          <p className="mt-4 max-w-2xl text-pretty text-[15px] leading-7 text-slate-600 sm:mt-5 sm:text-lg sm:leading-8">
            Woice respects both business and customer data. This page explains
            what information we collect, how it is used, and how we help keep
            public testimonials and private feedback appropriately separated.
          </p>
        </div>

        <div className="mx-auto mt-10 w-full max-w-4xl sm:mt-20">
          {policySections.map((section, index) => (
            <PolicyCard
              key={section.title}
              index={index + 1}
              title={section.title}
              content={section.content}
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
                Questions about privacy or your data?
              </h2>
            </div>

            <div>
              <p className="max-w-2xl text-[13px] leading-6 text-slate-600 sm:text-[15px] sm:leading-7">
                For questions about this Privacy Policy or your data, please
                reach out to us using the contact details below.
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
                      <p className="text-[13px] text-slate-500 sm:text-sm">contact@woice.it.com</p>
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
                      <p className="text-[13px] text-slate-500 sm:text-sm">www.woice.it.com</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
