import Script from "next/script";

export default function Testimonials() {
  return (
    <>
      <div
        className="woice-testimonial-widget"
        data-business-slug="woice-pxiuk"
        data-theme="light"
        data-layout="slider"
        data-height="420"
      />

      <Script
        src="https://www.woice.it.com/embed.js"
        strategy="afterInteractive"
        data-base-url="https://www.woice.it.com"
      />
    </>
  );
}