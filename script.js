// Get the stuff
const navButton = document.querySelector('#nav-button')
const close = document.querySelector('#close')
const mobileNav = document.querySelector('.mobile-nav')

// When hamburger is clicked hide Hamburger 
navButton.addEventListener('click', function(){
    this.style.display = 'block';
    navButton.style.display = 'none';
    close.style.display = 'block';
    mobileNav.style.display = 'block';
});


// When X is clicked, Hide menu, show hamburger
close.addEventListener('click', function(){
    mobileNav.style.display = 'none';
    close.style.display = 'none';
    navButton.style.display = 'block';
});
