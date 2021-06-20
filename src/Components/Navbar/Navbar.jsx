import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import  { VscChevronDown, VscChromeClose } from 'react-icons/vsc';

import { Link } from "react-router-dom";

const Navbar = () => {
  const [ sidebar, setSidebar ] = useState(false)

  const showSidebar = () => {
    setSidebar(!sidebar)
    console.log(showSidebar);
  }
  return (
    <>
      <div className={styles.nav} onClick={showSidebar}>
        <VscChevronDown />
      </div>
      <nav className={sidebar ? 'navmenu active' : 'navmenu'}>
        <ul className={styles.navmenuitems}>
          <li className={styles.navmenutoggle}><Link to='/'>Home</Link></li>
          <li className={styles.navmenutoggle}><Link to='/about'>About</Link></li>
          <li className={styles.navmenutoggle}><Link to='/projects'>Projects</Link></li>
          <li className={styles.navmenutoggle}><Link to='/contact'>Contact</Link></li>
          <VscChromeClose />
        </ul>
      </nav>
    </>
  );
};

export default Navbar;