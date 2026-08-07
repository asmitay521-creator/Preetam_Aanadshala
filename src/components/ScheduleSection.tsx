import React from 'react';

const scheduleData = [
  {
    time: "सकाळी 05:30 ते 06:30",
    icon: "☀️",
    mon: { main: "कार्डिओ", sub: "(रनिंग / सायकलिंग)" },
    tue: { main: "योग", sub: "(प्राणायाम सहित)" },
    wed: { main: "फिटनेस ट्रेनिंग", sub: "(फंक्शनल ट्रेनिंग)" },
    thu: { main: "योग", sub: "(प्राणायाम सहित)" },
    fri: { main: "कार्डिओ", sub: "(रनिंग / सायकलिंग)" },
  },
  {
    time: "सकाळी 06:30 ते 07:30",
    icon: "🏋️",
    mon: { main: "वेट ट्रेनिंग", sub: "(बेसिक स्ट्रेंथ)" },
    tue: { main: "फंक्शनल ट्रेनिंग", sub: "(बॉडी वेट ट्रेनिंग)" },
    wed: { main: "वेट ट्रेनिंग", sub: "(बेसिक स्ट्रेंथ)" },
    thu: { main: "फंक्शनल ट्रेनिंग", sub: "(बॉडी वेट ट्रेनिंग)" },
    fri: { main: "वेट ट्रेनिंग", sub: "(बेसिक स्ट्रेंथ)" },
  },
  {
    time: "सकाळी 07:30 ते 08:30",
    icon: "🧘‍♀️",
    mon: { main: "योग", sub: "(डिटॉक्स योग)" },
    tue: { main: "डान्स फिटनेस", sub: "(झुंबा)" },
    wed: { main: "योग", sub: "(डिटॉक्स योग)" },
    thu: { main: "डान्स फिटनेस", sub: "(झुंबा)" },
    fri: { main: "योग", sub: "(डिटॉक्स योग)" },
  },
  {
    time: "सकाळी 08:30 ते 09:30",
    icon: "🏃",
    mon: { main: "मसल ट्रेनिंग", sub: "(हायपरट्रॉफी)" },
    tue: { main: "क्रॉस ट्रेनिंग", sub: "(HIIT)" },
    wed: { main: "मसल ट्रेनिंग", sub: "(हायपरट्रॉफी)" },
    thu: { main: "क्रॉस ट्रेनिंग", sub: "(HIIT)" },
    fri: { main: "मसल ट्रेनिंग", sub: "(हायपरट्रॉफी)" },
  },
];

const rules = [
  "क्लबचे वेळापत्रक हे सदस्यांनी नियमित पाळावे.",
  "क्लब परिसर स्वच्छ व नीटनेटका ठेवणे ही सर्वांची जबाबदारी आहे.",
  "वेळेवर हजेरी लावणे सर्व सदस्यांसाठी अनिवार्य आहे.",
  "क्लबमध्ये धुम्रपान, तंबाखू व मद्यपान सक्त मनाई आहे.",
  "योगा वर्गात योगा ड्रेस व स्वच्छ चटई आणणे आवश्यक आहे.",
  "जिममध्ये मोठ्याने बोलणे किंवा गोंधळ करणे टाळावे.",
  "वेट ट्रेनिंग करताना प्रशिक्षकांच्या मार्गदर्शनाखाली व्यायाम करावा.",
  "कोणत्याही प्रकारची दुखापत झाल्यास व्यवस्थापन जबाबदार राहणार नाही.",
  "जिम मध्ये मोबाईल वापरण्यास संपूर्ण बंदी आहे.",
  "वैयक्तिक वस्तूंची काळजी स्वतः घ्यावी.",
];

