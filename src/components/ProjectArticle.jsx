import React from 'react';

function ProjectArticle({ date, content }) {
  return (
    <article>
      <p>{date}</p>
      <p>{content}</p>
    </article>
  );
}

export default ProjectArticle;
