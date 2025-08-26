import React from "react";


const events = [
  { date: "2003/02", title: "北海道札幌市出身", icon: "map-pin" },
  { date: "2021/03", title: "札幌第一高等学校 卒業", icon: "school" },
  { date: "2021/04", title: "北海道大学入学 総合理系 入学", icon: "university" },
  { date: "2025/03", title: "北海道大学 工学部 情報エレクトロニクス学科 卒業", icon: "graduation-cap" },
  { date: "2025/04", title: "北海道大学 大学院情報科学院 情報科学専攻 入学", icon: "user-graduate" },
];


function HistoryTimeline() {
  return (
    <section className="w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto py-8 px-4 sm:px-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-center">History</h2>
      <ol className="relative border-l-4 border-blue-200">
        {events.map((event, idx) => (
          <li key={idx} className="mb-10 ml-6">
            <span className="absolute -left-6 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full ring-4 ring-white">
              <i className={`fas fa-${event.icon} text-blue-600 text-lg sm:text-2xl`}></i>
            </span>
            <div className="pl-2">
              <span className="block text-xs sm:text-sm text-gray-500 font-semibold mb-1">{event.date}</span>
              <p className="text-base sm:text-lg font-semibold text-gray-800 leading-snug">{event.title}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default HistoryTimeline;
