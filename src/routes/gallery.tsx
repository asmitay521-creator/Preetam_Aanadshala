import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "गॅलरी | प्रीतम ज्येष्ठ नागरिक आनंदशाळा" },
      {
        name: "description",
        content:
          "आनंदशाळेचे प्रकल्प दृश्य, राधाकृष्ण मंदिर, फूड कोर्ट, स्पोर्ट्स कॉम्प्लेक्स, आनंद मेळावा व पुरस्कार सोहळ्यांची श्रेणीनुसार छायाचित्रे.",
      },
      { property: "og:title", content: "गॅलरी | प्रीतम ज्येष्ठ नागरिक आनंदशाळा" },
      {
        property: "og:description",
        content: "प्रकल्पाची व कार्यक्रमांची श्रेणीनुसार छायाचित्रे एका ठिकाणी.",
      },
    ],
  }),
  component: Gallery,
});

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

      <div className="relative max-w-7xl mx-auto px-6 py-24">

        {/* ===== Heading ===== */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white shadow text-pink-600 font-semibold tracking-wider text-sm">
            📸 GALLERY
          </span>

          <h1 className="mt-5 text-5xl font-extrabold text-[#1f2a8a]">
            गॅलरी
          </h1>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-8">
            सांगलीच्या कुशीत, निसर्गरम्य वातावरणात साकारलेल्या प्रकल्पातील
            प्रेरणादायी क्षण.
          </p>

          <div className="mt-8 w-28 h-1 rounded-full mx-auto bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500" />
        </div>

        {/* ===== Category Filter Buttons ===== */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`group relative overflow-hidden rounded-full border px-7 py-3 text-sm font-semibold transition-all duration-300 cursor-pointer ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-pink-600 to-purple-700 text-white shadow-xl scale-105 border-transparent"
                  : "bg-white text-[#1f2a8a] border-gray-200 hover:border-pink-400 hover:text-pink-600 hover:-translate-y-1 hover:shadow-lg"
              }`}
            >
              <span className="relative z-10">{category}</span>
              {selectedCategory !== category && (
                <span className="absolute inset-0 translate-y-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 transition-transform duration-300 group-hover:translate-y-0" />
              )}
            </button>
          ))}
        </div>

        {/* ===== Photo Count ===== */}
        <p className="text-center text-sm text-gray-400 mb-10">
          {filteredImages.length} फोटो सापडले
        </p>

        {/* ===== Masonry Gallery Grid ===== */}
        {filteredImages.length === 0 ? (
          <div className="text-center py-24 text-gray-400 text-xl">
            या श्रेणीत फोटो उपलब्ध नाहीत.
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
            {filteredImages.map((item, index) => (
              <div
                key={item.id}
                onClick={() => openImage(index)}
                className="group mb-6 break-inside-avoid cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-[28px] shadow-xl transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-2xl">

                  {/* Variable Height Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className={`w-full object-cover duration-700 group-hover:scale-110 ${
                      index % 3 === 0
                        ? "h-[520px]"
                        : index % 2 === 0
                        ? "h-[360px]"
                        : "h-[270px]"
                    }`}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08142f] via-[#08142f55] to-transparent opacity-80 group-hover:opacity-100 duration-500" />

                  {/* HD Badge */}
                  <div className="absolute top-5 right-5">
                    <span className="rounded-full bg-white/20 backdrop-blur-lg px-4 py-2 text-white text-xs font-semibold border border-white/20">
                      📸 HD
                    </span>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-5 left-5">
                    <span className="rounded-full bg-pink-600 text-white px-4 py-2 text-xs font-semibold">
                      {item.category}
                    </span>
                  </div>

                  {/* Bottom Info */}
                  <div className="absolute bottom-0 left-0 w-full p-6">
                    <p className="text-pink-300 text-sm">{item.date}</p>
                    <h3 className="text-2xl font-bold text-white mt-2">{item.title}</h3>
                  </div>

                  {/* Hover Arrow Button */}
                  <div className="absolute bottom-6 right-6">
                    <div className="h-12 w-12 rounded-full bg-white text-pink-600 flex items-center justify-center shadow-xl translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-300">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>

                </div>
              </div>
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