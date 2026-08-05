import { memo } from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import MagneticButton from "./MagneticButton";

function QuoteCard() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 80,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
      }}
      className="relative mt-40 transform-gpu"
    >
      {/* Gradient Border */}
      <div className="rounded-[40px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 p-[2px]">
        <div
          className="
          relative
          overflow-hidden
          rounded-[38px]
          bg-white/80
          backdrop-blur-xl
          px-10
          py-16
          shadow-[0_40px_120px_rgba(0,0,0,.12)]
        "
        >
          {/* Glow */}
          <div
            className="
            absolute
            -top-24
            right-0
            h-60
            w-60
            rounded-full
            bg-pink-300/20
            blur-[120px]
            pointer-events-none
          "
          />

          {/* Quote Icon */}
          <div
            className="
            mx-auto
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-full
            bg-gradient-to-r
            from-pink-500
            to-purple-600
            text-white
            shadow-xl
          "
          >
            <Quote size={34} />
          </div>

          {/* Heading */}
          <h2
            className="
            mt-8
            text-center
            text-5xl
            md:text-6xl
            font-black
            text-[#1F2B8D]
          "
          >
            प्रेम, विश्वास आणि
            <br />
            सेवांचा प्रवास
          </h2>

          {/* Quote Paragraph */}
          <p
            className="
            mx-auto
            mt-8
            max-w-4xl
            text-center
            text-xl
            leading-10
            text-gray-600
          "
          >
            "सन २००० पासून आजपर्यंत हजारो ज्येष्ठ नागरिकांच्या
            चेहऱ्यावर आनंद फुलविण्याचा आमचा प्रयत्न अखंड सुरू आहे.
            प्रत्येक दिवस नव्या आशेचा, नव्या आनंदाचा आणि
            प्रेमळ सहवासाचा प्रवास आहे."
          </p>

          {/* Bottom Line */}
          <div
            className="
            mx-auto
            mt-10
            h-1
            w-40
            rounded-full
            bg-gradient-to-r
            from-pink-500
            via-blue-500
            to-green-500
          "
          />

          {/* CTA via MagneticButton */}
          <MagneticButton
            className="
            mx-auto
            mt-12
            flex
            rounded-full
            bg-gradient-to-r
            from-pink-500
            to-blue-600
            px-8
            py-4
            font-semibold
            text-white
            shadow-xl
            hover:shadow-[0_20px_50px_rgba(236,72,153,.45)]
            transition-shadow
            duration-300
            cursor-pointer
            "
          >
            आमच्याबद्दल अधिक जाणून घ्या
          </MagneticButton>
        </div>
      </div>
    </motion.div>
  );
}

export default memo(QuoteCard);
