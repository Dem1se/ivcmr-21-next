import * as React from 'react'
import Image from 'next/image'
import styles from '../styles/DownloadsButton.module.css'
import Link from 'next/link';

export default class DownloadButton extends React.Component {
  

  render() {
    return (
      //  onClick={} passHref={true}
      <a href={this.props.link} download>
      <div className={styles.container}> 
        <div className={styles.icon}>
          <Image
            layout='fixed'
            src='/dl-icon.png'
            alt=""
            height='24'
            width='24'
          />
        </div>
        <p className={styles.name}>{this.props.name}</p>
      </div>
      </a>
    );
  }
}
