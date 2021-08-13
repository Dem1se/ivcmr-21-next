/* eslint-disable react/no-unescaped-entities */
import * as React from 'react'
import Image from 'next/image'
import styles from '../styles/AboutCollege.module.css'

export default class AboutCollege extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <h4 className={styles.heading}>ABOUT THE INSTITUE</h4>
        <hr className={styles.titleUnderline} />
        <div className={styles.contentBox}>
          <div className={styles.text}>
            <p className={styles.content}>
              Autonomus From 2019, a unit of SRM Group of Educational Institutions
              for higher learning is functioning under "Valliammai Society".
              The society was founded in the year 1975, for promoting the cause of
              Quality Education by Dr. T. R. Paarivendhar, an Academician and Educationist.
              EEC was instituted in the academic year 1996-1997, with the Approval of AICTE,
              New Delhi. The college is affiliated to Anna University, Chennai, since 2002.
              The programes have been accreditated by NAAC / NBA and are periodically reviewed.
            </p>

            <p className={styles.content}>
              The College offers eleven Under-Graduate and six Post-Graduate Programmes
              covering Engineering & Technology, and Management. It has a strong
              Industry-Interaction with reputed National and International organizations.
              The College has obtained 150 9001:2015 Certification from TUV South Asia.
            </p>
          </div>
          <div className={styles.imageBox}>
            <Image
              className={styles.image}
              layout='fill'
              objectFit='scale-down'
              src="/eec-logo.png"
              alt="Image of the all the phyics department faculty"
              width='426.72'
              height='360' />
          </div>
        </div >
      </div >
    );
  }
}