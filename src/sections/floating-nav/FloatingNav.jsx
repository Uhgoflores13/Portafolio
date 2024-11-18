import './FloatingNav.css'
import Nav from './Nav'
import React from 'react'
import data from './data'
import Scrollspy from 'react-scrollspy'
function floatingNav() {
  return (
   <ul id="floating__nav">
      <Scrollspy offset={-100} className='scrollspy' items={[
        'header',
        'about',
        'services',
        'portfolio',       
        'contact'
      ]} currentClassName="active">
        {
          data.map(item => <Nav key={item.id} item={item}></Nav>)
        }
      </Scrollspy>
    </ul>
  )
}

export default floatingNav
