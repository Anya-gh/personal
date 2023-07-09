import React from 'react'

const github = require('../images/github-mark-white.png')
const linkedin = require('../images/LI-In-Bug.png')
const email = require('../images/icons8-email-50.png')

export default function Links() {
  return (
    <>
      <div className='links'>
        <div className='inside'>
          <h1>Links</h1>
          <p>Here's where to find me!</p>
        </div>
        <div className='icons'>
          <span className="icon"><a className='icon-img' href="mailto: anya2718@icloud.com"><img style={{backgroundColor: "white"}} src={email} alt="email" /></a><a className='icon-link' href="mailto: anya2718@icloud.com">anya2718@icloud.com</a></span>
          <span className="icon"><a className='icon-img' href="https://github.com/Anya-gh"><img src={github} alt="github" /></a><a className="icon-link" href="https://github.com/Anya-gh">https://github.com/Anya-gh</a></span>
          <span className="icon"><a className='icon-img' href="https://www.linkedin.com/in/aniket-singh-806b5525a/"><img src={linkedin} alt="linkedin" /></a><a className="icon-link" href="https://www.linkedin.com/in/aniket-singh-806b5525a/">https://www.linkedin.com/in/aniket-singh-806b5525a/</a></span>
        </div>
      </div>
    </>
  )
}
