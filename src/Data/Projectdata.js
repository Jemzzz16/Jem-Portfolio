import Javagame from '../images/Javasciptgame.jpg';
import calculator from '../images/Calculator.jpg';
import morsecode from '../images/morse.jpg';
import punkbeer from '../images/punkbeer.jpg';
import grandbequest from '../images/grandbequest.jpg';

import PPD from '../images/PPD.png';
import GPD from '../images/GPD.png';
import OPD from '../images/OPD.png';
import { 
  AiFillHtml5,
  AiOutlineGithub,
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
  GrTest
 } from 'react-icons/gr';


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
    img: calculator,
    overlay: PPD,
    title: "Calculator",
    description: "javascript calculator",
    githubURL: "",
    hostURL: "",
    tools: [
      <AiFillHtml5 />,
      <FaCss3Alt />,
      <SiJavascript />,
      <GrTest />
    ]
  },
  {
    id: ".Project 3",
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
    id: ".Project 4",
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
  id: ".Project 5",
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
    <SiFirebase />
  ]
},
];
export default projects;