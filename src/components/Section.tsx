import type { ReactNode } from "react";

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
        <div className="mb-8 md:mb-12">
          {eyebrow && (
            <span className="mb-4 block text-sm font-medium uppercase tracking-widest text-brand">
              {eyebrow}
            </span>
          )}
          <h2 className="text-pretty text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-5 max-w-3xl text-pretty text-base text-muted-foreground md:text-lg">
              {subtitle}
            </p>
          )}
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}
