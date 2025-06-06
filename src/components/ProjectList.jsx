import React from "react"
import ProjectCard from './ProjectCard'

const ProjectList = ({projects}) => {
  if(projects.length === 0) {
    return <p>No projects. Please add a new project</p>
  }
  return (
    <div>
      {projects.map((project)=>(
        <ProjectCard key={project.id} project={project}/>
      ))}
    </div>
  );
};

export default ProjectList