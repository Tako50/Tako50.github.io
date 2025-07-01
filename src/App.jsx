import React from "react";
import Profile from "./components/Profile";
import News from "./components/News";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import Skill from "./components/Skill";
import Meals from "./components/Meals";
import ImageCarousel from './components/ImageCarousel';
import HistoryTimeline from './components/HistoryTimeline';

function App() {
  return (
    <div className="container">
      <section>
        <ImageCarousel />
      </section>
      <div className="bottom-content">
        <div className="sub-section">
          <div className="profile-section">
            <Profile />
          </div>
          <div className="news-section">
            <News />
          </div>
        </div>
        <div className="main-content">
          <div className="center-content">
            <Introduction />
          </div>
          <section>
            <Projects />
          </section>
          <section>
            <Skill />
          </section>
          <section>
            <HistoryTimeline />
          </section>
          <section>
            <Meals />
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
