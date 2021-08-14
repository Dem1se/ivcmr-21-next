import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/NavigateToHomeSection.module.css'

export default class NavigateToHomeButton extends React.Component {


  render() {
    return (
      <div className={styles.backNav}>
        <Link href="/" passHref={true}>
          <div className={styles.container}>
            <div className={styles.icon}>
              <Image
                layout='fixed'
                src='/back-icon.png'
                alt=""
                height='24'
                width='24'
              />
            </div>
            <p className={styles.name}>Back to Home</p>
          </div>
        </Link>
      </div>
    );
  }
}
