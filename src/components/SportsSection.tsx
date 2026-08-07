import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import "./SportsSection.css";
import { site, sportsClub } from "../lib/site-info";

interface FacilityDetail {
  id: string;
  titleMr: string;
  titleEn: string;
  subMr: string;
  subEn: string;
  descMr: string;
  img: string;
  icon: string;
  featuresMr: string[];
  timingMr: string;
}

const facilityItems: FacilityDetail[] = [
  {
    id: "gym",
    icon: "🏋️♂️",
    titleMr: "जिम & बॉडीबिल्डिंग",
    titleEn: "Gym & Bodybuilding Studio",
    subMr: "आधुनिक उपकरणांसह प्रशिक्षित ट्रेनर्स",
    subEn: "Certified trainers with modern fitness equipment",
    descMr: "जागतिक दर्जाची फिटनेस उपकरणे, पूर्णतः वातानुकूलित परिसर आणि वैयक्तिक प्रमाणित ट्रेनर्सच्या मार्गदर्शनाखाली बॉडीबिल्डिंग व फिटनेस ट्रेनिंग.",
    img: "https://d3k88l35vy59af.cloudfront.net/A42/9663/1763184848892.jpg",
    timingMr: "सकाळी ६:०० ते रात्री ९:३०",
    featuresMr: [
      "प्रमाणित पर्सनल ट्रेनर्स",
      "वातानुकूलित (AC) प्रिमियम परिसर",
      "कार्डिओ व व्हेट ट्रेनिंग मशीन्स",
      "विशेष डायट व पोषण आहार मार्गदर्शन"
    ]
  },
  {
    id: "swimming",
    icon: "🏊♂️",
    titleMr: "स्विमिंग पूल",
    titleEn: "Olympic Standard Swimming Pool",
    subMr: "ऑलिंपिक मानकांचा स्वच्छ पूल",
    subEn: "Clean Olympic standard filtered pool",
    descMr: "ऑलिंपिक मानकांनुसार बनवलेला स्वच्छ, २५ मीटरचा शुद्ध पाण्याचा पोहण्याचा तलाव. महिला व पुरुषांसाठी सुरक्षित व स्वतंत्र बॅचेस.",
    img: "https://d3k88l35vy59af.cloudfront.net/A42/9663/1762243460172.jpg",
    timingMr: "सकाळी ६:०० ते रात्री ८:००",
    featuresMr: [
      "ऑलिंपिक स्टँडर्ड फिल्टर्ड पाणी",
      "सुरक्षा गार्ड व एक्सपर्ट लाइफगार्ड",
      "स्वतंत्र चेंजिंग रूम व हॉट शॉवर",
      "लहान मुले व बिगिनर्स साठी विशेष ट्रेनिंग"
    ]
  },
  {
    id: "badminton",
    icon: "🏸",
    titleMr: "इनडोअर बॅडमिंटन",
    titleEn: "Indoor Badminton Arena",
    subMr: "आंतरराष्ट्रीय मानकांच्या कोर्टसह",
    subEn: "International standard wooden courts",
    descMr: "लाकडी सिंथेटिक मॅटिंग व आय-प्रोटेक्ट LED लाईटिंगसह सुसज्ज इनडोअर बॅडमिंटन कोर्ट. सर्व वयोगटातील लोकांसाठी खेळण्याची व सराव करण्याची उत्तम सोय.",
    img: "https://d3k88l35vy59af.cloudfront.net/A42/9663/1763203444303.jpg",
    timingMr: "सकाळी ६:०० ते रात्री ९:००",
    featuresMr: [
      "प्र्रीमियम वूडन सिंथेटिक मॅटिंग",
      "प्रोफेशनल अँटी-ग्लेअर LED लाईटिंग",
      "रॅकेट व कॉक उपलब्ध",
      "टूर्नामेंट स्टँडर्ड कोर्ट्स"
    ]
  },
  {
    id: "pickleball",
    icon: "🏓",
    titleMr: "पिकलबॉल",
    titleEn: "Pickleball Court",
    subMr: "नवीन खेळ, मजा आणि फिटनेस",
    subEn: "Modern trending sport for total fitness",
    descMr: "जगातील सर्वात वेगाने लोकप्रिय होणारा पिकलबॉल खेळ! कुटुंबासोबत व मित्रांसोबत खेळण्यासाठी सांगलीतील भव्य पिकलबॉल कोर्ट.",
    img: "https://d3k88l35vy59af.cloudfront.net/A42/9663/1763357638128.jpg",
    timingMr: "सकाळी ६:०० ते रात्री ९:००",
    featuresMr: [
      "सांगलीतील पहिले भव्य पिकलबॉल कोर्ट",
      "सोपा व आरोग्यदायी फिटनेस खेळ",
      "पॅडल्स व बॉल्स उपलब्ध",
      "सर्व वयोगटांसाठी अत्यंत सोयीचे"
    ]
  },
  {
    id: "yoga",
    icon: "🧘",
    titleMr: "योग & ध्यान कक्ष",
    titleEn: "Yoga & Meditation Studio",
    subMr: "शारीरिक व मानसिक आरोग्य संतुलन",
    subEn: "Physical and mental health harmony",
    descMr: "शांत, प्रसन्न व निसर्गरम्य वातावरणात योगाभ्यास, प्राणायाम व ध्यानधारणा. अनुभवी योगशिक्षकांकडून दररोज सकाळी व संध्याकाळी मार्गदर्शन.",
    img: "https://d3k88l35vy59af.cloudfront.net/A42/9663/1763188841664.jpg",
    timingMr: "सकाळी ६:३० ते ९:०० व सायं. ५ ते ७",
    featuresMr: [
      "शांत व प्रसन्न वातानुकूलित हॉल",
      "प्राणायाम व योगासने वर्ग",
      "मानसिक ताणतणाव व BP मुक्ती",
      "ज्येष्ठ नागरिकांसाठी विशेष सोपा योगा"
    ]
  },
  {
    id: "zumba",
    icon: "💃",
    titleMr: "झुंबा & डान्स क्लास",
    titleEn: "Zumba & Fitness Dance",
    subMr: "एनर्जेटिक सेशन्स आणि प्रोफेशनल कोडिंग",
    subEn: "High energy zumba and dance workout",
    descMr: "संगीताच्या तालावर एनर्जेटिक झुंबा व फिटनेस डान्स सेशन्स. वजन नियंत्रित ठेवण्यासाठी व आनंदाने कॅलरी बर्न करण्यासाठी सर्वोत्तम उपक्रम.",
    img: "https://d3k88l35vy59af.cloudfront.net/A42/9663/1763357581614.png",
    timingMr: "सकाळी ७:०० ते ८:०० व सायं. ६ ते ७",
    featuresMr: [
      "प्रोफेशनल सर्टीफाइड झुंबा ट्रेनर्स",
      "हाय-फाय साऊंड व म्युझिक सिस्टीम",
      "मजबूत कार्डिओ वर्कआउट",
      "उत्साही व आनंदी वातावरण"
    ]
  },
  {
    id: "squash",
    icon: "🎾",
    titleMr: "स्क्वॅश कोर्ट",
    titleEn: "Squash Arena",
    subMr: "आंतरराष्ट्रीय मानकांच्या स्वच्छ कोर्ट",
    subEn: "International glass-back squash court",
    descMr: "आंतरराष्ट्रीय ग्लास-बॅक मानकांचे स्क्वॅश कोर्ट. जलद हालचाली, स्टॅमिना व उच्च फिटनेससाठी अतिशय उपयुक्त.",
    img: "https://d3k88l35vy59af.cloudfront.net/A42/9663/1763184843273.jpg",
    timingMr: "सकाळी ६:०० ते रात्री ९:००",
    featuresMr: [
      "ग्लास-बॅक आंतरराष्ट्रीय मानकांचे कोर्ट",
      "स्पेशल वूडन स्प्रंग फ्लोअरिंग",
      "रॅकेट व इक्विपमेंट सोय",
      "उच्च फिटनेस व स्टॅमिना वर्कआउट"
    ]
  },
  {
    id: "snooker",
    icon: "🎱",
    titleMr: "स्नूकर & पूल लाउंज",
    titleEn: "Snooker & Pool Lounge",
    subMr: "एकग्रता वाढवणारा स्नूकर आणि पूल टेबल",
    subEn: "Concentration boosting snooker and pool table",
    descMr: "प्रीमियम वूलन क्लोथवर आंतरराष्ट्रीय मानकांचे स्नूकर व पूल टेबल्स. वातानुकूलित लाउंजमध्ये एकाग्रता व मनोरंजनाचा आनंद.",
    img: "https://d3k88l35vy59af.cloudfront.net/A42/9663/1763357638129.jpg",
    timingMr: "सकाळी १०:०० ते रात्री ९:००",
    featuresMr: [
      "आंतरराष्ट्रीय मानकांचे स्नूकर टेबल्स",
      "प्रीमियम ८-बॉल पूल टेबल",
      "एसी लाउंज व सोफा सीटिंग",
      "मित्र-मैत्रिणींसोबत रिलॅक्सिंग वेळ"
    ]
  }
];

