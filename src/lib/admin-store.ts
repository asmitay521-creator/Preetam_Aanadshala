import { useState, useEffect } from "react";

// ============================================================================
// TYPES
// ============================================================================

export type GalleryItem = {
  id: string;
  url: string;
  caption: string;
  category: string[];
};

export type InquiryItem = {
  id: string;
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  date: string;
  read: boolean;
};

export type TestimonialItem = {
  id: string;
  name: string;
  role: string;
  text?: string;
  videoUrl?: string;
  videoThumbnail?: string;
  rating: number;
  approved: boolean;
  date: string;
};

export type SiteData = {
  nameMr: string;
  tagline: string;
  announcement: string;
  launchDate: string;
  phone1: string;
  phone2: string;
  email: string;
  address: string;
  girishOakQuote: string;
  anandshalaDesc: string;
  sportsDesc: string;
};

export type HomeNewsItem = {
  id: string;
  title: string;
  badge?: string;
  description: string;
  imageUrl?: string;
  date: string;
  linkUrl?: string;
};

export type PackageItem = {
  id: string;
  title: string;
  price: string;
  sub: string;
  badge: string;
  periodType: "days" | "month" | "year";
  features: string[];
  featured?: boolean;
};

export type AboutData = {
  storyP1: string;
  storyP2: string;
  storyP3: string;
  awardNotice: string;
};

export type BrochureItem = {
  id: string;
  title: string;
  category: string;
  fileUrl: string;
  fileType: "pdf" | "image";
  description?: string;
  date: string;
};

// ============================================================================
// INITIAL DEFAULT DATA
// ============================================================================

export const initialPackages: PackageItem[] = [
  {
    id: "pkg-1",
    title: "एक दिवस सहल भेट पास",
    price: "₹ ६०० /-",
    sub: "वेळ: सकाळी ११ ते सायं. ५ (एका व्यक्तीसाठी)",
    badge: "१ दिवस सहल भेट पास",
    periodType: "days",
    features: [
      "चहा, नाश्ता व चवदार प्युअर व्हेज जेवण",
      "संपूर्ण १.५ एकर विहंगम परिसर दर्शन",
      "खेळ, स्विमिंग पूल व सर्व सोयी-सुविधांचा आनंद",
      "मित्र-मैत्रिणींसोबत एक आनंददायी दिवस",
    ],
  },
  {
    id: "pkg-2",
    title: "फक्त आनंदशाळा (डे-केअर)",
    price: "₹ ३,००० /-",
    sub: "प्रति महिना पासून (मानसिक फी)",
    badge: "डे-केअर पर्याय",
    periodType: "month",
    features: [
      "वेळ: सकाळी ११ ते सायं. ५",
      "दैनंदिन ५ तासांचे १५ हॉल्समधील उपक्रम",
      "खेळ, कला, संगीत व व्यायाम",
      "निरोगी व उत्साही दिनचर्या",
    ],
  },
  {
    id: "pkg-3",
    title: "आनंदनिवास (राहण्यासह)",
    price: "₹ ११,००० /-",
    sub: "प्रति महिना पासून (*GST Extra)",
    badge: "संपूर्ण निवासाचा पर्याय",
    periodType: "month",
    featured: true,
    features: [
      "फुल फर्निश्ड निवास + आनंदशाळा",
      "नाश्ता २ वेळ, जेवण २ वेळ, चहा २ वेळ",
      "२४x७ वैद्यकीय काळजी व हेल्पडेस्क",
      "सर्व उपक्रम, खेळ व गोशाळा आनंद",
    ],
  },
  {
    id: "pkg-4",
    title: "प्रीतम एलिट लाईफटाईम मेंबरशिप",
    price: "₹ १,५०,००० /-",
    sub: "१० वर्षांचे फॅमिली मेंबरशिप",
    badge: "वार्षिक व १० वर्षे योजना",
    periodType: "year",
    featured: true,
    features: [
      "४ सदस्यांच्या कुटुंबासाठी प्रीमियम क्लब प्रवेश",
      "स्विमिंग पूल, इनडोअर बॅडमिंटन व जिम मोफत",
      "सर्व कार्यक्रमांमध्ये प्राधान्य प्रवेश",
      "वार्षिक विशेष डिस्काऊंट ऑफर्स",
    ],
  },
];

