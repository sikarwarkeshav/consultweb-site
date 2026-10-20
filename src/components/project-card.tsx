import { ArrowUpRight, ExternalLink } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type ProjectCardProps = {
  title: string;
  description: string;
  stack: string[];
  label: string;
};

export function ProjectCard({ title, description, stack, label }: ProjectCardProps) {
  return (
    <Card className="group relative overflow-hidden border-white/10 bg-[#0d221f]/90 transition-all duration-300 hover:border-lime-400/40 hover:bg-[#0f2925]">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-lime-400 via-emerald-300 to-teal-300" />
      <CardHeader className="pb-3">
        <div className="mb-5 flex items-center justify-between gap-4">
          <Badge variant="secondary">{label}</Badge>
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lime-200 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>
        <CardTitle className="text-2xl text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        <CardDescription className="text-base leading-7 text-slate-300">{description}</CardDescription>
        <div className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-lime-400/20 bg-lime-400/10 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-lime-100"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2 text-sm font-medium text-slate-200">
          <ExternalLink className="h-4 w-4 text-lime-300" />
          Concept showcase
        </div>
      </CardContent>
    </Card>
  );
}
