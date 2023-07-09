import React from 'react'
import '../styles.css'
import Title from './Title'
import Projects from './Projects'
import Education from './Education'
import Links from './Links'
import Footer from './Footer'

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

