import React from 'react'
import Heading from '../Heading/Heading'
import ProjectList from '../Project/ProjectList'

function Projects() {
  return (
    <section id="projects">
      <div className="section-container">
        <Heading heading="Projects" tagLine="My recent work" />
        <ProjectList />
      </div>
    </section>
  )
}

export default Projects
