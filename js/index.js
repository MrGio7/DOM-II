// Your code goes here
const logoHeading = document.querySelector('.logo-heading');

logoHeading.addEventListener('mouseover', function(event){
    event.target.style.fontWeight = 'bold';
    event.stopPropagation();
})

logoHeading.addEventListener('click', function(event){
    event.target.style.fontWeight = 'normal';
    event.stopPropagation();
})

const navLink = document.querySelector('nav')

navLink.addEventListener('dblclick', function(event){
    event.target.style.border = '5px solid #FEC91C';
    event.target.style.borderRadius = '10px';
    event.target.style.padding = '5px 10px';
    event.preventDefault()
})


const textHeader = document.querySelector('.text-content h2')

textHeader.addEventListener('wheel', function(e){
    TweenLite.to('.text-content h2', 1.5, { ease: Bounce.easeOut, x: "70%" });
})

const page = document.querySelector("html");
page.addEventListener('dragstart', function(e){
    alert('u cannot drag my items!!!')
})

window.addEventListener('resize', function(){
logoHeading.style.backgroundColor = 'red';
})

const textP = document.querySelector('p')

navLink.addEventListener('keydown', function(e){
    e.target.style.backgroundColor = 'green';
})