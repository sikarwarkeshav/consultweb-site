import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  Gauge,
  Layers3,
  Rocket,
  Sparkles,
  Workflow,
} from "lucide-react";

import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  comparisonRows,
  faqs,
  featuredProjects,
  processSteps,
  services,
  whyChoose,
} from "@/lib/site-data";

const homeServiceIcons = [Rocket, BriefcaseBusiness, BarChart3, Layers3, Workflow, Gauge];

export default function HomePage() {
  return (
    <div className="pb-20">
      <section className="section-shell pt-14 pb-20 md:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <div>
            <Badge className="mb-6">ConsultWeb</Badge>
            <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              From Idea to Launch. We Build Web Products That Move Your Business Forward.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Whether you&apos;re validating a startup idea, launching an online store, or streamlining business operations, ConsultWeb builds digital solutions tailored to your needs.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">
                  Discuss Your Project <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-lime-300" />
                Business-first strategy
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-lime-300" />
                Scalable execution
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-8 top-10 h-36 w-36 rounded-full bg-lime-400/20 blur-3xl" />
            <div className="absolute -right-6 bottom-8 h-40 w-40 rounded-full bg-emerald-500/20 blur-3xl" />

            <div className="glass-card relative overflow-hidden p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Build</p>
                  <p className="mt-4 text-3xl font-semibold text-white">MVP</p>
                  <p className="mt-2 text-sm text-slate-300">Prototype to launch</p>
                </div>
                <div className="rounded-3xl border border-lime-400/30 bg-lime-400/10 p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-lime-200">Scale</p>
                  <p className="mt-4 text-3xl font-semibold text-white">SaaS</p>
                  <p className="mt-2 text-sm text-slate-200">Smart product systems</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-[#0a1f1d] p-5 sm:col-span-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Workflow</p>
                      <p className="mt-2 text-xl font-semibold text-white">Discovery → Build → Launch</p>
                    </div>
                    <Sparkles className="h-8 w-8 text-lime-300" />
                  </div>
                  <div className="mt-6 h-2.5 rounded-full bg-white/5">
                    <div className="h-2.5 w-[78%] rounded-full bg-gradient-to-r from-lime-300 to-emerald-300" />
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-3xl border border-white/10 bg-slate-950/40 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Delivery</p>
                    <p className="mt-1 text-lg font-semibold text-white">Clear milestones</p>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-lime-400/10 px-2.5 py-1 text-xs font-medium text-lime-200">
                    <span className="inline-block h-2 w-2 rounded-full bg-lime-300" />
                    On track
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-20">
        <SectionHeading
          eyebrow="Services"
          title="A practical partner for product and growth work"
          description="From product discovery to polished customer experiences, we build digital systems that solve real business problems and scale as your operations evolve."
          center
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.slice(0, 6).map((service, index) => {
            const Icon = homeServiceIcons[index % homeServiceIcons.length];
            return (
              <div
                key={service.title}
                className="group rounded-[28px] border border-white/10 bg-[#0d221f]/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-lime-400/40 hover:bg-[#0f2a26]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-400/12 text-lime-200 ring-1 ring-inset ring-lime-400/20">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{service.shortDescription}</p>
                <Link
                  href="/services"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-lime-200 transition-colors hover:text-lime-100"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section-shell py-20">
        <SectionHeading
          eyebrow="Why ConsultWeb"
          title="Thoughtful engineering for real operational needs"
          description="We build with business clarity, product thinking, and technical reliability at the center — not just pretty interfaces."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {whyChoose.map((reason, index) => (
            <div key={reason} className="rounded-[28px] border border-white/10 bg-[#0d221f]/80 p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-400/12 text-lg font-semibold text-lime-200 ring-1 ring-inset ring-lime-400/20">
                {index + 1}
              </div>
              <p className="text-base leading-7 text-slate-200">{reason}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#0a1d1a] py-20">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Process"
            title="A straightforward path from idea to launch"
            description="We keep the work structured, transparent, and grounded in outcomes that help your business move faster."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <div key={step.title} className="rounded-[28px] border border-white/10 bg-[#0d221f]/85 p-6">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-lime-400 text-lg font-semibold text-[#071b18]">
                  {index + 1}
                </div>
                <p className="text-2xl font-semibold text-white">{step.title}</p>
                <p className="mt-4 text-base leading-7 text-slate-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-20">
        <SectionHeading
          eyebrow="FAQ"
          title="Common questions before we start"
          description="We keep scope, implementation, and business fit clear so projects move with fewer surprises."
          center
        />

        <div className="mx-auto mt-12 max-w-4xl">
          <Accordion type="single" collapsible className="w-full rounded-[28px] border border-white/10 bg-[#0d221f]/80 p-2">
            {faqs.map((item) => (
              <AccordionItem key={item.question} value={item.question} className="rounded-2xl px-4">
                <AccordionTrigger className="text-left text-white">{item.question}</AccordionTrigger>
                <AccordionContent className="text-base leading-7 text-slate-300">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="section-shell pb-8 pt-8">
        <div className="rounded-[32px] border border-lime-400/25 bg-gradient-to-r from-[#0d221f] via-[#122a26] to-[#0d221f] p-8 sm:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="section-kicker">Let&apos;s build</p>
              <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Need a digital product that supports your next business move?
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">Discuss Your Project</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
