"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "3d Portfolio",
    image: "/images/projects/1.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/Ohi20/3d-Portfolio-2023/tree/main",
    previewUrl: "https://portfolio-ashraf-ohi.netlify.app/",
  },
  {
    id: 2,
    title: "Youtube Clone",
    description: "Rest API",
    image: "/images/projects/2.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/Ohi20/Youtube-Clone-2023",
    previewUrl: "https://youtube-clone-api-2023.netlify.app/",
  },
  {
    id: 3,
    title: "Cinemore",
    description: "Rest API",
    image: "/images/projects/3.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/Ohi20/Movie-App-With-REST_API",
    previewUrl: "https://cinemore.netlify.app/",
  },
  {
    id: 4,
    title: "Music App",
    description: "Mp3 Songs",
    image: "/images/projects/4.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/Ohi20/Auth-App-With-Firebase",
    previewUrl: "https://willowy-donut-67169c.netlify.app/",
  },
  {
    id: 5,
    title: "Solar System",
    description: "3d Solar",
    image: "/images/projects/5.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/Ohi20/3d-Solar-System",
    previewUrl: "https://effortless-pegasus-0b7dd5.netlify.app/",
  },
  {
    id: 6,
    title: "Digital Clock",
    description: "Javascript",
    image: "/images/projects/6.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/Ohi20/Digital-Cloak-with-Dom-Manipulation",
    previewUrl: "https://celebrated-quokka-ae1b2f.netlify.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Frontend"
          isSelected={tag === "Frontend"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Backend"
          isSelected={tag === "Backend"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
