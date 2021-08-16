import Head from 'next/head'
import styles from '../styles/About.module.css'
import ContactsFooter from '../components/ContactsFooter';
import AboutDepartment from '../components/AboutDepartment';
import AboutCollege from '../components/AboutCollege';
import AboutChiefPatrons from '../components/AboutChiefPatrons';
import AboutPatron from '../components/AboutPatron';
import AboutAdvisoryCommittee from '../components/AboutAdvisoryCommittee';
import OrganizingCommitte from '../components/OrganizingCommitte';

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>IVCMR-21 | About</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.spacer} />
        <AboutDepartment />
        <AboutCollege />
        <AboutChiefPatrons />
        <AboutPatron />
        <AboutAdvisoryCommittee />
        <OrganizingCommitte />
      </main>

      <footer className={styles.footer}>
        <ContactsFooter />
      </footer>
    </div>
  );
}