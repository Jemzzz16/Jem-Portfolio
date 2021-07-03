import React from "react";
import styles from "./About.module.scss";
import Pinkdimond from '../../images/pinkdimondmobileabout.png';
import Profilepic from '../../images/profilepic.jpg';
import greendimondabout from '../../images/greendimondabout.png';



const About = () => {
  return (
    <>
      <div className={styles.aboutmain}>
        <img className={styles.pinkdimond} src={Pinkdimond} alt='#'></img>
        <img className={styles.greendimond} src={greendimondabout} alt='#'></img>
        <img className={styles.profiledimond} src={Profilepic} alt='#'></img>
        <div className={styles.paraone}>
          <p>
          Hi I’m Jem, <br></br>Software Engineer, photographer<br>
          </br> 
          and enthusiastic professional.
          <br></br>
          <br></br>
          Let me capture and develop 
          your ideas 
          into something amazing!
          <br></br>
          <h3>.Tech Stack</h3>
          HTML, CSS, SASS
          <br></br>
          JavaScript, React
          <br></br>
          Jest, Cypress, Enzyme
          <br></br>
          Github, OOP, TDD
          <br></br>
          Java
          <br></br>
          Spring, SQL, API
          <br></br>
          LightRoom, PhotoShop
          </p>
        </div>
      </div>
    </>
  );
};


export default About;