export default function ScheduleSection() {
  return (
    <section className="py-16 bg-[#f8f9fc] font-sans">
      <div className="max-w-[1400px] mx-auto px-4">
        
        {/* HEADER AREA */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="flex items-center gap-4 mb-2">
            <span className="text-xl sm:text-2xl font-bold text-[#1a1a40]">प्रीतम स्पोर्ट्स अँड फिटनेस क्लब आनंदशाळा</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#f472b6] drop-shadow-sm flex items-center justify-center flex-wrap gap-2 md:gap-4">
            <span className="text-pink-400 opacity-60">❦</span>
            प्रीतम ज्येष्ठ नागरिक आनंदशाळा वेळापत्रक
            <span className="text-pink-400 opacity-60">❦</span>
          </h2>
          <p className="mt-3 text-[#1a1a40] font-bold sm:text-lg flex items-center justify-center flex-wrap gap-2">
            <span className="text-[#f472b6]">❤</span> 
            आनंदी जीवन, सुंदर खेवाणी... आरोग्य, मनोरंजन, संस्कार आणि सहवास यांचं आदर्श केंद्र. 
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
              <div className="text-[#f472b6] font-bold text-sm">वेळापत्रक</div>
              <div className="text-[#1a1a40] font-black">सोमवार, 22 ते शुक्रवार, 26 मे 2023</div>
            </div>
          </div>
          
          <div className="hidden lg:flex bg-[#1A05A2] text-white rounded-full px-8 py-2 items-center gap-2 shadow-md">
            <span className="opacity-70">🌿</span>
            <span className="font-bold text-lg">प्रीतम ज्येष्ठ नागरिक आनंदशाळा वेळापत्रक</span>
            <span className="opacity-70">🌿</span>
          </div>

          <div className="flex items-center gap-3 mt-4 sm:mt-0">
            <div className="w-12 h-12 rounded-full border-4 border-[#1A05A2] text-[#1A05A2] flex items-center justify-center text-xl font-bold bg-[#e8eaf6]">
              🕐
            </div>
            <div>
              <div className="text-[#1A05A2] font-bold text-sm">सकाळी वेळ</div>
              <div className="text-[#1a1a40] font-black">05:30 ते 09:30</div>
            </div>
          </div>
        </div>

        {/* TABLE BODY */}
        <div className="overflow-x-auto bg-white rounded-b-3xl shadow-xl border border-slate-100">
          <table className="w-full min-w-[900px] text-center border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-[#f472b6] via-[#1A05A2] to-[#6a0dad] text-white">
                <th className="py-4 px-2 font-bold text-lg border-r border-white/20 w-[15%]">वेळ</th>
                <th className="py-4 px-2 font-bold text-lg border-r border-white/20">सोमवार</th>
                <th className="py-4 px-2 font-bold text-lg border-r border-white/20">मंगळवार</th>
                <th className="py-4 px-2 font-bold text-lg border-r border-white/20">बुधवार</th>
                <th className="py-4 px-2 font-bold text-lg border-r border-white/20">गुरुवार</th>
                <th className="py-4 px-2 font-bold text-lg">शुक्रवार</th>
              </tr>
            </thead>
            <tbody>
              {scheduleData.map((row, i) => (
                <tr key={i} className={`border-b border-slate-200 hover:bg-slate-50 transition-colors ${i % 2 === 0 ? 'bg-white' : 'bg-[#fafafa]'}`}>
                  <td className="py-5 px-3 border-r border-slate-200">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-3xl text-[#1A05A2]">{row.icon}</span>
                      <span className="font-bold text-[#1A05A2] text-sm mt-1">सकाळी</span>
                      <span className="font-black text-[#1a1a40] text-sm">{row.time.replace('सकाळी ', '')}</span>
                    </div>
                  </td>
                  <td className="py-4 px-2 border-r border-slate-200">
                    <div className="font-bold text-[#1a1a40] text-base mb-1">{row.mon.main}</div>
                    <div className="text-sm font-medium text-slate-600">{row.mon.sub}</div>
                  </td>
                  <td className="py-4 px-2 border-r border-slate-200">
                    <div className="font-bold text-[#1a1a40] text-base mb-1">{row.tue.main}</div>
                    <div className="text-sm font-medium text-slate-600">{row.tue.sub}</div>
                  </td>
                  <td className="py-4 px-2 border-r border-slate-200">
                    <div className="font-bold text-[#1a1a40] text-base mb-1">{row.wed.main}</div>
                    <div className="text-sm font-medium text-slate-600">{row.wed.sub}</div>
                  </td>
                  <td className="py-4 px-2 border-r border-slate-200">
                    <div className="font-bold text-[#1a1a40] text-base mb-1">{row.thu.main}</div>
                    <div className="text-sm font-medium text-slate-600">{row.thu.sub}</div>
                  </td>
                  <td className="py-4 px-2">
                    <div className="font-bold text-[#1a1a40] text-base mb-1">{row.fri.main}</div>
                    <div className="text-sm font-medium text-slate-600">{row.fri.sub}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* BOTTOM 3 SECTIONS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-8">
          
          {/* Features (Left) */}
          <div className="col-span-1 lg:col-span-3 bg-white rounded-[24px] shadow-md border border-slate-200 overflow-hidden relative">
            <div className="bg-[#f472b6] text-white text-center py-2 font-bold text-sm flex justify-center items-center gap-2 w-max mx-auto px-6 rounded-b-xl absolute top-0 inset-x-0">
              <span className="text-xs">✦</span> आमच्या वैशिष्ट्ये <span className="text-xs">✦</span>
            </div>
            <div className="pt-14 pb-6 px-4 flex justify-between items-center gap-2">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[#1A05A2] text-white flex items-center justify-center text-lg shadow-md">🏢</div>
                <div className="text-[9px] font-bold text-[#1a1a40] leading-tight">आधुनिक<br/>सुविधा</div>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[#208dd7] text-white flex items-center justify-center text-lg shadow-md">🛡️</div>
                <div className="text-[9px] font-bold text-[#1a1a40] leading-tight">सुरक्षा<br/>प्रथम</div>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[#f472b6] text-white flex items-center justify-center text-lg shadow-md">❤️</div>
                <div className="text-[9px] font-bold text-[#1a1a40] leading-tight">आरोग्याची<br/>काळजी</div>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[#1A05A2] text-white flex items-center justify-center text-lg shadow-md">🎭</div>
                <div className="text-[9px] font-bold text-[#1a1a40] leading-tight">मनोरंजन व<br/>संस्कृती</div>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[#f472b6] text-white flex items-center justify-center text-lg shadow-md">🧘</div>
                <div className="text-[9px] font-bold text-[#1a1a40] leading-tight">अनुभवी व तज्ञ<br/>मार्गदर्शक</div>
              </div>
            </div>
          </div>

          {/* Rules (Middle) */}
          <div className="col-span-1 lg:col-span-6 bg-white rounded-[24px] shadow-md border border-slate-200 relative pt-12 pb-6 px-6">
            <div className="bg-[#1A05A2] text-white text-center py-2 font-bold text-sm flex justify-center items-center gap-2 w-max mx-auto px-8 rounded-b-xl absolute top-0 inset-x-0">
              <span className="text-xs">🌿</span> क्लबचे नियम व सूचना <span className="text-xs">🌿</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mt-2">
              {rules.map((rule, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <div className="w-4 h-4 rounded-full bg-[#f472b6] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-[11px] font-bold text-[#1a1a40] leading-snug">{rule}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Happy Moments (Right) */}
          <div className="col-span-1 lg:col-span-3 bg-white rounded-[24px] shadow-md border border-[#f472b6]/30 overflow-hidden relative">
             <div className="bg-[#f472b6] text-white text-center py-2 font-bold text-sm flex justify-center items-center gap-2 w-max mx-auto px-6 rounded-b-xl absolute top-0 inset-x-0 z-10">
              <span className="text-xs">✦</span> आनंदी जीवनाचे सुंदर क्षण <span className="text-xs">✦</span>
            </div>
            <div className="w-full h-full min-h-[160px] pt-12 p-3">
               <div className="w-full h-full rounded-2xl overflow-hidden border border-pink-100 relative shadow-inner">
                  <img src="/images/aandmelav 10.jpeg" alt="Happy Seniors" className="w-full h-full object-cover" />
               </div>
            </div>
          </div>
        </div>



      </div>
    </section>
  );
}
