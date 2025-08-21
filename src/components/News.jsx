import React, { useState, useEffect } from 'react';
import NewsArticle from './NewsArticle';
import newsData from '../data/newsData.json';

function News() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setArticles(newsData); // Loading news data
  }, []);

  return (
    <section className="w-full max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl mx-auto py-8 px-4 sm:px-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-center">News</h2>
      <div className="flex flex-col gap-4">
        {articles.map((article, index) => (
          <NewsArticle
            key={index}
            date={article.date}
            content={article.content}
          />
        ))}
      </div>
    </section>
  );
}

export default News;
