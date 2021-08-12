import * as React from 'react'
import styles from '../styles/SplashScreen.module.css'

export default class SplashScreen extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <p className={styles.welcomeTo}>Welcome to</p>
        <p className={styles.eventName}>IVCMR - 2021</p>
        <p className={styles.fullForm}>INTERNATIONAL VIRTUAL CONFERENCE<br/>ON MATERIAL RESEARCH</p>
        <p className={styles.date}>AUGUST 26<sup>th</sup>-27<sup>th</sup>, 2021</p>
      </div>

    );
  }
}