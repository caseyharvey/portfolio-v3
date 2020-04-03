import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/Nav/Nav'
import About from '../components/Sections/About'
import Contact from '../components/Sections/Contact'
import Footer from '../components/Sections/Footer'
import Home from '../components/Sections/Home'
import Projects from '../components/Sections/Projects'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="caseys.tech | The portfolio of Casey Harvey" />

    <Nav />
    <div>
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  </Layout>
)

export default IndexPage
