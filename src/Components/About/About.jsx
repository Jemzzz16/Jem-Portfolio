import React from "react";
import styles from "./About.module.scss";
import Greendimond from '../../images/Green-dimond.png';
import Pinkdimond from '../../images/Side-pink-dimond.png';
import Profiledimond from '../../images/Profile-pic.png';

const About = () => {
  return (
    <div className={styles.aboutmain}>
      <img className={styles.pinkdimond} src={Pinkdimond} alt='#'></img>
      <img className={styles.profiledimond} src={Profiledimond} alt='#'></img>
      <img className={styles.greendimond} src={Greendimond} alt='#'></img>
      <div className={styles.paraone}>
        <p>
          Hi I’m Jem, full stack 
          Web developer, photographer 
          and enthusiastic proffesional.
        </p>
      </div>
      <div className={styles.paratwo}>
        <p>
          Let me create, 
          capture & develop 
          your ideas 
          into something amazing!
        </p>
      </div>
      
      <div className={styles.projectheadings}>
        <h3>.Project 1 /</h3>
        <h3>.Project 2 /</h3>
        <h3>.Project 3 /</h3>
      </div>
    </div>
  );
};

export default About;
