import { useEffect, useState } from "react";
import { SharksLogo } from "./SharksLogo";

const SECTIONS = [
  { id: "capa", label: "Capa" },
  { id: "atual", label: "Cenário" },
  { id: "evolucao", label: "Evolução" },
  { id: "proposta", label: "Proposta" },
  { id: "pilares", label: "Pilares" },
  { id: "mercado", label: "Mercado" },
  { id: "comercial", label: "Comercial" },
  { id: "interno", label: "Interno" },
  { id: "automacoes", label: "Automações" },
  { id: "comparativo", label: "Comparativo" },
  { id: "beneficios", label: "Benefícios" },
  { id: "cronograma", label: "Cronograma" },
  { id: "valor", label: "Parceria" },
  { id: "cta", label: "Avançar" },
];

export function Header() {
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? (h.scrollTop / total) * 100 : 0);
      setScrolled(h.scrollTop > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <SharksLogo />
        <div className="hidden items-center gap-6 text-xs text-muted-foreground md:flex">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse-glow" />
            Proposta Comercial
          </span>
          <span className="text-foreground/80">PB &amp; RN Foods</span>
        </div>
        <a
          href="#cta"
          className="hidden md:inline-flex items-center rounded-full bg-gradient-brand px-4 py-2 text-xs font-semibold text-primary-foreground shadow-glow hover:opacity-90 transition"
        >
          Avançar com a evolução
        </a>
      </div>

      {/* progress bar */}
      <div className="h-[2px] w-full bg-border/40">
        <div
          className="h-full bg-gradient-brand transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* section dots — desktop right rail */}
      <nav className="pointer-events-none fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-2 lg:flex">
        {SECTIONS.map((s, i) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="pointer-events-auto group flex items-center gap-2"
            aria-label={s.label}
          >
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground opacity-0 transition group-hover:opacity-100">
              {String(i + 1).padStart(2, "0")} · {s.label}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/50 transition group-hover:bg-brand group-hover:scale-150" />
          </a>
        ))}
      </nav>
    </header>
  );
}
