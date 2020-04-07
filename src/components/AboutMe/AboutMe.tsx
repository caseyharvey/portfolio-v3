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
        <h2>{name}</h2>
        <span>{tag}</span>
      </div>
      {children}
    </div>
  )
}

export default AboutMe
