import Head from 'next/head'
import styles from '../styles/About.module.css'
import ContactsFooter from '../components/ContactsFooter';
import AboutDepartment from '../components/AboutDepartment';
import AboutCollege from '../components/AboutCollege';
import AboutAdvisoryCommittee from '../components/AboutAdvisoryCommittee';

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>IVCMR-21 | About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.spacer} />
        <AboutDepartment />
        <AboutCollege />
        <AboutAdvisoryCommittee />
      </main>

      <footer className={styles.footer}>
        <ContactsFooter />
      </footer>
    </div>
  );
}