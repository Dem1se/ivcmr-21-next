import Head from 'next/head'
import styles from '../styles/Home.module.css'
import AboutConference from '../components/AboutConference'
import ImportandDates from '../components/ImportantDates'
import SplashScreen from '../components/SplashScreen'
import KeynoteSpeakers from '../components/KeynoteSpeakers'
import TopicToBeCovered from '../components/TopicToBeCovered'
import DownloadsSection from '../components/DownloadsSection'
import ContactsFooter from '../components/ContactsFooter'

/*
 *  Note: Need to statically bundle the fonts with the site
 *  Layout:
 *    🟨 Welcome splash ->        submit abstract, register now buttons
 *    🟨 About the conference ->  read more button
 *    🟨 Keynote speakers ->      clickable profile for more info on person/talk
 *    ✅ important dates
 *    ✅ topics to be covered
 *    ✅ downloads
 *    ✅ contacts
 * about page:
 *    ✅ about the college
 *    ✅ about the department
 *    ✅ chief patrons
 *    ✅ patrons
 *    ✅ advisory committee
 *    ✅ organizing committe
 */
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>IVCMR-21</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <SplashScreen />
        <AboutConference />
        <KeynoteSpeakers />
        <ImportandDates />
        <TopicToBeCovered />
        <DownloadsSection />
      </main>

      <footer className={styles.footer}>
        <ContactsFooter />
      </footer>
    </div>
  )
}
