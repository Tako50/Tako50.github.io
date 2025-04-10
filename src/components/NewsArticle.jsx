import React from 'react';

function NewsArticle({ date, content }) {
  return (
    <article>
      <p>{date}</p>
      <p>{content}</p>
    </article>
  );
}

export default NewsArticle;
