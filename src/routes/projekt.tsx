import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { useLang } from "@/lib/i18n";
import gardInnan from "@/assets/gard_innan.jpg";
import gardEfter from "@/assets/gard_efter.jpg";
import fonsterInnan from "@/assets/fonster_innan.jpg";
import fonsterEfter1 from "@/assets/fonster_efter_1.jpg";
import fonsterEfter2 from "@/assets/fonster_efter_2.jpg";
import gard from "@/assets/gard.jpg";

export const Route = createFileRoute("/projekt")({
  head: () => ({
    meta: [
      { title: "Projekt — Före & Efter | Limhamns Hemhjälp AB" },
      {
        name: "description",
        content: "Se före- och efterbilder från riktiga projekt utförda av Limhamns Hemhjälp AB.",
      },
      { property: "og:title", content: "Projekt — Före & Efter | Limhamns Hemhjälp" },
      { property: "og:image", content: gardEfter },
    ],
    links: [{ rel: "canonical", href: "/projekt" }],
  }),
  component: ProjectsPage,
});

type ProjectImage = { src: string; tag?: "before" | "after" };

type Project = {
  titleKey: string;
  descKey: string;
  images: ProjectImage[];
};

const projects: Project[] = [
  {
    titleKey: "proj.gard.title",
    descKey: "proj.gard.desc",
    images: [
      { src: gardInnan, tag: "before" },
      { src: gardEfter, tag: "after" },
    ],
  },
  {
    titleKey: "proj.fonster.title",
    descKey: "proj.fonster.desc",
    images: [
      { src: fonsterInnan, tag: "before" },
      { src: fonsterEfter1, tag: "after" },
      { src: fonsterEfter2, tag: "after" },
    ],
  },
  {
    titleKey: "proj.skotsel.title",
    descKey: "proj.skotsel.desc",
    images: [{ src: gard }],
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
            <div
              className={`grid gap-3 ${
                p.images.length >= 3
                  ? "grid-cols-2"
                  : p.images.length === 2
                  ? "grid-cols-2"
                  : "grid-cols-1"
              }`}
            >
              {p.images.map((img, idx) => (
                <div
                  key={idx}
                  className={`relative overflow-hidden rounded-3xl ring-1 ring-border ${
                    p.images.length === 3 && idx === 0
                      ? "col-span-2 aspect-[16/10]"
                      : "aspect-[4/5]"
                  } ${p.images.length === 1 ? "aspect-[16/10]" : ""}`}
                >
                  <img
                    src={img.src}
                    alt={`${p.title} ${img.tag ? t(`projects.${img.tag}`) : ""}`}
                    loading="lazy"
                    className="size-full object-cover"
                  />
                  {img.tag && (
                    <span
                      className={`absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest ${
                        img.tag === "before"
                          ? "bg-background/90 backdrop-blur text-foreground"
                          : "bg-primary text-primary-foreground"
                      }`}
                    >
                      {t(`projects.${img.tag}`)}
                    </span>
                  )}
                </div>
              ))}
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
