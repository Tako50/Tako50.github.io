import React, { useState } from 'react';
import MealsImage from './MealsImage';
import mealsData from '../data/mealsData.json';

function Meals() {
  const [marker, setMarker] = useState(5);
  const moreList = () => setMarker(prev => prev + 5);
  const lessList = () => setMarker(prev => prev - 5);

  return (
    <section>
      <h2>Meals</h2>
      <div className="meals-container">
        {mealsData.slice(0, marker).map((meal) => (
          <div key={meal.id} className="meal-item">
            <MealsImage date={meal.date} image={meal.image} />
          </div>
        ))}
      </div>
      {mealsData.length > marker && (
        <button className="more-button" onClick={moreList}>MORE</button>
      )}
      {5 < marker && (
        <button className="less-button" onClick={lessList}>LESS</button>
      )}
    </section>
  );
}

export default Meals;
