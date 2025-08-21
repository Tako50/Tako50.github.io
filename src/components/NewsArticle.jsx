import React from 'react';

function NewsArticle({ date, content }) {
  return (
    <article className="w-full max-w-xl p-4 bg-white rounded-lg shadow-md flex flex-col gap-2">
      <time className="text-xs text-gray-500 font-medium">{date}</time>
      <p className="text-base text-gray-800 leading-relaxed">{content}</p>
    </article>
  );
}

export default NewsArticle;
