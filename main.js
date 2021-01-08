'use strict';
const toggleBtn = document.querySelector('.navbar__toggle-btn');
const menu = document.querySelector('.navbar__menu');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Make navbar transparent when it is on the top
const navbar = document.querySelector("#navbar");
const navbarHegiht = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if(window.scrollY > navbarHegiht) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
})

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if(link == null) {

        return;
    }
    scrollIntoView(link);
})

// Handle click on "contact me" button on home
const HomecontactBtn = document.querySelector('.home__contact');
HomecontactBtn.addEventListener('click',() => {
    scrollIntoView('#contact');
})

// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;

const about = document.querySelector('#about');
const aboutHeight = about.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
    about.style.opacity = 1.8 - window.scrollY / aboutHeight;
})

// Show "arrow up" button when scrolling down
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if(window.scrollY > homeHeight / 2){
        arrowUp.classList.add('visible');
    } else {
        arrowUp.classList.remove('visible');   
    }
})

arrowUp.addEventListener('click', () => {
    const scrollTo = document.querySelector('#home');
    scrollTo.scrollIntoView({behavior: 'smooth'});
})


// I made it but When it started, Button showed. It's wrong.
/* const arrowBtn = document.querySelector('.arrow-up');

arrowBtn.addEventListener('click', () => {
    scrollIntoView("#home");
})

// I made it but When it started, Button showed. It's wrong.
document.addEventListener('scroll', () => {
    arrowBtn.style.opacity = -0.5 + window.scrollY / aboutHeight;
})
*/


function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth'});
}



