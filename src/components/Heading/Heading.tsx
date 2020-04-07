import React from 'react'

interface Props {
  heading: string
  tagLine: string
  info?: string
}

function Heading({ heading, tagLine, info }: Props) {
  return (
    <div className="heading-container">
      <h1>{heading}</h1>
      <span>{tagLine}</span>
      <p>{info}</p>
    </div>
  )
}

export default Heading
