import React from 'react'
import Scrollspy from 'react-scrollspy'
import ThemeToggle from '../ThemeToggle/ThemeToggle'

function Nav() {
  return (
    <nav>
      <ThemeToggle />
      <div className="nav-container">
        <Scrollspy
          items={['home', 'about', 'projects', 'contact', 'footer']}
          currentClassName="is-current"
        >
          <li>
            <a href="#home">{'>>>'}</a>
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
          <li>
            <a href="#footer">{'<<<'}</a>
          </li>
        </Scrollspy>
      </div>
    </nav>
  )
}

export default Nav
