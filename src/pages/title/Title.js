import React from 'react'
import styles from './/Title.module.css'
const profile = require('../../images/squirtle_shades.jpg')

export default function Title() {
  return (
    <>
      <div className={styles.title}>
          <div className={styles.inside}>
            <h1>Anya</h1>
            <h2>Software Engineer</h2>
            <p>MEng graduate from University of Warwick, looking for work. Experience in Python, React and ML frameworks,
              comfortable working with Linux and scripting with Bash.
                Feel free to get in touch!</p>
          </div>
          <img className={styles.profile} src={profile} alt="profile"></img>
        </div>
    </>
  )
}
