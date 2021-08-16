import * as React from 'react'
import styles from '../styles/AboutChiefOrganizingCommittee.module.css'

export default class ChiefOrganizingCommittee extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <h4 className={styles.heading}>CHIEF ORGANIZING COMMITTEE</h4>
        <hr className={styles.titleUnderline} />
        <table className={styles.table}>
          <tbody>
            <tr>
              <td className={styles.tableNameCell}>Mrs. C. Manjula</td>
              <td className={styles.tableInfoCell}>Assistant Professor</td>
            </tr>
            <tr>
              <td className={styles.tableNameCell}>Dr. K. Raju</td>
              <td className={styles.tableInfoCell}>Associate Professor</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}