"use client";

import { useEffect, useRef, useState } from "react";

const positiveSteps = [
  {
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "Positive experience",
    sub: "We're glad they loved it",
    colorClass: "bg-rose-950 text-rose-400",
  },
  {
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
      </svg>
    ),
    title: "Testimonial collected",
    sub: "Captured and saved automatically",
    colorClass: "bg-sky-950 text-sky-400",
  },
  {
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "Showcase publicly",
    sub: "Approved testimonials goes live on your website",
    badge: { label: "Approved", color: "green" },
    colorClass: "bg-emerald-950 text-emerald-400",
  },
  {
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Google review",
    sub: "Invited to leave a review",
    badge: { label: "Go to Google ↗", color: "neutral" },
    googleIcon: true,
    colorClass: "bg-white/[0.05] border border-white/10",
  },
];

const negativeSteps = [
  {
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: "Private feedback",
    sub: "Stays private, not published",
    colorClass: "bg-amber-950 text-amber-400",
  },
  {
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
        <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
      </svg>
    ),
    title: "Private inbox",
    sub: "Visible only to your team",
    // badge: { label: "New", color: "red" },
    colorClass: "bg-cyan-950 text-cyan-400",
  },
  {
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <line x1="9" y1="10" x2="15" y2="10" />
        <line x1="12" y1="7" x2="12" y2="13" />
      </svg>
    ),
    title: "Response & resolution",
    sub: "Address and resolve the issue",
    badge: { label: "In progress", color: "amber" },
    colorClass: "bg-orange-950 text-orange-400",
  },
  {
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: "Issue resolved",
    sub: "Closed and logged",
    badge: { label: "Resolved", color: "green" },
    colorClass: "bg-lime-950 text-lime-400",
  },
];

const impacts = [
  { label: "More testimonials", sub: "Build trust & credibility" },
  { label: "More reviews", sub: "Improve SEO & visibility" },
  { label: "Happier customers", sub: "Issues resolved privately" },
  { label: "Stronger reputation", sub: "More trust, more growth" },
];

function Badge({ label, color }) {
  const styles = {
    green: "bg-emerald-950 text-emerald-400 border border-emerald-800",
    red: "bg-red-950 text-red-400 border border-red-800",
    amber: "bg-amber-950 text-amber-400 border border-amber-800",
    neutral: "bg-zinc-800 text-zinc-300 border border-zinc-700",
  };
  return (
    <span
      className={`inline-block text-[10px] font-medium px-2 py-0.5 rounded-full ${styles[color]}`}
    >
      {label}
    </span>
  );
}

