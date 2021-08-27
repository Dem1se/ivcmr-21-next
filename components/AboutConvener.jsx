import * as React from 'react'
import Image from 'next/image'
import styles from '../styles/AboutConvener.module.css'

export default class AboutConvener extends React.Component {
  render() {
    return (
      <div className={styles.container} id="AboutConvener">
        <h4 className={styles.heading}>CONVENER</h4>
        <hr className={styles.titleUnderline} />
        <div className={styles.imageBox}>
          <Image
            layout='intrinsic'
            objectFit='cover'
            src="/ConvenerSectionImage.jpeg"
            alt="Picture of Principal, Convener and Chief Organizing Committee"
            width="470"
            height="320"
          />
        </div>
        <p className={styles.imageCaption}>The Principal presents the Convener with a copy of the <a href="/IVCMR_21_BOOK_OF_ABSTRACTS.pdf">Book of Abstracts</a>, accompanied by the Chief Organizing Committee.</p>
        <table className={styles.table}>
          <tbody>
            <tr>
              <td className={styles.tableNameCell}>Dr. S. Nirmala</td>
              <td className={styles.tableInfoCell}>HoD / Phyics</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}