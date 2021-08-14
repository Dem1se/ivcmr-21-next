import * as React from 'react'
import styles from '../styles/AboutAdvisoryCommittee.module.css'

export default class AboutAdvisoryCommittee extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <h4 className={styles.heading}>ADVISORY COMMITTEE</h4>
        <hr className={styles.titleUnderline} />
        <table className={styles.table}>
          <tbody>
            <tr className={styles.tableRow}>
              <td className={styles.tableNameCell}>Dr. K. Sethupathi</td>
              <td className={styles.tableInfoCell}>IIT Madras, Chennai</td>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableNameCell}>Dr. Mukesh Doble</td>
              <td className={styles.tableInfoCell}>IIT Madras, Chennai</td>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableNameCell}>Dr. Abdulrahman A. Almehizia</td>
              <td className={styles.tableInfoCell}>King Saud University, Riyadh</td>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableNameCell}>Dr. Aslam Hossain</td>
              <td className={styles.tableInfoCell}>Ural Federal University, Russia</td>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableNameCell}>Dr. Yu-Jen Chou</td>
              <td className={styles.tableInfoCell}>National Taiwan University, Taiwan</td>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableNameCell}>Dr. S. Kasiviswanathan</td>
              <td className={styles.tableInfoCell}>IIT Madras, Chennai</td>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableNameCell}>Dr. Raja Rajendran</td>
              <td className={styles.tableInfoCell}>NCH University, Taiwan</td>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableNameCell}>Dr. Yadir Torres Hernandez</td>
              <td className={styles.tableInfoCell}>Universidad de Sevilla, Sevilla</td>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableNameCell}>Dr. Anandhan Srinivasan</td>
              <td className={styles.tableInfoCell}>NIT Karnataka, Surathkal</td>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableNameCell}>Dr. U. Kamachi Mudali</td>
              <td className={styles.tableInfoCell}>IGCAR, Kalpakkam</td>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableNameCell}>Dr. S. Moorthy Babu</td>
              <td className={styles.tableInfoCell}>Anna University, Chennai</td>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableNameCell}>Dr. S. Balakumar</td>
              <td className={styles.tableInfoCell}>University of Madras, Chennai</td>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableNameCell}>Dr. Binay Kumar</td>
              <td className={styles.tableInfoCell}>University of Delhi, New Delhi</td>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableNameCell}>Dr B. Venkatraman</td>
              <td className={styles.tableInfoCell}>IGCAR, Kalpakkam</td>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableNameCell}>Dr. R. Govindaraj</td>
              <td className={styles.tableInfoCell}>CEERI, Chennai</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}