import React from 'react'
import styles from './Links.module.css'

export default function Link( {link, icon, alt, text} ) {
  return (
    <>
      <span className={styles.icon}><a className={styles.icon_img} href={link}><img src={icon} alt={alt} /></a><a className={styles.icon_link} href={link}>{text}</a></span>
    </>
  )
}
