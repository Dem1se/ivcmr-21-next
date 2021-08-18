import Head from 'next/head'
import Link from 'next/link'
import styles from "../styles/submitPaper.module.css"
import ContactsFooter from "../components/ContactsFooter"

export default function submitAbstract() {
  return (
    <div className={styles.container}>
      <Head>
        <title>IVCMR-21 | Submit Full Paper</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.spacer} />
        <div className={styles.heading}>
          Paper Submission
        </div>
        <div className={styles.text}>
          Authors who submitted abstracts of their research work, and were 
          accepted based on the panel of referees must submit the full paper to the 
          convener within the <Link href="/#ImportantDates" passHref={true}><p  className={styles.email}>deadline</p></Link> through this page.
          Accepted papers will be published in proceedings with ISBN number
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
                <td className={styles.tableNameCell}>Paper Size</td>
                <td className={styles.tableInfoCell}>A4</td>
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
            <li className={styles.contact}>
              Filling {' '}
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a className={styles.email} href="https://forms.gle/HPsdpnASMgmN69Go6">this Google form</a>.
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