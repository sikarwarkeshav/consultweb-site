import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "ConsultWeb builds startup MVPs, SaaS products, e-commerce websites, automation, and custom business tools for growing teams.",
};

export default function ServicesPage() {
  return (
    <div className="section-shell py-16 md:py-20">
      <SectionHeading
        eyebrow="Services"
        title="Digital solutions shaped by business needs"
        description="ConsultWeb helps founders, operators, and teams turn ideas into products, streamline operations, and improve customer experience with smart, scalable web systems."
        center
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {services.map((service, index) => (
          <ServiceCard key={service.title} {...service} idx={index} />
        ))}
      </div>

      <div className="mt-16 rounded-[32px] border border-white/10 bg-[#0d221f]/80 p-8 sm:p-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="section-kicker">What to expect</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
              Clear delivery, measurable progress, and practical next steps.
            </h2>
          </div>
          <Button asChild size="lg">
            <Link href="/contact">
              Discuss Your Project <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
