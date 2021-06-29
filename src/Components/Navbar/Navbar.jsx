import React from "react";
import styles from "./Navbar.module.scss";


import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <div className={styles.navbar}>
      <ul>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/projects'>Projects</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;