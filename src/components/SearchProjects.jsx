import React from "react"
import styles from '../styles/SearchProjects.module.css'

const SearchProjects = ({inputValue, setInputValue, setSearchTerm}) => {
  function handleSubmit(event) {
    event.preventDefault()
    setSearchTerm(inputValue)
  }

  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <input className={styles.searchInput} type="text" placeholder="Search..." name="search" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
      <button className={styles.searchButton} type="submit"><i className="fas fa-search"></i></button>
    </form>
  )
}

export default SearchProjects