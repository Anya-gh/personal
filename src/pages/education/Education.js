import React from 'react'
import styles from './Education.module.css'

const education = require('../../data.json')['education']

export default function Education() {
  
  return (
    <>
       <div className={styles.education}>
        <div className={styles.inside}>
          <h1>Education</h1>
          <div className={styles.education_content}>
            <ul>
              {education.map((item) => <li>
                <span className={styles.education_section}><h2>{item.title}</h2><h2>{item.qualification}</h2></span>
                <span className={styles.education_section}><h3>{item.courses} - {item.grades}</h3><h3>{item.date}</h3></span>
                </li>)}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
