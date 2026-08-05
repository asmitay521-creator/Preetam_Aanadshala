import { Link } from "react-router-dom";
import { useState } from "react";
import { useAdminStore, BrochureItem, PackageItem } from "@/lib/admin-store";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin Console | प्रीतम ज्येष्ठ नागरिक आनंदशाळा" },
      { name: "description", content: "आनंदशाळा आणि स्पोर्ट्स क्लब कंटेंट मॅनेजमेंट सिस्टीम." },
    ],
  }),
  component: AdminPage,
});

type TabKey =
  | "dashboard"
  | "home"
  | "about"
  | "packages"
  | "gallery"
  | "inquiries"
  | "brochure"
  | "testimonials";

const categoriesList = [
  "ज्येष्ठ नागरिक आनंदशाळा माहिती",
  "आनंदशाळा भूमिपूजन व बांधकाम",
  "ज्येष्ठ नागरिक आनंद सहल",
  "ज्येष्ठ नागरिक आनंद मेळावा",
  "ज्येष्ठ नागरिक विरंगुळा केंद्र",
  "सामाजिक कार्य माहिती",
  "प्रीतम व्यावसायिक माहिती",
  "रौप्य महोत्सव व प्रकाशन",
];

function AdminPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("dashboard");
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [passInput, setPassInput] = useState("");
  const [loginError, setLoginError] = useState("");

  const store = useAdminStore();

  // Local Form States
  const [siteForm, setSiteForm] = useState(store.siteData);
  const [aboutForm, setAboutForm] = useState(store.aboutData);
  const [saveSuccessMsg, setSaveSuccessMsg] = useState("");

  // Home News Announcement Form State
  const [newNewsObj, setNewNewsObj] = useState({
    title: "",
    badge: "नवीन घोषणा",
    description: "",
    imageUrl: "",
    linkUrl: "",
  });

  // Brochure Form State
  const [newBrochureObj, setNewBrochureObj] = useState({
    title: "",
    category: "आनंदशाळा ब्रॉशर",
    fileUrl: "",
    fileType: "image" as "pdf" | "image",
    description: "",
  });

  // Gallery Form State
  const [newImageObj, setNewImageObj] = useState({
    url: "",
    caption: "",
    category: ["ज्येष्ठ नागरिक आनंदशाळा माहिती"],
  });

  // Video Testimonial Form State
  const [newVideoTestObj, setNewVideoTestObj] = useState({
    name: "",
    role: "",
    text: "",
    videoUrl: "",
    videoThumbnail: "",
    rating: 5,
    approved: true,
  });

  // Package Form State
  const [editingPkgId, setEditingPkgId] = useState<string | null>(null);
  const [pkgPeriodFilter, setPkgPeriodFilter] = useState<"all" | "days" | "month" | "year">("all");
  const [pkgForm, setPkgForm] = useState({
    title: "",
    price: "",
    sub: "",
    badge: "",
    periodType: "month" as "days" | "month" | "year",
    featuresText: "",
    featured: false,
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passInput === "admin123" || passInput === "admin" || passInput === "preetam") {
      setIsLoggedIn(true);
      setLoginError("");
    } else {
      setLoginError("चुकीचा पासवर्ड! पुन्हा प्रयत्न करा.");
    }
  };

  const handleSiteSave = (e: React.FormEvent) => {
    e.preventDefault();
    store.updateSiteData(siteForm);
    setSaveSuccessMsg("होम पेज माहिती यशस्वीरित्या सेव्ह झाली!");
    setTimeout(() => setSaveSuccessMsg(""), 3000);
  };

  const handleAddHomeNews = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNewsObj.title || !newNewsObj.description) return;
    store.addHomeNews(newNewsObj);
    setNewNewsObj({ title: "", badge: "नवीन घोषणा", description: "", imageUrl: "", linkUrl: "" });
    setSaveSuccessMsg("मुख्यपृष्ठावर नवीन बातमी/माहिती यशस्वीरित्या समाविष्ट केली!");
    setTimeout(() => setSaveSuccessMsg(""), 3000);
  };

  const handleAddBrochure = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newBrochureObj.title || !newBrochureObj.fileUrl) return;
    store.addBrochure(newBrochureObj);
    setNewBrochureObj({ title: "", category: "आनंदशाळा ब्रॉशर", fileUrl: "", fileType: "image", description: "" });
    setSaveSuccessMsg("नवीन माहिती पत्रक (Brochure) यशस्वीरित्या अपलोड झाले!");
    setTimeout(() => setSaveSuccessMsg(""), 3000);
  };

  const handleAboutSave = (e: React.FormEvent) => {
    e.preventDefault();
    store.updateAboutData(aboutForm);
    setSaveSuccessMsg("आमच्याविषयी माहिती यशस्वीरित्या सेव्ह झाली!");
    setTimeout(() => setSaveSuccessMsg(""), 3000);
  };

  const handleAddGallery = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newImageObj.url || !newImageObj.caption) return;
    store.addGalleryItem(newImageObj);
    setNewImageObj({ url: "", caption: "", category: ["ज्येष्ठ नागरिक आनंदशाळा माहिती"] });
    setSaveSuccessMsg("नवीन छायाचित्र गॅलरीमध्ये जोडले गेले!");
    setTimeout(() => setSaveSuccessMsg(""), 3000);
  };

  const handleAddVideoTestimonial = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newVideoTestObj.name || (!newVideoTestObj.videoUrl && !newVideoTestObj.videoThumbnail)) return;
    store.addTestimonial(newVideoTestObj);
    setNewVideoTestObj({ name: "", role: "", text: "", videoUrl: "", videoThumbnail: "", rating: 5, approved: true });
    setSaveSuccessMsg("नवीन व्हिडिओ अभिप्राय यशस्वीरित्या समाविष्ट झाला!");
    setTimeout(() => setSaveSuccessMsg(""), 3000);
  };

  // Helper for computer file upload
  const handleFileUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    callback: (dataUrl: string, fileType: "pdf" | "image") => void
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const isPdf = file.type.includes("pdf");
    const reader = new FileReader();
    reader.onload = (ev) => {
      const res = ev.target?.result as string;
      callback(res || URL.createObjectURL(file), isPdf ? "pdf" : "image");
    };
    reader.readAsDataURL(file);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-slate-100 text-slate-900 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white border border-slate-200 rounded-3xl p-8 shadow-2xl">
          <div className="text-center mb-6">
            <div className="size-16 rounded-2xl bg-[#E60067]/10 border border-[#E60067]/30 grid place-items-center text-3xl mx-auto mb-3">
              🛡️
            </div>
            <h1 className="font-display text-2xl font-black text-slate-900">प्रीतम आनंदशाळा</h1>
            <p className="text-xs uppercase tracking-widest text-[#E60067] font-extrabold mt-1">Admin Console Login</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5">
                प्रशासकीय पासवर्ड (Admin Password)
              </label>
              <input
                type="password"
                placeholder="पासवर्ड टाका (उदा. admin123)"
                value={passInput}
                onChange={(e) => setPassInput(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm font-semibold focus:outline-none focus:border-[#E60067] focus:ring-2 focus:ring-[#E60067]/20 shadow-sm"
              />
            </div>
            {loginError && <p className="text-xs text-red-600 font-extrabold">{loginError}</p>}
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-[#E60067] hover:bg-[#68092D] font-extrabold text-white hover:scale-[1.01] transition-all cursor-pointer shadow-md"
            >
              लॉगिन करा (Login)
            </button>
          </form>
        </div>
      </div>
    );
  }

  const filteredPackages = store.packages.filter((p) => {
    if (pkgPeriodFilter === "all") return true;
    return p.periodType === pkgPeriodFilter;
  });

  return (
    <div className="min-h-screen bg-[#F1F5F9] text-slate-800 font-sans flex flex-col md:flex-row">
      {/* SIDEBAR */}
      <aside className="w-full md:w-80 bg-white border-r border-slate-200 p-6 flex flex-col justify-between shrink-0 shadow-sm">
        <div>
          {/* BRAND HEADER */}
          <div className="flex items-center gap-3 mb-6 p-3 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="size-12 rounded-xl bg-[#E60067] text-white grid place-items-center text-xl font-bold shadow shrink-0">
              🏛️
            </div>
            <div>
              <h2 className="font-display text-base font-black text-slate-900 tracking-tight leading-tight">
                प्रीतम आनंदशाळा
              </h2>
              <span className="inline-block rounded-md bg-[#E60067]/10 px-2 py-0.5 text-[10px] font-black text-[#E60067] tracking-wider uppercase border border-[#E60067]/20 mt-0.5">
                ADMIN CONSOLE
              </span>
            </div>
          </div>

          <div className="h-px bg-slate-200 mb-5" />

          {/* SIDEBAR MENU BUTTONS */}
          <nav className="space-y-2">
            {[
              { id: "dashboard", icon: "📱", en: "Dashboard Overview", mr: "मुख्य डॅशबोर्ड" },
              { id: "home", icon: "🏠", en: "Home Page Manager", mr: "होम पेज माहिती व फोटो" },
              { id: "about", icon: "ℹ️", en: "About Us Manager", mr: "आमच्याविषयी माहिती" },
              { id: "packages", icon: "📦", en: "Packages (Days/Month/Year)", mr: "प्रवेश योजना (पॅकेजेस)", count: store.packages.length },
              { id: "gallery", icon: "🖼️", en: "Gallery Manager", mr: "फोटो गॅलरी मॅनेजर", count: store.gallery.length },
              { id: "inquiries", icon: "✉️", en: "Inquiries & Messages", mr: "चौकशी संदेश", count: store.unreadInquiriesCount, highlightCount: true },
              { id: "brochure", icon: "📖", en: "Brochure Upload", mr: "माहिती पत्रक / ब्रोशर", count: store.brochures.length },
              { id: "testimonials", icon: "🎬", en: "Video Testimonials", mr: "व्हिडिओ अभिप्राय", count: store.testimonials.length },
            ].map((tab) => {
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as TabKey)}
                  className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl font-extrabold text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                    active
                      ? "bg-[#E60067] text-white shadow-md scale-[1.01]"
                      : "bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <div className="flex items-center gap-3 text-left">
                    <span className="text-base">{tab.icon}</span>
                    <div className="leading-tight">
                      <span className="block">{tab.mr}</span>
                      <span className={`text-[10px] font-semibold block ${active ? "text-amber-200" : "text-slate-400"}`}>
                        {tab.en}
                      </span>
                    </div>
                  </div>

                  {tab.count !== undefined && (
                    <span
                      className={`grid size-6 place-items-center rounded-full text-xs font-black ${
                        active
                          ? "bg-white text-[#E60067]"
                          : tab.highlightCount && tab.count > 0
                          ? "bg-emerald-600 text-white animate-pulse"
                          : "bg-slate-200 text-slate-700"
                      }`}
                    >
                      {tab.count}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* BOTTOM BUTTONS */}
        <div className="mt-8 pt-5 border-t border-slate-200 space-y-2.5">
          <Link
            to="/"
            target="_blank"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-100 border border-slate-300 text-slate-800 font-extrabold text-xs hover:bg-slate-200 transition-colors"
          >
            <span>🌐</span>
            <span>मुख्य वेबसाईट पहा (View Site)</span>
          </Link>

          <button
            onClick={() => setIsLoggedIn(false)}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-red-50 border border-red-200 text-red-700 font-extrabold text-xs hover:bg-red-600 hover:text-white transition-colors cursor-pointer"
          >
            <span>🚪</span>
            <span>लॉगआउट (Logout)</span>
          </button>
        </div>
      </aside>

      {/* RIGHT MAIN CONTENT AREA */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto bg-[#F8FAFC]">
        {saveSuccessMsg && (
          <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-800 font-extrabold text-sm animate-fade-up flex items-center gap-2 shadow-sm">
            <span>✓</span>
            <span>{saveSuccessMsg}</span>
          </div>
        )}

        {/* 1. DASHBOARD OVERVIEW */}
        {activeTab === "dashboard" && (
          <div className="space-y-8 animate-fade-up">
            <div>
              <h1 className="font-display text-3xl font-black text-slate-900 tracking-tight">
                Dashboard Overview (मुख्य डॅशबोर्ड)
              </h1>
              <p className="text-slate-600 text-sm mt-1 font-semibold">
                प्रीतम आनंदशाळा व स्पोर्ट्स क्लब अॅडमिन डॅशबोर्ड - सर्व माहिती संपादन व अपडेट्स.
              </p>
            </div>

            {/* METRICS CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <p className="text-xs uppercase tracking-wider font-extrabold text-slate-500">चौकशी संदेश</p>
                <p className="font-display text-4xl font-black text-[#E60067] mt-2">{store.inquiries.length}</p>
                <p className="text-xs text-emerald-600 mt-1 font-bold">✓ {store.unreadInquiriesCount} नवीन अवाचित संदेश</p>
              </div>

              <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <p className="text-xs uppercase tracking-wider font-extrabold text-slate-500">गॅलरी फोटो</p>
                <p className="font-display text-4xl font-black text-sky-600 mt-2">{store.gallery.length}</p>
                <p className="text-xs text-slate-500 mt-1 font-semibold">८ श्रेणींमध्ये वर्गीकृत</p>
              </div>

              <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <p className="text-xs uppercase tracking-wider font-extrabold text-slate-500">अपलोड केलेले ब्रोशर्स</p>
                <p className="font-display text-4xl font-black text-amber-600 mt-2">{store.brochures.length}</p>
                <p className="text-xs text-amber-600 mt-1 font-bold">PDF व इमेज माहिती पत्रके</p>
              </div>

              <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <p className="text-xs uppercase tracking-wider font-extrabold text-slate-500">प्रवेश योजना (Packages)</p>
                <p className="font-display text-4xl font-black text-emerald-600 mt-2">{store.packages.length}</p>
                <p className="text-xs text-slate-600 mt-1 font-bold">Days, Month & Year wise</p>
              </div>
            </div>

            {/* RECENT INQUIRIES */}
            <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                <h3 className="font-display text-lg font-black text-slate-900">
                  अलीकडील चौकशी संदेश (Recent Inquiries)
                </h3>
                <button
                  onClick={() => setActiveTab("inquiries")}
                  className="text-xs font-extrabold text-[#E60067] hover:underline cursor-pointer"
                >
                  सर्व संदेश पहा →
                </button>
              </div>

              <div className="space-y-3">
                {store.inquiries.slice(0, 4).map((inq) => (
                  <div key={inq.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <div>
                      <p className="font-bold text-sm text-slate-900">{inq.name} ({inq.phone})</p>
                      <p className="text-xs text-[#E60067] font-extrabold mt-0.5">{inq.subject}</p>
                      <p className="text-xs text-slate-600 line-clamp-1 mt-0.5 font-medium">{inq.message}</p>
                    </div>
                    <span className="text-xs text-slate-400 font-bold shrink-0">{inq.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 2. HOME PAGE MANAGER WITH CUSTOM NEWS & PHOTO UPLOAD */}
        {activeTab === "home" && (
          <div className="space-y-8 animate-fade-up max-w-5xl">
            <div>
              <h1 className="font-display text-3xl font-black text-slate-900">
                Home Page Manager (मुख्यपृष्ठ माहिती व नवीन फोटो जोडा)
              </h1>
              <p className="text-slate-600 text-sm mt-1 font-semibold">
                मुख्यपृष्ठावरील (Home Page) शीर्षक, संपर्क व **नवीन माहिती/घोषणा व फोटो** थेट अपलोड करा.
              </p>
            </div>

            {/* BASIC SITE SETTINGS FORM */}
            <form onSubmit={handleSiteSave} className="bg-white border border-slate-200 p-6 md:p-8 rounded-2xl space-y-5 shadow-sm">
              <h3 className="font-display text-lg font-black text-[#810B38] border-b border-slate-100 pb-2">
                ⚙️ मुख्य मथळा व संपर्क माहिती (General Info)
              </h3>

              <div>
                <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5">
                  संस्थेचे नाव (Organization Title)
                </label>
                <input
                  type="text"
                  value={siteForm.nameMr}
                  onChange={(e) => setSiteForm({ ...siteForm, nameMr: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm font-semibold focus:border-[#810B38] focus:ring-2 focus:ring-[#810B38]/20 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5">
                  मुख्य मथळा/टॅगलाईन (Main Tagline)
                </label>
                <textarea
                  rows={2}
                  value={siteForm.tagline}
                  onChange={(e) => setSiteForm({ ...siteForm, tagline: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm font-semibold focus:border-[#810B38] focus:ring-2 focus:ring-[#810B38]/20 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5">
                  अभिनेते डॉ. गिरीश ओक यांचा कोट (Famous Quote)
                </label>
                <input
                  type="text"
                  value={siteForm.girishOakQuote}
                  onChange={(e) => setSiteForm({ ...siteForm, girishOakQuote: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm font-semibold focus:border-[#810B38] focus:ring-2 focus:ring-[#810B38]/20 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5">
                    संपर्क नंबर १ (Phone 1)
                  </label>
                  <input
                    type="text"
                    value={siteForm.phone1}
                    onChange={(e) => setSiteForm({ ...siteForm, phone1: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm font-semibold focus:border-[#810B38] focus:ring-2 focus:ring-[#810B38]/20 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5">
                    संपर्क नंबर २ (Phone 2)
                  </label>
                  <input
                    type="text"
                    value={siteForm.phone2}
                    onChange={(e) => setSiteForm({ ...siteForm, phone2: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm font-semibold focus:border-[#810B38] focus:ring-2 focus:ring-[#810B38]/20 focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="px-8 py-3 rounded-xl bg-[#810B38] hover:bg-[#68092D] font-extrabold text-white hover:scale-105 transition-all cursor-pointer shadow-md text-sm"
              >
                💾 मुख्य माहिती सेव्ह करा (Save Changes)
              </button>
            </form>

            {/* ADD NEW ANNOUNCEMENT / HOME NEWS FORM WITH FILE UPLOAD */}
            <form onSubmit={handleAddHomeNews} className="bg-white border border-slate-200 p-6 md:p-8 rounded-2xl space-y-4 shadow-sm">
              <h3 className="font-display text-lg font-black text-emerald-700 border-b border-slate-100 pb-2">
                📢 मुख्यपृष्ठावर नवीन अपडेट / जाहिरात / बातमी व फोटो जोडा
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5">
                    शीर्षक / मथळा (Headline Title) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="उदा. २६ जानेवारी रोजी आनंदशाळेचा भव्य शुभारंभ!"
                    value={newNewsObj.title}
                    onChange={(e) => setNewNewsObj({ ...newNewsObj, title: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm font-semibold focus:border-[#810B38] focus:ring-2 focus:ring-[#810B38]/20 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5">
                    बॅज / टॅग (Badge Tag)
                  </label>
                  <input
                    type="text"
                    placeholder="उदा. नवीन घोषणा / विशेष अपडेट"
                    value={newNewsObj.badge}
                    onChange={(e) => setNewNewsObj({ ...newNewsObj, badge: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm font-semibold focus:border-[#810B38] focus:ring-2 focus:ring-[#810B38]/20 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5">
                  तपशील / वर्णन (Detailed Content) *
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="नवीन उपक्रमाबद्दलची किंवा घोषणेबद्दलची सविस्तर माहिती इथे लिहा..."
                  value={newNewsObj.description}
                  onChange={(e) => setNewNewsObj({ ...newNewsObj, description: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm font-semibold focus:border-[#810B38] focus:ring-2 focus:ring-[#810B38]/20 focus:outline-none"
                />
              </div>

              {/* IMAGE FILE UPLOAD PICKER */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <label className="block text-xs font-extrabold text-slate-800 uppercase tracking-wider">
                  🖼️ फोटो अपलोड करा (Computer वरून फोटो निवडा)
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    handleFileUpload(e, (url) => setNewNewsObj({ ...newNewsObj, imageUrl: url }))
                  }
                  className="w-full px-4 py-2 rounded-xl bg-white border border-slate-300 text-slate-800 text-xs font-semibold cursor-pointer file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-extrabold file:bg-emerald-600 file:text-white hover:file:bg-emerald-700"
                />

                {newNewsObj.imageUrl && (
                  <div className="mt-2 flex items-center gap-3 p-2 rounded-xl bg-white border border-slate-200">
                    <img src={newNewsObj.imageUrl} alt="Preview" className="h-16 w-24 object-cover rounded-lg border border-slate-300" />
                    <p className="text-xs font-bold text-emerald-700">✓ फोटो निवडला गेला आहे!</p>
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 font-extrabold text-white hover:scale-105 transition-all cursor-pointer shadow-md text-sm"
              >
                📢 मुख्यपृष्ठावर ही बातमी प्रसिद्ध करा (Publish News)
              </button>
            </form>

            {/* LIST OF HOME NEWS ITEMS */}
            <div className="space-y-4">
              <h3 className="font-display text-lg font-black text-slate-900">
                मुख्यपृष्ठावरील जोडलेल्या बातम्या व माहिती ({store.homeNews.length})
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {store.homeNews.map((news) => (
                  <div key={news.id} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm flex flex-col justify-between">
                    <div>
                      {news.imageUrl && (
                        <img src={news.imageUrl} alt={news.title} className="h-40 w-full object-cover rounded-xl mb-3 border border-slate-200" />
                      )}
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-emerald-100 text-emerald-800 border border-emerald-200 uppercase">
                        {news.badge || "अपडेट"}
                      </span>
                      <h4 className="font-extrabold text-base text-slate-900 mt-2">{news.title}</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">{news.description}</p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[11px] text-slate-400 font-bold">{news.date}</span>
                      <button
                        onClick={() => {
                          if (confirm(`नक्की ही माहिती डिलीट करायची?`)) {
                            store.deleteHomeNews(news.id);
                            setSaveSuccessMsg("बातमी डिलीट केली!");
                            setTimeout(() => setSaveSuccessMsg(""), 3000);
                          }
                        }}
                        className="px-3 py-1.5 rounded-xl bg-red-50 border border-red-200 text-red-700 hover:bg-red-600 hover:text-white transition-colors text-xs font-extrabold cursor-pointer"
                      >
                        🗑️ डिलीट
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 3. ABOUT US MANAGER */}
        {activeTab === "about" && (
          <div className="space-y-6 animate-fade-up max-w-4xl">
            <div>
              <h1 className="font-display text-3xl font-black text-slate-900">About Us Manager (आमच्याविषयी)</h1>
              <p className="text-slate-600 text-sm mt-1 font-semibold">'आमच्याविषयी' पेजबद्दलची माहिती, कहाणी व परिच्छेद बदला.</p>
            </div>

            <form onSubmit={handleAboutSave} className="bg-white border border-slate-200 p-6 md:p-8 rounded-2xl space-y-5 shadow-sm">
              <div>
                <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5">
                  कहाणी परिच्छेद १ (Story Paragraph 1)
                </label>
                <textarea
                  rows={3}
                  value={aboutForm.storyP1}
                  onChange={(e) => setAboutForm({ ...aboutForm, storyP1: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm font-semibold focus:border-[#810B38] focus:ring-2 focus:ring-[#810B38]/20 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5">
                  कहाणी परिच्छेद २ (Story Paragraph 2)
                </label>
                <textarea
                  rows={3}
                  value={aboutForm.storyP2}
                  onChange={(e) => setAboutForm({ ...aboutForm, storyP2: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm font-semibold focus:border-[#810B38] focus:ring-2 focus:ring-[#810B38]/20 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="px-8 py-3 rounded-xl bg-[#810B38] hover:bg-[#68092D] font-extrabold text-white hover:scale-105 transition-all cursor-pointer shadow-md text-sm"
              >
                💾 सेव्ह करा (Save Changes)
              </button>
            </form>
          </div>
        )}

        {/* 4. PACKAGES & PLANS MANAGER (WITH DAYS, MONTH & YEAR CATEGORIZATION) */}
        {activeTab === "packages" && (
          <div className="space-y-8 animate-fade-up">
            <div>
              <h1 className="font-display text-3xl font-black text-slate-900">
                Packages & Plans Manager (दिवसनिहाय, महिनानिहाय व वर्षनिहाय योजना)
              </h1>
              <p className="text-slate-600 text-sm mt-1 font-semibold">
                दिवसनिहाय (Days-wise), महिनानिहाय (Month-wise) आणि वर्षनिहाय (Year-wise / Lifetime) प्रवेश योजना जोडा किंवा बदला.
              </p>
            </div>

            {/* FILTER CATEGORY TAB BUTTONS */}
            <div className="flex flex-wrap gap-2 p-1.5 bg-slate-200/80 rounded-2xl max-w-max">
              {[
                { id: "all", label: "सर्व योजना (All Packages)", icon: "⠿" },
                { id: "days", label: "☀️ दिवसनिहाय (Days-wise)", icon: "☀️" },
                { id: "month", label: "🗓️ महिनानिहाय (Month-wise)", icon: "🗓️" },
                { id: "year", label: "🎆 वर्षनिहाय (Year-wise / Lifetime)", icon: "🎆" },
              ].map((filterTab) => (
                <button
                  key={filterTab.id}
                  onClick={() => setPkgPeriodFilter(filterTab.id as any)}
                  className={`px-5 py-2.5 rounded-xl font-extrabold text-xs sm:text-sm transition-all cursor-pointer ${
                    pkgPeriodFilter === filterTab.id
                      ? "bg-[#810B38] text-white shadow-sm"
                      : "text-slate-700 hover:bg-slate-300/60"
                  }`}
                >
                  {filterTab.label}
                </button>
              ))}
            </div>

            {/* ADD / EDIT PACKAGE FORM */}
            <div className="bg-white border border-slate-200 p-6 rounded-2xl space-y-4 max-w-4xl shadow-sm">
              <h3 className="font-display text-lg font-black text-[#810B38]">
                {editingPkgId ? "✏️ पॅकेज एडिट करा (Edit Package)" : "➕ नवीन पॅकेज जोडा (Add New Package)"}
              </h3>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!pkgForm.title || !pkgForm.price) return;
                  const features = pkgForm.featuresText
                    .split("\n")
                    .map((f) => f.trim())
                    .filter(Boolean);

                  if (editingPkgId) {
                    store.updatePackage(editingPkgId, {
                      title: pkgForm.title,
                      price: pkgForm.price,
                      sub: pkgForm.sub,
                      badge: pkgForm.badge,
                      periodType: pkgForm.periodType,
                      featured: pkgForm.featured,
                      features: features.length ? features : ["विशेष सुविधा उपलब्ध"],
                    });
                    setSaveSuccessMsg("पॅकेज अपडेट झाले!");
                  } else {
                    store.addPackage({
                      title: pkgForm.title,
                      price: pkgForm.price,
                      sub: pkgForm.sub,
                      badge: pkgForm.badge || "विशेष योजना",
                      periodType: pkgForm.periodType,
                      featured: pkgForm.featured,
                      features: features.length ? features : ["विशेष सुविधा उपलब्ध"],
                    });
                    setSaveSuccessMsg("नवीन पॅकेज जोडले गेले!");
                  }

                  setEditingPkgId(null);
                  setPkgForm({ title: "", price: "", sub: "", badge: "", periodType: "month", featuresText: "", featured: false });
                  setTimeout(() => setSaveSuccessMsg(""), 3000);
                }}
                className="space-y-4"
              >
                {/* DURATION TYPE SELECTOR */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <label className="block text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-2">
                    कालावधी प्रकार (Select Package Duration Type) *
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { id: "days", label: "☀️ दिवसनिहाय (Days-wise)" },
                      { id: "month", label: "🗓️ महिनानिहाय (Month-wise)" },
                      { id: "year", label: "🎆 वर्षनिहाय (Year-wise / Lifetime)" },
                    ].map((pType) => (
                      <button
                        type="button"
                        key={pType.id}
                        onClick={() => setPkgForm({ ...pkgForm, periodType: pType.id as any })}
                        className={`py-2.5 px-3 rounded-xl text-xs font-black transition-all border cursor-pointer ${
                          pkgForm.periodType === pType.id
                            ? "bg-[#810B38] text-white border-[#810B38] shadow-sm"
                            : "bg-white text-slate-700 border-slate-300 hover:bg-slate-100"
                        }`}
                      >
                        {pType.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5">
                      पॅकेजचे नाव (Title) *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="उदा. आनंदनिवास (राहण्यासह) किंवा १ दिवस सहल"
                      value={pkgForm.title}
                      onChange={(e) => setPkgForm({ ...pkgForm, title: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm font-semibold focus:border-[#810B38] focus:ring-2 focus:ring-[#810B38]/20 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5">
                      किंमत / शुल्क (Price) *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="उदा. ₹ ६०० /- किंवा ₹ ११,००० /-"
                      value={pkgForm.price}
                      onChange={(e) => setPkgForm({ ...pkgForm, price: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm font-semibold focus:border-[#810B38] focus:ring-2 focus:ring-[#810B38]/20 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5">
                      उप-शीर्षक / कालावधी (Subtitle)
                    </label>
                    <input
                      type="text"
                      placeholder="उदा. वेळ: स. ११ ते सायं. ५ किंवा प्रति महिना"
                      value={pkgForm.sub}
                      onChange={(e) => setPkgForm({ ...pkgForm, sub: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm font-semibold focus:border-[#810B38] focus:ring-2 focus:ring-[#810B38]/20 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5">
                      टॅग / बॅज (Badge Tag)
                    </label>
                    <input
                      type="text"
                      placeholder="उदा. १ दिवस सहल भेट पास / महिना पर्याय"
                      value={pkgForm.badge}
                      onChange={(e) => setPkgForm({ ...pkgForm, badge: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm font-semibold focus:border-[#810B38] focus:ring-2 focus:ring-[#810B38]/20 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5">
                    वैशिष्ट्ये / सोयी-सुविधा (प्रत्येक ओळीवर १ वैशिष्ट्य)
                  </label>
                  <textarea
                    rows={4}
                    placeholder={`फुल फर्निश्ड निवास + आनंदशाळा\nनाश्ता २ वेळ, जेवण २ वेळ\n२४x७ वैद्यकीय काळजी`}
                    value={pkgForm.featuresText}
                    onChange={(e) => setPkgForm({ ...pkgForm, featuresText: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm font-semibold focus:border-[#810B38] focus:ring-2 focus:ring-[#810B38]/20 focus:outline-none"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="featuredPkg"
                    checked={pkgForm.featured}
                    onChange={(e) => setPkgForm({ ...pkgForm, featured: e.target.checked })}
                    className="size-5 rounded border-slate-300 bg-white accent-[#810B38] cursor-pointer"
                  />
                  <label htmlFor="featuredPkg" className="text-sm font-bold text-slate-800 cursor-pointer">
                    ह्या पॅकेजला हायलाइट (Featured Highlighted Card) करा
                  </label>
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-[#810B38] hover:bg-[#68092D] font-extrabold text-white hover:scale-105 transition-all cursor-pointer shadow-md text-xs sm:text-sm"
                  >
                    {editingPkgId ? "✓ अपडेट करा (Save Package)" : "➕ पॅकेज जोडा (Save Package)"}
                  </button>

                  {editingPkgId && (
                    <button
                      type="button"
                      onClick={() => {
                        setEditingPkgId(null);
                        setPkgForm({ title: "", price: "", sub: "", badge: "", periodType: "month", featuresText: "", featured: false });
                      }}
                      className="px-5 py-2.5 rounded-xl bg-slate-100 border border-slate-300 text-slate-700 font-bold hover:bg-slate-200 text-xs sm:text-sm"
                    >
                      रद्द करा (Cancel)
                    </button>
                  )}
                </div>
              </form>
            </div>

            {/* EXISTING PACKAGES LIST */}
            <div className="space-y-4">
              <h3 className="font-display text-lg font-black text-slate-900">
                उपलब्ध पॅकेजेस ({filteredPackages.length})
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {filteredPackages.map((pkg) => (
                  <div
                    key={pkg.id}
                    className={`rounded-2xl border p-6 flex flex-col justify-between shadow-sm relative ${
                      pkg.featured
                        ? "border-[#810B38] bg-[#810B38]/5"
                        : "border-slate-200 bg-white"
                    }`}
                  >
                    <div>
                      <div className="flex justify-between items-start mb-3">
                        <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-[#810B38]/10 text-[#810B38] border border-[#810B38]/30">
                          {pkg.badge || "पॅकेज"}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider bg-slate-800 text-white shadow-sm">
                          {pkg.periodType === "days" ? "☀️ दिवसनिहाय" : pkg.periodType === "month" ? "🗓️ महिनानिहाय" : "🎆 वर्षनिहाय"}
                        </span>
                      </div>

                      <h4 className="font-display text-xl font-extrabold text-slate-900">{pkg.title}</h4>
                      <p className="mt-2 text-2xl font-black text-[#810B38]">{pkg.price}</p>
                      <p className="text-xs text-slate-500 mt-0.5 font-bold">{pkg.sub}</p>

                      <ul className="mt-4 space-y-1.5 text-xs text-slate-700 font-medium">
                        {pkg.features.map((f, idx) => (
                          <li key={idx} className="flex gap-1.5">
                            <span className="text-[#810B38] font-bold">✓</span>
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <button
                        onClick={() => {
                          setEditingPkgId(pkg.id);
                          setPkgForm({
                            title: pkg.title,
                            price: pkg.price,
                            sub: pkg.sub || "",
                            badge: pkg.badge || "",
                            periodType: pkg.periodType || "month",
                            featuresText: pkg.features.join("\n"),
                            featured: !!pkg.featured,
                          });
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="px-4 py-2 rounded-xl bg-slate-100 border border-slate-300 text-slate-800 hover:bg-[#810B38] hover:text-white transition-all font-extrabold text-xs cursor-pointer"
                      >
                        ✏️ एडिट करा
                      </button>

                      <button
                        onClick={() => {
                          if (confirm(`नक्की "${pkg.title}" पॅकेज डिलीट करायचे?`)) {
                            store.deletePackage(pkg.id);
                            setSaveSuccessMsg("पॅकेज डिलीट केले!");
                            setTimeout(() => setSaveSuccessMsg(""), 3000);
                          }
                        }}
                        className="px-3 py-2 rounded-xl bg-red-50 border border-red-200 text-red-700 hover:bg-red-600 hover:text-white transition-all font-bold text-xs cursor-pointer"
                      >
                        🗑️ डिलीट
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 5. GALLERY MANAGER */}
        {activeTab === "gallery" && (
          <div className="space-y-8 animate-fade-up">
            <div>
              <h1 className="font-display text-3xl font-black text-slate-900">
                Gallery Manager (फोटो गॅलरी)
              </h1>
              <p className="text-slate-600 text-sm mt-1 font-semibold">
                नवीन फोटो कम्प्युटरवरून थेट अपलोड करा किंवा URL टाका, कॅप्शन व ८ श्रेणी निवडा.
              </p>
            </div>

            {/* ADD GALLERY FORM */}
            <form onSubmit={handleAddGallery} className="bg-white border border-slate-200 p-6 rounded-2xl space-y-4 max-w-4xl shadow-sm">
              <h3 className="font-display text-lg font-black text-[#810B38]">➕ नवीन फोटो जोडा (Add Photo)</h3>

              {/* FILE UPLOAD PICKER */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <label className="block text-xs font-extrabold text-slate-800 uppercase tracking-wider">
                  📷 १. कॉम्प्युटरवरून फोटो फाईल निवडा (Upload Photo File)
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    handleFileUpload(e, (url) => setNewImageObj({ ...newImageObj, url }))
                  }
                  className="w-full px-4 py-2 rounded-xl bg-white border border-slate-300 text-slate-800 text-xs font-semibold cursor-pointer file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-extrabold file:bg-[#810B38] file:text-white hover:file:bg-[#68092D]"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5">
                    २. किंवा फोटो लिंक / URL (Image Path/URL)
                  </label>
                  <input
                    type="text"
                    placeholder="/images/Screenshot 2026-07-31 103107.png"
                    value={newImageObj.url}
                    onChange={(e) => setNewImageObj({ ...newImageObj, url: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm font-semibold focus:border-[#810B38] focus:ring-2 focus:ring-[#810B38]/20 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5">
                    फोटो कॅप्शन / वर्णन (Image Caption) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="उदा. आनंदशाळा विहंगम दृश्य"
                    value={newImageObj.caption}
                    onChange={(e) => setNewImageObj({ ...newImageObj, caption: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm font-semibold focus:border-[#810B38] focus:ring-2 focus:ring-[#810B38]/20 focus:outline-none"
                  />
                </div>
              </div>

              {newImageObj.url && (
                <div className="flex items-center gap-3 p-2 rounded-xl bg-slate-50 border border-slate-200">
                  <img src={newImageObj.url} alt="Preview" className="h-16 w-24 object-cover rounded-lg border border-slate-300" />
                  <p className="text-xs font-bold text-emerald-700">✓ फोटो लाईव्ह प्रिव्ह्यू उपलब्ध!</p>
                </div>
              )}

              <div>
                <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2">
                  श्रेणी निवडा (Select Categories)
                </label>
                <div className="flex flex-wrap gap-2">
                  {categoriesList.map((cat) => {
                    const selected = newImageObj.category.includes(cat);
                    return (
                      <button
                        type="button"
                        key={cat}
                        onClick={() => {
                          if (selected) {
                            setNewImageObj({
                              ...newImageObj,
                              category: newImageObj.category.filter((c) => c !== cat),
                            });
                          } else {
                            setNewImageObj({
                              ...newImageObj,
                              category: [...newImageObj.category, cat],
                            });
                          }
                        }}
                        className={`px-3 py-1.5 rounded-full text-xs font-extrabold transition-all cursor-pointer ${
                          selected
                            ? "bg-[#810B38] text-white shadow-sm"
                            : "bg-slate-100 text-slate-700 border border-slate-300 hover:bg-slate-200"
                        }`}
                      >
                        {selected ? "✓ " : "+ "}{cat}
                      </button>
                    );
                  })}
                </div>
              </div>

              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-[#810B38] hover:bg-[#68092D] font-extrabold text-white hover:scale-105 transition-all cursor-pointer shadow-md text-xs sm:text-sm"
              >
                + गॅलरीत फोटो समाविष्ट करा
              </button>
            </form>

            {/* GALLERY ITEMS GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {store.gallery.map((g) => (
                <div key={g.id} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div>
                    <img src={g.url} alt={g.caption} className="h-48 w-full object-cover" />
                    <div className="p-4">
                      <p className="font-extrabold text-sm text-slate-900">{g.caption}</p>
                      <div className="mt-2 flex flex-wrap gap-1">
                        {g.category.map((c) => (
                          <span key={c} className="bg-sky-50 border border-sky-200 text-sky-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-4 pt-0 border-t border-slate-100 mt-2 flex justify-end">
                    <button
                      onClick={() => store.deleteGalleryItem(g.id)}
                      className="px-3 py-1.5 rounded-xl bg-red-50 border border-red-200 text-red-700 font-extrabold text-xs hover:bg-red-600 hover:text-white transition-colors cursor-pointer"
                    >
                      🗑️ डिलीट फोटो
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 6. INQUIRIES & MESSAGES */}
        {activeTab === "inquiries" && (
          <div className="space-y-6 animate-fade-up">
            <div>
              <h1 className="font-display text-3xl font-black text-slate-900">
                Inquiries & Messages (चौकशी संदेश)
              </h1>
              <p className="text-slate-600 text-sm mt-1 font-semibold">
                वेबसाइटवरून आलेल्या सर्व चौकशी संदेशांची यादी व माहिती.
              </p>
            </div>

            <div className="space-y-4">
              {store.inquiries.map((inq) => (
                <div
                  key={inq.id}
                  className={`bg-white border rounded-2xl p-6 transition-all shadow-sm ${
                    !inq.read ? "border-[#810B38] ring-1 ring-[#810B38]/30 shadow-md" : "border-slate-200"
                  }`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="font-display text-lg font-black text-slate-900">{inq.name}</h3>
                        {!inq.read && (
                          <span className="bg-[#810B38] text-white text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full shadow-sm">
                            NEW MESSAGE
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#810B38] font-black mt-0.5">📞 {inq.phone} | ✉️ {inq.email}</p>
                    </div>
                    <span className="text-xs text-slate-400 font-extrabold">{inq.date}</span>
                  </div>

                  <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <p className="text-xs font-black text-slate-800 uppercase tracking-wide">विषय: {inq.subject}</p>
                    <p className="text-sm text-slate-800 mt-1.5 leading-relaxed font-medium">{inq.message}</p>
                  </div>

                  <div className="mt-4 flex items-center justify-end gap-3">
                    {!inq.read && (
                      <button
                        onClick={() => store.markInquiryRead(inq.id)}
                        className="px-4 py-2 rounded-xl bg-sky-50 border border-sky-300 text-sky-800 text-xs font-black hover:bg-sky-600 hover:text-white transition-colors cursor-pointer"
                      >
                        ✓ वाचित (Mark as Read)
                      </button>
                    )}
                    <button
                      onClick={() => store.deleteInquiry(inq.id)}
                      className="px-4 py-2 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-black hover:bg-red-600 hover:text-white transition-colors cursor-pointer"
                    >
                      🗑️ डिलीट संदेश
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 7. BROCHURE MANAGER (ADD / EDIT / UPLOAD NEW BROCHURES) */}
        {activeTab === "brochure" && (
          <div className="space-y-8 animate-fade-up max-w-5xl">
            <div>
              <h1 className="font-display text-3xl font-black text-slate-900">
                Brochure Manager (माहिती पत्रक / ब्रॉशर व्यवस्थापन)
              </h1>
              <p className="text-slate-600 text-sm mt-1 font-semibold">
                आनंदशाळा व स्पोर्ट्स क्लबचे नवीन PDF / इमेज **माहिती पत्रक (Brochures)** अपलोड करा किंवा जोडा.
              </p>
            </div>

            {/* ADD BROCHURE FORM WITH COMPUTER FILE PICKER */}
            <form onSubmit={handleAddBrochure} className="bg-white border border-slate-200 p-6 md:p-8 rounded-2xl space-y-4 shadow-sm">
              <h3 className="font-display text-lg font-black text-[#810B38]">
                📑 नवीन माहिती पत्रक / ब्रॉशर अपलोड करा (Add New Brochure)
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5">
                    ब्रॉशरचे नाव / शीर्षक (Brochure Title) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="उदा. प्रीतम आनंदशाळा दरपत्रक व उपक्रम माहिती"
                    value={newBrochureObj.title}
                    onChange={(e) => setNewBrochureObj({ ...newBrochureObj, title: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm font-semibold focus:border-[#810B38] focus:ring-2 focus:ring-[#810B38]/20 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5">
                    श्रेणी (Category)
                  </label>
                  <select
                    value={newBrochureObj.category}
                    onChange={(e) => setNewBrochureObj({ ...newBrochureObj, category: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm font-semibold focus:border-[#810B38] focus:ring-2 focus:ring-[#810B38]/20 focus:outline-none"
                  >
                    <option value="आनंदशाळा ब्रॉशर">आनंदशाळा ब्रॉशर</option>
                    <option value="स्पोर्ट्स क्लब ब्रॉशर">स्पोर्ट्स क्लब ब्रॉशर</option>
                    <option value="दरपत्रक व फी तक्ता">दरपत्रक व फी तक्ता</option>
                    <option value="विशेष सोहळा व माहिती">विशेष सोहळा व माहिती</option>
                  </select>
                </div>
              </div>

              {/* FILE PICKER FOR PDF OR IMAGE BROCHURE */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <label className="block text-xs font-extrabold text-slate-800 uppercase tracking-wider">
                  📄 १. कॉम्प्युटरवरून PDF किंवा इमेज फाईल निवडा (Upload PDF / Image File)
                </label>
                <input
                  type="file"
                  accept="image/*,application/pdf"
                  onChange={(e) =>
                    handleFileUpload(e, (url, type) =>
                      setNewBrochureObj({ ...newBrochureObj, fileUrl: url, fileType: type })
                    )
                  }
                  className="w-full px-4 py-2 rounded-xl bg-white border border-slate-300 text-slate-800 text-xs font-semibold cursor-pointer file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-extrabold file:bg-[#810B38] file:text-white hover:file:bg-[#68092D]"
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5">
                  २. किंवा फाईल ऑनलाईन लिंक / URL (Direct File Link)
                </label>
                <input
                  type="text"
                  placeholder="/images/Screenshot 2026-07-31 103107.png किंवा https://..."
                  value={newBrochureObj.fileUrl}
                  onChange={(e) => setNewBrochureObj({ ...newBrochureObj, fileUrl: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm font-semibold focus:border-[#810B38] focus:ring-2 focus:ring-[#810B38]/20 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5">
                  वर्णन / माहिती (Description)
                </label>
                <textarea
                  rows={2}
                  placeholder="ब्रोशरमधील मुख्य वैशिष्ट्यांचे वर्णन..."
                  value={newBrochureObj.description}
                  onChange={(e) => setNewBrochureObj({ ...newBrochureObj, description: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm font-semibold focus:border-[#810B38] focus:ring-2 focus:ring-[#810B38]/20 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-[#810B38] hover:bg-[#68092D] font-extrabold text-white hover:scale-105 transition-all cursor-pointer shadow-md text-xs sm:text-sm"
              >
                📄 ब्रॉशर अपलोड करा (Save Brochure)
              </button>
            </form>

            {/* BROCHURES LIST */}
            <div className="space-y-4">
              <h3 className="font-display text-lg font-black text-slate-900">
                उपलब्ध माहिती पत्रके ({store.brochures.length})
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {store.brochures.map((b) => (
                  <div key={b.id} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-[#810B38]/10 text-[#810B38] border border-[#810B38]/30">
                          {b.category}
                        </span>
                        <span className="text-xs text-slate-400 font-bold">{b.date}</span>
                      </div>

                      <h4 className="font-display text-lg font-black text-slate-900">{b.title}</h4>
                      {b.description && <p className="text-xs text-slate-600 mt-2 font-medium leading-relaxed">{b.description}</p>}

                      {/* PREVIEW IMAGE OR FILE LINK */}
                      {b.fileUrl && (
                        <div className="mt-4 overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-2">
                          {b.fileUrl.startsWith("data:image") || b.fileUrl.endsWith(".png") || b.fileUrl.endsWith(".jpeg") || b.fileUrl.endsWith(".jpg") ? (
                            <img src={b.fileUrl} alt={b.title} className="h-44 w-full object-cover rounded-lg" />
                          ) : (
                            <div className="p-4 text-center">
                              <span className="text-3xl">📄</span>
                              <p className="text-xs font-bold text-slate-700 mt-1">PDF फाईल उपलब्ध आहे</p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <a
                        href={b.fileUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 rounded-xl bg-sky-50 border border-sky-300 text-sky-800 text-xs font-black hover:bg-sky-600 hover:text-white transition-colors cursor-pointer"
                      >
                        👁️ पहा / डाउनलोड करा
                      </a>

                      <button
                        onClick={() => {
                          if (confirm(`नक्की "${b.title}" ब्रॉशर डिलीट करायचे?`)) {
                            store.deleteBrochure(b.id);
                            setSaveSuccessMsg("ब्रॉशर डिलीट केले!");
                            setTimeout(() => setSaveSuccessMsg(""), 3000);
                          }
                        }}
                        className="px-3 py-2 rounded-xl bg-red-50 border border-red-200 text-red-700 font-bold text-xs hover:bg-red-600 hover:text-white transition-colors cursor-pointer"
                      >
                        🗑️ डिलीट
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 8. VIDEO TESTIMONIALS MANAGER */}
        {activeTab === "testimonials" && (
          <div className="space-y-8 animate-fade-up">
            <div>
              <h1 className="font-display text-3xl font-black text-slate-900">
                Video Testimonials Manager (व्हिडिओ अभिप्राय)
              </h1>
              <p className="text-slate-600 text-sm mt-1 font-semibold">
                ज्येष्ठ नागरिक व मान्यवरांचे **व्हिडिओ अभिप्राय (Video Testimonials)** अपलोड करा किंवा जोडा.
              </p>
            </div>

            {/* ADD VIDEO TESTIMONIAL FORM */}
            <form onSubmit={handleAddVideoTestimonial} className="bg-white border border-slate-200 p-6 rounded-2xl space-y-4 max-w-4xl shadow-sm">
              <h3 className="font-display text-lg font-black text-[#810B38]">🎬 नवीन व्हिडिओ अभिप्राय जोडा (Add Video Testimonial)</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5">
                    वक्त्याचे / व्यक्तीचे नाव (Speaker Name) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="उदा. डॉ. गिरीश ओक (अभिनेते)"
                    value={newVideoTestObj.name}
                    onChange={(e) => setNewVideoTestObj({ ...newVideoTestObj, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm font-semibold focus:border-[#810B38] focus:ring-2 focus:ring-[#810B38]/20 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5">
                    पद / हुद्दा (Role/Designation)
                  </label>
                  <input
                    type="text"
                    placeholder="उदा. अभिनेते व ज्येष्ठ नागरिक मार्गदर्शक"
                    value={newVideoTestObj.role}
                    onChange={(e) => setNewVideoTestObj({ ...newVideoTestObj, role: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm font-semibold focus:border-[#810B38] focus:ring-2 focus:ring-[#810B38]/20 focus:outline-none"
                  />
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <label className="block text-xs font-extrabold text-slate-800 uppercase tracking-wider">
                  📹 १. कॉम्प्युटरवरून थेट व्हिडिओ फाईल निवडा (Upload Video File)
                </label>
                <input
                  type="file"
                  accept="video/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onload = (event) => {
                        const res = event.target?.result as string;
                        setNewVideoTestObj({
                          ...newVideoTestObj,
                          videoUrl: res || URL.createObjectURL(file),
                        });
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-800 text-xs font-semibold cursor-pointer file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-extrabold file:bg-[#810B38] file:text-white hover:file:bg-[#68092D]"
                />
                <p className="text-[11px] text-slate-500 font-medium">
                  (MP4, WEBM, MOV फाईल्स सपोर्टेड. किंवा खाली थेट ऑनलाईन व्हिडिओ लिंक टाका)
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5">
                    २. किंवा ऑनलाईन व्हिडिओ URL / YouTube Link
                  </label>
                  <input
                    type="text"
                    placeholder="https://www.youtube.com/embed/... किंवा video.mp4"
                    value={newVideoTestObj.videoUrl}
                    onChange={(e) => setNewVideoTestObj({ ...newVideoTestObj, videoUrl: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm font-semibold focus:border-[#810B38] focus:ring-2 focus:ring-[#810B38]/20 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5">
                    थंबनेल फोटो URL (Thumbnail Cover Image)
                  </label>
                  <input
                    type="text"
                    placeholder="/images/Screenshot 2026-07-31 103107.png"
                    value={newVideoTestObj.videoThumbnail}
                    onChange={(e) => setNewVideoTestObj({ ...newVideoTestObj, videoThumbnail: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm font-semibold focus:border-[#810B38] focus:ring-2 focus:ring-[#810B38]/20 focus:outline-none"
                  />
                </div>
              </div>

              {/* LIVE FORM VIDEO PREVIEW */}
              {newVideoTestObj.videoUrl && (
                <div className="p-3 rounded-xl bg-slate-100 border border-slate-300">
                  <p className="text-xs font-extrabold text-[#810B38] mb-2">🎬 निवडलेल्या व्हिडिओचा लाईव्ह प्रिव्ह्यू (Live Preview):</p>
                  <div className="aspect-video max-h-56 rounded-xl overflow-hidden bg-slate-950">
                    {newVideoTestObj.videoUrl.startsWith("data:video") || newVideoTestObj.videoUrl.startsWith("blob:") || newVideoTestObj.videoUrl.endsWith(".mp4") ? (
                      <video controls src={newVideoTestObj.videoUrl} className="w-full h-full object-contain" />
                    ) : (
                      <iframe src={newVideoTestObj.videoUrl} className="w-full h-full border-0" allowFullScreen />
                    )}
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5">
                  व्हिडिओ कॅप्शन / वर्णन (Description)
                </label>
                <textarea
                  rows={2}
                  placeholder="व्हिडिओमधील मुख्य मनोगत किंवा टॅगलाईन..."
                  value={newVideoTestObj.text}
                  onChange={(e) => setNewVideoTestObj({ ...newVideoTestObj, text: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm font-semibold focus:border-[#810B38] focus:ring-2 focus:ring-[#810B38]/20 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-[#810B38] hover:bg-[#68092D] font-extrabold text-white hover:scale-105 transition-all cursor-pointer shadow-md text-xs sm:text-sm"
              >
                🎬 व्हिडिओ अभिप्राय समाविष्ट करा (Save Video Testimonial)
              </button>
            </form>

            {/* VIDEO TESTIMONIALS CARDS LIST */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {store.testimonials.map((t) => (
                <div key={t.id} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div>
                    {/* VIDEO EMBED OR HTML5 VIDEO PLAYER */}
                    <div className="relative aspect-video bg-slate-950 flex items-center justify-center overflow-hidden">
                      {t.videoUrl?.startsWith("data:video") || t.videoUrl?.startsWith("blob:") || t.videoUrl?.endsWith(".mp4") || t.videoUrl?.endsWith(".webm") ? (
                        <video controls src={t.videoUrl} className="w-full h-full object-cover" />
                      ) : t.videoUrl?.includes("youtube.com") || t.videoUrl?.includes("youtu.be") ? (
                        <iframe
                          src={t.videoUrl}
                          title={t.name}
                          className="w-full h-full border-0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      ) : (
                        <div className="relative w-full h-full">
                          <img
                            src={t.videoThumbnail || "/images/Screenshot 2026-07-31 103107.png"}
                            alt={t.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center">
                            <span className="grid size-14 place-items-center rounded-full bg-[#810B38] text-white font-black text-2xl shadow-xl">
                              ▶
                            </span>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="p-5">
                      <div className="flex items-center justify-between">
                        <h4 className="font-extrabold text-base text-slate-900">{t.name}</h4>
                        <span className="text-amber-500 text-xs font-black">★★★★★</span>
                      </div>
                      <p className="text-xs text-[#810B38] font-bold mt-0.5">{t.role}</p>
                      {t.text && <p className="text-sm text-slate-700 mt-2 leading-relaxed font-semibold">“{t.text}”</p>}
                    </div>
                  </div>

                  <div className="p-5 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between">
                    <button
                      onClick={() => store.toggleTestimonialApproval(t.id)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-extrabold cursor-pointer ${
                        t.approved ? "bg-emerald-50 text-emerald-800 border border-emerald-300" : "bg-amber-50 text-amber-800 border border-amber-300"
                      }`}
                    >
                      {t.approved ? "✓ मान्यताप्राप्त (Approved)" : "⏳ प्रलंबित (Pending)"}
                    </button>
                    <button
                      onClick={() => store.deleteTestimonial(t.id)}
                      className="px-3.5 py-1.5 rounded-xl bg-red-50 border border-red-200 text-red-700 font-extrabold text-xs hover:bg-red-600 hover:text-white transition-colors cursor-pointer"
                    >
                      🗑️ डिलीट व्हिडिओ
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default AdminPage;
