import React from 'react'
import Scrollspy from 'react-scrollspy'
import UpArrow from '../../images/up-arrow.svg'
import DownArrow from '../../images/down-arrow.svg'
import ThemeToggle from '../ThemeToggle/ThemeToggle'

import './nav.scss'

function Nav() {
  return (
    <nav>
      <ThemeToggle />
      <Scrollspy
        items={['home', 'about', 'projects', 'contact', 'footer']}
        currentClassName="is-current"
      >
        <li className="arrows">
          <a href="#home">
            <UpArrow />
          </a>
        </li>
        <li>
          <a href="#about">about</a>
        </li>
        <li>
          <a href="#projects">projects</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
        <li className="arrows">
          <a href="#footer">
            <DownArrow />
          </a>
        </li>
      </Scrollspy>
    </nav>
  )
}

export default Nav
