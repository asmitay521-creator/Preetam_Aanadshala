import React from "react";

const scheduleData = [
  {
    icon: "🧘‍♂️",
    time: "सकाळी ०५:३० ते ०६:१५",
    mon: { main: "योग व प्राणायाम", sub: "आसने, प्राणायाम व हास्ययोग" },
    tue: { main: "योग व प्राणायाम", sub: "आसने, प्राणायाम व हास्ययोग" },
    wed: { main: "योग व प्राणायाम", sub: "आसने, प्राणायाम व हास्ययोग" },
    thu: { main: "योग व प्राणायाम", sub: "आसने, प्राणायाम व हास्ययोग" },
    fri: { main: "योग व प्राणायाम", sub: "आसने, प्राणायाम व हास्ययोग" },
  },
  {
    icon: "🧠",
    time: "सकाळी ०६:१५ ते ०७:००",
    mon: { main: "ध्यानधारणा & निसर्गोपचार", sub: "ओमकार जप व ध्यान" },
    tue: { main: "ध्यानधारणा & निसर्गोपचार", sub: "ओमकार जप व ध्यान" },
    wed: { main: "ध्यानधारणा & निसर्गोपचार", sub: "ओमकार जप व ध्यान" },
    thu: { main: "ध्यानधारणा & निसर्गोपचार", sub: "ओमकार जप व ध्यान" },
    fri: { main: "ध्यानधारणा & निसर्गोपचार", sub: "ओमकार जप व ध्यान" },
  },
  {
    icon: "🚶‍♂️",
    time: "सकाळी ०७:०० ते ०७:४५",
    mon: { main: "मॉर्निंग वॉक & वॉर्मअप", sub: "१.५ एकर परिसरात फिरणे" },
    tue: { main: "मॉर्निंग वॉक & वॉर्मअप", sub: "१.५ एकर परिसरात फिरणे" },
    wed: { main: "मॉर्निंग वॉक & वॉर्मअप", sub: "१.५ एकर परिसरात फिरणे" },
    thu: { main: "मॉर्निंग वॉक & वॉर्मअप", sub: "१.५ एकर परिसरात फिरणे" },
    fri: { main: "मॉर्निंग वॉक & वॉर्मअप", sub: "१.५ एकर परिसरात फिरणे" },
  },
  {
    icon: "☕",
    time: "सकाळी ०७:४५ ते ०८:१५",
    mon: { main: "आरोग्यदायी चहा & काढा", sub: "गप्पागोष्टी व संवाद" },
    tue: { main: "आरोग्यदायी चहा & काढा", sub: "गप्पागोष्टी व संवाद" },
    wed: { main: "आरोग्यदायी चहा & काढा", sub: "गप्पागोष्टी व संवाद" },
    thu: { main: "आरोग्यदायी चहा & काढा", sub: "गप्पागोष्टी व संवाद" },
    fri: { main: "आरोग्यदायी चहा & काढा", sub: "गप्पागोष्टी व संवाद" },
  },
  {
    icon: "💪",
    time: "सकाळी ०८:१५ ते ०९:००",
    mon: { main: "जिम & लाईट कार्डिओ", sub: "फिजिओथेरपिस्ट मार्गदर्शन" },
    tue: { main: "जिम & लाईट कार्डिओ", sub: "फिजिओथेरपिस्ट मार्गदर्शन" },
    wed: { main: "जिम & लाईट कार्डिओ", sub: "फिजिओथेरपिस्ट मार्गदर्शन" },
    thu: { main: "जिम & लाईट कार्डिओ", sub: "फिजिओथेरपिस्ट मार्गदर्शन" },
    fri: { main: "जिम & लाईट कार्डिओ", sub: "फिजिओथेरपिस्ट मार्गदर्शन" },
  },
  {
    icon: "🥗",
    time: "सकाळी ०९:०० ते ०९:३०",
    mon: { main: "पौष्टिक नाश्ता & विश्रांती", sub: "ताजा आहार व फळे" },
    tue: { main: "पौष्टिक नाश्ता & विश्रांती", sub: "ताजा आहार व फळे" },
    wed: { main: "पौष्टिक नाश्ता & विश्रांती", sub: "ताजा आहार व फळे" },
    thu: { main: "पौष्टिक नाश्ता & विश्रांती", sub: "ताजा आहार व फळे" },
    fri: { main: "पौष्टिक नाश्ता & विश्रांती", sub: "ताजा आहार व फळे" },
  },
];

