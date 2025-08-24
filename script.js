//side navbar screen
const sidenav = document.querySelector(".side-navbar");

function showNavbar()
{
    sidenav.style.left="0";
    
}
function closeNavbar()
{
    sidenav.style.left="-30%";
}

//aspiring goals

var typed=new Typed("#typed-text" ,{
    strings:["Software Developer.","Web Developer.", "Full-Stack Developer."],
    typeSpeed:80,
    backSpeed:40,
    backDelay:1500,
    loop:true
});

//current year
document.getElementById("year").textContent=new Date().getFullYear();


// Scroll animation using IntersectionObserver
const hiddenSections = document.querySelectorAll(".hidden-section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible-section");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2,
});

hiddenSections.forEach(section => observer.observe(section));