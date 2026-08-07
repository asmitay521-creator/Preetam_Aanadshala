import React from "react";
import { motion } from "framer-motion";
import "./AnandshalaStory.css";

import {
  Flower2,
  Landmark,
  HeartHandshake,
  Users,
  Target,
  Sparkles,
  Award,
  Trees,
  Calendar,
  Quote,
  ShieldCheck,
  Star
} from "lucide-react";

import buildingImage from "../assets/anandshala-building.png";

const AnandshalaStory: React.FC = () => {
  const pillars = [
    {
      id: "establishment",
      icon: <Landmark className="as-pillar-icon-svg" />,
      title: "स्थापना",
      subtitle: "२६ जानेवारी २००० पासून",
      image: "/images/anandashram_building_card.png",
      desc: "२६ जानेवारी २००० रोजी व्यवसायाची पायाभरणी झाली. दरवर्षी वाढदिवस दिन व भव्य नागरिक मेळावा आयोजनाची २६ वर्षांची परंपरा.",
      badge: "इतिहास व परंपरा"
    },
    {
      id: "service",
      icon: <HeartHandshake className="as-pillar-icon-svg" />,
      title: "सेवा",
      subtitle: "समर्पण आणि आपुलकी",
      image: "/images/founderimg.png",
      desc: "सेवा, संस्कार आणि उत्कृष्ट उपक्रमांची समृद्ध संस्कृती. ज्येष्ठ नागरिकांच्या उत्तम आरोग्यासाठी आणि आनंदासाठी अविरत कार्य.",
      badge: "संस्कार व आपुलकी"
    },
    {
      id: "participation",
      icon: <Users className="as-pillar-icon-svg" />,
      title: "सहभाग",
      subtitle: "एकत्र येण्याचा आनंद",
      image: "/images/aandmelava1.jpg",
      desc: "दरवर्षी विविध सोहळे व मेळाव्यात हजारो ज्येष्ठ नागरिकांचा उत्स्फूर्त सहभाग. आपुलकीचे नाते जपणारी अखंड चळवळ.",
      badge: "लोकसहभाग"
    },
    {
      id: "mission",
      icon: <Target className="as-pillar-icon-svg" />,
      title: "ध्येय",
      subtitle: "सकारात्मक जीवनशैली",
      image: "/images/sports_club_building_card.png",
      desc: "१.५ एकर निसर्गरम्य परिसरात भारतातील पहिला भव्य प्रकल्प. आयुष्याच्या प्रत्येक टप्प्यावर उत्साह व निरामय आनंद देणे हेच ध्येय.",
      badge: "उद्दिष्ट"
    }
  ];

  const stats = [
    {
      icon: <Calendar className="as-stat-icon" />,
      value: "२६+ वर्षे",
      label: "सामाजिक सेवेचा वारसा"
    },
    {
      icon: <Trees className="as-stat-icon" />,
      value: "१.५ एकर",
      label: "निसर्गरम्य परिसर"
    },
    {
      icon: <Users className="as-stat-icon" />,
      value: "हजारो",
      label: "ज्येष्ठ नागरिक सहभाग"
    },
    {
      icon: <Award className="as-stat-icon" />,
      value: "१ लाच",
      label: "भारतातील भव्य प्रकल्प"
    }
  ];

  return (
    <section className="as-redesign-wrapper" id="anandshala-story">
      {/* Background Decorative Blur & Elements */}
      <div className="as-bg-glow-1" />
      <div className="as-bg-glow-2" />

      <div className="as-container">
        
        {/* ====================================
            1. SECTION HEADER
        ==================================== */}
        <div className="as-header-section">
          <motion.div 
            className="as-badge-pill"
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles className="as-badge-icon" />
            <span>आपली परंपरा • आमची प्रेरणा</span>
          </motion.div>

          <motion.h2 
            className="as-hero-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            आनंदशाळेची <span className="as-title-gradient">प्रेरणादायी कहाणी</span>
          </motion.h2>

          <motion.div className="as-title-underline" />
        </div>

        {/* ====================================
            2. HERO STORY CONTENT & DUAL IMAGE SHOWCASE
        ==================================== */}
        <div className="as-story-grid">
          {/* Left Side: Story Text & Highlights Card with Rich Animations */}
          <motion.div 
            className="as-story-text-card"
            initial={{ opacity: 0, x: -50, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            whileHover={{ y: -6 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.div 
              className="as-card-tag"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <Flower2 className="as-flower-icon" />
              </motion.div>
              <span>स्वप्नातून साकारलेली सृष्टी</span>
            </motion.div>

            <motion.h3 
              className="as-story-subheading"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              ज्येष्ठ नागरिकांच्या जीवनात <span className="as-highlight-pink">नवा आनंद</span> पेरण्याचा ध्यास
            </motion.h3>

            <motion.p 
              className="as-story-paragraph"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              माझ्या जन्माची बीजे रुजली ती <strong>श्री. अभिनव जगन्नाथ काकाणी</strong> (ता. सांगली) यांच्या स्वप्नातून. 
              अभिनव यांनी <strong>२६ जानेवारी २०००</strong> रोजी व्यवसायाची सुरुवात केली. 
              दरवर्षी वाढदिवस दिन, स्नेहमेळावा व ज्येष्ठ नागरिक मेळावा आयोजित करून तो अत्यंत उत्साहात व प्रेमाने साजरा केला जातो.
            </motion.p>

            <motion.p 
              className="as-story-paragraph"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              ज्येष्ठ नागरिकांना हक्काचे व्यासपीठ, आरोग्यदायी वातावरण आणि विरंगुळा मिळावा या उद्देशाने सांगली शहरात 
              <strong> १.५ एकर निसर्गरम्य जागेवर </strong> हा भव्य प्रकल्प साकारला आहे.
            </motion.p>

            {/* Animated Trust Badges */}
            <div className="as-trust-pills">
              <motion.div 
                className="as-trust-item"
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                whileHover={{ scale: 1.04, y: -2, backgroundColor: "#fce7f3" }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                <ShieldCheck className="as-trust-icon" />
                <span>१००% सुरक्षित व आपुलकीचे वातावरण</span>
              </motion.div>

              <motion.div 
                className="as-trust-item"
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                whileHover={{ scale: 1.04, y: -2, backgroundColor: "#fce7f3" }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.7 }}
              >
                <Star className="as-trust-icon" />
                <span>भारतातील एकमेव अद्वितीय संकल्पना</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side: Visual Overlapping Image Showcase */}
          <motion.div 
            className="as-visual-wrapper"
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="as-image-frame-container">
              {/* Building Image */}
              <motion.div 
                className="as-main-img-box"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <img 
                  src={buildingImage} 
                  alt="प्रीतम आनंदशाळा इमारत" 
                  className="as-main-img" 
                />
                <div className="as-img-overlay-gradient" />
              </motion.div>

              {/* Overlapping Event Image with Entrance & Hover Animations */}
              <motion.div 
                className="as-overlap-img-box"
                initial={{ opacity: 0, scale: 0.8, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                whileHover={{ scale: 1.06, rotate: 1, y: -5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <img 
                  src="/images/imgever.JPG" 
                  alt="आनंदशाळा स्नेहमिलन व दीपप्रज्वलन सोहळा" 
                  className="as-overlap-img"
                  onError={(e) => { e.currentTarget.src = buildingImage; }}
                />
                <div className="as-founder-label">
                  <span className="as-founder-name">आनंदशाळा सोहळा</span>
                  <span className="as-founder-role">स्नेहमिलन व दीपप्रज्वलन</span>
                </div>
              </motion.div>

              {/* Floating Glass Badge with Continuous Motion */}
              <motion.div 
                className="as-floating-glass-badge"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                animate={{ y: [0, -10, 0], rotate: [0, 1, 0] }}
                transition={{ 
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  opacity: { duration: 0.5, delay: 0.5 },
                  scale: { duration: 0.5, delay: 0.5 }
                }}
              >
                <div className="as-glass-badge-icon">
                  <Sparkles size={20} />
                </div>
                <div className="as-glass-badge-text">
                  <strong>सांगलीचे भूषण</strong>
                  <span>सर्वोत्कृष्ट सेवा संकल्पना</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ====================================
            3. STATS STRIP
        ==================================== */}
        <motion.div 
          className="as-stats-strip"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((st, idx) => (
            <div key={idx} className="as-stat-card">
              <div className="as-stat-icon-wrapper">
                {st.icon}
              </div>
              <div className="as-stat-details">
                <h4 className="as-stat-value">{st.value}</h4>
                <p className="as-stat-label">{st.label}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* ====================================
            4. FOUR PILLARS GRID
        ==================================== */}
        <div className="as-pillars-section">
          <div className="as-pillars-header">
            <span className="as-sub-tag">आमची प्रमुख वैशिष्ट्ये</span>
            <h3 className="as-pillars-title">आनंदशाळेचे चार मुख्य स्तंभ</h3>
          </div>

          <div className="as-pillars-grid">
            {pillars.map((item, index) => (
              <motion.div
                key={item.id}
                className="as-pillar-card"
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                whileHover={{ y: -8 }}
              >
                <div className="as-pillar-img-box">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="as-pillar-img" 
                    onError={(e) => { e.currentTarget.src = buildingImage; }}
                  />
                  <div className="as-pillar-img-badge">{item.badge}</div>
                </div>

                <div className="as-pillar-body">
                  <div className="as-pillar-header-row">
                    <div className="as-pillar-icon-badge">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="as-pillar-name">{item.title}</h4>
                      <span className="as-pillar-subtitle">{item.subtitle}</span>
                    </div>
                  </div>

                  <p className="as-pillar-desc">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ====================================
            5. HEARTFELT VISION QUOTE BANNER
        ==================================== */}
        <motion.div 
          className="as-quote-banner"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Quote className="as-quote-bg-icon" />

          <div className="as-quote-content">
            <div className="as-quote-badge">
              <Flower2 size={18} />
              <span>संस्थापकांचे मनोगत</span>
            </div>

            <blockquote className="as-quote-text">
              "माणूस एकटा राहणारा, बोलणारा, नाती जपणारा असतो. पाखरे मोठी होऊन दूर देशी जातात तेव्हा मागे उरतात त्या फक्त आठवणी आणि एकांत...<br />
              याच विचारातून ही संकल्पना समोर आली – <strong>ज्येष्ठ नागरिकांसाठी एक अशी 'शाळा', जिथे रोज नवा आनंद शिकायला मिळेल.</strong>"
            </blockquote>

            <div className="as-quote-author">
              <div className="as-author-line" />
              <div>
                <h4 className="as-author-name">श्री. अभिनव जगन्नाथ काकाणी</h4>
                <p className="as-author-title">संस्थापक व मार्गदर्शक • प्रीतम आनंदशाळा, सांगली</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AnandshalaStory;

