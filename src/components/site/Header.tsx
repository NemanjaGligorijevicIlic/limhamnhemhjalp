import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Facebook, Instagram, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { useLang, type Lang } from "@/lib/i18n";
import { services } from "@/lib/services";

function Brand() {
  return (
    <Link to="/" className="flex items-center gap-3 group">
      <div className="size-12 overflow-hidden rounded-2xl ring-1 ring-border bg-surface shadow-soft transition-transform group-hover:scale-105">
        <img src={logo} alt="Limhamns Hemhjälp AB" className="size-full object-cover" />
      </div>
      <div className="hidden sm:flex flex-col leading-tight">
        <span className="font-display text-xl text-foreground">Limhamns Hemhjälp</span>
        <span className="text-[11px] tracking-[0.18em] uppercase text-primary font-semibold">
          AB · Limhamn
        </span>
      </div>
    </Link>
  );
}

function LangSwitch() {
  const { lang, setLang } = useLang();
  const opt = (v: Lang, label: string) => (
    <button
      key={v}
      onClick={() => setLang(v)}
      aria-pressed={lang === v}
      className={`px-2.5 py-1 rounded-full text-xs font-bold tracking-wider transition-colors ${
        lang === v ? "bg-primary text-primary-foreground shadow-soft" : "text-muted-foreground hover:text-foreground"
      }`}
    >
      {label}
    </button>
  );
  return (
    <div className="flex items-center gap-1 p-1 rounded-full bg-surface ring-1 ring-border">
      {opt("sv", "SV")}
      {opt("en", "EN")}
    </div>
  );
}

function Socials() {
  return (
    <div className="flex items-center gap-1">
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="size-10 grid place-items-center rounded-full text-muted-foreground hover:text-primary hover:bg-primary-soft transition-colors"
      >
        <Facebook className="size-5" />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="size-10 grid place-items-center rounded-full text-muted-foreground hover:text-primary hover:bg-primary-soft transition-colors"
      >
        <Instagram className="size-5" />
      </a>
    </div>
  );
}

function ServicesDropdown({ onNavigate }: { onNavigate?: () => void }) {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const openSoon = () => {
    if (timer.current) window.clearTimeout(timer.current);
    setOpen(true);
  };
  const closeSoon = () => {
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setOpen(false), 120);
  };

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={openSoon}
      onMouseLeave={closeSoon}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex items-center gap-1.5 text-[15px] font-medium text-foreground/80 hover:text-primary transition-colors py-2"
      >
        {t("nav.services")}
        <ChevronDown className={`size-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[min(92vw,560px)] z-50">
          <div className="rounded-3xl bg-card ring-1 ring-border shadow-card p-3 animate-fade-up">
            <div className="grid sm:grid-cols-2 gap-1">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  to="/tjanster/$slug"
                  params={{ slug: s.slug }}
                  onClick={() => {
                    setOpen(false);
                    onNavigate?.();
                  }}
                  className="group flex items-center gap-3 rounded-2xl p-3 hover:bg-primary-soft transition-colors"
                >
                  <span className="size-2 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" />
                  <span className="text-[15px] font-medium text-foreground group-hover:text-primary-dark">
                    {t(s.titleKey)}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function Header() {
  const { t } = useLang();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const route = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [route]);

  const linkClass = (active: boolean) =>
    `text-[15px] font-medium transition-colors py-2 ${
      active ? "text-primary" : "text-foreground/80 hover:text-primary"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled ? "bg-background/85 backdrop-blur-xl border-b border-border" : "bg-background/0"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8 h-20 flex items-center justify-between gap-4">
        <Brand />

        <nav className="hidden lg:flex items-center gap-8">
          <Link to="/" className={linkClass(route === "/")}>
            {t("nav.home")}
          </Link>
          <ServicesDropdown />
          <Link to="/projekt" className={linkClass(route.startsWith("/projekt"))}>
            {t("nav.projects")}
          </Link>
          <Link to="/kontakt" className={linkClass(route.startsWith("/kontakt"))}>
            {t("nav.contact")}
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <LangSwitch />
          <div className="hidden md:block">
            <Socials />
          </div>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden size-10 grid place-items-center rounded-full bg-surface ring-1 ring-border"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-up">
          <div className="px-5 py-6 space-y-1">
            <Link to="/" className="block px-3 py-3 rounded-xl hover:bg-primary-soft text-base font-medium">
              {t("nav.home")}
            </Link>
            <div className="px-3 pt-4 pb-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              {t("nav.services")}
            </div>
            {services.map((s) => (
              <Link
                key={s.slug}
                to="/tjanster/$slug"
                params={{ slug: s.slug }}
                className="block px-3 py-2.5 rounded-xl hover:bg-primary-soft text-[15px]"
              >
                {t(s.titleKey)}
              </Link>
            ))}
            <Link to="/projekt" className="block px-3 py-3 rounded-xl hover:bg-primary-soft text-base font-medium mt-2">
              {t("nav.projects")}
            </Link>
            <Link to="/kontakt" className="block px-3 py-3 rounded-xl hover:bg-primary-soft text-base font-medium">
              {t("nav.contact")}
            </Link>
            <div className="pt-4 px-3">
              <Socials />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
