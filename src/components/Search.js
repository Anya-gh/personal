import React from 'react'
import '../styles.css'
const icon = require('../images/icons8-search-50.png')

export default function Search( {searchQuery, setSearchQuery, items, setFilteredItems} ) {

  function onChangeHandler(e) {
    let input = e.target.value
    setSearchQuery(input);
    setFilteredItems(items.filter(item => item.title.toLowerCase().includes(input.toLowerCase())));
    console.log(searchQuery);
    console.log(items);
  }

  return (
    <>
    <div className='search'>
      <img src={icon} alt="search icon"></img>
      <input type='text' placeholder='Search...' onChange={(onChangeHandler)} value={searchQuery}></input>
    </div>
    </>
  )
}
