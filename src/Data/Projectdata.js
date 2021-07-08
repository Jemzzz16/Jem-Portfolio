import Javagame from '../images/Javasciptgame.jpg';
import calculator from '../images/Calculator.jpg';
import morsecode from '../images/morse.jpg';
import punkbeer from '../images/punkbeer.jpg';
import PPD from '../images/PPD.png';
import GPD from '../images/GPD.png';
import OPD from '../images/OPD.png';
import { 
  AiFillHtml5,
  AiOutlineGithub
 } from 'react-icons/ai';
 import { 
  FaCss3Alt,
  FaReact 
 } from 'react-icons/fa';
 import { 
  SiJavascript,
  SiJava,
  SiJest,
  SiSass 
 } from 'react-icons/si';
 import { 
  FiFigma
 } from 'react-icons/fi';


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
      <AiFillHtml5 />,
      <FaCss3Alt />,
      <SiJavascript /> ,
      <FiFigma />
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
      <SiJavascript />
    ]
  },
  {
    id: ".Project 3",
    img: morsecode,
    overlay: OPD,
    title: "Translator",
    description: "Translate English to Morse Code",
    githubURL: "",
    hostURL: "",
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
    githubURL: "",
    hostURL: "",
    tools: [
      <AiFillHtml5 />,
      <FaCss3Alt />,
      <SiJavascript /> ,
      <SiSass />,
      <FaReact />
    ]
  },
];
export default projects;