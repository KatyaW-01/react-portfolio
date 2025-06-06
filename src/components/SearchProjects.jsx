import React from "react"

const SearchProjects = ({inputValue, setInputValue, setSearchTerm}) => {
  function handleSubmit(event) {
    event.preventDefault()
    setSearchTerm(inputValue)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Search..." name="search" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
      <button type="submit"><i className="fas fa-search"></i></button>
    </form>
  )
}

export default SearchProjects