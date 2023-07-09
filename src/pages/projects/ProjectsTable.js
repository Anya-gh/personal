import React from 'react'
import styles from './Projects.module.css'

export default function ProjectsTable( {active, projects}) {
  
  return (
    <>
      <div className={styles.content}>
        {active == -1 ? "Click a project to learn more!" : (() => {
          let item = projects.find(item => item.id == active)
          return <>
            <div className={styles.project_top}>
              <h2 className={styles.project_title}>{item.title}</h2>
              {item.role != "" && <span className={styles.role}><h4>Role</h4><p>{item.role}</p></span>}
            </div>
            <div className={styles.keywords}>
              {item.keywords.map((keyword) => <h3>#{keyword}</h3>)}
            </div>
            <div className={styles.project_items}>
              <span className={styles.project_item}><h4>Description</h4><p>{item.description}</p></span>
              <span className={styles.project_item}><h4>Learnings</h4><p>{item.learnings}</p></span>
              <span className={styles.project_item}><h4>Tech stack</h4><p>{item.tech_stack}</p></span>
            </div>
          </>
        })()}
      </div>
    </>
  )
}
