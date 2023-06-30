import React, { useState } from 'react'
import '../styles.css'
import Search from '../components/Search'
import Sidebar from '../components/Sidebar'
import { motion, useTransform } from 'framer-motion'

const profile = require('../images/Character_Jing_Yuan_Splash_Art.jpg')

const updateProjects = (project) => {

}

export default function Home() {
  const [active, setActive] = useState(0)
  const [hide, setHide] = useState(false)

  return (
    <>
        <div className='title'>
          <div className='inside'>
            <h1>Anya</h1>
            <h2>Software Engineer</h2>
            {/*<ul>
              <li>- Python</li>
              <li>- React</li>
            </ul>*/}
            <p>MEng graduate from University of Warwick, looking for work. Experience in Python, React and ML frameworks,
              comfortable working with Linux and scripting with Bash.
               Feel free to get in touch!</p>
          </div>
          <img className="profile" src={profile} alt="profile"></img>
        </div>
        <div className='projects'>
          <div className='inside'>
            <h1>Projects</h1>
            <p>Some of the projects I've worked on in my free time and at University. 
              Each one shows the tech stack I used, some of the main learnings and general information about them.
            </p>
          </div>
          <div className='projects-table'>
            <Search />
            <div className='projects-content'>
              <Sidebar/>
              <p className='content'>this is the project content yes hello i am the content 
              and i'm filling space to see how much space there is, i hope this is enough, 
              well it wasn't quite enough so here we are</p>
            </div>
          </div>
        </div>
        <a target="_blank" href="https://icons8.com/icon/132/search">Search</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
    </>
  )
}

