import * as React from 'react'
import styles from '../styles/DateCard.module.css'

export default class DateCard extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        {/* add image or something nice to the card */}
        <h3 className={styles.title}><i>{this.props.title}</i></h3>
        <p className={styles.date}>{this.props.date}</p>
      </div>
    );
  }
}