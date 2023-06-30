import React from 'react'
import '../styles.css'
const icon = require('../images/icons8-search-50.png')

export default function Search() {
  return (
    <>
    <div className='search'>
      <img src={icon} alt="search icon"></img>
      <h3>Search...</h3>
    </div>
    </>
  )
}
