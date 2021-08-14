import Head from 'next/head'
import ContactsFooter from '../components/ContactsFooter';
import styles from '../styles/About.module.css'
import AboutDepartment from '../components/AboutDepartment';
import AboutCollege from '../components/AboutCollege';
import NavigateToHomeButton from '../components/NavigateToHomeSection';

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>IVCMR-21 | About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <NavigateToHomeButton />
        <AboutDepartment />
        <AboutCollege />
        <NavigateToHomeButton />
      </main>

      <footer className={styles.footer}>
        <ContactsFooter />
      </footer>
    </div>
  );
}