import Link from "next/link";
import {
  ArrowRight,
  MessageSquareQuote,
  ShieldAlert,
  Sparkles,
  Star,
} from "lucide-react";

const problemPoints = [
  "Most businesses do not have a consistent feedback process.",
  "They lose positive testimonials because customers are not asked at the right time.",
  "They do not always know when a customer is unhappy.",
  "Negative feedback can become public before the business gets a chance to fix the issue.",
  "Their website may not show enough real customer proof to build trust.",
];

const helpCards = [
  {
    title: "Collect feedback",
    description:
      "Capture customer responses through a simple review link at the right moment.",
    icon: MessageSquareQuote,
    tint: "border-sky-100 bg-sky-50/50 text-sky-700",
  },
  {
    title: "Handle issues privately",
    description:
      "Keep low-rated feedback inside the dashboard so businesses can respond professionally.",
    icon: ShieldAlert,
    tint: "border-amber-100 bg-amber-50/60 text-amber-700",
  },
  {
    title: "Showcase approved testimonials",
    description:
      "Publish only selected customer voices on public pages and website widgets.",
    icon: Star,
    tint: "border-emerald-100 bg-emerald-50/50 text-emerald-700",
  },
];

const audienceList = [
  "Clinics and healthcare businesses",
  "Salons and spas",
  "Coaching centers and tutors",
  "Agencies and consultants",
  "Local shops and service businesses",
  "E-commerce and service-based brands",
];

export const metadata = {
  title: "About Woice",
  description:
    "Learn why Woice exists and how it helps businesses turn customer feedback into trust.",
};

function SectionBlock({ index, title, children }) {
  return (
    <section className="grid gap-4 border-t border-slate-200 py-6 sm:grid-cols-[180px_minmax(0,1fr)] sm:gap-8 sm:py-10">
      <div className="flex items-center gap-3 sm:items-start">
        <span className="rounded-full bg-sky-50 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
          {String(index).padStart(2, "0")}
        </span>
        <h2 className="text-lg font-semibold tracking-tight text-slate-900 sm:text-2xl">
          {title}
        </h2>
      </div>

      <div className="space-y-3 text-[13px] leading-6 text-slate-600 sm:space-y-4 sm:text-[15px] sm:leading-7">
        {children}
      </div>
    </section>
  );
}

