import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4 group relative"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-800"
              >
                <img
                  src={project.image}
                  width={250}
                  height={250}
                  alt={project.title}
                  className="rounded-lg transition-all duration-300 ease-in-out group-hover:shadow-2xl group-hover:scale-105 group-hover:rotate-3 group-hover:translate-x-2 group-hover:translate-y-2"
                />
              </a>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 5 }}
              className="w-full lg:w-3/4 text-center lg:text-left"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500"
              >
                <h3 className="text-2xl font-semibold">{project.title}</h3>
              </a>
              <p className="mt-2 text-gray-600">{project.description}</p>
              <div className="mt-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300"
                    key={techIndex}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;