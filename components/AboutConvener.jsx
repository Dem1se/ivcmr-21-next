import * as React from 'react'
import styles from '../styles/AboutConvener.module.css'

export default class AboutConvener extends React.Component {
  render() {
    return (
      <div className={styles.container} id="AboutConvener">
        <h4 className={styles.heading}>CONVENER</h4>
        <hr className={styles.titleUnderline} />
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