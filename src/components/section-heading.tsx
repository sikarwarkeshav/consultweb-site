import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  center?: boolean;
  className?: string;
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={cn(center ? "mx-auto max-w-2xl text-center" : "max-w-2xl", className)}>
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-lime-300">
        {eyebrow}
      </p>
      <h2
        className={cn(
          "text-3xl font-semibold tracking-tight sm:text-4xl",
          light ? "text-[#0d1a18]" : "text-white",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className={cn("mt-4 text-base leading-7", light ? "text-[#2a3d39]" : "text-slate-300")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
