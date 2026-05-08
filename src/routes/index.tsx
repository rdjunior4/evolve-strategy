import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bell,
  Boxes,
  Building2,
  CheckCircle2,
  Compass,
  Cpu,
  Crosshair,
  FileText,
  Flag,
  Globe2,
  Headphones,
  Heart,
  LayoutGrid,
  LineChart,
  MapPin,
  MessageSquare,
  Megaphone,
  Network,
  Radar,
  Rocket,
  Send,
  Settings2,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Section } from "@/components/Section";
import { SharksLogo } from "@/components/SharksLogo";
import { useReveal } from "@/hooks/use-reveal";
import type { LucideIcon } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Evolução de Contrato | PB & RN Foods Distribuidora" },
      {
        name: "description",
        content:
          "Proposta de evolução contratual para implementação de marketing estratégico, comunicação interna, CRM e automações para a PB & RN Foods Distribuidora.",
      },
      { property: "og:title", content: "Evolução de Contrato | PB & RN Foods Distribuidora" },
      {
        property: "og:description",
        content:
          "Marketing Estratégico, Tecnologia, Comunicação Interna e Automações por Sharks Company.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen text-foreground">
      <Header />
      <main className="pt-16">
        <Hero />
        <Atual />
        <Evolucao />
        <Proposta />
        <Pilares />
        <Mercado />
        <Comercial />
        <Interno />
        <Automacoes />
        <Comparativo />
        <Beneficios />
        <Cronograma />
        <Valor />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

/* ================== 1 — HERO ================== */
function Hero() {
  const { ref, className } = useReveal<HTMLDivElement>();
  return (
    <section
      id="capa"
      className="relative flex min-h-[92vh] items-center overflow-hidden px-5 py-24 md:px-8"
    >
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-brand/30 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-brand-glow/15 blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-12 lg:gap-8">
        <div ref={ref} className={`${className} lg:col-span-8`}>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-brand" />
            <span className="text-xs font-medium tracking-wider text-muted-foreground">
              PROPOSTA EXCLUSIVA · 2025
            </span>
          </div>

          <h1 className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
            Evolução de <span className="text-brand-gradient">Contrato</span>
          </h1>

          <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-border bg-gradient-card px-5 py-3 shadow-card">
            <Building2 className="h-5 w-5 text-brand" />
            <span className="text-base font-medium text-foreground md:text-lg">
              PB &amp; RN Foods Distribuidora
            </span>
          </div>

          <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            Marketing Estratégico, Tecnologia e Automação para fortalecer a marca,
            apoiar o comercial e impulsionar o crescimento.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#atual"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-90"
            >
              Ver proposta
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="#cta"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition hover:bg-surface"
            >
              Ir direto à decisão
            </a>
          </div>

          <div className="mt-14 grid max-w-xl grid-cols-3 gap-4 border-t border-border pt-8">
            <Stat n="14" label="Seções estratégicas" />
            <Stat n="04" label="Frentes integradas" />
            <Stat n="01" label="Operação completa" />
          </div>
        </div>

        <div className="relative hidden lg:col-span-4 lg:block">
          <div className="absolute inset-0 rounded-3xl bg-gradient-card border border-border shadow-elevated p-6 animate-float">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                Plano de Marketing
              </div>
              <div className="h-2 w-2 rounded-full bg-brand animate-pulse-glow" />
            </div>
            <div className="mt-6 space-y-3">
              {[
                { icon: Target, label: "Estratégia" },
                { icon: Sparkles, label: "Branding" },
                { icon: TrendingUp, label: "Comercial" },
                { icon: Users, label: "CRM" },
                { icon: Cpu, label: "Tecnologia" },
                { icon: Workflow, label: "Automação" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-xl border border-border bg-background/40 px-3 py-2.5"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand/15 text-brand">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-sm text-foreground">{label}</span>
                  <CheckCircle2 className="ml-auto h-4 w-4 text-brand/80" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="text-3xl font-semibold text-foreground md:text-4xl">{n}</div>
      <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

/* ================== 2 — CENÁRIO ATUAL ================== */
function Atual() {
  return (
    <Section
      id="atual"
      index="01"
      eyebrow="Cenário Atual"
      title={
        <>
          Contrato <span className="text-brand-gradient">Atual</span>
        </>
      }
      subtitle="Atualmente, a atuação contempla ações de Marketing Digital voltadas à presença da marca, comunicação online e apoio às iniciativas de divulgação."
    >
      <div className="grid gap-8 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-card p-8 shadow-card">
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand/20 blur-3xl" />
            <div className="relative">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                Hoje
              </div>
              <div className="mt-3 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand text-primary-foreground shadow-glow">
                  <Globe2 className="h-6 w-6" />
                </div>
                <div className="text-2xl font-semibold md:text-3xl">Marketing Digital</div>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-3">
                {[
                  { icon: MessageSquare, label: "Redes" },
                  { icon: FileText, label: "Conteúdo" },
                  { icon: Megaphone, label: "Divulgação" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center gap-2 rounded-xl border border-border bg-background/30 p-3"
                  >
                    <Icon className="h-5 w-5 text-brand" />
                    <span className="text-xs text-muted-foreground">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-7">
          <div className="rounded-3xl border border-border bg-surface/40 p-8 backdrop-blur">
            <div className="text-xs font-medium uppercase tracking-widest text-brand">
              Leitura estratégica
            </div>
            <p className="mt-4 text-lg leading-relaxed text-foreground/90 md:text-xl">
              O modelo atual contribui para a presença digital da empresa, mas o próximo
              estágio de crescimento exige uma atuação{" "}
              <span className="text-brand">mais estratégica, integrada</span> e conectada
              aos objetivos comerciais da distribuidora.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ================== 3 — OPORTUNIDADE ================== */
function Evolucao() {
  return (
    <Section
      id="evolucao"
      index="02"
      eyebrow="Oportunidade de Evolução"
      title={
        <>
          De marketing operacional para{" "}
          <span className="text-brand-gradient">marketing estratégico</span>
        </>
      }
      subtitle="A PB & RN Foods possui oportunidade de transformar o marketing em uma ferramenta mais robusta de crescimento, relacionamento com clientes, fortalecimento de marca e apoio direto ao time comercial."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <EvolCol
          tag="Antes"
          tone="muted"
          items={["Ações digitais", "Presença online", "Comunicação pontual"]}
        />
        <EvolCol
          tag="Depois"
          tone="brand"
          items={[
            "Plano completo de marketing",
            "Estratégia comercial",
            "CRM",
            "Comunicação interna",
            "Automações",
            "Acompanhamento e revisão",
          ]}
        />
      </div>

      <div className="mt-10 rounded-3xl border border-brand/30 bg-gradient-card p-8 shadow-glow md:p-10">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/15 text-brand">
            <Zap className="h-5 w-5" />
          </div>
          <p className="text-pretty text-lg font-medium text-foreground md:text-2xl">
            A evolução não adiciona apenas novos serviços. Ela cria uma operação de
            marketing <span className="text-brand">mais inteligente, organizada e
            orientada por desempenho</span>.
          </p>
        </div>
      </div>
    </Section>
  );
}

function EvolCol({
  tag,
  tone,
  items,
}: {
  tag: string;
  tone: "brand" | "muted";
  items: string[];
}) {
  const isBrand = tone === "brand";
  return (
    <div
      className={`rounded-3xl border p-7 ${
        isBrand
          ? "border-brand/40 bg-gradient-card shadow-card"
          : "border-border bg-surface/40"
      }`}
    >
      <div
        className={`text-xs uppercase tracking-widest ${
          isBrand ? "text-brand" : "text-muted-foreground"
        }`}
      >
        {tag}
      </div>
      <ul className="mt-6 space-y-3">
        {items.map((it) => (
          <li key={it} className="flex items-center gap-3 text-foreground/90">
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                isBrand ? "bg-brand" : "bg-muted-foreground/60"
              }`}
            />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ================== 4 — NOVA PROPOSTA ================== */
function Proposta() {
  const cards: { icon: LucideIcon; label: string }[] = [
    { icon: Target, label: "Estratégia" },
    { icon: Sparkles, label: "Branding" },
    { icon: TrendingUp, label: "Comercial" },
    { icon: Users, label: "CRM" },
    { icon: Cpu, label: "Tecnologia" },
    { icon: Workflow, label: "Automação" },
    { icon: Bell, label: "Comunicação Interna" },
    { icon: BarChart3, label: "Acompanhamento" },
  ];
  return (
    <Section
      id="proposta"
      index="03"
      eyebrow="Nova Proposta"
      title={
        <>
          Plano Completo de Marketing{" "}
          <span className="text-brand-gradient">Sharks Company</span>
        </>
      }
      subtitle="Uma evolução estratégica para a PB & RN Foods Distribuidora. Estruturada para fortalecer a marca, organizar a comunicação, melhorar o relacionamento com clientes e apoiar o crescimento comercial."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map(({ icon: Icon, label }, i) => (
          <div
            key={label}
            className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-card p-6 transition hover:border-brand/50 hover:shadow-glow"
          >
            <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-brand/10 blur-2xl opacity-0 transition group-hover:opacity-100" />
            <div className="relative">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/15 text-brand">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="text-base font-semibold">{label}</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ================== 5 — PILARES ================== */
function Pilares() {
  const pilares: { icon: LucideIcon; title: string; text: string }[] = [
    {
      icon: Heart,
      title: "Essência da Marca",
      text: "Definição da identidade central da empresa, seus diferenciais, valores e percepção desejada no mercado.",
    },
    {
      icon: MapPin,
      title: "Análise de Georreferenciamento",
      text: "Mapeamento de regiões, oportunidades, concentração de clientes e áreas prioritárias para atuação comercial.",
    },
    {
      icon: Users,
      title: "Público-Alvo e Persona",
      text: "Definição dos perfis ideais de clientes, segmentos prioritários e comportamentos de compra.",
    },
    {
      icon: Crosshair,
      title: "Posicionamento de Marca",
      text: "Construção da forma como a PB & RN Foods deve ser percebida pelo mercado.",
    },
    {
      icon: Sparkles,
      title: "Branding",
      text: "Fortalecimento visual e verbal da marca para ampliar reconhecimento, consistência e valor percebido.",
    },
    {
      icon: Flag,
      title: "Objetivos de Marketing",
      text: "Definição de metas claras para marca, vendas, relacionamento e crescimento.",
    },
    {
      icon: Compass,
      title: "Estratégias de Marketing",
      text: "Construção das estratégias para campanhas, comunicação, canais e ações comerciais.",
    },
    {
      icon: LayoutGrid,
      title: "Plano de Ação",
      text: "Organização prática das ações em cronogramas, prioridades e responsabilidades.",
    },
    {
      icon: Network,
      title: "CRM",
      text: "Estruturação do relacionamento com clientes, base comercial, reativação e acompanhamento de oportunidades.",
    },
    {
      icon: LineChart,
      title: "Acompanhamento e Revisão",
      text: "Rotina de análise, ajustes e evolução contínua do plano.",
    },
  ];
  return (
    <Section
      id="pilares"
      index="04"
      eyebrow="Pilares Estratégicos"
      title={
        <>
          Pilares Estratégicos do <span className="text-brand-gradient">Plano</span>
        </>
      }
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {pilares.map(({ icon: Icon, title, text }, i) => (
          <div
            key={title}
            className="group relative rounded-2xl border border-border bg-gradient-card p-6 transition hover:border-brand/40"
          >
            <div className="flex items-start justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/15 text-brand">
                <Icon className="h-5 w-5" />
              </div>
              <span className="text-xs font-medium tracking-widest text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="mt-5 text-lg font-semibold text-foreground">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ================== 6 — INTELIGÊNCIA DE MERCADO ================== */
function Mercado() {
  const items = [
    { icon: MapPin, label: "Mapeamento regional" },
    { icon: Radar, label: "Identificação de oportunidades" },
    { icon: Target, label: "Priorização de segmentos" },
    { icon: Network, label: "Análise de canais" },
    { icon: Rocket, label: "Apoio à expansão comercial" },
  ];
  return (
    <Section
      id="mercado"
      index="05"
      eyebrow="Inteligência de Mercado"
      title={
        <>
          Análise, território e{" "}
          <span className="text-brand-gradient">oportunidades comerciais</span>
        </>
      }
      subtitle="O plano contempla uma leitura mais profunda do mercado de atuação da PB & RN Foods, considerando regiões, segmentos, comportamento dos clientes, oportunidades comerciais e canais de relacionamento."
    >
      <div className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <MapVisual />
        </div>
        <div className="grid gap-3 lg:col-span-5">
          {items.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-4 rounded-2xl border border-border bg-gradient-card p-5 transition hover:border-brand/40"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/15 text-brand">
                <Icon className="h-5 w-5" />
              </div>
              <span className="font-medium text-foreground">{label}</span>
              <ArrowUpRight className="ml-auto h-4 w-4 text-muted-foreground" />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function MapVisual() {
  const points = [
    { x: 22, y: 30 },
    { x: 48, y: 22 },
    { x: 72, y: 36 },
    { x: 35, y: 58 },
    { x: 60, y: 68 },
    { x: 82, y: 60 },
    { x: 18, y: 78 },
  ];
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-gradient-card p-6 shadow-card">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-brand/20 blur-3xl" />
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
        {points.map((p, i) =>
          points.slice(i + 1).map((q, j) => (
            <line
              key={`${i}-${j}`}
              x1={p.x}
              y1={p.y}
              x2={q.x}
              y2={q.y}
              stroke="oklch(0.68 0.19 248)"
              strokeOpacity="0.18"
              strokeWidth="0.2"
            />
          ))
        )}
        {points.map((p, i) => (
          <g key={i}>
            <circle
              cx={p.x}
              cy={p.y}
              r="2.5"
              fill="oklch(0.68 0.19 248)"
              opacity="0.25"
            />
            <circle cx={p.x} cy={p.y} r="0.9" fill="oklch(0.85 0.15 240)" />
          </g>
        ))}
      </svg>
      <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
        <div>
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
            Regiões mapeadas
          </div>
          <div className="text-2xl font-semibold text-foreground">07 hubs</div>
        </div>
        <div className="rounded-lg border border-border bg-background/40 px-3 py-2 text-[10px] text-muted-foreground backdrop-blur">
          Inteligência geográfica
        </div>
      </div>
    </div>
  );
}

/* ================== 7 — COMERCIAL ================== */
function Comercial() {
  const cards: { icon: LucideIcon; label: string }[] = [
    { icon: Megaphone, label: "Campanhas comerciais" },
    { icon: Boxes, label: "Divulgação de produtos" },
    { icon: FileText, label: "Materiais para vendedores" },
    { icon: Send, label: "Reativação de clientes" },
    { icon: Sparkles, label: "Ofertas e promoções" },
    { icon: MessageSquare, label: "Comunicação com ativos" },
    { icon: Headphones, label: "Apoio ao time comercial" },
    { icon: Heart, label: "Pós-venda e relacionamento" },
  ];
  return (
    <Section
      id="comercial"
      index="06"
      eyebrow="Marketing + Comercial"
      title={
        <>
          Marketing para apoiar{" "}
          <span className="text-brand-gradient">vendas e relacionamento</span>
        </>
      }
      subtitle="A evolução do contrato conecta o marketing às necessidades reais do time comercial, criando campanhas, materiais, comunicações e ações que ajudam a gerar oportunidades, fortalecer relacionamento e estimular recompra."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="rounded-2xl border border-border bg-gradient-card p-5 transition hover:border-brand/40"
          >
            <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-brand/15 text-brand">
              <Icon className="h-4 w-4" />
            </div>
            <div className="text-sm font-medium text-foreground">{label}</div>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-3xl border border-brand/30 bg-gradient-card p-8 text-center shadow-glow">
        <p className="text-pretty text-lg font-medium text-foreground md:text-2xl">
          O marketing passa a atuar como{" "}
          <span className="text-brand">suporte direto ao crescimento comercial</span> da
          distribuidora.
        </p>
      </div>
    </Section>
  );
}

/* ================== 8 — INTERNO ================== */
function Interno() {
  const features = [
    "Mural de comunicados",
    "Área para equipe comercial",
    "Materiais de venda",
    "Atualizações de produtos",
    "Comunicados da diretoria",
    "Documentos internos",
    "Registro de demandas",
    "Campanhas internas",
  ];
  const benefits = [
    "Mais organização",
    "Menos ruído entre setores",
    "Melhor alinhamento comercial",
    "Comunicação mais rápida",
    "Equipe mais preparada",
  ];
  return (
    <Section
      id="interno"
      index="07"
      eyebrow="Comunicação Interna"
      title={
        <>
          Sistema de <span className="text-brand-gradient">Comunicação Interna</span>
        </>
      }
      subtitle="Mais alinhamento entre liderança, equipe comercial e operação. Um sistema próprio para organizar informações, comunicados, campanhas e materiais essenciais para a equipe."
    >
      <div className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <PainelMockup />
        </div>
        <div className="space-y-6 lg:col-span-5">
          <div className="rounded-3xl border border-border bg-surface/40 p-6">
            <div className="mb-4 text-xs uppercase tracking-widest text-brand">
              Funcionalidades
            </div>
            <ul className="grid gap-2 sm:grid-cols-2">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-foreground/90">
                  <CheckCircle2 className="h-4 w-4 text-brand" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-brand/30 bg-gradient-card p-6">
            <div className="mb-4 text-xs uppercase tracking-widest text-brand">
              Benefícios
            </div>
            <ul className="space-y-2">
              {benefits.map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-2 text-sm font-medium text-foreground"
                >
                  <ArrowRight className="h-4 w-4 text-brand" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

function PainelMockup() {
  const menu = [
    { icon: LayoutGrid, label: "Início" },
    { icon: Bell, label: "Comunicados" },
    { icon: Boxes, label: "Produtos" },
    { icon: FileText, label: "Materiais" },
    { icon: Users, label: "Equipe" },
    { icon: Settings2, label: "Ajustes" },
  ];
  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-gradient-card shadow-elevated">
      <div className="flex items-center gap-2 border-b border-border bg-background/40 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
        <div className="ml-3 text-[10px] tracking-widest text-muted-foreground">
          painel.pbrnfoods.interno
        </div>
      </div>
      <div className="grid grid-cols-12">
        <aside className="col-span-3 border-r border-border bg-background/30 p-3 md:col-span-3">
          <div className="mb-3 px-2 text-[10px] uppercase tracking-widest text-muted-foreground">
            Menu
          </div>
          {menu.map(({ icon: Icon, label }, i) => (
            <div
              key={label}
              className={`flex items-center gap-2 rounded-lg px-2 py-2 text-xs ${
                i === 1
                  ? "bg-brand/15 text-brand"
                  : "text-muted-foreground hover:bg-surface"
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              <span className="hidden md:inline">{label}</span>
            </div>
          ))}
        </aside>
        <div className="col-span-9 space-y-3 p-4">
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold text-foreground">
              Comunicados recentes
            </div>
            <span className="rounded-full bg-brand/15 px-2 py-0.5 text-[10px] text-brand">
              3 novos
            </span>
          </div>
          {[
            { t: "Nova campanha — Linha Premium", s: "Diretoria · há 2h" },
            { t: "Atualização de tabela de preços", s: "Comercial · há 1d" },
            { t: "Treinamento: novos produtos", s: "RH · há 3d" },
          ].map((c) => (
            <div
              key={c.t}
              className="flex items-start gap-3 rounded-xl border border-border bg-background/30 p-3"
            >
              <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-lg bg-brand/15 text-brand">
                <Bell className="h-4 w-4" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="truncate text-sm font-medium text-foreground">
                  {c.t}
                </div>
                <div className="text-[11px] text-muted-foreground">{c.s}</div>
              </div>
            </div>
          ))}
          <div className="grid grid-cols-3 gap-2 pt-2">
            {["PDF", "Catálogo", "Vídeo"].map((m) => (
              <div
                key={m}
                className="rounded-lg border border-border bg-background/30 p-3 text-center text-[11px] text-muted-foreground"
              >
                <FileText className="mx-auto mb-1 h-4 w-4 text-brand" />
                {m}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================== 9 — AUTOMAÇÕES ================== */
function Automacoes() {
  const aplic = [
    "Atendimento inicial via WhatsApp",
    "Qualificação de leads",
    "Envio de ofertas",
    "Recuperação de clientes inativos",
    "Campanhas segmentadas",
    "Lembretes comerciais",
    "Pós-venda",
    "Fluxos conectados ao CRM",
  ];
  const benef = [
    "Mais velocidade no atendimento",
    "Melhor aproveitamento da base",
    "Menos tarefas manuais",
    "Mais consistência no relacionamento",
    "Mais oportunidades comerciais",
  ];
  return (
    <Section
      id="automacoes"
      index="08"
      eyebrow="Automações"
      title={
        <>
          Automações para atendimento, marketing e{" "}
          <span className="text-brand-gradient">relacionamento</span>
        </>
      }
      subtitle="A proposta contempla automações para tornar o atendimento e a comunicação comercial mais ágeis, organizados e constantes."
    >
      <FluxoAutomacao />

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-border bg-gradient-card p-7">
          <div className="mb-4 text-xs uppercase tracking-widest text-brand">
            Aplicações
          </div>
          <ul className="grid gap-2 sm:grid-cols-2">
            {aplic.map((a) => (
              <li key={a} className="flex items-center gap-2 text-sm text-foreground/90">
                <CheckCircle2 className="h-4 w-4 text-brand" />
                {a}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-brand/30 bg-gradient-card p-7 shadow-glow">
          <div className="mb-4 text-xs uppercase tracking-widest text-brand">
            Benefícios
          </div>
          <ul className="space-y-2">
            {benef.map((b) => (
              <li key={b} className="flex items-center gap-2 text-sm font-medium">
                <ArrowRight className="h-4 w-4 text-brand" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

function FluxoAutomacao() {
  const flow: { icon: LucideIcon; label: string }[] = [
    { icon: Users, label: "Cliente" },
    { icon: MessageSquare, label: "WhatsApp" },
    { icon: Radar, label: "Qualificação" },
    { icon: Network, label: "CRM" },
    { icon: Headphones, label: "Vendedor" },
    { icon: Heart, label: "Pós-venda" },
  ];
  return (
    <div className="rounded-3xl border border-border bg-gradient-card p-6 md:p-10">
      <div className="grid grid-cols-2 items-center gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {flow.map(({ icon: Icon, label }, i) => (
          <div key={label} className="flex flex-col items-center text-center">
            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-background/40 text-brand shadow-card">
                <Icon className="h-6 w-6" />
              </div>
              {i < flow.length - 1 && (
                <ArrowRight className="absolute -right-6 top-1/2 hidden h-4 w-4 -translate-y-1/2 text-brand lg:block" />
              )}
            </div>
            <div className="mt-3 text-xs font-medium text-foreground">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ================== 10 — COMPARATIVO ================== */
function Comparativo() {
  const atual = [
    "Marketing Digital",
    "Presença online",
    "Conteúdos e comunicação",
    "Ações pontuais",
    "Comunicação externa",
    "Baixa integração com comercial",
    "Sem sistema interno",
    "Sem automações robustas",
  ];
  const evolucao = [
    "Marketing Estratégico completo",
    "Plano de crescimento",
    "Branding e posicionamento",
    "Plano de ação estruturado",
    "Comunicação externa e interna",
    "Marketing conectado ao comercial",
    "Sistema de comunicação interna",
    "Automações de atendimento e marketing",
  ];
  return (
    <Section
      id="comparativo"
      index="09"
      eyebrow="Comparativo"
      title={
        <>
          Contrato Atual{" "}
          <span className="text-muted-foreground">×</span>{" "}
          <span className="text-brand-gradient">Evolução Proposta</span>
        </>
      }
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-border bg-surface/40 p-7">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                Atual
              </div>
              <div className="mt-1 text-xl font-semibold">Contrato Atual</div>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground">
              <X className="h-4 w-4" />
            </div>
          </div>
          <ul className="space-y-3">
            {atual.map((it) => (
              <li
                key={it}
                className="flex items-center gap-3 border-b border-border/50 py-2 text-sm text-muted-foreground last:border-0"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/50" />
                {it}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-brand/40 bg-gradient-card p-7 shadow-glow">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <div className="text-xs uppercase tracking-widest text-brand">
                Evolução
              </div>
              <div className="mt-1 text-xl font-semibold">Evolução Proposta</div>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-brand text-primary-foreground">
              <CheckCircle2 className="h-5 w-5" />
            </div>
          </div>
          <ul className="space-y-3">
            {evolucao.map((it) => (
              <li
                key={it}
                className="flex items-center gap-3 border-b border-border/50 py-2 text-sm font-medium text-foreground last:border-0"
              >
                <CheckCircle2 className="h-4 w-4 text-brand" />
                {it}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10 rounded-3xl border border-border bg-surface/40 p-8 text-center">
        <p className="text-pretty text-lg text-foreground/90 md:text-xl">
          A evolução transforma o marketing em uma operação{" "}
          <span className="text-brand">mais estratégica, organizada e conectada</span>{" "}
          aos objetivos comerciais da PB &amp; RN Foods.
        </p>
      </div>
    </Section>
  );
}

/* ================== 11 — BENEFÍCIOS ================== */
function Beneficios() {
  const items: { icon: LucideIcon; title: string; text: string }[] = [
    {
      icon: ShieldCheck,
      title: "Marca mais forte",
      text: "Fortalecimento da presença, percepção e posicionamento da distribuidora no mercado.",
    },
    {
      icon: TrendingUp,
      title: "Mais apoio às vendas",
      text: "Campanhas e materiais conectados ao time comercial e às oportunidades reais.",
    },
    {
      icon: Network,
      title: "Relacionamento organizado",
      text: "CRM, segmentação, comunicação ativa e reativação de clientes.",
    },
    {
      icon: Users,
      title: "Equipe alinhada",
      text: "Sistema interno para reduzir ruídos e melhorar a comunicação entre áreas.",
    },
    {
      icon: BarChart3,
      title: "Mais inteligência comercial",
      text: "Análises, georreferenciamento e acompanhamento para decisões estratégicas.",
    },
    {
      icon: Rocket,
      title: "Crescimento com método",
      text: "Plano, execução, revisão e evolução contínua das ações.",
    },
  ];
  return (
    <Section
      id="beneficios"
      index="10"
      eyebrow="Benefícios"
      title={
        <>
          O que a PB &amp; RN Foods{" "}
          <span className="text-brand-gradient">ganha com a evolução</span>
        </>
      }
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="group relative overflow-hidden rounded-3xl border border-border bg-gradient-card p-7 transition hover:border-brand/40 hover:shadow-glow"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand/10 blur-3xl opacity-0 transition group-hover:opacity-100" />
            <div className="relative">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand text-primary-foreground shadow-glow">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ================== 12 — CRONOGRAMA ================== */
function Cronograma() {
  const fases = [
    {
      n: "Fase 1",
      title: "Diagnóstico e Imersão",
      items: [
        "Levantamento de informações",
        "Análise da marca",
        "Análise comercial",
        "Mapeamento de oportunidades",
      ],
    },
    {
      n: "Fase 2",
      title: "Estratégia e Planejamento",
      items: [
        "Plano completo de marketing",
        "Definição de posicionamento",
        "Canais",
        "CRM",
        "Plano de ação",
      ],
    },
    {
      n: "Fase 3",
      title: "Desenvolvimento e Implementação",
      items: ["Sistema interno", "Automações", "Materiais estratégicos", "Campanhas"],
    },
    {
      n: "Fase 4",
      title: "Acompanhamento e Evolução",
      items: [
        "Reuniões de revisão",
        "Ajustes",
        "Relatórios",
        "Otimizações contínuas",
      ],
    },
  ];
  return (
    <Section
      id="cronograma"
      index="11"
      eyebrow="Cronograma"
      title={
        <>
          Plano de <span className="text-brand-gradient">implantação</span>
        </>
      }
    >
      <div className="relative">
        <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-brand/60 via-border to-transparent md:block" />
        <div className="space-y-6">
          {fases.map((f, i) => (
            <div key={f.n} className="relative grid gap-4 md:grid-cols-12 md:pl-16">
              <div className="absolute left-0 top-6 hidden h-12 w-12 items-center justify-center rounded-2xl border border-brand/40 bg-background text-sm font-semibold text-brand md:flex">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="md:col-span-4">
                <div className="text-xs uppercase tracking-widest text-brand">
                  {f.n}
                </div>
                <h3 className="mt-2 text-2xl font-semibold text-foreground">
                  {f.title}
                </h3>
              </div>
              <div className="md:col-span-8">
                <div className="rounded-2xl border border-border bg-gradient-card p-6">
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {f.items.map((it) => (
                      <li
                        key={it}
                        className="flex items-center gap-2 text-sm text-foreground/90"
                      >
                        <CheckCircle2 className="h-4 w-4 text-brand" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ================== 13 — VALOR ================== */
function Valor() {
  return (
    <Section
      id="valor"
      index="12"
      eyebrow="Proposta de Valor"
      title={
        <>
          Uma parceria estratégica para o{" "}
          <span className="text-brand-gradient">próximo estágio</span> da PB &amp; RN
          Foods
        </>
      }
      subtitle="A Sharks Company passa a atuar como parceira estratégica da PB & RN Foods Distribuidora, conectando marketing, tecnologia, comunicação e relacionamento para apoiar o crescimento da empresa de forma mais organizada e consistente."
    >
      <div className="rounded-[2rem] border border-brand/30 bg-gradient-card p-10 text-center shadow-glow md:p-16">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-brand text-primary-foreground shadow-glow">
          <Sparkles className="h-7 w-7" />
        </div>
        <p className="mx-auto max-w-3xl text-pretty text-2xl font-semibold leading-snug text-foreground md:text-4xl">
          A PB &amp; RN Foods não precisa apenas comunicar melhor. Precisa{" "}
          <span className="text-brand-gradient">
            transformar o marketing em uma ferramenta de crescimento
          </span>
          , relacionamento e fortalecimento comercial.
        </p>
      </div>
    </Section>
  );
}

/* ================== 14 — CTA ================== */
function CTA() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden px-5 py-32 md:px-8 md:py-40"
    >
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/30 blur-[140px] animate-pulse-glow" />
      <div className="relative mx-auto max-w-4xl text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-brand/40 bg-surface/60 px-4 py-1.5 backdrop-blur">
          <Rocket className="h-3.5 w-3.5 text-brand" />
          <span className="text-xs font-medium tracking-wider text-foreground">
            PRÓXIMO PASSO
          </span>
        </div>
        <h2 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
          A próxima fase do crescimento começa com{" "}
          <span className="text-brand-gradient">marketing mais estratégico</span>.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
          A evolução do contrato cria uma base mais completa para fortalecer a marca,
          apoiar vendas, organizar processos e impulsionar novas oportunidades
          comerciais.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-8 py-4 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-90"
          >
            Avançar com a evolução do contrato
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-8 py-4 text-sm font-semibold text-foreground backdrop-blur transition hover:bg-surface"
          >
            Falar com a Sharks Company
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background/60 px-5 py-10 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <SharksLogo />
        <div className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Sharks Company · Proposta confidencial PB &amp;
          RN Foods Distribuidora
        </div>
      </div>
    </footer>
  );
}
