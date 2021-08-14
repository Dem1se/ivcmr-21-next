import * as React from 'react'
import Image from 'next/image'
import styles from '../styles/AboutDepartment.module.css'
export default class AboutDepartment extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <h4 className={styles.heading}>ABOUT THE DEPARTMENT</h4>
        <hr className={styles.titleUnderline} />
        <div className={styles.contentBox}>
          <div className={styles.imageBox}>
            <Image
              className={styles.image}
              layout='fill'
              objectFit='scale-down'
              src="/PHY_DEPT.jpg"
              alt="The physics department faculty"
              // width='426.72'
              // height='360' 
              />
          </div>
          <p className={styles.text}>
            <b>The Department of Physics</b> was started in December 1996 catering to
            the needs of Engineering Departments and has grown in tune with the
            demands of the Institution and improved its strength.
            Department consists of 7 experienced faculty members with 6 Doctorates.
            The faculty members have published more than 100 papers in reputed
            National International journals and presented a number of papers
            in National / International Conferences. The Department has established
            a research laboratory for Crystal growth and has been recognized as
            the nodal centre by Anna University, Chennai for doing Research.
          </p>
        </div >
      </div >
    );
  }
}