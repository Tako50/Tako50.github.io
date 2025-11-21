import React, { useState } from 'react';

function ProjectArticle({ date, title, content, image, titleLink, githubLink }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => setIsModalOpen(true);
  const handleModalClick = () => setIsModalOpen(false);

  return (
    <>
      <article className="flex flex-col md:flex-row items-start gap-6 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors border border-transparent hover:border-slate-100 dark:hover:border-slate-700">
        {image && (
          <div className="w-full md:w-1/3 flex-shrink-0 overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700">
            <img
              src={`/${image}`}
              alt={content}
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
              onClick={handleImageClick}
            />
          </div>
        )}
        <div className="flex-1 text-left">
          <div className="flex flex-wrap items-baseline gap-2 mb-2">
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">
              {titleLink ? (
                <a
                  href={titleLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                >
                  {title}
                </a>
              ) : (
                title
              )}
            </h3>
            <span className="text-sm text-slate-500 dark:text-slate-400 font-mono">{date}</span>
          </div>

          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">{content}</p>

          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
            >
              <i className="fab fa-github"></i>
              GitHub Repository
            </a>
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
