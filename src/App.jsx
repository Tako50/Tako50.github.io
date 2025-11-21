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
    <div className="min-h-screen text-slate-800 dark:text-slate-100 selection:bg-teal-100 dark:selection:bg-teal-900 selection:text-teal-900 dark:selection:text-teal-100">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="pt-24 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero / Carousel Section */}
        <section id="carousel" className="mb-12 animate-fade-in">
          <ImageCarousel />
        </section>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left Column (Sticky on Desktop) */}
          <aside className="flex flex-col gap-8 w-full lg:w-1/3 lg:sticky lg:top-24 self-start animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <section id="profile">
              <Profile />
            </section>
            <section id="news">
              <News />
            </section>
          </aside>

          {/* Right Column */}
          <div className="flex-1 flex flex-col gap-10 w-full animate-fade-in" style={{ animationDelay: '0.2s' }}>
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
      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-slate-400 dark:text-slate-500 text-sm">
        &copy; {new Date().getFullYear()} Matsuo Kota. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
