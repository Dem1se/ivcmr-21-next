import Head from 'next/head'
import styles from "../styles/submitPaper.module.css"
import ContactsFooter from "../components/ContactsFooter"

export default function submitAbstract() {
  return (
    <div className={styles.container}>
      <Head>
        <title>IVCMR-21 | Submit Abstract</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.spacer} />
      </main>

      <footer>
        <ContactsFooter />
      </footer>
    </div>
  );
}