import React from "react";
import styles from "./Projects.module.scss";
import dimond from '../../images/Dimond.png';
import { Link } from "react-router-dom";

const Projects = () => {

  return (
    <>
    <p className={styles.jem}><Link to='/'>.Jem</Link></p>
    <img className={styles.dimond} src={dimond} alt='#'></img>
    <div className={styles.main}>
      <h1>.Project 1 /</h1>
      <h1>.Project 2 /</h1>
      <h1>.Project 3 /</h1>
    </div>
    </>
  );
};

export default Projects;
