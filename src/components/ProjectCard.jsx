import React from "react"
import styles from '../styles/ProjectCard.module.css'

const ProjectCard = ({project}) => {
  return (
    <div className={styles.card} >
      <h1>{project.name}</h1>
      <h3>{project.description}</h3>
      <p>Tools: {project.tools}</p>
      <a href={project.link}>Explore on Github!</a>
    </div>
  )
}

export default ProjectCard