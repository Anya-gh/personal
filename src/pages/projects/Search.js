import React from 'react'
import styles from './Projects.module.css'
const icon = require('../../images/icons8-search-50.png')

export default function Search( {searchQuery, setSearchQuery, projects, setFilteredProjects} ) {

  function onChangeHandler(e) {
    let input = e.target.value
    setSearchQuery(input);
    setFilteredProjects(projects.filter(item => item.title.toLowerCase().includes(input.toLowerCase())));
    console.log(searchQuery);
    console.log(projects);
  }

  return (
    <>
    <div className={styles.search}>
      <img src={icon} alt="search icon"></img>
      <input type='text' placeholder='Search...' onChange={(onChangeHandler)} value={searchQuery}></input>
    </div>
    </>
  )
}
