import Head from 'next/head'
import styles from "../styles/submitAbstract.module.css"
import ContactsFooter from "../components/ContactsFooter"

export default function submitAbstract() {
  return (
    <div className={styles.container}>
      <Head>
        <title>IVCMR-21 | Submit Abstract</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.spacer} />
        <div className={styles.heading}>
          Abstract Submission
        </div>
        <div className={styles.text}>
          Authors willing to present their research work can submit
          a <b>soft copy</b> of their abstract in under <b>300 words</b>.
          Research work will be accepted based on the recommendation
          of the panel of referees. Scrutinized and accepted papers <b>will be
            published</b> in proceedings with ISBN number. The full
          paper must be submitted to the convener within the deadline.
        </div>
        <div className={styles.heading}>
          Formatting Guidelines
        </div>
        <div className={styles.text}>
          <table className={styles.table}>
            <tbody>
              <tr>
                <td className={styles.tableNameCell}>Font</td>
                <td className={styles.tableInfoCell}>Times New Roman</td>
              </tr>
              <tr>
                <td className={styles.tableNameCell}>Font Size</td>
                <td className={styles.tableInfoCell}>12pt</td>
              </tr>
              <tr>
                <td className={styles.tableNameCell}>Paper Size</td>
                <td className={styles.tableInfoCell}>A4</td>
              </tr>
              <tr>
                <td className={styles.tableNameCell}>Word Limit</td>
                <td className={styles.tableInfoCell}>300 words</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.heading}>
          Submit Through
        </div>
        <div className={styles.text}>
          <ul>
            <li className={styles.contact}>
              Sending {' '}
              <a className={styles.email} href="mailto:eec.ivcmr21@gmail.com">eec.ivcmr21@gmail.com</a>
              {' '} an email.
            </li>
          </ul>
        </div>
      </main>

      <footer>
        <ContactsFooter />
      </footer>
    </div>
  );
}