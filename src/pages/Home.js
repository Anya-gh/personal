import React, { useState } from 'react'
import '../styles.css'
import Search from '../components/Search'
import Sidebar from '../components/Sidebar'
import { motion, useTransform } from 'framer-motion'

const profile = require('../images/Character_Jing_Yuan_Splash_Art.jpg')

export default function Home() {

  const items = [{
    id: 0,
    title: "Fighting Game Analysis Engine",
    keywords: ["ML", "Machine Learning", "Python"],
    date: "3rd year (2021)",
    content: "Analysis engines are tools to get better at games; each action is given a score, which lets players identify their mistakes (if an action they made has a poor score, then it's a mistake), and shows them what they should have done instead. These are very common in chess, but I wanted to apply them to my favourite genre: fighting games. Many people like the idea of fighting games but struggle to get started due to the high barrier of entry in terms of difficulty, and I wanted to use this as a means to help those players. The game I picked to develop it for was Guilty Gear Strive. \n Fighting games don't have turns, but actions can be still be thought of as objectively `good` or `bad`, albeit with less certainty. The biggest challenge was reading the state of the game itself; doing so required reading the memory of the game, and finding the memory addresses it uses to store necessary information, like the position of each character at some point in time. It also gave me an opportunity to work with ML for the first time. \n Whilst I was able to complete what I set out to do, the time I had and my prior lack of experience meant I wasn't able to achieve the quality I was hoping for. Many of the problems I had stemmed from the lack of an API; I couldn't access enough replays to train the models I was using, and even after finding the right memory addresses I was still having occassional issues reading the state of the game. A lot of these issues aren't realistically solvable externally, so in the future I'd opt for a game that had an API ready to share the necessary data. Overall I learnt a lot about managing a project correctly, particularly in making most of the limited time I had, and focusing on what was necessary, even if it meant giving up interesting features. One such feature, that I hope to implement in a future attempt, was developing an overlay. I enjoyed working on it and hope to try it again for a different game, when the opportunity presents itself."
  }, {
    id: 1,
    title: "Music humanisation",
    keywords: ["ML", "Machine Learning", "Python", "Music", "Neural Network", "NN", "PyTorch"],
    date: "4th year (2022)",
    content: "And for my next trick, I achieved a feat no less spectacular. It was so spectacular, that I fail to find the words to describe it."
  }]
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState(items);
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
            <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} items={items} setFilteredItems={setFilteredItems}/>
            <div className='projects-content'>
              <Sidebar filteredItems={filteredItems} setActive={setActive}/>
              <p className='content'>{active == -1 ? "Click a project to learn more!" : items.find(item => item.id == active).content}</p>
            </div>
          </div>
        </div>
        <div className='education'>
          <div className='inside'>
            <h1>Education</h1>
            <p>Am educated yes hello</p>
            <div className="education-content">
              <ul>
                <li>Education 1</li>
                <li>Education 2</li>
                <li>Education 3</li>
                <li>Education 4</li>
                <li>Education 5</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer">
          <a target="_blank" href="https://icons8.com/icon/132/search" rel="noreferrer">Search</a> icon by <a target="_blank" href="https://icons8.com" rel="noreferrer">Icons8</a>
        </div>
    </>
  )
}

