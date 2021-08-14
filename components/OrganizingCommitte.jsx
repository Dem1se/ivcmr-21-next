import * as React from 'react'
import styles from '../styles/OrganizingCommitte.module.css'

export default class OrganizingCommitte extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <h4 className={styles.heading}>ORGANIZING COMMITTEE</h4>
        <hr className={styles.titleUnderline} />
        <table className={styles.table}>
          <tbody>
            <tr>
              <td className={styles.tableNameCell}>Dr. G. Rajkumar</td>
              <td className={styles.tableInfoCell}>Professor</td>
            </tr>
            <tr>
              <td className={styles.tableNameCell}>Dr. R. Sivakumar</td>
              <td className={styles.tableInfoCell}>Associate Professor</td>
            </tr>
            <tr>
              <td className={styles.tableNameCell}>Dr. K. Prathebha</td>
              <td className={styles.tableInfoCell}>Assistant Professor</td>
            </tr>
            <tr>
              <td className={styles.tableNameCell}>Dr. R. Sharan</td>
              <td className={styles.tableInfoCell}>Assistant Professor</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}