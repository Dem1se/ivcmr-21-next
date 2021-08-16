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
      // NavbarStyle: tabID == "home" ? styles.container_hidden : styles.container
      NavbarStyle: styles.container
    });
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
    } else {
      // just stay in fixed style
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

        <div className={styles.tab} onClick={() => this.clickHandler("home")}>
          <Link href="/" passHref={true}>
            <p className={styles.name}>Home</p>
          </Link>
          {/* {this.state.CurrentTab == "home" ? <hr className={styles.dot} /> : <hr className={styles.dot_hidden} />} */}
        </div>

        <div className={styles.tab} >
          <Link href="/about" passHref={true}>
            <p className={styles.name} onClick={() => this.clickHandler("about")}>About</p>
          </Link>
          {/* {this.state.CurrentTab == "about" ? <hr className={styles.dot} /> : <hr className={styles.dot_hidden} />} */}
          <div className={styles.dropdown_content}>
            <ul className={styles.dropdown_list}>
              <Link href="/#AboutConference" passHref={true}><li className={styles.dropdown_list_item}>About Conference</li></Link>
              <Link href="/about#AboutCollege" passHref={true}><li className={styles.dropdown_list_item}>About College</li></Link>
            </ul>
          </div>
        </div>

        <div className={styles.tab} >
          <p className={styles.name_no_hover}>Committee</p>
          {/* {this.state.CurrentTab == "about" ? <hr className={styles.dot} /> : <hr className={styles.dot_hidden} />} */}
          <div className={styles.dropdown_content}>
            <ul className={styles.dropdown_list}>
              <Link href="/about#AdvisoryCommittee" passHref={true}><li className={styles.dropdown_list_item}>Advisory Committee</li></Link>
              <Link href="/about#ChiefOrganizingCommittee" passHref={true}><li className={styles.dropdown_list_item}>Organizing Committee</li></Link>
            </ul>
          </div>
        </div>

        <div className={styles.tab}>
          <Link href="/#Downloads" passHref={true}>
            <p className={styles.name}>Downloads</p>
            {/* {this.state.CurrentTab == "about" ? <hr className={styles.dot} /> : <hr className={styles.dot_hidden} />} */}
          </Link>
        </div>

        <div className={styles.tab}>
          <p className={styles.name_no_hover}>Submissions</p>
          {/* {this.state.CurrentTab == "about" ? <hr className={styles.dot} /> : <hr className={styles.dot_hidden} />} */}
          <div className={styles.dropdown_content}>
            <ul className={styles.dropdown_list}>
              <Link href="/submitAbstract" passHref={true}><li className={styles.dropdown_list_item}>Abstract Submission</li></Link>
              <Link href="/submitPaper" passHref={true}><li className={styles.dropdown_list_item}>Full Paper Submission</li></Link>
            </ul>
          </div>
        </div>

        {/* <div className={styles.tab}>
          <Link href="/#Contact" passHref={true}>
            <p className={styles.name}>Contact Us</p>
            {this.state.CurrentTab == "about" ? <hr className={styles.dot} /> : <hr className={styles.dot_hidden} />}
          </Link>
        </div> */}

      </div>
    );
  }
}
