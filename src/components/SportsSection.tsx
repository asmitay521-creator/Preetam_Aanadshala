import React, { useState } from "react";
import "./SportsSection.css";
import { site, sportsClub } from "../lib/site-info";

export const SportsSection: React.FC = () => {
  const [activeNav, setActiveNav] = useState("home");
  const [lang, setLang] = useState<"mr" | "en">("mr");

  const toggleLang = () => setLang((l) => (l === "mr" ? "en" : "mr"));

  return (
    <div className="sp-v3-root">

      <div className="sp-container">
        {/* ══════════════════════════════════════════════════════════════
            2. HERO SECTION
           ══════════════════════════════════════════════════════════════ */}
        <section className="sp-hero-sec">
          <div className="sp-hero-grid">
            {/* LEFT COLUMN */}
            <div>
              <div className="sp-hero-pill-badge">
                <span>🏵️ सांगलीतील १.५ एकर भव्य क्रीडा व फिटनेस संकुल</span>
              </div>

              <h1 className="sp-hero-main-title">
                <span className="sp-txt-navy">प्रीतम स्पोर्ट्स</span>
                <span className="sp-txt-magenta">अँड फिटनेस क्लब</span>
                <span className="sp-txt-navy">सांगली</span>
              </h1>

              <div className="sp-hero-bullets">
                <div>• जिम • बॉडीबिल्डिंग • स्विमिंग पूल • इनडोअर बॅडमिंटन • पिकलबॉल</div>
                <div>• योगा • झुंबा • डान्स • स्क्वॅश — एकाच छताखाली आरोग्याचा नवा अध्याय!</div>
              </div>

              <div className="sp-hero-action-btns">
                <a href={`tel:${sportsClub.phones[0]}`} className="sp-btn-pink-hero">
                  📞 आजच प्रवेश घ्या
                </a>
                <a
                  href={sportsClub.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sp-btn-white-hero"
                >
                  💬 WhatsApp चौकशी
                </a>
              </div>

              {/* MINI STATS ROW */}
              <div className="sp-mini-stats-row">
                <div className="sp-mini-stat">🏆 10K+ सदस्य परिवार</div>
                <div className="sp-mini-stat">🏋️ 15+ वैविध्यपूर्ण उपक्रम</div>
                <div className="sp-mini-stat">📍 1.5 एकर भव्य संकुल</div>
                <div className="sp-mini-stat">⏰ 6AM - 10PM उपलब्ध</div>
                <div className="sp-mini-stat">🛡️ 100% सुरक्षित व स्वच्छ</div>
              </div>
            </div>

            {/* RIGHT COLUMN BUILDING ARCH FRAME */}
            <div className="sp-hero-right-container">
              <div className="sp-hero-building-frame">
                <img
                  src="/preetam_sports.png"
                  alt="Preetam Sports & Fitness Building"
                  className="sp-hero-building-img"
                  onError={(e) => {
                    // Fallback to online sports building image if local image fails
                    (e.target as HTMLImageElement).src =
                      "https://d3k88l35vy59af.cloudfront.net/A42/9663/1763184848892.jpg";
                  }}
                />
              </div>

              {/* UNITED DARK BLUE CAPSULE GLASS BAR (EXACT MATCH FOR IMAGE 2) */}
              <div className="sp-hero-overlay-bar">
                <div className="sp-overlay-item">
                  <div
                    className="sp-overlay-icon-box"
                    style={{ background: "#FFDFEC", color: "#E60067" }}
                  >
                    🏆
                  </div>
                  <div className="sp-overlay-title">प्रोफेशनल ट्रेनर्स</div>
                  <div className="sp-overlay-desc">प्रमाणित व अनुभवी ट्रेनर्स मार्गदर्शन</div>
                </div>

                <div className="sp-overlay-item">
                  <div
                    className="sp-overlay-icon-box"
                    style={{ background: "#E0F2FE", color: "#0284C7" }}
                  >
                    ⚡
                  </div>
                  <div className="sp-overlay-title">अत्याधुनिक उपकरणे</div>
                  <div className="sp-overlay-desc">जागतिक दर्जाची फिटनेस मशीन्स</div>
                </div>

                <div className="sp-overlay-item">
                  <div
                    className="sp-overlay-icon-box"
                    style={{ background: "#F3E8FF", color: "#9333EA" }}
                  >
                    🧘
                  </div>
                  <div className="sp-overlay-title">योगा & झुंबा क्लास</div>
                  <div className="sp-overlay-desc">शारीरिक व मानसिक आरोग्य संतुलन</div>
                </div>

                <div className="sp-overlay-item">
                  <div
                    className="sp-overlay-icon-box"
                    style={{ background: "#E0F2FE", color: "#0284C7" }}
                  >
                    🏊
                  </div>
                  <div className="sp-overlay-title">स्विमिंग पूल</div>
                  <div className="sp-overlay-desc">ऑलिंपिक मानकांचा स्वच्छ पूल</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            3. "आमच्या सुविधा" 8 CARDS GRID
           ══════════════════════════════════════════════════════════════ */}
        <section className="sp-facilities-sec">
          <div className="sp-sec-title-center">आमच्या सुविधा</div>

          <div className="sp-facilities-grid">
            {/* CARD 1: GYM */}
            <div className="sp-fac-card-v2">
              <div className="sp-fac-img-box">
                <img
                  src="https://d3k88l35vy59af.cloudfront.net/A42/9663/1763184848892.jpg"
                  alt="Gym"
                  className="sp-fac-img"
                />
              </div>
              <div className="sp-fac-body">
                <div>
                  <div className="sp-fac-info-title">जिम & बॉडीबिल्डिंग</div>
                  <div className="sp-fac-info-sub">आधुनिक उपकरणांसह प्रशिक्षित ट्रेनर्स</div>
                </div>
                <button className="sp-fac-arrow-btn">→</button>
              </div>
            </div>

            {/* CARD 2: SWIMMING POOL */}
            <div className="sp-fac-card-v2">
              <div className="sp-fac-img-box">
                <img
                  src="https://d3k88l35vy59af.cloudfront.net/A42/9663/1762243460172.jpg"
                  alt="Swimming Pool"
                  className="sp-fac-img"
                />
              </div>
              <div className="sp-fac-body">
                <div>
                  <div className="sp-fac-info-title">स्विमिंग पूल</div>
                  <div className="sp-fac-info-sub">ऑलिंपिक मानकांचा स्वच्छ पूल</div>
                </div>
                <button className="sp-fac-arrow-btn">→</button>
              </div>
            </div>

            {/* CARD 3: BADMINTON */}
            <div className="sp-fac-card-v2">
              <div className="sp-fac-img-box">
                <img
                  src="https://d3k88l35vy59af.cloudfront.net/A42/9663/1763203444303.jpg"
                  alt="Badminton"
                  className="sp-fac-img"
                />
              </div>
              <div className="sp-fac-body">
                <div>
                  <div className="sp-fac-info-title">इनडोअर बॅडमिंटन</div>
                  <div className="sp-fac-info-sub">आंतरराष्ट्रीय मानकांच्या कोर्टसह</div>
                </div>
                <button className="sp-fac-arrow-btn">→</button>
              </div>
            </div>

            {/* CARD 4: PICKLEBALL */}
            <div className="sp-fac-card-v2">
              <div className="sp-fac-img-box">
                <img
                  src="https://d3k88l35vy59af.cloudfront.net/A42/9663/1763357638128.jpg"
                  alt="Pickleball"
                  className="sp-fac-img"
                />
              </div>
              <div className="sp-fac-body">
                <div>
                  <div className="sp-fac-info-title">पिकलबॉल</div>
                  <div className="sp-fac-info-sub">नवीन खेळ, मजा आणि फिटनेस</div>
                </div>
                <button className="sp-fac-arrow-btn">→</button>
              </div>
            </div>

            {/* CARD 5: YOGA */}
            <div className="sp-fac-card-v2">
              <div className="sp-fac-img-box">
                <img
                  src="https://d3k88l35vy59af.cloudfront.net/A42/9663/1763188841664.jpg"
                  alt="Yoga"
                  className="sp-fac-img"
                />
              </div>
              <div className="sp-fac-body">
                <div>
                  <div className="sp-fac-info-title">योग & ध्यान कक्ष</div>
                  <div className="sp-fac-info-sub">शारीरिक व मानसिक आरोग्य संतुलन</div>
                </div>
                <button className="sp-fac-arrow-btn">→</button>
              </div>
            </div>

            {/* CARD 6: ZUMBA */}
            <div className="sp-fac-card-v2">
              <div className="sp-fac-img-box">
                <img
                  src="https://d3k88l35vy59af.cloudfront.net/A42/9663/1763357581614.png"
                  alt="Zumba"
                  className="sp-fac-img"
                />
              </div>
              <div className="sp-fac-body">
                <div>
                  <div className="sp-fac-info-title">झुंबा & डान्स क्लास</div>
                  <div className="sp-fac-info-sub">एनर्जेटिक सेशन्स आणि प्रोफेशनल कोडिंग</div>
                </div>
                <button className="sp-fac-arrow-btn">→</button>
              </div>
            </div>

            {/* CARD 7: SQUASH */}
            <div className="sp-fac-card-v2">
              <div className="sp-fac-img-box">
                <img
                  src="https://d3k88l35vy59af.cloudfront.net/A42/9663/1763184843273.jpg"
                  alt="Squash"
                  className="sp-fac-img"
                />
              </div>
              <div className="sp-fac-body">
                <div>
                  <div className="sp-fac-info-title">स्क्वॅश कोर्ट</div>
                  <div className="sp-fac-info-sub">आंतरराष्ट्रीय मानकांच्या स्वच्छ कोर्ट</div>
                </div>
                <button className="sp-fac-arrow-btn">→</button>
              </div>
            </div>

            {/* CARD 8: SNOOKER */}
            <div className="sp-fac-card-v2">
              <div className="sp-fac-img-box">
                <img
                  src="https://d3k88l35vy59af.cloudfront.net/A42/9663/1763357638129.jpg"
                  alt="Snooker"
                  className="sp-fac-img"
                />
              </div>
              <div className="sp-fac-body">
                <div>
                  <div className="sp-fac-info-title">स्नूकर & पूल लाउंज</div>
                  <div className="sp-fac-info-sub">एकग्रता वाढवणारा स्नूकर आणि पूल टेबल</div>
                </div>
                <button className="sp-fac-arrow-btn">→</button>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            4. MAGENTA GRADIENT STATS BANNER
           ══════════════════════════════════════════════════════════════ */}
        <section className="sp-gradient-stats-banner">
          <div className="sp-banner-stat">
            <div className="sp-banner-stat-icon">👥</div>
            <div>
              <div className="sp-banner-stat-val">10K+</div>
              <div className="sp-banner-stat-lbl">सदस्य परिवार</div>
            </div>
          </div>

          <div className="sp-banner-stat">
            <div className="sp-banner-stat-icon">🏢</div>
            <div>
              <div className="sp-banner-stat-val">15+</div>
              <div className="sp-banner-stat-lbl">वैविध्यपूर्ण उपक्रम</div>
            </div>
          </div>

          <div className="sp-banner-stat">
            <div className="sp-banner-stat-icon">📍</div>
            <div>
              <div className="sp-banner-stat-val">15 एकर</div>
              <div className="sp-banner-stat-lbl">भव्य संकुल परिसर</div>
            </div>
          </div>

          <div className="sp-banner-stat">
            <div className="sp-banner-stat-icon">⏰</div>
            <div>
              <div className="sp-banner-stat-val">6AM - 10PM</div>
              <div className="sp-banner-stat-lbl">सुविधा उपलब्ध</div>
            </div>
          </div>

          <div className="sp-banner-stat">
            <div className="sp-banner-stat-icon">🛡️</div>
            <div>
              <div className="sp-banner-stat-val">100%</div>
              <div className="sp-banner-stat-lbl">सुरक्षित व स्वच्छ</div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            5. "आरोग्य, फिटनेस आणि आनंदाचा एकत्रित प्रवास!" GRID
           ══════════════════════════════════════════════════════════════ */}
        <section className="sp-journey-sec">
          <div className="sp-journey-grid">
            {/* LEFT CONTENT */}
            <div>
              <div className="sp-journey-badge">⭐ संगीताच्या तालावर</div>
              <h2 className="sp-journey-title">
                आरोग्य, फिटनेस आणि आनंदाचा एकत्रित प्रवास!
              </h2>
              <p className="sp-journey-sub">
                प्रीतम स्पोर्ट्स अँड फिटनेस क्लब, सांगली तुमचं स्वागत आहे.
              </p>
              <a href={`tel:${sportsClub.phones[0]}`} className="sp-btn-hero-pink">
                आजच प्रवेश घ्या →
              </a>
            </div>

            {/* RIGHT 6 PHOTO COLLAGE */}
            <div className="sp-photo-collage">
              <div className="sp-collage-img-box">
                <img
                  src="https://d3k88l35vy59af.cloudfront.net/A42/9663/1762243460172.jpg"
                  alt="Pool"
                />
              </div>
              <div className="sp-collage-img-box">
                <img
                  src="https://d3k88l35vy59af.cloudfront.net/A42/9663/1763184848892.jpg"
                  alt="Gym"
                />
              </div>
              <div className="sp-collage-img-box">
                <img
                  src="https://d3k88l35vy59af.cloudfront.net/A42/9663/1763188841664.jpg"
                  alt="Yoga"
                />
              </div>
              <div className="sp-collage-img-box">
                <img
                  src="https://d3k88l35vy59af.cloudfront.net/A42/9663/1763203444303.jpg"
                  alt="Badminton"
                />
              </div>
              <div className="sp-collage-img-box">
                <img
                  src="https://d3k88l35vy59af.cloudfront.net/A42/9663/1763357581614.png"
                  alt="Zumba"
                />
              </div>
              <div className="sp-collage-img-box">
                <img
                  src="https://d3k88l35vy59af.cloudfront.net/A42/9663/1763357638128.jpg"
                  alt="Track"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          6. FOOTER SECTION
         ══════════════════════════════════════════════════════════════ */}
      <footer className="sp-footer">
        <div className="sp-container">
          <div className="sp-footer-grid">
            {/* BRAND */}
            <div>
              <div className="sp-footer-brand-title">🏆 PREETAM® Est. 2025 • सांगली</div>
              <p className="sp-footer-brand-desc">
                सांगलीतील १.५ एकर भव्य क्रीडा व फिटनेस संकुल — एकाच छताखाली आरोग्याचा नवा अध्याय!
              </p>
            </div>

            {/* QUICK LINKS */}
            <div>
              <div className="sp-footer-col-title">द्रुत दुवे</div>
              <div className="sp-footer-links">
                <a href="#" className="sp-footer-link">मुख्यपृष्ठ</a>
                <a href="#" className="sp-footer-link">आमच्याबद्दल</a>
                <a href="#" className="sp-footer-link">सुविधा</a>
                <a href="#" className="sp-footer-link">कार्यक्रम</a>
                <a href="#" className="sp-footer-link">गॅलरी</a>
                <a href="#" className="sp-footer-link">संपर्क</a>
              </div>
            </div>

            {/* FACILITIES */}
            <div>
              <div className="sp-footer-col-title">सुविधा</div>
              <div className="sp-footer-links">
                <a href="#" className="sp-footer-link">जिम & बॉडीबिल्डिंग</a>
                <a href="#" className="sp-footer-link">स्विमिंग पूल</a>
                <a href="#" className="sp-footer-link">बॅडमिंटन कोर्ट</a>
                <a href="#" className="sp-footer-link">योगा & ध्यान</a>
                <a href="#" className="sp-footer-link">झुंबा & डान्स</a>
                <a href="#" className="sp-footer-link">स्क्वॅश कोर्ट</a>
              </div>
            </div>

            {/* CONTACT */}
            <div>
              <div className="sp-footer-col-title">संपर्क माहिती</div>
              <div className="sp-footer-contact">
                <div>📞 9370237633</div>
                <div>✉️ preetamclub@gmail.com</div>
                <div>📍 प्रीतम स्पोर्ट्स अँड फिटनेस क्लब, सांगली, महाराष्ट्र - 416415</div>
              </div>
            </div>

            {/* MAP PREVIEW */}
            <div>
              <div className="sp-footer-col-title">आम्हाला भेट द्या!</div>
              <div className="sp-map-preview">
                📍 सांगली-मिरज रोड, सांगली
              </div>
            </div>
          </div>

          <div className="sp-footer-bottom">
            © 2025 Preetam Sports & Fitness Club. सर्व हक्क राखीव.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SportsSection;
