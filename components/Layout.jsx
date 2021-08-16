import styles from "../styles/Layout.module.css"
import Navbar from "./Navbar"
import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      {children}
    </div>
  );
}