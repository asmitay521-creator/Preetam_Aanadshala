import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Reveal } from "@/components/site/Reveal";
import { brochurePages } from "@/lib/brochure-pages";
import { site, sportsClub } from "@/lib/site-info";
import { useAdminStore } from "@/lib/admin-store";
import { useLanguage } from "@/lib/use-language";
import { ShieldCheck, Users, Heart, Sprout, Award } from "lucide-react";
import SpecialReasons from "@/components/site/SpecialReasons";
import HomeHero from "@/components/HomeHero/HomeHero";
import SportsSection from "@/components/SportsSection";
import JourneyTimeline from "@/components/journey-v2/JourneyTimeline";

const publicImages = [
  "/images/Screenshot 2026-07-31 103107.png",
  "/images/Screenshot 2026-07-31 103131.png",
  "/images/Screenshot 2026-07-31 103152.png",
  "/images/Screenshot 2026-07-31 103213.png",
  "/images/Screenshot 2026-07-31 103238.png",
  "/images/aandshala sahal 1.jpeg",
  "/images/Screenshot 2026-07-31 103517.png",
  "/images/Screenshot 2026-07-31 103545.png",
  "/images/Screenshot 2026-07-31 103659.png",
  "/images/Screenshot 2026-07-31 103712.png",
  "/images/Screenshot 2026-07-31 103842.png",
];

const reasonsList = [
  { mr: "माझ्या मनातील व जीवनातील राहून गेलेल्या बऱ्याच गोष्टी, खेळ, आवडी-निवडी मला आनंदाने करण्यासाठी.", en: "To happily fulfill lifelong unfulfilled hobbies, games, and passions." },
  { mr: "मला माझ्या मनासारखे आनंदी व स्वावलंबी जीवन जगता येण्यासाठी.", en: "To live a happy and self-reliant life on my own terms." },
  { mr: "माझ्या कलागुणांना वाव, मानधन व आत्मसन्मान मिळण्यासाठी.", en: "To showcase my artistic talents, earn stipends, and gain self-dignity." },
  { mr: "कोणाच्या बंधनात राहून, मन मारून, चार भिंतीत एकटेपणाने जीवन जगावे लागणार नाही यासाठी.", en: "To avoid living in restriction, solitude, or suppressed desires within 4 walls." },
  { mr: "घरी एक-दोघे राहून, साहित्य आणून, विश्वास ठेवून जीवन जगणे जास्त खर्चिक व त्रासाचे असते, हे समजण्यासाठी.", en: "To realize that living alone at home managing groceries is costly & stressful." },
  { mr: "आयुष्याला त्रासून-कष्टून मरण मागावे लागणार नाही यासाठी.", en: "To live golden years with joy instead of feeling exhausted or hopeless." },
  { mr: "एकटेपणाला कंटाळून नैराश्य, चिडचिड होणार नाही यासाठी.", en: "To overcome loneliness, depression, and irritability effortlessly." },
  { mr: "घरगुती कटकटी, अबोला, त्रास व भांडणापासून मुक्ती मिळवण्यासाठी.", en: "To get relief from domestic stress, silence, and daily friction." },
  { mr: "स्वतः कमावलेल्या पैशांचा थोडातरी स्वतःसाठी उपभोग घेण्यासाठी.", en: "To enjoy at least a portion of hard-earned savings for oneself." },
  { mr: "जीवनाची सायंकाळ आनंदाने उत्साहाने मनसोक्त जगून करण्यासाठी.", en: "To spend the evening of life enthusiastically and to the fullest." },
  { mr: "आप्तजन व स्वतःसाठी खूप गरजेची व अभिमानास्पद गोष्ट आहे.", en: "A deeply essential and proud step for oneself and loved ones." },
  { mr: "दूर राहून प्रेम, आपुलकी, जिव्हाळा व नातेसंबंध वाढवण्यासाठी.", en: "To nurture deeper love, affection, and strong family relationships." },
  { mr: "आपल्या वयाच्या विचारांच्या मित्र-मैत्रिणींसोबत माणसांसोबत आनंदाने स्वाभिमानाने जगण्यासाठी.", en: "To live with self-respect alongside like-minded peers of one's age group." },
  { mr: "मनसोक्त, आनंदी, उत्साही व स्वावलंबी जीवन जगता आले म्हणून देवाचे आभार मानण्यासाठी.", en: "To thank Almighty God for a joyful, energetic, and independent life." },
  { mr: "पैसा नसला तरी थोडेसे काम श्रमदान करून आनंदी जीवन कसे जगता येते ते दाखवण्यासाठी.", en: "To demonstrate how joyful life can be lived through voluntary contribution." },
  { mr: "पैसा म्हणजे सर्वकाही नाही, मानवता धर्म व स्वतःसाठी व इतरांसाठी जगणे शिकण्यासाठी.", en: "To learn that money isn't everything; humanity & living for others matters." },
  { mr: "मानव जन्म मिळाला ते आनंदाने जीवन जगण्यासाठी.", en: "To honor human birth by living every single day happily." },
  { mr: "आपल्या माणसांवर रुसणे, अबोला, ओझे होण्यासाठी जीवन नाही हे सिद्ध करण्यासाठी.", en: "To prove life isn't meant for resentment or becoming a burden on anyone." },
  { mr: "नातेवाईक, लोक काय म्हणतील याचा विचार करू नका, स्वतःच्या आनंदासाठी आजच प्रवेश घ्या.", en: "Do not worry what society says — take admission for your own happiness." },
  { mr: "कल्पना न केलेले, कधी न उपभोगलेले, आपलेपण काय असते ते जग अनुभवण्यासाठी.", en: "To experience true warmth and belonging never imagined before." },
  { mr: "पैसा असून सुद्धा सर्व सुखसोई उपभोग विकत घेऊ शकत नाहीत परंतु येथे घेऊ शकतो ते दाखवण्यासाठी.", en: "To experience comforts money alone cannot buy at home." },
  { mr: "प्रचंड पैसा असून सुद्धा ह्या सर्व सोयी सुविधा मी स्वतःच्या घरात करू शकत नाही हे लक्षात घेण्यासाठी.", en: "To realize that even with wealth, creating such a 1.5 acre hub at home is impossible." },
  { mr: "आपल्या वयाच्या लोकांसोबत गप्पा-गोष्टी-खेळ खेळण्यासाठी.", en: "To chat, share stories, and play games with friends of your age." },
];

