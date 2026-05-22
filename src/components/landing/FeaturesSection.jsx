import {
  Code2,
  ExternalLink,
  LayoutDashboard,
  MessageSquareText,
  ShieldCheck,
  Star,
  ArrowUpRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: MessageSquareText,
    iconWrapperClass: "bg-sky-100 text-sky-700 group-hover:bg-sky-200/80",
    title: "One simple feedback link",
    text: "Collect customer responses through one link shared by WhatsApp, SMS, email, or QR code.",
  },
  {
    icon: ShieldCheck,
    iconWrapperClass: "bg-emerald-100 text-emerald-700 group-hover:bg-emerald-200/80",
    title: "Private complaint inbox",
    text: "Low ratings stay private so you can resolve issues before they go public.",
  },
  {
    icon: Star,
    iconWrapperClass: "bg-amber-100 text-amber-700 group-hover:bg-amber-200/80",
    title: "Testimonial moderation",
    text: "Approve, hide, or manage every testimonial before it appears on your website.",
  },
  {
    icon: Code2,
    iconWrapperClass: "bg-violet-100 text-violet-700 group-hover:bg-violet-200/80",
    title: "Website testimonial widget",
    text: "Embed approved testimonials on your site with a clean, fast-loading widget.",
  },
  {
    icon: ExternalLink,
    iconWrapperClass: "bg-rose-100 text-rose-700 group-hover:bg-rose-200/80",
    title: "Google review boost",
    text: "Guide happy customers to your Google review page after positive feedback.",
  },
  {
    icon: LayoutDashboard,
    iconWrapperClass: "bg-cyan-100 text-cyan-700 group-hover:bg-cyan-200/80",
    title: "Reputation dashboard",
    text: "Track testimonials, private feedback, approvals, and activity in one place.",
  },
];

function StarIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="#f5a623" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M6 0l1.5 4.5H12L8.25 7.5l1.5 4.5L6 9 2.25 12l1.5-4.5L0 4.5h4.5z" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

function FeatureCard({ feature }) {
  const Icon = feature.icon;
  return (
    <div className="group cursor-default rounded-2xl border border-black/[0.06] bg-white p-5 transition-all duration-200 hover:border-black/[0.12] hover:bg-slate-50/60 sm:p-6">
      <div
        className={cn(
          "mb-4 flex h-8 w-8 items-center justify-center rounded-[8px] transition-colors duration-200",
          feature.iconWrapperClass
        )}
      >
        <Icon size={15} />
      </div>
      <h3 className="mb-1.5 text-[13px] font-semibold leading-snug tracking-tight text-slate-900">
        {feature.title}
      </h3>
      <p className="text-[12px] leading-[1.7] text-slate-500">{feature.text}</p>
    </div>
  );
}

function FeaturedReviewCard() {
  return (
    <div className="flex cursor-default flex-col justify-between rounded-2xl bg-[#0e0e0f] p-6 text-white xl:col-start-3 xl:row-span-3 xl:row-start-1"
      style={{ border: "0.5px solid rgba(255,255,255,0.06)" }}>
      <div>
        <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-[10px]"
          style={{ background: "rgba(255,255,255,0.07)", border: "0.5px solid rgba(255,255,255,0.1)" }}>
          <ArrowUpRight size={17} className="text-white/50" />
        </div>

        <p className="max-w-[20ch] text-[1.05rem] font-semibold leading-[1.45] text-[#f1f1f1]">
          Turn every happy customer into a Google review automatically.
        </p>

        <div className="mt-4 rounded-xl p-4"
          style={{ background: "rgba(255,255,255,0.05)", border: "0.5px solid rgba(255,255,255,0.09)" }}>
          <div className="mb-2 flex items-center gap-2">
            <GoogleIcon />
            <span className="text-[11px] tracking-wide text-white/35">Google Reviews</span>
          </div>
          <div className="mb-2 flex gap-[3px]">
            {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
          </div>
          <p className="text-[11.5px] italic leading-[1.65] text-white/45">
            &quot;The product is incredible. Happy customers get redirected right to Google — it just works.&quot;
          </p>
          <p className="mt-2 text-[10px] text-white/22">How it works for your customers</p>
        </div>

        <div className="mt-4 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.06em] text-[#5eca6e]"
          style={{ background: "rgba(94,202,110,0.1)", border: "0.5px solid rgba(94,202,110,0.2)" }}>
          <span className="inline-block h-[5px] w-[5px] rounded-full bg-[#5eca6e]" />
          Available now
        </div>
      </div>

      <div className="mt-5 flex items-end justify-between border-t pt-4"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        <div>
          <div className="text-[2.8rem] font-semibold leading-none tracking-tight text-white">
            5.0
            <span className="ml-0.5 text-[.95rem] font-light text-white/22">/5</span>
          </div>
          <div className="mt-1 text-[10px] font-medium uppercase tracking-widest text-white/28">Target rating</div>
        </div>
        <div className="text-right">
          <div className="mb-1.5 flex justify-end gap-[2px]">
            {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
          </div>
          <div className="text-[9px] font-medium uppercase leading-[1.5] tracking-[0.1em] text-white/28">
            Built for<br />Google reviews
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(0,0,0,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.8)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="section-shell relative">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 sm:mb-12">
            <div className="mb-4 flex items-center gap-2.5">
              <div className="h-px w-7 bg-slate-900/40" />
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
                Features
              </p>
            </div>
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <h2 className="max-w-[15ch] text-[1.85rem] font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl">
                <span className="font-normal text-slate-400">Everything you need to</span>
                <br />
                Build trust &amp; get reviews
              </h2>
              <p className="max-w-[32ch] text-[13px] leading-relaxed text-slate-500 lg:text-right">
                One platform to collect feedback, manage testimonials, and grow your reputation.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 xl:grid-cols-[1fr_1fr_1.08fr]">
            <FeatureCard feature={features[0]} />
            <FeatureCard feature={features[1]} />
            <FeaturedReviewCard />
            <FeatureCard feature={features[2]} />
            <FeatureCard feature={features[3]} />
            <FeatureCard feature={features[4]} />
            <FeatureCard feature={features[5]} />
          </div>
        </div>
      </div>
    </section>
  );
}
