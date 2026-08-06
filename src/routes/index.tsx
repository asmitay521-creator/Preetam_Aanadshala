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
import JourneySection from "@/components/journey/JourneySection";
import ScheduleSection from "@/components/ScheduleSection";


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
  { icon: "♟️", titleMr: "बैठे खेळ हॉल", titleEn: "Indoor Games Hall", textMr: "कॅरम, बुद्धिबळ, पत्ते, सापाशिडी इत्यादी खेळ खेळणे.", textEn: "Play Carrom, Chess, Cards, Snakes & Ladders.", image: "baithe khel.png" },
  { icon: "🎨", titleMr: "आर्ट हॉल", titleEn: "Arts & Crafts Studio", textMr: "चित्रकला, हस्तकला, विणकाम व कला शिकणे व सराव करणे.", textEn: "Learn painting, handicrafts, knitting & creative arts.", image: "aart hall.png" },
  { icon: "🎵", titleMr: "संगीत उपकरणे हॉल", titleEn: "Music Instrument Lounge", textMr: "तबला, गिटार, हार्मोनिअम, पेटी, पियानो, सॅक्सोफोन, बासरी शिकणे व आनंद घेणे.", textEn: "Play & learn Tabla, Guitar, Harmonium, Piano, Saxophone & Flute.", image: "sangit hall.png" },
  { icon: "💻", titleMr: "माहिती तंत्रज्ञान हॉल", titleEn: "IT & Digital Learning Hall", textMr: "कॉम्प्युटर, लॅपटॉप, मोबाईल, इंटरनेट व प्रिंटर शिकणे.", textEn: "Learn computer basics, smartphones, internet & printing.", image: "mahiti tantradyan hall.png" },
  { icon: "🥳", titleMr: "करमणूक हॉल", titleEn: "Recreation & Fun Hall", textMr: "गप्पा-गोष्टी, अंताक्षरी, पासिंग गेम व समूह खेळ खेळणे.", textEn: "Enjoy Antakshari, group games, conversations & storytelling.", image: "karmnuk hall.png" },
  { icon: "🏊", titleMr: "स्विमिंग पूल", titleEn: "Swimming Pool Complex", textMr: "पोहण्याचा व स्वच्छ पाण्यात खेळण्याचा मनसोक्त आनंद घेणे.", textEn: "Enjoy swimming in clean filtered water pool.", image: "swimming hall.png" },
  { icon: "📽️", titleMr: "संस्कार व संप्रदाय हॉल", titleEn: "Spiritual & Cultural Hall", textMr: "विविध धार्मिक कार्यक्रम, संस्कार वर्ग व व्हिडिओ पाहणे.", textEn: "Spiritual discourses, value classes & video screenings.", image: "sanskar sampraday hall.png" },
  { icon: "🏸", titleMr: "विविध खेळ हॉल", titleEn: "Sports Arena", textMr: "बॅडमिंटन, टेबल टेनिस, स्नुकर व स्क्वॅश खेळणे.", textEn: "Play Badminton, Table Tennis, Snooker & Squash.", image: "tebal tenis.png" },
  { icon: "🏋️", titleMr: "व्यायाम हॉल", titleEn: "Fitness & Wellness Lounge", textMr: "जीम, योगा, मेडिटेशन, झुम्बा व डान्स इत्यादी करणे.", textEn: "Gym, Yoga, Meditation, Zumba & Dance sessions.", image: "vyayam hall.png" },
  { icon: "🍲", titleMr: "पाककृती हॉल", titleEn: "Culinary & Cooking Studio", textMr: "स्वयंपाक, नाश्ता, जेवण, आईस्क्रीम, सरबते व मिठाई इत्यादी बनवणे शिकणे.", textEn: "Learn culinary skills, mocktails, sweets & snacks.", image: "pakruti hall.png" },
  { icon: "🛌", titleMr: "विश्रांती हॉल", titleEn: "Relaxation Lounge", textMr: "वाचन करणे, शांत झोपणे किंवा आराम खुर्चीत विश्रांती घेणे.", textEn: "Read books, quiet nap, or relax on recliners.", image: "vishranti hall.png" },
  { icon: "🎬", titleMr: "थिएटर हॉल", titleEn: "Mini Theatre Hall", textMr: "टी.व्ही., सिनेमा, नाटक व सांस्कृतिक कार्यक्रम पाहणे.", textEn: "Watch movies, TV shows, dramas & cultural performances.", image: "ChatGPT Image Aug 5, 2026, 04_15_03 PM.png" },
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
  const [selectedSection, setSelectedSection] = useState<"aanandshala" | "sports" | null>(null);
  const [selectedGalleryCategory, setSelectedGalleryCategory] = useState("सर्व");
  const { isEn } = useLanguage();

  useEffect(() => {
    const handleReset = () => setSelectedSection(null);
    window.addEventListener("reset-section", handleReset);
    return () => window.removeEventListener("reset-section", handleReset);
  }, []);

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
                className={`rounded-full px-7 py-3 text-xs sm:text-sm font-extrabold transition-all duration-300 cursor-pointer shadow-md ${selectedSection === null
                    ? "bg-[#1A05A2] text-white shadow-xl scale-105"
                    : "bg-white/90 border border-[#E60067]/20 text-[#1A05A2] hover:bg-[#E60067]/10"
                  }`}
              >
                ⠿ {isEn ? "All 2 Projects" : "सर्व २ प्रकल्प (All Sections)"}
              </button>
              <button
                onClick={() => handleSectionSelect("aanandshala")}
                className={`rounded-full px-7 py-3 text-xs sm:text-sm font-extrabold transition-all duration-300 cursor-pointer shadow-md ${selectedSection === "aanandshala"
                    ? "bg-[#E60067] text-white shadow-xl scale-105"
                    : "bg-white/90 border border-[#E60067]/20 text-[#E60067] hover:bg-[#E60067]/10"
                  }`}
              >
                🏠 {isEn ? "Section 1: Anandashram" : "विभाग १ : आनंदआश्रम"}
              </button>
              <button
                onClick={() => handleSectionSelect("sports")}
                className={`rounded-full px-7 py-3 text-xs sm:text-sm font-extrabold transition-all duration-300 cursor-pointer shadow-md ${selectedSection === "sports"
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
              className={`glow-card animate-fade-up group relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#FFFDF9] via-[#FDF7EE] to-[#FAF1E4] dark:from-slate-900 dark:to-slate-950 cursor-pointer flex flex-col justify-between transition-all duration-500 hover:-translate-y-3 hover:scale-[1.015] hover:shadow-[0_30px_80px_rgba(129,11,56,0.35)] shadow-[0_15px_40px_rgba(129,11,56,0.1)] ${selectedSection === "aanandshala" ? "ring-4 ring-[#E60067] scale-[1.02]" : ""
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
              className={`glow-card animate-fade-up group relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#FFFDF9] via-[#FDF7EE] to-[#FAF1E4] dark:from-slate-900 dark:to-slate-950 cursor-pointer flex flex-col justify-between transition-all duration-500 hover:-translate-y-3 hover:scale-[1.015] hover:shadow-[0_30px_80px_rgba(129,11,56,0.35)] shadow-[0_15px_40px_rgba(129,11,56,0.1)] ${selectedSection === "sports" ? "ring-4 ring-[#E60067] scale-[1.02]" : ""
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
          <JourneySection />


          {/* 15 ACTIVITY HALLS */}
          <section className="relative py-20 bg-slate-50 dark:bg-[#0a0a1a] overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#E60067]/30 to-transparent" />
            <div className="absolute -top-40 -right-40 size-[500px] bg-pink-500/5 rounded-full blur-[100px]" />
            <div className="absolute top-40 -left-40 size-[400px] bg-blue-600/5 rounded-full blur-[100px]" />

            <div className="container-page relative z-10 max-w-7xl mx-auto px-4">
              <Reveal className="text-center mb-16">
                <span className="inline-block py-1.5 px-5 rounded-full bg-pink-500/10 border border-pink-500/20 text-xs font-black tracking-widest text-[#E60067] uppercase mb-4 shadow-sm">
                  {isEn ? "Halls & Activities" : "उपक्रम व हॉल्स"}
                </span>
                <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-[#1a1a40] dark:text-white drop-shadow-sm tracking-tight mb-4">
                  {isEn ? "15 Special Activity Halls in Anandshala" : "आनंदशाळेतील १५ विशेष उपक्रम हॉल्स"}
                </h2>
                <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base sm:text-lg font-medium leading-relaxed">
                  {isEn ? "15 thoughtfully designed halls tailored to fill your everyday with joy, learning, and endless recreation!" : "आनंदशाळेत दररोज तुमच्या आवडीनुसार मनसोक्त आनंद घेता येईल असे १५ समृद्ध आणि सुसज्ज हॉल्स!"}
                </p>
              </Reveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {activityHalls.map((hall, i) => (
                  <Reveal key={hall.titleMr} delay={(i % 4) * 80} className={`${i === 0 || i === 7 ? 'lg:col-span-2' : ''}`}>
                    <div className="group relative h-[320px] rounded-3xl overflow-hidden bg-slate-900 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-white/10">
                      
                      {/* Background Image / Placeholder Gradient */}
                      {hall.image ? (
                        <img 
                          src={`/images/subimg/${hall.image}`} 
                          alt={hall.titleMr}
                          loading="lazy"
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      ) : (
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#1A05A2] via-[#E60067] to-orange-500 opacity-80 transition-transform duration-700 group-hover:scale-110" />
                      )}

                      {/* Overlays */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                      
                      {/* Content Container */}
                      <div className="absolute inset-0 p-6 flex flex-col justify-end z-10 text-white">
                        
                        {/* Icon & Title Row */}
                        <div className="flex items-center gap-4 transform transition-transform duration-500 group-hover:-translate-y-4">
                          <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-white/20 backdrop-blur-md shadow-inner text-2xl border border-white/30 group-hover:bg-[#E60067] transition-colors duration-500">
                            {hall.icon}
                          </div>
                          <div>
                            <h3 className="font-display text-xl sm:text-2xl font-bold leading-tight text-white drop-shadow-md">
                              {isEn ? hall.titleEn : hall.titleMr}
                            </h3>
                          </div>
                        </div>

                        {/* Hidden Text sliding up on hover */}
                        <div className="h-0 opacity-0 overflow-hidden transition-all duration-500 group-hover:h-auto group-hover:opacity-100 group-hover:mt-2">
                          <p className="text-slate-200 text-sm sm:text-base font-medium leading-snug border-l-2 border-[#E60067] pl-3 py-1">
                            {isEn ? hall.textEn : hall.textMr}
                          </p>
                        </div>

                        {/* Corner Decorative Element */}
                        <div className="absolute top-4 right-4 opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                          <svg className="size-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* DAILY SCHEDULE NEW */}
          <ScheduleSection />




        </div>
      )}

      {/* ============================================================== */}
      {/* 3. SECTION 2 DETAILS: PREETAM SPORTS CLUB (DEDICATED VIEW)     */}
      {/* ============================================================== */}
      {selectedSection === "sports" && (
        <div id="sports-section" className="animate-fade-up">
          {/* TOP BACK / NAVIGATION BAR REMOVED AS PER USER REQUEST */}

          {/* ── PREETAM SPORTS PREMIUM SECTION ── */}
          <SportsSection />
        </div>
      )}
    </div>
  );
}

export default IndexComponent;
