import React from 'react'

import './layout.sass'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <main>{children}</main>
    </>
  )
}

export default Layout