function StepCard({ icon, title, sub, badge, googleIcon, colorClass, delay }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVis(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`group flex items-start gap-2 p-3 rounded-[18px] border border-white/[0.06] bg-white/[0.03] transition-all duration-300 hover:bg-white/[0.06] hover:border-white/[0.10] sm:gap-3 sm:rounded-2xl sm:p-4 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
    >
      <div
        className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg sm:h-9 sm:w-9 sm:rounded-xl ${colorClass}`}
      >
        {googleIcon ? (
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            aria-hidden="true"
            className="sm:h-[18px] sm:w-[18px]"
          >
            <path
              d="M16.364 9.204c0-.638-.057-1.25-.163-1.837H9v3.475h4.118a3.522 3.522 0 0 1-1.529 2.312v1.92h2.472c1.448-1.334 2.303-3.3 2.303-5.87Z"
              fill="#4285F4"
            />
            <path
              d="M9 16.675c2.079 0 3.823-.69 5.097-1.87l-2.472-1.92c-.69.463-1.573.737-2.625.737-2.016 0-3.724-1.36-4.334-3.188H2.11v2.001A7.69 7.69 0 0 0 9 16.675Z"
              fill="#34A853"
            />
            <path
              d="M4.666 10.434A4.61 4.61 0 0 1 4.424 9c0-.498.085-.981.242-1.434V5.565H2.11A7.675 7.675 0 0 0 1.325 9c0 1.237.295 2.408.785 3.435l2.556-2.001Z"
              fill="#FBBC05"
            />
            <path
              d="M9 4.378c1.13 0 2.145.389 2.944 1.151l2.209-2.209C12.82 2.083 11.076 1.325 9 1.325A7.69 7.69 0 0 0 2.11 5.565l2.556 2.001C5.276 5.738 6.984 4.378 9 4.378Z"
              fill="#EA4335"
            />
          </svg>
        ) : (
          icon
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="mb-0.5 text-[12px] font-medium leading-[1.25] text-zinc-100 sm:text-[13px]">
          {title}
        </div>
        <div className="text-[10px] leading-snug text-zinc-500 sm:text-[11px]">
          {sub}
        </div>
        {badge && (
          <div className="mt-1.5 sm:mt-2">
            <Badge {...badge} />
          </div>
        )}
      </div>
    </div>
  );
}

function Connector({ color }) {
  return (
    <div className="flex justify-center my-0.5">
      <div
        className={`w-px h-4 ${color === "green" ? "bg-emerald-900" : "bg-red-900"}`}
      />
    </div>
  );
}

export default function WoiceWaySection() {
  const headingRef = useRef(null);
  const [headingVis, setHeadingVis] = useState(false);
  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setHeadingVis(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="bg-[#0c0c0e] px-3 py-20 sm:px-6 sm:py-24">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div
          ref={headingRef}
          className={`mb-16 text-center transition-all duration-700 ${headingVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-gray-500  px-3 py-1.5 rounded-full mb-5">
            The Woice Way
          </div>
          <h2 className="mx-auto mb-4 max-w-2xl text-[2rem] font-semibold leading-tight tracking-tight text-zinc-50 sm:text-5xl">
            One link. Two paths. Better reputation.
          </h2>
          <p className="mx-auto max-w-3xl text-[15px] leading-6 text-zinc-500 sm:text-base sm:leading-relaxed">
            Woice automatically routes customer responses. Happy customers
            become public testimonials and Google reviews, while concerns stay
            private so you can fix them before they affect your reputation.
          </p>
        </div>

        {/* Entry cards */}
        <div className="max-w-sm mx-auto mb-2 space-y-2">
          <StepCard
            icon={
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            }
            title="Customer shares feedback"
            sub="Via your unique feedback link"
            colorClass="bg-violet-950 text-violet-400"
            delay={0}
          />
          <div className="flex justify-center">
            <div className="w-px h-4 bg-white/10" />
          </div>

          {/* Feedback received card */}
          <div className="flex items-center gap-2 p-3 rounded-[18px] border border-white/[0.06] bg-white/[0.03] sm:gap-3 sm:p-4 sm:rounded-2xl">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-white/[0.05] text-zinc-400 sm:h-9 sm:w-9 sm:rounded-xl">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <div className="min-w-0 flex-1">
              <div className="mb-0.5 text-[12px] font-medium leading-[1.25] text-zinc-100 sm:text-[13px]">
                Feedback received
              </div>
              <div className="text-[10px] text-zinc-500 sm:text-[11px]">
                Customer rates their experience
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-0.5 sm:gap-1">
              <span className="text-xs text-amber-400 sm:text-sm">★★★★</span>

              <span className="ml-1 text-[9px] font-semibold text-amber-300 bg-amber-950 border border-amber-800 px-1.5 py-0.5 rounded-full sm:ml-1.5 sm:text-[10px] sm:px-2">
                4
              </span>
            </div>
          </div>
        </div>

        {/* Branch connector */}
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="w-px h-5 bg-white/10" />

            <div className="relative h-12 w-full">
              <svg
                width="100%"
                height="48"
                viewBox="0 0 600 60"
                preserveAspectRatio="none"
                className="absolute inset-0 overflow-visible"
                aria-hidden="true"
              >
                <path
                  d="M300 4 C300 28 160 48 132 60"
                  fill="none"
                  stroke="rgba(255,255,255,0.35)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeDasharray="2 7"
                />
                <path
                  d="M300 4 C300 28 420 48 468 60"
                  fill="none"
                  stroke="rgba(255,255,255,0.35)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeDasharray="2 7"
                />

                {/* <circle cx="300" cy="4" r="2.5" fill="rgba(255,255,255,0.5)" />
                <circle cx="300" cy="4" r="5.5" fill="rgba(255,255,255,0.07)" />

                <circle cx="132" cy="60" r="3" fill="#34d399" opacity="0.9" />
                <circle cx="132" cy="60" r="6" fill="#34d399" opacity="0.12" />
                <circle cx="468" cy="60" r="3" fill="#f87171" opacity="0.9" />
                <circle cx="468" cy="60" r="6" fill="#f87171" opacity="0.12" /> */}
              </svg>
            </div>
          </div>
        </div>

        {/* Branch labels + columns */}
        <div className="max-w-3xl mx-auto mt-2">
          <div className="-mt-1 mb-3 grid grid-cols-2 gap-2.5 sm:gap-4">
            <div className="flex justify-center">
              <span className="rounded-full border border-emerald-800 bg-emerald-950 px-2 py-1 text-[10px] font-semibold text-emerald-400 sm:px-3 sm:text-[11px]">
                4 – 5 Stars
              </span>
            </div>
            <div className="flex justify-center">
              <span className="rounded-full border border-red-800 bg-red-950 px-2 py-1 text-[10px] font-semibold text-red-400 sm:px-3 sm:text-[11px]">
                1 – 3 Stars
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
            {/* Positive column */}
            <div className="space-y-0">
              {positiveSteps.map((step, i) => (
                <div key={i}>
                  <StepCard
                    {...step}
                    colorClass={step.colorClass}
                    delay={i * 60}
                  />
                  {i < positiveSteps.length - 1 && <Connector color="green" />}
                </div>
              ))}
            </div>
            {/* Negative column */}
            <div className="space-y-0">
              {negativeSteps.map((step, i) => (
                <div key={i}>
                  <StepCard
                    {...step}
                    colorClass={step.colorClass}
                    delay={i * 60}
                  />
                  {i < negativeSteps.length - 1 && <Connector color="red" />}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Impact strip */}
        <div className="max-w-3xl mx-auto mt-8">
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] px-4 py-4 sm:px-6 sm:py-5">
            <div className="text-[10px] font-semibold tracking-widest uppercase text-zinc-600 mb-4">
              Business impact
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {impacts.map((item, i) => (
                <div
                  key={i}
                  className={`${i < impacts.length - 1 ? "sm:border-r border-white/[0.06]" : ""} sm:pr-4`}
                >
                  <div className="flex items-center gap-1.5 mb-1">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#34d399"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <line x1="12" y1="19" x2="12" y2="5" />
                      <polyline points="5 12 12 5 19 12" />
                    </svg>
                    <span className="text-[12px] font-medium text-zinc-200 sm:text-[13px]">
                      {item.label}
                    </span>
                  </div>
                  <div className="text-[10px] leading-snug text-zinc-500 sm:text-[11px]">
                    {item.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
