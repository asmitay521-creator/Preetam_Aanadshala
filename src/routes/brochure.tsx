import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Building2, Users, HeartHandshake, Handshake, ChevronLeft, ChevronRight, X, Download, Maximize2 } from "lucide-react";
import { brochurePdfUrl } from "@/lib/brochure-pages";

const brochureList = [
  { id: 1, url: "/images/Screenshot 2026-07-31 103107.png", titleMr: "आनंदशाळा माहिती पत्रक व प्रवेश माहिती" },
  { id: 2, url: "/images/Screenshot 2026-07-31 103131.png", titleMr: "५ तासांचे वेळापत्रक व १५ उपक्रम हॉल्स" },
  { id: 3, url: "/images/Screenshot 2026-07-31 103213.png", titleMr: "५५ फुटांची राधाकृष्ण मूर्ती व मंदिर" },
  { id: 4, url: "/images/Screenshot 2026-07-31 103238.png", titleMr: "१ दिवस सहल भेट पास सोहळा व व्हॅन सेवा" },
  { id: 5, url: "/images/aandshala sahal 1.jpeg", titleMr: "आनंद सहलीतील ज्येष्ठ नागरिकांचे आनंदी क्षण" },
];

const indexItems = [
  { num: "01", color: "bg-[#f44e7c]", title: "प्रवेश व नियम", desc: "आनंदशाळा माहिती पत्रक व प्रवेश माहिती" },
  { num: "02", color: "bg-[#7961f2]", title: "संस्था परिचय", desc: "आनंदशाळेची परंपरा आणि ध्येय" },
  { num: "03", color: "bg-[#2866dd]", title: "सुविधा व सेवा", desc: "आमच्या सुविधा व सेवांची माहिती" },
  { num: "04", color: "bg-[#0bb5a9]", title: "आरोग्य व काळजी", desc: "आरोग्य सुविधा आणि वैद्यकीय सहाय्य" },
  { num: "05", color: "bg-[#f59e0b]", title: "उपक्रम व संपर्क", desc: "उपक्रमांची माहिती व संपर्क तपशील" },
];

