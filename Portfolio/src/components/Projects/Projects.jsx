import React from "react";
import Movie_Database from "./Pic/Movie_Database.png";
import TodoList from "./Pic/TodoList.png";
import mini_shopify from "./Pic/mini_shopify.png";

function Projects() {
  const projects = [
    {
      title: "Movie Database",
      img: Movie_Database,
      link: "https://capstone-project-five-delta.vercel.app/",
      desc: "Browse and explore movies with details and ratings.",
    },
    {
      title: "Todo List",
      img: TodoList,
      link: "https://react-todo-xi-umber.vercel.app/",
      desc: "Manage tasks with add, delete, and complete features.",
    },
    {
      title: "Mini Shopify",
      img: mini_shopify,
      link: "https://mini-shopify.vercel.app/",
      desc: "E-commerce mini app for shopping experience.",
    },
  ];

  return (
    <section className="bg-slate-100 dark:bg-projects py-20 flex flex-col items-center">
      <h1 className="lg:font-eb-garamond md:text-7xl text-4xl dark:text-white font-bold mb-12">
        Projects
      </h1>

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-[90%] max-w-6xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg lg:hover:shadow-2xl transition-all duration-500 transform lg:hover:-translate-y-2 flex flex-col items-center p-5"
          >
            <a href={project.link} target="_blank" rel="noreferrer">
              <img
                src={project.img}
                alt={project.title}
                className="rounded-xl w-full h-56 object-cover mb-4 lg:hover:scale-105 transition-transform duration-500"
              />
            </a>
            <h2 className="text-2xl font-semibold dark:text-white mb-2">
              {project.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-center text-sm">
              {project.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
