import { ArrowRight } from "lucide-react";

/* ── Reusable helpers ── */

function BgCircle({ size, bottom, right, top, opacity = 0.06 }) {
  return (
    <div
      style={{
        position: "absolute",
        width: size,
        height: size,
        borderRadius: "50%",
        background: `rgba(255,255,255,${opacity})`,
        ...(bottom !== undefined && { bottom }),
        ...(right !== undefined && { right }),
        ...(top !== undefined && { top }),
        pointerEvents: "none",
      }}
    />
  );
}

function Badge({ bg, border, dotColor, textColor, label }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontSize: 11,
        fontWeight: 700,
        padding: "5px 12px",
        borderRadius: 999,
        background: bg,
        border: border || "none",
        color: textColor,
        whiteSpace: "nowrap",
      }}
    >
      <span
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: dotColor,
          display: "inline-block",
        }}
      />
      {label}
    </span>
  );
}

function IconCircle({ bg, children }) {
  return (
    <div
      style={{
        width: 46,
        height: 46,
        borderRadius: "50%",
        background: bg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      {children}
    </div>
  );
}

/* ── SVG illustrations ── */

function MicIllustration() {
  return (
    <svg width="110" height="140" viewBox="0 0 110 140" fill="none">
      <ellipse cx="55" cy="125" rx="30" ry="8" fill="rgba(255,255,255,0.06)" />
      <rect x="38" y="20" width="34" height="60" rx="17" fill="#B0B8C1" />
      <rect x="40" y="22" width="30" height="56" rx="15" fill="#D4D9DF" />
      <rect x="44" y="28" width="22" height="44" rx="11" fill="#9DA5AE" />
      <line
        x1="44"
        y1="38"
        x2="66"
        y2="38"
        stroke="rgba(255,255,255,0.4)"
        strokeWidth="1.2"
      />
      <line
        x1="44"
        y1="45"
        x2="66"
        y2="45"
        stroke="rgba(255,255,255,0.4)"
        strokeWidth="1.2"
      />
      <line
        x1="44"
        y1="52"
        x2="66"
        y2="52"
        stroke="rgba(255,255,255,0.4)"
        strokeWidth="1.2"
      />
      <line
        x1="44"
        y1="59"
        x2="66"
        y2="59"
        stroke="rgba(255,255,255,0.4)"
        strokeWidth="1.2"
      />
      <rect x="43" y="18" width="24" height="8" rx="4" fill="#C8CDD3" />
      <path
        d="M30 70 Q30 92 55 92 Q80 92 80 70"
        stroke="#8A9099"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <line
        x1="55"
        y1="92"
        x2="55"
        y2="112"
        stroke="#8A9099"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="40"
        y1="112"
        x2="70"
        y2="112"
        stroke="#8A9099"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="82" cy="28" r="14" fill="rgba(239,68,68,0.2)" />
      <line
        x1="76"
        y1="22"
        x2="88"
        y2="34"
        stroke="#F87171"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <line
        x1="88"
        y1="22"
        x2="76"
        y2="34"
        stroke="#F87171"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MegaphoneIllustration() {
  return (
    <svg
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
      style={{ position: "absolute", right: 18, bottom: 16 }}
    >
      <ellipse cx="36" cy="66" rx="22" ry="5" fill="rgba(0,0,0,0.15)" />
      <path d="M18 28 L48 16 L48 50 L18 44 Z" fill="#E8956D" />
      <rect x="10" y="28" width="10" height="16" rx="4" fill="#D4724A" />
      <circle
        cx="54"
        cy="33"
        r="8"
        fill="#E8956D"
        stroke="#D4724A"
        strokeWidth="1.5"
      />
      <line
        x1="54"
        y1="27"
        x2="54"
        y2="39"
        stroke="rgba(255,255,255,0.4)"
        strokeWidth="1.5"
      />
      <line
        x1="48"
        y1="33"
        x2="60"
        y2="33"
        stroke="rgba(255,255,255,0.4)"
        strokeWidth="1.5"
      />
      <rect x="13" y="44" width="8" height="14" rx="3" fill="#B85C35" />
    </svg>
  );
}

function WarningIllustration() {
  return (
    <svg
      width="68"
      height="72"
      viewBox="0 0 68 72"
      fill="none"
      style={{ position: "absolute", right: 18, bottom: 16 }}
    >
      <ellipse cx="34" cy="67" rx="20" ry="4" fill="rgba(0,0,0,0.12)" />
      <path
        d="M34 8 C34 8 44 22 44 32 C44 38 40 42 34 42 C28 42 24 38 24 32 C24 22 34 8 34 8Z"
        fill="#F87171"
      />
      <path
        d="M34 20 C34 20 40 28 40 34 C40 37 37.5 39 34 39 C30.5 39 28 37 28 34 C28 28 34 20 34 20Z"
        fill="#FCD34D"
      />
      <path
        d="M34 28 C34 28 37 32 37 35 C37 36.7 35.7 38 34 38 C32.3 38 31 36.7 31 35 C31 32 34 28 34 28Z"
        fill="rgba(255,255,255,0.7)"
      />
      <path d="M10 58 L34 14 L58 58 Z" fill="#FCD34D" opacity=".85" />
      <path d="M12 58 L34 18 L56 58 Z" fill="#FBBF24" />
      <line
        x1="34"
        y1="36"
        x2="34"
        y2="48"
        stroke="#7C3A00"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="34" cy="53" r="2.5" fill="#7C3A00" />
    </svg>
  );
}

function ClipboardIllustration() {
  return (
    <svg width="60" height="70" viewBox="0 0 60 70" fill="none">
      <rect x="8" y="12" width="44" height="52" rx="6" fill="#4A7BAD" />
      <rect x="10" y="14" width="40" height="48" rx="5" fill="#5B8FC2" />
      <rect x="22" y="6" width="16" height="12" rx="4" fill="#3A6A9A" />
      <rect x="26" y="4" width="8" height="6" rx="2" fill="#2E507A" />
      <rect
        x="16"
        y="26"
        width="28"
        height="3"
        rx="1.5"
        fill="rgba(255,255,255,0.35)"
      />
      <rect
        x="16"
        y="34"
        width="20"
        height="3"
        rx="1.5"
        fill="rgba(255,255,255,0.35)"
      />
      <rect
        x="16"
        y="42"
        width="24"
        height="3"
        rx="1.5"
        fill="rgba(255,255,255,0.35)"
      />
      <rect
        x="16"
        y="50"
        width="16"
        height="3"
        rx="1.5"
        fill="rgba(255,255,255,0.2)"
      />
      <circle cx="44" cy="50" r="8" fill="#E24B4A" opacity=".9" />
      <line
        x1="40"
        y1="50"
        x2="48"
        y2="50"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ── Main component ── */

export default function ProblemSection() {
  const cardHoverClass =
    "transition-transform duration-200 hover:-translate-y-0.5 cursor-pointer";

  return (
    <section
      id="problem"
      className="relative bg-white pb-12 pt-[132px] sm:pb-24 sm:pt-[200px] lg:pb-40 lg:pt-[300px]"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(0,0,0,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.8)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-slate-100/60 to-transparent sm:h-32 lg:h-40" />

      <div className="section-shell relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-2.5 sm:mb-14 sm:gap-4 lg:mb-20">
          <div className="h-px w-6 bg-slate-300 sm:w-8" />
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
            The Problem
          </span>
        </div>

        <div className="grid items-start gap-8 sm:gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20 xl:gap-28">
          {/* Left sticky copy */}
          <div className="lg:sticky lg:top-28">
            <h2 className="max-w-[17ch] text-[1.75rem] font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-[3.2rem] lg:leading-[1.08]">
              Happy customers stay silent.{" "}
              <em className="not-italic text-slate-400">
                Unhappy ones go public.
              </em>
            </h2>

            <p className="mt-4 max-w-md text-[15px] leading-6 text-slate-500 sm:mt-6 sm:text-lg sm:leading-8">
              Most businesses don&apos;t lose trust because of one bad
              experience. They lose it because happy customers are never asked,
              and unhappy customers are heard too late.
            </p>

            <div className="my-6 h-px w-full max-w-md bg-gradient-to-r from-slate-200 to-transparent sm:my-10" />

            <div className="grid max-w-md gap-4 sm:gap-6">
              <div className="flex items-end gap-2.5 sm:gap-4">
                <span className="text-[2.15rem] font-semibold tracking-tight text-slate-950 sm:text-5xl">
                  93%
                </span>
                <p className="mb-4 md:mb-2  text-[11px] leading-4.5 text-slate-500 sm:text-sm">
                  of unhappy customers don&apos;t complain directly.
                </p>
              </div>

              <div className="flex items-end gap-2.5 sm:gap-4">
                <span className="text-[2.15rem] font-semibold tracking-tight text-slate-950 sm:text-5xl">
                  4×
                </span>
                <p className="mb-4 md:mb-2 text-[11px] leading-4.5 text-slate-500 sm:text-sm">
                  more likely to share a negative experience than a positive. 
                </p>
              </div>
            </div>
          </div>

          {/* Right card grid */}
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3">
            {/* Card 1 — Silent happy customers */}
            <div
              className={`${cardHoverClass} min-h-[248px] rounded-[18px] p-3.5 sm:row-span-2 sm:min-h-0 sm:rounded-[22px] sm:p-5 lg:p-[22px]`}
              style={{
                background: "#164A35",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <BgCircle size={220} bottom={-50} right={-60} />
              <BgCircle size={130} bottom={30} right={-10} opacity={0.05} />

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <Badge
                  bg="rgba(255,255,255,0.12)"
                  border="1px solid rgba(110,231,183,0.3)"
                  dotColor="#34D399"
                  textColor="#6EE7B7"
                  label="Missed opportunity"
                />
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: ".1em",
                    color: "rgba(110,231,183,0.45)",
                  }}
                >
                  01
                </span>
              </div>

              <div
                className="py-3 sm:py-5"
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div className="scale-[0.72] sm:scale-90 lg:scale-100">
                  <MicIllustration />
                </div>
              </div>

              <div style={{ position: "relative", zIndex: 1 }}>
                <p
                  style={{
                    fontSize: "clamp(1.125rem, 1rem + 0.6vw, 1.25rem)",
                    fontWeight: 800,
                    lineHeight: 1.2,
                    color: "#fff",
                    margin: 0,
                  }}
                >
                  Silent happy customers
                </p>
                <p
                  style={{
                    fontSize: "clamp(0.8rem, 0.76rem + 0.18vw, 0.8125rem)",
                    lineHeight: 1.6,
                    marginTop: 7,
                    color: "rgba(209,250,229,0.72)",
                  }}
                >
                  Happy customers often leave without sharing their experience
                  unless you ask at the right moment.
                </p>
              </div>
            </div>

            {/* Card 2 — Public complaints */}
            {/* Card 2 — Public complaints */}
            <div
              className={`${cardHoverClass} min-h-[144px] rounded-[18px] p-3.5 sm:min-h-[180px] sm:rounded-[22px] sm:p-5 lg:p-[22px]`}
              style={{
                background: "#8B3A3A",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <BgCircle size={160} bottom={-40} right={-40} />

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 16,
                  position: "relative",
                  zIndex: 2,
                }}
              >
                <IconCircle bg="rgba(255,255,255,0.15)">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FCA5A5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 11l19-9-9 19-2-8-8-2z" />
                  </svg>
                </IconCircle>

                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: ".1em",
                    color: "rgba(255,200,200,0.45)",
                  }}
                >
                  02
                </span>
              </div>

              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  maxWidth: "72%",
                }}
              >
                <p
                  style={{
                    fontSize: "clamp(1.125rem, 1rem + 0.6vw, 1.25rem)",
                    fontWeight: 800,
                    color: "#fff",
                    margin: 0,
                  }}
                >
                  Public complaints
                </p>

                <p
                  style={{
                    fontSize: "clamp(0.8rem, 0.76rem + 0.18vw, 0.8125rem)",
                    lineHeight: 1.6,
                    marginTop: 7,
                    color: "rgba(254,226,226,0.72)",
                  }}
                >
                  One unresolved bad experience can damage trust for months with
                  public reviews.
                </p>
              </div>

              <div
                className="scale-[0.68] sm:scale-90 lg:scale-100"
                style={{
                  position: "absolute",
                  right: 2,
                  bottom: 0,
                  opacity: 0.65,
                  zIndex: 1,
                  pointerEvents: "none",
                }}
              >
                <MegaphoneIllustration />
              </div>
            </div>

            {/* Card 3 — No early warning */}
            {/* Card 3 — No early warning */}
            <div
              className={`${cardHoverClass} min-h-[144px] rounded-[18px] p-3.5 sm:min-h-[180px] sm:rounded-[22px] sm:p-5 lg:p-[22px]`}
              style={{
                background: "#D89A2B",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <BgCircle size={160} bottom={-40} right={-40} opacity={0.08} />

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 16,
                  position: "relative",
                  zIndex: 2,
                }}
              >
                <IconCircle bg="rgba(255,255,255,0.18)">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#7C3A00"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                    <line x1="1" y1="1" x2="23" y2="23" />
                  </svg>
                </IconCircle>

                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: ".1em",
                    color: "rgba(90,45,0,0.5)",
                  }}
                >
                  03
                </span>
              </div>

              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  maxWidth: "72%",
                }}
              >
                <p
                  style={{
                    fontSize: "clamp(1.125rem, 1rem + 0.6vw, 1.25rem)",
                    fontWeight: 800,
                    color: "#4A2500",
                    margin: 0,
                  }}
                >
                  No early warning
                </p>

                <p
                  style={{
                    fontSize: "clamp(0.8rem, 0.76rem + 0.18vw, 0.8125rem)",
                    lineHeight: 1.6,
                    marginTop: 7,
                    color: "rgba(74,37,0,0.72)",
                  }}
                >
                  Small issues turn public before you even know there&apos;s a
                  problem.
                </p>
              </div>

              <div
                className="scale-[0.68] sm:scale-90 lg:scale-100"
                style={{
                  position: "absolute",
                  right: 2,
                  bottom: 0,
                  opacity: 0.65,
                  zIndex: 1,
                  pointerEvents: "none",
                }}
              >
                <WarningIllustration />
              </div>
            </div>

            {/* Card 4 — Generic feedback forms */}
            <div
              className={`${cardHoverClass} rounded-[18px] p-3.5 sm:col-span-2 sm:rounded-[22px] sm:p-5 lg:p-[22px]`}
              style={{
                background: "#3F638C",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  width: 320,
                  height: 320,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.04)",
                  right: -96,
                  top: "50%",
                  transform: "translateY(-50%)",
                  pointerEvents: "none",
                }}
              />

              <span
                style={{
                  position: "absolute",
                  top: 16,
                  right: 20,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: ".1em",
                  color: "rgba(147,197,253,0.35)",
                }}
              >
                04
              </span>

              <div className="relative z-[1] flex min-h-[128px] items-center gap-2.5 pr-1 sm:min-h-[100px] sm:gap-5 sm:pr-3">
                <div className="flex min-w-0 flex-1 items-center gap-2.5 sm:gap-5">
                  <div className="shrink-0 scale-[0.84] sm:scale-100">
                    <IconCircle bg="rgba(255,255,255,0.15)">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#93C5FD"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                        <line x1="8" y1="13" x2="16" y2="13" />
                        <line x1="8" y1="17" x2="13" y2="17" />
                      </svg>
                    </IconCircle>
                  </div>

                  <div className="min-w-0 max-w-[420px]">
                    <p
                      style={{
                        fontSize: "clamp(1.125rem, 1rem + 0.6vw, 1.25rem)",
                        fontWeight: 800,
                        color: "#EFF6FF",
                        margin: 0,
                        lineHeight: 1.15,
                      }}
                    >
                      Generic feedback forms
                    </p>

                    <p
                      style={{
                        fontSize: "clamp(0.8rem, 0.76rem + 0.18vw, 0.8125rem)",
                        lineHeight: 1.55,
                        marginTop: 8,
                        color: "rgba(219,234,254,0.72)",
                      }}
                    >
                      Plain survey links feel cold — most customers simply
                      ignore them.
                    </p>
                  </div>
                </div>

                <div
                  className="ml-auto flex shrink-0 items-center gap-2 sm:gap-5"
                  style={{
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <div className="hidden md:block">
                    <Badge
                      bg="rgba(255,255,255,0.14)"
                      dotColor="#60A5FA"
                      textColor="#DBEAFE"
                      label="Low response rate"
                    />
                  </div>
                  <div className="translate-x-0.5 scale-[0.78] sm:translate-x-2 sm:scale-100">
                    <ClipboardIllustration />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:mt-10 lg:mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-950 underline-offset-4 hover:underline"
          >
            See how Woice fixes this
            <ArrowRight className="size-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
