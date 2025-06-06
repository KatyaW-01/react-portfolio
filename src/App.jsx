import { useState } from 'react'
import ProjectList from './components/ProjectList'
import AddProject from './components/AddProject'
import SearchProjects from './components/SearchProjects'

import './App.css'
const projects = [
  {
    id: 1,
    name: "Battleship Game", 
    description: "An interactive battleship game that allows the user to place two ships on a board and take turns with the computer firing upon the other player's board",
    tools: "Ruby, Rspec",
    link:"https://github.com/KatyaW-01/Battleship_Project" 
  },
  {
    id: 2,
    name: "Futbol Statistics Tracker",
    description: "This project analyzes team performance in a fictional soccer league across seasons, identifying the best and worst performers and pulling statistics for individual teams",
    tools: "Ruby, Rspec",
    link: "https://github.com/JustJoeYo/futbol"
  },
  {
    id: 3,
    name: "Vocab Vault Dictionary API",
    description: "A single page application allowing users to search for a word and receive the pronunciation, part of speach, definition, and examples of the specified word",
    tools: "Javascript, HTML, CSS",
    link: "https://github.com/KatyaW-01/wordly-dictionary-SPA"
  }
]


function App() {
  const [formData, setFormData] = useState({name: "", description: "", tools: "", link: ""})
  const [newProjects, setNewProjects] = useState([])

  function handleAddProject(newProject) {
    setNewProjects(prevProjects => [...prevProjects, newProject])
  }

  const [inputValue, setInputValue] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProjects = projects.filter(project => {
    return project.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return (
    <div>
      <h1>Katya Weicht Portfolio</h1>
      <SearchProjects inputValue={inputValue} setInputValue = {setInputValue} setSearchTerm={setSearchTerm}/>

      {
        searchTerm.trim() === '' ? (
          <ProjectList projects={projects} newProjects={newProjects} />
        ) : filteredProjects.length > 0 ? (
          <ProjectList projects={filteredProjects} />
        ) : (
          <p>No projects match your search</p>
        )
      }
      
      <h3>Add New Project:</h3>
      <AddProject formData={formData} setFormData={setFormData} handleAddProject={handleAddProject}/>
    </div>
  )
}

export default App
