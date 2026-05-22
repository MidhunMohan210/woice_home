"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/landing/logo.svg";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

function NavLink({ href, children, className = "", onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={[
        "text-sm font-semibold tracking-[0.16em] text-slate-500 transition-colors duration-200 hover:text-slate-950",
        className,
      ].join(" ")}
    >
      {children}
    </Link>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
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
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4 lg:px-8 mt-3">
      <div
        className={[
          "mx-auto grid items-center rounded-full py-2",
          "max-w-[860px] grid-cols-[auto_1fr_auto] gap-3 px-3 sm:px-4 sm:pl-5",
          "border border-white/70 bg-white/90 shadow-[0_22px_55px_-30px_rgba(15,23,42,0.35)] backdrop-blur-xl",
          "transition-[transform,box-shadow,background-color,border-color,padding,max-width] duration-300 ease-out",
          isScrolled
            ? "-translate-y-1 scale-[0.985] border-white bg-white/92 px-3 shadow-lg sm:px-4"
            : "translate-y-0 shadow-lg",
        ].join(" ")}
      >
        <Link href="/" className="flex items-center gap-3 text-slate-950">
          <Image src={logo} alt="WOICE" className="h-10 w-10" />
        </Link>

        <div className="flex min-w-0 justify-center">
          <nav
            className={[
              "hidden items-center justify-center gap-7 whitespace-nowrap text-slate-600 lg:flex",
              "transition-[gap,transform,opacity] duration-300 ease-out",
              isScrolled ? "gap-6 -translate-y-0.5 opacity-100" : "gap-7 opacity-100",
            ].join(" ")}
          >
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="flex items-center justify-end gap-2">
          <Link
            href="#pricing"
            className={[
              "inline-flex items-center justify-center rounded-full bg-red-500 px-4 text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-600 sm:px-6 sm:text-sm",
              isScrolled
                ? "h-10 sm:h-10 sm:px-5"
                : "h-10 sm:h-12",
            ].join(" ")}
          >
            Start Free
          </Link>

          <button
            type="button"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/8 bg-white text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-50 lg:hidden"
          >
            <span
              className={[
                "flex items-center justify-center transition-transform duration-300 ease-out",
                isMobileMenuOpen ? "rotate-90 scale-110" : "rotate-0 scale-100",
              ].join(" ")}
            >
              {isMobileMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
            </span>
          </button>
        </div>
      </div>

      <div
        className={[
          "origin-top mx-auto mt-3 max-w-[860px] overflow-hidden rounded-[28px] border border-white/70 bg-white/92 shadow-[0_24px_70px_-36px_rgba(15,23,42,0.38)] backdrop-blur-xl transition-[max-height,opacity,transform] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden",
          isMobileMenuOpen
            ? "pointer-events-auto max-h-80 translate-y-0 scale-100 opacity-100"
            : "pointer-events-none max-h-0 -translate-y-3 scale-[0.97] opacity-0",
        ].join(" ")}
      >
        <nav className="grid gap-1 p-3">
          {navItems.map((item, index) => (
            <NavLink
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={[
                "rounded-2xl px-4 py-3 text-left text-sm tracking-[0.12em] hover:bg-slate-100",
                "transition-[transform,opacity,background-color] duration-300 ease-out",
                isMobileMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-2 opacity-0",
              ].join(" ")}
              style={{
                transitionDelay: isMobileMenuOpen
                  ? `${index * 45}ms`
                  : `${(navItems.length - index - 1) * 35}ms`,
              }}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
