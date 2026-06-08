import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Heart, Phone, Shield, Smile, Sparkles } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { useLang } from "@/lib/i18n";
import { services } from "@/lib/services";
import logo from "@/assets/logo.png";
import hero from "@/assets/hero-home.jpg";
import seniorCare from "@/assets/senior-care.jpg";
import beforeGardJson from "@/assets/gard_innan.jpg.asset.json";
import afterGardJson from "@/assets/gard_efter.jpg.asset.json";
import beforeWindowJson from "@/assets/fonster_innan.jpg.asset.json";
import afterWindowJson from "@/assets/fonster_efter_1.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Limhamns Hemhjälp AB — Trygg städ & trädgård i Limhamn" },
      {
        name: "description",
        content:
          "Städning och trädgårdsskötsel i Limhamn för seniorer, privatpersoner och företag. Samma person vid varje besök.",
      },
      { property: "og:title", content: "Limhamns Hemhjälp AB" },
      {
        property: "og:description",
        content:
          "Trygg städ & trädgård i Limhamn — för en enklare vardag, särskilt för seniorer.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  const { t } = useLang();

  return (
    <Layout>
      {/* HERO */}
      <section className="relative px-4 lg:px-8 pt-4">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] lg:rounded-[40px] bg-surface ring-1 ring-border">
          <img
            src={hero}
            alt=""
            width={1920}
            height={1152}
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-background/95 via-background/60 to-transparent" />

          <div className="relative grid lg:grid-cols-2 gap-10 items-center px-6 sm:px-10 lg:px-16 py-16 lg:py-28 min-h-[640px]">
            <div className="animate-fade-up max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-soft text-primary-dark text-[11px] font-bold uppercase tracking-[0.18em]">
                <Sparkles className="size-3.5" />
                {t("hero.tagline")}
              </div>

              <div className="flex items-center gap-4 mt-7">
                <div className="size-16 sm:size-20 overflow-hidden rounded-3xl ring-1 ring-border bg-background shadow-soft shrink-0">
                  <img src={logo} alt="Logo" className="size-full object-cover" />
                </div>
                <div className="font-display text-2xl sm:text-3xl leading-tight">
                  Limhamns
                  <br />
                  <span className="text-primary">Hemhjälp AB</span>
                </div>
              </div>

              <h1 className="mt-8 font-display text-4xl sm:text-5xl lg:text-6xl text-foreground text-balance">
                {t("hero.title")}
              </h1>
              <p className="mt-6 text-lg lg:text-xl text-foreground/80 leading-relaxed max-w-prose">
                {t("hero.subtitle")}
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  to="/kontakt"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary-dark transition-colors shadow-card"
                >
                  <Phone className="size-4" />
                  {t("hero.cta")}
                </Link>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-background text-foreground font-semibold ring-1 ring-border hover:ring-primary transition-all"
                >
                  {t("hero.cta2")}
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </div>

            {/* Spacer for right column on lg */}
            <div className="hidden lg:block" />
          </div>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 pt-20 lg:pt-28">
        <div className="relative overflow-hidden rounded-[28px] lg:rounded-[40px] bg-surface ring-1 ring-border px-6 sm:px-10 lg:px-16 py-14 lg:py-20">
          <div className="grid md:grid-cols-3 gap-10 lg:gap-14 text-center">
            {[
              {
                icon: Heart,
                word: t("pillars.word1"),
                desc: t("pillars.desc1"),
              },
              {
                icon: Shield,
                word: t("pillars.word2"),
                desc: t("pillars.desc2"),
              },
              {
                icon: Smile,
                word: t("pillars.word3"),
                desc: t("pillars.desc3"),
              },
            ].map((p, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="size-14 rounded-2xl bg-primary text-primary-foreground grid place-items-center shadow-soft mb-5">
                  <p.icon className="size-7" strokeWidth={1.8} />
                </div>
                <h3 className="font-display text-3xl lg:text-4xl text-foreground mb-3">
                  {p.word}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto text-[15px]">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 lg:mt-16 max-w-3xl mx-auto text-center">
            <p className="text-foreground/80 text-lg lg:text-xl leading-relaxed">
              {t("pillars.mission")}
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-7xl px-5 lg:px-8 py-28 lg:py-36">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3">
              {t("services.eyebrow")}
            </div>
            <h2 className="font-display text-4xl lg:text-5xl text-balance">
              {t("services.title")}
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-md">{t("services.subtitle")}</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Link
              key={s.slug}
              to="/tjanster/$slug"
              params={{ slug: s.slug }}
              className="group relative overflow-hidden rounded-3xl bg-card ring-1 ring-border hover:ring-primary/40 transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <div className="aspect-[4/3] overflow-hidden bg-surface">
                <img
                  src={s.image}
                  alt={t(s.titleKey)}
                  loading={i < 3 ? "eager" : "lazy"}
                  width={1280}
                  height={832}
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl mb-2">{t(s.titleKey)}</h3>
                <p className="text-muted-foreground text-[15px] leading-relaxed mb-4">
                  {t(s.shortKey)}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  {t("services.readmore")}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SENIORS / TRUST */}
      <section className="bg-surface py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="overflow-hidden rounded-[32px] ring-1 ring-border shadow-card">
              <img
                src={seniorCare}
                alt=""
                loading="lazy"
                width={1200}
                height={1500}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-2 sm:right-6 bg-card rounded-2xl ring-1 ring-border shadow-card px-5 py-4 max-w-[220px]">
              <div className="text-3xl font-display text-primary">100%</div>
              <div className="text-xs text-muted-foreground leading-snug mt-1">
                Samma välbekanta ansikte vid varje besök.
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3">
              {t("seniors.eyebrow")}
            </div>
            <h2 className="font-display text-4xl lg:text-5xl text-balance mb-10">
              {t("seniors.title")}
            </h2>
            <ul className="space-y-7">
              {[
                ["seniors.p1", "seniors.p1d"],
                ["seniors.p2", "seniors.p2d"],
                ["seniors.p3", "seniors.p3d"],
              ].map(([k, d]) => (
                <li key={k} className="flex gap-4">
                  <div className="size-9 shrink-0 rounded-full bg-primary text-primary-foreground grid place-items-center shadow-soft">
                    <Check className="size-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-foreground">{t(k)}</h4>
                    <p className="mt-1 text-muted-foreground leading-relaxed">{t(d)}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PROJECTS PREVIEW */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-28 lg:py-36">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3">
              {t("projects.eyebrow")}
            </div>
            <h2 className="font-display text-4xl lg:text-5xl">{t("projects.title")}</h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-md">
              {t("projects.subtitle")}
            </p>
          </div>
          <Link
            to="/projekt"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            {t("projects.viewall")}
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <BeforeAfter
            before={beforeKitchen}
            after={afterKitchen}
            title="Kökssanering i Limhamn"
            t={t}
          />
          <BeforeAfter
            before={beforeGarden}
            after={afterGarden}
            title="Höstfix i trädgården"
            t={t}
          />
        </div>
      </section>
    </Layout>
  );
}

function BeforeAfter({
  before,
  after,
  title,
  t,
}: {
  before: string;
  after: string;
  title: string;
  t: (k: string) => string;
}) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div className="relative aspect-square overflow-hidden rounded-2xl ring-1 ring-border">
          <img
            src={before}
            alt="Före"
            loading="lazy"
            width={1024}
            height={1024}
            className="size-full object-cover"
          />
          <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-background/90 backdrop-blur text-[10px] font-bold tracking-widest text-foreground">
            {t("projects.before")}
          </span>
        </div>
        <div className="relative aspect-square overflow-hidden rounded-2xl ring-1 ring-border">
          <img
            src={after}
            alt="Efter"
            loading="lazy"
            width={1024}
            height={1024}
            className="size-full object-cover"
          />
          <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary text-primary-foreground text-[10px] font-bold tracking-widest">
            {t("projects.after")}
          </span>
        </div>
      </div>
      <h4 className="font-display text-2xl pl-1">{title}</h4>
    </div>
  );
}
