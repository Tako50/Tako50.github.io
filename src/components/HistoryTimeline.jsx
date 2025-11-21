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
    <section className="w-full max-w-4xl mx-auto py-10 px-6 clean-card animate-fade-in">
      <h2 className="text-3xl font-bold mb-10 text-center text-slate-800 dark:text-slate-100">
        History
      </h2>
      <ol className="relative border-l-2 border-slate-200 dark:border-slate-700 ml-3 sm:ml-6 space-y-8">
        {events.map((event, idx) => (
          <li key={idx} className="ml-6 sm:ml-10 relative group">
            <span className="absolute -left-[33px] sm:-left-[49px] flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-white dark:bg-slate-800 rounded-full border-2 border-teal-600 dark:border-teal-400 group-hover:scale-110 transition-transform duration-300 shadow-sm">
              <i className={`fas fa-${event.icon} text-teal-600 dark:text-teal-400 text-sm sm:text-lg`}></i>
            </span>
            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-700 hover:shadow-md transition-all">
              <span className="block text-xs sm:text-sm text-teal-700 dark:text-teal-300 font-mono mb-1">{event.date}</span>
              <p className="text-base sm:text-lg font-medium text-slate-800 dark:text-slate-100 leading-snug">{event.title}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default HistoryTimeline;
