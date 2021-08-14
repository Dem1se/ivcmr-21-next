import * as React from 'react'
import Image from 'next/image'
import styles from '../styles/SplashScreen.module.css'

export default class SplashScreen extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.imageBox}>
          <Image
            className={styles.image}
            layout='fill'
            objectFit='scale-down'
            src="/eec-logo-500.png"
            alt=""
          />
        </div>
        <p className={styles.welcomeTo}>Welcome to</p>
        <p className={styles.eventName}>IVCMR - 2021</p>
        <p className={styles.fullForm}>INTERNATIONAL VIRTUAL CONFERENCE<br />ON MATERIAL RESEARCH</p>
        <p className={styles.date}>AUGUST 26<sup>th</sup>-27<sup>th</sup>, 2021</p>
      </div>
    );
  }
}