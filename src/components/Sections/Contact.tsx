import React from 'react'
import Heading from '../Heading/Heading'
import ContactForm from '../ContactForm/ContactForm'
import EmailLinks from '../Links/EmailLinks'
import Links from '../Links/Links'

function Contact() {
  return (
    <section id="contact">
      <div className="section-container">
        <Heading heading="Contact me" tagLine="im@caseys.tech" />
        <EmailLinks />
        <Links
          linkOne="https://github.com/caseyharvey"
          linkTwo="https://www.linkedin.com/in/casey-harvey-b931a71a0/"
          textOne="GitHub"
          textTwo="LinkedIn"
        />
        <ContactForm />
      </div>
    </section>
  )
}

export default Contact
