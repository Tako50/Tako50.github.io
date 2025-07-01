import React from 'react';

function ProjectArticle({ date, title, content, image }) {
  return (
    <article style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
      {image && (
        <img
          src={`/${image}`}
          alt={content}
          style={{ width: '150px', height: '150px', marginRight: '20px', objectFit: 'cover' }}
        />
      )}
      <div>
        <h3 style={{ marginTop: 0 }}>{title}</h3>
        <p style={{ margin: 0, fontWeight: 'bold' }}>{date}</p>
        <p style={{ margin: '5px 0 0 0' }}>{content}</p>
      </div>
    </article>
  );
}

export default ProjectArticle;