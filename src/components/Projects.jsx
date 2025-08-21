import React, { useState, useEffect } from 'react';
import ProjectArticle from './ProjectArticle';
import projectData from '../data/projectData.json';

function Projects() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    setArticles(projectData); // Loading project data
  }, []);

  return (
    <section className="w-full max-w-sm sm:max-w-md md:max-w-3xl mx-auto py-6 sm:py-8 px-3 sm:px-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-center">
        Works
      </h2>
      <div className="flex flex-col gap-4 sm:gap-6">
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
      </div>
    </section>
  );
}

export default Projects;
