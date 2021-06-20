import React from "react";
import styles from "./Navbar.module.scss";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.nav}>
      
      <p>Navbar</p>
      <h3><Link to='/'>Home</Link></h3>
      <h3><Link to='/about'>About</Link></h3>
      <h3><Link to='/projects'>Projects</Link></h3>
      <h3><Link to='/contact'>Contact</Link></h3>
     
    </div>
  );
};

export default Navbar;
