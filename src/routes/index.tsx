import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  BarChart3,
  Bot,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  Cpu,
  Flag,
  Globe2,
  Leaf,
  Lightbulb,
  LineChart,
  MapPin,
  Megaphone,
  MessageSquare,
  Minus,
  Palette,
  Rocket,
  Share2,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Wallet,
  Workflow,
  Zap,
} from "lucide-react";
import { Section } from "@/components/Section";
import { SharksLogo } from "@/components/SharksLogo";
import { SharkFinDivider } from "@/components/SharkFinDivider";
import type { LucideIcon } from "lucide-react";

const SHARKS_LOGO_URL =
  "http://sharkscompany.online/wp-content/uploads/2026/05/SHARKS-COMPANY-3D-e1777902632718.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Evolução de Planejamento | PB & RN Foods Distribuidora" },
      {
        name: "description",
        content:
          "Proposta de evolução contratual para implementação de marketing estratégico, comunicação interna, CRM e automações para a PB & RN Foods Distribuidora.",
      },
      { property: "og:title", content: "Evolução de Planejamento | PB & RN Foods Distribuidora" },
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
  // Renderização da Proposta Comercial e Planejamento Estratégico
  return (
    <div className="min-h-screen text-foreground">
      <main>
        <Hero />
        <SharkFinDivider large={true} />
        <Pilares />
        <SharkFinDivider />
        <Metodo />
        <SharkFinDivider />
        <FunilEcommerce />
        <SharkFinDivider />
        <Investimento />
        <SharkFinDivider />
        <Beneficios />
        <SharkFinDivider />
        <Diferenciais />
        <SharkFinDivider />
        <CTA />
      </main>

    </div>
  );
}

function Hero() {
  return (
    <section
      id="capa"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 pb-36 pt-20 md:px-8 md:pb-44"
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-brand/20 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-brand-glow/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center">
        {/* Logo */}
        <div className="mb-8 animate-float">
          <img
            src={SHARKS_LOGO_URL}
            alt="Sharks Company"
            className="h-28 w-auto object-contain drop-shadow-[0_0_40px_rgba(100,180,255,0.3)] md:h-36"
          />
        </div>

        {/* Eyebrow */}
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/40 bg-surface/60 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-brand backdrop-blur">
          Proposta Comercial · 2026
        </span>

        {/* Title */}
        <h1 className="text-balance text-center text-4xl font-semibold leading-[1.08] tracking-tight text-foreground md:text-6xl lg:text-7xl">
          Evolução de{" "}
          <span className="text-brand-gradient pb-2 inline-block">Planejamento</span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-muted-foreground md:text-lg">
          Marketing Estratégico, Tecnologia e automação para fortalecer a marca,
          apoiar o comercial e impulsionar o crescimento da{" "}
          <span className="inline-flex items-center align-middle">
            <img src="http://sharkscompany.online/wp-content/uploads/2026/05/ChatGPT-Image-8-de-mai.-de-2026-19_29_58-1-e1778280353107.png" alt="PB & RN Foods" className="h-6 md:h-7 w-auto object-contain" />
          </span>.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#pilares"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-90"
          >
            Ver proposta completa
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
          <a
            href="#cta"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition hover:bg-surface"
          >
            Falar com Sharks
          </a>
        </div>

      </div>
    </section>
  );
}



