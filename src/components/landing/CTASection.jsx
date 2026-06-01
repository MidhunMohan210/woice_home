import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CTASection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="section-shell">
        <Card className="border border-black/8 bg-black text-white shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
          <CardHeader className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-white/60">
              CTA placeholder
            </p>
            <CardTitle className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Ready for the final conversion section when we build the full page.
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-start gap-4 pt-0 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-base leading-7 text-white/70">
              For now, this keeps the structure complete and ready for real
              copy, social proof, and conversion details.
            </p>
            <a
              href="https://app.woice.it.com/register"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-black transition hover:bg-white/90"
            >
              Get started
            </a>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
