import React from 'react'
import styles from './Projects.module.css'

export default function Sidebar( { filteredProjects, setActive } ) {

  const onClickHandler = (e) => {
    setActive(e.target.id);
  }

  return (
    <>
      <div className={styles.sidebar}>
        <ul>
          {filteredProjects.map((item) => (
          <li key={item.id}><button id={item.id} onClick={onClickHandler}>{item.title}</button></li>
          ))}
        </ul>
      </div>
    </>
  )
}
