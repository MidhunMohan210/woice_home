import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  "Collect feedback after a customer visit or purchase.",
  "Separate private complaints from public-ready praise.",
  "Publish approved testimonials and guide happy customers to reviews.",
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 sm:py-20">
      <div className="section-shell">
        <Card className="border border-black/8 bg-zinc-50 shadow-sm">
          <CardHeader>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
              How it works
            </p>
            <CardTitle className="text-3xl font-semibold tracking-tight sm:text-4xl">
              A simple placeholder flow for the next build phase.
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step}
                className="rounded-3xl border border-black/8 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-black text-sm font-semibold text-white">
                  {index + 1}
                </div>
                <p className="text-base font-medium text-foreground">{step}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
