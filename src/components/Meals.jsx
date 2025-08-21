import React, { useState } from 'react';
import MealsImage from './MealsImage';
import mealsData from '../data/mealsData.json';

function Meals() {
  const [marker, setMarker] = useState(5);
  const moreList = () => setMarker(prev => prev + 5);
  const lessList = () => setMarker(prev => prev - 5);

  return (
    <section className="w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto py-8 px-4 sm:px-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-center">Meals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
        {mealsData.slice(0, marker).map((meal) => (
          <MealsImage key={meal.id} date={meal.date} image={meal.image} />
        ))}
      </div>
      <div className="flex justify-center gap-4">
        {mealsData.length > marker && (
          <button
            className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
            onClick={moreList}
          >
            MORE
          </button>
        )}
        {5 < marker && (
          <button
            className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg shadow hover:bg-gray-400 transition"
            onClick={lessList}
          >
            LESS
          </button>
        )}
      </div>
    </section>
  );
}

export default Meals;
