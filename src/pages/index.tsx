import React from 'react'
import Layout from '../components/layout'
import About from '../components/Sections/About'
import Contact from '../components/Sections/Contact'
import Home from '../components/Sections/Home'
import Projects from '../components/Sections/Projects'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="caseys.tech | The portfolio of Casey Harvey" />
    <Home />
    <About />
    <Projects />
    <Contact />
  </Layout>
)

export default IndexPage
