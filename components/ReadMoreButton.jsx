import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/ReadMoreButtons.module.css'

export default class ReadMoreButton extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <Link href={this.props.href} passHref={true}>
          <div className={styles.content}>
            <p className={styles.label}>READ MORE</p>
            <div className={styles.icon}>
              <Image
                src="/forward-icon-48.png"
                alt=""
                layout='fill'
              />
            </div>
          </div>
        </Link>
      </div>
    );
  }
}