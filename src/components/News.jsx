import React, { useState, useEffect } from 'react';
import NewsArticle from './NewsArticle';
import newsData from '../data/newsData.json';

function News() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setArticles(newsData); // Loading news data
  }, []);

  return (
    <section>
      <h2>News</h2>
      {articles.map((article, index) => (
        <NewsArticle
          key={index}
          date={article.date}
          content={article.content}
        />
      ))}
    </section>
  );
}

export default News;
