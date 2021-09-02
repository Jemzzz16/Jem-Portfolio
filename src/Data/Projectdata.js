import Javagame from '../images/Javasciptgame.jpg';
import calculator from '../images/Calculator.jpg';
import morsecode from '../images/morse.jpg';
import punkbeer from '../images/punkbeer.jpg';
import grandbequest from '../images/grandbequest.jpg';
import nologer from '../images/nologer.jpg';
import winetracker from '../images/wine.jpg';

import PPD from '../images/PPD.png';
import GPD from '../images/GPD.png';
import OPD from '../images/OPD.png';

import { 
  AiFillHtml5,
  AiFillApi
 } from 'react-icons/ai';
 import { 
  FaCss3Alt,
  FaReact, 
 } from 'react-icons/fa';
 import { 
  SiJavascript,
  SiJava,
  SiJest,
  SiSass,
  SiFirebase
 } from 'react-icons/si';
 import { 
  FiFigma
 } from 'react-icons/fi';
 import {
  GrTest,
  GrMysql
 } from 'react-icons/gr';
 import {
  CgCloud,
 } from 'react-icons/cg'

const projects = [
  {
    id: ".Project 1",
    img: Javagame,
    overlay: GPD,
    title: "Dave the Dragon",
    description: "javascript game",
    githubURL: "https://github.com/Jemzzz16/Javascript-Game",
    hostURL: "https://jemzzz16.github.io/Javascript-Game/",
      tools: [
      <FiFigma />,
      <AiFillHtml5 />,
      <FaCss3Alt />,
      <SiJavascript /> ,
    ]
  },
  {
    id: ".Project 2",
    img: nologer,
    overlay: PPD,
    title: "Student and Courses",
    description: "FULL STACK application",
    githubURL: "https://github.com/Jemzzz16/Nologer-fullstack.git",
    hostURL: "https://github.com/Jemzzz16/Nologer-fullstack.git",
    tools: [
      <FaReact />,
      <SiSass />,
      <SiJava />,
      <AiFillApi />,
      <SiFirebase />,
      <CgCloud />,
      <GrMysql />
    ]
  },
  {
    id: ".Project 3",
    img: punkbeer,
    overlay: PPD,
    title: "Beer Search",
    description: "Punk beer search",
    githubURL: "https://github.com/Jemzzz16/punkbeer-api",
    hostURL: "https://punkbeer-api.web.app",
    tools: [
      <FaReact />,
      <SiSass />,
      <AiFillApi />
    ]
  },
  {
    id: ".Project 4",
    img: grandbequest,
    overlay: GPD,
    title: "Grand-Bequest",
    description: "Client project",
    githubURL: "https://github.com/nology-tech/grand-bequest",
    hostURL: "https://grand-bequest-8ee46.web.app/",
    tools: [
      <FiFigma />,
      <FaReact />,
      <SiSass />,
      <SiJava />,
      <SiFirebase />
    ]
  },
  {
    id: ".Project 5",
    img: winetracker,
    overlay: OPD,
    title: "Wine Tracker",
    description: "FULL STACK application",
    githubURL: "https://github.com/Jemzzz16/Wine-tracker.git",
    hostURL: "https://github.com/Jemzzz16/Wine-tracker.git",
    tools: [
      <FiFigma />,
      <FaReact />,
      <SiSass />,
      <SiJava />,
      <AiFillApi />,
      <GrMysql />
    ]
  },
  {
    id: ".Project 6",
    img: morsecode,
    overlay: OPD,
    title: "Translator",
    description: "Translate English to Morse Code",
    githubURL: "https://github.com/Jemzzz16/morse-translator",
    hostURL: "https://jemzzz16.github.io/morse-translator/",
    tools: [
      <AiFillHtml5 />,
      <FaCss3Alt />,
      <SiJavascript />,
      <SiJest />,
      <SiSass /> 
    ]
  },
  {
    id: ".Project 7",
    img: calculator,
    overlay: PPD,
    title: "Calculator",
    description: "javascript calculator",
    githubURL: "https://github.com/Jemzzz16/Calculator",
    hostURL: "https://github.com/Jemzzz16/Calculator",
    tools: [
      <AiFillHtml5 />,
      <FaCss3Alt />,
      <SiJavascript />,
      <GrTest />
    ]
  },
];
export default projects;