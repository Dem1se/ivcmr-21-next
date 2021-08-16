import * as React from 'react'
import styles from '../styles/KeynoteSpeakers.module.css'
import SpeakerCard from './SpeakerCard'

export default class KeynoteSpeakers extends React.Component {
  render() {
    return (
      <div className={styles.container} id="KeynoteSpeakers">
        <h4 className={styles.heading}>KEYNOTE SPEAKERS</h4>
        <hr className={styles.titleUnderline} />
        <div className={styles.cardContainer}>
          <SpeakerCard
            name="Prof. Christopher Shuck"
            time="4:30 PM - 5:00 PM"
            img="/4.png"
            fullName="Prof. Christopher Shuck, Ph.D"
            org="Department of Materials Science & Engineering, A.J. Drexel Nanomaterials Institute (DNI), US"
            topic="M Xenes: 2D Transition Metal Carbides and Nitrides"
            timing="Session 5 | 4:30 PM - 5:30 PM"
            day={<>August 26<sup>th</sup></>}
          />
          <SpeakerCard
            name="Prof. Goutam Chattopadhyay "
            time="9:00 AM - 10:00 AM"
            img="/5.png"
            fullName="Prof.  Goutam  Chattopadhyay"
            org="Senior Scientist, NASA – Jet Propulsion Lab, Pasadena, California, US."
            topic="Mars Landing and Related Technical Challenges."
            timing="Session 6 | 9:00 AM - 10:00 AM"
            day={<>August 27<sup>th</sup></>}
          />
          <SpeakerCard
            name="Prof. Bidushi Bhahacharya"
            time="10:00 AM - 11:00 AM"
            img="/6.png"
            fullName="Prof. Bidushi Bhattacharya, Ph.D"
            org="TEDx Speaker, Thought Leader, Ex-NASA Astropreneur, University of California, Los Angeles"
            topic="An Overview of Materials and Manufacturing in the Commercial Space Sector"
            timing="Session 7 | 10:00 AM - 11:00 AM"
            day={<>August 27<sup>th</sup></>}

          />
          <SpeakerCard
            name="Prof. G.Vaitheeswaran"
            time="11:20 AM - 12:20 PM"
            img="/2.png"
            fullName="Prof. G.Vaitheeswaran"
            org="Advanced Centre of Research in High Energy Materials, University of Hyderabad"
            topic="Computational study of energetic solids under hydrostatic pressure"
            timing="Session 2 | 11:20 AM – 12:20 PM"
            day={<>August 26<sup>th</sup></>}
          />
          <SpeakerCard
            name="Dr. Sulekha Chattopadhyay"
            time="10:00 AM - 11:00 AM"
            img="/1.png"
            fullName="Dr. Sulekha Chattopadhyay , Ph.D"
            org="California Public Utilities Commission"
            topic="Environmental Policies and Emerging Technologies"
            timing="Session 1 | 10:00 AM - 11:00 AM"
            day={<>August 26<sup>th</sup></>}
          />
          <SpeakerCard
            name="Dr. Mohd Taazem Ansari"
            time="1:30 PM - 2:30 PM"
            img="/3.png"
            fullName="Dr. Mohd Taazem Ansari"
            org="Department of Applied Sciences & Humanities, Jamia Millia Islamia, New Delhi"
            topic="Modelling of miniaturized functional devices employing quantum mechanical methods for applications in nano-electronics"
            timing="Session 3 | 1:30 PM - 2:30 PM"
            day={<>August 26<sup>th</sup></>}
          />
          <SpeakerCard
            name="Raghavan Chinnambedu Murugesan"
            time="11:20 AM - 12:20 PM"
            img="/7.png"
            fullName="Raghavan Chinnambedu Murugesan"
            org="ERDF Research Associate, Enabling Technologies & Innovation Competences Challenge (ETICC), Aston Institute of Photonic Technologies"
            topic="2D Materials for Optoelectronic Applications"
            timing="Session 8 | 11:20 AM – 12:20 PM"
            day={<>August 27<sup>th</sup></>}
          />
          <SpeakerCard
            name="Dr. N. Vijayan"
            time="1:30 PM - 2:30 PM"
            img="/8.png"
            fullName="Dr. N. Vijayan"
            org="Principal Scientist, BND Division, CSIR-National Physical Laboratory, New Delhi"
            topic="Why precise measurements are important for Scientific research"
            timing="Session 9 | 1:30 PM - 2:30 PM"
            day={<>August 27<sup>th</sup></>}
          />
        </div>
      </div>
    );
  }
}