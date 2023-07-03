import React from 'react'
import '../styles.css'

export default function Sidebar( { filteredItems, setActive } ) {

  const onClickHandler = (e) => {
    setActive(e.target.id);
  }

  return (
    <>
      <div className='sidebar'>
        <ul>
          {filteredItems.map((item) => (
          <li key={item.id}><button id={item.id} onClick={onClickHandler}>{item.title}</button></li>
          ))}
        </ul>
      </div>
    </>
  )
}
