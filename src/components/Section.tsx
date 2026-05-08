import { useReveal } from "@/hooks/use-reveal";
import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  index: string;
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export function Section({
  id,
  index,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}: SectionProps) {
  const { ref, className: revealCls } = useReveal<HTMLDivElement>();
  return (
    <section
      id={id}
      className={`relative scroll-mt-24 px-5 py-24 md:px-8 md:py-32 ${className}`}
    >
      <div className="mx-auto max-w-6xl">
        <div ref={ref} className={revealCls}>
          <div className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
            <span className="text-brand">{index}</span>
            <span className="h-px w-8 bg-border" />
            {eyebrow && <span>{eyebrow}</span>}
          </div>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-5 max-w-3xl text-pretty text-base text-muted-foreground md:text-lg">
              {subtitle}
            </p>
          )}
        </div>
        <div className="mt-12 md:mt-16">{children}</div>
      </div>
    </section>
  );
}
