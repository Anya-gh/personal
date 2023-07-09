import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <span><a target="_blank" href="https://icons8.com/icon/132/search" rel="noreferrer">Search</a> icon by <a target="_blank" href="https://icons8.com" rel="noreferrer">Icons8</a></span>
        <span><a target="_blank" href="https://icons8.com/icon/12580/email" rel="noreferrer">Email</a> icon by <a target="_blank" href="https://icons8.com" rel="noreferrer">Icons8</a></span>
      </div>
    </>
  )
}
