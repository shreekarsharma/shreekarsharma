import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "ECommerce Platform",
    date: "May 2025 – Jul 2025",
    description:
      "Built a full-featured e-commerce application with React, Node, Express, and MongoDB. Implemented auth, protected routes, image uploads, EmailJS integration, and responsive UI components like cart, wishlist, filters, and checkout.",
    tech: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "EmailJS", "Multer"],
    github: "https://github.com/shreekarsharma/NextBuy",
    live: "https://next-buy.onrender.com/",
  },
  {
    title: "Movie Search App",
    date: "Apr 2025 – May 2025",
    description:
      "Responsive movie browser using TMDB API with real-time search, dynamic routing, pagination, and detailed views. Designed for consistent UI and intuitive UX.",
    tech: ["React", "Tailwind", "TMDB API"],
    github: "https://github.com/shreekarsharma/PopCornDB",
    live: "https://popcorndb.vercel.app/",
  },
  {
    title: "Quiz App",
    date: "Jul 2025",
    description:
      "A quiz app using React and Open Trivia API with scoring, answer tracking, percentage result summary, and HTML entity decoding using `he`. Performance optimized with useMemo and React.memo.",
    tech: ["React", "Tailwind", "Open Trivia API", "he"],
    github: "https://github.com/shreekarsharma/quizapp",
    live: "https://quizapp-bice-eight.vercel.app/",
  },
  
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
          Projects
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
                  {project.title}
                </h3>
                <p className="text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-blue-100 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
                >
                  <FaGithub />
                  Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-blue-600 hover:underline"
                >
                  <FaExternalLinkAlt />
                  Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
