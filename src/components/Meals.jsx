import React, { useState } from 'react';
import MealsImage from './MealsImage';
import mealsData from '../data/mealsData.json';

function Meals() {
  const [visibleCount, setVisibleCount] = useState(6); // Renamed 'marker' to 'visibleCount' for clarity

  const showMore = () => setVisibleCount(prev => prev + 6); // Renamed 'moreList' to 'showMore'
  const showLess = () => setVisibleCount(6); // Changed 'lessList' to reset to initial count, renamed to 'showLess'

  const visibleMeals = mealsData.slice(0, visibleCount); // New derived state for meals to display

  return (
    <section className="w-full max-w-6xl mx-auto py-10 px-6 clean-card animate-fade-in">
      <h2 className="text-3xl font-bold mb-10 text-center text-slate-800 dark:text-slate-100">
        Meals
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
        {visibleMeals.map((meal, index) => (
          <MealsImage key={index} date={meal.date} image={meal.image} />
        ))}
      </div>

      {visibleCount < mealsData.length ? (
        <div className="text-center mt-8">
          <button
            onClick={showMore}
            className="px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-full font-bold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
          >
            MORE
          </button>
        </div>
      ) : (
        <div className="text-center mt-8">
          <button
            onClick={showLess}
            className="px-8 py-3 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 rounded-full font-bold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
          >
            CLOSE
          </button>
        </div>
      )}
    </section>
  );
}

export default Meals;
