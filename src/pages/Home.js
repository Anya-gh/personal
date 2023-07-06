import React, { useState } from 'react'
import '../styles.css'
import Search from '../components/Search'
import Sidebar from '../components/Sidebar'
import { motion, useTransform } from 'framer-motion'

const profile = require('../images/Character_Jing_Yuan_Splash_Art.jpg')
const github = require('../images/github-mark-white.png')
const linkedin = require('../images/LI-In-Bug.png')
const email = require('../images/icons8-email-50.png')

export default function Home() {

  const projects = [{
    id: 0,
    title: "Fighting Game Analysis Engine",
    keywords: ["Machine Learning", "Python"],
    date: "3rd year (2021)",
    role: "",
    description: "Analysis engines are tools to get better at games; each action is given a score, which lets players identify their mistakes (if an action they made has a poor score, then it's a mistake), and shows them what they should have done instead. These are very common in chess, but I wanted to apply them to my favourite genre: fighting games. Many people like the idea of fighting games but struggle to get started due to the high barrier of entry in terms of difficulty, and I wanted to use this as a means to help those players. The game I picked to develop it for was Guilty Gear Strive. \n Fighting games don't have turns, but actions can be still be thought of as objectively `good` or `bad`, albeit with less certainty.",
    result: "I achieved a first overall for my project, and was able to complete the primary task I set out to do. There were many features I would have liked to imlpement but couldn't due to time constraints, so I'd like to revisit this project in the future; hopefully with a game with an API, as this would save a lot of the tiresome work in reading the memory.",
    tech_stack: "Python, with ML models implemented in Scikit-learn.",
    learnings: "Primarily, my time management skills developed well through this project, as well as understand how to prioritise and schedule different tasks. More generally, I learnt a lot about managing a project well, and communicating ideas effectively, both in reporting to my project supervisor and in preparing and delivering my presentation on the project."
  }, {
    id: 1,
    title: "Music humanisation",
    keywords: ["Machine Learning", "Python", "Music", "Neural Networks", "PyTorch"],
    date: "4th year (2022)",
    role: "Project manager and software engineer. I contributed to all areas of the project to some degree, but mainly focused on writing code.",
    description: "Music generation is a popular field, and much has been done to create AI music already. My group and I wanted to tackle the task of playback; computer playback still lags far behind human performance, and lacks the same degree of emotion and expression. The task was thus as follows: given a score for some piece, play the piece back as a human would, with additional, optional instructions, such as Allegro (to play lively; latin words like this can often be found as annotations on sheet music).",
    result: "The project was largely successful given our resources. Gathering data was the main issue, as we required labelled data pairs of the form [score, performance, instructions]. Data sets of performances are abundant, but those with the score are few, and those with the instructions are fewer still. We made a number of utiltiies that we hope will prove useful for any future endeavours in creating datasets, but a skilled musician is still required to actually create the data itself, which we did not have.",
    tech_stack: "Python, mainly using PyTorch for ML. For signal processing we used librosa in tandem with pretty-midi. NumPy was also used in some of the algorithms we implemented.",
    learnings: "Communication was a key factor in this project, due to the number of people. We had issues with some team members failing to contribute, which I was able to navigate well. Delegating work was another issue, as we struggled to parallelise the work flow in some cases. Better planning would have helped avoid this, but it was difficult to have all team members present in one place due to our different schedules. Instead, we could have had a dedicated member for planning, and have everyone else give feedback."
  }]

  const education = [{
    id: 0,
    title: "University of Warwick",
    qualification: "Undergraduate degree",
    date: "2019-2022",
    grades: "TBC",
    courses: ["Computer Science MEng"]
  },
  {
    id: 1,
    title: "Northampton School for Boys",
    qualification: "A-levels",
    date: "2017-2019",
    grades: "A*, A*, A*",
    courses: ["Maths, Further Maths, Computing"]
  }]

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [active, setActive] = useState(-1);

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
          <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} items={projects} setFilteredProjects={setFilteredProjects}/>
          <div className='projects-content'>
            <Sidebar filteredProjects={filteredProjects} setActive={setActive}/>
            <div className='content'>
              {active == -1 ? "Click a project to learn more!" : (() => {
                let item = projects.find(item => item.id == active)
                return <>
                  <h2>{item.title}</h2>
                  <div className='keywords'>
                    {item.keywords.map((keyword) => <h3>#{keyword}</h3>)}
                  </div>
                  <div className='project-items'>
                    {item.role != "" && <span className='project-item'><h4>Role</h4><p>{item.role}</p></span>}
                    <span className='project-item'><h4>Description</h4><p>{item.description}</p></span>
                    <span className='project-item'><h4>Result</h4><p>{item.result}</p></span>
                    <span className='project-item'><h4>Learnings</h4><p>{item.learnings}</p></span>
                    <span className='project-item'><h4>Tech stack</h4><p>{item.tech_stack}</p></span>
                  </div>
                </>
                })()}
              </div>
          </div>
        </div>
      </div>
      <div className='education'>
        <div className='inside'>
          <h1>Education</h1>
          <div className="education-content">
            <ul>
              {education.map((item) => <li>
                <span className='education-section'><h2>{item.title}</h2><h2>{item.qualification}</h2></span>
                <span className='education-section'><h3>{item.courses} - {item.grades}</h3><h3>{item.date}</h3></span>
                </li>)}
            </ul>
          </div>
        </div>
      </div>
      <div className='links'>
        <div className='inside'>
          <h1>Links</h1>
          <p>Here's where to find me!</p>
        </div>
        <div className='icons'>
          <span className="icon"><a className='icon-img' href="anya2718@icloud.com"><img style={{backgroundColor: "white"}} src={email} alt="email" /></a><a className='icon-link' href="anya2718@icloud.com">anya2718@icloud.com</a></span>
          <span className="icon"><a className='icon-img' href="https://github.com/Anya-gh"><img src={github} alt="github" /></a><a className="icon-link" href="https://github.com/Anya-gh">https://github.com/Anya-gh</a></span>
          <span className="icon"><a className='icon-img' href="https://www.linkedin.com/in/aniket-singh-806b5525a/"><img src={linkedin} alt="linkedin" /></a><a className="icon-link" href="https://www.linkedin.com/in/aniket-singh-806b5525a/">https://www.linkedin.com/in/aniket-singh-806b5525a/</a></span>
        </div>
      </div>
      <div className="footer">
        <span><a target="_blank" href="https://icons8.com/icon/132/search" rel="noreferrer">Search</a> icon by <a target="_blank" href="https://icons8.com" rel="noreferrer">Icons8</a></span>
        <span><a target="_blank" href="https://icons8.com/icon/12580/email" rel="noreferrer">Email</a> icon by <a target="_blank" href="https://icons8.com" rel="noreferrer">Icons8</a></span>
      </div>
    </>
  )
}