const rules = [
  "क्लबाचे वेळापत्रक हे सदस्यांनी नियमित पाळावे.",
  "वेळेवर हजेरी लावणे सर्व सदस्यांसाठी अनिवार्य आहे.",
  "योग वर्गात योग ड्रेस व स्वच्छ चटई आणणे आवश्यक आहे.",
  "वेट ट्रेनिंग करताना प्रशिक्षकांच्या मार्गदर्शनाखाली व्यायाम करावा.",
  "जिम मध्ये मोबाईल वापरण्यास संपूर्ण बंदी आहे.",
  "क्लब परिसर स्वच्छ व नीटनेटका ठेवणे ही सर्वांची जबाबदारी आहे.",
  "क्लबांमध्ये धुम्रपान, तंबाखू व मद्यपान सक्त मनाई आहे.",
  "जिममध्ये मोठ्याने बोलणे किंवा गोंधळ करणे टाळावे.",
  "कोणत्याही प्रकारची दुखापत झाल्यास व्यवस्थापन जबाबदार राहणार नाही.",
  "वैयक्तिक वस्तूंची काळजी स्वतः घ्यावी."
];

export default function ScheduleSection() {
  return (
    <section className="w-full bg-[#fdfafb] py-16 px-4 md:px-8 font-sans" id="schedule">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER AREA */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="flex items-center gap-4 mb-2">
            <span className="text-xl sm:text-2xl font-black text-[#1a1a40]">प्रीतम स्पोर्ट्स अँड फिटनेस क्लब आनंदशाळा</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#f472b6] drop-shadow-sm flex items-center justify-center flex-wrap gap-2 md:gap-4">
            <span className="text-pink-400 opacity-60">❦</span>
            प्रीतम ज्येष्ठ नागरिक आनंदशाळा वेळापत्रक
            <span className="text-pink-400 opacity-60">❦</span>
          </h2>
          <p className="mt-3 text-[#1a1a40] font-black sm:text-xl flex items-center justify-center flex-wrap gap-2">
            <span className="text-[#f472b6]">❤</span> 
            आनंदी जीवन, सुंदर विचार... आरोग्य, मनोरंजन, संस्कार आणि सहवास यांचं आदर्श केंद्र. 
            <span className="text-[#f472b6]">❤</span>
          </p>
        </div>

        {/* DATE & TIME BADGES */}
        <div className="flex flex-col sm:flex-row items-center justify-between bg-white rounded-t-3xl border-b-4 border-[#1A05A2] shadow-sm p-4 px-6 md:px-12 z-10 relative mt-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#f472b6] text-white flex items-center justify-center text-2xl shadow-md">
              📅
            </div>
            <div>
              <div className="text-[#f472b6] font-extrabold text-sm">वेळापत्रक</div>
              <div className="text-[#1a1a40] font-black text-base sm:text-lg">सोमवार ते शुक्रवार (दैनिक हजेरी)</div>
            </div>
          </div>
          
          <div className="hidden lg:flex bg-[#1A05A2] text-white rounded-full px-8 py-2.5 items-center gap-2 shadow-md">
            <span className="opacity-70">🌿</span>
            <span className="font-black text-lg">प्रीतम ज्येष्ठ नागरिक आनंदशाळा वेळापत्रक</span>
            <span className="opacity-70">🌿</span>
          </div>

          <div className="flex items-center gap-3 mt-4 sm:mt-0">
            <div className="w-12 h-12 rounded-full border-4 border-[#1A05A2] text-[#1A05A2] flex items-center justify-center text-xl font-bold bg-[#e8eaf6]">
              🕐
            </div>
            <div>
              <div className="text-[#1A05A2] font-extrabold text-sm">सकाळी वेळ</div>
              <div className="text-[#1a1a40] font-black text-base sm:text-lg">05:30 ते 09:30</div>
            </div>
          </div>
        </div>

        {/* TABLE BODY */}
        <div className="overflow-x-auto bg-white rounded-b-3xl shadow-xl border border-slate-100">
          <table className="w-full min-w-[900px] text-center border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-[#f472b6] via-[#1A05A2] to-[#6a0dad] text-white">
                <th className="py-4 px-2 font-black text-lg border-r border-white/20 w-[15%]">वेळ</th>
                <th className="py-4 px-2 font-black text-lg border-r border-white/20">सोमवार</th>
                <th className="py-4 px-2 font-black text-lg border-r border-white/20">मंगळवार</th>
                <th className="py-4 px-2 font-black text-lg border-r border-white/20">बुधवार</th>
                <th className="py-4 px-2 font-black text-lg border-r border-white/20">गुरुवार</th>
                <th className="py-4 px-2 font-black text-lg">शुक्रवार</th>
              </tr>
            </thead>
            <tbody>
              {scheduleData.map((row, i) => (
                <tr key={i} className={`border-b border-slate-200 hover:bg-slate-50 transition-colors ${i % 2 === 0 ? 'bg-white' : 'bg-[#fafafa]'}`}>
                  <td className="py-5 px-3 border-r border-slate-200">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-3xl text-[#1A05A2]">{row.icon}</span>
                      <span className="font-extrabold text-[#1A05A2] text-sm mt-1">सकाळी</span>
                      <span className="font-black text-[#1a1a40] text-base">{row.time.replace('सकाळी ', '')}</span>
                    </div>
                  </td>
                  <td className="py-4 px-2 border-r border-slate-200">
                    <div className="font-black text-[#1a1a40] text-base sm:text-lg mb-1">{row.mon.main}</div>
                    <div className="text-sm font-bold text-slate-600">{row.mon.sub}</div>
                  </td>
                  <td className="py-4 px-2 border-r border-slate-200">
                    <div className="font-black text-[#1a1a40] text-base sm:text-lg mb-1">{row.tue.main}</div>
                    <div className="text-sm font-bold text-slate-600">{row.tue.sub}</div>
                  </td>
                  <td className="py-4 px-2 border-r border-slate-200">
                    <div className="font-black text-[#1a1a40] text-base sm:text-lg mb-1">{row.wed.main}</div>
                    <div className="text-sm font-bold text-slate-600">{row.wed.sub}</div>
                  </td>
                  <td className="py-4 px-2 border-r border-slate-200">
                    <div className="font-black text-[#1a1a40] text-base sm:text-lg mb-1">{row.thu.main}</div>
                    <div className="text-sm font-bold text-slate-600">{row.thu.sub}</div>
                  </td>
                  <td className="py-4 px-2">
                    <div className="font-black text-[#1a1a40] text-base sm:text-lg mb-1">{row.fri.main}</div>
                    <div className="text-sm font-bold text-slate-600">{row.fri.sub}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* BOTTOM 3 SECTIONS (ENLARGED CONTRAST TYPOGRAPHY & FIXED CARD LAYOUT) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-8">
          
          {/* Features (Left Card - Responsive Grid Wrap & Balanced Card Padding) */}
          <div className="col-span-1 lg:col-span-4 bg-white rounded-[24px] shadow-lg border-2 border-pink-200 overflow-hidden relative flex flex-col justify-between">
            <div className="bg-[#f472b6] text-white text-center py-2.5 font-black text-base flex justify-center items-center gap-2 w-max mx-auto px-8 rounded-b-xl absolute top-0 inset-x-0 shadow-sm z-10">
              <span className="text-xs">✦</span> आमच्या वैशिष्ट्ये <span className="text-xs">✦</span>
            </div>
            <div className="pt-14 pb-5 px-4 grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-3 gap-2.5 sm:gap-3.5 items-center justify-center h-full">
              <div className="flex flex-col items-center text-center gap-1.5 p-2 rounded-xl bg-pink-50/60 hover:bg-pink-100/60 transition-colors border border-pink-100">
                <div className="w-11 h-11 rounded-full bg-[#1A05A2] text-white flex items-center justify-center text-xl shadow-md">🏢</div>
                <div className="text-xs sm:text-sm font-black text-[#1a1a40] leading-tight">आधुनिक<br/>सुविधा</div>
              </div>
              <div className="flex flex-col items-center text-center gap-1.5 p-2 rounded-xl bg-blue-50/60 hover:bg-blue-100/60 transition-colors border border-blue-100">
                <div className="w-11 h-11 rounded-full bg-[#208dd7] text-white flex items-center justify-center text-xl shadow-md">🛡️</div>
                <div className="text-xs sm:text-sm font-black text-[#1a1a40] leading-tight">सुरक्षा<br/>प्रथम</div>
              </div>
              <div className="flex flex-col items-center text-center gap-1.5 p-2 rounded-xl bg-rose-50/60 hover:bg-rose-100/60 transition-colors border border-rose-100">
                <div className="w-11 h-11 rounded-full bg-[#f472b6] text-white flex items-center justify-center text-xl shadow-md">❤️</div>
                <div className="text-xs sm:text-sm font-black text-[#1a1a40] leading-tight">आरोग्याची<br/>काळजी</div>
              </div>
              <div className="flex flex-col items-center text-center gap-1.5 p-2 rounded-xl bg-purple-50/60 hover:bg-purple-100/60 transition-colors border border-purple-100">
                <div className="w-11 h-11 rounded-full bg-[#1A05A2] text-white flex items-center justify-center text-xl shadow-md">🎭</div>
                <div className="text-xs sm:text-sm font-black text-[#1a1a40] leading-tight">मनोरंजन व<br/>संस्कृती</div>
              </div>
              <div className="flex flex-col items-center text-center gap-1.5 p-2 rounded-xl bg-pink-50/60 hover:bg-pink-100/60 transition-colors border border-pink-100 col-span-2 sm:col-span-1 lg:col-span-2">
                <div className="w-11 h-11 rounded-full bg-[#f472b6] text-white flex items-center justify-center text-xl shadow-md">🧘</div>
                <div className="text-xs sm:text-sm font-black text-[#1a1a40] leading-tight">अनुभवी व तज्ञ<br/>मार्गदर्शक</div>
              </div>
            </div>
          </div>

          {/* Rules (Middle Card - Enlarged List Text) */}
          <div className="col-span-1 lg:col-span-5 bg-white rounded-[24px] shadow-lg border-2 border-indigo-200 relative pt-16 pb-6 px-5 sm:px-6">
            <div className="bg-[#1A05A2] text-white text-center py-2.5 font-black text-base flex justify-center items-center gap-2 w-max mx-auto px-8 sm:px-10 rounded-b-xl absolute top-0 inset-x-0 shadow-sm z-10">
              <span className="text-xs">🌿</span> क्लबचे नियम व सूचना <span className="text-xs">🌿</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 mt-1">
              {rules.map((rule, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#f472b6] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-xs sm:text-sm font-black text-[#1a1a40] leading-snug">{rule}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Happy Moments (Right Card) */}
          <div className="col-span-1 lg:col-span-3 bg-white rounded-[24px] shadow-lg border-2 border-pink-200 overflow-hidden relative flex flex-col justify-between">
             <div className="bg-[#f472b6] text-white text-center py-2.5 font-black text-base flex justify-center items-center gap-2 w-max mx-auto px-6 rounded-b-xl absolute top-0 inset-x-0 z-10 shadow-sm">
              <span className="text-xs">✦</span> आनंदी जीवनाचे सुंदर क्षण <span className="text-xs">✦</span>
            </div>
            <div className="w-full h-full min-h-[200px] pt-14 p-3 flex">
               <div className="w-full h-full rounded-2xl overflow-hidden border-2 border-pink-100 relative shadow-inner">
                  <img src="/images/aandmelav 10.jpeg" alt="Happy Seniors" className="w-full h-full object-cover" />
               </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
