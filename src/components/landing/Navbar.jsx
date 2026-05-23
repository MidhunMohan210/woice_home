"use client";

import { useEffect, useState } from "react";
import NextLink from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import logo from "../../assets/landing/logo.svg";

const navItems = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

function withPrefix(prefix, href) {
  return `${prefix}${href}`;
}

function NavLink({ href, children, className = "", onClick, ...props }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={[
        "text-sm font-semibold tracking-[0.16em] text-slate-500 transition-colors duration-200 hover:text-slate-950",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </a>
  );
}

export default function Navbar({ linkPrefix = "" }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* ── MOBILE: compact Apple-style navbar (< md) ── */}
      <header
        className={[
          "fixed inset-x-0 top-0 z-50 w-full md:hidden",
          "transition-[background-color,border-color] duration-300",
          isScrolled
            ? "border-b border-slate-200/60 bg-white/80 backdrop-blur-xl"
            : "border-b border-transparent bg-white/60 backdrop-blur-md",
        ].join(" ")}
      >
        {/* 44px tall bar — Apple's standard touch target height */}
        <div className="relative flex h-11 items-center justify-between px-4">
          {/* Left: logo mark */}
          <NextLink href="/" className="flex items-center text-slate-950">
            <Image src={logo} alt="WOICE" className="h-7 w-7" />
          </NextLink>

          {/* Center: wordmark absolutely centred */}
          <span className="pointer-events-none absolute inset-x-0 flex justify-center">
            <span className="text-[13px] font-semibold tracking-[0.18em] text-slate-800">
              WOICE
            </span>
          </span>

          {/* Right: CTA + hamburger */}
          <div className="flex items-center gap-1.5">
            <NextLink
              href={withPrefix(linkPrefix, "#pricing")}
              className="inline-flex h-7 items-center justify-center rounded-full bg-red-500 px-3 text-[11px] font-semibold text-white transition-all duration-200 hover:bg-red-600 active:scale-95"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Start Free
            </NextLink>

            <button
              type="button"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              className="inline-flex h-7 w-7 items-center justify-center rounded-full text-slate-600 transition-all duration-200 hover:bg-slate-100"
            >
              <span
                className={[
                  "flex items-center justify-center transition-transform duration-300 ease-out",
                  isMobileMenuOpen ? "rotate-90 scale-110" : "rotate-0 scale-100",
                ].join(" ")}
              >
                {isMobileMenuOpen ? <X className="size-[14px]" /> : <Menu className="size-[14px]" />}
              </span>
            </button>
          </div>
        </div>

        {/* Dropdown menu — full-width divider list */}
        <div
          className={[
            "overflow-hidden bg-white/92 backdrop-blur-xl",
            "transition-[max-height,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
            isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0",
          ].join(" ")}
        >
          <nav className="grid divide-y divide-slate-100/80">
            {navItems.map((item, index) => (
              <NavLink
                key={item.href}
                href={withPrefix(linkPrefix, item.href)}
                onClick={() => setIsMobileMenuOpen(false)}
                className={[
                  "px-5 py-3 text-[13px] tracking-[0.1em] text-slate-700 hover:bg-slate-50/80",
                  "transition-[transform,opacity,background-color] duration-300 ease-out",
                  isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
                ].join(" ")}
                style={{
                  transitionDelay: isMobileMenuOpen
                    ? `${index * 40}ms`
                    : `${(navItems.length - index - 1) * 30}ms`,
                }}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      {/* ── DESKTOP / TABLET: floating navbar (≥ md) ── */}
      <header className="fixed inset-x-0 top-0 z-50 hidden px-8 pt-6 md:block lg:px-6 lg:pt-8">
        <div
          className={[
            "mx-auto grid items-center rounded-full py-3",
            "max-w-[860px] grid-cols-[auto_1fr_auto] gap-3 px-4 pl-5",
            "lg:max-w-[760px] lg:gap-2.5 lg:px-3.5 lg:py-1.5 lg:pl-4",
            "border border-white/70 bg-white/90 shadow-[0_22px_55px_-30px_rgba(15,23,42,0.35)] backdrop-blur-xl",
            "transition-[transform,box-shadow,background-color,border-color,padding,max-width] duration-300 ease-out",
            isScrolled
              ? "-translate-y-1 scale-[0.985] border-white bg-white/92 px-4 shadow-lg"
              : "translate-y-0 shadow-lg",
          ].join(" ")}
        >
          <NextLink href="/" className="flex items-center gap-3 text-slate-950 lg:gap-2.5">
            <Image src={logo} alt="WOICE" className="h-10 w-10 lg:h-8 lg:w-8" />
          </NextLink>

          <div className="flex min-w-0 justify-center">
            <nav
              className={[
                "flex items-center justify-center whitespace-nowrap text-slate-600",
                "transition-[gap,transform,opacity] duration-300 ease-out",
                isScrolled
                  ? "gap-6 -translate-y-0.5 opacity-100 lg:gap-5"
                  : "gap-7 opacity-100 lg:gap-6",
              ].join(" ")}
            >
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  href={withPrefix(linkPrefix, item.href)}
                  className="lg:text-[13px] lg:tracking-[0.12em]"
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>

          <div className="flex items-center justify-end gap-2">
            <a
              href={withPrefix(linkPrefix, "#pricing")}
              className={[
                "inline-flex items-center justify-center rounded-full bg-red-500 px-6 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-600",
                isScrolled ? "h-10 px-5 lg:h-9 lg:px-4" : "h-12 lg:h-10 lg:px-5",
              ].join(" ")}
            >
              Start Free
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
