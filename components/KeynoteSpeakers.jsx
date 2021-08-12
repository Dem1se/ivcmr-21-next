import * as React from 'react'
import styles from '../styles/KeynoteSpeakers.module.css'
import SpeakerCard from './SpeakerCard'

export default class KeynoteSpeakers extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <h4 className={styles.heading}>KEYNOTE SPEAKERS</h4>
        <hr className={styles.titleUnderline} />
        <div className={styles.cardContainer}>
          <SpeakerCard name="Prof. Sulekha Chattopadhay" time="10:00 AM - 11:00 AM" img="/1.png" />
          <SpeakerCard name="Prof. G.Valtheeswaran" time="11:20 AM - 12:20 PM" img="/2.png" />
          <SpeakerCard name="Dr. Mohammed foazem Ansari" time="1:30 PM - 2:30 PM" img="/3.png" />
          <SpeakerCard name="Prof. Christopher Shuck" time="4:30 PM - 5:00 PM" img="/4.png" />

          <SpeakerCard name="Prof. Goutam Chattopadhyay " time="9:00 AM - 10:00 AM" img="/5.png" />
          <SpeakerCard name="Prof. Bidushi Bhahacharya" time="10:00 AM - 11:00 AM" img="/6.png" />
          <SpeakerCard name="Raghavan Chinnambedu Murugesan" time="11:20 AM - 12:20 PM" img="/7.png" />
          <SpeakerCard name="Dr. N.Vijayan" time="1:30 PM - 2:30 PM" img="/8.png" />
        </div>
      </div>
    );
  }
}