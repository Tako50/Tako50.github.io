import React from 'react';

function AwardArticle({ date, content }) {
  return (
    <article>
      <p>{date}</p>
      <p>{content}</p>
    </article>
  );
}

export default AwardArticle;
