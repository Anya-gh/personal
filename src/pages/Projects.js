import React, {useState} from 'react'
import Search from '../components/Search'
import Sidebar from '../components/Sidebar'
import ProjectsTable from '../components/ProjectsTable'

const projects = require('../data.json')['projects']

export default function Projects() {

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [active, setActive] = useState(-1);

  return (
    <>
    <div className='projects'>
      <div className='inside'>
        <h1>Projects</h1>
        <p>Some of the projects I've worked on in my free time and at University. 
          Each one shows the tech stack I used, some of the main learnings and general information about them.
        </p>
      </div>
      <div className='projects-table'>
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} projects={projects} setFilteredProjects={setFilteredProjects}/>
        <div className='projects-content'>
          <Sidebar filteredProjects={filteredProjects} setActive={setActive}/>
          <ProjectsTable active={active} projects={projects}/>
        </div>
      </div>
    </div>
    </>
  )
}
