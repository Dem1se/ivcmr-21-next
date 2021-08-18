import Head from 'next/head'
import styles from '../styles/About.module.css'
import ContactsFooter from '../components/ContactsFooter';
import AboutDepartment from '../components/AboutDepartment';
import AboutCollege from '../components/AboutCollege';
import AboutChiefPatrons from '../components/AboutChiefPatrons';
import AboutPatron from '../components/AboutPatron';
import AboutAdvisoryCommittee from '../components/AboutAdvisoryCommittee';
import AboutConvener from '../components/AboutConvener';
import ChiefOrganizingCommittee from '../components/AboutChiefOrganizingCommittee';
import OrganizingCommitte from '../components/OrganizingCommitte';

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>IVCMR-21 | About</title>
        <meta name="description" content="Learn more about institute and people behind IVCMR-21" />
      </Head>

      <main className={styles.main}>
        <div className={styles.spacer} />
        <AboutDepartment />
        <AboutCollege />
        <AboutChiefPatrons />
        <AboutPatron />
        <AboutAdvisoryCommittee />
        <AboutConvener />
        <ChiefOrganizingCommittee />
        <OrganizingCommitte />
      </main>

      <footer>
        <ContactsFooter />
      </footer>

    </div>
  );
}