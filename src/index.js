import "./styles.css";
import pageLoad from './pageLoad.js';
import aboutPage from "./about.js";
import menuPage from "./menu.js";

const home = document.querySelector('.home');
const about  = document.querySelector('.about');
const menu  = document.querySelector('.menu');
home.addEventListener('click',()=>pageLoad())

about.addEventListener('click',()=>aboutPage())
menu.addEventListener('click',()=>menuPage())

pageLoad();
