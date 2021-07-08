import React from 'react'
import dimond from '../../images/dimond.png'
import styles from "./Projects.module.scss";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import projects from "../../Data/Projectdata";
import { AiOutlineGithub, AiOutlineHome } from 'react-icons/ai';

const Projects = () => {
  const responsive = {
    desktopXlarge: {
      breakpoint: { max: 2700, min: 1800 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    desktoplarge: {
      breakpoint: { max: 1800, min: 1600 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    desktop: {
      breakpoint: { max: 1600, min: 769 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 768, min: 574 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 573, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  
  
  return ( 
    <>
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="card">
        {/* // removeArrowOnDeviceType={["mobile"]}> */}
        
        {projects.map(projects => (
          <div className={styles.card} key={projects.id}>
            <h1 className={styles.projectnumber}>{projects.id}</h1>
            <h6>{projects.title}</h6>
            <img className={styles.proImg} src={projects.img} alt='#'></img>
            <img className={styles.proOverlay} src={projects.overlay} alt='#'></img>
            <p>{projects.description}</p>
            <p className={styles.tools}>{projects.tools}</p>
            <div className={styles.links}>
              <a href={projects.githubURL}><AiOutlineGithub /></a>
              <a href={projects.hostURL}><AiOutlineHome /></a>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
};


export default Projects;
