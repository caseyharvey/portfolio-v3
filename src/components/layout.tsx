import React from 'react'

import './layout.scss'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <main>{children}</main>
    </>
  )
}

export default Layout
