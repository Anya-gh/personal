import React, {useState} from 'react'
import Search from './Search'
import Sidebar from './Sidebar'
import ProjectsTable from './ProjectsTable'
import styles from './Projects.module.css'

const projects = require('../../data.json')['projects']

export default function Projects() {

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [active, setActive] = useState(-1);

  return (
    <>
    <div className={styles.projects}>
      <div className={styles.inside}>
        <h1>Projects</h1>
        <p>Some of the projects I've worked on in my free time and at University. 
          Each one shows the tech stack I used, some of the main learnings and general information about them.
        </p>
      </div>
      <div className={styles.projects_table}>
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} projects={projects} setFilteredProjects={setFilteredProjects}/>
        <div className={styles.projects_content}>
          <Sidebar filteredProjects={filteredProjects} setActive={setActive}/>
          <ProjectsTable active={active} projects={projects}/>
        </div>
      </div>
    </div>
    </>
  )
}
