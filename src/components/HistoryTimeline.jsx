import React from "react";
import "./HistoryTimeline.css"; // スタイル用のCSSファイルをインポート

function HistoryTimeline() {
  const events = [
    { date: "2003/02", title: "北海道札幌市出身", icon: "location-pin" },
    { date: "2021/03", title: "札幌第一高等学校 卒業", icon: "graduation-cap" },
    {
      date: "2021/04",
      title: "北海道大学入学 総合理系 入学",
      icon: "graduation-cap",
    },
    {
      date: "2025/03",
      title: "北海道大学 工学部 情報エレクトロニクス学科 卒業",
      icon: "graduation-cap",
    },
    {
      date: "2025/04",
      title: "北海道大学 大学院情報科学院 情報科学専攻 入学",
      icon: "graduation-cap",
    },
  ];

  return (
    <div className="timeline-container">
      <h2>History</h2>
        {events.map((event, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-icon">
              <i className={`fas fa-${event.icon}`}></i> {/* アイコン表示 */}
            </div>
            <div className="timeline-content">
              <span className="timeline-date">{event.date}</span>
              <p className="timeline-title">{event.title}</p>
            </div>
          </div>
        ))}
      
    </div>
  );
}

export default HistoryTimeline;
