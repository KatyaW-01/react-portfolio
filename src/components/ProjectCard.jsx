import React from "react"

const ProjectCard = ({project}) => {
  return (
    <div>
      <h1>{project.name}</h1>
      <h3>{project.description}</h3>
      <p>"Tools:"{[...project.tools]}</p>
      <p>"Link:" {project.link}</p>
    </div>
  )
}

export default ProjectCard