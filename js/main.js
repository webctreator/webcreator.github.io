$(document).ready(function() {
    $('.block_title').click(function(event) {
       $(this).toggleClass('active').next().slideToggle(300)
    });
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".ul");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))

function onEntry(entry) {
  entry.forEach(change => {
      if (change.isIntersecting) {
          change.target.classList.add("element-show");
      }else{
          change.target.classList.remove("element-show");
      }
  });
}

let options = {
  threshold: [0.5]};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".element-animation");

for (let elm of elements) {
  observer.observe(elm);
}

