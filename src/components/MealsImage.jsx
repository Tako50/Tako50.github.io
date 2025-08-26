import React, { useState } from 'react';

function MealsImage({ date, image }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = (e) => {
    if (e.target === e.currentTarget || e.type === 'click') setIsModalOpen(false);
  };

  return (
    <>
      <div className="relative w-full flex justify-center mb-6 rounded-2xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
        <img
          src={`/${image}`}
          alt="Meal"
          className="w-full h-48 object-cover"
          onClick={openModal}
        />
        <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
          {date || "No date"}
        </span>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 cursor-zoom-out px-4"
          onClick={closeModal}
        >
          <div className="relative bg-white rounded-2xl shadow-lg p-4 max-w-full w-full sm:max-w-lg flex flex-col items-center">
            <img
              src={`/${image}`}
              alt="Meal Full"
              className="max-w-full max-h-[70vh] rounded-lg mb-4"
            />
            <button
              className="absolute top-2 right-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition text-sm sm:text-base"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default MealsImage;
