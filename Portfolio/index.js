// alert("hi")
console.log("d");
let hamMenu = document.querySelector(".material-symbols-outlined");

let navMenu= document.querySelector(".navMobMenu");
navMenu.style.display="none";
navMenu.classList.toggle("hidden");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
  navMenu.classList.remove("hidden");
  navMenu.style.display="block";
});
let x=document.querySelector('.x');
x.addEventListener("click", () => {
  hamMenu.classList.remove("active");
  navMenu.classList.remove("active");
  navMenu.style.display="none";
});