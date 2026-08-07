import React, { useState } from "react";
import { createPortal } from "react-dom";
import { 
  CalendarDays, 
  Activity, 
  Gamepad2, 
  Dumbbell, 
  Crown, 
  Book, 
  Music, 
  Footprints, 
  Coffee, 
  ShieldCheck, 
  Award, 
  Trophy,
  X,
  HeartPulse,
  User
} from "lucide-react";
import "./SportsPricingSection.css";

const SportsPricingSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="sports-pricing-section" id="sports-pricing">
      
      {/* Hero Header */}
      <div className="sp-hero">
        <div className="sp-hero-bg"></div>
        <div className="sp-hero-overlay"></div>
        
        <div className="sp-hero-content animate-fade-right">
          <div className="sp-logo-area mb-2">
            <div className="sp-logo-circle">
              PREETAM
            </div>
            <div className="sp-title-text">
              <h1>PREETAM</h1>
              <h2>Sports & Fitness Club</h2>
            </div>
          </div>
          <div className="sp-tagline">
            Fit Body &nbsp;•&nbsp; Strong Mind &nbsp;•&nbsp; Better Life
          </div>
        </div>
      </div>

      <div className="sp-container">
        
        {/* I. Membership Rate Card */}
        <div className="sp-section-header mt-8">
          <div className="sp-section-icon"><User size={18}/></div>
          I. PREETAM SPORTS & FITNESS CLUB: MEMBERSHIP RATE CARD – PRE-LAUNCH OFFER – 2025
        </div>
        <div className="text-sm text-slate-600 mb-4 font-semibold animate-fade-up">
          <p className="text-pink-400 font-bold mb-1">1. Individual Facility Packages</p>
          These rates apply to a membership for one single facility<br/>
          (Gym, Swimming Pool, Pickleball, Badminton, Table Tennis, Squash, or Snooker).
        </div>

        <div className="sp-rate-grid animate-fade-up" style={{ animationDelay: '0.1s' }}>
          {/* Table */}
          <div className="sp-table-wrapper">
            <table className="sp-rate-table">
              <thead>
                <tr>
                  <th>Membership Duration</th>
                  <th>Rack Rate (₹)</th>
                  <th>Pre-Launch Offer (₹)</th>
                  <th>Savings (₹)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><CalendarDays className="text-pink-400" size={20}/> 12 Months</td>
                  <td>18,000</td>
                  <td>11,999</td>
                  <td>6,001</td>
                </tr>
                <tr>
                  <td><CalendarDays className="text-pink-400" size={20}/> 6 Months</td>
                  <td>12,000</td>
                  <td>6,999</td>
                  <td>5,001</td>
                </tr>
                <tr>
                  <td><CalendarDays className="text-pink-400" size={20}/> 3 Months</td>
                  <td>7,500</td>
                  <td>3,999</td>
                  <td>3,501</td>
                </tr>
                <tr>
                  <td><CalendarDays className="text-pink-400" size={20}/> 1 Months</td>
                  <td>3,500</td>
                  <td>1,499</td>
                  <td>2,001</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Special Offer Box */}
          <div className="sp-special-offer">
            <div className="sp-special-badge">SPECIAL OFFER</div>
            
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">💰</span>
              <div className="text-left font-bold text-slate-800 leading-tight">
                एकावेळी वार्षिक शुल्क<br/>भरल्यास महिना शुल्क
              </div>
            </div>
            
            <div className="sp-special-price-btn">
              ₹ 12000 + GST
            </div>
            
            <div className="w-full border-t border-dashed border-pink-200 my-2"></div>
            
            <div className="text-slate-600 font-bold mt-2 mb-1">वार्षिक शुल्क</div>
            <div className="sp-special-price-btn bg-pink-400">
              ₹ 132000 /-
            </div>
          </div>
        </div>

        {/* II and III Two Columns */}
        <div className="sp-two-cols">
          
          {/* II. ADD-ON FACILITIES */}
          <div className="sp-card-pink animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="sp-card-header-pink">
              <User size={20}/> II. ADD-ON FACILITIES (ACTIVITY ZONE)
            </div>
            <div className="sp-addon-list">
              <div className="text-sm font-semibold text-slate-600 mb-6">
                These facilities are available as Add-Ons to<br/>
                Individual Facility Packages<br/>
                <span className="text-xs font-normal">(cost not specified in the provided data).</span>
              </div>
              
              <div className="sp-addon-item">
                <div className="sp-addon-icon"><Activity size={20}/></div>
                <div>
                  <strong className="text-slate-800">Mind & Body:</strong> Zumba, Dance, Yoga
                </div>
              </div>
              <div className="sp-addon-item">
                <div className="sp-addon-icon"><Gamepad2 size={20}/></div>
                <div>
                  <strong className="text-slate-800">Recreation:</strong> Indoor Sitting Games,<br/>Music Hall, Library
                </div>
              </div>
              <div className="sp-addon-item">
                <div className="sp-addon-icon"><Footprints size={20}/></div>
                <div>
                  <strong className="text-slate-800">Outdoor:</strong> Outdoor Fitness Garden,<br/>Jogging Track
                </div>
              </div>
            </div>
            {/* Meditating Silhouette (SVG placeholder) */}
            <svg className="sp-yoga-img fill-pink-400" viewBox="0 0 24 24">
              <path d="M12 2C10.9 2 10 2.9 10 4C10 5.1 10.9 6 12 6C13.1 6 14 5.1 14 4C14 2.9 13.1 2 12 2ZM7.73 13.92L5.84 12.03L4.43 13.44L8.13 17.14C8.52 17.53 9.05 17.75 9.61 17.75H14.39C14.95 17.75 15.48 17.53 15.87 17.14L19.57 13.44L18.16 12.03L16.27 13.92V10C16.27 8.9 15.37 8 14.27 8H9.73C8.63 8 7.73 8.9 7.73 10V13.92ZM17.39 20.25H6.61C5.78 20.25 5.11 20.92 5.11 21.75H18.89C18.89 20.92 18.22 20.25 17.39 20.25Z" />
            </svg>
          </div>

          {/* III. PREETAM ELITE */}
          <div className="sp-card-blue animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="sp-card-header-blue">
              <Crown size={20}/> III. PREETAM ELITE – FAMILY LIFETIME MEMBERSHIP
            </div>
            <div className="p-6">
              <div className="text-sm font-semibold text-slate-600">
                This is a comprehensive membership package<br/>
                offering extensive access and benefits.
              </div>
              
              <table className="sp-elite-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Duration</td>
                    <td>10 Years</td>
                  </tr>
                  <tr>
                    <td>Members Included</td>
                    <td>4 Members</td>
                  </tr>
                  <tr>
                    <td>Access Included</td>
                    <td>Access to all Sports Facilities<br/>and Activity Zone Facilities</td>
                  </tr>
                  <tr>
                    <td>Access Note</td>
                    <td>Slot-based access;<br/>pre-booking is required.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
        </div>

        {/* IV. COMPLIMENTARY BENEFITS */}
        <div className="sp-comp-header animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <span>❖</span> IV. COMPLIMENTARY BENEFITS (FOR ALL MEMBERS) <span>❖</span>
        </div>
        <p className="text-center font-bold text-slate-700 text-sm mb-8 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          All members, regardless of their package type (Individual or Elite), receive the following complimentary benefits:
        </p>

        <div className="sp-comp-grid animate-fade-up" style={{ animationDelay: '0.5s' }}>
          <div className="sp-comp-item">
            <div className="sp-comp-top">
              <div className="sp-comp-icon-circle"><Book size={32}/></div>
              <span>Library</span>
            </div>
            <img src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=200&auto=format&fit=crop" className="sp-comp-img" alt="Library"/>
          </div>
          <div className="sp-comp-item">
            <div className="sp-comp-top">
              <div className="sp-comp-icon-circle"><Music size={32}/></div>
              <span>Music Hall</span>
            </div>
            <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=200&auto=format&fit=crop" className="sp-comp-img" alt="Music Hall"/>
          </div>
          <div className="sp-comp-item">
            <div className="sp-comp-top">
              <div className="sp-comp-icon-circle"><Dumbbell size={32}/></div>
              <span>Fitness<br/>Garden</span>
            </div>
            <img src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=200&auto=format&fit=crop" className="sp-comp-img" alt="Fitness Garden"/>
          </div>
          <div className="sp-comp-item">
            <div className="sp-comp-top">
              <div className="sp-comp-icon-circle"><Footprints size={32}/></div>
              <span>Jogging<br/>Track</span>
            </div>
            <img src="https://images.unsplash.com/photo-1571008887538-b36bb32f4571?q=80&w=200&auto=format&fit=crop" className="sp-comp-img" alt="Jogging Track"/>
          </div>
          <div className="sp-comp-item">
            <div className="sp-comp-top">
              <div className="sp-comp-icon-circle"><Gamepad2 size={32}/></div>
              <span>Indoor<br/>Games</span>
            </div>
            <img src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=200&auto=format&fit=crop" className="sp-comp-img" alt="Indoor Games"/>
          </div>
          <div className="sp-comp-item">
            <div className="sp-comp-top">
              <div className="sp-comp-icon-circle"><Coffee size={32}/></div>
              <span>Steam Bath<br/><span className="text-[10px] font-normal leading-tight block mt-1">(availability dependent<br/>on the specific package)</span></span>
            </div>
            <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=200&auto=format&fit=crop" className="sp-comp-img" alt="Steam Bath"/>
          </div>
        </div>

        {/* Bottom Action Bar */}
        <div className="sp-bottom-bar animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <div className="sp-bb-left">
            <div className="sp-pulse-icon">
              <HeartPulse size={28}/>
            </div>
            <div className="sp-bb-title">
              Take the first step<br/>
              towards a healthier<br/>
              & stronger you!
            </div>
          </div>
          
          <button className="sp-inquire-btn" onClick={() => setIsModalOpen(true)}>
            INQUIRE NOW
            <div className="bg-white text-pink-400 rounded-full p-1 ml-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </div>
          </button>
          
          <div className="sp-bb-badges">
            <div className="sp-badge-item">
              <div className="sp-badge-icon"><ShieldCheck size={20}/></div>
              <span>Best<br/>Facilities</span>
            </div>
            <div className="sp-badge-item">
              <div className="sp-badge-icon"><Award size={20}/></div>
              <span>Expert<br/>Trainers</span>
            </div>
            <div className="sp-badge-item">
              <div className="sp-badge-icon"><Trophy size={20}/></div>
              <span>Better<br/>Results</span>
            </div>
          </div>
        </div>

        {/* Footer Strip */}
        <div className="sp-footer-strip">
          <div className="flex items-center gap-2"><HeartPulse size={18}/> Better Health</div>
          <div className="flex items-center gap-2"><Activity size={18}/> Better Lifestyle</div>
          <div className="flex items-center gap-2"><User size={18}/> Better You</div>
        </div>

      </div>

      {/* Inquiry Form Modal via Portal to avoid stacking context issues */}
      {isModalOpen && createPortal(
        <div className="sp-modal-overlay">
          <div className="sp-modal-content animate-fade-down">
            <button className="sp-modal-close" onClick={() => setIsModalOpen(false)}>
              <X size={20} />
            </button>
            <h3 className="sp-modal-title">Inquire Now</h3>
            <p className="sp-modal-desc">Leave your details and our team will get back to you with the best offers.</p>
            
            <form onSubmit={(e) => { e.preventDefault(); alert("Inquiry Submitted Successfully!"); setIsModalOpen(false); }}>
              <div className="sp-form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Enter your name" required />
              </div>
              <div className="sp-form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="Enter your mobile number" required />
              </div>
              <div className="sp-form-group">
                <label>Interested In</label>
                <select required>
                  <option value="">Select Package</option>
                  <option value="individual">Individual Facility Package</option>
                  <option value="elite">Preetam Elite Lifetime Membership</option>
                  <option value="addons">Add-on Facilities</option>
                </select>
              </div>
              <button type="submit" className="sp-submit-btn">Submit Inquiry</button>
            </form>
          </div>
        </div>,
        document.body
      )}

    </section>
  );
};

export default SportsPricingSection;
