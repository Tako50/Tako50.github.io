import React, { useState } from 'react';

function ProjectArticle({ date, title, content, image, titleLink, githubLink }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => setIsModalOpen(true);
  const handleModalClick = () => setIsModalOpen(false);

  return (
    <>
      <article style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        {image && (
          <img
            src={`/${image}`}
            alt={content}
            style={{ width: '150px', height: '150px', marginRight: '20px', objectFit: 'contain', cursor: 'pointer' }}
            onClick={handleImageClick}
          />
        )}
        <div>
          <h3 style={{ marginTop: 0 }}>
            {titleLink ? (
              <a href={titleLink} target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none' }}>
                {title}
              </a>
            ) : (
              title
            )}
          </h3>
          <p style={{ margin: 0, fontWeight: 'bold' }}>{date}</p>
          <p style={{ margin: '5px 0 0 0' }}>{content}</p>
          {githubLink && (
            <p style={{ marginTop: '8px' }}>
              <a href={githubLink} target="_blank" rel="noopener noreferrer" style={{ color: '#333', textDecoration: 'underline' }}>
                GitHub Repository →
              </a>
            </p>
          )}
        </div>
      </article>

      {isModalOpen && (
        <div
          onClick={handleModalClick}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            cursor: 'zoom-out',
          }}
        >
          <img
            src={`/${image}`}
            alt={content}
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              boxShadow: '0 0 20px #000',
              borderRadius: '8px',
            }}
          />
        </div>
      )}
    </>
  );
}

export default ProjectArticle;
