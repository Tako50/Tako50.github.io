import React from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import News from "./components/News";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import Skill from "./components/Skill";
import Meals from "./components/Meals";
import ImageCarousel from "./components/ImageCarousel";
import HistoryTimeline from "./components/HistoryTimeline";
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <div>
      {/* ヘッダー */}
      <Header />

      {/* ヘッダー高さ分の余白 */}
      <div className="pt-16 max-w-7xl mx-auto px-4 py-8">
        <section id="carousel" className="mb-8">
          <ImageCarousel />
        </section>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* 左カラム */}
          <div className="flex flex-col gap-8 md:w-1/3">
            <section id="profile">
              <Profile />
            </section>
            <section id="news">
              <News />
            </section>
          </div>

          {/* 右カラム */}
          <div className="flex-1 flex flex-col gap-8">
            <section id="introduction">
              <Introduction />
            </section>
            <section id="works">
              <Projects />
            </section>
            <section id="skills">
              <Skill />
            </section>
            <section id="history">
              <HistoryTimeline />
            </section>
            <section id="meals">
              <Meals />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
