import React from 'react'
import dimond from '../../images/dimond.png'
import ProjectCard from "../../Components/ProjectCard";
import projects from '../../Data/Projectdata';
import styles from "./Projects.module.scss";
import { Link } from "react-router-dom";

const Projects = () => {

  const getProjectCard = (projectsObj) => (
    <ProjectCard projects={projectsObj} key={`project:${projectsObj.id}`} />
  );

  return (
    <>
      <p className={styles.jem}><Link to='/'>.Jem</Link></p>
      <div className={styles.main}>
        <img className={styles.dimond} src={dimond} alt='#'></img>
        <h1>.Project 1 /</h1>
        <h1 >.Project 2 /</h1>
        <h1 >.Project 3 /</h1>
        <h1 >.Project 4 /</h1>
        <div className={styles.card}>{projects.map(getProjectCard)}</div>
      </div>
    </>
  )
}

export default Projects;