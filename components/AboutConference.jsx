import * as React from 'react'
import styles from '../styles/AboutConference.module.css'
import ReadMoreButton from './ReadMoreButton'

export default class AboutConference extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <h4 className={styles.heading}>ABOUT CONFERENCE</h4>
        <hr className={styles.titleUnderline} />
        <p className={styles.content}>
          IVCMR-21 is aimed at bringing together the scientists and experts to provide a common platform for sharing their scientific results, thoughts and ideas. The conference will cover all aspects relating to new materials research and nano technology. It will give the participants an exposure to some of the latest developments in the field of material science; promote healthy competition among the young researchers to bring out their skills and competences and to translate their research findings to plan for industrial growth and nation building.
        </p>
        <div className={styles.readMore}>
          <ReadMoreButton />
        </div>
      </div>
    )
  }
}