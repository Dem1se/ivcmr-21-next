import * as React from 'react'
import styles from '../styles/ImportantDates.module.css'
import DateCard from './DateCard'

export default class ImportandDates extends React.Component {
  render() {
    return (
      <div className={styles.container} id="ImportantDates">
        <h4 className={styles.heading}>IMPORTANT DATES</h4>
        <hr className={styles.titleUnderline} />
        <div className={styles.cardContainer}>
          <DateCard title="Abstract Submission" date={<>15<sup>th</sup> August 2021</>} />
          <DateCard title="Communication of Acceptance" date={<>20<sup>th</sup> August 2021</>} />
          <DateCard title="Registration & Submission Deadline" date={<>25<sup>th</sup> August 2021</>} />
        </div>
      </div>
    );
  }
}