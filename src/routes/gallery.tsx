import React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";



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
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages =
    selectedCategory === "सर्व"
      ? galleryImages
      : galleryImages.filter((item) => item.category === selectedCategory);

  const openImage = (index: number) => setSelectedImage(index);
  const closeImage = () => setSelectedImage(null);

  const nextImage = () => {
    if (selectedImage === null) return;
    setSelectedImage((selectedImage + 1) % filteredImages.length);
  };

  const prevImage = () => {
    if (selectedImage === null) return;
    setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length);
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      if (e.key === "Escape") closeImage();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedImage, filteredImages.length]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7fbff] via-[#eef5ff] to-[#ffffff]">

      {/* Background Blurs */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-pink-200/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-24">

        {/* ===== Heading ===== */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-white shadow text-pink-500 font-semibold tracking-wider text-xs sm:text-sm">
            📸 GALLERY
          </span>

          <h1 className="mt-3 sm:mt-5 text-3xl sm:text-5xl font-extrabold text-[#1f2a8a]">
            गॅलरी
          </h1>

          <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-3xl mx-auto leading-7 sm:leading-8">
            सांगलीच्या कुशीत, निसर्गरम्य वातावरणात साकारलेल्या प्रकल्पातील
            प्रेरणादायी क्षण.
          </p>

          <div className="mt-6 sm:mt-8 w-20 sm:w-28 h-1 rounded-full mx-auto bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500" />
        </div>

        {/* ===== Category Filter Buttons ===== */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`group relative overflow-hidden rounded-full border px-4 py-2 sm:px-7 sm:py-3 text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-pink-400 to-purple-700 text-white shadow-xl scale-105 border-transparent"
                  : "bg-white text-[#1f2a8a] border-gray-200 hover:border-pink-400 hover:text-pink-400 hover:-translate-y-1 hover:shadow-lg"
              }`}
            >
              <span className="relative z-10">{category}</span>
              {selectedCategory !== category && (
                <span className="absolute inset-0 translate-y-full bg-gradient-to-r from-pink-400/10 to-purple-500/10 transition-transform duration-300 group-hover:translate-y-0" />
              )}
            </button>
          ))}
        </div>

        {/* ===== Photo Count ===== */}
        <p className="text-center text-xs sm:text-sm text-gray-400 mb-8 sm:mb-10">
          {filteredImages.length} फोटो सापडले
        </p>

        {/* ===== Masonry Gallery Grid ===== */}
        {filteredImages.length === 0 ? (
          <div className="text-center py-16 sm:py-24 text-gray-400 text-lg sm:text-xl">
            या श्रेणीत फोटो उपलब्ध नाहीत.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            {filteredImages.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 60, scale: 0.9, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, delay: (index % 3) * 0.15, ease: "easeOut" }}
                whileHover={{ 
                  scale: 1.03, 
                  y: -12, 
                  rotateZ: index % 2 === 0 ? 1.5 : -1.5,
                  transition: { duration: 0.3 }
                }}
                onClick={() => openImage(index)}
                className="group relative cursor-pointer perspective-[1000px] z-10 hover:z-20"
              >
                {/* Animated Glowing Gradient Border */}
                <div className="absolute inset-[-4px] rounded-[34px] bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 group-hover:animate-pulse" />
                <div className="absolute inset-[-3px] rounded-[34px] bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative overflow-hidden rounded-[32px] shadow-lg bg-[#08142f] h-[340px] transition-all duration-500">

                  {/* Fixed Height Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover duration-700 group-hover:scale-110 group-hover:opacity-80"
                  />

                  {/* Glow overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#120838] via-[#1a093399] to-transparent opacity-70 group-hover:opacity-90 duration-500" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-pink-400 mix-blend-overlay duration-500" />

                  {/* HD Badge */}
                  <div className="absolute top-5 right-5">
                    <span className="rounded-full bg-white/20 backdrop-blur-md px-4 py-1.5 text-white text-[11px] font-bold border border-white/30 shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                      📸 HD
                    </span>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-5 left-5">
                    <span className="rounded-full bg-gradient-to-r from-pink-400 to-purple-600 text-white px-4 py-1.5 text-[11px] font-bold shadow-lg border border-pink-400/50">
                      {item.category}
                    </span>
                  </div>

                  {/* Bottom Info */}
                  <div className="absolute bottom-0 left-0 w-full p-7 transform transition-transform duration-500 group-hover:-translate-y-2">
                    <p className="text-pink-300 text-xs font-bold uppercase tracking-wider mb-1">{item.date}</p>
                    <h3 className="text-2xl font-black text-white drop-shadow-md">{item.title}</h3>
                  </div>

                  {/* Hover Arrow Button */}
                  <div className="absolute bottom-7 right-7">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-pink-400 to-purple-500 text-white flex items-center justify-center shadow-[0_0_20px_rgba(230,0,103,0.5)] translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-500 border border-white/30">
                      <ArrowUpRight size={22} strokeWidth={2.5} />
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>

      {/* ===== LIGHTBOX ===== */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center"
            onClick={closeImage}
          >
            {/* Close Button */}
            <button
              onClick={closeImage}
              className="absolute top-6 right-6 h-12 w-12 rounded-full bg-white/20 text-white text-2xl hover:bg-white/40 transition flex items-center justify-center backdrop-blur cursor-pointer"
            >
              ✕
            </button>

            {/* Image Counter */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full bg-white/10 text-white text-sm backdrop-blur">
              {selectedImage + 1} / {filteredImages.length}
            </div>

            {/* Image Title */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
              <h3 className="text-white text-xl font-bold">{filteredImages[selectedImage].title}</h3>
              <p className="text-pink-300 text-sm mt-1">{filteredImages[selectedImage].date}</p>
            </div>

            {/* Prev Button */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-6 h-14 w-14 rounded-full bg-white/20 text-white text-2xl backdrop-blur hover:bg-white/40 transition flex items-center justify-center cursor-pointer"
            >
              ←
            </button>

            {/* Main Image */}
            <motion.img
              key={selectedImage}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={filteredImages[selectedImage].image}
              alt={filteredImages[selectedImage].title}
              className="max-h-[85vh] max-w-[85vw] rounded-3xl shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next Button */}
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-6 h-14 w-14 rounded-full bg-white/20 text-white text-2xl backdrop-blur hover:bg-white/40 transition flex items-center justify-center cursor-pointer"
            >
              →
            </button>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

export default Gallery;