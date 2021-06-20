import React from "react";
import styles from "./Projects.module.scss";
import Greendimond from '../../images/Green-dimond.png';
import Orange from '../../images/Orangeoverlay.png';
import Pink from '../../images/Pinkoverlay.png';
import Green from '../../images/Greenoverlay.png';

const Projects = () => {


  return (
    <>
      <div className={styles.projectsmain}>
        <img className={styles.greendimond} src={Greendimond} alt='#'></img>
      </div>
      
      <div className={styles.projectheadings}>
        <h3>.Project 1 /</h3>
        <h3>.Project 2 /</h3>
        <h3>.Project 3 /</h3>
      </div>
    </>
  );
};

export default Projects;
