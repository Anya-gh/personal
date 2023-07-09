import React from 'react'
const profile = require('../images/squirtle_shades.jpg')

export default function Title() {
  return (
    <>
      <div className='title'>
          <div className='inside'>
            <h1>Anya</h1>
            <h2>Software Engineer</h2>
            <p>MEng graduate from University of Warwick, looking for work. Experience in Python, React and ML frameworks,
              comfortable working with Linux and scripting with Bash.
                Feel free to get in touch!</p>
          </div>
          <img className="profile" src={profile} alt="profile"></img>
        </div>
    </>
  )
}
