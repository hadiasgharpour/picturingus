alert("Welcome to Picturing Us Website")
let covidbg = document.getElementById("covidbg");
let lovejack = document.getElementById("lovejack");
let mask = document.getElementById("mask");
let text = document.getElementById("text");
let btn = document.getElementById("btn");
let person1 = document.getElementById('person1');
let person2 = document.getElementById('person2');
let person3 = document.getElementById('person3');
let person4 = document.getElementById('person4');
let header = document.querySelector('header');

/* add scrolly function to the pictures*/
window.addEventListener('scroll',function(){
    let value =     window.scrollY;
    covidbg.style.left = value * 0.25 + 'px';
    lovejack.style.top = value * 1.05 + 'px';
    mask.style.top = value * 0.5 + 'px';
    person1.style.paddingRight = value * 4 + 'px';
    person2.style.paddingRight = value * 1.5 + 'px';
    person3.style.left = value * 1.5 + 'px';
    person4.style.left = value * 4 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    header.style.top = value * 0.5 + 'px';

})
/* detect if user is in dark-mode */
const isDarkmode = window.matchMedia('(perefers-color-scheme: dark)').matches

/* take user back to top */
const toTop = () => {
    window.scrollTo({top:0, behavior: 'smooth'})
}

