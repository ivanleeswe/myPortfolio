//Select DOM items
const menuBTN = document.querySelector('.menu-btn') //query selector selects one
const menu = document.querySelector('.menu')
const menuNav= document.querySelector('.menu-nav')
const menuBranding = document.querySelector('.menu-branding') 

const navItems = document.querySelectorAll('.nav-item') //nav items, home about me my work how to reach, more than 1, use query selector all, take all of those elemtents and put into a node list similar to arr

//Set Initial State of Menu
let showMenu = false; //start with false, use let bc we want to directly reassign, not const

menuBTN.addEventListener('click', toggleMenu) //once click fire function toggle menu

function toggleMenu() {
  if(!showMenu) {
    menuBTN.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

  //Set Menu State
    showMenu = true;
  } else {
    menuBTN.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

  //Set Menu State
    showMenu = false;

  }
}
