import React, { useState, useEffect, useRef } from "react";
import "./HomeHero.css";

const slides = [
  {
    image: "/images/aandshala_img.png",
    badge: "1 / 6",
    titleSub: "भव्य व सुसज्ज",
    titleMain: "११ विशेष उपक्रम",
    titleEnd: "तुमच्यासाठी...",
  },
  {
    image: "/images/aandmelav 10.jpeg",
    badge: "2 / 6",
    titleSub: "आनंदी वातावरण",
    titleMain: "सांस्कृतिक सोहळे",
    titleEnd: "व सण-उत्सव...",
  },
  {
    image: "/images/Screenshot 2026-07-31 103517.png",
    badge: "3 / 6",
    titleSub: "अत्याधुनिक",
    titleMain: "क्रीडा व जिम हॉल्स",
    titleEnd: "सर्व सुविधांसह...",
  },
  {
    image: "/images/aandshala sahal 1.jpeg",
    badge: "4 / 6",
    titleSub: "मनसोक्त आनंद",
    titleMain: "पर्यटन व सहली",
    titleEnd: "आनंददायी उपक्रम...",
  },
  {
    image: "/images/Screenshot 2026-07-31 103659.png",
    badge: "5 / 6",
    titleSub: "आरोग्य व अध्यात्म",
    titleMain: "ध्यान व प्रार्थना",
    titleEnd: "सकारात्मक ऊर्जा...",
  },
  {
    image: "/images/Screenshot 2026-07-31 103842.png",
    badge: "6 / 6",
    titleSub: "स्वाभिमानी जीवन",
    titleMain: "आपलेपणाचे नाते",
    titleEnd: "आनंदशाळा परिवार...",
  },
];

const featurePills = [
  {
    icon: "👥",
    num: "500+",
    label: "आनंदी सदस्य परिवार",
    desc: "सांगली जिल्ह्यातील विश्वासू कुटुंब",
    color: "#7C3AED",
    bg: "#F3E8FF",
  },
  {
    icon: "📅",
    num: "26/27/28",
    label: "जानेवारी 2026 मोठी सुरू",
    desc: "भव्य प्रवेश व नोंदणी सोहळा",
    color: "#E60067",
    bg: "#FFE4E6",
  },
  {
    icon: "⏰",
    num: "11 ते सायं. 5",
    label: "भेट देण्याची वेळ",
    desc: "सकाळी 11 ते सायं 5 वाजेपर्यंत",
    color: "#EA580C",
    bg: "#FFEDD5",
  },
  {
    icon: "🛡️",
    num: "सुरक्षित व आरोग्याची",
    label: "काळजी व २४×७ सुरक्षा",
    desc: "वैद्यकीय सेवा व ॲम्बुलन्स सुविधा",
    color: "#16A34A",
    bg: "#DCFCE7",
  },
];

