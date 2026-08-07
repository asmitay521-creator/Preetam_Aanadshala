import React, { useState } from "react";
import { 
  Puzzle, 
  Palette, 
  Music, 
  Monitor, 
  Ticket, 
  Waves, 
  Landmark,
  Users,
  ShieldCheck,
  Heart,
  Award
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import "./ActivityHallsSection.css";

const hallsData = [
  {
    id: "01",
    title: "बौद्धिक खेळ हॉल",
    desc: "चेस, कॅरम, बुद्धिबळ यांसारख्या खेळांसाठी सुंदर आणि आरामदायक हॉल.",
    icon: <Puzzle size={28} />,
    image: "/images/subimg/baithe khel.png",
    theme: "theme-pink"
  },
  {
    id: "02",
    title: "आर्ट हॉल",
    desc: "चित्रकला, हस्तकला आणि सर्जनशील उपक्रमांसाठी प्रेरणादायी जागा.",
    icon: <Palette size={28} />,
    image: "/images/subimg/aart hall.png",
    theme: "theme-blue"
  },
  {
    id: "03",
    title: "संगीत उपकरणे हॉल",
    desc: "तबला, गिटार, हार्मोनियम, पेटी, गिटारी, सॅक्सोफोन, बासरी शिकण्याचे आनंद घेणे.",
    icon: <Music size={28} />,
    image: "/images/subimg/sangit hall.png",
    theme: "theme-pink"
  },
  {
    id: "04",
    title: "माहिती तंत्रज्ञान हॉल",
    desc: "कंप्युटर आणि इंटरनेटचा वापर शिकण्यासाठी अत्याधुनिक हॉल.",
    icon: <Monitor size={28} />,
    image: "/images/subimg/mahiti tantradyan hall.png",
    theme: "theme-blue"
  },
  {
    id: "05",
    title: "करमणूक हॉल",
    desc: "चित्रपट, कार्यक्रम आणि मनोरंजन उपक्रमांसाठी खास हॉल.",
    icon: <Ticket size={28} />,
    image: "/images/subimg/karmnuk hall.png",
    theme: "theme-purple"
  },
  {
    id: "06",
    title: "स्विमिंग पूल",
    desc: "आरोग्य आणि फिटनेससाठी सुरक्षित आणि स्वच्छ स्विमिंग पूल.",
    icon: <Waves size={28} />,
    image: "/images/subimg/swimming hall.png",
    theme: "theme-blue"
  },
  {
    id: "07",
    title: "संस्कार व संवाद हॉल",
    desc: "धार्मिक, सांस्कृतिक आणि सामूहिक उपक्रमांसाठी पवित्र आणि शांत हॉल.",
    icon: <Landmark size={28} />,
    image: "/images/subimg/sanskar sampraday hall.png",
    theme: "theme-pink"
  }
];

const ActivityHallsSection = () => {
  return (
    <section className="ah-section" id="activity-halls">
      
      {/* Header */}
      <Reveal>
        <div className="ah-header">
          {/* Left Badge */}
          <div className="ah-badge-left">
            <Users size={60} color="white" />
          </div>
          
          {/* Right Badge */}
          <div className="ah-badge-right">
            <Award size={30} />
            <span>आनंद, आरोग्य<br/>आणि संस्कार<br/>यांचा संगम</span>
          </div>

          <div className="ah-header-subtitle">
            <span style={{ color: '#f472b6' }}>❖</span> आनंदशाळेतील <span style={{ color: '#f472b6' }}>❖</span>
          </div>
          <h2 className="ah-header-title">
            १५ विशेष <span className="blue-text">उपक्रम हॉल्स</span>
          </h2>
          <div className="ah-header-desc">
            आनंदशाळेत दररोज तुमच्या आवडीनुसार मनोरंजक आनंद घेता येईल असे 15 समृद्ध आणि सुसज्ज हॉल्स!
          </div>
        </div>
      </Reveal>

      <div className="ah-container">
        {/* Grid of Cards */}
        <div className="ah-grid">
          {hallsData.map((hall, index) => (
            <Reveal key={hall.id} delay={index * 100}>
              <div className={`ah-card ${hall.theme}`}>
                <div className="ah-card-inner">
                  {/* Front Side */}
                  <div className="ah-card-front">
                    <div className="ah-card-num">{hall.id}</div>
                    <div className="ah-card-img-wrapper">
                      <img src={hall.image} alt={hall.title} className="ah-card-img" />
                    </div>
                    <div className="ah-card-content">
                      <div className="ah-card-icon">{hall.icon}</div>
                      <h3 className="ah-card-title">{hall.title}</h3>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className="ah-card-back">
                    <div className="ah-card-icon relative top-0 left-0 mb-4 mx-auto" style={{ position: 'relative' }}>
                      {hall.icon}
                    </div>
                    <h3 className="ah-card-title mb-4">{hall.title}</h3>
                    <p className="ah-card-desc text-white">{hall.desc}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Features Strip */}
        <Reveal delay={300}>
          <div className="ah-features-strip">
            <div className="ah-feature-item">
              <div className="ah-feature-icon"><Users size={20}/></div>
              सर्व वयोगटांसाठी<br/>उपयुक्त
            </div>
            <div className="ah-feature-item">
              <div className="ah-feature-icon"><ShieldCheck size={20}/></div>
              सुरक्षित आणि<br/>सुसज्ज सुविधा
            </div>
            <div className="ah-feature-item">
              <div className="ah-feature-icon"><Heart size={20}/></div>
              आरोग्य, आनंद आणि<br/>संस्कारांचा संगम
            </div>
            <div className="ah-feature-item">
              <div className="ah-feature-icon"><Award size={20}/></div>
              अनुभवी आणि<br/>समर्पित टीम
            </div>
          </div>
        </Reveal>

        {/* Footer Banner */}
        <Reveal delay={400}>
          <div className="ah-footer-banner">
            आजच भेट द्या आणि आनंदशाळेचा अनुभव घ्या!
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default ActivityHallsSection;
