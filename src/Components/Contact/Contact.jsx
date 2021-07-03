import React from "react";
import styles from "./Contact.module.scss";
import { AiFillGithub, AiFillInstagram, AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";
import pinkdimond from '../../images/pinkdimondmobileabout.png'

const Contact = () => {
  return (
    <>
      <div className={styles.socials}>
        <h3>.Contact</h3>
        <p>jemmaholmes16@gmail.com</p>
        <img className={styles.pinkdimond} src={pinkdimond} alt='#'></img>
        
        <a href="https://www.linkedin.com/in/jemma--holmes/">
          <AiFillLinkedin />
        </a>

        <a href="https://github.com/Jemzzz16">
          <AiFillGithub />
        </a>
          
        <a href="https://www.instagram.com/jemma.j.photography/">
          <AiFillInstagram />
        </a>

        <a href="https://twitter.com/webdev_jem">
          <AiFillTwitterCircle />
        </a>
        
      </div>
    </>
  );
};

export default Contact;
