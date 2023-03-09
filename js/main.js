let searchForm = document.querySelector(".search-box");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  cart.classList.remove("active");
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
};

// let cart = document.querySelector(".shopping-cart");

// document.querySelector("#cart-btn").onclick = () => {
//   cart.classList.toggle("active");
//   searchForm.classList.remove("active");
//   loginForm.classList.remove("active");
//   navbar.classList.remove("active");
// };

let loginForm = document.querySelector(".login-form");

document.querySelector("#login-btn").onclick = () => {
  loginForm.classList.toggle("active");
  searchForm.classList.remove("active");
  cart.classList.remove("active");
  navbar.classList.remove("active");
};

let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  cart.classList.remove("active");
  loginForm.classList.remove("active");
};

// let menu = document.querySelector("#menu-btn");

// menu.addEventListener("click", () => {
//   menu.classList.toggle("fa-times");
//   navbar.classList.toggle("active");
// });

window.onscroll = () => {
  searchForm.classList.remove("active");
  cart.classList.remove("active");
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
};

//slider
let slides = document.querySelectorAll(".slider-box .slide");
let index = 0;

function next() {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}

function prev() {
  slides[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
}

// let menu = document.querySelector("#menu-btn");
// let navbar = document.querySelector(".navbar");
// let header = document.querySelector(".header");
// let searchBox = document.querySelector(".search-box");
// let loginForm = document.querySelector(".login-form");

// document.querySelector("#search-btn").addEventListener("click", () => {
//   searchBox.classList.toggle("active");
//   navbar.classList.remove("active");
//   loginForm.classList.remove("active");
// });

// document.querySelector("#login-btn").addEventListener("click", () => {
//   loginForm.classList.toggle("active");
//   navbar.classList.remove("active");
//   searchBox.classList.remove("active");
// });

// document.querySelector("#menu-btn").addEventListener("click", () => {
//   navbar.classList.toggle("active");
//   searchBox.classList.remove("active");
//   loginForm.classList.remove("active");
// });

// menu.addEventListener("click", () => {
//   menu.classList.toggle("fa-times");
//   navbar.classList.toggle("active");
// });

// window.onscroll = () => {
//   menu.classList.remove("fa-times");
//   navbar.classList.remove("active");
//   searchBox.classList.remove("active");
//   loginForm.classList.remove("active");

//   if (window.scrollY > 150) {
//     header.classList.add("active");
//   } else {
//     header.classList.remove("active");
//   }
// };

let countDate = new Date("june 7,2023 00:00:00").getTime();
function CountDown() {
  let now = new Date().getTime();
  gap = countDate - now;

  let second = 1000;
  let minute = second * 60;
  let hour = minute * 60;
  let day = hour * 24;

  let d = Math.floor(gap / day);
  let h = Math.floor((gap % day) / hour);
  let m = Math.floor((gap % hour) / minute);
  let s = Math.floor((gap % minute) / second);

  document.getElementById("day").innerText = d;
  document.getElementById("hour").innerText = h;
  document.getElementById("minute").innerText = m;
  document.getElementById("second").innerText = s;
}

setInterval(function () {
  CountDown();
}, 1000);
