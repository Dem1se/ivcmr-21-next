import * as React from 'react'
import Image from 'next/image'
import styles from '../styles/ContactsFooter.module.css'

export default class ContactsFooter extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.headingContainer}>
          <h3 className={styles.heading1}>Address For Correspondence</h3>
          <h3 className={styles.heading2}>Contact Us</h3>
        </div>
        <div className={styles.content}>
          <div className={styles.address}>
            <b>Easwari Engineering College</b><br />
            Bharathi Salai, Ramapuram,<br />
            Chennai - 600 089,<br />
            Tamil Nadu, IN.
          </div>
          <div className={styles.contactInfo}>
            <div className={styles.contactRow}>
              <p className={styles.contactDetail}>044-4392 3028 </p>
              <Image
                layout='fixed'
                src='/icons/telephone.png'
                alt="Telephone Icon"
                height='24'
                width='24'
              />
            </div>
            <div className={styles.contactRow}>
              <p className={styles.contactDetail}>+91 99424 29595 | +91 99405 75832 </p>
              <Image
                layout='fixed'
                src='/icons/mobile.png'
                alt="Mobilephone Icon"
                height='24'
                width='24'
              />
            </div>

            <div className={styles.contactRow}>
              <p className={styles.contactDetail}>91-44-2249 1130 </p>
              <Image
                layout='fixed'
                src='/icons/fax.png'
                alt="Fax Icon"
                height='24'
                width='24'
              />
            </div>

            <div className={styles.contactRow}>
              <p className={styles.contactDetail}>
                <a className={styles.email} href="mailto:eec.ivcmr21@gmail.com">
                  eec.ivcmr21@gmail.com
                </a>
              </p >
              <Image
                layout='fixed'
                src='/icons/email.png'
                alt="Email Icon"
                height='24'
                width='24'
              />
            </div>
          </div >
        </div>
      </div >
    );
  }
}
