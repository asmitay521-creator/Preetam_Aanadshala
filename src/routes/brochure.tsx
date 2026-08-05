import React from "react";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { useLanguage } from "@/lib/use-language";
import { brochurePdfUrl } from "@/lib/brochure-pages";



const brochureList = [
  { id: 1, url: "/images/Screenshot 2026-07-31 103107.png", titleMr: "आनंदशाळा माहिती पत्रक व प्रवेश माहिती", captionEn: "Anandshala Brochure & Admission Details", categoryMr: "प्रवेश व नियम" },
  { id: 2, url: "/images/Screenshot 2026-07-31 103131.png", titleMr: "५ तासांचे वेळापत्रक व १५ उपक्रम हॉल्स", captionEn: "5-Hour Daily Schedule & 15 Activity Halls", categoryMr: "वेळापत्रक & हॉल्स" },
  { id: 3, url: "/images/Screenshot 2026-07-31 103213.png", titleMr: "५५ फुटांची राधाकृष्ण मूर्ती व मंदिर", captionEn: "55ft Radha Krishna Statue & Temple", categoryMr: "मंदिर परिसर" },
  { id: 4, url: "/images/Screenshot 2026-07-31 103238.png", titleMr: "१ दिवस सहल भेट पास सोहळा व व्हॅन सेवा", captionEn: "One Day Picnic Pass & Transport Facility", categoryMr: "सहली & वाहतूक" },
  { id: 5, url: "/images/aandshala sahal 1.jpeg", titleMr: "आनंद सहलीतील ज्येष्ठ नागरिकांचे आनंदी क्षण", captionEn: "Joyful Moments from Senior Citizen Trips", categoryMr: "सहली & फोटो" },
  { id: 6, url: "/images/Screenshot 2026-07-31 103517.png", titleMr: "ज्येष्ठ नागरिक आनंद मेळावा सांगली", captionEn: "Senior Citizen Anand Mela Gathering", categoryMr: "मेळावा सोहळा" },
  { id: 7, url: "/images/Screenshot 2026-07-31 103545.png", titleMr: "आनंद मेळावा सांस्कृतिक कार्यक्रम", captionEn: "Cultural Events & Celebrations", categoryMr: "सांस्कृतिक" },
  { id: 8, url: "/images/Screenshot 2026-07-31 103659.png", titleMr: "विरंगुळा केंद्र - कॅरम, बुद्धिबळ व वाचनालय", captionEn: "Recreation Center: Chess, Carrom & Library", categoryMr: "विरंगुळा" },
  { id: 9, url: "/images/Screenshot 2026-07-31 103712.png", titleMr: "स्विमिंग पूल, जीम व योग विरंगुळा केंद्र", captionEn: "Swimming Pool, Gym & Yoga Center", categoryMr: "फिटनेस" },
  { id: 10, url: "/images/Screenshot 2026-07-31 103842.png", titleMr: "प्रीतम आपुलकी व जिव्हाळा ट्रस्ट सामाजिक कार्य", captionEn: "Preetam Apulki & Jivhala Trust Social Work", categoryMr: "सामाजिक कार्य" },
];

