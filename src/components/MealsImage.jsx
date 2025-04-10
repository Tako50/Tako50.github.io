import React, { useState } from 'react';
import '../ModalStyles.css';

function MealsImage({ date, image }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const openModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <article>
        <img
          src={`/${image}`}
          alt="Meal"
          width="150"
          height="150"
          onClick={() => openModal(image)} // Open modal on image click
        />
        <p>{date || "No date"}</p>
      </article>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <img src={`/${modalImage}`} alt="Meal Full" className="modal-image" />
            <button className="close-button" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MealsImage;
