import * as React from 'react'
import styles from '../styles/ImportantDates.module.css'
import DateCard from './DateCard'

export default class ImportandDates extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <h4 className={styles.heading}>IMPORTANT DATES</h4>
        <hr className={styles.titleUnderline} />
        <div className={styles.cardContainer}>
          <DateCard title="Abstract Submission" date={<p>15<sup>th</sup> August 2021</p>} />
          <DateCard title="Communication of Acceptance" date={<p>20<sup>th</sup> August 2021</p>} />
          <DateCard title="Registration & Submission Deadline" date={<p>25<sup>th</sup> August 2021</p>} />
        </div>
      </div>
    );
  }
}