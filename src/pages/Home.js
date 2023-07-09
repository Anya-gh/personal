import React from 'react'
import Title from './title/Title'
import Projects from './projects/Projects'
import Education from './education/Education'
import Links from './links/Links'
import Footer from './footer/Footer'
import './styles.css'

export default function Home() {

  return (
    <>
      <Title />
      <Projects />
      <Education />
      <Links />
      <Footer />
    </>
  )
}

