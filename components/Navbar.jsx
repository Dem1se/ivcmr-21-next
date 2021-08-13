import * as React from 'react'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

export default class Navbar extends React.Component {
  constructor() {
    super()
    this.state = {
      NavbarStyle: styles.container_hidden,
      CurrentTab: "Home"
    }
  }
  
  eventHandler = (ev) => {
    if (window.pageYOffset > 100) {
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
    addEventListener('scroll', this.eventHandler);
  }

  componentWillUnmount() {
    removeEventListener('scroll', this.eventHandler);
  }

  render() {
    return (
      <div className={this.state.NavbarStyle} >
        <div className={styles.tab} id="Home">
          <Link href="/" passHref={true}>
            <p className={styles.name}>Home</p>
          </Link>
        </div>
        <div className={styles.tab} id="About">
          <Link href="/about" passHref={true}>
            <p className={styles.name}>About</p>
          </Link>
        </div>
      </div>
    );
  }
}
