import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/site-info";
import { useLanguage } from "@/lib/use-language";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;
  const { lang, isMr, toggleLanguage } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "shadow-[0_4px_24px_rgba(12,35,112,0.12)] border-b"
          : "border-b"
      }`}
      style={{
        background: scrolled ? "rgba(255, 255, 255, 0.96)" : "rgba(240, 246, 255, 0.92)",
        backdropFilter: "blur(20px)",
        borderColor: "rgba(12, 35, 112, 0.12)",
      }}
    >

      {/* ── MAIN NAV ROW ── */}
      <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between gap-4 px-4 sm:px-8 py-3">
        {/* LOGO */}
        <Link
          to="/"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            window.dispatchEvent(new CustomEvent("reset-section"));
          }}
          className="group flex items-center gap-3 cursor-pointer shrink-0"
        >
          <div className="leading-tight">
            <span
              className="block font-display text-sm sm:text-base font-black tracking-tight"
              style={{ color: "#1A05A2" }}
            >
              {isMr ? "प्रीतम ज्येष्ठ नागरिक आनंदशाळा" : site.nameEn}
            </span>
            <span
              className="block text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-extrabold"
              style={{ color: "#f472b6" }}
            >
              SANGLI • MAHARASHTRA
            </span>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-1 sm:gap-2 lg:flex">
          {navLinks.map((l) => {
            const isActive = l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
            return (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => {
                  if (l.to === "/") {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    window.dispatchEvent(new CustomEvent("reset-section"));
                  }
                }}
                className="group relative rounded-full px-4 py-2 text-sm font-bold transition-all duration-300 hover:text-[#f472b6]"
                style={{ color: isActive ? "#f472b6" : "#1A05A2" }}
              >
                {isMr ? l.label : l.en}
                <span
                  className={`absolute inset-x-4 -bottom-1 h-0.5 origin-center rounded-full transition-transform duration-300 ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                  style={{ background: "#f472b6" }}
                />
              </Link>
            );
          })}

          {/* LANGUAGE TOGGLE BUTTON */}
          <button
            onClick={toggleLanguage}
            className="ml-3 inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-xs font-extrabold transition-all duration-300 cursor-pointer shadow-sm hover:scale-105"
            style={{
              borderColor: "rgba(12, 35, 112, 0.25)",
              background: "#FFFFFF",
              color: "#1A05A2",
            }}
            title="Switch Language / भाषा बदला"
          >
            <span>🌐</span>
            <span>{isMr ? "मराठी | ENG" : "ENG | मराठी"}</span>
          </button>

          {/* TOP RIGHT ADMISSION CTA BUTTON */}
          <a
            href="tel:+919370237633"
            className="ml-2 inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-xs font-extrabold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              background: "linear-gradient(135deg, #f472b6 0%, #1A05A2 100%)",
            }}
          >
            <span>🏛️</span>
            <span>{isMr ? "आजच प्रवेश घ्या" : "Book Admission"}</span>
          </a>
        </nav>

        {/* MOBILE ACTIONS */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* MOBILE LANGUAGE TOGGLE BUTTON */}
          <button
            onClick={toggleLanguage}
            className="inline-flex items-center gap-1 rounded-full border px-3 py-1.5 text-xs font-extrabold cursor-pointer"
            style={{
              borderColor: "rgba(12, 35, 112, 0.2)",
              background: "rgba(255, 255, 255, 0.95)",
              color: "#1A05A2",
            }}
          >
            <span>🌐</span>
            <span className="text-[#f472b6] uppercase font-black">{lang}</span>
          </button>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="grid size-10 place-items-center rounded-xl transition-all duration-200 cursor-pointer"
            style={{
              border: "1.5px solid rgba(12, 35, 112, 0.2)",
              background: "#FFFFFF",
              color: "#1A05A2",
            }}
          >
            <span className="text-lg font-bold">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {/* ── MOBILE DRAWER ── */}
      {open && (
        <div
          className="animate-fade-up border-t lg:hidden"
          style={{
            borderColor: "rgba(12, 35, 112, 0.15)",
            background: "rgba(255, 255, 255, 0.98)",
            backdropFilter: "blur(20px)",
          }}
        >
          <div className="h-0.5 w-full" style={{ background: "linear-gradient(90deg, #1A05A2, #f472b6, #0284C7)" }} />
          <nav className="container-page flex flex-col py-4 gap-1">
            {navLinks.map((l) => {
              const isActive = l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => {
                    setOpen(false);
                    if (l.to === "/") {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      window.dispatchEvent(new CustomEvent("reset-section"));
                    }
                  }}
                  className="rounded-xl px-4 py-3.5 text-base font-bold transition-all duration-200 flex items-center justify-between"
                  style={{ 
                    color: isActive ? "#f472b6" : "#1A05A2",
                    background: isActive ? "rgba(230, 0, 103, 0.08)" : "transparent"
                  }}
                >
                  <span>{isMr ? l.label : l.en}</span>
                  <span style={{ color: "#475569", fontSize: "0.75rem" }}>{isMr ? l.en : l.label}</span>
                </Link>
              );
            })}

            {/* MOBILE LANGUAGE SWITCH OPTION */}
            <div className="mt-2 flex items-center justify-between px-4 py-3 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-bold text-[#1A05A2]">वेबसाईट भाषा / Website Language:</span>
              <button
                onClick={toggleLanguage}
                className="rounded-full px-4 py-1.5 text-xs font-bold text-white bg-[#f472b6] shadow"
              >
                {isMr ? "Switch to English 🇬🇧" : "मराठी निवड करा 🇮🇳"}
              </button>
            </div>

            <a
              href="tel:+919970079090"
              className="mt-3 mx-1 py-3.5 text-base text-center font-bold text-white rounded-full"
              style={{ background: "linear-gradient(135deg, #f472b6, #1A05A2)" }}
            >
              📞 {isMr ? "आजच प्रवेश घ्या · Call Now" : "Book Admission · Call Now"}
            </a>
          </nav>
        </div>
      )}

      {/* SCROLLED BOTTOM LINE */}
      <div
        className={`h-px transition-opacity duration-500 ${scrolled ? "opacity-100" : "opacity-0"}`}
        style={{ background: "linear-gradient(90deg, transparent, #f472b6, #0284C7, #1A05A2, transparent)" }}
      />
    </header>
  );
}