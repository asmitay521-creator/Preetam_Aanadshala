import { Link } from "react-router-dom";
import { navLinks, site } from "@/lib/site-info";
import { useLanguage } from "@/lib/use-language";

export function SiteFooter() {
  const { isEn } = useLanguage();

  return (
    <footer className="relative mt-24 overflow-hidden text-slate-100" style={{ background: "linear-gradient(180deg, #07123A 0%, #1A05A2 50%, #050E2E 100%)" }}>
      {/* TOP ACCENT LINE */}
      <div
        className="h-1.5"
        style={{ background: "linear-gradient(90deg, #1A05A2, #E60067, #38BDF8, #E60067, #1A05A2)" }}
      />

      {/* BACKGROUND BLOBS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full blur-3xl animate-float opacity-30"
             style={{ background: "radial-gradient(circle, rgba(230,0,103,0.4) 0%, transparent 70%)" }} />
        <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full blur-3xl animate-float-reverse opacity-30"
             style={{ background: "radial-gradient(circle, rgba(2,132,199,0.4) 0%, transparent 70%)" }} />
      </div>

      {/* MAIN FOOTER BODY */}
      <div className="relative z-10">
        <div className="container-page grid gap-12 py-16 md:grid-cols-3">

          {/* BRAND COLUMN */}
          <div className="space-y-5">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group flex items-center gap-3 cursor-pointer transition-all duration-300 hover:opacity-90"
            >
              <div
                className="grid size-14 place-items-center rounded-2xl font-display font-black text-white text-base shadow-md group-hover:scale-105 transition-transform duration-300"
                style={{
                  background: "linear-gradient(135deg, #E60067, #1A05A2)",
                }}
              >
                {isEn ? "P" : "प्री"}
              </div>
              <div>
                <h3 className="font-display text-xl font-black text-white group-hover:text-[#E60067] transition-colors">
                  {isEn ? site.nameEn : site.nameMr}
                </h3>
                <p className="text-[11px] uppercase tracking-[0.2em] font-extrabold text-[#E60067]">
                  Sangli · Maharashtra
                </p>
              </div>
            </Link>

            <p className="text-sm font-semibold leading-relaxed max-w-xs text-slate-300">
              {isEn ? site.taglineEn : site.taglineMr}
            </p>

            <div
              className="inline-block px-4 py-2 rounded-full text-xs font-extrabold border border-[#E60067]/50 text-white bg-[#E60067]/20 backdrop-blur"
            >
              🌿 {isEn ? site.launchEn : site.launchMr}
            </div>
          </div>

          {/* NAV LINKS */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.28em] font-black text-white mb-5 border-b border-[#E60067]/40 pb-2 inline-block">
              {isEn ? "Pages" : "पृष्ठे (Pages)"}
            </h4>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="group flex items-center gap-2 text-sm font-semibold text-slate-200 transition-all duration-300 hover:translate-x-1"
                  >
                    <span
                      className="w-5 h-0.5 rounded-full bg-[#E60067] transition-all duration-300 group-hover:w-7"
                    />
                    <span className="group-hover:text-[#E60067] transition-colors duration-300 text-slate-200 font-bold">
                      {isEn ? l.en : l.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT COLUMN */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.28em] font-black text-white mb-5 border-b border-[#E60067]/40 pb-2 inline-block">
              {isEn ? "Contact Us" : "संपर्क (Contact)"}
            </h4>
            <ul className="space-y-3.5 text-sm">
              {site.phones.map((p) => (
                <li key={p}>
                  <a
                    href={`tel:${p.replace(/\s/g, "")}`}
                    className="group flex items-center gap-2.5 font-bold text-slate-200 transition-all duration-300 hover:text-[#E60067]"
                  >
                    <span
                      className="grid size-7 place-items-center rounded-lg text-xs shrink-0 bg-white/10 border border-white/20 group-hover:scale-110 transition-transform duration-300"
                    >
                      📞
                    </span>
                    <span className="text-slate-200 font-semibold">{p}</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="group flex items-center gap-2.5 font-bold text-slate-200 transition-all duration-300 hover:text-[#E60067]"
                >
                  <span
                    className="grid size-7 place-items-center rounded-lg text-xs shrink-0 bg-white/10 border border-white/20 group-hover:scale-110 transition-transform duration-300"
                  >
                    ✉️
                  </span>
                  <span className="text-slate-200 break-all font-semibold">{site.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 pt-1 leading-relaxed font-semibold text-slate-300">
                <span
                  className="grid size-7 place-items-center rounded-lg text-xs shrink-0 mt-0.5 bg-white/10 border border-white/20"
                >
                  📍
                </span>
                <span className="text-slate-300">{isEn ? site.addressEn : site.addressMr}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-slate-700/60 bg-[#050E2E]">
          <div className="container-page flex flex-col items-center justify-between gap-3 py-5 text-xs sm:flex-row font-bold text-slate-300">
            <span>
              © {new Date().getFullYear()} {isEn ? site.nameEn : site.nameMr}. {isEn ? "All Rights Reserved." : "सर्व हक्क राखीव."}
            </span>
            <span className="font-extrabold text-[#E60067]">
              🌿 {isEn ? "Preetam Apulki & Jivhala Trust, Sangli" : "प्रीतम आपुलकी व जिव्हाळा ट्रस्ट, सांगली"}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}