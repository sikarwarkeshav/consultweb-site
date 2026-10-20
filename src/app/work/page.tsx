import type { Metadata } from "next";

import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { featuredProjects } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Explore demo projects and product concepts built by ConsultWeb across SaaS, commerce, booking systems, and operations platforms.",
};

export default function WorkPage() {
  return (
    <div className="section-shell py-16 md:py-20">
      <SectionHeading
        eyebrow="Work / Portfolio"
        title="Product concepts built to solve real business problems"
        description="These project examples highlight the kind of web products and business systems we design and build. Each project is clearly labeled as a demo concept until new client work is ready to publish."
        center
      />

      <div className="mt-12 rounded-[30px] border border-lime-400/15 bg-[#0d221f]/75 p-4 sm:p-6">
        <p className="text-sm text-slate-300">
          Demo project labels are intentionally used until real client case studies are available. No fabricated testimonials or results are included.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
