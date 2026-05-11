import type { ReactNode } from "react";
import { AnimateOnScroll } from "./AnimateOnScroll";

interface SectionProps {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-24 px-5 py-20 md:px-8 md:py-28 ${className}`}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col items-center text-center md:mb-16">
          {eyebrow && (
            <AnimateOnScroll variant="fadeDown" delay={0}>
              <span className="mb-4 block text-sm font-medium uppercase tracking-widest text-brand">
                {eyebrow}
              </span>
            </AnimateOnScroll>
          )}
          <AnimateOnScroll variant="fadeUp" delay={0.1}>
            <h2 className="text-pretty text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
              {title}
            </h2>
          </AnimateOnScroll>
          {subtitle && (
            <AnimateOnScroll variant="fadeUp" delay={0.2}>
              <p className="mt-5 max-w-3xl text-pretty text-base text-muted-foreground md:text-lg">
                {subtitle}
              </p>
            </AnimateOnScroll>
          )}
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}
