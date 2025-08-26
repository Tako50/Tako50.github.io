import React, { useState } from 'react';
import MealsImage from './MealsImage';
import mealsData from '../data/mealsData.json';

function Meals() {
  const [marker, setMarker] = useState(6);

  const moreList = () => setMarker(prev => prev + 6);
  const lessList = () => setMarker(prev => prev - 6);

  return (
    <section className="w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto py-8 px-4 sm:px-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-center">Meals</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
        {mealsData.slice(0, marker).map((meal) => (
          <MealsImage key={meal.id} date={meal.date} image={meal.image} />
        ))}
      </div>

      {/* MORE / LESS */}
      <div className="flex justify-center gap-4">
        {mealsData.length > marker && (
          <button
            className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full shadow-lg hover:from-blue-600 hover:to-blue-700 transition"
            onClick={moreList}
          >
            MORE +
          </button>
        )}
        {marker > 5 && (
          <button
            className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full shadow hover:bg-gray-300 transition"
            onClick={lessList}
          >
            LESS -
          </button>
        )}
      </div>
    </section>
  );
}

export default Meals;
