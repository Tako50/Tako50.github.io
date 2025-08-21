import React, { useState } from 'react';

function MealsImage({ date, image }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const openModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = (e) => {
    if (e.target === e.currentTarget || e.type === 'click') {
      setIsModalOpen(false);
    }
  };

  return (
    <div className="w-full flex justify-center mb-6">
      <article className="flex flex-col items-center">
        <img
          src={`/${image}`}
          alt="Meal"
          className="w-full max-w-[200px] sm:w-40 sm:h-40 rounded-lg shadow cursor-pointer object-cover"
          onClick={() => openModal(image)}
        />
        <p className="mt-2 text-sm sm:text-base text-gray-600">{date || "No date"}</p>
      </article>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 cursor-zoom-out px-4"
          onClick={closeModal}
        >
          <div className="relative bg-white rounded-2xl shadow-lg p-4 max-w-full w-full sm:max-w-lg flex flex-col items-center">
            <img
              src={`/${modalImage}`}
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
    </div>
  );
}

export default MealsImage;
