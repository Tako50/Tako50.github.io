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
      <h2>Projects&Thesis</h2>
      {articles.map((article, index) => (
        <ProjectArticle
          key={index}
          date={article.date}
          content={article.content}
        />
      ))}
    </section>
  );
}

export default Projects;