function Pilares() {
  const pilares: { icon: LucideIcon; title: string; text: string }[] = [
    { icon: Sparkles, title: "Essência da Marca", text: "Identidade central, diferenciais, valores e percepção desejada no mercado." },
    { icon: MapPin, title: "Georeferenciamento", text: "Mapeamento estratégico de regiões, pontos de venda e oportunidades geográficas." },
    { icon: Users, title: "Público-Alvo e Persona", text: "Perfis ideais de clientes, segmentos prioritários e comportamentos de compra." },
    { icon: Flag, title: "Posicionamento de Marca", text: "Como a marca deve ser percebida frente à concorrência e ao mercado." },
    { icon: Palette, title: "Branding", text: "Identidade visual, tom de voz e elementos que traduzem a marca." },
    { icon: Target, title: "Objetivos de Marketing", text: "Metas claras e mensuráveis para marca, vendas e crescimento." },
    { icon: Lightbulb, title: "Estratégias de Marketing", text: "Caminhos estratégicos definidos para alcançar os objetivos traçados." },
    { icon: ClipboardList, title: "Plano de Ação", text: "Cronograma de atividades, responsáveis e prazos de execução." },
    { icon: Wallet, title: "Orçamento de Marketing", text: "Alocação inteligente de recursos para máximo retorno sobre investimento." },
    { icon: Share2, title: "Canais de Distribuição", text: "Definição dos canais mais eficientes para alcançar o público-alvo." },
    { icon: Megaphone, title: "Comunicação e Promoção", text: "Estratégias de comunicação, campanhas e ações promocionais." },
    { icon: MessageSquare, title: "Gestão de CRM", text: "Relacionamento com o cliente, segmentação e comunicação ativa." },
    { icon: LineChart, title: "Acompanhamento e Revisão", text: "Medição de resultados, ajustes e evolução contínua baseada em dados." },
    { icon: ShieldCheck, title: "Contingências", text: "Planos de resposta para cenários adversos e gestão de riscos." },
    { icon: Leaf, title: "Sustentabilidade", text: "Responsabilidade social e práticas sustentáveis integradas ao marketing." },
    { icon: Award, title: "Competências Internas", text: "Avaliação e desenvolvimento das competências da equipe interna." },
  ];

  return (
    <Section
      id="pilares"
      eyebrow="16 Seções Estratégicas"
      title={
        <>
          O Plano Completo de{" "}
          <span className="text-brand-gradient">Marketing</span>
        </>
      }
      subtitle="Cada seção do plano foi desenhada para cobrir todas as frentes necessárias ao crescimento estratégico da distribuidora."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {pilares.map(({ icon: Icon, title, text }, i) => (
          <div
            key={title}
            className="group rounded-2xl border border-border bg-surface/40 p-5 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-brand/50 hover:bg-surface/60 hover:shadow-glow"
          >
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand/15 text-brand transition-transform duration-300 group-hover:scale-110 group-hover:bg-brand/20">
                <Icon className="h-5 w-5" />
              </div>
              <span className="text-xs font-bold text-brand/60">{String(i + 1).padStart(2, "0")}</span>
            </div>
            <h3 className="text-sm font-semibold text-foreground">{title}</h3>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Metodo() {
  const fases = [
    {
      n: "01",
      title: "Diagnóstico",
      text: "Análise do cenário atual, marca, mercado, comunicação e oportunidades.",
    },
    {
      n: "02",
      title: "Direcionamento",
      text: "Definição de estratégia, prioridades, canais e plano de ação.",
    },
    {
      n: "03",
      title: "Execução",
      text: "Operação de campanhas, conteúdos, criativos e estruturas digitais.",
    },
    {
      n: "04",
      title: "Desempenho",
      text: "Medição, ajustes e evolução contínua com base em dados e resultados.",
    },
  ];

  return (
    <Section
      id="cronograma"
      eyebrow="Como funciona"
      title={
        <>
          Uma operação com <span className="text-brand-gradient">método</span>
        </>
      }
      subtitle="Nossa metodologia garante que cada etapa esteja conectada aos objetivos da distribuidora."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {fases.map((f, i) => (
          <div
            key={f.n}
            className="group relative rounded-2xl border border-border bg-surface/40 p-6 transition-all duration-300 ease-out hover:border-brand/30 hover:bg-surface/50"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand/15 font-semibold text-brand transition-colors duration-300 group-hover:bg-brand/25">
              {f.n}
            </div>
            <h3 className="text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-brand-glow">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {f.text}
            </p>
            {i < fases.length - 1 && (
              <ChevronRight className="absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 lg:block" />
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}

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
      icon: Users,
      title: "Relacionamento organizado",
      text: "CRM, segmentação, comunicação ativa e reativação de clientes.",
    },
    {
      icon: BarChart3,
      title: "Mais inteligência comercial",
      text: "Análises e acompanhamento para decisões estratégicas baseadas em dados.",
    },
    {
      icon: MessageSquare,
      title: "Comunicação interna eficiente",
      text: "Sistema próprio para alinhar equipes, centralizar informações e agilizar processos internos.",
    },
    {
      icon: Bot,
      title: "Processos automatizados",
      text: "Automação de atendimento e marketing para ganho de escala sem perder a personalização.",
    },
  ];

  return (
    <Section
      id="beneficios"
      eyebrow="Benefícios"
      title={
        <span className="flex flex-col md:flex-row items-center justify-center gap-3 pb-2">
          O que a
          <img src="http://sharkscompany.online/wp-content/uploads/2026/05/ChatGPT-Image-8-de-mai.-de-2026-19_29_58-1-e1778280353107.png" alt="PB & RN Foods" className="h-10 md:h-12 w-auto object-contain" />
          <span className="text-brand-gradient pb-2">ganha com a evolução</span>
        </span>
      }
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="group flex items-start gap-4 rounded-2xl border border-border bg-surface/40 p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-brand/40 hover:bg-surface/60"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/15 text-brand transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105">
              <Icon className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-brand-glow">{title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Diferenciais() {
  return (
    <Section
      id="diferenciais"
      eyebrow="Por que a Sharks Company"
      title={
        <>
          Uma parceria estratégica para o{" "}
          <span className="text-brand-gradient">próximo estágio</span>
        </>
      }
      subtitle={
        <span className="inline-block">
          A Sharks Company passa a atuar como parceira estratégica da{" "}
          <span className="inline-flex items-center align-middle">
            <img src="http://sharkscompany.online/wp-content/uploads/2026/05/ChatGPT-Image-8-de-mai.-de-2026-19_29_58-1-e1778280353107.png" alt="PB & RN Foods" className="h-5 md:h-6 w-auto object-contain mx-1" />
          </span>
          , conectando marketing, tecnologia, comunicação e relacionamento para apoiar o crescimento.
        </span>
      }
    >
      <div className="rounded-[2rem] border border-brand/30 bg-surface/40 p-10 text-center md:p-16">
        <div className="mx-auto mb-6 flex justify-center drop-shadow-lg">
          <img src="http://sharkscompany.online/wp-content/uploads/2026/05/ChatGPT-Image-8-de-mai.-de-2026-19_29_58-1-e1778280353107.png" alt="PB & RN Foods" className="h-14 md:h-16 w-auto object-contain" />
        </div>
        <p className="mx-auto max-w-3xl text-pretty text-xl font-medium leading-relaxed text-foreground md:text-2xl lg:text-3xl">
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

function CTA() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden px-5 py-24 md:px-8 md:py-32"
    >
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/20 blur-[120px]" />

      <div className="relative mx-auto max-w-3xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/40 bg-surface/60 px-4 py-1.5 backdrop-blur">
          <Rocket className="h-3.5 w-3.5 text-brand" />
          <span className="text-xs font-medium tracking-wider text-foreground">
            PRÓXIMO PASSO
          </span>
        </div>

        <h2 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
          A próxima fase do crescimento começa com{" "}
          <span className="text-brand-gradient">marketing mais estratégico</span>.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          A evolução do contrato cria uma base mais completa para fortalecer a marca,
          apoiar vendas, organizar processos e impulsionar novas oportunidades
          comerciais.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://wa.me/5581989758872"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-8 py-4 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-90"
          >
            Confirmar evolução do contrato
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="https://wa.me/5581989758872"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-8 py-4 text-sm font-semibold text-foreground backdrop-blur transition hover:bg-surface"
          >
            Falar com Sharks Company
          </a>
        </div>
      </div>
    </section>
  );
}

function Investimento() {
  return (
    <Section
      id="investimento"
      eyebrow="Comparativo de Cenários"
      title={
        <>
          O que muda no <span className="text-brand-gradient">Investimento</span>
        </>
      }
      subtitle="Uma visão clara do escopo entregue atualmente versus a nova estrutura estratégica planejada para o crescimento da operação."
    >
      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-border bg-surface/30 shadow-2xl backdrop-blur">
        {/* Table Header */}
        <div className="grid grid-cols-[1.4fr_1fr_1fr] border-b border-border bg-surface/50">
          <div className="p-3 md:p-6"></div>
          <div className="border-l border-border p-3 text-center md:p-6">
            <h3 className="text-[10px] md:text-lg font-semibold leading-tight text-muted-foreground">Contrato Atual</h3>
          </div>
          <div className="relative border-l border-border bg-brand/5 p-3 text-center md:p-6">
            <div className="absolute left-0 top-0 h-1 w-full bg-gradient-brand" />
            <h3 className="text-xs md:text-xl font-bold leading-tight text-brand">Evolução Sharks</h3>
          </div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-border/50">
          {/* Row 1 */}
          <div className="grid grid-cols-[1.4fr_1fr_1fr] transition-colors hover:bg-surface/40">
            <div className="flex items-center p-4 md:p-6">
              <span className="text-[11px] md:text-sm font-medium text-foreground">Marketing Digital (Gestão de Redes/Tráfego)</span>
            </div>
            <div className="flex items-center justify-center border-l border-border/50 p-3 md:p-6">
              <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-muted-foreground" />
            </div>
            <div className="flex items-center justify-center border-l border-border/50 bg-brand/5 p-3 md:p-6">
              <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-brand drop-shadow-[0_0_8px_rgba(100,180,255,0.5)]" />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-[1.4fr_1fr_1fr] transition-colors hover:bg-surface/40">
            <div className="flex items-center p-4 md:p-6">
              <span className="text-[11px] md:text-sm font-medium text-foreground">Plano Completo de Marketing Estratégico</span>
            </div>
            <div className="flex items-center justify-center border-l border-border/50 p-3 md:p-6">
              <Minus className="h-4 w-4 md:h-5 md:w-5 text-border" />
            </div>
            <div className="flex items-center justify-center border-l border-border/50 bg-brand/5 p-3 md:p-6">
              <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-brand drop-shadow-[0_0_8px_rgba(100,180,255,0.5)]" />
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-[1.4fr_1fr_1fr] transition-colors hover:bg-surface/40">
            <div className="flex items-center p-4 md:p-6">
              <span className="text-[11px] md:text-sm font-medium text-foreground">Sistema de Comunicação Interna</span>
            </div>
            <div className="flex items-center justify-center border-l border-border/50 p-3 md:p-6">
              <Minus className="h-4 w-4 md:h-5 md:w-5 text-border" />
            </div>
            <div className="flex items-center justify-center border-l border-border/50 bg-brand/5 p-3 md:p-6">
              <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-brand drop-shadow-[0_0_8px_rgba(100,180,255,0.5)]" />
            </div>
          </div>

          {/* Row 4 */}
          <div className="grid grid-cols-[1.4fr_1fr_1fr] transition-colors hover:bg-surface/40">
            <div className="flex items-center p-4 md:p-6">
              <span className="text-[11px] md:text-sm font-medium text-foreground">Funil de E-commerce e Delivery</span>
            </div>
            <div className="flex items-center justify-center border-l border-border/50 p-3 md:p-6">
              <Minus className="h-4 w-4 md:h-5 md:w-5 text-border" />
            </div>
            <div className="flex items-center justify-center border-l border-border/50 bg-brand/5 p-3 md:p-6">
              <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-brand drop-shadow-[0_0_8px_rgba(100,180,255,0.5)]" />
            </div>
          </div>

          {/* Row 5 */}
          <div className="grid grid-cols-[1.4fr_1fr_1fr] transition-colors hover:bg-surface/40">
            <div className="flex items-center p-4 md:p-6">
              <span className="text-[11px] md:text-sm font-medium text-foreground">Automações de Atendimento e Marketing</span>
            </div>
            <div className="flex items-center justify-center border-l border-border/50 p-3 md:p-6">
              <Minus className="h-4 w-4 md:h-5 md:w-5 text-border" />
            </div>
            <div className="flex items-center justify-center border-l border-border/50 bg-brand/5 p-3 md:p-6">
              <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-brand drop-shadow-[0_0_8px_rgba(100,180,255,0.5)]" />
            </div>
          </div>

          {/* Values Row */}
          <div className="grid grid-cols-[1.4fr_1fr_1fr] bg-surface/60">
            <div className="flex items-center p-4 md:justify-center md:p-8">
              <span className="text-[13px] md:text-lg font-bold text-foreground">Investimento Financeiro</span>
            </div>
            <div className="border-l border-border p-3 text-center md:p-8">
              <div className="mb-1 text-[10px] md:text-sm font-medium text-muted-foreground">Por Empresa</div>
              <div className="mb-2 md:mb-5 text-sm md:text-2xl font-bold tracking-tight text-foreground lg:text-3xl">R$ 1.100<span className="text-[10px] md:text-lg text-muted-foreground lg:text-xl">,00</span></div>
              
              <div className="hidden md:block mb-1 text-[11px] font-bold uppercase tracking-wider text-muted-foreground/70">Valor Total (Duas Empresas)</div>
              <div className="hidden md:block text-lg font-bold text-muted-foreground lg:text-xl">R$ 2.200,00</div>
              
              {/* Mobile total */}
              <div className="block md:hidden border-t border-border/50 pt-2 mt-2">
                <div className="text-[8px] font-bold uppercase text-muted-foreground/70">Total (2 Emp.)</div>
                <div className="text-xs font-bold text-muted-foreground">R$ 2.200,00</div>
              </div>
            </div>
            <div className="relative overflow-hidden border-l border-border bg-brand/10 p-3 text-center md:p-8">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand/5 to-transparent" />
              <div className="relative z-10">
                <div className="mb-1 text-[10px] md:text-sm font-bold text-brand">Por Empresa</div>
                <div className="mb-2 md:mb-5 text-base md:text-3xl font-bold tracking-tight text-foreground lg:text-4xl">R$ 2.650<span className="text-[10px] md:text-xl text-muted-foreground/80 lg:text-2xl">,00</span></div>
                
                <div className="hidden md:block mb-1 text-[11px] font-bold uppercase tracking-wider text-brand/80">Valor Total (Duas Empresas)</div>
                <div className="hidden md:block text-xl font-black text-brand-glow lg:text-2xl">R$ 5.300,00</div>

                {/* Mobile total */}
                <div className="block md:hidden border-t border-brand/20 pt-2 mt-2">
                  <div className="text-[8px] font-bold uppercase text-brand/80">Total (2 Emp.)</div>
                  <div className="text-sm font-black text-brand-glow">R$ 5.300,00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function FunilEcommerce() {
  return (
    <Section
      id="funil-ecommerce"
      eyebrow="Ação Estratégica"
      title={
        <>
          Funil de <span className="text-brand-gradient pb-2 inline-block">E-commerce e Delivery</span>
        </>
      }
      subtitle="Estratégia desenhada para aquisição, retenção e conversão contínua em canais de vendas diretas."
    >
      <div className="mx-auto mt-4 overflow-hidden rounded-xl border border-border bg-surface/50 shadow-[0_0_50px_rgba(100,180,255,0.1)] backdrop-blur transition-transform hover:scale-[1.01] md:rounded-2xl lg:max-w-5xl">
        {/* Mockup Header (macOS style window) */}
        <div className="flex items-center border-b border-border bg-surface/80 px-4 py-3 backdrop-blur">
          <div className="flex gap-2">
            <div className="h-3 w-3 rounded-full bg-[#FF5F56] opacity-80" />
            <div className="h-3 w-3 rounded-full bg-[#FFBD2E] opacity-80" />
            <div className="h-3 w-3 rounded-full bg-[#27C93F] opacity-80" />
          </div>
        </div>
        
        {/* Image Content */}
        <img
          src="http://sharkscompany.online/wp-content/uploads/2026/05/ChatGPT-Image-8-de-mai.-de-2026-20_00_53.png"
          alt="Funil de E-commerce e Delivery"
          className="w-full object-cover"
        />
      </div>
    </Section>
  );
}