const initialSiteData: SiteData = {
  nameMr: "प्रीतम ज्येष्ठ नागरिक आनंदशाळा",
  tagline: "ज्येष्ठ नागरिकांच्या निरोगी आरोग्य व आनंददायी आयुष्याचे दार येथेच उघडते....",
  announcement: "सांगली · महाराष्ट्र · सवलतीच्या दरात ॲडव्हान्स बुकिंग सुरू",
  launchDate: "शुभारंभ : २६ / २७ / २८ जानेवारी २०२६ पासून",
  phone1: "99 7007 9090",
  phone2: "94 2325 8859",
  email: "preetamanandshala@gmail.com",
  address: "सर्व्हे नं. ३९/१,२,३, माधवनगर - धनंजय गार्डन रोड, रेल्वे गेट शेजारी, सांगली",
  girishOakQuote: "आनंदात जगायचं, आरोग्य जपायचं, आनंदशाळेत येऊन स्वप्न साकारायचं",
  anandshalaDesc: "भारतातील पहिली ज्येष्ठ नागरिक आनंदशाळा! निवास, सकस जेवण, २४x७ दवाखाना, ५५ फुटांची राधाकृष्ण मूर्ती, मंदिर, गोशाळा, १५ उपक्रम हॉल्स व सर्व सोयी सुविधा.",
  sportsDesc: "सांगलीतील १.५ एकर भव्य अद्ययावत क्रीडा संकुल! ओलंपिक स्टाईल स्विमिंग पूल, इनडोअर बॅडमिंटन, टेनिस कोर्ट, वातानुकूलित जीम व रेस्टॉरंट.",
};

const initialHomeNews: HomeNewsItem[] = [
  {
    id: "news-1",
    title: "प्रीतम आनंदशाळा भव्य शुभारंभ दि. २६, २७ व २८ जानेवारी २०२६!",
    badge: "नवीन घोषणा",
    description: "सांगलीतील माधवनगर रस्त्यावर दीड एकर निसर्गरम्य परिसरात आनंदशाळेचा भव्य शुभारंभ होत आहे. आजच आपले ॲडव्हान्स बुकिंग निश्चित करा.",
    imageUrl: "/images/Screenshot 2026-07-31 103107.png",
    date: "१ ऑगस्ट २०२६",
  },
];

const initialAboutData: AboutData = {
  storyP1: "माझ्या जन्माची बीजे रुजली ती श्री. अभिनय जगन्नाथ कामाजी (रा. सांगली) यांच्या स्वप्न प्रकल्पातून. अभिनय यांनी २६ जानेवारी २००० रोजी व्यवसाय सुरू केला आणि दरवर्षी वर्धापन दिन, वाढदिवस व ज्येष्ठ नागरिक मेळाव्याचे आयोजन करून साजरा करतात. १५ ऑगस्ट २०२३ रोजी भूमिपूजन झाले असून २६ जानेवारी २०२६ रोजी भव्य शुभारंभ होत आहे.",
  storyP2: "माणूस हा एकत्र राहणारा, बोलणारा, नाती जपणारा असतो. पाल्य मोठे होऊन दूर देशी जाते तेव्हा मागे उरतात त्या आठवणी आणि एकांत... याच विचारातून ही संकल्पना समोर आली — ज्येष्ठ नागरिकांसाठी एक अशी ‘आनंदशाळा’, जिथे रोज नवा आनंद शिकायला मिळेल!",
  storyP3: "सांगली शहरातील दीड एकर जागेत, निसर्गाच्या सानिध्यात उभा राहणारा हा भारतातील पहिलाच भव्य प्रकल्प आहे. येथे १ दिवसापासून ते शेवटच्या क्षणापर्यंत आनंदाने राहता येते.",
  awardNotice: "'साई दिशा प्रतिष्ठान' मुंबई यांच्याकडून व्यवसाय व सामाजिक कार्यासाठी 'समाजभूषण पुरस्कार' प्राप्त!",
};