function InfoCard({ title, description, icon: Icon, tint }) {
  return (
    <div className={`rounded-2xl border p-4 sm:p-5 ${tint}`}>
      <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-current/10 bg-white/80 sm:h-10 sm:w-10">
        <Icon className="h-4 w-4" />
      </div>
      <h3 className="mt-4 text-base font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-[13px] leading-6 text-slate-600 sm:text-sm">
        {description}
      </p>
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_18%,#ffffff_100%)] text-slate-900">
      <div className="mx-auto flex w-full max-w-5xl flex-col px-5 pb-14 pt-12 sm:px-8 sm:pb-24 sm:pt-24">
        <div className="mx-auto w-full max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-sky-100 bg-sky-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-700 sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.24em]">
            About Woice
          </div>

          <div className="mt-4 sm:mt-5">
            <div className="inline-flex items-center rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-[11px] text-emerald-700 sm:text-xs">
              Built for trust-driven businesses
            </div>
          </div>

          <h1 className="mt-6 max-w-3xl text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:mt-8 sm:text-5xl md:text-6xl">
            Helping businesses turn customer voice into trust
          </h1>

          <p className="mt-4 max-w-2xl text-pretty text-[15px] leading-7 text-slate-600 sm:mt-5 sm:text-lg sm:leading-8">
            Woice helps businesses collect customer feedback, handle private
            complaints with care, publish approved testimonials, and guide
            happy customers toward public reviews.
          </p>
        </div>

        <div className="mx-auto mt-10 w-full max-w-4xl sm:mt-20">
          <SectionBlock index={1} title="Hero / About Intro">
            <p>
              Woice is built to help businesses collect customer feedback,
              handle private complaints, and turn happy customer experiences
              into public trust.
            </p>
            <p>
              Many small businesses do good work, but they miss the right
              moment to ask customers for feedback. Positive reviews are often
              forgotten, while negative experiences can reach public platforms
              before the business gets a chance to respond.
            </p>
            <p>
              Woice gives businesses a simple system to collect, manage, and
              showcase customer voices in a better way.
            </p>
          </SectionBlock>

          <SectionBlock index={2} title="The Problem">
            <p>
              Most businesses need a better system for collecting feedback,
              spotting unhappy customers early, and showing real proof of good
              service on their website.
            </p>

            <div className="grid gap-3 pt-1 sm:grid-cols-2 sm:gap-4">
              <div className="rounded-2xl border border-rose-100 bg-rose-50/55 p-4 sm:p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rose-700">
                  What goes wrong
                </p>
                <ul className="mt-3 space-y-2 text-[13px] leading-6 text-slate-600 sm:text-sm">
                  {problemPoints.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-sky-100 bg-sky-50/55 p-4 sm:p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
                  What businesses need
                </p>
                <div className="mt-3 space-y-3 text-[13px] leading-6 text-slate-600 sm:text-sm">
                  <p>
                    A simple way to ask for feedback at the right time.
                  </p>
                  <p>
                    A private place to understand problems before they become
                    public.
                  </p>
                  <p>
                    Better customer proof they can confidently show on their
                    website.
                  </p>
                </div>
              </div>
            </div>
          </SectionBlock>

          <SectionBlock index={3} title="Why Woice Exists">
            <p>
              Woice exists to make feedback collection simple, private, and
              useful.
            </p>
            <p>
              Instead of treating every review the same way, Woice helps
              businesses separate customer responses based on experience.
              Positive feedback can become testimonials. Low-rated feedback can
              stay private so the business can understand the issue and respond
              professionally.
            </p>
            <p>
              The goal is not just to collect reviews. The goal is to help
              businesses build trust, improve service, and protect their
              reputation.
            </p>
          </SectionBlock>

          <SectionBlock index={4} title="What Woice Helps Businesses Do">
            <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
              {helpCards.map((card) => (
                <InfoCard key={card.title} {...card} />
              ))}
            </div>

            <ul className="grid gap-2 pt-2 text-[13px] leading-6 text-slate-600 sm:grid-cols-2 sm:text-[15px] sm:leading-7">
              {[
                "Collect feedback through a simple review link",
                "Capture positive testimonials from happy customers",
                "Keep low-rated feedback private inside the dashboard",
                "Approve and publish only selected testimonials",
                "Display testimonials on a public page or website widget",
                "Guide happy customers to leave a Google review",
                "Understand customer issues before they become public problems",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </SectionBlock>

          <SectionBlock index={5} title="Our Approach">
            <p>
              Woice is designed around a simple idea: every customer voice
              matters, but not every customer response should be handled
              publicly.
            </p>
            <div className="grid gap-3 pt-1 sm:grid-cols-2 sm:gap-4">
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50/55 p-4 sm:p-5">
                <p className="text-sm font-semibold text-slate-900">
                  Happy customers
                </p>
                <p className="mt-2 text-[13px] leading-6 text-slate-600 sm:text-sm">
                  Help a business grow through testimonials and public reviews.
                </p>
              </div>
              <div className="rounded-2xl border border-amber-100 bg-amber-50/55 p-4 sm:p-5">
                <p className="text-sm font-semibold text-slate-900">
                  Unhappy customers
                </p>
                <p className="mt-2 text-[13px] leading-6 text-slate-600 sm:text-sm">
                  Help a business improve through private feedback and better
                  follow-up.
                </p>
              </div>
            </div>
            <p>Woice gives businesses control over both sides.</p>
          </SectionBlock>

          <SectionBlock index={6} title="Who Woice Is For">
            <p>
              Woice is useful for small and growing businesses that depend on
              trust, reputation, and customer experience.
            </p>
            <p>It is especially useful for:</p>
            <ul className="grid gap-2 pt-1 text-[13px] leading-6 text-slate-600 sm:grid-cols-2 sm:text-[15px] sm:leading-7">
              {audienceList.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </SectionBlock>

          <SectionBlock index={7} title="Current Stage">
            <p>
              Woice is currently in its early stage and is being improved with
              real feedback from businesses.
            </p>
            <p>
              We are focused on building a practical product that solves real
              problems for business owners, not just another review form.
            </p>
          </SectionBlock>
        </div>

      </div>
    </main>
  );
}
``