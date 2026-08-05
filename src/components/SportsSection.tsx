import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import "./SportsSection.css";
import { site, sportsClub } from "../lib/site-info";

/* ── Carousel Slide Data ── */
const carouselSlides = [
  {
    image: "https://d3k88l35vy59af.cloudfront.net/A42/9663/1763184848892.jpg",
    title: "अत्याधुनिक जिम व स्ट्रेंथ झोन",
    tagline: "जागतिक दर्जाची कार्डिओ व वेट ट्रेनिंग उपकरणे",
    badge: "🏋️‍♂️ GYM & FITNESS",
  },
  {
    image: "https://d3k88l35vy59af.cloudfront.net/A42/9663/1762243460172.jpg",
    title: "भव्य ऑलिंपिक स्विमिंग पूल",
    tagline: "स्वच्छ व शुद्ध पाणी, प्रशिक्षित लाईफगार्ड्स",
    badge: "🏊 SWIMMING POOL",
  },
  {
    image: "https://d3k88l35vy59af.cloudfront.net/A42/9663/1763188841664.jpg",
    title: "शांत व सकारात्मक योगा स्टुडिओ",
    tagline: "प्राणायाम, ध्यान व मानसिक आरोग्यासाठी समर्पित",
    badge: "🧘 YOGA & MEDITATION",
  },
  {
    image: "https://d3k88l35vy59af.cloudfront.net/A42/9663/1763357581614.png",
    title: "हाय-एनर्जी झुंबा व डान्स क्लासेस",
    tagline: "संगीताच्या तालावर कॅलरी बर्न व फिटनेस आनंद",
    badge: "💃 ZUMBA & DANCE",
  },
  {
    image: "https://d3k88l35vy59af.cloudfront.net/A42/9663/1763203444303.jpg",
    title: "इनडोअर बॅडमिंटन व क्रीडा कोर्ट्स",
    tagline: "आंतरराष्ट्रीय दर्जाचे लाकडी बॅडमिंटन कोर्ट्स",
    badge: "🏸 INDOOR SPORTS",
  },
];

const features = [
  {
    icon: "🏆",
    title: "प्रोफेशनल ट्रेनर्स",
    desc: "प्रमाणित प्रशिक्षकांचे वैयक्तिक मार्गदर्शन",
    color: "#E60067",
    bg: "#FFF0F6",
  },
  {
    icon: "⚡",
    title: "आधुनिक उपकरणे",
    desc: "जागतिक दर्जाची इंपोर्टेड जिम मशीन्स",
    color: "#7C3AED",
    bg: "#F5F3FF",
  },
  {
    icon: "🧘",
    title: "योगा & झुंबा क्लास",
    desc: "शारीरिक व मानसिक आरोग्य संतुलन",
    color: "#DB2777",
    bg: "#FDF2F8",
  },
  {
    icon: "🏊",
    title: "स्विमिंग पूल",
    desc: "ऑलिंपिक मानकांचा स्वच्छ पूल",
    color: "#0284C7",
    bg: "#F0F9FF",
  },
];

const tickerItems = [
  { icon: "🏋️", label: "अत्याधुनिक जिम" },
  { icon: "🏊", label: "स्विमिंग पूल" },
  { icon: "🏸", label: "इनडोअर बॅडमिंटन" },
  { icon: "🧘", label: "योगा व ध्यान कक्ष" },
  { icon: "💃", label: "झुंबा व डान्स क्लास" },
  { icon: "🥅", label: "पिकलबॉल टर्फ" },
  { icon: "🎱", label: "स्नूकर व बिलियर्ड्स" },
  { icon: "🥗", label: "न्यूट्रिशन गाईडन्स" },
];

const SportsSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedFacility, setSelectedFacility] = useState<any | null>(null);
  const [facilityPhotoIndex, setFacilityPhotoIndex] = useState<number>(0);

  /* Auto-play slider every 3.5s */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  /* Lock body scroll when modal or photo lightbox is open */
  useEffect(() => {
    if (selectedFacility !== null || activePhotoIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedFacility, activePhotoIndex]);

  /* ESC & arrow key listeners */
  useEffect(() => {
    if (!selectedFacility) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedFacility(null);
      if (e.key === "ArrowLeft" && selectedFacility.images?.length) {
        setFacilityPhotoIndex((prev) =>
          prev === 0 ? selectedFacility.images.length - 1 : prev - 1
        );
      }
      if (e.key === "ArrowRight" && selectedFacility.images?.length) {
        setFacilityPhotoIndex((prev) =>
          (prev + 1) % selectedFacility.images.length
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedFacility]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? carouselSlides.length - 1 : prev - 1
    );
  };

  const filteredFacilities =
    activeCategory === "all"
      ? sportsClub.facilities
      : sportsClub.facilities.filter((f) => {
          if (activeCategory === "fitness") return ["gym", "zumba", "dance"].includes(f.id);
          if (activeCategory === "water") return f.id === "swimming";
          if (activeCategory === "mind") return ["yoga", "meditation"].includes(f.id);
          return true;
        });

  return (
    <div className="sp-v3-root">

      {/* ══════════════════════════════════════════════════════════════
          1. HERO HEADER — CREATIVE SLIDING CAROUSEL SHOWCASE
         ══════════════════════════════════════════════════════════════ */}
      <section className="sp-v3-hero">
        <div className="sp-v3-hero-bg-glow" />
        <div className="sp-v3-hero-dots" />

        <div className="sp-v3-container">
          
          {/* LEFT: HEADING, SUBTITLE, CARDS & CTAS */}
          <div className="sp-v3-hero-left">
            <div className="sp-v3-pill-badge">
              <span className="sp-v3-pulse-dot" />
              <span>सांगलीतील १.५ एकर भव्य क्रीडा व फिटनेस संकुल</span>
            </div>

            <h1 className="sp-v3-main-title">
              <span className="sp-v3-text-blue">प्रीतम स्पोर्ट्स</span>
              <span className="sp-v3-text-pink">अँड फिटनेस</span>
              <span className="sp-v3-text-gradient">क्लब • सांगली</span>
            </h1>

            <p className="sp-v3-subtitle">
              जिम • बॉडीबिल्डिंग • स्विमिंग पूल • इनडोअर बॅडमिंटन • पिकलबॉल • योगा •
              झुंबा • डान्स • स्नूकर — एकाच छताखाली आरोग्याचा नवा अध्याय!
            </p>

            {/* 4 FEATURE CARDS */}
            <div className="sp-v3-features-row">
              {features.map((feat, idx) => (
                <div key={idx} className="sp-v3-feat-box">
                  <div
                    className="sp-v3-feat-icon"
                    style={{ backgroundColor: feat.bg, color: feat.color }}
                  >
                    {feat.icon}
                  </div>
                  <div className="sp-v3-feat-info">
                    <h5>{feat.title}</h5>
                    <p>{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="sp-v3-cta-row">
              <a href={`tel:${sportsClub.phones[0]}`} className="sp-v3-btn-pink">
                <span>📞 आजच प्रवेश घ्या ({sportsClub.phones[0]})</span>
              </a>

              <a href={sportsClub.whatsapp} target="_blank" rel="noopener noreferrer" className="sp-v3-btn-outline">
                <span>💬 WhatsApp चौकशी</span>
                <span className="sp-v3-arrow">→</span>
              </a>
            </div>
          </div>

          {/* RIGHT: INTERACTIVE AUTO-SLIDING CAROUSEL */}
          <div className="sp-v3-hero-right">
            
            {/* CAROUSEL CONTAINER */}
            <div className="sp-v3-slider-card">
              
              {/* SLIDE IMAGES */}
              {carouselSlides.map((slide, index) => (
                <div
                  key={index}
                  className={`sp-v3-slide-item ${
                    index === currentSlide ? "active" : ""
                  }`}
                >
                  <img src={slide.image} alt={slide.title} />
                  <div className="sp-v3-slide-overlay" />

                  {/* FLOATING TEXT BADGE ON SLIDE */}
                  <div className="sp-v3-slide-caption">
                    <span className="sp-v3-slide-tag">{slide.badge}</span>
                    <h3 className="sp-v3-slide-title">{slide.title}</h3>
                    <p className="sp-v3-slide-sub">{slide.tagline}</p>
                  </div>
                </div>
              ))}

              {/* SLIDER CONTROLS (NAV ARROWS) */}
              <button className="sp-v3-slider-nav prev" onClick={prevSlide}>
                ‹
              </button>
              <button className="sp-v3-slider-nav next" onClick={nextSlide}>
                ›
              </button>

              {/* DOT INDICATORS */}
              <div className="sp-v3-slider-dots">
                {carouselSlides.map((_, idx) => (
                  <button
                    key={idx}
                    className={`sp-v3-dot ${
                      idx === currentSlide ? "active" : ""
                    }`}
                    onClick={() => setCurrentSlide(idx)}
                  />
                ))}
              </div>

              {/* OVERLAY BADGE (Est. 2000) */}
              <div className="sp-v3-glass-badge">
                <span className="sp-v3-gb-icon">🏆</span>
                <div>
                  <strong>PREETAM®</strong>
                  <small>Est. {sportsClub.estYear} • सांगली</small>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* TICKER / MARQUEE */}
        <div className="sp-v3-ticker-bar">
          <div className="sp-v3-ticker-track">
            {[...tickerItems, ...tickerItems, ...tickerItems].map((t, i) => (
              <React.Fragment key={i}>
                <span className="sp-v3-t-item">
                  <span className="sp-v3-t-icon">{t.icon}</span>
                  <span>{t.label}</span>
                </span>
                <span className="sp-v3-t-star">⚡</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          2. FACILITIES SECTION WITH CATEGORY FILTER TABS
         ══════════════════════════════════════════════════════════════ */}
      <section className="sp-v3-fac-section">
        <div className="sp-v3-container">
          
          <div className="sp-v3-sec-header">
            <span className="sp-v3-sec-badge">🏆 जागतिक दर्जाच्या क्रीडा सुविधा</span>
            <h2 className="sp-v3-sec-title">
              आमच्या <span>सुविधा व हॉल्स</span>
            </h2>
            <p className="sp-v3-sec-sub">
              आपल्या आवडीनुसार खालील वर्गवारी निवडून सर्व सुविधांची माहिती पहा:
            </p>

            {/* CATEGORY FILTER TABS */}
            <div className="sp-v3-filter-tabs">
              {[
                { id: "all", label: "🌟 सर्व सुविधा" },
                { id: "fitness", label: "🏋️‍♂️ जिम व झुंबा" },
                { id: "water", label: "🏊 स्विमिंग पूल" },
                { id: "mind", label: "🧘 योगा व ध्यान" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  className={`sp-v3-tab-btn ${
                    activeCategory === tab.id ? "active" : ""
                  }`}
                  onClick={() => setActiveCategory(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* FACILITIES CARDS GRID */}
          <div className="sp-v3-fac-grid">
            {filteredFacilities.map((fac) => (
              <div
                key={fac.id}
                className="sp-v3-fac-card"
                onClick={() => {
                  setSelectedFacility(fac);
                  setFacilityPhotoIndex(0);
                }}
              >
                {/* PHOTO HEADER */}
                {fac.images && fac.images.length > 0 && (
                  <div className="sp-v3-fac-img-box">
                    <img src={fac.images[0]} alt={fac.titleMr} />
                    <span className="sp-v3-fac-badge">{fac.icon} {fac.titleEn}</span>
                    <div className="sp-v3-fac-hover-overlay">
                      <span>🔍 फोटो व माहिती पाहण्यासाठी क्लिक करा</span>
                    </div>
                  </div>
                )}

                {/* CARD BODY */}
                <div className="sp-v3-fac-body">
                  <h3 className="sp-v3-fac-name">{fac.titleMr}</h3>
                  <p className="sp-v3-fac-desc">{fac.descMr}</p>

                  {/* SPECS LIST */}
                  {fac.specsMr && (
                    <ul className="sp-v3-fac-specs">
                      {fac.specsMr.slice(0, 3).map((spec, sIdx) => (
                        <li key={sIdx}>{spec}</li>
                      ))}
                    </ul>
                  )}

                  {/* ACTIONS */}
                  <div className="sp-v3-fac-card-actions">
                    <button className="sp-v3-fac-view-btn">
                      <span>🔍 सविस्तर माहिती & फोटो</span>
                    </button>
                    <a
                      href={fac.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sp-v3-fac-wa"
                      onClick={(e) => e.stopPropagation()}
                    >
                      💬 WhatsApp
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          FACILITY DETAIL POPUP MODAL (PORTAL TO DOCUMENT.BODY)
         ══════════════════════════════════════════════════════════════ */}
      {selectedFacility !== null && typeof document !== "undefined" && createPortal(
        <div
          className="sp-v3-modal-backdrop"
          onClick={() => setSelectedFacility(null)}
        >
          <div
            className="sp-v3-fac-modal"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button
              className="sp-v3-modal-close"
              onClick={() => setSelectedFacility(null)}
              title="बंद करा (ESC)"
            >
              ✕
            </button>

            <div className="sp-v3-modal-grid">
              {/* LEFT: IMAGES SHOWCASE WITH SLIDER & THUMBNAILS */}
              <div className="sp-v3-modal-media">
                {selectedFacility.images && selectedFacility.images.length > 0 ? (
                  <>
                    <div className="sp-v3-modal-img-wrapper">
                      <img
                        src={selectedFacility.images[facilityPhotoIndex]}
                        alt={selectedFacility.titleMr}
                      />
                      <span className="sp-v3-modal-badge">
                        {selectedFacility.icon} {selectedFacility.titleEn}
                      </span>

                      {selectedFacility.images.length > 1 && (
                        <>
                          <button
                            className="sp-v3-modal-arrow left"
                            onClick={() =>
                              setFacilityPhotoIndex((prev) =>
                                prev === 0
                                  ? selectedFacility.images.length - 1
                                  : prev - 1
                              )
                            }
                          >
                            ‹
                          </button>
                          <button
                            className="sp-v3-modal-arrow right"
                            onClick={() =>
                              setFacilityPhotoIndex((prev) =>
                                (prev + 1) % selectedFacility.images.length
                              )
                            }
                          >
                            ›
                          </button>
                        </>
                      )}
                    </div>

                    {/* THUMBNAILS */}
                    {selectedFacility.images.length > 1 && (
                      <div className="sp-v3-modal-thumbs">
                        {selectedFacility.images.map(
                          (imgUrl: string, tIdx: number) => (
                            <button
                              key={tIdx}
                              className={`sp-v3-thumb-btn ${
                                tIdx === facilityPhotoIndex ? "active" : ""
                              }`}
                              onClick={() => setFacilityPhotoIndex(tIdx)}
                            >
                              <img src={imgUrl} alt={`Thumbnail ${tIdx + 1}`} />
                            </button>
                          )
                        )}
                      </div>
                    )}
                  </>
                ) : (
                  <div className="sp-v3-modal-no-img">
                    <span>{selectedFacility.icon}</span>
                  </div>
                )}
              </div>

              {/* RIGHT: DETAILED INFORMATION */}
              <div className="sp-v3-modal-content">
                <div className="sp-v3-modal-header">
                  <span className="sp-v3-modal-tag">
                    {selectedFacility.icon} सुविधा / हॉल तपशील
                  </span>
                  <h2>{selectedFacility.titleMr}</h2>
                  {selectedFacility.titleEn && (
                    <h4>{selectedFacility.titleEn}</h4>
                  )}
                </div>

                <p className="sp-v3-modal-desc">{selectedFacility.descMr}</p>

                {selectedFacility.specsMr &&
                  selectedFacility.specsMr.length > 0 && (
                    <div className="sp-v3-modal-specs">
                      <h5>📋 सविस्तर माहिती व वैशिष्ट्ये:</h5>
                      <ul>
                        {selectedFacility.specsMr.map(
                          (spec: string, sIdx: number) => (
                            <li key={sIdx}>{spec}</li>
                          )
                        )}
                      </ul>
                    </div>
                  )}

                {/* ACTION BUTTONS */}
                <div className="sp-v3-modal-actions">
                  <a
                    href={selectedFacility.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sp-v3-modal-btn-wa"
                  >
                    💬 WhatsApp वर चौकशी / बुकिंग करा →
                  </a>
                  <a
                    href={`tel:${sportsClub.phones[0]}`}
                    className="sp-v3-modal-btn-call"
                  >
                    📞 थेट संपर्क साधा ({sportsClub.phones[0]})
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* ══════════════════════════════════════════════════════════════
          3. AUTO-SLIDING HORIZONTAL PHOTO GALLERY WITH LIGHTBOX POPUP
         ══════════════════════════════════════════════════════════════ */}
      <section className="sp-v3-gallery-section">
        <div className="sp-v3-container">
          
          <div className="sp-v3-sec-header">
            <span className="sp-v3-sec-badge">📸 फोटो गॅलरी</span>
            <h2 className="sp-v3-sec-title">
              प्रीतम स्पोर्ट्स <span>गॅलरी</span>
            </h2>
            <p className="sp-v3-sec-sub">
              मोठ्या आकारात पाहण्यासाठी कोणत्याही फोटोवर क्लिक करा:
            </p>
          </div>

          {/* GALLERY CAROUSEL SCROLLER */}
          <div className="sp-v3-gallery-slider">
            <div className="sp-v3-gallery-track">
              {sportsClub.gallery.map((url, idx) => (
                <div
                  key={idx}
                  className="sp-v3-gal-item"
                  onClick={() => setActivePhotoIndex(idx)}
                >
                  <img src={url} alt={`प्रीतम स्पोर्ट्स फोटो ${idx + 1}`} />
                  <div className="sp-v3-gal-hover">
                    <span>🔍 HD फोटो पहा</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* LIGHTBOX POPUP MODAL (PORTAL TO DOCUMENT.BODY) */}
        {activePhotoIndex !== null && typeof document !== "undefined" && createPortal(
          <div
            className="sp-v3-lb-backdrop"
            onClick={() => setActivePhotoIndex(null)}
          >
            <div
              className="sp-v3-lb-dialog"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="sp-v3-lb-close-btn"
                onClick={() => setActivePhotoIndex(null)}
              >
                ✕
              </button>

              <button
                className="sp-v3-lb-arrow left"
                onClick={() =>
                  setActivePhotoIndex((prev) =>
                    prev === null || prev === 0
                      ? sportsClub.gallery.length - 1
                      : prev - 1
                  )
                }
              >
                ‹
              </button>

              <button
                className="sp-v3-lb-arrow right"
                onClick={() =>
                  setActivePhotoIndex((prev) =>
                    prev === null || prev === sportsClub.gallery.length - 1
                      ? 0
                      : prev + 1
                  )
                }
              >
                ›
              </button>

              <div className="sp-v3-lb-media">
                <img src={sportsClub.gallery[activePhotoIndex]} alt="गॅलरी" />
              </div>

              <div className="sp-v3-lb-bottom">
                <span>
                  छायाचित्र {activePhotoIndex + 1} / {sportsClub.gallery.length}
                </span>
                <a
                  href={sportsClub.gallery[activePhotoIndex]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sp-v3-lb-link"
                >
                  HD लिंक उघडा ↗
                </a>
              </div>
            </div>
          </div>,
          document.body
        )}
      </section>

      {/* ══════════════════════════════════════════════════════════════
          4. PREMIUM CTA BANNER
         ══════════════════════════════════════════════════════════════ */}
      <section className="sp-v3-cta-section">
        <div className="sp-v3-container">
          <div className="sp-v3-cta-box">
            <h2>आजच सदस्यत्व घ्या व तंदुरुस्त राहा! 🏋️‍♂️</h2>
            <p>सांगलीतील १.५ एकर निसर्गरम्य परिसरातील सर्वात सुसज्ज स्पोर्ट्स क्लब</p>

            <div className="sp-v3-cta-socials">
              <a href={sportsClub.socials.youtube} target="_blank" rel="noopener noreferrer" className="yt">
                📺 YouTube व्हिडीओ पहा
              </a>
              <a href={sportsClub.socials.facebook} target="_blank" rel="noopener noreferrer" className="fb">
                👍 Facebook फॉलो करा
              </a>
              <a href={sportsClub.socials.instagram} target="_blank" rel="noopener noreferrer" className="ig">
                📸 Instagram पेज
              </a>
            </div>

            <div className="sp-v3-cta-direct">
              <a href={`tel:${sportsClub.phones[0]}`} className="call">
                📞 {sportsClub.phones[0]}
              </a>
              <a href={sportsClub.whatsapp} target="_blank" rel="noopener noreferrer" className="wa">
                💬 WhatsApp चौकशी करा
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SportsSection;
