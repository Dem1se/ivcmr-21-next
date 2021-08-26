import * as React from 'react'
import styles from '../styles/DownloadsSection.module.css'
import DownloadButton from './DownloadsButton';

export default class DownloadsSection extends React.Component {
  render() {
    return (
      <div className={styles.container} id="Downloads">
        <h4 className={styles.heading}>DOWNLOADS</h4>
        <hr className={styles.titleUnderline} />
        <div className={styles.bottonContainer}>
          <DownloadButton name="Download Brochure" link="/IVCMR_21_BROCHURE.pdf" />
          <DownloadButton name="Download Schedule" link="/IVCMR_21_SCHEDULE.pdf" />
          <DownloadButton name="Download Book of Abstracts" link="/IVCMR_21_BOOK_OF_ABSTRACTS.pdf" />
          {/* <DownloadButton name={<>Download<br /> Brochure</>} link="/IVCMR_21_BROCHURE.pdf" />
          <DownloadButton name={<>Download<br /> Schedule</>} link="IVCMR_21_SCHEDULE.pdf" />
          <DownloadButton name={<>Download<br />Book of Abstracts</>} link="IVCMR_21_BOOK_OF_ABSTRACTS.pdf" /> */}
        </div>
      </div>
    );
  }
}
