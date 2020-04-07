import React from 'react'
import './about-me.sass'

interface Props {
  name: string
  tag: string
}

const AboutMe: React.FC<Props> = ({ name, tag, children }) => {
  return (
    <div className="about-container">
      <div className="title">
        <h3>{name}</h3>
        <span>{tag}</span>
      </div>
      {children}
    </div>
  )
}

export default AboutMe
