import {
  GraduationCap,
  Plane,
  Scissors,
  ShoppingBag,
  Stethoscope,
  Wrench,
} from "lucide-react";
import { cn } from "@/lib/utils";

const industries = [
  {
    icon: Stethoscope,
    iconWrapperClass: "bg-emerald-100 text-emerald-700",
    label: "Clinics & Healthcare",
  },
  {
    icon: Scissors,
    iconWrapperClass: "bg-rose-100 text-rose-700",
    label: "Salons & Spas",
  },
  {
    icon: GraduationCap,
    iconWrapperClass: "bg-sky-100 text-sky-700",
    label: "Coaching Centers",
  },
  {
    icon: Plane,
    iconWrapperClass: "bg-amber-100 text-amber-700",
    label: "Travel & Tourism",
  },
  {
    icon: ShoppingBag,
    iconWrapperClass: "bg-violet-100 text-violet-700",
    label: "E-commerce Brands",
  },
  {
    icon: Wrench,
    iconWrapperClass: "bg-cyan-100 text-cyan-700",
    label: "Local Services",
  },
];

function IndustryPill({ industry }) {
  const Icon = industry.icon;

  return (
    <div className="flex min-h-10 w-full items-center justify-center gap-2.5 rounded-full border border-slate-200 bg-white px-3.5 py-2.5 text-[11px] font-medium tracking-tight text-slate-600 transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 min-[480px]:gap-3 min-[480px]:px-4 min-[480px]:py-3 min-[480px]:text-[12px] sm:min-h-14 sm:px-5 sm:text-[14px] lg:min-h-[50px] lg:w-auto lg:justify-start lg:px-8 lg:text-[16px]">
      <span
        className={cn(
          "flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-colors duration-200 min-[480px]:h-7 min-[480px]:w-7",
          industry.iconWrapperClass
        )}
      >
        <Icon size={14} className="min-[480px]:h-[15px] min-[480px]:w-[15px]" />
      </span>
      <span>{industry.label}</span>
    </div>
  );
}

export default function TrustedBySection() {
  return (
    <section className="relative overflow-hidden bg-[#f5f5f7] py-16  sm:py-48 ">
      <div className="section-shell relative">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 flex items-center justify-center gap-2.5">
            <div className="h-px w-7 bg-slate-300" />
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
              Trusted by
            </p>
            <div className="h-px w-7 bg-slate-300" />
          </div>

          <div className="text-center">
            <h2 className="mx-auto max-w-[16ch] text-[1.3rem] font-semibold leading-tight tracking-tight text-slate-900 min-[480px]:max-w-[18ch] min-[480px]:text-[1.45rem] sm:max-w-none sm:text-[2rem]">
              Service businesses that rely on trust
            </h2>
            <p className="mx-auto mt-3 max-w-[34ch] text-[12px] leading-relaxed text-slate-500 min-[480px]:text-[13px] sm:text-[14px]">
              Built for businesses where trust decides the next customer.{" "}
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 sm:mt-10 sm:gap-4 lg:flex lg:flex-wrap lg:items-center lg:justify-center lg:gap-5">
            {industries.map((industry) => (
              <IndustryPill key={industry.label} industry={industry} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
