import { Facebook, Instagram, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import { useLang } from "@/lib/i18n";

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="mt-32 border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 pt-20 pb-10">
        <div className="grid gap-14 lg:grid-cols-3">
          <div className="space-y-6 max-w-sm">
            <div className="flex items-center gap-3">
              <div className="size-12 overflow-hidden rounded-2xl ring-1 ring-border bg-background">
                <img src={logo.url} alt="" className="size-full object-cover" />
              </div>
              <div className="leading-tight">
                <div className="font-display text-xl">Limhamns Hemhjälp</div>
                <div className="text-[11px] tracking-[0.18em] uppercase text-primary font-semibold">
                  AB
                </div>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">{t("footer.tagline")}</p>
            <div className="flex items-center gap-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="size-10 grid place-items-center rounded-full bg-background ring-1 ring-border text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="size-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="size-10 grid place-items-center rounded-full bg-background ring-1 ring-border text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="size-5" />
              </a>
            </div>
          </div>

          <div className="space-y-5">
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-foreground">
              {t("footer.contact")}
            </h4>
            <ul className="space-y-4 text-[15px]">
              <li className="flex items-start gap-3">
                <MapPin className="size-5 mt-0.5 text-primary shrink-0" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-0.5">
                    {t("footer.address")}
                  </div>
                  <div>Västanväg 41, 216 13 Limhamn</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="size-5 mt-0.5 text-primary shrink-0" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-0.5">
                    {t("footer.phone")}
                  </div>
                  <a href="tel:+46703188250" className="hover:text-primary">
                    070-318 82 50
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div className="space-y-5">
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-foreground">
              {t("footer.legal")}
            </h4>
            <ul className="space-y-3 text-[15px] text-muted-foreground">
              <li>
                <span className="text-xs uppercase tracking-wider mr-2">{t("footer.org")}:</span>
                <span className="text-foreground font-medium">559322-2432</span>
              </li>
              <li>{t("footer.fskatt")}</li>
            </ul>
            <a
              href="tel:+46703188250"
              className="inline-flex mt-4 items-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary-dark transition-colors"
            >
              <Phone className="size-4" />
              {t("common.callUs")}
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Limhamns Hemhjälp AB. {t("footer.rights")}</p>
          <p className="tracking-wider uppercase">Limhamn · Malmö · Sverige</p>
        </div>
      </div>
    </footer>
  );
}
