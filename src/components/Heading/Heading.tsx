import React from 'react'
import './heading.sass'

interface Props {
  heading: string
  tagLine: string
}

function Heading({ heading, tagLine }: Props) {
  return (
    <div className="heading-container">
      <h1>{heading}</h1>
      <span>{tagLine}</span>
    </div>
  )
}

export default Heading
