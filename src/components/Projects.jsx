import React, { useState, useEffect } from 'react';
import ProjectArticle from './ProjectArticle';
import projectData from '../data/projectData.json';

function Projects() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    setArticles(projectData); // Loading project data
  }, []);

  return (
    <section>
      <h2>Works</h2>
      {articles.map((article, index) => (
        <ProjectArticle
          key={index}
          date={article.date}
          title={article.title} 
          content={article.content}
          image={article.image}
          titleLink={article.titleLink}
          githubLink={article.githubLink}
        />
      ))}
    </section>
  );
}

export default Projects;