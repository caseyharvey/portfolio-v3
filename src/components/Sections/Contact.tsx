import React from 'react'
import Heading from '../Heading/Heading'
import ContactForm from '../ContactForm/ContactForm'
import EmailLinks from '../EmailLinks/EmailLinks'

function Contact() {
  return (
    <section id="contact">
      <div className="section-container">
        <Heading heading="Contact me" tagLine="im@casey.work" />
        <EmailLinks />
        <ContactForm />
      </div>
    </section>
  )
}

export default Contact