const activityHalls = [
  { icon: "♟️", titleMr: "बैठे खेळ हॉल", titleEn: "Indoor Games Hall", textMr: "कॅरम, बुद्धिबळ, पत्ते, सापाशिडी इत्यादी खेळ खेळणे.", textEn: "Play Carrom, Chess, Cards, Snakes & Ladders." },
  { icon: "🎨", titleMr: "आर्ट हॉल", titleEn: "Arts & Crafts Studio", textMr: "चित्रकला, हस्तकला, विणकाम व कला शिकणे व सराव करणे.", textEn: "Learn painting, handicrafts, knitting & creative arts." },
  { icon: "🎵", titleMr: "संगीत उपकरणे हॉल", titleEn: "Music Instrument Lounge", textMr: "तबला, गिटार, हार्मोनिअम, पेटी, पियानो, सॅक्सोफोन, बासरी शिकणे व आनंद घेणे.", textEn: "Play & learn Tabla, Guitar, Harmonium, Piano, Saxophone & Flute." },
  { icon: "💻", titleMr: "माहिती तंत्रज्ञान हॉल", titleEn: "IT & Digital Learning Hall", textMr: "कॉम्प्युटर, लॅपटॉप, मोबाईल, इंटरनेट व प्रिंटर शिकणे.", textEn: "Learn computer basics, smartphones, internet & printing." },
  { icon: "🥳", titleMr: "करमणूक हॉल", titleEn: "Recreation & Fun Hall", textMr: "गप्पा-गोष्टी, अंताक्षरी, पासिंग गेम व समूह खेळ खेळणे.", textEn: "Enjoy Antakshari, group games, conversations & storytelling." },
  { icon: "🏊", titleMr: "स्विमिंग पूल", titleEn: "Swimming Pool Complex", textMr: "पोहण्याचा व स्वच्छ पाण्यात खेळण्याचा मनसोक्त आनंद घेणे.", textEn: "Enjoy swimming in clean filtered water pool." },
  { icon: "📽️", titleMr: "संस्कार व संप्रदाय हॉल", titleEn: "Spiritual & Cultural Hall", textMr: "विविध धार्मिक कार्यक्रम, संस्कार वर्ग व व्हिडिओ पाहणे.", textEn: "Spiritual discourses, value classes & video screenings." },
  { icon: "🏸", titleMr: "विविध खेळ हॉल", titleEn: "Sports Arena", textMr: "बॅडमिंटन, टेबल टेनिस, स्नुकर व स्क्वॅश खेळणे.", textEn: "Play Badminton, Table Tennis, Snooker & Squash." },
  { icon: "🏋️", titleMr: "व्यायाम हॉल", titleEn: "Fitness & Wellness Lounge", textMr: "जीम, योगा, मेडिटेशन, झुम्बा व डान्स इत्यादी करणे.", textEn: "Gym, Yoga, Meditation, Zumba & Dance sessions." },
  { icon: "🍲", titleMr: "पाककृती हॉल", titleEn: "Culinary & Cooking Studio", textMr: "स्वयंपाक, नाश्ता, जेवण, आईस्क्रीम, सरबते व मिठाई इत्यादी बनवणे शिकणे.", textEn: "Learn culinary skills, mocktails, sweets & snacks." },
  { icon: "🛌", titleMr: "विश्रांती हॉल", titleEn: "Relaxation Lounge", textMr: "वाचन करणे, शांत झोपणे किंवा आराम खुर्चीत विश्रांती घेणे.", textEn: "Read books, quiet nap, or relax on recliners." },
  { icon: "🎬", titleMr: "थिएटर हॉल", titleEn: "Mini Theatre Hall", textMr: "टी.व्ही., सिनेमा, नाटक व सांस्कृतिक कार्यक्रम पाहणे.", textEn: "Watch movies, TV shows, dramas & cultural performances." },
  { icon: "🛕", titleMr: "मंदिर हॉल", titleEn: "Temple & Meditation Hall", textMr: "५५ फुटांच्या मूर्तीसमोर भजन, कीर्तन, अभंग, जप व नामस्मरण करणे.", textEn: "Bhajans, Kirtans, chanting in front of 55ft Krishna statue." },
  { icon: "😂", titleMr: "हास्य व कराओके हॉल", titleEn: "Laughter & Karaoke Studio", textMr: "हास्याचे वर्ग, गाण्याचे कराओके कार्यक्रम व व्हिडिओ पाहणे.", textEn: "Laughter yoga sessions, karaoke singing & comedy videos." },
  { icon: "🚌", titleMr: "ई-रिक्षा व सायकली", titleEn: "E-Ricksha & Bicycle Rides", textMr: "इलेक्ट्रिक गाडी, २, ३, ४ व ६ चाकी रंगीत सायकलींचा आनंद घेणे.", textEn: "Enjoy ride on electric van, 2, 3, 4 & 6-wheel bicycles." },
];

