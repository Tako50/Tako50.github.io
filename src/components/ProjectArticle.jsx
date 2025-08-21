import React, { useState } from 'react';

function ProjectArticle({ date, title, content, image, titleLink, githubLink }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => setIsModalOpen(true);
  const handleModalClick = () => setIsModalOpen(false);

  return (
    <>
      <article className="flex flex-col sm:flex-row items-center sm:items-start mb-6">
        {image && (
          <img
            src={`/${image}`}
            alt={content}
            className="w-full max-w-[200px] sm:w-[150px] sm:h-[150px] mb-4 sm:mb-0 sm:mr-5 object-contain rounded-lg shadow cursor-pointer"
            onClick={handleImageClick}
          />
        )}
        <div className="text-center sm:text-left">
          <h3 className="mt-0 text-lg sm:text-xl font-bold">
            {titleLink ? (
              <a
                href={titleLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {title}
              </a>
            ) : (
              title
            )}
          </h3>
          <p className="m-0 font-semibold text-gray-500 text-sm sm:text-base">{date}</p>
          <p className="mt-1 mb-0 text-gray-800 text-sm sm:text-base">{content}</p>
          {githubLink && (
            <p className="mt-2">
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 underline hover:text-blue-600 text-sm sm:text-base"
              >
                GitHub Repository →
              </a>
            </p>
          )}
        </div>
      </article>

      {isModalOpen && (
        <div
          onClick={handleModalClick}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 cursor-zoom-out"
        >
          <img
            src={`/${image}`}
            alt={content}
            className="max-w-[90vw] max-h-[90vh] shadow-2xl rounded-lg"
          />
        </div>
      )}
    </>
  );
}

export default ProjectArticle;
