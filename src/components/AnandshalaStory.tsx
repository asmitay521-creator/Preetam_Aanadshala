import React from "react";
import "./AnandshalaStory.css";

import {
  CalendarDays,
  Users,
  Target,
  Building2,
  HeartHandshake,
  Handshake,
  Quote,
  Feather,
} from "lucide-react";

import buildingImage from "../assets/anandshala-building.png";

const AnandshalaStory: React.FC = () => {
  return (
    <section className="anandshala-section">

      {/* Background Decorations */}
      <div className="dots dots-top"></div>
      <div className="dots dots-bottom"></div>

      <div className="anandshala-container">

        {/* ================= LEFT SIDE ================= */}

        <div className="story-left">

          {/* Small Label */}
          <div className="story-label">
            <div className="label-icon">
              <Feather size={21} />
            </div>
            <span>आपली परंपरा, आमची प्रेरणा</span>
          </div>

          {/* Heading */}
          <h1 className="story-title">
            आनंदशाळेची कहाणी
          </h1>

          <div className="title-line">
            <span></span>
            <i></i>
          </div>

          {/* First Paragraph */}
          <p className="story-description">
            माझ्या जन्माची बीजे रुजली ती श्री. अभिनव जननाथ काकाणी,
            ता. सांगली यांच्या स्वप्न प्रकल्पातून. अभिनव यांनी 26 जानेवारी
            2000 रोजी व्यवसाय सुरू केला आणि दरवर्षी वाढदिवस दिन,
            ज्येष्ठ नागरिक मेळावा व वाढदिवस आयोजन करून तो साजरा करतात.
          </p>

          {/* ================= INFO CARD ================= */}

          <div className="info-card">

            <div className="info-item">
              <div className="round-icon purple">
                <CalendarDays size={29} />
              </div>
              <h3>स्थापना</h3>
              <p>
                26 जानेवारी 2000 रोजी
                <br />
                व्यवसायाची सुरुवात
              </p>
            </div>

            <div className="info-divider"></div>

            <div className="info-item">
              <div className="round-icon pink">
                <Users size={29} />
              </div>
              <h3 className="pink-text">सेवा आणि सहभाग</h3>
              <p>
                वाढदिवस दिन, ज्येष्ठ नागरिक
                <br />
                मेळावा व विविध उपक्रम
              </p>
            </div>

            <div className="info-divider"></div>

            <div className="info-item">
              <div className="round-icon blue">
                <Target size={29} />
              </div>
              <h3 className="blue-text">ध्येय</h3>
              <p>
                सेवा, संस्कार आणि उत्कृष्ट
                <br />
                शिक्षणाची अखंड परंपरा
              </p>
            </div>

          </div>

          {/* Text */}
          <p className="story-description second">
            माणूस एकत्र राहणारा, बोलणारा, नाती जपणारा असतो.
            पाल्ये मोठे होऊन दूर देशी जाते तेव्हा मागे उरतात त्या
            आठवणी आणि एकांत... याच विचारातून ही संकल्पना समोर आली –
            ज्येष्ठ नागरिकांसाठी एक अशी 'शाळा', जिथे रोज नवा आनंद
            शिकायला मिळेल.
          </p>

          <p className="story-description last">
            सांगली शहरातील दीड एकर जागेवर, निसर्गाच्या वातावरणात
            उभा राहणारा हा भारतातील पहिलाच भव्य प्रकल्प आहे.
            येथे दिवसाभरातून ते आयुष्यभर आनंदाने राहता येते.
          </p>

          {/* ================= QUOTE ================= */}

          <div className="quote-card">

            <div className="person-placeholder">
              <span>GO</span>
            </div>

            <Quote
              className="quote-icon"
              size={46}
              fill="currentColor"
            />

            <div className="quote-content">
              <p>
                "आनंदात जगायचं, आरोग्य जपायचं,
                आनंदशाळेत येऊन स्वतः साकारायचं."
              </p>
              <span>— डॉ. गिरीश ओक, अभिनेते</span>
            </div>

          </div>

        </div>

        {/* ================= RIGHT SIDE ================= */}

        <div className="campus-wrapper">

          {/* Decorative outside line */}
          <div className="outer-design-line"></div>

          <div className="campus-card">

            {/* Top content */}
            <div className="campus-header">

              <div className="campus-heading">
                ज्येष्ठ नागरिकांच्या निरोगी आरोग्य व आनंददायी
                आयुष्यासाठी
                <br />
                द्वार येथेच उघडते...
                <span> आनंद प्रवेश घ्या.</span>
              </div>

              <div className="brand-area">
                <div className="preetam-logo">PREETAM</div>
                <p>प्रीतम ज्येष्ठ नागरिक आनंदशाळा</p>
              </div>

            </div>

            {/* Building Image */}
            <div className="building-area">
              <img
                src={buildingImage}
                alt="Preetam Anandshala Campus"
              />
              <div className="image-gradient"></div>
            </div>

            {/* ================= BOTTOM STATS ================= */}

            <div className="campus-stats">

              <div className="stat">
                <Building2 size={38} />
                <p>
                  दीड एकर
                  <br />
                  परिसरात
                </p>
              </div>

              <div className="stat-divider"></div>

              <div className="stat">
                <Users size={38} />
                <p>
                  2000+ हून अधिक
                  <br />
                  संतुष्ट लाभार्थी
                </p>
              </div>

              <div className="stat-divider"></div>

              <div className="stat">
                <HeartHandshake size={39} />
                <p>
                  15+ वर्षांची
                  <br />
                  सेवेची परंपरा
                </p>
              </div>

              <div className="stat-divider"></div>

              <div className="stat">
                <Handshake size={40} />
                <p>
                  संस्कार व सांस्कृतिक
                  <br />
                  कार्यक्रम
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default AnandshalaStory;
