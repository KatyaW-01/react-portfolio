import React from "react"
import ProjectCard from './ProjectCard'
import styles from '../styles/ProjectList.module.css'

const ProjectList = ({projects, newProjects = [] }) => {
  if(projects.length === 0 && newProjects.length === 0) {
    return <p>No projects. Please add a new project</p>
  }
  return (
    <div className={styles.container} >
      {projects.map((project)=>(
        <ProjectCard key={project.id} project={project}/>
      ))}
      {newProjects.length > 0 && 
        newProjects.map((newProject,index)=>(
          <ProjectCard key={`new-${index}`} project={newProject}/>
        ))}
    </div>
  );
};

export default ProjectList