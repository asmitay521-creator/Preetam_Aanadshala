import React from "react";
import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  Phone, 
  MapPin, 
  Flower2, 
  Car, 
  ParkingCircle, 
  UtensilsCrossed, 
  Hotel, 
  Stethoscope, 
  Activity, 
  Church, 
  Pill, 
  Waves, 
  Radio, 
  Store, 
  Dumbbell
} from "lucide-react";

import "./brochure.css";
import buildingImage from "../assets/anandshala-building.png";

const Brochure: React.FC = () => {
  return (
    <div className="brochure-page-wrapper">
      <div className="brochure-main-container">

        {/* ══════════════════════════════════════════════════════════════
            COLUMN 1 (LEFT FOLD - BRAND & FOUNDATION)
           ══════════════════════════════════════════════════════════════ */}
        <motion.div 
          className="brochure-col"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div>
            <div className="bcol-1-header">
              <div className="bcol-top-badge">
                ज्येष्ठ नागरिकांच्या निरोगी आरोग्य व आनंददायी आयुष्यासाठी आनंद प्रवेश घ्या.
              </div>
              <h1 className="bcol-main-title">
                प्रीतम ज्येष्ठ नागरिक<br/>आनंदशाळा
              </h1>
              <p className="bcol-sub-title">
                सांगलीतील भव्य, आधुनिक, सर्व सुविधायुक्त ज्येष्ठ नागरिक आनंदधाम
              </p>
            </div>

            {/* Main Building & Overlapping Founders Image */}
            <div className="bcol-hero-img-box">
              <img src={buildingImage} alt="Preetam Anandshala" className="bcol-hero-main-img" />
              <div className="bcol-founders-overlay">
                <img 
                  src="/images/founderimg.png" 
                  alt="Founders" 
                  onError={(e) => { e.currentTarget.src = buildingImage; }} 
                />
              </div>
            </div>
          </div>

          {/* Bottom Maroon Footer Block */}
          <div className="bcol-1-bottom">
            <div className="flex items-center gap-2 mb-2">
              <Flower2 size={24} className="text-pink-300" />
              <span className="font-bold text-sm text-pink-200">प्रीतम आपुलकी व जिव्हाळा ट्रस्ट</span>
            </div>
            <p className="bcol-bottom-text">
              सांगली शहरातील दीड एकर जागेवर, निसर्गाच्या वातावरणात उभा राहणारा हा भारतातील पहिलाच भव्य प्रकल्प आहे. येथे दिवसापासून ते आयुष्यभर आनंदाने राहता येते.
            </p>
          </div>
        </motion.div>

        {/* ══════════════════════════════════════════════════════════════
            COLUMN 2 (MIDDLE FOLD - GALLERY & FACILITIES)
           ══════════════════════════════════════════════════════════════ */}
        <motion.div 
          className="brochure-col"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div>
            <div className="bcol-2-top-badge">
              प्रीतम आनंदशाळा — एक आदर्श ज्येष्ठ नागरिक धाम
            </div>

            <p className="bcol-2-intro">
              माझ्या जन्माची बीजे रुजली ती श्री. अभिनव जननायक काकाणी, ता. सांगली यांच्या स्वप्नातून. अभिनव यांनी 26 जानेवारी 2000 रोजी व्यवसाय सुरू केला आणि दरवर्षी वाढदिवस दिन, <span>ज्येष्ठ नागरिक मेळावा व वाढदिवस आयोजन</span> करून तो साजरा करतात.
            </p>

            {/* 6 Photo Grid */}
            <div className="bcol-photo-grid">
              <div className="bcol-photo-item">
                <img src="/images/aandshala sahal 1.jpeg" alt="आरोग्यदायी जीवनशैली" onError={(e) => { e.currentTarget.src = buildingImage; }} />
                <div className="bcol-photo-label">आरोग्यदायी जीवनशैली</div>
              </div>
              <div className="bcol-photo-item">
                <img src="/images/aandmelava1.jpg" alt="स्नेह, संवाद व सहवास" onError={(e) => { e.currentTarget.src = buildingImage; }} />
                <div className="bcol-photo-label">स्नेह, संवाद व सहवास</div>
              </div>
              <div className="bcol-photo-item">
                <img src="/images/aandmelava4.jpg" alt="खेळ, व्यायाम" onError={(e) => { e.currentTarget.src = buildingImage; }} />
                <div className="bcol-photo-label">खेळ, व्यायाम व मनोरंजन</div>
              </div>
              <div className="bcol-photo-item">
                <img src="/images/samajik karya 2.jpeg" alt="सांस्कृतिक उपक्रम" onError={(e) => { e.currentTarget.src = buildingImage; }} />
                <div className="bcol-photo-label">सांस्कृतिक व शैक्षणिक उपक्रम</div>
              </div>
              <div className="bcol-photo-item">
                <img src="/images/vyavsaik mahiti 1.jpeg" alt="सुरक्षित आयुष्य" onError={(e) => { e.currentTarget.src = buildingImage; }} />
                <div className="bcol-photo-label">सुरक्षित, सन्मानपूर्वक आयुष्य</div>
              </div>
              <div className="bcol-photo-item">
                <img src="/images/vyavsaik mahiti 2.jpeg" alt="सुविधा व सेवा" onError={(e) => { e.currentTarget.src = buildingImage; }} />
                <div className="bcol-photo-label">सुविधा व सेवा</div>
              </div>
            </div>

            {/* Facilities Header */}
            <div className="bcol-section-header-red">
              आमच्याकडे उपलब्ध सुविधा
            </div>

            {/* 10 Facilities Grid */}
            <div className="bcol-facilities-grid">
              <div className="bcol-facility-box">
                <Car className="bcol-facility-icon" />
                <span className="bcol-facility-title">इलेक्ट्रिक गाडी</span>
              </div>
              <div className="bcol-facility-box">
                <ParkingCircle className="bcol-facility-icon" />
                <span className="bcol-facility-title">२,३,४ व ६ चाकी पार्किंग</span>
              </div>
              <div className="bcol-facility-box">
                <UtensilsCrossed className="bcol-facility-icon" />
                <span className="bcol-facility-title">फूड कोर्ट</span>
              </div>
              <div className="bcol-facility-box">
                <Hotel className="bcol-facility-icon" />
                <span className="bcol-facility-title">हॉटेल</span>
              </div>
              <div className="bcol-facility-box">
                <Stethoscope className="bcol-facility-icon" />
                <span className="bcol-facility-title">दवाखाना</span>
              </div>
              <div className="bcol-facility-box">
                <Activity className="bcol-facility-icon" />
                <span className="bcol-facility-title">योगासन</span>
              </div>
              <div className="bcol-facility-box">
                <Church className="bcol-facility-icon" />
                <span className="bcol-facility-title">मंदिर</span>
              </div>
              <div className="bcol-facility-box">
                <Pill className="bcol-facility-icon" />
                <span className="bcol-facility-title">मेडिकल</span>
              </div>
              <div className="bcol-facility-box">
                <Waves className="bcol-facility-icon" />
                <span className="bcol-facility-title">स्विमिंग पूल</span>
              </div>
              <div className="bcol-facility-box">
                <Radio className="bcol-facility-icon" />
                <span className="bcol-facility-title">रेडिओ थेरपी</span>
              </div>
              <div className="bcol-facility-box">
                <Store className="bcol-facility-icon" />
                <span className="bcol-facility-title">जनरल स्टोअर</span>
              </div>
              <div className="bcol-facility-box">
                <Waves className="bcol-facility-icon" />
                <span className="bcol-facility-title">भव्य स्विमिंग पूल</span>
              </div>
              <div className="bcol-facility-box">
                <Dumbbell className="bcol-facility-icon" />
                <span className="bcol-facility-title">फिटनेस कॉम्प्लेक्स</span>
              </div>
            </div>
          </div>

          {/* Bottom Dark Blue Block */}
          <div className="bcol-2-bottom">
            <div className="flex items-center gap-2 mb-1">
              <Flower2 size={20} className="text-yellow-300" />
              <span className="font-bold text-yellow-300">धार्मिक व सांस्कृतिक उपक्रम</span>
            </div>
            आनंदशाळेमध्ये सर्व धार्मिक उत्सव, सण व वाढदिवस साजरे केले जातील. आनंद शाळा, पुणे, मुंबई, महाराष्ट्र, भारतासह जगात कुठेही ठिकाणाहून आनंदाने राहण्यासाठी येऊ शकता.
          </div>
        </motion.div>

        {/* ══════════════════════════════════════════════════════════════
            COLUMN 3 (RIGHT FOLD - OBJECTIVES, RULES & CONTACT)
           ══════════════════════════════════════════════════════════════ */}
        <motion.div 
          className="brochure-col"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div>
            <div className="bcol-3-header">
              <h2 className="bcol-3-title">आनंदशाळेचे ध्येय</h2>
              <p className="bcol-3-subtitle">ज्येष्ठ नागरिकांना आनंदी, उत्साही व निरोगी जीवन सुखद अनुभवता यावा यासाठी...</p>
            </div>

            <img src={buildingImage} alt="Campus Building" className="bcol-3-img" />

            {/* Admission Checklist */}
            <div className="bcol-checklist-box">
              <h3 className="bcol-checklist-title">प्रवेश कसा घ्याल ?</h3>
              <ul className="bcol-checklist">
                <li><CheckCircle2 size={16} className="bcol-checklist-icon" /> प्रति व्यक्ती, महिन्याची, आवडीनुसार किंवा दिवसाची फी भरा.</li>
                <li><CheckCircle2 size={16} className="bcol-checklist-icon" /> ५ ते १० लाख पर्यंत फिक्स डिपॉझिट ठेऊन त्याच्या व्याजातून.</li>
                <li><CheckCircle2 size={16} className="bcol-checklist-icon" /> सभासद, नोंदणी करून इतरांमध्ये शुल्क देता: कन्फर्ट.</li>
                <li><CheckCircle2 size={16} className="bcol-checklist-icon" /> एक दिवसाचा १२ ते १५ सदर पास रू. ६००/- च्या किमतीने.</li>
                <li><CheckCircle2 size={16} className="bcol-checklist-icon" /> आनंदशाळा फंडात जमा मासिक फी रू. ११ ते १५ हजार ३०००/-.</li>
                <li><CheckCircle2 size={16} className="bcol-checklist-icon" /> आनंदविलास राहणे, नाही २, ३, ज्येष्ठ २, सखी २, आनंदशाळा मासिक फी किमान १२ हजार रुपये. *GST Extra.</li>
              </ul>
            </div>

            {/* Founder Badge */}
            <div className="bcol-founder-badge-wrapper">
              <img src="/images/founderimg.png" alt="Founder" className="bcol-founder-badge-img" onError={(e) => { e.currentTarget.src = buildingImage; }} />
              <div className="bcol-founder-badge-text">
                भारतातील पहिलेच ज्येष्ठ नागरिकांची 'आनंदशाळा'
              </div>
            </div>

            {/* Facilities Checklist */}
            <div className="bcol-checklist-box">
              <h3 className="bcol-checklist-title">आनंदशाळेतील सुविधा :</h3>
              <ul className="bcol-checklist">
                <li><CheckCircle2 size={16} className="bcol-checklist-icon" /> उत्तम-ढंग, स्पर्धा, कलागुण, वहय, गच्ची, जेवण, दवाखाना, वाचनालय, गार्डन.</li>
                <li><CheckCircle2 size={16} className="bcol-checklist-icon" /> स्विमिंग पूल, हॉटेल, जिम, टेनिस कोर्ट व इतर खेळ सुविधा.</li>
                <li><CheckCircle2 size={16} className="bcol-checklist-icon" /> टी.व्ही., थेटर, टेलिव्हिजन व व्यावसायिक माफ करा, चर्चा साधावा, उत्साही निरोगी मार्गदर्शन.</li>
                <li><CheckCircle2 size={16} className="bcol-checklist-icon" /> आपल्या कुटुंबातील सर्वांना मोहल्ल्या जवळच्या आणि आजी आजोबांना पैसे आणि सन्मान नाही तर जीवन आनंदाचे देऊ शकतो.</li>
                <li><CheckCircle2 size={16} className="bcol-checklist-icon" /> आयुष्यभरासाठी, सुखद वातावरणात व सन्मानाने राहण्याची संधी.</li>
              </ul>
            </div>
          </div>

          {/* Contact Footer */}
          <div className="bcol-3-contact-footer">
            <div className="bcol-contact-row">
              <Phone size={20} />
              <span>९९७० ५९२२३, ८९३०८ ८५५७५</span>
            </div>
            <div className="flex items-start gap-2 bcol-contact-address">
              <MapPin size={18} className="shrink-0 text-pink-400 mt-0.5" />
              <span>प्रीतम आनंदशाळा, सांगली – मिरज रोड, सांगली, महाराष्ट्र</span>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Brochure;
