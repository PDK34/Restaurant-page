import "./styles.css";
import pageLoad from './pageLoad.js';
import aboutPage from "./about.js";

const home = document.querySelector('.home');
const about  = document.querySelector('.about');
home.addEventListener('click',()=>pageLoad())

about.addEventListener('click',()=>aboutPage())

pageLoad();
