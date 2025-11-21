import React, { useState, useEffect } from 'react';
import NewsArticle from './NewsArticle';
import newsData from '../data/newsData.json';

function News() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setArticles(newsData); // Loading news data
  }, []);

  return (
    <section className="w-full max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl mx-auto py-8 px-6 clean-card animate-fade-in">
      <h2 className="text-2xl font-bold mb-6 text-center text-slate-800 dark:text-slate-100">News</h2>
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
