import React, { useState, useEffect } from 'react';
import ProjectArticle from './ProjectArticle';
import projectData from '../data/projectData.json';

function Projects() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setArticles(projectData); // Loading project data
  }, []);

  return (
    <section className="w-full max-w-4xl mx-auto py-10 px-6 clean-card animate-fade-in">
      <h2 className="text-3xl font-bold mb-10 text-center text-slate-800 dark:text-slate-100">
        Works
      </h2>
      <div className="flex flex-col gap-8">
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
