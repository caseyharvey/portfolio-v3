import React from 'react'
import Heading from '../Heading/Heading'

function Home() {
  return (
    <section id="home">
      <div className="section-container">
        <Heading
          heading="Hi there,"
          tagLine="My name's Casey"
          info="Welcome to my portfolio page."
        />
      </div>
    </section>
  )
}

export default Home
