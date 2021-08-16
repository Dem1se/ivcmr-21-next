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
      CurrentTab: tabID,
      NavbarStyle: tabID == "home" ? styles.container_hidden : styles.container
    })
  }

  scrollHandler = () => {
    if (window.location.pathname == "/") {
      if (window.pageYOffset != 0) {
        this.setState({
          NavbarStyle: styles.container,
        });
      } else {
        this.setState({
          NavbarStyle: styles.container_hidden,
        });
      }
    }
  }

  componentDidMount() {
    addEventListener('scroll', this.scrollHandler);
    if (window.location.pathname == "/") {
      this.setState({
        CurrentTab: "home"
      });
    } else {
      this.setState({
        CurrentTab: window.location.pathname.split("/")[1],
        NavbarStyle: styles.container_fixed
      });
    }
  }

  componentWillUnmount() {
    removeEventListener('scroll', this.scrollHandler);
  }

  render() {
    return (
      <div className={this.state.NavbarStyle}>
        <Link href="/" passHref={true}>
          <div className={styles.logo} onClick={() => this.clickHandler("home")}>
            <p className={styles.logoContent}>IVCMR-21</p>
          </div>
        </Link>
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages*/}
        <Link href="/" passHref={true}>
          <div className={styles.tab} onClick={() => this.clickHandler("home")}>
            <p className={styles.name}>Home</p>
            {this.state.CurrentTab == "home" ? <hr className={styles.dot} /> : <hr className={styles.dot_hidden} />}
          </div>
        </Link>
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