const dailySchedule = [
  {
    step: "01",
    timeMr: "११:०० ते ११:३०",
    timeEn: "11:00 to 11:30 AM",
    titleMr: "प्रार्थना व प्रार्थनायोग",
    titleEn: "Prayer & Yoga Meditation",
    textMr: "विद्यार्थी एकत्र येऊन प्रार्थना व सकारात्मक ऊर्जा घेणे.",
    textEn: "Gathering for morning prayer & positive energy meditation.",
    iconSvg: (
      <svg className="size-7 stroke-[#B8860B] fill-none stroke-[2]" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    step: "02",
    timeMr: "११:१५ ते १२:००",
    timeEn: "11:15 to 12:00 PM",
    titleMr: "कला, संगीत व वाचन",
    titleEn: "Arts, Music & Reading",
    textMr: "आवडीनुसार विविध हॉलमध्ये उपक्रम.",
    textEn: "Activity sessions across 15 specialized halls.",
    iconSvg: (
      <svg className="size-7 stroke-[#B8860B] fill-none stroke-[2]" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="12" rx="2" />
        <path d="M12 15v6M8 21h8" />
        <path d="M7 8h10M7 11h6" />
      </svg>
    ),
  },
  {
    step: "03",
    timeMr: "१२:१५ ते ०१:००",
    timeEn: "12:15 to 01:00 PM",
    titleMr: "क्रीडा व सराव (तुकडी 'ब' स्नेहभोजन)",
    titleEn: "Sports Practice (Batch B Lunch)",
    textMr: "खेळ, पोहणे व फिटनेस सराव.",
    textEn: "Sports, swimming, and fitness workouts.",
    iconSvg: (
      <svg className="size-7 stroke-[#B8860B] fill-none stroke-[2]" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 11a8 8 0 0 0 16 0H4z" />
        <path d="M6 7c1.5 1 2.5 1 4 0s2.5-1 4 0 2.5 1 4 0" />
        <path d="M12 19v2M9 21h6" />
      </svg>
    ),
  },
  {
    step: "04",
    timeMr: "०१:१५ ते ०२:००",
    timeEn: "01:15 to 02:00 PM",
    titleMr: "तुकडी 'अ' स्नेहभोजन",
    titleEn: "Batch A Pure Veg Lunch",
    textMr: "सकस, घरगुती, स्वच्छ आहार घेणे.",
    textEn: "Nutritious, home-cooked pure veg meal.",
    iconSvg: (
      <svg className="size-7 stroke-[#B8860B] fill-none stroke-[2]" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="7" />
        <path d="M5 4v6a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V4M7 12v8" />
        <path d="M19 4v16M19 4c-1.5 2-2 4-2 6v2" />
      </svg>
    ),
  },
  {
    step: "05",
    timeMr: "०२:१५ ते ०३:००",
    timeEn: "02:15 to 03:00 PM",
    titleMr: "विज्ञान व क्रियाप्रदर्शन",
    titleEn: "Science & Practical Demos",
    textMr: "चिकित्सक विचार, छोटी प्रयोगे आणि अनुभवाधारित शिकणे.",
    textEn: "Critical thinking, small experiments & hands-on learning.",
    iconSvg: (
      <svg className="size-7 stroke-[#B8860B] fill-none stroke-[2]" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 2v5.5L4.5 17A2 2 0 0 0 6.2 20h11.6a2 2 0 0 0 1.7-3L14 7.5V2" />
        <path d="M8.5 2h7M7 15h10" />
      </svg>
    ),
  },
  {
    step: "06",
    timeMr: "०३:१५ ते ०४:००",
    timeEn: "03:15 to 04:00 PM",
    titleMr: "चौथा तास - सर्जनशीलता व कला",
    titleEn: "Hour 4 - Creativity & Crafts",
    textMr: "रंगकाम, मॉडेलिंग, क्राफ्ट आणि सर्जनशील उपक्रम.",
    textEn: "Painting, modeling, craft & creative activities.",
    iconSvg: (
      <svg className="size-7 stroke-[#B8860B] fill-none stroke-[2]" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10c0-1.7-1.3-3-3-3h-1.5a1.5 1.5 0 0 1-1.5-1.5V6a4 4 0 0 0-4-4z" />
        <circle cx="7.5" cy="7.5" r="1" fill="#B8860B" />
        <circle cx="12" cy="6.5" r="1" fill="#B8860B" />
        <circle cx="6.5" cy="12" r="1" fill="#B8860B" />
        <circle cx="9" cy="16" r="1" fill="#B8860B" />
      </svg>
    ),
  },
  {
    step: "07",
    timeMr: "०४:१५ ते ०५:००",
    timeEn: "04:15 to 05:00 PM",
    titleMr: "पांचवा तास - चर्चा व संगीतमय संगत",
    titleEn: "Hour 5 - Discussion & Devotional Music",
    textMr: "चर्चा, नाट्य, गप्पा व भजनाने सांगता.",
    textEn: "Group discussion, drama, chats & devotional songs.",
    iconSvg: (
      <svg className="size-7 stroke-[#B8860B] fill-none stroke-[2]" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const keyHighlights = [
  { num: "01", titleMr: "आनंद निवास", titleEn: "Anand Nivas Residence", icon: "🏠", textMr: "फुल फर्निश्ड निवास (सिंगल, कपल, 2-3 शेअरिंग, AC / Non-AC पर्याय).", textEn: "Fully furnished rooms (Single, Couple, Sharing, AC/Non-AC).", color: "#E60067" },
  { num: "02", titleMr: "नियोजित गोशाळा", titleEn: "Proposed Gaushala", icon: "🐄", textMr: "देशी गायांचे पालन, गोपूजा व सेंद्रिय दुधाची सोय.", textEn: "Indigenous cow shelter, worship & organic milk facility.", color: "#9B1B54" },
  { num: "03", titleMr: "नियोजित श्रीकृष्ण मंदिर", titleEn: "Shri Krishna Temple", icon: "🛕", textMr: "55 फुटांची भव्य राधाकृष्ण मूर्ती व अध्यात्मिक वातावरण.", textEn: "55ft grand Radha Krishna statue in serene atmosphere.", color: "#D97706" },
  { num: "04", titleMr: "स्विमिंग पूल", titleEn: "Swimming Pool Complex", icon: "🏊", textMr: "जागतिक दर्जाचा शुद्ध पाण्याचा तरणतलाव व सुरक्षितता.", textEn: "World-class clean water pool with safety standards.", color: "#0284C7" },
  { num: "05", titleMr: "स्पोर्ट्स व फिटनेस कॉम्प्लेक्स", titleEn: "Sports & Fitness Hub", icon: "🏸", textMr: "जिम, इनडोअर बॅडमिंटन, टेनिस, टर्फ व क्रीडा संकूल.", textEn: "Gym, indoor badminton, tennis court, artificial turf.", color: "#0D9488" },
  { num: "06", titleMr: "अध्यायावत फूड कोर्ट व लक्झरी हॉटेल", titleEn: "Food Court & Luxury Hotel", icon: "🍽️", textMr: "PREETAM FOOD COURT - चवदार नाष्टा व चवदार जेवणाची उत्तम सोय.", textEn: "PREETAM FOOD COURT - Healthy breakfast & delicious veg meals.", color: "#7E22CE" },
  { num: "07", titleMr: "कार्यक्रम स्टेज, गार्डन व लॉन", titleEn: "Stage, Gardens & Lawns", icon: "🎭", textMr: "सांस्कृतिक कार्यक्रम, हिरवळ, कारंजे व निसर्गरम्य वातावरण.", textEn: "Cultural performance stage, lush green lawns & fountains.", color: "#15803D" },
  { num: "08", titleMr: "टर्फ - क्रिकेट व स्पोर्ट्स", titleEn: "Sports Turf Ground", icon: "⚽", textMr: "क्रिकेट, फुटबॉल व मैदानी खेळांसाठी सुसज्ज टर्फ मैदान.", textEn: "Fully equipped artificial turf for mini cricket & football.", color: "#1E40AF" },
];

function IndexComponent() {
  const [selectedSection, setSelectedSection] = useState<"aanandshala" | "sports" | null>("aanandshala");
  const [selectedGalleryCategory, setSelectedGalleryCategory] = useState("सर्व");
  const { isEn } = useLanguage();

  const galleryCategories = [
    "सर्व",
    "ज्येष्ठ नागरिक आनंदशाळा",
    "आनंद मेळावा",
    "भूमिपूजन",
    "बांधकाम",
    "सामाजिक कार्य",
    "वार्षिक स्नेहसंमेलन",
    "मान्यवर भेट",
    "विशेष कार्यक्रम",
  ];

  const heroImage = brochurePages[0]?.url || publicImages[0];
  const sportsHeroImage = brochurePages[6]?.url || publicImages[1];

  const sportsHeroImages = [
    sportsHeroImage,
    sportsClub.gallery[0] || "https://d3k88l35vy59af.cloudfront.net/A42/9663/1763357638128.jpg",
    sportsClub.facilities[0]?.images[0] || "https://d3k88l35vy59af.cloudfront.net/A42/9663/1763184848892.jpg",
    sportsClub.gallery[1] || "https://d3k88l35vy59af.cloudfront.net/A42/9663/1763357638129.jpg",
  ].filter(Boolean);

  const [sportsBgIdx, setSportsBgIdx] = useState(0);
  const [sportsLightboxIndex, setSportsLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setSportsBgIdx((prev) => (prev + 1) % sportsHeroImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [sportsHeroImages.length]);

  useEffect(() => {
    if (sportsLightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSportsLightboxIndex(null);
      if (e.key === "ArrowLeft")
        setSportsLightboxIndex((prev) => (prev === null || prev === 0 ? sportsClub.gallery.length - 1 : prev - 1));
      if (e.key === "ArrowRight")
        setSportsLightboxIndex((prev) => (prev === null || prev === sportsClub.gallery.length - 1 ? 0 : prev + 1));
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [sportsLightboxIndex]);

  const handleSectionSelect = (sec: "aanandshala" | "sports" | null) => {
    setSelectedSection(sec);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background animate-fade-up">
      {/* 1. SECTION CARDS SELECTOR (SHOWN FIRST ON INITIAL ENTRY) */}
      {selectedSection === null && (
        <section id="sections" className="relative py-10 sm:py-14 px-4 overflow-hidden bg-gradient-to-b from-[#F4F7FB] via-[#EBF0F9] to-[#E2E8F5] dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 border-b border-[#E60067]/15 min-h-[calc(100vh-80px)] flex flex-col justify-center">
        {/* DOT GRID BACKGROUND DECORATION */}
        <div className="pointer-events-none absolute top-6 left-10 opacity-20 hidden md:block">
          <div className="grid grid-cols-6 gap-2.5">
            {Array.from({ length: 24 }).map((_, i) => (
              <span key={i} className="size-1.5 rounded-full bg-[#E60067]" />
            ))}
          </div>
        </div>
        <div className="pointer-events-none absolute top-6 right-10 opacity-20 hidden md:block">
          <div className="grid grid-cols-6 gap-2.5">
            {Array.from({ length: 24 }).map((_, i) => (
              <span key={i} className="size-1.5 rounded-full bg-[#E60067]" />
            ))}
          </div>
        </div>

        {/* FLOATING AMBIENT LIGHT BLOBS */}
        <div className="pointer-events-none absolute top-1/4 left-1/12 size-96 rounded-full bg-[#E60067]/10 blur-3xl animate-float opacity-70" />
        <div className="pointer-events-none absolute bottom-1/4 right-1/12 size-96 rounded-full bg-[#316728]/20 blur-3xl animate-float-reverse opacity-70" />

        {/* BRAND HEADER */}
        <div className="animate-fade-up text-center max-w-3xl mx-auto mb-6 sm:mb-8 relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#E60067]/30 bg-[#E60067]/10 px-5 py-1.5 text-xs sm:text-sm font-extrabold text-[#E60067] shadow-sm backdrop-blur-md animate-pulse-emerald">
            ♥ {isEn ? "Sangli · Maharashtra · Service, Love & Trust for All" : "सांगली · महाराष्ट्र · सर्वांसाठी सेवा, प्रेम आणि विश्वास"}
          </span>

          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#1A05A2] tracking-tight drop-shadow-sm">
            {isEn ? "Preetam Project, Sangli" : "प्रीतम प्रकल्प, सांगली"}
          </h2>

          {/* ORNAMENTAL DIVIDER */}
          <div className="flex items-center justify-center gap-3 my-3">
            <div className="h-[1.5px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#E60067]/50 to-transparent" />
            <span className="text-[#E60067] text-sm font-bold">❦</span>
            <div className="h-[1.5px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#E60067]/50 to-transparent" />
          </div>

          <p className="text-xs sm:text-base text-foreground/80 font-medium max-w-2xl mx-auto leading-relaxed">
            {isEn ? "Click on one of the 2 premier sections below to view complete details & amenities" : "संपूर्ण माहिती व सुविधा पाहण्यासाठी खालील २ उत्कृष्ट विभागांपैकी एका विभागावर क्लिक करा"}
          </p>

          {/* FILTER SWITCH BUTTONS */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => handleSectionSelect(null)}
              className={`rounded-full px-7 py-3 text-xs sm:text-sm font-extrabold transition-all duration-300 cursor-pointer shadow-md ${
                selectedSection === null
                  ? "bg-[#1A05A2] text-white shadow-xl scale-105"
                  : "bg-white/90 border border-[#E60067]/20 text-[#1A05A2] hover:bg-[#E60067]/10"
              }`}
            >
              ⠿ {isEn ? "All 2 Projects" : "सर्व २ प्रकल्प (All Sections)"}
            </button>
            <button
              onClick={() => handleSectionSelect("aanandshala")}
              className={`rounded-full px-7 py-3 text-xs sm:text-sm font-extrabold transition-all duration-300 cursor-pointer shadow-md ${
                selectedSection === "aanandshala"
                  ? "bg-[#E60067] text-white shadow-xl scale-105"
                  : "bg-white/90 border border-[#E60067]/20 text-[#E60067] hover:bg-[#E60067]/10"
              }`}
            >
              🏠 {isEn ? "Section 1: Anandashram" : "विभाग १ : आनंदआश्रम"}
            </button>
            <button
              onClick={() => handleSectionSelect("sports")}
              className={`rounded-full px-7 py-3 text-xs sm:text-sm font-extrabold transition-all duration-300 cursor-pointer shadow-md ${
                selectedSection === "sports"
                  ? "bg-[#1A05A2] text-white shadow-xl scale-105"
                  : "bg-white/90 border border-[#1A05A2]/20 text-[#1A05A2] hover:bg-[#1A05A2]/10"
              }`}
            >
              🏋️‍♂️ {isEn ? "Section 2: Sports Club" : "विभाग २ : स्पोर्ट्स क्लब"}
            </button>
          </div>
        </div>

        {/* 2 MAIN LUXURY FEATURE CARDS - ANIMATED */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl w-full mx-auto relative z-10">
          {/* SECTION 1 CARD: PREETAM AANANDASHRAM */}
          <div
            onClick={() => handleSectionSelect("aanandshala")}
            style={{ animationDelay: "150ms" }}
            className={`glow-card animate-fade-up group relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#FFFDF9] via-[#FDF7EE] to-[#FAF1E4] dark:from-slate-900 dark:to-slate-950 cursor-pointer flex flex-col justify-between transition-all duration-500 hover:-translate-y-3 hover:scale-[1.015] hover:shadow-[0_30px_80px_rgba(129,11,56,0.35)] shadow-[0_15px_40px_rgba(129,11,56,0.1)] ${
              selectedSection === "aanandshala" ? "ring-4 ring-[#E60067] scale-[1.02]" : ""
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-12 items-stretch min-h-[380px] size-full">
              {/* LEFT CONTENT */}
              <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-4 relative z-10">
                <div className="space-y-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E60067] px-4 py-1.5 text-xs font-extrabold text-white shadow-md group-hover:bg-[#541A1A] group-hover:scale-105 transition-all duration-300">
                    🏠 {isEn ? "Section 1" : "विभाग १"}
                  </span>

                  <h3 className="font-display text-2xl sm:text-3xl font-black text-[#541A1A] group-hover:text-[#E60067] transition-colors leading-tight">
                    {isEn ? site.nameEn : site.nameMr}
                  </h3>

                  <div className="flex items-center gap-2 my-1">
                    <div className="h-[1px] w-8 bg-[#E60067]/40 group-hover:w-12 transition-all duration-300" />
                    <span className="text-[#E60067] text-xs group-hover:rotate-45 transition-transform duration-500">❦</span>
                    <div className="h-[1px] w-8 bg-[#E60067]/40 group-hover:w-12 transition-all duration-300" />
                  </div>

                  <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed font-medium">
                    {isEn
                      ? "India's first senior citizen Anandashram! Residence, healthy meals, 24x7 care, 55ft Radha Krishna statue, temple, gaushala, 15 activity halls & full amenities."
                      : "भारतातील पहिले ज्येष्ठ नागरिक आनंदआश्रम! निवास, सकस जेवण, 24x7 देखभाल, 55 फुटांची राधाकृष्ण मूर्ती, मंदिर, गोशाळा, 15 उपक्रम हॉल व सर्व सोयी सुविधा."}
                  </p>
                </div>

                {/* BOTTOM BAR */}
                <div className="pt-4 border-t border-[#E60067]/15 flex items-center justify-between gap-2">
                  <div className="grid size-11 shrink-0 place-items-center rounded-2xl bg-[#E60067]/10 text-[#E60067] text-xl font-bold shadow-inner group-hover:scale-110 group-hover:bg-[#E60067]/20 transition-all duration-300">
                    👥
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#E60067] px-5 py-3 text-xs sm:text-sm font-extrabold text-white shadow-lg group-hover:bg-[#541A1A] transition-all duration-300 group-hover:shadow-xl">
                    {isEn ? "Open Anandashram Details" : "आनंदआश्रम माहिती उघडा"}
                    <span className="grid size-6 place-items-center rounded-full bg-white text-[#E60067] text-xs font-black group-hover:translate-x-1.5 group-hover:bg-amber-300 group-hover:text-[#541A1A] transition-all duration-300">
                      →
                    </span>
                  </span>
                </div>
              </div>

              {/* RIGHT FULL-HEIGHT BUILDING IMAGE */}
              <div className="md:col-span-6 relative min-h-[260px] md:min-h-full overflow-hidden rounded-b-[2.5rem] md:rounded-b-none md:rounded-l-[50px] border-t md:border-t-0 md:border-l-2 border-[#E6D2BF] bg-[#F5EBE0]">
                <img
                  src="/images/aandshala_img.png"
                  alt={isEn ? site.nameEn : site.nameMr}
                  className="absolute inset-0 size-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#FAF1E4]/30 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#541A1A]/30 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/25 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* SECTION 2 CARD: PREETAM SPORTS & FITNESS CLUB */}
          <div
            onClick={() => handleSectionSelect("sports")}
            style={{ animationDelay: "300ms" }}
            className={`glow-card animate-fade-up group relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#FFFDF9] via-[#FDF7EE] to-[#FAF1E4] dark:from-slate-900 dark:to-slate-950 cursor-pointer flex flex-col justify-between transition-all duration-500 hover:-translate-y-3 hover:scale-[1.015] hover:shadow-[0_30px_80px_rgba(129,11,56,0.35)] shadow-[0_15px_40px_rgba(129,11,56,0.1)] ${
              selectedSection === "sports" ? "ring-4 ring-[#E60067] scale-[1.02]" : ""
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-12 items-stretch min-h-[380px] size-full">
              {/* LEFT CONTENT */}
              <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-4 relative z-10">
                <div className="space-y-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E60067] px-4 py-1.5 text-xs font-extrabold text-white shadow-md group-hover:bg-[#541A1A] group-hover:scale-105 transition-all duration-300">
                    🏋️‍♂️ {isEn ? "Section 2" : "विभाग २"}
                  </span>

                  <h3 className="font-display text-2xl sm:text-3xl font-black text-[#541A1A] group-hover:text-[#E60067] transition-colors leading-tight">
                    {isEn ? sportsClub.nameEn : sportsClub.nameMr}
                  </h3>

                  <div className="flex items-center gap-2 my-1">
                    <div className="h-[1px] w-8 bg-[#E60067]/40 group-hover:w-12 transition-all duration-300" />
                    <span className="text-[#E60067] text-xs group-hover:rotate-45 transition-transform duration-500">❦</span>
                    <div className="h-[1px] w-8 bg-[#E60067]/40 group-hover:w-12 transition-all duration-300" />
                  </div>

                  <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed font-medium">
                    {isEn
                      ? "Sangli's premier 1.5 acre modern sports complex! Olympic standard swimming pool, indoor badminton, table tennis court, AC gym & restaurant."
                      : "सांगलीतील 1.5 एकर भव्य आधुनिक क्रीडा संकूल! ऑलिंपिक स्टँडर्ड स्विमिंग पूल, इनडोअर बॅडमिंटन, टेबल टेनिस कोर्ट, वातानुकूलित जिम व रेस्टॉरंट."}
                  </p>
                </div>

                {/* BOTTOM BAR */}
                <div className="pt-4 border-t border-[#E60067]/15 flex items-center justify-between gap-2">
                  <div className="grid size-11 shrink-0 place-items-center rounded-2xl bg-[#E60067]/10 text-[#E60067] text-xl font-bold shadow-inner group-hover:scale-110 group-hover:bg-[#E60067]/20 transition-all duration-300">
                    🏋️‍♂️
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#E60067] px-5 py-3 text-xs sm:text-sm font-extrabold text-white shadow-lg group-hover:bg-[#541A1A] transition-all duration-300 group-hover:shadow-xl">
                    {isEn ? "Open Sports Club Details" : "स्पोर्ट्स क्लब माहिती उघडा"}
                    <span className="grid size-6 place-items-center rounded-full bg-white text-[#E60067] text-xs font-black group-hover:translate-x-1.5 group-hover:bg-amber-300 group-hover:text-[#541A1A] transition-all duration-300">
                      →
                    </span>
                  </span>
                </div>
              </div>

              {/* RIGHT FULL-HEIGHT SPORTS IMAGE */}
              <div className="md:col-span-6 relative min-h-[260px] md:min-h-full overflow-hidden rounded-b-[2.5rem] md:rounded-b-none md:rounded-l-[50px] border-t md:border-t-0 md:border-l-2 border-[#E6D2BF] bg-[#F5EBE0]">
                <img
                  src="/images/sports_img.png"
                  alt={isEn ? sportsClub.nameEn : sportsClub.nameMr}
                  className="absolute inset-0 size-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#FAF1E4]/30 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#541A1A]/30 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/25 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* 5 LUXURY FEATURE BADGES */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl w-full mx-auto relative z-10">
          {[
            { icon: "🛡️", titleEn: "Trust & Safety", titleMr: "विश्वास आणि सुरक्षा", textEn: "Symbol of your trust", textMr: "आपल्या विश्वासाचे प्रतीक" },
            { icon: "👥", titleEn: "Expert Experienced Team", titleMr: "तज्ज्ञ आणि अनुभवी टीम", textEn: "Always ready for service", textMr: "सेवेसाठी सदैव तत्पर" },
            { icon: "❤️", titleEn: "Service is Our Identity", titleMr: "सेवा हीच आमची ओळख", textEn: "Love, service & dedication", textMr: "प्रेम, सेवा आणि समर्पण" },
            { icon: "🌱", titleEn: "Clean & Scenic Campus", titleMr: "स्वच्छ आणि सुंदर परिसर", textEn: "Healthy lifestyle environment", textMr: "आरोग्याची जीवनशैली" },
            { icon: "🏆", titleEn: "Premium Facilities", titleMr: "उत्तम सुविधा व व्यवस्थापन", textEn: "Dedicated to your happiness", textMr: "आपल्या सुखाचा आमचा ध्यास" },
          ].map((badge, i) => (
            <div key={i} className="glow-card rounded-2xl border border-[#E60067]/15 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-4 flex items-center gap-3 transition-all hover:scale-105 hover:border-[#E60067]/40 shadow-sm">
              <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-[#E60067]/10 text-[#E60067] text-xl font-bold shadow-inner">
                {badge.icon}
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-black text-[#541A1A] leading-tight">{isEn ? badge.titleEn : badge.titleMr}</h4>
                <p className="text-[11px] text-muted-foreground font-medium mt-0.5">{isEn ? badge.textEn : badge.textMr}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      )}

      {/* ============================================================== */}
      {/* 2. SECTION 1 DETAILS: PREETAM AANANDSHALA (DEDICATED VIEW)     */}
      {/* ============================================================== */}
      {selectedSection === "aanandshala" && (
        <div id="aanandshala-section" className="animate-fade-up">
          {/* TOP BACK / NAVIGATION BAR */}
          <div className="sticky top-[70px] z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-[#E60067]/20 py-3 px-4 shadow-md flex items-center justify-between max-w-7xl mx-auto rounded-full my-4">
            <button
              onClick={() => handleSectionSelect(null)}
              className="inline-flex items-center gap-2 rounded-full bg-[#1A05A2] px-5 py-2 text-xs sm:text-sm font-extrabold text-white shadow-md hover:bg-[#E60067] transition-all cursor-pointer"
            >
              ← {isEn ? "All 2 Sections Menu" : "सर्व २ प्रकल्प मेनू (All Sections)"}
            </button>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleSectionSelect("aanandshala")}
                className="rounded-full bg-[#E60067] px-4 py-2 text-xs sm:text-sm font-extrabold text-white shadow-sm cursor-pointer"
              >
                🏠 {isEn ? "Anandashram" : "विभाग १ : आनंदआश्रम"}
              </button>
              <button
                onClick={() => handleSectionSelect("sports")}
                className="rounded-full bg-[#1A05A2]/10 border border-[#1A05A2]/30 px-4 py-2 text-xs sm:text-sm font-extrabold text-[#1A05A2] hover:bg-[#1A05A2] hover:text-white transition-all cursor-pointer"
              >
                🏋️‍♂️ {isEn ? "Sports Club" : "विभाग २ : स्पोर्ट्स क्लब"}
              </button>
            </div>
          </div>

          {/* HOME HERO BANNER */}
          <HomeHero />

          {/* MARQUEE TICKER */}
          <div className="overflow-hidden border-b py-3" style={{ background: "#1F070F", borderColor: "rgba(129,11,56,0.4)" }}>
            <div className="animate-marquee flex w-max gap-12 whitespace-nowrap text-xs sm:text-sm text-white font-bold">
              {Array.from({ length: 2 }).map((_, k) => (
                <span key={k} className="flex gap-12 items-center">
                  <span className="text-amber-200 font-extrabold">
                    {isEn
                      ? "“The gateway to healthy living & blissful golden years opens right here...” — Preetam Anandashram"
                      : "“ज्येष्ठ नागरिकांच्या निरोगी आरोग्य व आनंददायी आयुष्याचे दार येथेच उघडते...” — प्रीतम आनंदशाळा"}
                  </span>
                  <span className="text-[#DCC3AA] font-black">&bull;</span>
                  <span className="text-white font-bold">
                    {isEn
                      ? "• Book Admission Today • Grand Launch from 26/27/28 January 2026"
                      : "• आजच प्रवेश घ्या • शुभारंभ दि. २६/२७/२८ जानेवारी २०२६ पासून"}
                  </span>
                  <span className="text-[#DCC3AA] font-black">&bull;</span>
                  <span>
                    {isEn
                      ? "“Live with joy, preserve health, fulfill your dreams at Anandshala” — Dr. Girish Oak (Actor)"
                      : "“आनंदात जगायचं, आरोग्य जपायचं, आनंदशाळेत येऊन स्वप्न साकारायचं” — डॉ. गिरीश ओक (अभिनेते)"}
                  </span>
                </span>
              ))}
            </div>
          </div>

          {/* 23 REASONS CAROUSEL */}
          <SpecialReasons />

          {/* OUR JOURNEY SECTION */}
          <JourneyTimeline />


          {/* 15 ACTIVITY HALLS */}
          <section className="container-page py-16">
            <Reveal className="text-center">
              <span className="text-xs uppercase tracking-[0.3em] text-accent font-bold">
                {isEn ? "Halls & Activities" : "उपक्रम व हॉल्स"}
              </span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold">
                {isEn ? "15 Special Activity Halls in Anandshala" : "आनंदशाळेतील १५ विशेष उपक्रम हॉल्स"}
              </h2>
              <p className="mt-2 text-muted-foreground max-w-2xl mx-auto text-sm">
                {isEn ? "15 rich halls designed for daily joy, learning, recreation and hobbies!" : "आनंदशाळेत दररोज तुमच्या आवडीनुसार मनसोक्त आनंद घेता येईल असे १५ समृद्ध हॉल्स!"}
              </p>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {activityHalls.map((hall, i) => (
                <Reveal key={hall.titleMr} delay={(i % 3) * 70}>
                  <div className="glow-card group h-full p-5 transition-all duration-400">
                    <div className="flex items-center gap-3">
                      <span className="grid size-11 place-items-center rounded-xl bg-amber-500/10 text-2xl transition-transform group-hover:scale-110">
                        {hall.icon}
                      </span>
                      <h3 className="font-display text-base font-bold text-foreground">
                        {isEn ? hall.titleEn : hall.titleMr}
                      </h3>
                    </div>
                    <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {isEn ? hall.textEn : hall.textMr}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* DAILY SCHEDULE */}
          <section className="relative py-16 sm:py-24 px-4 overflow-hidden bg-gradient-to-b from-[#FAF5EE] via-[#F6ECE0] to-[#EFE2D2] dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 border-y border-[#E6D2BF]">
            <div className="pointer-events-none absolute top-0 left-0 size-80 sm:size-[400px]">
              <svg className="size-full" viewBox="0 0 400 400" fill="none">
                <path d="M 0 0 L 320 0 Q 240 160 0 280 Z" fill="#1B2A4A" opacity="0.95" />
                <path d="M 0 0 L 340 0 Q 255 170 0 295 Z" fill="none" stroke="#D99A26" strokeWidth="4" />
                <path d="M 0 0 L 360 0 Q 270 180 0 310 Z" fill="none" stroke="#E6D2BF" strokeWidth="1.5" strokeDasharray="6 6" />
              </svg>
            </div>

            <div className="pointer-events-none absolute bottom-0 right-0 size-80 sm:size-[420px] opacity-25">
              <svg className="size-full" viewBox="0 0 400 400" fill="none" stroke="#D99A26" strokeWidth="1">
                {Array.from({ length: 16 }).map((_, rIdx) => (
                  <line key={rIdx} x1="400" y1="400" x2={400 - Math.cos((rIdx * Math.PI) / 30) * 400} y2={400 - Math.sin((rIdx * Math.PI) / 30) * 400} />
                ))}
              </svg>
            </div>

            <div className="container-page relative z-10 max-w-7xl mx-auto">
              <Reveal className="text-center max-w-3xl mx-auto mb-16">
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#3B0E17] font-extrabold bg-[#F2DFBA] px-4 py-1.5 rounded-full border border-[#D99A26] shadow-sm">
                  ✦ {isEn ? "Schedule & Routine" : "वेळापत्रक"} ✦
                </span>
                <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E293B] dark:text-white tracking-tight drop-shadow-sm">
                  {isEn ? "Anandashala Daily Schedule (11:00 AM to 5:00 PM)" : "आनंदशाळेचे दैनिक वेळापत्रक (सकाळी ११ ते सायं. ५)"}
                </h2>
                <div className="flex items-center justify-center gap-3 my-3">
                  <div className="h-[1.5px] w-16 bg-gradient-to-r from-transparent via-[#D99A26] to-transparent" />
                  <span className="text-[#B8860B] text-sm font-bold">❦</span>
                  <div className="h-[1.5px] w-16 bg-gradient-to-r from-transparent via-[#D99A26] to-transparent" />
                </div>
                <p className="text-sm sm:text-base text-[#475569] dark:text-slate-300 font-bold max-w-2xl mx-auto">
                  {isEn ? "Planned daily activities for all-round development" : "विद्यार्थ्यांच्या सर्वांगीण विकासासाठी नियोजित रोजचे उपक्रम"}
                </p>
              </Reveal>

              {/* DESKTOP FLOW */}
              <div className="hidden lg:block relative py-8">
                <svg className="absolute inset-0 size-full pointer-events-none z-0 overflow-visible" preserveAspectRatio="none">
                  <path d="M 120 105 L 1050 105 Q 1150 105 1150 225 Q 1150 345 1050 345 L 150 345" fill="none" stroke="#1B2A4A" strokeWidth="12" strokeLinecap="round" />
                  <path d="M 120 105 L 1050 105 Q 1150 105 1150 225 Q 1150 345 1050 345 L 150 345" fill="none" stroke="#E0B85C" strokeWidth="3.5" strokeDasharray="9 7" />
                </svg>

                <div className="grid grid-cols-4 gap-6 relative z-10 mb-20">
                  {dailySchedule.slice(0, 4).map((item, idx) => (
                    <Reveal key={item.step} delay={idx * 120}>
                      <div className="group relative flex flex-col items-center">
                        <div className="relative -mb-6 z-20 flex flex-col items-center">
                          <span className="size-10 grid place-items-center rounded-full bg-[#1B2A4A] border-2 border-[#D99A26] text-[#E0B85C] font-black text-sm shadow-xl group-hover:scale-110 transition-transform">
                            {item.step}
                          </span>
                          <div className="size-16 rounded-full bg-gradient-to-b from-[#FFFDF9] to-[#F7EACD] border-2 border-[#D99A26] shadow-[0_0_20px_rgba(217,154,38,0.35)] grid place-items-center -mt-3 group-hover:rotate-6 group-hover:scale-105 transition-transform">
                            {item.iconSvg}
                          </div>
                        </div>
                        <div className="w-full pt-9 p-6 rounded-[2.2rem] border-2 border-[#E2CBAE] bg-[#FFFDF9] dark:bg-slate-900 shadow-[0_15px_40px_rgba(129,11,56,0.06)] group-hover:shadow-[0_25px_60px_rgba(129,11,56,0.18)] group-hover:-translate-y-2.5 transition-all duration-300 text-center flex flex-col justify-between min-h-[225px]">
                          <div>
                            <span className="inline-block rounded-full bg-[#F3DEB8] text-[#4A1515] px-3.5 py-1 text-xs font-black mb-3 border border-[#E2CBAE] shadow-sm">
                              {isEn ? item.timeEn : item.timeMr}
                            </span>
                            <h3 className="font-display text-base font-black text-[#3B0E17] dark:text-white leading-tight group-hover:text-[#E60067] transition-colors">
                              {isEn ? item.titleEn : item.titleMr}
                            </h3>
                          </div>
                          <p className="mt-3 text-xs text-[#541A1A]/80 dark:text-slate-300 font-semibold leading-relaxed">
                            {isEn ? item.textEn : item.textMr}
                          </p>
                        </div>
                        {idx < 3 && (
                          <div className="absolute -right-5 top-24 z-30 size-8 rounded-full bg-[#1B2A4A] border-2 border-[#D99A26] grid place-items-center text-[#E0B85C] text-xs font-black shadow-md">
                            »
                          </div>
                        )}
                      </div>
                    </Reveal>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-8 max-w-5xl mx-auto relative z-10">
                  {dailySchedule.slice(4, 7).map((item, idx) => (
                    <Reveal key={item.step} delay={(idx + 4) * 120}>
                      <div className="group relative flex flex-col items-center">
                        <div className="relative -mb-6 z-20 flex flex-col items-center">
                          <span className="size-10 grid place-items-center rounded-full bg-[#1B2A4A] border-2 border-[#D99A26] text-[#E0B85C] font-black text-sm shadow-xl group-hover:scale-110 transition-transform">
                            {item.step}
                          </span>
                          <div className="size-16 rounded-full bg-gradient-to-b from-[#FFFDF9] to-[#F7EACD] border-2 border-[#D99A26] shadow-[0_0_20px_rgba(217,154,38,0.35)] grid place-items-center -mt-3 group-hover:rotate-6 group-hover:scale-105 transition-transform">
                            {item.iconSvg}
                          </div>
                        </div>
                        <div className="w-full pt-9 p-6 rounded-[2.2rem] border-2 border-[#E2CBAE] bg-[#FFFDF9] dark:bg-slate-900 shadow-[0_15px_40px_rgba(129,11,56,0.06)] group-hover:shadow-[0_25px_60px_rgba(129,11,56,0.18)] group-hover:-translate-y-2.5 transition-all duration-300 text-center flex flex-col justify-between min-h-[225px]">
                          <div>
                            <span className="inline-block rounded-full bg-[#F3DEB8] text-[#4A1515] px-3.5 py-1 text-xs font-black mb-3 border border-[#E2CBAE] shadow-sm">
                              {isEn ? item.timeEn : item.timeMr}
                            </span>
                            <h3 className="font-display text-base font-black text-[#3B0E17] dark:text-white leading-tight group-hover:text-[#E60067] transition-colors">
                              {isEn ? item.titleEn : item.titleMr}
                            </h3>
                          </div>
                          <p className="mt-3 text-xs text-[#541A1A]/80 dark:text-slate-300 font-semibold leading-relaxed">
                            {isEn ? item.textEn : item.textMr}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>

              {/* MOBILE TIMELINE */}
              <div className="lg:hidden space-y-6 relative z-10">
                {dailySchedule.map((item, idx) => (
                  <Reveal key={item.step} delay={idx * 70}>
                    <div className="glow-card group relative p-6 rounded-[2rem] bg-[#FFFDF9] dark:bg-slate-900 border-2 border-[#E2CBAE] flex items-start gap-4 shadow-md">
                      <div className="shrink-0 flex flex-col items-center">
                        <span className="size-8 grid place-items-center rounded-full bg-[#1B2A4A] border border-[#D99A26] text-[#E0B85C] font-black text-xs">
                          {item.step}
                        </span>
                        <div className="size-13 rounded-full bg-gradient-to-b from-[#FFFDF9] to-[#F7EACD] border-2 border-[#D99A26] grid place-items-center mt-2 shadow-md">
                          {item.iconSvg}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="inline-block rounded-full bg-[#F3DEB8] text-[#4A1515] px-3 py-1 text-[11px] font-black mb-2 border border-[#E2CBAE]">
                          {isEn ? item.timeEn : item.timeMr}
                        </span>
                        <h3 className="font-display text-base font-black text-[#3B0E17] dark:text-white">
                          {isEn ? item.titleEn : item.titleMr}
                        </h3>
                        <p className="mt-2 text-xs text-[#541A1A]/80 dark:text-slate-300 font-semibold leading-relaxed">
                          {isEn ? item.textEn : item.textMr}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              <div className="mt-16 text-center">
                <span className="inline-flex items-center gap-2.5 rounded-full bg-[#1B2A4A] border-2 border-[#D99A26] px-7 py-3.5 text-xs sm:text-sm font-extrabold text-[#F5E2B8] shadow-2xl backdrop-blur-md">
                  <span className="text-amber-300 text-base">⭐</span>
                  <span>
                    {isEn
                      ? "Anandashala is the confluence of sports, knowledge, values & creativity."
                      : "खेळ, ज्ञान, संस्कार आणि सर्जनशीलतेचा संगम म्हणजे आनंदशाळा."}
                  </span>
                </span>
              </div>
            </div>
          </section>

          {/* STORY & FOUNDER MESSAGE - EXACT MATCH FOR USER IMAGE 2 */}
          <section className="relative py-16 sm:py-24 px-4 bg-gradient-to-b from-[#F4F7FB] via-[#EEF3FF] to-[#E5EDFF]">
            {/* Top Header matching Image 2 */}
            <div className="text-center mb-12 sm:mb-16 max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#17286E] tracking-tight">
                {isEn ? "Preetam Senior Citizen Anandshala" : "प्रीतम ज्येष्ठ नागरिक आनंदशाळा"}
              </h1>

              <p className="text-lg sm:text-2xl text-[#2B3B7E] font-bold italic mt-3 sm:mt-4">
                {isEn
                  ? "Yes, I am speaking as Preetam Senior Citizen Anandshala...!"
                  : "होय, मी प्रीतम ज्येष्ठ नागरिक आनंदशाळा बोलतेय...!"}
              </p>

              <div className="flex items-center justify-center gap-3 mt-5">
                <div className="w-24 sm:w-36 h-[2px] bg-gradient-to-r from-transparent via-red-400 to-red-500" />
                <div className="w-3.5 h-3.5 rounded-full bg-red-500 shadow-md shrink-0" />
                <div className="w-24 sm:w-36 h-[2px] bg-gradient-to-l from-transparent via-red-400 to-red-500" />
              </div>
            </div>

            {/* 2-Column Content Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column - Story Text (7 cols) */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#17286E] mb-6 sm:mb-8">
                  {isEn ? "Story of Anandshala" : "आनंदशाळेची कहाणी"}
                </h2>

                <div className="space-y-5 sm:space-y-6 text-[#2C3E50] text-base sm:text-lg lg:text-xl leading-relaxed font-medium">
                  <p>
                    {isEn ? (
                      <>My seeds were planted by <strong>Shri. Abhinav Jagannath Kamani (Resident of Sangli)</strong> from his dream project. Abhinav started business on 26th January 2000 and celebrates every anniversary, senior citizen get-together & picnic with grand joy.</>
                    ) : (
                      <>माझ्या जन्माची बीजे रुजली ती श्री. अभिनव जगन्नाथ कामाणी, रा. सांगली यांच्या स्वप्न प्रकल्पातून. अभिनव यांनी 26 जानेवारी 2000 रोजी व्यवसाय सुरू केला आणि दरवर्षी वर्धापन दिन, ज्येष्ठ नागरिक मेळावा व सहलीचे आयोजन करून तो साजरा करतात.</>
                    )}
                  </p>

                  <p>
                    {isEn ? (
                      <>Human beings naturally long for companionship, conversation, and relationships. When children grow up and move far away, solitude remains. This idea was born out of that thought — a 'school' for senior citizens where new joy is learned every single day.</>
                    ) : (
                      <>माणूस एकत्र राहणारा, बोलणारा, नाती जपणारा असतो. पाल्ये मोठे होऊन दूर देशी जाते तेव्हा मागे उरतात त्या आठवणी आणि एकांत... याच विचारातून ही संकल्पना समोर आली – ज्येष्ठ नागरिकांसाठी एक अशी 'शाळा', जिथे रोज नवा आनंद शिकायला मिळेल.</>
                    )}
                  </p>

                  <p>
                    {isEn ? (
                      <>Built in a 1.5 acre scenic green campus in Sangli city, this is India's first grand project. Here one can stay happily from 1 day to a lifetime.</>
                    ) : (
                      <>सांगली शहरातील दीड एकर जागेत, निसर्गरम्य वातावरणात उभा राहणारा हा भारतातील पहिलाच भव्य प्रकल्प आहे. येथे 1 दिवसापासून ते आयुष्यभर आनंदाने राहता येते.</>
                    )}
                  </p>
                </div>

                {/* Quote Box (Left Bottom) */}
                <div className="bg-[#EBF5FF] border-l-4 border-amber-500 rounded-r-3xl p-6 sm:p-7 mt-8 shadow-sm">
                  <p className="text-[#17286E] font-extrabold text-base sm:text-xl leading-snug">
                    {isEn
                      ? "“Live with joy, preserve health, fulfill your dreams by coming to Anandshala.”"
                      : "“आनंदात जगायचं, आरोग्य जपायचं, आनंदशाळेत येऊन स्वप्न साकारायचं.”"}
                  </p>
                  <p className="text-slate-600 font-bold text-sm sm:text-base mt-2.5">
                    {isEn ? "— Dr. Girish Oak, Actor" : "— डॉ. गिरीश ओक, अभिनेते"}
                  </p>
                </div>

              </div>

              {/* Right Column - Poster Image Card (5 cols) */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="rounded-[32px] overflow-hidden shadow-2xl border-4 border-white bg-white group hover:shadow-3xl transition duration-500 w-full max-w-lg">
                  <img
                    src="/images/anandashram_building_card.png"
                    onError={(e) => {
                      e.currentTarget.src = "/images/Screenshot 2026-07-31 104802.png";
                    }}
                    alt={isEn ? "Preetam Anandshala Poster" : "प्रीतम ज्येष्ठ नागरिक आनंदशाळा पोस्टर"}
                    className="w-full h-auto object-cover max-h-[750px] transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

            </div>
          </section>

          {/* ================= GALLERY SECTION ================= */}
          <section className="relative py-24 overflow-hidden bg-gradient-to-b from-[#f7fbff] via-[#eef5ff] to-[#ffffff]">

            {/* Background Blur */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-pink-200/30 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-[120px]" />

            <div className="relative max-w-7xl mx-auto px-6">

              {/* Heading */}
              <div className="text-center">

                <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white shadow text-pink-600 font-semibold tracking-wider text-sm">
                  📸 GALLERY
                </span>

                <h2 className="mt-5 text-5xl font-extrabold text-[#1f2a8a]">
                  {isEn ? "Gallery" : "गॅलरी"}
                </h2>

                <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-8">
                  {isEn
                    ? "Inspiring moments from the project created in the lap of nature in Sangli."
                    : "सांगलीच्या कुशीत, निसर्गरम्य वातावरणात साकारलेल्या प्रकल्पातील प्रेरणादायी क्षण."}
                </p>

                <div className="mt-8 w-28 h-1 rounded-full mx-auto bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"></div>

              </div>

              {/* Category Filter Buttons */}
              <div className="mt-14 flex flex-wrap justify-center gap-4">
                {galleryCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedGalleryCategory(category)}
                    className={`group relative overflow-hidden rounded-full border px-7 py-3 text-sm font-semibold transition-all duration-300 cursor-pointer ${
                      selectedGalleryCategory === category
                        ? "bg-gradient-to-r from-pink-600 to-purple-700 text-white shadow-xl scale-105 border-transparent"
                        : "bg-white text-[#1f2a8a] border-gray-200 hover:border-pink-400 hover:text-pink-600 hover:-translate-y-1 hover:shadow-lg"
                    }`}
                  >
                    <span className="relative z-10">{category}</span>

                    {selectedGalleryCategory !== category && (
                      <span className="absolute inset-0 translate-y-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 transition-transform duration-300 group-hover:translate-y-0" />
                    )}
                  </button>
                ))}
              </div>

              {/* Gallery Grid */}
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[
                  { src: "/images/aandshala sahal 1.jpeg", category: "वार्षिक स्नेहसंमेलन", title: "आनंद सहल", desc: "सहलीचा आनंददायी क्षण" },
                  { src: "/images/aandmelav 10.jpeg", category: "आनंद मेळावा", title: "आनंद मेळावा", desc: "सांस्कृतिक कार्यक्रम" },
                  { src: "/images/aandmelava1.jpg", category: "आनंद मेळावा", title: "सांस्कृतिक उत्सव", desc: "ज्येष्ठ नागरिक मेळावा" },
                  { src: "/images/yoga.jpg", fallback: "/images/Screenshot 2026-07-31 103659.png", category: "ज्येष्ठ नागरिक आनंदशाळा", title: "योगा व प्राणायाम", desc: "आरोग्यदायी दिनचर्या" },
                  { src: "/images/music.jpg", fallback: "/images/aandmelav 5.jpg", category: "ज्येष्ठ नागरिक आनंदशाळा", title: "संगीत संध्या", desc: "भजन व गायन" },
                  { src: "/images/games.jpg", fallback: "/images/Screenshot 2026-07-31 103517.png", category: "ज्येष्ठ नागरिक आनंदशाळा", title: "खेळ व मनोरंजन", desc: "कॅरम व इनडोअर गेम्स" },
                  { src: "/images/Screenshot 2026-07-31 103107.png", category: "ज्येष्ठ नागरिक आनंदशाळा", title: "आनंद निवास", desc: "वास्तू परिसर" },
                  { src: "/images/Screenshot 2026-07-31 103213.png", category: "बांधकाम", title: "गार्डन व लॉन", desc: "हिरवागार परिसर" },
                  { src: "/images/ropya mahotsv1.jpg", category: "भूमिपूजन", title: "भूमिपूजन सोहळा", desc: "शुभप्रसंग भूमिपूजन" },
                  { src: "/images/ropya mahotsv 2.jpg", category: "भूमिपूजन", title: "रौप्य महोत्सव", desc: "रौप्य महोत्सव सोहळा" },
                  { src: "/images/samajik karya1.jpeg", category: "सामाजिक कार्य", title: "सामाजिक कार्य", desc: "ज्येष्ठ नागरिक सेवा" },
                  { src: "/images/samajik karya 2.jpeg", category: "सामाजिक कार्य", title: "आरोग्य शिबिर", desc: "मोफत आरोग्य सेवा" },
                  { src: "/images/vyavsaik mahiti 1.jpeg", category: "मान्यवर भेट", title: "मान्यवर सत्कार", desc: "विशेष अतिथी सत्कार" },
                  { src: "/images/vyavsaik mahiti 2.jpeg", category: "मान्यवर भेट", title: "मान्यवर भेट", desc: "विशेष मान्यवरांची भेट" },
                  { src: "/images/img1.jpeg", category: "विशेष कार्यक्रम", title: "विशेष कार्यक्रम", desc: "सांस्कृतिक सादरीकरण" },
                  { src: "/images/img2.jpeg", category: "विशेष कार्यक्रम", title: "आनंद उत्सव", desc: "आनंददायी क्षण" },
                ]
                  .filter((item) => selectedGalleryCategory === "सर्व" || item.category === selectedGalleryCategory)
                  .map((item, idx) => (
                    <div
                      key={idx}
                      className="group relative rounded-[28px] overflow-hidden shadow-lg border border-white/60 bg-white hover:-translate-y-2 hover:shadow-2xl transition duration-500"
                    >
                      <div className="h-64 overflow-hidden">
                        <img
                          src={item.src}
                          onError={(e) => {
                            if (item.fallback) e.currentTarget.src = item.fallback;
                          }}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                        />
                      </div>
                      <div className="p-5 bg-white">
                        <span className="inline-block px-3 py-1 rounded-full bg-pink-50 text-pink-600 text-xs font-bold mb-2">
                          {item.category}
                        </span>
                        <h3 className="font-bold text-[#1f2a8a] text-lg">{item.title}</h3>
                        <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
              </div>

            </div>

          </section>
        </div>
      )}

      {/* ============================================================== */}
      {/* 3. SECTION 2 DETAILS: PREETAM SPORTS CLUB (DEDICATED VIEW)     */}
      {/* ============================================================== */}
      {selectedSection === "sports" && (
        <div id="sports-section" className="animate-fade-up">
          {/* TOP BACK / NAVIGATION BAR */}
          <div className="sticky top-[70px] z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-[#1A05A2]/20 py-3 px-4 shadow-md flex items-center justify-between max-w-7xl mx-auto rounded-full my-4">
            <button
              onClick={() => handleSectionSelect(null)}
              className="inline-flex items-center gap-2 rounded-full bg-[#1A05A2] px-5 py-2 text-xs sm:text-sm font-extrabold text-white shadow-md hover:bg-[#E60067] transition-all cursor-pointer"
            >
              ← {isEn ? "All 2 Sections Menu" : "सर्व २ प्रकल्प मेनू (All Sections)"}
            </button>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleSectionSelect("aanandshala")}
                className="rounded-full bg-[#E60067]/10 border border-[#E60067]/30 px-4 py-2 text-xs sm:text-sm font-extrabold text-[#E60067] hover:bg-[#E60067] hover:text-white transition-all cursor-pointer"
              >
                🏠 {isEn ? "Anandashram" : "विभाग १ : आनंदआश्रम"}
              </button>
              <button
                onClick={() => handleSectionSelect("sports")}
                className="rounded-full bg-[#1A05A2] px-4 py-2 text-xs sm:text-sm font-extrabold text-white shadow-sm cursor-pointer"
              >
                🏋️‍♂️ {isEn ? "Sports Club" : "विभाग २ : स्पोर्ट्स क्लब"}
              </button>
            </div>
          </div>

          {/* ── PREETAM SPORTS PREMIUM SECTION ── */}
          <SportsSection />
        </div>
      )}
    </div>
  );
}

export default IndexComponent;
