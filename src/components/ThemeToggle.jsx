import React, { useEffect, useState } from 'react';

function ThemeToggle() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300"
            aria-label="Toggle Dark Mode"
        >
            {theme === 'dark' ? (
                <i className="fas fa-sun text-xl text-amber-400"></i>
            ) : (
                <i className="fas fa-moon text-xl text-slate-600"></i>
            )}
        </button>
    );
}

export default ThemeToggle;
