import * as React from 'react'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

export default class Navbar extends React.Component {
  constructor() {
    super()
    this.state = {
      NavbarStyle: styles.container_hidden,
      CurrentTab: "home"
    }
  }

  clickHandler = (tabID) => {
    this.setState({
      CurrentTab: tabID
    })
  }

  scrollHandler = () => {
    if (window.location.href.split('/')[3] == "") {
      if (window.pageYOffset != 0) {
        this.setState({
          NavbarStyle: styles.container,
        });
      } else {
        this.setState({
          NavbarStyle: styles.container_hidden,
        });
      }
    } else {

    }
  }

  componentDidMount() {
    addEventListener('scroll', this.scrollHandler);
    if (window.location.href.split('/')[3] == "") {
      this.setState({
        CurrentTab: "home"
      });
    } else {
      this.setState({
        CurrentTab: window.location.href.split('/')[3],
        NavbarStyle: styles.container_fixed
      });
    }
  }

  componentWillUnmount() {
    removeEventListener('scroll', this.scrollHandler);
  }

  render() {
    return (
      <div className={this.state.NavbarStyle} >
        <div className={styles.logo} id="Logo">
          <p className={styles.logoContent}>IVCMR-21</p>
        </div>
        {/* WE do this because of the navbar will be visible upon switch if we use next/link */}
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages*/}
        <a href="/">
          <div className={styles.tab} onClick={() => this.clickHandler("home")}>
            <p className={styles.name}>Home</p>
            {this.state.CurrentTab == "home" ? <hr className={styles.dot} /> : <hr className={styles.dot_hidden} />}
          </div>
        </a>
        <Link href="/about" passHref={true}>
          <div
            className={styles.tab}
            onClick={() => this.clickHandler("about")}>
            <p className={styles.name}>About</p>
            {this.state.CurrentTab == "about" ? <hr className={styles.dot} /> : <hr className={styles.dot_hidden} />}
          </div>
        </Link>

      </div>
    );
  }
}
