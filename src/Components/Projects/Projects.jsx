import React, { useState } from "react";
import styles from "./Projects.module.scss";
import dimond from '../../images/dimond.png';
import PPD from '../../images/PPD.png';
import GPD from '../../images/GPD.png';
import OPD from '../../images/OPD.png';
import { Link } from "react-router-dom";

const Projects = () => {
  const [ isOpen, setIsOpen ] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
    console.log("hello");
  };
  
  const openProject = {
    isOpen: isOpen,
    setIsOpen: handleClick,
  }
  

  return (
    <>
      <p className={styles.jem}><Link to='/'>.Jem</Link></p>
      <div className={styles.main}>
        <img className={styles.dimond} src={dimond} alt='#'></img>
        <h1 onClick={handleClick}>.Project 1 /</h1>
        <h1 >.Project 2 /</h1>
        <h1 >.Project 3 /</h1>
        <h1 >.Project 4 /</h1>
      </div>
        <section className={styles.one}>
          <img className={styles.dimond} src={PPD} alt='#'></img>
          <h1>.Project 1 /</h1>
        </section>
        <section className={styles.two}>
          <img className={styles.dimond} src={GPD} alt='#'></img>
          <h1>.Project 2 /</h1>
        </section>
        <section className={styles.three}>
          <img className={styles.dimond} src={OPD} alt='#'></img>
          <h1>.Project 3 /</h1>
        </section>
        <section className={styles.four}>
          <img className={styles.dimond} src={PPD} alt='#'></img>
          <h1>.Project 4 /</h1>
        </section>
    </>
  );
};

export default Projects;
