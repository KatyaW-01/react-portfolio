import React from "react"


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
      <input type="text" name="name" value={formData.name} onChange={handleChange} required />

      <label>Description:</label>
      <input type="text" name="description" value={formData.description} onChange={handleChange} required />

      <label>Tools:</label>
      <input type="text" name="tools" value={formData.tools} onChange={handleChange} required />

      <label>Link:</label>
      <input type="link" name="link" value={formData.link} onChange={handleChange} required />

      <button type="submit">Add Project</button>
    </form>
  )
}

export default AddProject