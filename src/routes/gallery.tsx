import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Play,
  Pause,
  Sparkles,
  Calendar,
  Maximize2
} from "lucide-react";

// ===== Gallery Data =====
const galleryImages = [
  { id: 1,  title: "आनंदभवन",            category: "ज्येष्ठ नागरिक आनंदशाळा", date: "26 जानेवारी 2000",    image: "/images/Screenshot 2026-07-31 103107.png" },
  { id: 2,  title: "आनंद मेळावा",         category: "आनंद मेळावा",             date: "15 ऑगस्ट 2023",     image: "/images/aandmelav 10.jpeg" },
  { id: 3,  title: "भूमिपूजन सोहळा",      category: "भूमिपूजन",               date: "09 जानेवारी 2024",  image: "/images/ropya mahotsv1.jpg" },
  { id: 4,  title: "वार्षिक स्नेहसंमेलन", category: "वार्षिक स्नेहसंमेलन",   date: "25 डिसेंबर 2023",   image: "/images/aandshala sahal 1.jpeg" },
  { id: 5,  title: "सांस्कृतिक उत्सव",    category: "आनंद मेळावा",             date: "14 नोव्हेंबर 2023", image: "/images/aandmelava1.jpg" },
  { id: 6,  title: "योगा व प्राणायाम",    category: "ज्येष्ठ नागरिक आनंदशाळा", date: "21 जून 2023",      image: "/images/Screenshot 2026-07-31 103659.png" },
  { id: 7,  title: "संगीत संध्या",         category: "ज्येष्ठ नागरिक आनंदशाळा", date: "05 मार्च 2023",   image: "/images/aandmelav 5.jpg" },
  { id: 8,  title: "गार्डन व लॉन",         category: "बांधकाम",                date: "10 फेब्रुवारी 2024", image: "/images/Screenshot 2026-07-31 103213.png" },
  { id: 9,  title: "रौप्य महोत्सव",        category: "भूमिपूजन",               date: "26 जानेवारी 2024",  image: "/images/ropya mahotsv 2.jpg" },
  { id: 10, title: "सामाजिक कार्य",        category: "सामाजिक कार्य",           date: "02 ऑक्टोबर 2023",  image: "/images/samajik karya1.jpeg" },
  { id: 11, title: "आरोग्य शिबिर",         category: "सामाजिक कार्य",           date: "15 ऑगस्ट 2023",    image: "/images/samajik karya 2.jpeg" },
  { id: 12, title: "मान्यवर सत्कार",        category: "मान्यवर भेट",             date: "01 जानेवारी 2024",  image: "/images/vyavsaik mahiti 1.jpeg" },
  { id: 13, title: "मान्यवर भेट",          category: "मान्यवर भेट",             date: "20 डिसेंबर 2023",   image: "/images/vyavsaik mahiti 2.jpeg" },
  { id: 14, title: "खेळ व मनोरंजन",        category: "ज्येष्ठ नागरिक आनंदशाळा", date: "18 नोव्हेंबर 2023", image: "/images/Screenshot 2026-07-31 103517.png" },
  { id: 15, title: "आनंद निवास",           category: "ज्येष्ठ नागरिक आनंदशाळा", date: "10 जानेवारी 2024",  image: "/images/Screenshot 2026-07-31 103842.png" },
  { id: 16, title: "व्यावसायिक माहिती",    category: "मान्यवर भेट",             date: "05 मे 2023",        image: "/images/vyavsaik mahiti 1.jpeg" },
];

