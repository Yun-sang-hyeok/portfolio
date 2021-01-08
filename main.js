'use strict';

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
    navbarMenu.classList.remove('open');
    scrollIntoView(link);
})

// Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
});

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

// Projects
const workBtnCaontainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const category = document.querySelector('.category__btn');
const projects = document.querySelectorAll('.project'); //8개 project담긴 요소들이 배열로 할당
workBtnCaontainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if(filter == null) {
        return;
    }

    // Remove selection from previous item select the new one
    const active = document.querySelector('.category__btn.selected');
    active.classList.remove('selected');
    const target = e.target.nodeName === 'BUTTON' ? e.target : 
                        e.target.parentNode;
    target.classList.add('selected');


    projectContainer.classList.add('anim-out');
    setTimeout(() => {
        projects.forEach((project) => {
            //console.log(project.dataset.type);
        
            if(filter === '*' || filter === project.dataset.type) {
                project.classList.remove('invisible');
            } else {
                project.classList.add('invisible');
            }
        })
        projectContainer.classList.remove('anim-out');
    },300)
})




function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth'});
}



