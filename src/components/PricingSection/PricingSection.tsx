import React from "react";
import { Check, Lightbulb } from "lucide-react";
import "./PricingSection.css";
import { Reveal } from "@/components/site/Reveal"; // Assuming Reveal is available here based on other sections

const roomData = [
  {
    id: "01",
    title: "थ्री शेअरिंग रूम",
    theme: "theme-pink",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ps-card-header-icon">
        <path d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v9" />
      </svg>
    ),
    subtitle: "११ ते ५ आनंदशाळा + २ वेळ चहा, नाश्ता, जेवण",
    features: [
      "प्लायवूड बेड ३ बेड",
      "प्लायवूड ३ कपाट",
      "योग वैयक्तिक मिरर शोकेस",
      "एअर कूलर ६",
      "टी.व्ही. ३",
      "२ खुर्ची",
      "१ आराम खुर्ची",
      "नाईट लाईट",
      "मॅट्रेस ३",
      "२ बदली",
      "२ मग",
      "स्टूल १",
      "छोटी बादली १",
      "कपडे वाळवण्याचे स्टँड",
      "स्लिपर १",
      "पाय पुसणी ३",
      "इस्त्री डीन"
    ],
    monthlyPrice: "₹13,200 + GST",
    yearlyPrice: "₹132000 /-"
  },
  {
    id: "02",
    title: "रेग्युलर रूम",
    theme: "theme-teal",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ps-card-header-icon">
        <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
        <rect width="18" height="18" x="3" y="4" rx="2" />
        <circle cx="12" cy="10" r="2" />
      </svg>
    ),
    subtitle: "११ ते ५ आनंदशाळा + २ वेळ चहा, नाश्ता, जेवण",
    features: [
      "प्लायवूड बेड २",
      "प्लायवूड कपाट २",
      "योग वैयक्तिक मिरर शोकेस",
      "खुर्ची २",
      "आराम खुर्ची १",
      "लाकडी टेबल १",
      "फ्लॉवर पॉट १",
      "एअर कूलर ६",
      "टी.व्ही. २",
      "२ बदली",
      "२ मग",
      "स्टूल १",
      "छोटी बादली १",
      "कपडे वाळवण्याचे स्टँड",
      "स्लिपर १",
      "पाय पुसणी ३",
      "इस्त्री डीन"
    ],
    monthlyPrice: "₹14,400 + GST",
    yearlyPrice: "₹144000 /-"
  },
  {
    id: "03",
    title: "डिलक्स रूम",
    theme: "theme-orange",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ps-card-header-icon">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    subtitle: "११ ते ५ आनंदशाळा + २ वेळ चहा, नाश्ता, जेवण",
    features: [
      "प्लायवूड डबल बेड",
      "प्लायवूड कपाट २",
      "योग वैयक्तिक मिरर शोकेस",
      "खुर्ची २",
      "आराम खुर्ची १",
      "काचेचा टीपॉय १",
      "फ्लॉवर पॉट १",
      "एअर कूलर ६",
      "टी.व्ही. २",
      "२ बदली",
      "२ मग",
      "स्टूल १",
      "छोटी बादली १",
      "कपडे वाळवण्याचे स्टँड",
      "स्लिपर १",
      "पाय पुसणी ३",
      "इस्त्री डीन"
    ],
    monthlyPrice: "₹15,600 + GST",
    yearlyPrice: "₹156000 /-"
  },
  {
    id: "04",
    title: "प्रीमियर रूम",
    theme: "theme-purple",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ps-card-header-icon">
        <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      </svg>
    ),
    subtitle: "११ ते ५ आनंदशाळा + २ वेळ चहा, नाश्ता, जेवण",
    features: [
      "बेडरूम सेट (डबल बेड १)",
      "वॉर्डरोब १",
      "टी.व्ही. शोकेस कपाट १",
      "टीपॉय काचेचा",
      "फॅन्सी टिव्हींग १",
      "योग वैयक्तिक मिरर शोकेस",
      "खुर्ची २",
      "आराम खुर्ची १",
      "काचेचा टीपॉय १",
      "फ्लॉवर पॉट १",
      "एअर कूलर ६",
      "टी.व्ही. २",
      "कपडे वाळवण्याचे स्टँड",
      "स्लिपर १",
      "पाय पुसणी ३"
    ],
    monthlyPrice: "₹16,400 + GST",
    yearlyPrice: "₹164000 /-"
  }
];

const PricingSection = () => {
  return (
    <section className="ps-section" id="pricing">
      
      <div className="ps-header">
        <Reveal>
          <h2 className="ps-title">प्रीतम ज्येष्ठ नागरिक आनंदशाळा - प्रतिव्यक्ती मासिक शुल्क</h2>
        </Reveal>
      </div>

      <div className="ps-grid">
        {roomData.map((room, index) => (
          <Reveal key={room.id} delay={index * 100}>
            <div className={`ps-card ${room.theme}`}>
              <div className="ps-card-inner">
                <div className="ps-card-header">
                  <div className="ps-card-num">{room.id}</div>
                  <h3 className="ps-card-title">{room.title}</h3>
                  {room.icon}
                </div>
                
                <div className="ps-card-subtitle">{room.subtitle}</div>
                
                <div className="ps-ribbon">समाविष्ट सुविधा</div>
                
                <ul className="ps-features">
                  {room.features.map((feature, idx) => (
                    <li key={idx} className="ps-feature-item">
                      <Check className="ps-feature-icon" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="ps-price-box">
                  <div className="ps-price-monthly">एकूण मासिक शुल्क {room.monthlyPrice}</div>
                </div>
                <div className="ps-price-yearly">वार्षिक शुल्क {room.yearlyPrice}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

    </section>
  );
};

export default PricingSection;
