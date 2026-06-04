import office from "@/assets/svc-office.jpg";
import warehouse from "@/assets/svc-warehouse.jpg";
import windows from "@/assets/svc-windows.jpg";
import moving from "@/assets/svc-moving.jpg";
import renovation from "@/assets/svc-renovation.jpg";
import clinic from "@/assets/svc-clinic.jpg";
import garden from "@/assets/svc-garden.jpg";
import home from "@/assets/svc-office.jpg";

export type ServiceSlug =
  | "kontorstad"
  | "lagerstad"
  | "fonsterputs"
  | "flyttstad"
  | "renovering"
  | "mottagning"
  | "tradgard"
  | "hemstad";

export type Service = {
  slug: ServiceSlug;
  image: string;
  titleKey: string;
  shortKey: string;
};

export const services: Service[] = [
  { slug: "hemstad",    image: home,       titleKey: "svc.hemstad.title",     shortKey: "svc.hemstad.short" },
  { slug: "kontorstad",  image: office,     titleKey: "svc.kontorstad.title",  shortKey: "svc.kontorstad.short" },
  { slug: "lagerstad",   image: warehouse,  titleKey: "svc.lagerstad.title",   shortKey: "svc.lagerstad.short" },
  { slug: "fonsterputs", image: windows,    titleKey: "svc.fonsterputs.title", shortKey: "svc.fonsterputs.short" },
  { slug: "flyttstad",   image: moving,     titleKey: "svc.flyttstad.title",   shortKey: "svc.flyttstad.short" },
  { slug: "renovering",  image: renovation, titleKey: "svc.renovering.title",  shortKey: "svc.renovering.short" },
  { slug: "mottagning",  image: clinic,     titleKey: "svc.mottagning.title",  shortKey: "svc.mottagning.short" },
  { slug: "tradgard",    image: garden,     titleKey: "svc.tradgard.title",    shortKey: "svc.tradgard.short" },
];
