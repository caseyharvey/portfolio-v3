import React from 'react'
import Heading from '../Heading/Heading'

function Home() {
  return (
    <section id="home">
      <div className="section-container">
        <Heading heading="Hi there," tagLine="My name's Casey" />
        <span>Welcome to my portfolio page</span>
      </div>
    </section>
  )
}

export default Home
