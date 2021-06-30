import React, { useState } from "react";
import styles from './ProjectCard.module.scss'

const ProjectCard = (props) => {
  const { id, title, img, overlay, description, githubURL, hostURL, tools } =
    props.projects;


  return (
    <div className={styles.card}>
      <p>{id}</p>
      <h3>{title}</h3>
      <img className={styles.proImg} src={img} alt='#'></img>
      <img className={styles.proOverlay} src={overlay} alt='#'></img>
      <p>{description}</p>
      <p>{githubURL}</p>
      <p>{hostURL}</p>
      <p>{tools}</p>
    </div>
  )
}

export default ProjectCard;