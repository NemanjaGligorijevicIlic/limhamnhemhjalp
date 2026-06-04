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

  "pillars.word1": "Omsorg",
  "pillars.desc1": "Varje kund får en personlig medarbetare som lär känna just era behov och önskemål.",
  "pillars.word2": "Trygghet",
  "pillars.desc2": "Samma välbekanta ansikte vid varje besök — för kontinuitet och lugn i vardagen.",
  "pillars.word3": "Trivsel",
  "pillars.desc3": "När ni känner er omhändertagna skapas en genuin glädje och känsla av välbefinnande.",
  "pillars.mission": "Vi på Limhamns Hemhjälp AB förstår att trygghet är grunden för ett gott liv — särskilt för våra seniorer. Därför tilldelar vi samma dedikerade medarbetare till varje kund. Den personliga kontakten skapar förtroende, lugn och en genuin känsla av att bli sedd. När ni känner er omhändertagna, blir varje dag lite ljusare.",

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
  "svc.hemstad.title": "Hemstädning",
  "svc.hemstad.short": "Skräddarsydd hemstädning efter dina önskemål.",

  "svc.tradgard.desc": "Vår trädgårdsskötsel hjälper dig att hålla din utomhusmiljö vacker och välskött — utan att du behöver lyfta ett finger. Vi arbetar noggrant, alltid med samma person så att du känner dig trygg.",
  "svc.tradgard.b1": "Häckklippning – Vi klipper och formar dina häckar så att de hålls tät och välvårdade året om.",
  "svc.tradgard.b2": "Gräsklippning – En jämn, fin och fräsch gräsmatta vid varje besök.",
  "svc.tradgard.b3": "Rensning av ogräs, gångar och plattor – Vi rensar ogräs och håller dina gångar och uteplatser rena och fina.",
  "svc.tradgard.b4": "Lövkrattning – Vi krattar bort löv så att din trädgård alltid ser välvårdad ut.",
  "svc.tradgard.b5": "Högtryckstvätt – Effektiv rengöring av stenläggning, altaner och fasader.",
  "svc.tradgard.note": "Gratis bortforsling av trädgårdsavfall ingår under sommarperioden enligt överenskommelse!",

  "svc.kontorstad.desc": "Vi skapar en ren och inspirerande arbetsmiljö där ditt team kan trivas och prestera. Vår kontorsstädning anpassas helt efter era behov och verksamhet.",
  "svc.kontorstad.b1": "Regelbunden städning – daglig, veckovis eller enligt överenskommelse.",
  "svc.kontorstad.b2": "Dammning, dammsugning och golvbehandling av alla ytor.",
  "svc.kontorstad.b3": "Rengöring av kök, pausrum och gemensamma utrymmen.",
  "svc.kontorstad.b4": "Sanering av toaletter och hygienutrymmen.",
  "svc.kontorstad.b5": "Flexibla arbetstider som inte stör er verksamhet.",

  "svc.lagerstad.desc": "Effektiv och noggrann städning av lagerlokaler med fokus på säkerhet och arbetsmiljö. Vi ser till att era utrymmen är rena och funktionella.",
  "svc.lagerstad.b1": "Maskinell och manuell golvvård i stora lokaler.",
  "svc.lagerstad.b2": "Borttagning av damm och smuts från hyllor och förvaringsytor.",
  "svc.lagerstad.b3": "Rengöring av lastkajer och transportvägar.",
  "svc.lagerstad.b4": "Säkerhetsfokuserad hantering av kemikalier och avfall.",
  "svc.lagerstad.b5": "Anpassade schefter efter er verksamhet.",

  "svc.fonsterputs.desc": "Vi lämnar kristallklara fönster som släpper in ljuset och ger ett välvårdat intryck — både inifrån och utifrån.",
  "svc.fonsterputs.b1": "Inne- och utsida av alla typer av fönsteröppningar.",
  "svc.fonsterputs.b2": "Karmrengöring ingår om kunden önskar.",
  "svc.fonsterputs.b3": "Fönster upp till 2,5 meters höjd — utan långa stege.",
  "svc.fonsterputs.b4": "Miljövänliga rengöringsmedel som är skonsamma för både miljö och hem.",
  "svc.fonsterputs.note": "Vi erbjuder rabatter på bortforsling för våra återkommande kunder!",

  "svc.flyttstad.desc": "Garanterat godkänd flyttstädning så att du kan lämna bostaden i perfekt skick — och fokusera på ditt nya hem.",
  "svc.flyttstad.b1": "Noggrann rengöring av samtliga rum, skåp och lådor.",
  "svc.flyttstad.b2": "Avkalkning och rengöring av kök, kyl och frys.",
  "svc.flyttstad.b3": "Total sanering av badrum, toalett och kakel.",
  "svc.flyttstad.b4": "Fönsterputs och golvvård ingår alltid.",
  "svc.flyttstad.b5": "Utförs enligt besiktningsstandarder med garanti.",

  "svc.renovering.desc": "Efter renoveringen tar vi bort allt byggdamm och alla rester så att du kan njuta av ditt nyrenoverade hem direkt.",
  "svc.renovering.b1": "Borttagning av byggdamm från alla ytor, lister och fönsterbrädor.",
  "svc.renovering.b2": "Grov- och finrengöring av golv, väggar och tak.",
  "svc.renovering.b3": "Fönsterputs och rengöring av fönsterkarmar.",
  "svc.renovering.b4": "Rengöring av ventilation och filter.",
  "svc.renovering.b5": "Slutbesiktning i samråd med kunden.",

  "svc.mottagning.desc": "Specialiststädning för läkar- och tandläkarmottagningar med absolut fokus på hygien, sterilitet och patientsäkerhet.",
  "svc.mottagning.b1": "Desinficering av alla behandlingsytor och utrustning.",
  "svc.mottagning.b2": "Rengöring av väntrum, reception och korridorer.",
  "svc.mottagning.b3": "Behandlingsrum saneras enligt branschstandarder.",
  "svc.mottagning.b4": "Hantering av medicinskt avfall enligt gällande föreskrifter.",
  "svc.mottagning.b5": "Kompatibel med vårdhygieniska krav och lagstiftning.",

  "svc.hemstad.desc": "Hemstädning helt efter dina önskemål — vi skräddarsyr varje besök så att du får precis den hjälp du behöver.",
  "svc.hemstad.b1": "Allt ingår enligt önskemål — inget är för stort eller för litet.",
  "svc.hemstad.b2": "Dammning, dammsugning och mopning av alla golv.",
  "svc.hemstad.b3": "Rengöring av kök, badrum och hygienutrymmen.",
  "svc.hemstad.b4": "Sängbäddning och allmän uppröjning.",
  "svc.hemstad.b5": "Samma person varje gång för trygghet och kontinuitet.",
  "svc.hemstad.note": "Vi erbjuder miljövänliga städmedel och rabatter på bortforsling för återkommande kunder!",

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

  "pillars.word1": "Care",
  "pillars.desc1": "Every client is matched with a dedicated team member who learns your unique needs and preferences.",
  "pillars.word2": "Security",
  "pillars.desc2": "The same familiar face at every visit — for continuity and peace of mind in your daily life.",
  "pillars.word3": "Well-being",
  "pillars.desc3": "Feeling truly looked after brings genuine joy and a deep sense of comfort.",
  "pillars.mission": "At Limhamns Hemhjälp AB, we believe that security is the foundation of a good life — especially for our seniors. That's why we assign the same dedicated caregiver to every client. This personal bond builds trust, calm, and the genuine feeling of being seen. When you feel cared for, every day becomes a little brighter.",

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
  "svc.hemstad.title": "Home Cleaning",
  "svc.hemstad.short": "Tailored home cleaning according to your wishes.",

  "svc.tradgard.desc": "Our garden maintenance keeps your outdoor space beautiful and well-cared-for — without you lifting a finger. We work carefully, always with the same person so you feel safe.",
  "svc.tradgard.b1": "Hedge trimming – We trim and shape your hedges to keep them dense and neat all year round.",
  "svc.tradgard.b2": "Lawn mowing – An even, tidy and fresh lawn at every visit.",
  "svc.tradgard.b3": "Weed and path cleaning – We remove weeds and keep your paths and patios clean and tidy.",
  "svc.tradgard.b4": "Leaf raking – We rake away leaves so your garden always looks well-kept.",
  "svc.tradgard.b5": "Pressure washing – Effective cleaning of paving, decking and facades.",
  "svc.tradgard.note": "Free removal of garden waste is included during the summer period by agreement!",

  "svc.kontorstad.desc": "We create a clean and inspiring work environment where your team can thrive and perform. Our office cleaning is fully tailored to your needs and operations.",
  "svc.kontorstad.b1": "Regular cleaning — daily, weekly or by agreement.",
  "svc.kontorstad.b2": "Dusting, vacuuming and floor care for all surfaces.",
  "svc.kontorstad.b3": "Kitchen, break room and common area cleaning.",
  "svc.kontorstad.b4": "Sanitization of restrooms and hygiene areas.",
  "svc.kontorstad.b5": "Flexible working hours that don't disturb your business.",

  "svc.lagerstad.desc": "Efficient and thorough cleaning of warehouse premises with a focus on safety and working environment. We ensure your spaces are clean and functional.",
  "svc.lagerstad.b1": "Machine and manual floor care in large premises.",
  "svc.lagerstad.b2": "Removal of dust and dirt from shelving and storage areas.",
  "svc.lagerstad.b3": "Cleaning of loading docks and transport routes.",
  "svc.lagerstad.b4": "Safety-focused handling of chemicals and waste.",
  "svc.lagerstad.b5": "Customized schedules according to your operations.",

  "svc.fonsterputs.desc": "We leave crystal-clear windows that let in the light and give a well-maintained impression — both inside and out.",
  "svc.fonsterputs.b1": "Interior and exterior of all types of window openings.",
  "svc.fonsterputs.b2": "Frame cleaning included if the customer wishes.",
  "svc.fonsterputs.b3": "Windows up to 2.5 meters in height — no long ladders needed.",
  "svc.fonsterputs.b4": "Eco-friendly cleaning products that are gentle on both environment and home.",
  "svc.fonsterputs.note": "We offer discounts on waste removal for our returning customers!",

  "svc.flyttstad.desc": "Guaranteed approved move-out cleaning so you can leave the property in perfect condition — and focus on your new home.",
  "svc.flyttstad.b1": "Thorough cleaning of all rooms, cabinets and drawers.",
  "svc.flyttstad.b2": "Descaling and cleaning of kitchen, refrigerator and freezer.",
  "svc.flyttstad.b3": "Complete sanitization of bathroom, toilet and tiles.",
  "svc.flyttstad.b4": "Window cleaning and floor care are always included.",
  "svc.flyttstad.b5": "Performed according to inspection standards with a guarantee.",

  "svc.renovering.desc": "After the renovation, we remove all construction dust and debris so you can enjoy your newly renovated home right away.",
  "svc.renovering.b1": "Removal of construction dust from all surfaces, moldings and window sills.",
  "svc.renovering.b2": "Rough and fine cleaning of floors, walls and ceilings.",
  "svc.renovering.b3": "Window cleaning and frame cleaning.",
  "svc.renovering.b4": "Cleaning of ventilation and filters.",
  "svc.renovering.b5": "Final inspection in consultation with the customer.",

  "svc.mottagning.desc": "Specialist cleaning for medical and dental clinics with absolute focus on hygiene, sterility and patient safety.",
  "svc.mottagning.b1": "Disinfection of all treatment surfaces and equipment.",
  "svc.mottagning.b2": "Cleaning of waiting rooms, reception and corridors.",
  "svc.mottagning.b3": "Treatment rooms sanitized according to industry standards.",
  "svc.mottagning.b4": "Medical waste handling in accordance with applicable regulations.",
  "svc.mottagning.b5": "Compatible with healthcare hygiene requirements and legislation.",

  "svc.hemstad.desc": "Home cleaning completely according to your wishes — we tailor every visit so you get exactly the help you need.",
  "svc.hemstad.b1": "Everything included according to your wishes — nothing is too big or too small.",
  "svc.hemstad.b2": "Dusting, vacuuming and mopping of all floors.",
  "svc.hemstad.b3": "Cleaning of kitchen, bathroom and hygiene areas.",
  "svc.hemstad.b4": "Bed making and general tidying.",
  "svc.hemstad.b5": "The same person every time for security and continuity.",
  "svc.hemstad.note": "We offer eco-friendly cleaning products and discounts on waste removal for returning customers!",

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
