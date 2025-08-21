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
    <div className="max-w-7xl mx-auto px-4 py-8">
      <section className="mb-8">
        <ImageCarousel />
      </section>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex flex-col gap-8 md:w-1/3">
          <div>
            <Profile />
          </div>
          <div>
            <News />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-8">
          <div>
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