const initialBrochures: BrochureItem[] = [
  {
    id: "broch-1",
    title: "प्रीतम आनंदशाळा अधिकृत माहिती पत्रक (Official Brochure)",
    category: "आनंदशाळा ब्रोशर",
    fileUrl: "/images/Screenshot 2026-07-31 103107.png",
    fileType: "image",
    description: "आनंदशाळेचे १५ उपक्रम हॉल्स, दैनिक वेळापत्रक व संपूर्ण १५ सुविधांची रंगीत माहिती.",
    date: "३१ जुलै २०२६",
  },
  {
    id: "broch-2",
    title: "प्रीतम स्पोर्ट्स अँड फिटनेस क्लब माहिती व फी तक्ता",
    category: "स्पोर्ट्स क्लब ब्रोशर",
    fileUrl: "/images/epic_sports_gym_bg.png",
    fileType: "image",
    description: "जिम, स्विमिंग पूल, बॅडमिंटन कोर्ट व एलिट फॅमिली मेंबरशिप माहिती.",
    date: "३० जुलै २०२६",
  },
];

const initialGallery: GalleryItem[] = [
  {
    id: "g1",
    url: "/images/Screenshot 2026-07-31 103107.png",
    caption: "आनंदशाळा मुखपृष्ठ माहिती पत्रक व प्रवेश माहिती",
    category: ["ज्येष्ठ नागरिक आनंदशाळा माहिती", "रौप्य महोत्सव व प्रकाशन", "प्रीतम व्यावसायिक माहिती"],
  },
  {
    id: "g2",
    url: "/images/Screenshot 2026-07-31 103131.png",
    caption: "आनंदशाळेतील ५ तासांचे वेळापत्रक व १५ उपक्रम हॉल्स",
    category: ["ज्येष्ठ नागरिक आनंदशाळा माहिती", "ज्येष्ठ नागरिक विरंगुळा केंद्र"],
  },
  {
    id: "g3",
    url: "/images/Screenshot 2026-07-31 103152.png",
    caption: "आनंदशाळा १.५ एकर विहंगम परिसर व बांधकाम दृश्य",
    category: ["आनंदशाळा भूमिपूजन व बांधकाम", "ज्येष्ठ नागरिक आनंदशाळा माहिती"],
  },
  {
    id: "g4",
    url: "/images/Screenshot 2026-07-31 103213.png",
    caption: "५५ फुटांची राधाकृष्ण मूर्ती, नियोजित मंदिर व गोशाळा",
    category: ["आनंदशाळा भूमिपूजन व बांधकाम", "ज्येष्ठ नागरिक आनंदशाळा माहिती"],
  },
  {
    id: "g5",
    url: "/images/Screenshot 2026-07-31 103238.png",
    caption: "१ दिवस सहल भेट पास (रु. ६००/-) सोहळा व व्हॅन सेवा",
    category: ["ज्येष्ठ नागरिक आनंद सहल", "रौप्य महोत्सव व प्रकाशन"],
  },
  {
    id: "g6",
    url: "/images/aandshala sahal 1.jpeg",
    caption: "आनंद सहलीतील ज्येष्ठ नागरिकांचे आनंदी क्षण",
    category: ["ज्येष्ठ नागरिक आनंद सहल", "ज्येष्ठ नागरिक विरंगुळा केंद्र"],
  },
  {
    id: "g7",
    url: "/images/Screenshot 2026-07-31 103517.png",
    caption: "ज्येष्ठ नागरिक आनंद मेळावा व स्नेहमेलन सांगली",
    category: ["ज्येष्ठ नागरिक आनंद मेळावा", "सामाजिक कार्य माहिती"],
  },
  {
    id: "g8",
    url: "/images/Screenshot 2026-07-31 103545.png",
    caption: "आनंद मेळावा सांस्कृतिक व करमणूक कार्यक्रम",
    category: ["ज्येष्ठ नागरिक आनंद मेळावा", "ज्येष्ठ नागरिक विरंगुळा केंद्र"],
  },
  {
    id: "g9",
    url: "/images/Screenshot 2026-07-31 103659.png",
    caption: "विरंगुळा केंद्र - कॅरम, बुद्धिबळ, वाचनालय व आर्ट हॉल्स",
    category: ["ज्येष्ठ नागरिक विरंगुळा केंद्र", "ज्येष्ठ नागरिक आनंदशाळा माहिती"],
  },
  {
    id: "g10",
    url: "/images/Screenshot 2026-07-31 103712.png",
    caption: "स्विमिंग पूल, स्पोर्ट्स कॉम्प्लेक्स व योग केंद्र",
    category: ["ज्येष्ठ नागरिक विरंगुळा केंद्र", "आनंदशाळा भूमिपूजन व बांधकाम"],
  },
  {
    id: "g11",
    url: "/images/Screenshot 2026-07-31 103842.png",
    caption: "प्रीतम आपुलकी व जिव्हाळा ट्रस्ट - सामाजिक कार्य व सन्मान",
    category: ["सामाजिक कार्य माहिती", "प्रीतम व्यावसायिक माहिती", "रौप्य महोत्सव व प्रकाशन"],
  },
];

