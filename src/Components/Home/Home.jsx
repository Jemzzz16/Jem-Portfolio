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
        <p className={styles.jem}><Link to='/'>.Jem</Link></p>
        
        <img className={styles.laptop} src={Laptop} alt='laptop'></img>

        <div className={styles.title}>
          <h1>Web /<br></br> Developer</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