export const SportsSection: React.FC = () => {
  const [activeNav, setActiveNav] = useState("home");
  const [lang, setLang] = useState<"mr" | "en">("mr");
  const [selectedFacility, setSelectedFacility] = useState<FacilityDetail | null>(null);

  useEffect(() => {
    if (selectedFacility) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.body.style.height = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.height = "";
      document.documentElement.style.overflow = "";
    };
  }, [selectedFacility]);

  const toggleLang = () => setLang((l) => (l === "mr" ? "en" : "mr"));

  return (
    <div className="sp-v3-root">

      <div className="sp-container">
        {/* ══════════════════════════════════════════════════════════════
            2. HERO SECTION
           ══════════════════════════════════════════════════════════════ */}
        <section className="sp-clean-sec">
          {/* TOP PHOTO BANNER WITH AERIAL IMAGE & FLOATING BADGES */}
          <div className="sp-exact-banner-box">
            <img
              src="/images/sports_hero_bg.png"
              alt="Preetam Sports Complex Sangli Aerial View"
              className="sp-exact-banner-img"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://d3k88l35vy59af.cloudfront.net/A42/9663/1763184848892.jpg";
              }}
            />
            <div className="sp-exact-banner-overlay">
              <div className="sp-exact-top-pill">
                <span className="sp-pulse-dot">⚡</span>
                <span>महाराष्ट्रातील १.५ एकर भव्य प्रीमियम संकुल</span>
              </div>
              <h1 className="sp-exact-banner-title">
                प्रीतम स्पोर्ट्स अँड फिटनेस क्लब
                <br />
                <span className="sp-title-highlight">• सांगली</span>
              </h1>
            </div>
          </div>

          {/* MIDDLE CHIPS ROW */}
          <div className="sp-exact-chips-row">
            <div className="sp-exact-chip"><span className="sp-exact-chip-icon">🏋️♂️</span> जिम व बॉडीबिल्डिंग</div>
            <div className="sp-exact-chip"><span className="sp-exact-chip-icon">🏊♂️</span> पोहणे</div>
            <div className="sp-exact-chip"><span className="sp-exact-chip-icon">🏸</span> बॅडमिंटन</div>
            <div className="sp-exact-chip"><span className="sp-exact-chip-icon">🏓</span> पिकलबॉल</div>
            <div className="sp-exact-chip"><span className="sp-exact-chip-icon">🧘</span> योग व मेडिटेशन</div>
            <div className="sp-exact-chip"><span className="sp-exact-chip-icon">💃</span> झुंबा व डान्स</div>
            <div className="sp-exact-chip"><span className="sp-exact-chip-icon">🎾</span> स्क्वॅश</div>
          </div>

        </section>

        {/* ══════════════════════════════════════════════════════════════
            3. "आमच्या सुविधा" 8 CARDS GRID
           ══════════════════════════════════════════════════════════════ */}
        <section className="sp-facilities-sec">
          <div className="sp-sec-header">
            <div className="sp-sec-badge">✨ प्रिमियम सोयी सुविधा</div>
            <h2 className="sp-sec-title-center">आमच्या सुविधा (विस्तृत माहितीसाठी कार्डवर क्लिक करा)</h2>
            <p className="sp-sec-subtitle">प्रीतम स्पोर्ट्स क्लबमधील जागतिक दर्जाच्या क्रीडा व फिटनेस सुविधा</p>
          </div>

          <div className="sp-facilities-grid">
            {facilityItems.map((item) => {
              const isActive = selectedFacility?.id === item.id;
              return (
                <div
                  key={item.id}
                  className={`sp-fac-card-v2 ${isActive ? "active-card" : ""}`}
                  onClick={() => setSelectedFacility(item)}
                  role="button"
                  tabIndex={0}
                >
                  <div className="sp-fac-img-box">
                    <img
                      src={item.img}
                      alt={item.titleMr}
                      className="sp-fac-img"
                    />
                    <span className="sp-fac-badge-overlay">{item.icon} क्लिक करा</span>
                  </div>
                  <div className="sp-fac-body">
                    <div>
                      <div className="sp-fac-info-title">{item.titleMr}</div>
                      <div className="sp-fac-info-sub">{item.subMr}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            FACILITY DETAIL POPUP MODAL
           ══════════════════════════════════════════════════════════════ */}
        {selectedFacility &&
          createPortal(
            <div
              className="sp-modal-overlay"
              onClick={() => setSelectedFacility(null)}
              onWheel={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.stopPropagation()}
            >
              <div className="sp-modal-container" onClick={(e) => e.stopPropagation()}>
                <button
                  className="sp-modal-close-btn"
                  onClick={() => setSelectedFacility(null)}
                  title="बंद करा"
                >
                  ✕
                </button>

                <div className="sp-modal-hero-img-box">
                  <img
                    src={selectedFacility.img}
                    alt={selectedFacility.titleMr}
                    className="sp-modal-hero-img"
                  />
                  <div className="sp-modal-hero-badge">
                    <span>{selectedFacility.icon}</span>
                    <span>{selectedFacility.titleMr}</span>
                  </div>
                </div>

                <div className="sp-modal-content">
                  <div className="sp-modal-header">
                    <h3 className="sp-modal-title">
                      {selectedFacility.icon} {selectedFacility.titleMr}
                    </h3>
                    <div className="sp-modal-timing">
                      ⏰ उपलब्ध वेळ: <strong>{selectedFacility.timingMr}</strong>
                    </div>
                  </div>

                  <p className="sp-modal-desc">{selectedFacility.descMr}</p>

                  <div className="sp-modal-features-sec">
                    <h4 className="sp-modal-features-title">✨ मुख्य वैशिष्ट्ये व सोयी:</h4>
                    <ul className="sp-modal-features-list">
                      {selectedFacility.featuresMr.map((feat, idx) => (
                        <li key={idx} className="sp-modal-feat-item">
                          <span className="sp-feat-check">✔</span> {feat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="sp-modal-actions">
                    <a
                      href={`tel:${sportsClub.phones[0]}`}
                      className="sp-modal-btn-call"
                    >
                      📞 आजच बुकिंग करा
                    </a>
                    <a
                      href={`${sportsClub.whatsapp}&text=मला%20${encodeURIComponent(
                        selectedFacility.titleMr
                      )}%20बद्दल%20अधिक%20माहिती%20हवी%20आहे.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sp-modal-btn-wa"
                    >
                      💬 WhatsApp वर चौकशी करा
                    </a>
                  </div>
                </div>
              </div>
            </div>,
            document.body
          )}

        {/* ══════════════════════════════════════════════════════════════
            4. "आरोग्य, फिटनेस आणि आनंदाचा एकत्रित प्रवास!" GRID
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
              <a href={`tel:${sportsClub.phones[0]}`} className="sp-btn-pink-hero">
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

    </div>
  );
};

export default SportsSection;
