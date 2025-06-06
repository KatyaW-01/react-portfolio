import React from "react"

const SearchProjects = () => {
  return (
    <form>
      <input type="text" placeholder="Search..." name="search"/>
      <button type="submit"><i className="fas fa-search"></i></button>
    </form>
  )
}

export default SearchProjects