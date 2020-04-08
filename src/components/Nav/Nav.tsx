import React from 'react'
import ThemeToggle from '../ThemeToggle/ThemeToggle'

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <ThemeToggle />
        </li>
        <li>
          <a href="#home">{'>'}</a>
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
          <a href="https://blog.caseys.tech">blog</a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
