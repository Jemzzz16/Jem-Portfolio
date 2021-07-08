import React from "react";
import styles from "./Contact.module.scss";
import { AiFillGithub, AiFillInstagram, AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import phonepic from '../../images/Phonepic.jpg';
import pinkdimond from '../../images/pinkdimondmobileabout.png'

const Contact = () => {
  return (
    <div className={styles.socials}>
      <img className={styles.phone} src={phonepic} alt='#'></img>
      <img className={styles.pinkdimond} src={pinkdimond} alt='#'></img>
        <div className={styles.header}>
          <h1>.Contact</h1>
          <p>jemmaholmes16@gmail.com</p>
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
    </div>
  );
};

export default Contact;
