import * as React from 'react'
import Image from 'next/image'
import styles from '../styles/SpeakerCard.module.css'

export default class SpeakerCard extends React.Component {
  render() {
    return (
      <div className={styles.card}>
        <div className={styles.imageBox}>
          <Image
            className={styles.image}
            layout='intrinsic'
            // objectFit='contain'
            height='333'
            width='300'
            src={this.props.img}
            alt="Image of one of the speakers" />
        </div>
        <div className={styles.cardBase}>
          <h4 className={styles.name}>{this.props.name}</h4>
          <p className={styles.time}>{this.props.time}</p>
        </div>
      </div>
    );
  }
}