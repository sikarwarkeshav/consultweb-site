import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export type ServiceCardProps = {
  title: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  deliverables: string[];
  useCases: string[];
  idx?: number;
};

export function ServiceCard({ title, shortDescription, description, benefits, deliverables, useCases, idx = 0 }: ServiceCardProps) {
  return (
    <Card className="group h-full border-white/10 bg-[#0d221f]/90 p-0 transition-transform duration-300 hover:-translate-y-1 hover:border-lime-400/40">
      <CardHeader className="pb-3">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-400/12 text-lg font-semibold text-lime-200 ring-1 ring-inset ring-lime-400/30">
          0{idx + 1}
        </div>
        <CardTitle className="text-2xl text-white">{title}</CardTitle>
        <CardDescription className="mt-3 text-base text-slate-300">{shortDescription}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-sm leading-7 text-slate-300">{description}</p>

        <div>
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-lime-300">
            Benefits
          </h4>
          <ul className="space-y-2 text-sm text-slate-200">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-lime-300" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-lime-300">
            Deliverables
          </h4>
          <ul className="space-y-2 text-sm text-slate-200">
            {deliverables.map((deliverable) => (
              <li key={deliverable} className="flex items-start gap-2">
                <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-lime-300" />
                <span>{deliverable}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-lime-300">
            Ideal for
          </h4>
          <div className="flex flex-wrap gap-2">
            {useCases.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <Button asChild variant="secondary" className="w-full justify-center">
          <Link href="/contact">
            Discuss this service <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
