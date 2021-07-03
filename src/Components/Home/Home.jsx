import React from "react";
import styles from "./Home.module.scss";
import pinkdimond from '../../images/pink-home-dimond.png';
import orangedimond from '../../images/Orangedimond.png';
import Laptop from '../../images/Laptop.jpg';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className={styles.heading}>
        <img className={styles.orangedimond} src={orangedimond} alt='orange'></img>
        <img className={styles.pink} src={pinkdimond} alt='pink'></img>
        
        <img className={styles.laptop} src={Laptop} alt='laptop'></img>

        <div className={styles.title}>
          <h1>Software /</h1>
          <h1 className={styles.developer}>Developer</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
