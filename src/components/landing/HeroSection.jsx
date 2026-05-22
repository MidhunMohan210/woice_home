import Image from "next/image";
import { ArrowRight } from "lucide-react";

import dashboardPreview from "../../assets/product preview/dashboard.png";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative bg-[#0d1b2f] pt-36 sm:pt-44 lg:pt-56">
      
      {/* Overflow-hidden wrapper ONLY for backgrounds/blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.16),_transparent_28%),radial-gradient(circle_at_78%_22%,_rgba(244,63,94,0.24),_transparent_20%),radial-gradient(circle_at_70%_72%,_rgba(59,130,246,0.22),_transparent_28%),linear-gradient(135deg,_#10243f_0%,_#0d1b2f_48%,_#08111f_100%)]" />
        <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:96px_96px] sm:opacity-40 sm:[background-size:120px_120px]" />
        <div className="absolute -left-20 top-12 h-44 w-44 rounded-full bg-cyan-300/12 blur-3xl sm:h-64 sm:w-64" />
        <div className="absolute right-[-4rem] top-20 h-52 w-52 rounded-full bg-rose-400/12 blur-3xl sm:right-[-5rem] sm:h-72 sm:w-72" />
        <div className="absolute bottom-[-5rem] left-1/3 h-44 w-44 rounded-full bg-sky-400/12 blur-3xl sm:bottom-[-7rem] sm:h-64 sm:w-64" />
      </div>

      <div className="section-shell relative flex h-full flex-col items-center">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center justify-center pb-8 text-center sm:pb-10 lg:pb-12">
          {/* <div className="mb-4 inline-flex max-w-full items-center rounded-full border border-white/15 bg-white/8 px-3 py-1.5 text-center text-xs font-medium text-white/88 shadow-sm backdrop-blur-sm sm:mb-5 sm:px-4 sm:py-2 sm:text-sm">
            Beta - free for early customers
          </div> */}

          <h1 className="max-w-[14ch] text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
            Turn customer feedback into public trust.
          </h1>

          <p className="mt-4 max-w-xl text-pretty text-sm leading-6 text-slate-300 sm:mt-5 sm:text-base sm:leading-7 lg:text-lg lg:leading-8">
            Woice helps businesses collect honest feedback, keep complaints
            private, showcase approved testimonials on their website, and guide
            happy customers to Google reviews.
          </p>

          <div className="mt-6 flex w-full max-w-md flex-col items-center gap-3 sm:mt-7 sm:max-w-none sm:flex-row sm:justify-center">
            <Button className="h-11 w-full rounded-full bg-rose-500 px-6 text-sm text-white hover:bg-rose-600 sm:h-12 sm:w-auto">
              Get started
              <ArrowRight className="size-4" />
            </Button>
            <Button
              variant="outline"
              className="h-11 w-full rounded-full border-white/18 bg-white/6 px-6 text-sm text-white hover:bg-white/12 hover:text-white sm:h-12 sm:w-auto"
            >
              View demo
            </Button>
          </div>

          <div className="mt-6 flex max-w-2xl flex-wrap items-center justify-center gap-2.5 text-[11px] text-slate-300 sm:mt-8 sm:gap-4 sm:text-sm lg:gap-6">
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-left backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Private complaints stay private
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-left backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-rose-400" />
              Approved testimonials publish cleanly
            </div>
          </div>
        </div>

        {/* Dashboard image — bleeds into next section */}
        <div className="relative z-10 -mb-20 mt-3 w-full max-w-5xl sm:-mb-32 sm:mt-5 lg:-mb-44 lg:mt-6">
          <div className="relative rounded-[16px] border border-white/12 bg-white/8 p-2 shadow-[0_34px_90px_-36px_rgba(15,23,42,0.55)] backdrop-blur-xl sm:rounded-[25px] sm:p-3">
            <div className="pointer-events-none absolute inset-x-10 -top-6 h-24 rounded-full bg-sky-300/25 blur-3xl sm:inset-x-20 sm:h-32" />
            <div className="relative aspect-[16/9] overflow-hidden rounded-[10px] bg-slate-950 shadow-[0_18px_50px_-24px_rgba(2,6,23,0.7)] sm:aspect-[16/8.7] sm:rounded-[15px]">
              <Image
                src={dashboardPreview}
                alt="Woice product dashboard preview"
                priority
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}