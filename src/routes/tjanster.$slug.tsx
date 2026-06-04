import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check, Phone } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { services, type ServiceSlug } from "@/lib/services";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/tjanster/$slug")({
  beforeLoad: ({ params }) => {
    if (!services.find((s) => s.slug === params.slug)) throw notFound();
  },
  head: ({ params }) => {
    const s = services.find((x) => x.slug === params.slug);
    const title = s ? `${capitalize(s.slug)} — Limhamns Hemhjälp AB` : "Tjänst";
    return {
      meta: [
        { title },
        { name: "description", content: "Professionell tjänst utförd av Limhamns Hemhjälp AB i Limhamn." },
        { property: "og:title", content: title },
      ],
      links: [{ rel: "canonical", href: `/tjanster/${params.slug}` }],
    };
  },
  component: ServicePage,
});

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function ServicePage() {
  const { slug } = Route.useParams();
  const { t } = useLang();
  const service = services.find((s) => s.slug === (slug as ServiceSlug))!;

  const bullets = ["Erfaren och utbildad personal", "Miljövänliga produkter", "Fast kontaktperson", "Fri offert"];

  return (
    <Layout>
      <section className="px-4 lg:px-8 pt-4">
        <div className="mx-auto max-w-7xl relative overflow-hidden rounded-[28px] lg:rounded-[40px] bg-surface ring-1 ring-border">
          <img
            src={service.image}
            alt=""
            width={1280}
            height={832}
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-background/95 via-background/70 to-transparent" />
          <div className="relative px-6 sm:px-10 lg:px-16 py-20 lg:py-28">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary mb-6"
            >
              <ArrowLeft className="size-4" />
              {t("common.back")}
            </Link>
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3">
              {t("services.eyebrow")}
            </div>
            <h1 className="font-display text-5xl lg:text-6xl text-balance max-w-2xl">
              {t(service.titleKey)}
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-foreground/80 max-w-xl leading-relaxed">
              {t(service.shortKey)}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-2 gap-14">
        <div>
          <h2 className="font-display text-3xl lg:text-4xl mb-6">Om tjänsten</h2>
          <div className="space-y-5 text-foreground/80 text-lg leading-relaxed">
            {slug === "tradgard" ? (
              <>
                <p>{t("svc.tradgard.desc")}</p>
                <ul className="mt-6 space-y-3">
                  {["b1", "b2", "b3", "b4", "b5"].map((key) => (
                    <li key={key} className="flex items-start gap-3">
                      <div className="size-6 shrink-0 rounded-full bg-primary text-primary-foreground grid place-items-center mt-0.5">
                        <Check className="size-3.5" />
                      </div>
                      <span className="text-foreground/80">{t(`svc.tradgard.${key}`)}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-5 rounded-2xl bg-primary/10 ring-1 ring-primary/20 text-foreground font-medium">
                  {t("svc.tradgard.note")}
                </div>
              </>
            ) : (
              <>
                <p>{t("page.placeholder")}</p>
                <p>
                  Här fyller du i en mer detaljerad beskrivning av tjänsten, processen och vad som
                  ingår. Bilder från utförda uppdrag kan läggas till i en bildgalleri nedan.
                </p>
              </>
            )}
          </div>

          <ul className="mt-10 grid sm:grid-cols-2 gap-3">
            {slug === "tradgard"
              ? [t("common.bookCta"), t("common.callUs")].map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-3 p-4 rounded-2xl bg-surface ring-1 ring-border"
                  >
                    <div className="size-7 shrink-0 rounded-full bg-primary text-primary-foreground grid place-items-center">
                      <Check className="size-4" />
                    </div>
                    <span className="font-medium text-foreground">{b}</span>
                  </li>
                ))
              : bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-3 p-4 rounded-2xl bg-surface ring-1 ring-border"
                  >
                    <div className="size-7 shrink-0 rounded-full bg-primary text-primary-foreground grid place-items-center">
                      <Check className="size-4" />
                    </div>
                    <span className="font-medium text-foreground">{b}</span>
                  </li>
                ))}
          </ul>

          <Link
            to="/kontakt"
            className="inline-flex items-center gap-2 mt-10 px-6 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary-dark transition-colors shadow-card"
          >
            <Phone className="size-4" />
            {t("common.bookCta")}
          </Link>
        </div>

        <div className="space-y-5">
          <div className="aspect-[4/3] overflow-hidden rounded-3xl ring-1 ring-border">
            <img
              src={service.image}
              alt={t(service.titleKey)}
              loading="lazy"
              width={1280}
              height={832}
              className="size-full object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="aspect-square rounded-3xl bg-surface ring-1 ring-border grid place-items-center text-muted-foreground text-sm">
              Bild kommer
            </div>
            <div className="aspect-square rounded-3xl bg-surface ring-1 ring-border grid place-items-center text-muted-foreground text-sm">
              Bild kommer
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h3 className="font-display text-2xl mb-8">Andra tjänster</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services
              .filter((s) => s.slug !== service.slug)
              .slice(0, 6)
              .map((s) => (
                <Link
                  key={s.slug}
                  to="/tjanster/$slug"
                  params={{ slug: s.slug }}
                  className="group flex items-center gap-4 p-4 rounded-2xl bg-background ring-1 ring-border hover:ring-primary/40 transition-all"
                >
                  <div className="size-16 overflow-hidden rounded-xl shrink-0">
                    <img src={s.image} alt="" className="size-full object-cover" loading="lazy" />
                  </div>
                  <div>
                    <div className="font-semibold group-hover:text-primary">{t(s.titleKey)}</div>
                    <div className="text-sm text-muted-foreground line-clamp-1">
                      {t(s.shortKey)}
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
