import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { useLang } from "@/lib/i18n";
import beforeKitchen from "@/assets/before-kitchen.jpg";
import afterKitchen from "@/assets/after-kitchen.jpg";
import beforeGarden from "@/assets/before-garden.jpg";
import afterGarden from "@/assets/after-garden.jpg";
import beforeWindows from "@/assets/before-windows.jpg";
import afterWindows from "@/assets/after-windows.jpg";

export const Route = createFileRoute("/projekt")({
  head: () => ({
    meta: [
      { title: "Projekt — Före & Efter | Limhamns Hemhjälp AB" },
      {
        name: "description",
        content: "Se före- och efterbilder från projekt utförda av Limhamns Hemhjälp AB.",
      },
      { property: "og:title", content: "Projekt — Före & Efter | Limhamns Hemhjälp" },
    ],
    links: [{ rel: "canonical", href: "/projekt" }],
  }),
  component: ProjectsPage,
});

const projects = [
  {
    title: "Kökssanering i Limhamn",
    desc: "Genomgående djuprengöring av kök efter längre tids försummelse.",
    before: beforeKitchen,
    after: afterKitchen,
  },
  {
    title: "Trädgårdsupprustning",
    desc: "Klippning, ogräsrensning och nya rabatter i en villaträdgård.",
    before: beforeGarden,
    after: afterGarden,
  },
  {
    title: "Fönsterputs på kontor",
    desc: "Kristallklara fönster i en kontorslokal i centrala Malmö.",
    before: beforeWindows,
    after: afterWindows,
  },
];

function ProjectsPage() {
  const { t } = useLang();
  return (
    <Layout>
      <section className="px-4 lg:px-8 pt-4">
        <div className="mx-auto max-w-7xl bg-surface ring-1 ring-border rounded-[28px] lg:rounded-[40px] px-6 sm:px-10 lg:px-16 py-20 lg:py-28">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3">
            {t("projects.eyebrow")}
          </div>
          <h1 className="font-display text-5xl lg:text-6xl text-balance max-w-3xl">
            {t("projects.title")}
          </h1>
          <p className="mt-6 text-lg lg:text-xl text-foreground/80 max-w-2xl">
            {t("projects.subtitle")}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-20 lg:py-28 space-y-20">
        {projects.map((p, i) => (
          <article
            key={p.title}
            className={`grid lg:grid-cols-2 gap-10 items-center ${
              i % 2 === 1 ? "lg:[&>:first-child]:order-2" : ""
            }`}
          >
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl ring-1 ring-border">
                <img
                  src={p.before}
                  alt="Före"
                  loading="lazy"
                  className="size-full object-cover"
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-background/90 backdrop-blur text-[10px] font-bold tracking-widest text-foreground">
                  {t("projects.before")}
                </span>
              </div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl ring-1 ring-border">
                <img src={p.after} alt="Efter" loading="lazy" className="size-full object-cover" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary text-primary-foreground text-[10px] font-bold tracking-widest">
                  {t("projects.after")}
                </span>
              </div>
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3">
                Projekt {String(i + 1).padStart(2, "0")}
              </div>
              <h2 className="font-display text-3xl lg:text-4xl mb-4">{p.title}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">{p.desc}</p>
            </div>
          </article>
        ))}
      </section>
    </Layout>
  );
}