function Brochure() {
  const [active, setActive] = useState(0);
  const [viewMode, setViewMode] = useState<"reader" | "grid">("reader");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const { isEn } = useLanguage();

  return (
    <div className="min-h-screen bg-slate-50/50">
      <PageHero
        eyebrow="Official Brochure"
        title={isEn ? "Information Brochure" : "माहिती पत्रक"}
        subtitle={isEn ? "Explore the complete official brochure online or download high-resolution pages." : "संपूर्ण माहिती पत्रक — सुंदर गॅलरी व ई-बुक स्वरूपात पहा आणि डाउनलोड करा."}
      />

      <section className="container-page py-10 sm:py-14">
        <Reveal>
          
          {/* ══════════════════════════════════════════════════════════════
              TOP ACTION BAR & VIEW SWITCHER
             ══════════════════════════════════════════════════════════════ */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
            
            {/* VIEW MODE TABS */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode("reader")}
                className={`flex items-center gap-2 rounded-2xl px-5 py-2.5 text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                  viewMode === "reader"
                    ? "bg-[#E60067] text-white shadow-md shadow-[#E60067]/25"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                📖 {isEn ? "E-Book Reader" : "ई-बुक रीडर (Reader View)"}
              </button>

              <button
                onClick={() => setViewMode("grid")}
                className={`flex items-center gap-2 rounded-2xl px-5 py-2.5 text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                  viewMode === "grid"
                    ? "bg-[#E60067] text-white shadow-md shadow-[#E60067]/25"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                🖼️ {isEn ? "All Pages Grid" : "सर्व पाने ग्रिड (Gallery View)"}
              </button>
            </div>

            {/* DOWNLOAD FULL PDF BUTTON */}
            {brochurePdfUrl && (
              <a
                href={brochurePdfUrl}
                download="Preetam_Anandshala_Brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-[#1A05A2] px-6 py-2.5 text-xs sm:text-sm font-extrabold text-white shadow-md hover:bg-[#150485] transition-all"
              >
                📥 {isEn ? "Download Complete PDF" : "संपूर्ण PDF डाऊनलोड करा"}
              </a>
            )}
          </div>

          {/* ══════════════════════════════════════════════════════════════
              MODE 1: E-BOOK READER SHOWCASE
             ══════════════════════════════════════════════════════════════ */}
          {viewMode === "reader" && (
            <div className="grid gap-8 lg:grid-columns lg:grid-cols-[1.3fr_0.7fr] items-start">
              
              {/* MAIN READER PREVIEW CARD */}
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-xl">
                <div className="relative flex items-center justify-center rounded-2xl bg-slate-950 p-2 min-h-[480px] max-h-[680px]">
                  <img
                    key={active}
                    src={brochureList[active].url}
                    alt={isEn ? brochureList[active].captionEn : brochureList[active].titleMr}
                    className="animate-fade-up max-h-[640px] w-auto max-w-full rounded-lg object-contain shadow-2xl"
                  />

                  {/* FULLSCREEN HD ZOOM BUTTON */}
                  <button
                    onClick={() => setLightboxIndex(active)}
                    className="absolute top-4 right-4 rounded-full bg-slate-900/80 px-4 py-2 text-xs font-bold text-white backdrop-blur-md hover:bg-[#E60067] transition-all cursor-pointer shadow-lg"
                  >
                    🔍 {isEn ? "View Full HD" : "HD फोटो पहा"}
                  </button>
                </div>

                {/* BOTTOM CONTROLS */}
                <div className="mt-4 flex items-center justify-between gap-4 border-t border-slate-100 pt-4">
                  <button
                    onClick={() => setActive((a) => (a - 1 + brochureList.length) % brochureList.length)}
                    className="inline-flex items-center gap-2 rounded-full border-2 border-[#1A05A2] px-5 py-2.5 text-xs sm:text-sm font-extrabold text-[#1A05A2] hover:bg-[#1A05A2] hover:text-white transition-all cursor-pointer"
                  >
                    ← {isEn ? "Previous Page" : "मागील पान"}
                  </button>

                  <div className="text-center">
                    <span className="inline-block rounded-full bg-[#E60067]/10 px-4 py-1 text-xs font-extrabold text-[#E60067]">
                      {isEn ? `Page ${active + 1} of ${brochureList.length}` : `पान ${active + 1} / ${brochureList.length}`}
                    </span>
                    <h3 className="mt-1 text-sm font-black text-slate-800 line-clamp-1">
                      {isEn ? brochureList[active].captionEn : brochureList[active].titleMr}
                    </h3>
                  </div>

                  <button
                    onClick={() => setActive((a) => (a + 1) % brochureList.length)}
                    className="inline-flex items-center gap-2 rounded-full bg-[#E60067] px-5 py-2.5 text-xs sm:text-sm font-extrabold text-white shadow-md hover:bg-[#C2005A] transition-all cursor-pointer"
                  >
                    {isEn ? "Next Page" : "पुढील पान"} →
                  </button>
                </div>
              </div>

              {/* SIDEBAR THUMBNAILS LIST */}
              <div className="flex flex-col rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-3">
                  <h3 className="font-display text-base font-extrabold text-[#1A05A2]">
                    📑 {isEn ? "Brochure Index" : "माहिती पत्रक अनुक्रमणिका"}
                  </h3>
                  <span className="text-xs font-bold text-slate-500">
                    {brochureList.length} {isEn ? "Pages" : "पाने"}
                  </span>
                </div>

                <div className="space-y-2.5 max-h-[540px] overflow-y-auto pr-1">
                  {brochureList.map((item, index) => (
                    <button
                      key={item.id}
                      onClick={() => setActive(index)}
                      className={`group flex w-full items-center gap-3 rounded-2xl p-2.5 text-left transition-all cursor-pointer border ${
                        active === index
                          ? "border-[#E60067] bg-[#E60067]/10 shadow-sm"
                          : "border-slate-100 bg-slate-50 hover:border-slate-300 hover:bg-slate-100"
                      }`}
                    >
                      <div className="relative size-14 shrink-0 overflow-hidden rounded-xl bg-slate-900 border border-slate-200">
                        <img
                          src={item.url}
                          alt={item.titleMr}
                          className="size-full object-cover"
                        />
                        <span className="absolute top-1 left-1 rounded-md bg-slate-950/80 px-1.5 py-0.5 text-[9px] font-extrabold text-white">
                          {item.id}
                        </span>
                      </div>

                      <div className="flex-1 min-w-0">
                        <span className="inline-block rounded-md bg-slate-200 px-2 py-0.5 text-[10px] font-extrabold text-slate-700">
                          {item.categoryMr}
                        </span>
                        <h4 className={`mt-1 text-xs font-extrabold line-clamp-1 ${active === index ? "text-[#E60067]" : "text-slate-800"}`}>
                          {isEn ? item.captionEn : item.titleMr}
                        </h4>
                      </div>
                    </button>
                  ))}
                </div>

                <a
                  href={brochureList[active].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 py-3.5 text-xs font-extrabold text-white shadow-md hover:bg-[#E60067] transition-all"
                >
                  ↗ {isEn ? "Open HD Image in New Tab" : "नवीन टॅबमध्ये HD फोटो उघडा"}
                </a>
              </div>

            </div>
          )}

          {/* ══════════════════════════════════════════════════════════════
              MODE 2: ALL PAGES GRID VIEW
             ══════════════════════════════════════════════════════════════ */}
          {viewMode === "grid" && (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {brochureList.map((item, index) => (
                <div
                  key={item.id}
                  className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:-translate-y-1.5 hover:border-[#E60067] hover:shadow-xl"
                >
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-slate-950">
                    <img
                      src={item.url}
                      alt={item.titleMr}
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <span className="absolute top-3 left-3 rounded-full bg-[#E60067] px-3 py-1 text-xs font-extrabold text-white shadow-md">
                      पान {item.id}
                    </span>

                    <button
                      onClick={() => {
                        setActive(index);
                        setLightboxIndex(index);
                      }}
                      className="absolute inset-0 flex items-center justify-center bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                    >
                      <span className="rounded-full bg-white px-5 py-2.5 text-xs font-extrabold text-slate-900 shadow-xl">
                        🔍 मोठे करून पहा
                      </span>
                    </button>
                  </div>

                  <div className="mt-4 flex flex-1 flex-col justify-between">
                    <div>
                      <span className="inline-block rounded-md bg-slate-100 px-2.5 py-1 text-[11px] font-extrabold text-slate-600">
                        {item.categoryMr}
                      </span>
                      <h3 className="mt-2 text-xs sm:text-sm font-extrabold text-slate-900 leading-snug line-clamp-2">
                        {isEn ? item.captionEn : item.titleMr}
                      </h3>
                    </div>

                    <div className="mt-4 flex items-center gap-2">
                      <button
                        onClick={() => {
                          setActive(index);
                          setViewMode("reader");
                        }}
                        className="flex-1 rounded-xl bg-slate-100 py-2.5 text-center text-xs font-extrabold text-slate-800 hover:bg-[#E60067] hover:text-white transition-all cursor-pointer"
                      >
                        📖 रीडर मोड
                      </button>

                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-xl border border-slate-200 p-2.5 text-slate-700 hover:border-[#1A05A2] hover:text-[#1A05A2] transition-all"
                        title="HD इमेज उघडा"
                      >
                        ↗
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          HD LIGHTBOX POPUP MODAL
         ══════════════════════════════════════════════════════════════ */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-md"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative flex max-h-[90vh] w-full max-w-5xl flex-col rounded-3xl bg-slate-900 p-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-4 right-4 z-10 grid size-10 place-items-center rounded-full bg-white/10 text-xl font-bold text-white hover:bg-[#E60067] transition-all cursor-pointer"
            >
              ✕
            </button>

            <button
              onClick={() => setLightboxIndex((prev) => (prev === null || prev === 0 ? brochureList.length - 1 : prev - 1))}
              className="absolute top-1/2 left-4 z-10 -translate-y-1/2 grid size-12 place-items-center rounded-full bg-white/10 text-2xl font-bold text-white hover:bg-[#E60067] transition-all cursor-pointer"
            >
              ‹
            </button>

            <button
              onClick={() => setLightboxIndex((prev) => (prev === null || prev === brochureList.length - 1 ? 0 : prev + 1))}
              className="absolute top-1/2 right-4 z-10 -translate-y-1/2 grid size-12 place-items-center rounded-full bg-white/10 text-2xl font-bold text-white hover:bg-[#E60067] transition-all cursor-pointer"
            >
              ›
            </button>

            <div className="flex max-h-[75vh] items-center justify-center overflow-hidden rounded-2xl bg-black">
              <img
                src={brochureList[lightboxIndex].url}
                alt={brochureList[lightboxIndex].titleMr}
                className="max-h-[75vh] w-auto max-w-full object-contain"
              />
            </div>

            <div className="mt-4 flex items-center justify-between px-2 text-white">
              <div>
                <span className="text-xs font-bold text-[#E60067]">
                  पान {lightboxIndex + 1} / {brochureList.length}
                </span>
                <h4 className="text-sm font-extrabold">
                  {isEn ? brochureList[lightboxIndex].captionEn : brochureList[lightboxIndex].titleMr}
                </h4>
              </div>

              <a
                href={brochureList[lightboxIndex].url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#E60067] px-5 py-2 text-xs font-extrabold text-white shadow-md hover:bg-[#C2005A] transition-all"
              >
                HD डाऊनलोड करा ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Brochure;