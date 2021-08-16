import Head from 'next/head'
import styles from '../styles/Home.module.css'
import SplashScreen from '../components/SplashScreen'
import AboutConference from '../components/AboutConference'
import KeynoteSpeakers from '../components/KeynoteSpeakers'
import ImportandDates from '../components/ImportantDates'
import TopicToBeCovered from '../components/TopicToBeCovered'
import DownloadsSection from '../components/DownloadsSection'
import ContactsFooter from '../components/ContactsFooter'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>IVCMR-21</title>
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
