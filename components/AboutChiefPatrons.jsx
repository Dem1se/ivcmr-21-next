import * as React from 'react'
import styles from '../styles/AboutChiefPatrons.module.css'

export default class AboutChiefPatrons extends React.Component {
  render() {
    return (
      <div className={styles.container} id="AboutChiefPatrons">
        <h4 className={styles.heading}>CHIEF PATRONS</h4>
        <hr className={styles.titleUnderline} />
        <table className={styles.table}>
          <tbody>
            <tr>
              <td className={styles.tableNameCell}>Dr. T. R. Paarivendhar</td>
              <td className={styles.tableInfoCell}>Founder Chairman</td>
            </tr>
            <tr>
              <td className={styles.tableNameCell}>Dr. R. Shivakumar</td>
              <td className={styles.tableInfoCell}>Chairman, SRM Group of Institutions,<br/> Ramapuram & Trichy Campus</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}