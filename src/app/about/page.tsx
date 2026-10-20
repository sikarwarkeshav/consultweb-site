import type { Metadata } from "next";

import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "About",
  description:
    "ConsultWeb is a practical technology partner focused on building useful business tools, web products, and digital experiences through thoughtful engineering.",
};

export default function AboutPage() {
  return (
    <div className="section-shell py-16 md:py-20">
      <SectionHeading
        eyebrow="About"
        title="Technology partner for practical business growth"
        description="ConsultWeb helps founders and teams turn business ideas into useful digital products with clarity, focus, and technical discipline."
        center
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[30px] border border-white/10 bg-[#0d221f]/80 p-8">
          <p className="text-base leading-8 text-slate-300">
            We believe good technology should reduce friction, improve customer experience, and help teams operate more effectively. That means we focus on business context first, then shape the product, workflows, and interfaces around what actually needs to happen.
          </p>
          <p className="mt-6 text-base leading-8 text-slate-300">
            Whether you need a startup MVP, an internal platform, a custom portal, or a polished commerce experience, ConsultWeb brings a product mindset to the work and keeps delivery practical, collaborative, and measurable.
          </p>
        </div>

        <div className="rounded-[30px] border border-lime-400/20 bg-[#0d221f]/85 p-8">
          <h3 className="text-xl font-semibold text-white">How we work</h3>
          <ul className="mt-6 space-y-5 text-sm leading-7 text-slate-300">
            <li>• Start with the business problem, user need, and product goal.</li>
            <li>• Define the right solution path before building too much.</li>
            <li>• Build clean, maintainable systems that support ongoing growth.</li>
            <li>• Keep communication clear and decisions grounded in real value.</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Business-first",
            text: "Every decision starts with the business outcome it supports.",
          },
          {
            title: "Scalable by design",
            text: "We favor systems that remain manageable as the business grows.",
          },
          {
            title: "Clear communication",
            text: "The process stays transparent, structured, and easy to follow.",
          },
        ].map((item) => (
          <div key={item.title} className="rounded-[28px] border border-white/10 bg-[#0d221f]/80 p-6">
            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-4 text-base leading-7 text-slate-300">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
