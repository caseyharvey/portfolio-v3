import ProjectCard from "./ProjectCard"
import React from "react"
import projectsArray from "./projectsArray"

const ProjectList: React.FC = () => {
  return (
    <>
      {projectsArray.map(project => (
        <ProjectCard
          id={project.id}
          key={project.id}
          name={project.name}
          tag={project.tag}
          url={project.url}
          git={project.git}
          info={project.info}
        />
      ))}
    </>
  )
}

export default ProjectList
