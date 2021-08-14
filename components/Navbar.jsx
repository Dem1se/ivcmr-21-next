import * as React from 'react'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

// TODO need to make navbar show current tab in highlight
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

  scrollHandler = (ev) => {
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

  componentDidMount() {
    addEventListener('scroll', this.scrollHandler);
    if (window.location.href.split('/')[3] == "") {
      this.setState({ CurrentTab: "home" });
    } else {
      this.setState({ CurrentTab: window.location.href.split('/')[3] });

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
        <div
          className={styles.tab}
          onClick={() => this.clickHandler("home")}>
          <Link href="/" passHref={true}>
            <p className={styles.name}>Home</p>
          </Link>
          {this.state.CurrentTab == "home" ? <hr className={styles.dot} /> : <hr className={styles.dot_hidden} />}

        </div>
        <div
          className={styles.tab}
          onClick={() => this.clickHandler("about")}>
          <Link href="/about" passHref={true}>
            <p className={styles.name}>About</p>
          </Link>
          {this.state.CurrentTab == "about" ? <hr className={styles.dot} /> : <hr className={styles.dot_hidden} />}
        </div>
      </div>
    );
  }
}
