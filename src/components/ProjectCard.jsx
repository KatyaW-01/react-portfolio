import React from "react"

const ProjectCard = ({project}) => {
  return (
    <div>
      <h1>{project.name}</h1>
      <h3>{project.description}</h3>
      <p>Tools: {project.tools}</p>
      <a href={project.link}>Explore on Github!</a>
    </div>
  )
}

export default ProjectCard