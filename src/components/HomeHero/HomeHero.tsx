import React, { useState, useEffect } from "react";
import "./HomeHero.css";
import { site } from "../../lib/site-info";

const slides = [
  {
    image: "/images/aandshala_img.png",
    tag: "🏛️ मुख्य परिसर",
    title: "१.५ एकर निसर्गरम्य आनंदशाळा परिसर",
    sub: "सांगली जिल्ह्यातील सर्वात भव्य व सुसज्ज ज्येष्ठ नागरिक केंद्र",
  },
  {
    image: "/images/aandmelav 10.jpeg",
    tag: "🎉 सांस्कृतिक कार्यक्रम",
    title: "आनंदी वातावरण व सण-उत्सव सोहळे",
    sub: "आपल्या वयाच्या मित्र-मैत्रिणींसोबत उत्साही जीवन",
  },
  {
    image: "/images/Screenshot 2026-07-31 103517.png",
    tag: "🏸 इनडोअर स्पोर्ट्स",
    title: "अत्याधुनिक उपक्रम व क्रीडा हॉल्स",
    sub: "कॅरम, बॅडमिंटन, तबला, कॉम्प्युटर व ध्यान कक्ष",
  },
  {
    image: "/images/aandshala sahal 1.jpeg",
    tag: "🚌 आनंद सहल",
    title: "पर्यटन, सहली व आनंददायी उपक्रम",
    sub: "जीवनाची सायंकाळ मनसोक्त जगण्याचा आनंद",
  },
];

const featureCards = [
  {
    icon: "👥",
    num: "५००+",
    label: "आनंदी सदस्य परिवार",
    desc: "सांगली जिल्ह्यातील विश्वासू कुटुंब",
    color: "#E60067",
    bg: "#FFF0F6",
  },
  {
    icon: "📅",
    num: "२६, २७, २८",
    label: "जानेवारी २०२६ नोंदणी",
    desc: "भव्य प्रवेश व नोंदणी सोहळा",
    color: "#1A05A2",
    bg: "#EEF2FF",
  },
  {
    icon: "⏰",
    num: "११ ते ५",
    label: "भेट देण्याची वेळ",
    desc: "सकाळी ११ ते सायंकाळी ५ वाजेपर्यंत",
    color: "#EA580C",
    bg: "#FFF7ED",
  },
  {
    icon: "🛡️",
    num: "२४×७",
    label: "सुरक्षा व काळजी",
    desc: "वैद्यकीय सेवा व ॲम्बुलन्स सुविधा",
    color: "#16A34A",
    bg: "#F0FDF4",
  },
];

const HomeHero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home-page-unique">
      {/* ══════════════════════════════════════════════════════════════
          HERO BANNER — CREATIVE LUXURY SHOWCASE
         ══════════════════════════════════════════════════════════════ */}
      <section className="unique-hero-sec">
        <div className="unique-bg-blob-1" />
        <div className="unique-bg-blob-2" />

        <div className="unique-container">
          {/* LEFT: HEADING, CARDS & CTAS */}
          <div className="unique-hero-left">
            <div className="unique-pill-badge">
              <span className="pulse-dot" />
              <span>🌸 भारतातील पहिली ज्येष्ठ नागरिक आनंदशाळा • सांगली</span>
            </div>

            <h1 className="unique-title">
              <span className="text-navy">प्रीतम ज्येष्ठ नागरिक</span>
              <span className="text-pink">आनंदशाळा • सांगली</span>
            </h1>

            <p className="unique-subtitle">
              ज्येष्ठ नागरिकांच्या निरोगी आरोग्य, आनंददायी आयुष्य व स्वाभिमानी
              जीवनासाठी सांगलीतील १.५ एकर निसर्गरम्य संकुल!
            </p>

            {/* 4 FEATURE CARDS */}
            <div className="unique-cards-grid">
              {featureCards.map((card, idx) => (
                <div key={idx} className="unique-card">
                  <div
                    className="card-top-icon"
                    style={{ background: card.bg, color: card.color }}
                  >
                    {card.icon}
                  </div>
                  <div className="card-content">
                    <strong style={{ color: card.color }}>{card.num}</strong>
                    <h5>{card.label}</h5>
                    <p>{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA BUTTONS */}
            <div className="unique-cta-row">
              <a href="tel:9370237633" className="unique-btn-primary">
                <span>📞 आजच प्रवेश घ्या (9370237633)</span>
              </a>

              <a
                href="https://wa.me/919370237633"
                target="_blank"
                rel="noopener noreferrer"
                className="unique-btn-glass"
              >
                <span>💬 WhatsApp वर चौकशी करा</span>
                <span className="arrow-down">→</span>
              </a>
            </div>
          </div>

          {/* RIGHT: INTERACTIVE SLIDE SHOWCASE */}
          <div className="unique-hero-right">
            <div className="unique-slider-card">
              {/* SLIDE IMAGES */}
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`unique-slide-item ${
                    index === currentSlide ? "active" : ""
                  }`}
                >
                  <img src={slide.image} alt={slide.title} />
                  <div className="slide-overlay" />

                  <div className="slide-content-box">
                    <span className="slide-tag">{slide.tag}</span>
                    <h3>{slide.title}</h3>
                    <p>{slide.sub}</p>
                  </div>
                </div>
              ))}

              {/* SLIDE COUNTER & LIVE BADGE */}
              <div className="slider-top-bar">
                <span className="live-badge">● LIVE CAMPUS</span>
                <span className="counter-badge">
                  {currentSlide + 1} / {slides.length}
                </span>
              </div>

              {/* NAV CONTROLS */}
              <button
                className="nav-arrow left"
                onClick={() =>
                  setCurrentSlide((prev) =>
                    prev === 0 ? slides.length - 1 : prev - 1
                  )
                }
              >
                ‹
              </button>

              <button
                className="nav-arrow right"
                onClick={() =>
                  setCurrentSlide((prev) => (prev + 1) % slides.length)
                }
              >
                ›
              </button>

              {/* DOTS */}
              <div className="slider-dots-row">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    className={`dot-item ${
                      idx === currentSlide ? "active" : ""
                    }`}
                    onClick={() => setCurrentSlide(idx)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeHero;
