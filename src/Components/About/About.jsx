import React from "react";
import styles from "./About.module.scss";
import Pinkdimond from '../../images/Side-pink-dimond.png';
import Profiledimond from '../../images/Profile-pic.png';

const About = () => {
  return (
    <div className={styles.aboutmain}>
      <img className={styles.pinkdimond} src={Pinkdimond} alt='#'></img>
      <img className={styles.profiledimond} src={Profiledimond} alt='#'></img>
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
    </div>
  );
};

export default About;
