import React, { useState, useEffect } from 'react';
import AwardArticle from './AwardArticle';
import awardData from '../data/awardData.json';

function Awards() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setArticles(awardData); // Loading award data
  }, []);

  return (
    <section>
      <h2>Awards</h2>
      {articles.map((article, index) => (
        <AwardArticle
          key={index}
          date={article.date}
          content={article.content}
        />
      ))}
    </section>
  );
}

export default Awards;
