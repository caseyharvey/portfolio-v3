import React from 'react'
import Scrollspy from 'react-scrollspy'

import './nav.scss'

function Nav() {
  return (
    <nav>
      <Scrollspy
        items={['about', 'projects', 'contact']}
        currentClassName="is-current"
      >
        <li>
          <a href="#about">about</a>
        </li>
        <li>
          <a href="#projects">projects</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
      </Scrollspy>
    </nav>
  )
}

export default Nav
