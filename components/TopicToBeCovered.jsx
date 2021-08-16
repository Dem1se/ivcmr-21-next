import * as React from 'react'
import styles from '../styles/TopicToBeCovered.module.css'

export default class TopicToBeCovered extends React.Component {
  render() {
    return (
      <div className={styles.container} id="Topics">
        <h4 className={styles.heading}>TOPICS TO BE COVERED</h4>
        <hr className={styles.titleUnderline} />
        <div className={styles.content}>
          <ul className={styles.list}>
            <li>Nanomaterials and Technology</li>
            <li>Magnetic and Dielectric Materials</li>
            <li>Photonic materials and Fibre Optics</li>
            <li>Spectroscopy</li>
            <li>Smart materials, Sensors and Biomaterials</li>
            <li>Ultrasonics</li>
            <li>Crystal Growth, Characterisation and Crystallography</li>
            <li>Semiconductor Technology</li>
          </ul>
        </div>
      </div>
    );
  }
}