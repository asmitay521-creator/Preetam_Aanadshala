import { memo } from "react";
import { motion } from "framer-motion";
import { Quote, Sparkles, Heart, ShieldCheck, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function QuoteCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative my-20 max-w-5xl mx-auto px-4"
    >
      {/* AMBIENT BACKGROUND GLOW BLOBS */}
      <div className="pointer-events-none absolute -top-16 -left-16 size-80 rounded-full bg-[#E60067]/15 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute -bottom-16 -right-16 size-80 rounded-full bg-[#1A05A2]/15 blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />

      {/* MAIN LUXURY CARD CONTAINER */}
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#120838] via-[#1A0933] to-[#0A0D2A] text-white p-8 sm:p-12 md:p-16 shadow-[0_25px_70px_rgba(26,5,162,0.3)] border border-[#E60067]/30">
        
        {/* DECORATIVE BACKGROUND GRID & SPARKLES */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-40" />
        <div className="pointer-events-none absolute top-6 right-8 opacity-20 hidden sm:block">
          <div className="grid grid-cols-5 gap-3">
            {Array.from({ length: 15 }).map((_, i) => (
              <span key={i} className="size-1.5 rounded-full bg-[#E60067]" />
            ))}
          </div>
        </div>

        {/* TOP BADGE */}
        <div className="flex justify-center relative z-10">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#E60067]/40 bg-[#E60067]/15 px-5 py-2 text-xs sm:text-sm font-extrabold text-[#FF66B2] shadow-inner backdrop-blur-md"
          >
            <Sparkles className="size-4 text-[#FFD700] animate-spin" style={{ animationDuration: "6s" }} />
            <span>२५+ वर्षांचा समृद्ध वारसा, प्रेम & निष्ठा</span>
          </motion.span>
        </div>

        {/* FLOATING 3D QUOTE ICON */}
        <div className="relative z-10 my-6 flex justify-center">
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="grid size-16 sm:size-20 place-items-center rounded-3xl bg-gradient-to-br from-[#E60067] to-[#1A05A2] p-4 text-white shadow-[0_10px_30px_rgba(230,0,103,0.5)] border border-white/20"
          >
            <Quote className="size-8 sm:size-10 text-white" />
          </motion.div>
        </div>

        {/* MAIN HEADLINE */}
        <h2 className="relative z-10 text-center font-display text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight">
          <span className="text-white">प्रेम, विश्वास आणि</span>{" "}
          <span className="bg-gradient-to-r from-[#FF66B2] via-[#FFA366] to-[#66B2FF] bg-clip-text text-transparent">
            सेवांचा अखंड प्रवास
          </span>
        </h2>

        {/* ORNAMENT DIVIDER */}
        <div className="relative z-10 flex items-center justify-center gap-3 my-6">
          <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-[#E60067] to-transparent" />
          <span className="text-[#FF66B2] text-sm">❦</span>
          <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-[#E60067] to-transparent" />
        </div>

        {/* QUOTE TEXT */}
        <p className="relative z-10 max-w-3xl mx-auto text-center text-sm sm:text-base md:text-lg text-slate-200 font-medium leading-relaxed sm:leading-loose">
          “सन २००० पासून आजपर्यंत हजारो ज्येष्ठ नागरिकांच्या चेहऱ्यावर आनंद फुलविण्याचा आमचा प्रयत्न अखंड सुरू आहे. प्रत्येक दिवस नव्या आशेचा, नव्या आनंदाचा आणि प्रेमळ सहवासाचा प्रवास आहे.”
        </p>

        {/* AUTHOR BADGE */}
        <div className="relative z-10 text-center mt-4">
          <span className="text-xs sm:text-sm font-bold text-[#FF66B2]">
            — आनंदशाळा परिवार & मार्गदर्शक मंडळ
          </span>
        </div>

        {/* 3 HIGHLIGHT STATS BADGES */}
        <div className="relative z-10 mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-4 text-center transition-all hover:bg-white/10 hover:border-[#E60067]/40">
            <div className="flex justify-center mb-1.5 text-[#FF66B2]">
              <Heart className="size-6" />
            </div>
            <h4 className="text-sm font-extrabold text-white">५००+ आनंदी सदस्य</h4>
            <p className="text-[11px] text-slate-300 mt-0.5">सांगली जिल्हयातील विश्वासाचे प्रतीक</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-4 text-center transition-all hover:bg-white/10 hover:border-[#E60067]/40">
            <div className="flex justify-center mb-1.5 text-[#66B2FF]">
              <ShieldCheck className="size-6" />
            </div>
            <h4 className="text-sm font-extrabold text-white">२४×७ काळजी व सुरक्षा</h4>
            <p className="text-[11px] text-slate-300 mt-0.5">वैद्यकीय व आपत्कालीन सहाय्य</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-4 text-center transition-all hover:bg-white/10 hover:border-[#E60067]/40">
            <div className="flex justify-center mb-1.5 text-[#FFD700]">
              <Award className="size-6" />
            </div>
            <h4 className="text-sm font-extrabold text-white">महाराष्ट्रातील प्रथम</h4>
            <p className="text-[11px] text-slate-300 mt-0.5">अभिनव ज्येष्ठ नागरिक उपक्रम</p>
          </div>
        </div>

        {/* SHIMMER CTA BUTTON */}
        <div className="relative z-10 mt-10 flex justify-center">
          <Link
            to="/about"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[#E60067] via-[#D0005D] to-[#1A05A2] px-8 py-4 text-sm sm:text-base font-black text-white shadow-[0_10px_30px_rgba(230,0,103,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_40px_rgba(230,0,103,0.6)] cursor-pointer"
          >
            <span>आमच्याबद्दल अधिक जाणून घ्या</span>
            <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
            
            {/* SHIMMER GLOW ANIMATION */}
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
          </Link>
        </div>

      </div>
    </motion.div>
  );
}

export default memo(QuoteCard);
