import React from 'react'
import ContactCard from '../components/ContactCard'
import styles from "./contact.module.css"
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 style={{ "textAlign": "center", "color": "red", "marginTop": "20px" }}>Contact Us</h1>
      <ContactCard />
      <section className={styles.contact_section}>
        <h2>we would love to here <span> from you </span></h2>
        <ContactForm />
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14254.1718085137!2d85.92057638847511!3d26.7270444996238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1682334598048!5m2!1sen!2snp" width={600} height={450} style={{ border: 0, marginTop: 70 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className={styles.mapping}></iframe>
      </section>
    </div>
  )
}

export default Contact