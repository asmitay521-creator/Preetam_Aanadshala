import React from "react";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { site, sportsClub } from "@/lib/site-info";
import { useAdminStore } from "@/lib/admin-store";
import { useLanguage } from "@/lib/use-language";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "संपर्क | प्रीतम ज्येष्ठ नागरिक आनंदशाळा, सांगली" },
      {
        name: "description",
        content:
          "प्रवेश व अधिक माहितीसाठी संपर्क : 9370237633, 9423258859. पत्ता : माधवनगर – धनंजय गार्डन रोड, सांगली.",
      },
      { property: "og:title", content: "संपर्क | प्रीतम ज्येष्ठ नागरिक आनंदशाळा" },
      { property: "og:description", content: "आनंदशाळेत प्रवेशासाठी आजच संपर्क साधा." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const { addInquiry } = useAdminStore();
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Admission Inquiry");
  const [message, setMessage] = useState("");
  const { isEn } = useLanguage();

  const contactCards = [
    { icon: "📞", titleMr: "आनंदशाळा हेल्पलाईन", titleEn: "Anandshala Helpline", value: sportsClub.phones[0], href: `tel:${sportsClub.phones[0]}` },
    { icon: "📞", titleMr: "कार्यालय संपर्क", titleEn: "Club Office Line", value: sportsClub.phones[1], href: `tel:${sportsClub.phones[1]}` },
    { icon: "💬", titleMr: "थेट WhatsApp", titleEn: "Direct WhatsApp", value: sportsClub.phones[0], href: sportsClub.whatsapp },
    { icon: "✉️", titleMr: "ई-मेल पत्ता", titleEn: "Email Address", value: site.email, href: `mailto:${site.email}` },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    addInquiry({ name, phone, email, subject, message });
    setSubmitted(true);
    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title={isEn ? "Contact Us" : "संपर्क"}
        subtitle={isEn ? "Reach out to us for admissions, club membership, or picnic passes." : "प्रवेश, सहल पास किंवा अधिक माहितीसाठी आजच संपर्क साधा."}
      />

      <section className="container-page py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((c, i) => (
            <Reveal key={c.titleMr} delay={i * 90}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="block h-full rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#E60067] hover:shadow-md"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-[#E60067]/10 text-xl">
                  {c.icon}
                </span>
                <p className="mt-4 text-sm text-muted-foreground font-semibold">{isEn ? c.titleEn : c.titleMr}</p>
                <p className="mt-1 font-bold break-words text-foreground">{c.value}</p>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-border bg-card p-8 shadow-lg space-y-4"
            >
              <h2 className="font-display text-2xl font-bold">{isEn ? "Admission & Membership Enquiry" : "प्रवेश व मेंबरशिप चौकशी करा"}</h2>
              <p className="text-sm text-muted-foreground">
                {isEn ? "Fill in the details below — our team will reach out to you shortly." : "खालील माहिती भरा — आमची टीम लवकरच आपल्याशी संपर्क साधेल."}
              </p>

              {submitted && (
                <div className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/50 text-emerald-600 dark:text-emerald-400 font-bold text-sm animate-fade-up">
                  ✓ {isEn ? "Your inquiry has been submitted successfully! We will contact you soon." : "तुमची चौकशी यशस्वीरित्या पाठवली गेली आहे! आम्ही लवकरच संपर्क करू."}
                </div>
              )}

              <div>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={isEn ? "Your Full Name" : "आपले पूर्ण नाव"}
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-[#810B38]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={isEn ? "Mobile Number" : "मोबाईल नंबर"}
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-[#810B38]"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={isEn ? "Email Address (Optional)" : "ई-मेल पत्ता (ऐच्छिक)"}
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-[#810B38]"
                />
              </div>

              <div>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-[#810B38]"
                >
                  <option value="आनंदशाळा प्रवेश चौकशी">{isEn ? "Anandshala Admission Enquiry" : "आनंदशाळा प्रवेश चौकशी"}</option>
                  <option value="१ दिवस सहल पास">{isEn ? "One Day Picnic Pass" : "१ दिवस सहल भेट पास"}</option>
                  <option value="डे-केअर मन्थली">{isEn ? "Day Care Monthly Pass" : "डे-केअर मासिक फी"}</option>
                  <option value="आनंदनिवास">{isEn ? "Anandnivas Stay Pass" : "आनंदनिवास राहण्यासह"}</option>
                  <option value="स्पोर्ट्स क्लब">{isEn ? "Preetam Sports Club Membership" : "स्पोर्ट्स क्लब मेंबरशिप"}</option>
                </select>
              </div>

              <div>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={isEn ? "Your Message or Question..." : "आपला संदेश किंवा प्रश्न येथे लिहा..."}
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-[#810B38]"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl py-4 font-bold text-white shadow-lg transition-transform hover:scale-[1.01] cursor-pointer"
                style={{ background: "linear-gradient(135deg, #541A1A 0%, #810B38 100%)" }}
              >
                ✉️ {isEn ? "Submit Enquiry Form" : "चौकशी अर्ज पाठवा"}
              </button>
            </form>
          </Reveal>

          {/* ADDRESS & GOOGLE MAP CARD */}
          <Reveal delay={140}>
            <div className="h-full rounded-3xl border border-border bg-card p-8 shadow-lg flex flex-col justify-between">
              <div>
                <h2 className="font-display text-2xl font-bold text-[#541A1A]">📍 {isEn ? "Visit Location & Address" : "भेट द्या व पत्ता"}</h2>
                <p className="mt-2 text-sm text-foreground font-semibold leading-relaxed">
                  {isEn ? site.addressEn : site.addressMr}
                </p>
                <div className="mt-4 p-4 rounded-2xl bg-secondary/80 text-xs font-semibold text-foreground space-y-1">
                  <p className="text-[#810B38] font-bold">⏰ {isEn ? site.timingEn : site.timingMr}</p>
                  <p>🏆 {isEn ? sportsClub.timingEn : sportsClub.timingMr}</p>
                </div>
              </div>

              <div className="mt-6 overflow-hidden rounded-2xl border border-border h-64 shadow">
                <iframe
                  title="Google Maps Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3817.8!2d74.58!3d16.86!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDUxJzM2LjAiTiA3NMKwMzQnNDguMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>

              <a
                href={sportsClub.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl py-3 px-6 text-sm font-bold text-white shadow-md transition-transform hover:scale-102"
                style={{ background: "linear-gradient(135deg, #128C7E 0%, #25D366 100%)" }}
              >
                🗺️ {isEn ? "Open Directions on Google Maps" : "Google Maps वर दिशा पहा"}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export default Contact;