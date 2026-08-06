import React from "react";
import "./HomeHero.css";
import { 
  Users, Calendar, Award, ShieldCheck, 
  ArrowRight, Landmark, Flower2, 
  Dumbbell, BookOpen, Music, Utensils, 
  Bus, HeartHandshake, CheckCircle2, 
  Clock, Stethoscope, Shield, Heart 
} from "lucide-react";

const HomeHero = () => {
  return (
    <div className="hero-section">
      <div className="hero-container">
        
        {/* TOP TWO CARDS */}
        <div className="hero-grid">
          
          {/* LEFT INFO CARD */}
          <div className="hero-left-card">
            <div className="hero-left-badge">
              <span>⭐</span> प्रीतम • भारतीय परंपरा, आधुनिक विचार
            </div>
            
            <h1 className="hero-title">
              <span className="text-dark">प्रीतम ज्येष्ठ नागरिक</span>
              <span className="text-pink">आनंदशाळा</span>
            </h1>
            
            <p className="hero-subtitle">
              ज्येष्ठ नागरिकांच्या निरोगी आरोग्य व आनंददायी आयुष्यासाठी 
              प्रेम, सेवा, सुरक्षा आणि संस्कार यांचा सुंदर संगम.
            </p>

            <div className="hero-stats-grid">
              <div className="stat-item">
                <div className="stat-icon bg-purple-light text-purple">
                  <Users size={24} />
                </div>
                <div className="stat-text">
                  <strong>500+</strong>
                  <span>समुदाय सदस्य</span>
                  <small>आमच्या परिवाराचा<br/>एक भाग</small>
                </div>
              </div>

              <div className="stat-item">
                <div className="stat-icon bg-pink-light text-pink">
                  <Calendar size={24} />
                </div>
                <div className="stat-text">
                  <strong>26/27/28</strong>
                  <span>जानेवारी 2026</span>
                  <small>मोठी सुरवात<br/>भव्य प्रवेश व मित्र मेळावा</small>
                </div>
              </div>

              <div className="stat-item">
                <div className="stat-icon bg-orange-light text-orange">
                  <Award size={24} />
                </div>
                <div className="stat-text">
                  <strong>11+</strong>
                  <span>उपक्रमांची बैठक</span>
                  <small>दर महिन्याला 5+ उपक्रम<br/>आरोग्य व आनंदासाठी</small>
                </div>
              </div>

              <div className="stat-item">
                <div className="stat-icon bg-green-light text-green">
                  <ShieldCheck size={24} />
                </div>
                <div className="stat-text">
                  <strong>सुरक्षित & आनंददायी</strong>
                  <span>स्वच्छ वातावरण, वैद्यकीय सेवा<br/>आणि अनुभवी सुविधा</span>
                </div>
              </div>
            </div>

            <div className="hero-actions">
              <a href="tel:9370237633" className="btn-contact">
                <div className="btn-contact-content">
                  <span className="btn-small-text">आजच संपर्क साधा</span>
                  <span className="btn-large-text">9370237633</span>
                  <span className="btn-tiny-text">आपल्या सुदृढ भविष्यासाठी<br/>आम्ही नेहमी तयार!</span>
                </div>
                <div className="btn-arrow-circle">
                  <ArrowRight size={20} />
                </div>
              </a>

              <a href="#sections" className="btn-department">
                <div className="btn-dept-icon">
                  <Landmark size={24} />
                </div>
                <div className="btn-dept-content">
                  <span className="btn-dept-title">विभाग निवडा</span>
                  <span className="btn-dept-desc">आपल्याला पाहिजे त्या<br/>विभागातील सर्व माहिती पहा.</span>
                </div>
                <ArrowRight size={16} className="btn-dept-arrow" />
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE CARD */}
          <div className="hero-right-card">
            <img src="/images/aandshala_img.png" alt="Anandshala Building" className="hero-bg-img" />
            <div className="hero-right-overlay">
              <div className="hero-right-content">
                <h2>आनंदी, सक्रिय आणि<br/>आदरयुक्त जीवनशैलीकडे<br/><span className="text-highlight">एक सुंदर पाऊल!</span></h2>
                <p>आरोग्य, मनोरंजन, संस्कार आणि<br/>सहवास यांचं आदर्श केंद्र.</p>
              </div>

              {/* BOTTOM STRIP IN RIGHT CARD */}
              <div className="hero-features-strip">
                <div className="feature-col">
                  <div className="feature-icon text-red">
                    <Users size={32} />
                  </div>
                  <h4>आधुनिक सुविधा</h4>
                  <p>सुविधायुक्त निवास<br/>आणि आरामदायी जीवन</p>
                </div>
                <div className="feature-col">
                  <div className="feature-icon text-blue">
                    <ShieldCheck size={32} />
                  </div>
                  <h4>सुरक्षा प्रथम</h4>
                  <p>24x7 सुरक्षा, CCTV आणि<br/>प्रशिक्षित सुरक्षा कर्मचारी</p>
                </div>
                <div className="feature-col">
                  <div className="feature-icon text-green">
                    <Stethoscope size={32} />
                  </div>
                  <h4>आरोग्याची काळजी</h4>
                  <p>वैद्यकीय सेवा, नियमित तपासणी<br/>आणि आरोग्य सल्ला</p>
                </div>
                <div className="feature-col">
                  <div className="feature-icon text-orange">
                    <Users size={32} />
                  </div>
                  <h4>मनोरंजन व संस्कृती</h4>
                  <p>योगा, भजन, कला, वाचनालय<br/>आणि सहली</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* MIDDLE ACTIVITIES STRIP */}
        <div className="activities-strip">
          <div className="activities-title">
            <h3>आनंदी जीवनाचे</h3>
            <h3>सुंदर क्षण</h3>
            <Flower2 className="title-icon" size={24} />
          </div>
          
          <div className="activities-list">
            <div className="activity-item">
              <Flower2 size={28} className="text-pink" />
              <h4>योगा & ध्यान</h4>
              <p>शारीरिक व मानसिक<br/>आरोग्यासाठी</p>
            </div>
            <div className="activity-item">
              <Dumbbell size={28} className="text-blue" />
              <h4>फिटनेस सेंटर</h4>
              <p>नियमित व्यायाम<br/>निरोगी शरीर, निरोगी मन</p>
            </div>
            <div className="activity-item">
              <BookOpen size={28} className="text-orange" />
              <h4>वाचनालय</h4>
              <p>ज्ञान, वाचन आणि<br/>विचारांची देवाणघेवाण</p>
            </div>
            <div className="activity-item">
              <Music size={28} className="text-purple" />
              <h4>संगीत & कला</h4>
              <p>संगीत, नृत्य व कला<br/>उपक्रम</p>
            </div>
            <div className="activity-item">
              <Utensils size={28} className="text-green" />
              <h4>स्वादिष्ट भोजन</h4>
              <p>पौष्टिक व स्वादिष्ट<br/>आहार व्यवस्था</p>
            </div>
            <div className="activity-item">
              <Bus size={28} className="text-blue-light" />
              <h4>सहली & प्रवास</h4>
              <p>निसर्ग सहली आणि धार्मिक<br/>स्थळांना भेटी</p>
            </div>
            <div className="activity-item">
              <HeartHandshake size={28} className="text-red" />
              <h4>आपुलकीचे नाते</h4>
              <p>नवीन मित्र, स्नेह आणि<br/>कौटुंबिक वातावरण</p>
            </div>
          </div>
        </div>

        {/* BOTTOM STATS FOOTER */}
        <div className="stats-footer">
          <div className="stat-footer-item">
            <Award size={24} className="text-gold" />
            <div className="stat-footer-text">
              <strong>15+</strong>
              <span>विविध उपक्रम</span>
            </div>
          </div>
          <div className="stat-footer-divider"></div>
          
          <div className="stat-footer-item">
            <Clock size={24} className="text-orange" />
            <div className="stat-footer-text">
              <strong>6AM - 10PM</strong>
              <span>सुविधा उपलब्ध</span>
            </div>
          </div>
          <div className="stat-footer-divider"></div>
          
          <div className="stat-footer-item">
            <Users size={24} className="text-purple-light" />
            <div className="stat-footer-text">
              <strong>24x7</strong>
              <span>वैद्यकीय सेवा</span>
            </div>
          </div>
          <div className="stat-footer-divider"></div>
          
          <div className="stat-footer-item">
            <CheckCircle2 size={24} className="text-pink-light" />
            <div className="stat-footer-text">
              <strong>100%</strong>
              <span>सुरक्षित व स्वच्छ</span>
            </div>
          </div>
          
          <div className="stat-footer-spacer"></div>
          
          <div className="stat-footer-end">
            <Heart size={24} className="text-pink-light fill-current" />
            <div className="stat-footer-text">
              <strong>आपले समाधान,</strong>
              <span>आमचे ध्येय</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HomeHero;