const initialInquiries: InquiryItem[] = [
  { id: "inq-1", name: "रमेश पाटील", phone: "98221 45678", email: "ramesh.patil@gmail.com", subject: "डे-केअर प्रवेश बुकिंग", message: "माझ्या आई-वडिलांसाठी आनंदशाळा डे-केअर प्रवेशासाठी माहिती हवी आहे.", date: "३१ जुलै २०२६, स. ११:३०", read: false },
  { id: "inq-2", name: "सुरेश कुलकर्णी", phone: "94220 89123", email: "suresh.kulkarni@yahoo.com", subject: "१ दिवस सहल भेट पास", message: "आमच्या ज्येष्ठ नागरिक संघासाठी १ दिवस सहल पास बुकिंग कसे करावे?", date: "३० जुलै २०२६, सायं. ०४:१५", read: false },
  { id: "inq-3", name: "आनंद शहा", phone: "97654 32109", email: "anand.shah@gmail.com", subject: "आनंदनिवास १ महिना बुकिंग", message: "१ महिन्याच्या आनंदनिवास निवासाची फी आणि सोयी-सुविधांची विचारणा.", date: "२९ जुलै २०२६, दु. ०२:००", read: false },
];

const initialTestimonials: TestimonialItem[] = [
  {
    id: "vtest-1",
    name: "डॉ. गिरीश ओक (अभिनेते)",
    role: "प्रसिद्ध अभिनेते व ज्येष्ठ नागरिक मार्गदर्शक",
    text: "आनंदात जगायचं, आरोग्य जपायचं, प्रीतम आनंदशाळेत येऊन स्वप्न साकारायचं! सांगलीतील हा पहिलाच जागतिक दर्जाचा प्रकल्प आहे.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    videoThumbnail: "/images/Screenshot 2026-07-31 103107.png",
    rating: 5,
    approved: true,
    date: "३१ जुलै २०२६",
  },
  {
    id: "vtest-2",
    name: "श्री. प्रकाश देशपांडे व परिवार",
    role: "निवृत्त बँक अधिकारी, सांगली",
    text: "आनंदशाळेच्या १ दिवस सहल पासमध्ये अतिशय कौटुंबिक व आनंददायी अनुभव मिळाला.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    videoThumbnail: "/images/aandshala sahal 1.jpeg",
    rating: 5,
    approved: true,
    date: "२८ जुलै २०२६",
  },
];

// ============================================================================
// HELPER FUNCTIONS FOR LOCALSTORAGE
// ============================================================================

const STORAGE_KEYS = {
  site: "anandshala_site_data",
  about: "anandshala_about_data",
  gallery: "anandshala_gallery_distinguished_v3",
  inquiries: "anandshala_inquiries_data",
  testimonials: "anandshala_testimonials_data_v2",
  packages: "anandshala_packages_data_v2",
  brochures: "anandshala_brochures_data_v1",
  homeNews: "anandshala_homenews_data_v1",
};

