import React from 'react'

export default function ProjectsTable( {active, projects}) {
  
  return (
    <>
      <div className='content'>
        {active == -1 ? "Click a project to learn more!" : (() => {
          let item = projects.find(item => item.id == active)
          return <>
            <div className="project-top">
              <h2 className="project-title">{item.title}</h2>
              {item.role != "" && <span className='role'><h4>Role</h4><p>{item.role}</p></span>}
            </div>
            <div className='keywords'>
              {item.keywords.map((keyword) => <h3>#{keyword}</h3>)}
            </div>
            <div className='project-items'>
              <span className='project-item'><h4>Description</h4><p>{item.description}</p></span>
              <span className='project-item'><h4>Learnings</h4><p>{item.learnings}</p></span>
              <span className='project-item'><h4>Tech stack</h4><p>{item.tech_stack}</p></span>
            </div>
          </>
        })()}
      </div>
    </>
  )
}
