import React from 'react'
import Layout from '../components/layout'
import About from '../components/Sections/About'
import Projects from '../components/Sections/Projects'
import Contact from '../components/Sections/Contact'
import SEO from '../components/seo'
import Nav from '../components/Nav/Nav'

const IndexPage = () => (
  <Layout>
    <SEO title="caseys.tech | The portfolio of Casey Harvey" />
    <Nav />
    <div>
      <About />
      <Projects />
      <Contact />
    </div>
  </Layout>
)

export default IndexPage