export function getStoredData<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch (e) {
    return fallback;
  }
}

export function setStoredData<T>(key: string, data: T): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(key, JSON.stringify(data));
    window.dispatchEvent(new Event("admin_store_updated"));
  } catch (e) {
    console.error(e);
  }
}

// ============================================================================
// REACT HOOKS FOR LIVE REACTIVE DATA
// ============================================================================

export function useAdminStore() {
  const [siteData, setSiteDataState] = useState<SiteData>(() =>
    getStoredData(STORAGE_KEYS.site, initialSiteData)
  );
  const [aboutData, setAboutDataState] = useState<AboutData>(() =>
    getStoredData(STORAGE_KEYS.about, initialAboutData)
  );
  const [gallery, setGalleryState] = useState<GalleryItem[]>(() =>
    getStoredData(STORAGE_KEYS.gallery, initialGallery)
  );
  const [inquiries, setInquiriesState] = useState<InquiryItem[]>(() =>
    getStoredData(STORAGE_KEYS.inquiries, initialInquiries)
  );
  const [testimonials, setTestimonialsState] = useState<TestimonialItem[]>(() =>
    getStoredData(STORAGE_KEYS.testimonials, initialTestimonials)
  );
  const [packages, setPackagesState] = useState<PackageItem[]>(() =>
    getStoredData(STORAGE_KEYS.packages, initialPackages)
  );
  const [brochures, setBrochuresState] = useState<BrochureItem[]>(() =>
    getStoredData(STORAGE_KEYS.brochures, initialBrochures)
  );
  const [homeNews, setHomeNewsState] = useState<HomeNewsItem[]>(() =>
    getStoredData(STORAGE_KEYS.homeNews, initialHomeNews)
  );

  useEffect(() => {
    const handleUpdate = () => {
      setSiteDataState(getStoredData(STORAGE_KEYS.site, initialSiteData));
      setAboutDataState(getStoredData(STORAGE_KEYS.about, initialAboutData));
      setGalleryState(getStoredData(STORAGE_KEYS.gallery, initialGallery));
      setInquiriesState(getStoredData(STORAGE_KEYS.inquiries, initialInquiries));
      setTestimonialsState(getStoredData(STORAGE_KEYS.testimonials, initialTestimonials));
      setPackagesState(getStoredData(STORAGE_KEYS.packages, initialPackages));
      setBrochuresState(getStoredData(STORAGE_KEYS.brochures, initialBrochures));
      setHomeNewsState(getStoredData(STORAGE_KEYS.homeNews, initialHomeNews));
    };

    window.addEventListener("admin_store_updated", handleUpdate);
    return () => window.removeEventListener("admin_store_updated", handleUpdate);
  }, []);

  const updateSiteData = (newSite: Partial<SiteData>) => {
    const updated = { ...siteData, ...newSite };
    setSiteDataState(updated);
    setStoredData(STORAGE_KEYS.site, updated);
  };

  const updateAboutData = (newAbout: Partial<AboutData>) => {
    const updated = { ...aboutData, ...newAbout };
    setAboutDataState(updated);
    setStoredData(STORAGE_KEYS.about, updated);
  };

  const addGalleryItem = (item: Omit<GalleryItem, "id">) => {
    const newItem: GalleryItem = { id: `g-${Date.now()}`, ...item };
    const updated = [newItem, ...gallery];
    setGalleryState(updated);
    setStoredData(STORAGE_KEYS.gallery, updated);
  };

  const deleteGalleryItem = (id: string) => {
    const updated = gallery.filter((g) => g.id !== id);
    setGalleryState(updated);
    setStoredData(STORAGE_KEYS.gallery, updated);
  };

  const addInquiry = (inquiry: Omit<InquiryItem, "id" | "date" | "read">) => {
    const newInq: InquiryItem = {
      id: `inq-${Date.now()}`,
      date: new Date().toLocaleDateString("mr-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      read: false,
      ...inquiry,
    };
    const updated = [newInq, ...inquiries];
    setInquiriesState(updated);
    setStoredData(STORAGE_KEYS.inquiries, updated);
  };

  const markInquiryRead = (id: string) => {
    const updated = inquiries.map((inq) =>
      inq.id === id ? { ...inq, read: true } : inq
    );
    setInquiriesState(updated);
    setStoredData(STORAGE_KEYS.inquiries, updated);
  };

  const deleteInquiry = (id: string) => {
    const updated = inquiries.filter((inq) => inq.id !== id);
    setInquiriesState(updated);
    setStoredData(STORAGE_KEYS.inquiries, updated);
  };

  const addTestimonial = (test: Omit<TestimonialItem, "id" | "date">) => {
    const newTest: TestimonialItem = {
      id: `t-${Date.now()}`,
      date: new Date().toLocaleDateString("mr-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      ...test,
    };
    const updated = [newTest, ...testimonials];
    setTestimonialsState(updated);
    setStoredData(STORAGE_KEYS.testimonials, updated);
  };

  const toggleTestimonialApproval = (id: string) => {
    const updated = testimonials.map((t) =>
      t.id === id ? { ...t, approved: !t.approved } : t
    );
    setTestimonialsState(updated);
    setStoredData(STORAGE_KEYS.testimonials, updated);
  };

  const deleteTestimonial = (id: string) => {
    const updated = testimonials.filter((t) => t.id !== id);
    setTestimonialsState(updated);
    setStoredData(STORAGE_KEYS.testimonials, updated);
  };

  const addPackage = (pkg: Omit<PackageItem, "id">) => {
    const newPkg: PackageItem = {
      id: `pkg-${Date.now()}`,
      ...pkg,
    };
    const updated = [...packages, newPkg];
    setPackagesState(updated);
    setStoredData(STORAGE_KEYS.packages, updated);
  };

  const updatePackage = (id: string, updatedPkg: Partial<PackageItem>) => {
    const updated = packages.map((p) =>
      p.id === id ? { ...p, ...updatedPkg } : p
    );
    setPackagesState(updated);
    setStoredData(STORAGE_KEYS.packages, updated);
  };

  const deletePackage = (id: string) => {
    const updated = packages.filter((p) => p.id !== id);
    setPackagesState(updated);
    setStoredData(STORAGE_KEYS.packages, updated);
  };

  const addBrochure = (broch: Omit<BrochureItem, "id" | "date">) => {
    const newB: BrochureItem = {
      id: `broch-${Date.now()}`,
      date: new Date().toLocaleDateString("mr-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      ...broch,
    };
    const updated = [newB, ...brochures];
    setBrochuresState(updated);
    setStoredData(STORAGE_KEYS.brochures, updated);
  };

  const deleteBrochure = (id: string) => {
    const updated = brochures.filter((b) => b.id !== id);
    setBrochuresState(updated);
    setStoredData(STORAGE_KEYS.brochures, updated);
  };

  const addHomeNews = (item: Omit<HomeNewsItem, "id" | "date">) => {
    const newNews: HomeNewsItem = {
      id: `news-${Date.now()}`,
      date: new Date().toLocaleDateString("mr-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      ...item,
    };
    const updated = [newNews, ...homeNews];
    setHomeNewsState(updated);
    setStoredData(STORAGE_KEYS.homeNews, updated);
  };

  const deleteHomeNews = (id: string) => {
    const updated = homeNews.filter((n) => n.id !== id);
    setHomeNewsState(updated);
    setStoredData(STORAGE_KEYS.homeNews, updated);
  };

  return {
    siteData,
    aboutData,
    gallery,
    inquiries,
    testimonials,
    packages,
    brochures,
    homeNews,
    unreadInquiriesCount: inquiries.filter((i) => !i.read).length,
    updateSiteData,
    updateAboutData,
    addGalleryItem,
    deleteGalleryItem,
    addInquiry,
    markInquiryRead,
    deleteInquiry,
    addTestimonial,
    toggleTestimonialApproval,
    deleteTestimonial,
    addPackage,
    updatePackage,
    deletePackage,
    addBrochure,
    deleteBrochure,
    addHomeNews,
    deleteHomeNews,
  };
}
