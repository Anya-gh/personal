import React from 'react'

const education = require('../data.json')['education']

export default function Education() {
  
  return (
    <>
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
    </>
  )
}
