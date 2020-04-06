import React from 'react'
import Nav from '../components/Nav/Nav'
import './layout.sass'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <main>
        <Nav />
        {children}
      </main>
    </>
  )
}

export default Layout