const categories = [
  "सर्व",
  "ज्येष्ठ नागरिक आनंदशाळा",
  "आनंद मेळावा",
  "भूमिपूजन",
  "बांधकाम",
  "सामाजिक कार्य",
  "वार्षिक स्नेहसंमेलन",
  "मान्यवर भेट",
  "विशेष कार्यक्रम",
];

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("सर्व");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const filteredImages =
    selectedCategory === "सर्व"
      ? galleryImages
      : galleryImages.filter((item) => item.category === selectedCategory);

  const openImage = (index: number) => {
    setSelectedIndex(index);
    setIsPlaying(false);
  };

  const closeImage = () => {
    setSelectedIndex(null);
    setIsPlaying(false);
  };

  const nextImage = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev !== null ? (prev + 1) % filteredImages.length : 0));
  };

  const prevImage = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev !== null ? (prev - 1 + filteredImages.length) % filteredImages.length : 0));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") closeImage();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex, filteredImages.length]);

  // Slideshow auto-play effect
  useEffect(() => {
    if (isPlaying && selectedIndex !== null) {
      timerRef.current = setInterval(() => {
        nextImage();
      }, 3000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, selectedIndex, filteredImages.length]);

  const activePhoto = selectedIndex !== null ? filteredImages[selectedIndex] : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#ffffff]">

      {/* Ambient background glows */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-pink-200/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">

        {/* ===== HEADING ===== */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-sm border border-pink-200 text-pink-600 font-bold text-xs sm:text-sm">
            <Sparkles size={16} />
            फोटो गॅलरी • GALLERY
          </span>

          <h1 className="mt-3 text-3xl sm:text-5xl font-black text-[#541A1A]">
            आनंदशाळा फोटो गॅलरी
          </h1>

          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-medium">
            सांगलीच्या कुशीत, निसर्गरम्य १५ एकर परिसरात साकारलेल्या आनंदी क्षणांची सुंदर चित्रे.
          </p>

          <div className="mt-6 w-24 h-1 rounded-full mx-auto bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500" />
        </div>

        {/* ===== CATEGORY FILTER BUTTONS ===== */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6">
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setSelectedIndex(null);
                }}
                className={`px-4 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-md scale-105"
                    : "bg-white text-slate-700 border border-slate-200 hover:border-pink-300 hover:text-pink-600 hover:shadow-sm"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* ===== PHOTO COUNT INFO ===== */}
        <p className="text-center text-xs sm:text-sm font-semibold text-slate-500 mb-8">
          एकूण <span className="text-pink-600 font-extrabold">{filteredImages.length}</span> फोटो उपलब्ध (फोटोवर क्लीक करून मोठ्या स्क्रीनवर स्लाइडर पहा)
        </p>

        {/* ===== GALLERY CARDS GRID ===== */}
        {filteredImages.length === 0 ? (
          <div className="text-center py-16 text-slate-400 font-semibold">
            या श्रेणीत फोटो उपलब्ध नाहीत.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                onClick={() => openImage(index)}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-slate-200/80 transition-all duration-300 cursor-pointer flex flex-col"
              >
                {/* PHOTO CONTAINER (CLEAN & CLEAR PHOTO) */}
                <div className="relative w-full h-64 overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                  />

                  {/* BOTTOM SUBTLE GRADIENT OVERLAY FOR TEXT */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* TOP BADGES */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-pink-600/90 text-white text-[11px] font-extrabold px-3 py-1 rounded-full backdrop-blur-md shadow-sm">
                      {item.category}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3">
                    <span className="bg-black/40 text-white text-[10.5px] font-bold px-2.5 py-1 rounded-full backdrop-blur-md border border-white/20">
                      📸 HD
                    </span>
                  </div>

                  {/* BOTTOM CONTENT OVER PHOTO */}
                  <div className="absolute bottom-0 inset-x-0 p-4 flex flex-col justify-end text-white">
                    <div className="flex items-center gap-1.5 text-pink-300 text-[11.5px] font-bold mb-1">
                      <Calendar size={13} />
                      <span>{item.date}</span>
                    </div>
                    <h3 className="text-lg font-black text-white line-clamp-1 group-hover:text-pink-300 transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  {/* HOVER SLIDER ICON HINT */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 backdrop-blur-[2px]">
                    <span className="bg-white/90 text-pink-600 font-extrabold text-xs px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5 transform scale-95 group-hover:scale-100 transition-transform">
                      <Maximize2 size={14} /> फुल स्क्रीन स्लाइडर पहा
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* ===== INTERACTIVE FULLSCREEN SLIDER MODAL ===== */}
      <AnimatePresence>
        {activePhoto && typeof document !== "undefined" && createPortal(
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999999] bg-slate-950/95 backdrop-blur-md flex flex-col items-center justify-between p-4 sm:p-6"
            onClick={closeImage}
          >
            {/* TOP HEADER BAR */}
            <div 
              className="w-full max-w-6xl flex items-center justify-between text-white z-10 py-2"
              onClick={(e) => e.stopPropagation()}
            >
              {/* PHOTO INDEX COUNTER */}
              <div className="flex items-center gap-3">
                <span className="bg-pink-600/30 text-pink-300 border border-pink-500/40 text-xs sm:text-sm font-extrabold px-3.5 py-1.5 rounded-full backdrop-blur">
                  फोटो {selectedIndex! + 1} / {filteredImages.length}
                </span>
                <span className="hidden sm:inline-block text-slate-400 text-xs font-semibold">
                  (बाण कळा ⬅️ ➡️ चा वापर करू शकता)
                </span>
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex items-center gap-2">
                {/* SLIDESHOW TOGGLE */}
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 transition ${
                    isPlaying 
                      ? "bg-amber-500 text-slate-950 font-black" 
                      : "bg-white/10 hover:bg-white/20 text-white"
                  }`}
                  title="स्लाइडशो चालू/बंद करा"
                >
                  {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                  <span>{isPlaying ? "थांबा (Pause)" : "स्लाइडशो (Play)"}</span>
                </button>

                {/* CLOSE BUTTON */}
                <button
                  onClick={closeImage}
                  className="w-10 h-10 rounded-full bg-white/15 hover:bg-rose-600 text-white flex items-center justify-center transition border border-white/20"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* MAIN IMAGE DISPLAY AREA */}
            <div 
              className="relative w-full max-w-5xl flex-1 flex items-center justify-center my-2 select-none"
              onClick={(e) => e.stopPropagation()}
            >
              {/* PREV BUTTON */}
              <button
                onClick={prevImage}
                className="absolute left-1 sm:-left-12 z-20 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-black/60 hover:bg-pink-600 text-white border border-white/20 backdrop-blur flex items-center justify-center shadow-xl transition transform hover:scale-110 active:scale-95"
                title="मागील फोटो (Left Arrow)"
              >
                <ChevronLeft size={22} className="sm:size-7" />
              </button>

              {/* CURRENT PHOTO */}
              <motion.div
                key={activePhoto.id}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.3 }}
                className="relative max-h-[72vh] max-w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex items-center justify-center bg-black"
              >
                <img
                  src={activePhoto.image}
                  alt={activePhoto.title}
                  className="max-h-[72vh] max-w-full object-contain select-none"
                />
              </motion.div>

              {/* NEXT BUTTON */}
              <button
                onClick={nextImage}
                className="absolute right-1 sm:-right-12 z-20 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-black/60 hover:bg-pink-600 text-white border border-white/20 backdrop-blur flex items-center justify-center shadow-xl transition transform hover:scale-110 active:scale-95"
                title="पुढील फोटो (Right Arrow)"
              >
                <ChevronRight size={22} className="sm:size-7" />
              </button>
            </div>

            {/* BOTTOM PHOTO INFO & THUMBNAIL STRIP */}
            <div 
              className="w-full max-w-4xl flex flex-col items-center gap-3 z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* PHOTO INFO CAPTION */}
              <div className="text-center">
                <span className="bg-pink-500/20 text-pink-300 text-[11px] font-extrabold px-3 py-0.5 rounded-full border border-pink-500/30">
                  {activePhoto.category} • {activePhoto.date}
                </span>
                <h3 className="text-white text-lg sm:text-xl font-black mt-1">
                  {activePhoto.title}
                </h3>
              </div>

              {/* THUMBNAIL INDICATORS STRIP */}
              <div className="flex items-center gap-2 overflow-x-auto max-w-full py-1 px-2 scrollbar-none">
                {filteredImages.map((img, idx) => (
                  <button
                    key={img.id}
                    onClick={() => setSelectedIndex(idx)}
                    className={`relative w-12 h-9 rounded-lg overflow-hidden flex-shrink-0 transition-all ${
                      idx === selectedIndex
                        ? "ring-2 ring-pink-500 scale-110 opacity-100"
                        : "opacity-40 hover:opacity-80"
                    }`}
                  >
                    <img src={img.image} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

          </motion.div>,
          document.body
        )}
      </AnimatePresence>

    </div>
  );
}

export default Gallery;