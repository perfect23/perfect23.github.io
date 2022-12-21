const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    menu.classList.remove('active');
};
const sr = ScrollReveal ({
	distance: '25px',
	duration: 2500,
	reset: true
});

sr.reveal('.home-text',{delay:190, origin:'bottom'});

sr.reveal('.about,.services,.portfolio,.contact',{delay:200, origin:'bottom'});


var typed = new Typed(".input_typed", {
    strings:["web-developer", "designer", "freelancer"],
    typeSpeed: 120,
    backSpeed: 110,
    loop: true
});

new WOW().init();


// scroll
const pageup = document.querySelector('.pageup');

pageup.onclick = function() {
    window.scrollTo(scrollX, 0);
    // после scrollTo возникнет событие "scroll", так что стрелка автоматически скроется
  };

  window.addEventListener('scroll', function() {
    pageup.hidden = (scrollY < document.documentElement.clientHeight);
  });