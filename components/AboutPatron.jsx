import * as React from 'react'
import styles from '../styles/AboutPatron.module.css'

export default class AboutPatron extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <h4 className={styles.heading}>PATRONS</h4>
        <hr className={styles.titleUnderline} />
        <table className={styles.table}>
          <tbody>
            <tr>
              <td className={styles.tableNameCell}>Dr. R. S. Kumar</td>
              <td className={styles.tableInfoCell}>Principal</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}