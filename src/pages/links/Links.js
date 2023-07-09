import React from 'react'
import Link from './Link'
import styles from './Links.module.css'

const github = require('../../images/github-mark-white.png')
const linkedin = require('../../images/LI-In-Bug.png')
const email = require('../../images/icons8-email-50.png')

export default function Links() {
  return (
    <>
      <div className={styles.links}>
        <div className={styles.inside}>
          <h1>Links</h1>
          <p>Here's where to find me!</p>
        </div>
        <div className={styles.icons}>
          <Link link={"mailto: anya2718@icloud.com"} icon={email} alt={"email"} text={"anya2718@icloud.com"}/>
          <Link link={"https://github.com/Anya-gh"} icon={github} alt={"github"} text={"https://github.com/Anya-gh"}/>
          <Link link={"https://www.linkedin.com/in/aniket-singh-806b5525a/"} icon={linkedin} alt={"linkedin"} text={"https://www.linkedin.com/in/aniket-singh-806b5525a/"}/>
        </div>
      </div>
    </>
  )
}