function Brochure() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen font-sans">
      
      {/* ══════════════════════════════════════════════════════════════
          TOP LIGHT SECTION
         ══════════════════════════════════════════════════════════════ */}
      <div className="relative overflow-hidden bg-gradient-to-b from-[#f8faff] to-[#e6efff] py-4 sm:py-6">
        {/* Background Decorations */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40 bg-[radial-gradient(circle_at_20%_50%,#fce7f3_0%,transparent_50%),radial-gradient(circle_at_80%_50%,#e0e7ff_0%,transparent_50%)]" />
        
        {/* Floating elements mimicking the image */}
        <div className="absolute left-[10%] top-[30%] opacity-20 pointer-events-none text-pink-500 rotate-[-15deg]">
          <BookOpen size={80} />
        </div>
        <div className="absolute right-[10%] top-[25%] opacity-20 pointer-events-none text-blue-500 rotate-[15deg]">
          <BookOpen size={80} />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center">
          
          <span className="mb-2 inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white px-4 py-1 text-[10px] sm:text-xs font-bold tracking-widest text-[#e60067] shadow-sm uppercase">
            🌿 Premium Collection
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-2">
            <span className="text-[#101f67]">अधिकृत</span>{" "}
            <span className="text-[#e60067]">माहिती पत्रक</span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-slate-600 font-medium">
            संपूर्ण माहिती पत्रक — सुंदर गॅलरी व ई-बुक स्वरूपात पहा.
          </p>

        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          BOTTOM DARK SECTION
         ══════════════════════════════════════════════════════════════ */}
      <div className="bg-[#15121e] px-4 py-6 sm:py-8 relative min-h-[70vh] flex items-center justify-center">
        <div className="w-full max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6 xl:gap-8 items-stretch">
          
          {/* LEFT: BROCHURE COVER & STATS */}
          <div className="flex flex-col overflow-hidden rounded-[2rem] bg-[#1a2b6d] shadow-2xl">
            
            {/* Brochure Image */}
            <div 
              className="relative w-full bg-[#cbe3fa] cursor-pointer group flex-1 flex items-center justify-center p-2"
              onClick={() => setLightboxIndex(activeIndex)}
            >
              <AnimatePresence mode="wait">
                <motion.img 
                  key={activeIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  src={brochureList[activeIndex].url} 
                  alt={brochureList[activeIndex].titleMr} 
                  className="w-full max-h-[500px] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <span className="bg-white/90 text-[#1a2b6d] px-6 py-2 rounded-full font-bold opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 shadow-lg flex items-center gap-2">
                  <Maximize2 size={16} /> मोठे करून पहा
                </span>
              </div>
            </div>

            {/* Bottom Stats */}
            <div className="grid grid-cols-4 divide-x divide-white/20 bg-[#162768] text-white py-6">
              <div className="flex flex-col items-center text-center px-2">
                <Building2 size={28} className="mb-2 opacity-80" />
                <span className="text-[10px] sm:text-xs font-semibold leading-snug text-blue-100">दीड़ एकर<br/>परिसरात</span>
              </div>
              <div className="flex flex-col items-center text-center px-2">
                <Users size={28} className="mb-2 opacity-80" />
                <span className="text-[10px] sm:text-xs font-semibold leading-snug text-blue-100">2000+ हून अधिक<br/>संतुष्ट लाभार्थी</span>
              </div>
              <div className="flex flex-col items-center text-center px-2">
                <HeartHandshake size={28} className="mb-2 opacity-80" />
                <span className="text-[10px] sm:text-xs font-semibold leading-snug text-blue-100">15+ वर्षाची<br/>सेवेची परंपरा</span>
              </div>
              <div className="flex flex-col items-center text-center px-2">
                <Handshake size={28} className="mb-2 opacity-80" />
                <span className="text-[10px] sm:text-xs font-semibold leading-snug text-blue-100">संस्कार व सांस्कृतिक<br/>कार्यक्रम</span>
              </div>
            </div>

          </div>

          {/* RIGHT: INDEX LIST */}
          <div className="flex flex-col rounded-[2rem] border border-[#2b253b] bg-[#1c1828] p-6 sm:p-8 shadow-2xl">
            
            <div className="mb-6 flex items-center gap-3">
              <BookOpen className="text-pink-500" size={24} />
              <h2 className="text-xl sm:text-2xl font-bold text-white">अनुक्रमणिका</h2>
            </div>

            <div className="flex flex-col gap-4">
              {indexItems.map((item, idx) => (
                <button
                  key={item.num}
                  onClick={() => setActiveIndex(idx)}
                  className={`group flex w-full items-center gap-4 rounded-2xl border p-3 text-left transition-all ${
                    activeIndex === idx 
                      ? "border-pink-500/50 bg-[#2a243a] shadow-lg shadow-pink-500/10"
                      : "border-transparent bg-[#252033] hover:border-[#38304c] hover:bg-[#2a243a]"
                  }`}
                >
                  <div className={`flex h-12 w-14 shrink-0 items-center justify-center rounded-xl text-lg font-black text-white shadow-inner ${item.color}`}>
                    {item.num}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-pink-400 group-hover:text-pink-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 text-xs text-slate-400">
                      {item.desc}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* Download Button */}
            {brochurePdfUrl && (
              <a 
                href={brochurePdfUrl}
                download="Brochure.pdf"
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3.5 text-sm font-bold text-white shadow-lg hover:bg-blue-500 transition-all"
              >
                <Download size={18} /> संपूर्ण PDF डाऊनलोड करा
              </a>
            )}

          </div>

        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          LIGHTBOX FOR READING BROCHURE
         ══════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-xl"
            onClick={() => setLightboxIndex(null)}
          >
            <div
              className="relative flex max-h-[95vh] w-full max-w-5xl flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute -top-12 right-0 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-pink-500 transition-all cursor-pointer border border-white/20"
              >
                <X size={20} />
              </button>

              <button
                onClick={() => setLightboxIndex((prev) => (prev === null || prev === 0 ? brochureList.length - 1 : prev - 1))}
                className="absolute top-1/2 left-2 z-10 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-pink-500 transition-all cursor-pointer border border-white/20 hover:scale-110"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={() => setLightboxIndex((prev) => (prev === null || prev === brochureList.length - 1 ? 0 : prev + 1))}
                className="absolute top-1/2 right-2 z-10 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-pink-500 transition-all cursor-pointer border border-white/20 hover:scale-110"
              >
                <ChevronRight size={24} />
              </button>

              <motion.img
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                src={brochureList[lightboxIndex].url}
                alt={brochureList[lightboxIndex].titleMr}
                className="max-h-[85vh] w-auto max-w-full rounded-xl shadow-2xl object-contain"
              />

              <div className="absolute bottom-4 bg-black/60 backdrop-blur-md px-6 py-2 rounded-full text-white text-sm font-bold border border-white/10">
                पान {lightboxIndex + 1} / {brochureList.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

export default Brochure;