const activityHalls = [
  {
    icon: "♟️",
    title: "बैठे खेळ हॉल",
    text: "कॅरम, बुद्धिबळ, पत्ते, सापाशिडी, इ.",
    bg: "#F3E8FF",
    color: "#7C3AED",
  },
  {
    icon: "🎨",
    title: "आर्ट हॉल",
    text: "चित्रकला, हस्तकला, विणकाम व कला शिकणे.",
    bg: "#FFE4E6",
    color: "#E60067",
  },
  {
    icon: "🎵",
    title: "संगीत उपक्रम हॉल",
    text: "तबला, गिटार, हार्मोनिअम, गाणी, भजन, संगीत कार्य.",
    bg: "#FFEDD5",
    color: "#EA580C",
  },
  {
    icon: "💻",
    title: "माहिती तंत्रज्ञान हॉल",
    text: "कॉम्प्युटर, लॅपटॉप, इंटरनेट व प्रिंटर सुविधा.",
    bg: "#E0F2FE",
    color: "#0284C7",
  },
  {
    icon: "🎭",
    title: "करमणूक हॉल",
    text: "गप्पा-गोष्टी, अंताक्षरी, पासिंग गेम, समूह खेळ.",
    bg: "#DCFCE7",
    color: "#16A34A",
  },
  {
    icon: "🏊",
    title: "स्विमिंग पूल",
    text: "पोहण्याचा व स्वच्छ पाण्यात खेळण्याचा आनंद.",
    bg: "#CFFAFE",
    color: "#0891B2",
  },
  {
    icon: "📽️",
    title: "संस्कार व संवाद हॉल",
    text: "विविध धार्मिक कार्यक्रम, संस्कार वर्ग व व्हिडिओ.",
    bg: "#FEE2E2",
    color: "#DC2626",
  },
  {
    icon: "🏸",
    title: "विविध खेळ हॉल",
    text: "बॅडमिंटन, टेबल टेनिस, स्नूकर व साहित्याचे खेळ.",
    bg: "#FEF3C7",
    color: "#D97706",
  },
  {
    icon: "🏋️",
    title: "व्यायाम हॉल",
    text: "जिम, योगा, मेडिटेशन, डान्स इत्यादी.",
    bg: "#E0E7FF",
    color: "#4F46E5",
  },
  {
    icon: "🧘",
    title: "ध्यान व प्रार्थना कक्ष",
    text: "शांत वातावरणात ध्यान व प्रार्थना.",
    bg: "#EDE9FE",
    color: "#6D28D9",
  },
  {
    icon: "📚",
    title: "वाचनालय",
    text: "इतिहास, आरोग्य, साहित्य, वर्तमानपत्र व मासिके.",
    bg: "#D1FAE5",
    color: "#059669",
  },
];

const HomeHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4200);
    return () => clearInterval(timer);
  }, []);

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -280, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 280, behavior: "smooth" });
    }
  };

  return (
    <div className="home-page-unique">
      {/* ══════════════════════════════════════════════════════════════
          HERO BANNER — EXACT MATCH DESIGN (V5)
         ══════════════════════════════════════════════════════════════ */}
      <section className="unique-hero-sec">
        <div className="unique-container">
          
          {/* TOP 2-COLUMN HERO SHOWCASE GRID */}
          <div className="unique-hero-grid">
            
            {/* LEFT WHITE ELEGANT CARD */}
            <div className="unique-card-left">
              {/* STAR BADGE */}
              <div className="unique-star-badge">
                <span className="star-icon">⭐</span>
                <span>प्रीतम • भारतातील पहिली ज्येष्ठ नागरिक आनंदशाळा • सांगली</span>
              </div>

              {/* MAIN TITLE */}
              <h1 className="unique-main-title">
                <span className="title-navy">प्रीतम ज्येष्ठ नागरिक</span>
                <span className="title-pink">
                  आनंदशाळा
                  <svg className="wavy-underline" viewBox="0 0 200 12" fill="none">
                    <path d="M 0 8 Q 50 0 100 8 T 200 8" stroke="#E60067" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>

              {/* SUBTITLE */}
              <p className="unique-sub-text">
                ज्येष्ठ नागरिकांच्या निरोगी आरोग्य व आनंददायी आयुष्यासाठी दार येथेच उघडतं...
              </p>

              {/* HEART DIVIDER */}
              <div className="unique-heart-divider">
                <div className="divider-line" />
                <span className="heart-icon">♥</span>
                <div className="divider-line" />
              </div>

              {/* 4 FEATURE PILLS ROW */}
              <div className="unique-pills-row">
                {featurePills.map((pill, idx) => (
                  <div key={idx} className="unique-pill-item">
                    <div
                      className="pill-icon-box"
                      style={{ background: pill.bg, color: pill.color }}
                    >
                      {pill.icon}
                    </div>
                    <div className="pill-info">
                      <strong style={{ color: pill.color }}>{pill.num}</strong>
                      <h5>{pill.label}</h5>
                      {pill.desc && <p>{pill.desc}</p>}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA BUTTONS */}
              <div className="unique-actions-row">
                <a href="tel:9370237633" className="btn-pink-gradient">
                  <span className="btn-icon">📞</span>
                  <span>आजच प्रवेश घ्या (9370237633)</span>
                </a>

                <a href="#sections" className="btn-white-outline">
                  <span className="btn-icon">🏛️</span>
                  <span>विभाग निवडा</span>
                  <span className="btn-arrow">&gt;</span>
                </a>
              </div>
            </div>

            {/* RIGHT HERO SLIDER SHOWCASE */}
            <div className="unique-card-right">
              <div className="unique-slider-container">
                
                {/* SLIDE IMAGES */}
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`unique-slide-box ${
                      index === currentSlide ? "active" : ""
                    }`}
                  >
                    <img src={slide.image} alt={slide.titleMain} />
                    <div className="slide-top-gradient" />
                    <div className="slide-bottom-gradient" />

                    {/* TOP LEFT OVERLAY TEXT & COUNTER */}
                    <div className="slide-header-overlay">
                      <span className="slide-badge-counter">{slide.badge}</span>
                      <div className="slide-headline-text">
                        <p className="sub-line">{slide.titleSub}</p>
                        <h3 className="main-line">{slide.titleMain}</h3>
                        <p className="end-line">{slide.titleEnd}</p>
                        <div className="headline-underline" />
                      </div>
                    </div>
                  </div>
                ))}

                {/* CIRCULAR NAVIGATION ARROWS */}
                <button
                  className="slider-nav-btn prev"
                  onClick={() =>
                    setCurrentSlide((prev) =>
                      prev === 0 ? slides.length - 1 : prev - 1
                    )
                  }
                  title="मागील"
                >
                  ←
                </button>

                <button
                  className="slider-nav-btn next"
                  onClick={() =>
                    setCurrentSlide((prev) => (prev + 1) % slides.length)
                  }
                  title="पुढील"
                >
                  →
                </button>

                {/* BOTTOM DARK NAVY BAR OVERLAY (4 HIGHLIGHTS) */}
                <div className="slider-bottom-bar">
                  <div className="bottom-bar-grid">
                    <div className="bar-item">
                      <span className="bar-icon">🏠</span>
                      <span className="bar-text">आधुनिक सुविधा</span>
                    </div>
                    <div className="bar-item">
                      <span className="bar-icon">👨‍🏫</span>
                      <span className="bar-text">अनुभवी व तज्ज्ञ मार्गदर्शक</span>
                    </div>
                    <div className="bar-item">
                      <span className="bar-icon">👨‍👩‍👧‍👦</span>
                      <span className="bar-text">परिवारासारखे आपलेसे वातावरण</span>
                    </div>
                    <div className="bar-item">
                      <span className="bar-icon">🏥</span>
                      <span className="bar-text">२४ तास वैद्यकीय सेवा व आपत्कालीन सहाय्य</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* ══════════════════════════════════════════════════════════════
              BOTTOM SECTION: 11 SPECIAL ACTIVITY HALLS STRIP
             ══════════════════════════════════════════════════════════════ */}
          <div className="unique-halls-banner">
            
            {/* HEADER */}
            <div className="halls-header">
              <span className="halls-title-badge">✦ ११ विशेष उपक्रम हॉल्स ✦</span>
              <p className="halls-sub-text">
                मन, बुद्धी आणि शरीराच्या सर्वांगीण विकासासाठी आमचे खास उपक्रम
              </p>
            </div>

            {/* HORIZONTAL CAROUSEL SCROLLER */}
            <div className="halls-carousel-wrapper">
              
              <button className="halls-scroll-arrow left" onClick={handleScrollLeft}>
                ‹
              </button>

              <div className="halls-scroll-track" ref={scrollRef}>
                {activityHalls.map((hall, idx) => (
                  <div key={idx} className="hall-item-card">
                    <div
                      className="hall-icon-circle"
                      style={{ background: hall.bg, color: hall.color }}
                    >
                      {hall.icon}
                    </div>
                    <h4 style={{ color: hall.color }}>{hall.title}</h4>
                    <p>{hall.text}</p>
                  </div>
                ))}
              </div>

              <button className="halls-scroll-arrow right" onClick={handleScrollRight}>
                ›
              </button>

            </div>

            {/* DOT INDICATORS */}
            <div className="halls-dots-row">
              {Array.from({ length: 5 }).map((_, dIdx) => (
                <span
                  key={dIdx}
                  className={`h-dot ${dIdx === 0 ? "active" : ""}`}
                />
              ))}
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};

export default HomeHero;
