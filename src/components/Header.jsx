import React, { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { id: "profile", label: "Profile" },
    { id: "news", label: "News" },
    { id: "introduction", label: "Introduction" },
    { id: "works", label: "Works" },
    { id: "skills", label: "Skills" },
    { id: "history", label: "History" },
    { id: "meals", label: "Meals" },
  ];

  const handleClick = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700 py-4 shadow-sm"
        : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        {/* Logo */}
        <div
          className="text-2xl font-bold text-slate-800 dark:text-slate-100 cursor-pointer tracking-tight"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Matsuo Kota
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className="text-slate-600 dark:text-slate-300 hover:text-teal-700 dark:hover:text-teal-400 font-medium transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 dark:bg-teal-400 transition-all group-hover:w-full"></span>
            </button>
          ))}
          <div className="pl-4 border-l border-slate-200 dark:border-slate-700">
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Hamburger & Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-700 dark:text-slate-200 hover:text-teal-700 dark:hover:text-teal-400 transition-colors"
          >
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 transition-all duration-300 origin-top shadow-lg ${isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
          }`}
      >
        <div className="flex flex-col p-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className="w-full px-4 py-3 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-teal-700 dark:hover:text-teal-400 rounded-lg text-left transition-colors font-medium"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
