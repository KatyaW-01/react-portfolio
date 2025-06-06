import React from "react"

const AddProject = () => {
  return (
    <form>
      <label>Name:</label>
      <input type="text" name="name" required />

      <label>Description:</label>
      <input type="text" name="description" required />

      <label>Tools:</label>
      <input type="text" name="tools" required />

      <label>Link:</label>
      <input type="link" name="link" required />

      <button type="submit">Add Project</button>
    </form>
  )
}

export default AddProject