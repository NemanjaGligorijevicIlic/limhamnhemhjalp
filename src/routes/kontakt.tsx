import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Building2 } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — Limhamns Hemhjälp AB" },
      {
        name: "description",
        content:
          "Kontakta Limhamns Hemhjälp AB för kostnadsfri offert. Tel 070-318 82 50, Västanväg 41, 216 13 Limhamn.",
      },
      { property: "og:title", content: "Kontakt — Limhamns Hemhjälp AB" },
    ],
    links: [{ rel: "canonical", href: "/kontakt" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useLang();
  const items = [
    { icon: MapPin, label: t("footer.address"), value: "Västanväg 41, 216 13 Limhamn" },
    { icon: Phone, label: t("footer.phone"), value: "070-318 82 50", href: "tel:+46703188250" },
    { icon: Mail, label: "Email", value: "limhamns.hemhjalp@gmail.com", href: "mailto:limhamns.hemhjalp@gmail.com" },
    { icon: Building2, label: t("footer.org"), value: "559322-2432 · F-skatt" },
  ];

  return (
    <Layout>
      <section className="px-4 lg:px-8 pt-4">
        <div className="mx-auto max-w-7xl bg-surface ring-1 ring-border rounded-[28px] lg:rounded-[40px] px-6 sm:px-10 lg:px-16 py-20 lg:py-28">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3">
            {t("common.contactUs")}
          </div>
          <h1 className="font-display text-5xl lg:text-6xl text-balance max-w-3xl">
            Vi finns här när du behöver oss.
          </h1>
          <p className="mt-6 text-lg lg:text-xl text-foreground/80 max-w-2xl">
            Ring för en kostnadsfri offert eller boka ett hembesök. Vi pratar svenska och engelska.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2 space-y-4">
          {items.map((it) => {
            const Icon = it.icon;
            const content = (
              <div className="flex items-start gap-4 p-6 rounded-3xl bg-card ring-1 ring-border hover:ring-primary/40 transition-all">
                <div className="size-12 shrink-0 rounded-2xl bg-primary-soft text-primary grid place-items-center">
                  <Icon className="size-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                    {it.label}
                  </div>
                  <div className="text-lg font-medium text-foreground">{it.value}</div>
                </div>
              </div>
            );
            return it.href ? (
              <a key={it.label} href={it.href}>
                {content}
              </a>
            ) : (
              <div key={it.label}>{content}</div>
            );
          })}
        </div>

        <div className="lg:col-span-3 rounded-3xl overflow-hidden ring-1 ring-border bg-surface min-h-[420px]">
          <iframe
            title="Karta — Limhamn"
            src="https://www.openstreetmap.org/export/embed.html?bbox=12.93%2C55.56%2C12.95%2C55.58&amp;layer=mapnik&amp;marker=55.57%2C12.94"
            className="size-full"
            loading="lazy"
          />
        </div>
      </section>
    </Layout>
  );
}
