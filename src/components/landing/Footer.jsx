
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/landing/logo.svg";


export default function Footer({ className = "" }) {
  return (
    <footer
      className={`border-t border-slate-200/80 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] ${className}`.trim()}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-6 px-4 py-6 text-center sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center justify-center">
          <Image src={logo} alt="Woice" className="h-6 w-auto" />
        </Link>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-medium text-slate-500">
          <Link href="/" className="transition hover:text-slate-950">
            About
          </Link>
          <Link href="/contact" className="transition hover:text-slate-950">
            Contact
          </Link>
          <Link href="/terms" className="transition hover:text-slate-950">
            Terms & Conditions
          </Link>
          <Link href="/privacy" className="transition hover:text-slate-950">
            Privacy Policy
          </Link>
        </div>

        <p className="text-sm text-slate-400">
          &copy; 2026 Woice. All rights reserved to Midhun Mohan.
        </p>
      </div>
    </footer>
  );
}