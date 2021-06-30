import React from "react";
import styles from "./About.module.scss";
import Pinkdimond from '../../images/pinkdimondmobileabout.png';
import Profiledimond from '../../images/Profiledimond.png';
import greendimondabout from '../../images/greendimondabout.png';
import { Link } from "react-router-dom";


const About = () => {
  return (
    <>
      <p className={styles.jem}><Link to='/'>.Jem</Link></p>
      
      <div className={styles.aboutmain}>
        <img className={styles.pinkdimond} src={Pinkdimond} alt='#'></img>
        <img className={styles.greendimond} src={greendimondabout} alt='#'></img>
        <img className={styles.profiledimond} src={Profiledimond} alt='#'></img>
        <p className={styles.about}>.About</p>
        <p className={styles.paraone}>
          Hi I’m Jem, full stack 
          Web developer, photographer 
          and enthusiastic professional.
        </p>
        <p className={styles.paratwo}>
          Let me capture and develop 
          your ideas 
          into something amazing!
        </p>
        <div className={styles.parathree}>
          <h3>.Tech Stack</h3>
          <p>HTML, CSS, SASS</p>
          <p>JavaScript, React</p>
          <p>Jest, Cypress, Enzyme</p>
          <p>Github, OOP, TDD</p>
          <p>Java</p>
          <p>Spring, SQL, API</p>
          <p>LightRoom, PhotoShop</p>
        </div>
      </div>
    </>
  );
};


export default About;
