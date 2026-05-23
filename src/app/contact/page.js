import Link from "next/link";
import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";
import { ArrowRight, Globe, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import mapImage from "../../assets/contact/map.png";
import logo from "../../assets/landing/logo.svg";


export const metadata = {
  title: "Contact Woice",
  description:
    "Contact Woice for demos, beta access, setup help, support, partnerships, and general questions.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar linkPrefix="/" />
      <main className="min-h-screen text-slate-900">
        {/* Hero Banner */}
        <div className="relative overflow-hidden bg-[#0d1b2f]/90 px-5 pb-28 pt-32 sm:px-8 sm:pb-32 sm:pt-44">
          {/* Map bg placeholder — replace with your map image */}
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage:
                `url(${mapImage.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          {/* Subtle grid overlay for depth */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,.4) 39px,rgba(255,255,255,.4) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,.4) 39px,rgba(255,255,255,.4) 40px)",
            }}
          />

          <div className="relative mx-auto max-w-5xl">
            <h1 className="max-w-lg text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Get In Touch
            </h1>
            <p className="mt-3 max-w-md text-sm leading-6 text-sky-100 sm:text-[15px] sm:leading-7">
              Have a question, want beta access, or need help setting up Woice
              for your business? We&apos;re here to help.
            </p>
          </div>
        </div>

        {/* Contact Card — overlaps the hero */}
        <div className="relative z-10 mx-auto -mt-16 max-w-5xl px-5 pb-16 sm:-mt-20 sm:px-8 sm:pb-20">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <div className="grid md:grid-cols-[1fr_340px]">
              {/* Left — Logo area (white) */}
              <div className="flex flex-col items-center justify-center bg-white p-8 sm:p-14">
                <div className="flex h-24 w-40 items-center justify-center sm:h-28 sm:w-48">
                  <Image
                    src={logo}
                    alt="Woice logo"
                    className="h-10 w-auto sm:h-12"
                    priority
                  />
                </div>

                <p className="mt-5 max-w-xs text-center text-[13px] leading-6 text-slate-500">
                  Customer feedback and testimonial management platform helping
                  businesses build trust and reputation.
                </p>

                <div className="mt-7 flex w-full max-w-xs flex-col gap-3 sm:max-w-none sm:flex-row items-center justify-center">
                  <Link
                    href="/login"
                    className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-full bg-red-500 px-5 text-sm font-semibold text-white transition hover:bg-red-600 sm:w-auto"
                  >
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href="mailto:contact@woice.it.com"
                    className="inline-flex h-10 w-full items-center justify-center rounded-full border border-slate-200 px-5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 sm:w-auto"
                  >
                    Send Email
                  </a>
                </div>
              </div>

              {/* Right — Contact Info (dark navy) */}
              <div className="flex flex-col justify-center bg-[#1a2b4a] p-7 sm:p-10">
                <h2 className="text-lg font-semibold text-white">
                  Contact Information
                </h2>

                <ul className="mt-7 space-y-5">
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-sky-300">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-[13px] font-medium text-white">
                        Address
                      </p>
                      <p className="mt-0.5 text-[13px] leading-5 text-slate-400">
                        Kerala, India
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-sky-300">
                      <Phone className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-[13px] font-medium text-white">
                        Phone
                      </p>
                      <p className="mt-0.5 text-[13px] leading-5 text-slate-400">
                        +91 6282971061
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-sky-300">
                      <Mail className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-[13px] font-medium text-white">
                        Email
                      </p>
                      <a
                        href="mailto:contact@woice.it.com"
                        className="mt-0.5 block text-[13px] leading-5 text-sky-300 transition hover:text-sky-200"
                      >
                        contact@woice.it.com
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-sky-300">
                      <Globe className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-[13px] font-medium text-white">
                        Website
                      </p>
                      <p className="mt-0.5 text-[13px] leading-5 text-slate-400">
                        www.woice.it.com
                      </p>
                    </div>
                  </li>
                </ul>

                {/* Social icons row */}
                <div className="mt-8 flex flex-wrap gap-3">
                  {["twitter", "linkedin", "instagram"].map((s) => (
                    <a
                      key={s}
                      href="#"
                      aria-label={s}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-slate-400 transition hover:border-sky-400 hover:text-sky-300"
                    >
                      <span className="sr-only">{s}</span>
                      <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" opacity="0.3" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
