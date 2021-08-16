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
          a soft copy of their abstract in under <b>300 words</b>. <br />

          Research work will be accepted based on the recommendation
          of the panel of referees. Scrutinized and accepted papers will
          be published in proceedings with ISBN number. The full
          paper must be submitted to the convener within the deadline.
        </div>
        <div className={styles.heading}>
          Formatting Guidelines
        </div>
        <div className={styles.text}>
          <ul>
            <li>Times New Roman</li>
            <li>12 pt font size</li>
            <li>A4 paper</li>
            <li>Not more than 300 words</li>
          </ul>
        </div>
        <div className={styles.heading}>
          Submit Through
        </div>
        <div className={styles.text}>
          <ul>
            <li>
              Sending {' '}
              <a className={styles.email} href="mailto:eec.ivcmr21@gmail.com">eec.ivcmr21@gmail.com</a>
              {' '} an email.
            </li>
            <li>
              Filling {' '}
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a className={styles.email} href="/">this Google form</a>.
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