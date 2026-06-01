import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "sv" | "en";

type Dict = Record<string, string>;

const sv: Dict = {
  "nav.home": "Hem",
  "nav.services": "Tjänster",
  "nav.projects": "Projekt",
  "nav.contact": "Kontakt",

  "hero.tagline": "Omsorg i varje detalj",
  "hero.title": "Äldre ska känna sig trygga!",
  "hero.subtitle":
    "För en enklare vardag för seniorer. För ytterligare trygghet kommer samma person till er vid varje besök.",
  "hero.cta": "Boka kostnadsfritt hembesök",
  "hero.cta2": "Se våra tjänster",

  "services.eyebrow": "Våra Tjänster",
  "services.title": "Vi sköter allt så att ni kan njuta",
  "services.subtitle":
    "Skräddarsydda lösningar för både hem och företag — alltid med samma välkända ansikte.",
  "services.readmore": "Läs mer",

  "svc.kontorstad.title": "Kontorstäd",
  "svc.kontorstad.short": "En ren och inspirerande arbetsmiljö för ditt team.",
  "svc.lagerstad.title": "Lagerstäd",
  "svc.lagerstad.short": "Effektiv städning av lagerlokaler med fokus på säkerhet.",
  "svc.fonsterputs.title": "Fönsterputs",
  "svc.fonsterputs.short": "Kristallklara fönster som släpper in ljuset.",
  "svc.flyttstad.title": "Flyttstäd",
  "svc.flyttstad.short": "Garanterat godkänd städning vid flytt.",
  "svc.renovering.title": "Städ efter renovering",
  "svc.renovering.short": "Vi avlägsnar byggdamm och rester helt och hållet.",
  "svc.mottagning.title": "Läkar- & Tandläkarmottagning",
  "svc.mottagning.short": "Specialiststädning med fokus på hygien och sterilitet.",
  "svc.tradgard.title": "Trädgård",
  "svc.tradgard.short": "Gräsklippning, häckklippning och trädgårdsskötsel året om.",

  "seniors.eyebrow": "Trygghet i fokus",
  "seniors.title": "Varför seniorer väljer oss",
  "seniors.p1": "Samma person varje gång",
  "seniors.p1d":
    "Vi bygger relationer. Du möts alltid av samma välbekanta ansikte — för kontinuitet och trygghet.",
  "seniors.p2": "Legitimerad personal i rosa",
  "seniors.p2d":
    "All vår personal bär ID-handling och vår signifikanta rosa uniform — alltid lätta att känna igen.",
  "seniors.p3": "Tydlig kommunikation",
  "seniors.p3d":
    "Inga överraskningar. Vi pratar igenom allt i förväg och håller överenskomna tider.",

  "projects.eyebrow": "Före & Efter",
  "projects.title": "Våra projekt",
  "projects.subtitle": "Se skillnaden vi gör i våra kunders vardag.",
  "projects.before": "FÖRE",
  "projects.after": "EFTER",
  "projects.viewall": "Se alla projekt",

  "footer.tagline":
    "Vi skapar en tryggare vardag för Limhamns seniorer genom personlig service och omsorg.",
  "footer.contact": "Kontakt",
  "footer.address": "Adress",
  "footer.phone": "Telefon",
  "footer.org": "Org nr",
  "footer.fskatt": "Innehar F-skatt",
  "footer.legal": "Företagsinformation",
  "footer.rights": "Alla rättigheter förbehållna.",

  "common.back": "Tillbaka",
  "common.bookCta": "Boka kostnadsfritt besök",
  "common.callUs": "Ring oss",
  "common.contactUs": "Kontakta oss",

  "page.placeholder":
    "Här kommer en utförlig beskrivning av tjänsten samt bilder från utförda uppdrag.",
};

const en: Dict = {
  "nav.home": "Home",
  "nav.services": "Services",
  "nav.projects": "Projects",
  "nav.contact": "Contact",

  "hero.tagline": "Care in every detail",
  "hero.title": "Seniors should feel safe!",
  "hero.subtitle":
    "For a simpler everyday life for seniors. For added security, the same person visits you every time.",
  "hero.cta": "Book a free home visit",
  "hero.cta2": "See our services",

  "services.eyebrow": "Our Services",
  "services.title": "We take care of everything so you can enjoy",
  "services.subtitle":
    "Tailored solutions for both homes and businesses — always with the same familiar face.",
  "services.readmore": "Read more",

  "svc.kontorstad.title": "Office Cleaning",
  "svc.kontorstad.short": "A clean, inspiring workplace for your team.",
  "svc.lagerstad.title": "Warehouse Cleaning",
  "svc.lagerstad.short": "Efficient cleaning with a focus on safety.",
  "svc.fonsterputs.title": "Window Cleaning",
  "svc.fonsterputs.short": "Crystal-clear windows that let the light in.",
  "svc.flyttstad.title": "Move-out Cleaning",
  "svc.flyttstad.short": "Guaranteed approved cleaning when you move.",
  "svc.renovering.title": "Post-renovation Cleaning",
  "svc.renovering.short": "We remove construction dust and debris completely.",
  "svc.mottagning.title": "Medical & Dental Clinics",
  "svc.mottagning.short": "Specialist cleaning focused on hygiene and sterility.",
  "svc.tradgard.title": "Garden Care",
  "svc.tradgard.short": "Lawn, hedge and full garden maintenance year-round.",

  "seniors.eyebrow": "Safety in focus",
  "seniors.title": "Why seniors choose us",
  "seniors.p1": "The same person every time",
  "seniors.p1d":
    "We build relationships. You're always greeted by the same familiar face — continuity and trust.",
  "seniors.p2": "ID-verified staff in pink",
  "seniors.p2d":
    "All our staff carry ID and wear our recognisable pink uniform — easy to identify.",
  "seniors.p3": "Clear communication",
  "seniors.p3d":
    "No surprises. We talk everything through in advance and keep agreed times.",

  "projects.eyebrow": "Before & After",
  "projects.title": "Our projects",
  "projects.subtitle": "See the difference we make in our clients' lives.",
  "projects.before": "BEFORE",
  "projects.after": "AFTER",
  "projects.viewall": "View all projects",

  "footer.tagline":
    "We create a safer everyday life for Limhamn's seniors through personal service and care.",
  "footer.contact": "Contact",
  "footer.address": "Address",
  "footer.phone": "Phone",
  "footer.org": "Org no.",
  "footer.fskatt": "Approved for F-tax",
  "footer.legal": "Company information",
  "footer.rights": "All rights reserved.",

  "common.back": "Back",
  "common.bookCta": "Book a free visit",
  "common.callUs": "Call us",
  "common.contactUs": "Contact us",

  "page.placeholder":
    "A detailed description of this service and photos from completed projects will appear here.",
};

const dicts: Record<Lang, Dict> = { sv, en };

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: string) => string };
const LangCtx = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("sv");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = window.localStorage.getItem("lang") as Lang | null;
    if (saved === "sv" || saved === "en") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") window.localStorage.setItem("lang", l);
  };

  const t = (k: string) => dicts[lang][k] ?? k;
  return <LangCtx.Provider value={{ lang, setLang, t }}>{children}</LangCtx.Provider>;
}

export function useLang() {
  const ctx = useContext(LangCtx);
  if (!ctx) throw new Error("useLang must be used inside LangProvider");
  return ctx;
}
