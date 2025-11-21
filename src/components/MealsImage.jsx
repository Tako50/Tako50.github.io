import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function MealsImage({ date, image }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (e) => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Lock scroll
  };

  const closeModal = (e) => {
    if (!e || e.target === e.currentTarget || e.type === 'click') {
      setIsModalOpen(false);
      document.body.style.overflow = 'unset'; // Unlock scroll
    }
  };

  // Cleanup on unmount
  React.useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <>
      <div className="relative w-full aspect-square rounded-xl overflow-hidden group cursor-pointer border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all">
        <img
          src={`/${image}`}
          alt="Meal"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onClick={openModal}
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 pointer-events-none">
          <span className="text-white text-sm font-medium bg-teal-700/90 px-2 py-1 rounded">
            {date || "No date"}
          </span>
        </div>
      </div>

      {/* Modal */}
      {/* Modal */}
      {/* Modal */}
      {isModalOpen && ReactDOM.createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900/90 backdrop-blur-sm cursor-zoom-out px-4 animate-fade-in"
          onClick={closeModal}
          style={{ overflowY: 'hidden' }} // Ensure no scroll on modal container
        >
          <div className="relative max-w-4xl w-full flex flex-col items-center justify-center h-full p-4">
            {/* Close Button - Fixed position relative to viewport or container */}
            <button
              className="absolute top-4 right-4 z-[10000] text-white/80 hover:text-white bg-black/20 hover:bg-black/40 rounded-full p-2 transition-all"
              onClick={closeModal}
            >
              <i className="fas fa-times text-2xl sm:text-3xl"></i>
            </button>

            <img
              src={`/${image}`}
              alt="Meal Full"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
            />
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

export default MealsImage;
