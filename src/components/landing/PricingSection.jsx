import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const planHighlights = [
  "Unlimited feedback requests",
  "Private complaint routing",
  "Embeddable testimonial widgets",
  "Review prompts for happy customers",
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-16 sm:py-20">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Pricing
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Simple pricing built for local businesses.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            One clean plan to collect feedback, publish social proof, and grow
            your reputation without extra admin work.
          </p>
        </div>

        <Card className="mx-auto mt-10 max-w-4xl border border-black/8 bg-white shadow-[0_24px_60px_rgba(0,0,0,0.08)]">
          <CardContent className="grid gap-8 p-6 md:grid-cols-[1.1fr_0.9fr] md:p-8">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Growth plan
              </p>
              <CardHeader className="px-0">
                <CardTitle className="text-4xl font-semibold tracking-tight">
                  $49
                  <span className="ml-2 text-lg font-medium text-muted-foreground">
                    / month
                  </span>
                </CardTitle>
              </CardHeader>
              <p className="text-base leading-7 text-muted-foreground">
                Start with a 14-day free trial, then keep the full feedback and
                testimonial flow live on one straightforward subscription.
              </p>
            </div>

            <div className="rounded-3xl bg-zinc-50 p-6">
              <ul className="space-y-4">
                {planHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                    <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-black text-white">
                      <Check className="size-3" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Button className="mt-6 h-12 w-full rounded-full px-6 text-sm">
                Start free
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
