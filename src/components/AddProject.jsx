import React from "react"
import styles from '../styles/AddProject.module.css'

const AddProject = ({formData,setFormData,handleAddProject}) => {
  function handleChange(event) {
    const {name,value} = event.target

    setFormData(prevFormData => ({
      ...prevFormData, [name]:value
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    handleAddProject(formData)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input className={styles.projectInput} type="text" name="name" value={formData.name} onChange={handleChange} required />

      <label>Description:</label>
      <input className={styles.projectInput} type="text" name="description" value={formData.description} onChange={handleChange} required />

      <label>Tools:</label>
      <input className={styles.projectInput} type="text" name="tools" value={formData.tools} onChange={handleChange} required />

      <label>Link:</label>
      <input className={styles.projectInput} type="link" name="link" value={formData.link} onChange={handleChange} required />

      <button className={styles.projectButton} type="submit">Add Project</button>
    </form>
  )
}

export default AddProject