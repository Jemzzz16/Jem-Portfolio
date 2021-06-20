import React from "react";
import styles from "./About.module.scss";
import Greendimond from '../../images/Green-dimond.png';
import Pinkdimond from '../../images/Side-pink-dimond.png';
import Profiledimond from '../../images/Profile-pic.png';

const About = () => {
  return (
    <div className={styles.aboutmain}>
      <p>About works</p>
      <img className={styles.pinkdimond} src={Pinkdimond} alt='#'></img>
      <img className={styles.profiledimond} src={Profiledimond} alt='#'></img>
      <img className={styles.greendimond} src={Greendimond} alt='#'></img>
    </div>
  );
};

export default About;
