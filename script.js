"use strict";

let starti = document.querySelector(".start");
let cha = document.querySelector(".cha-svla");
let makrateli = document.querySelector(".makrateli-svla");
let qagaldi = document.querySelector(".qagaldi-svla");
let win = document.querySelector(".win");
let svla = document.querySelector(".svla");
let mogwag = document.querySelector(".mogwag");
let isPlaying = true;
cha.addEventListener("click", function () {
  if (isPlaying === true) {
    cha.src = "black1.png";
    let sheniSvla = "ჭა";
    let kompSvla = Math.round(Math.random() * 2) + 1;
    if (kompSvla === 1) {
      kompSvla = "ჭა";
    } else if (kompSvla === 2) {
      kompSvla = "ქაღალდი";
    } else {
      kompSvla = "მაკრატელი";
    }
    if (kompSvla === "ჭა") {
      svla.textContent = "ჭა";
      mogwag.textContent = "რა არის? თავში მიზიხარ?";
      win.classList.remove("hidden");
    }
    if (kompSvla === "მაკრატელი") {
      svla.textContent = "მაკრატელი";
      mogwag.textContent = "მოიგე! ჩავვარდი";
      win.classList.remove("hidden");
    }
    if (kompSvla === "ქაღალდი") {
      svla.textContent = "ქაღალდი";
      mogwag.textContent = "წააგე! დაგაფარე";
      win.classList.remove("hidden");
    }
  }
  isPlaying = false;
});
qagaldi.addEventListener("click", function () {
  if (isPlaying === true) {
    qagaldi.src = "black2.png";
    let sheniSvla = "ქაღალდი";
    let kompSvla = Math.round(Math.random() * 2) + 1;
    if (kompSvla === 1) {
      kompSvla = "ჭა";
    } else if (kompSvla === 2) {
      kompSvla = "ქაღალდი";
    } else {
      kompSvla = "მაკრატელი";
    }
    if (kompSvla === "ჭა") {
      svla.textContent = "ჭა";
      mogwag.textContent = "მოიგე! დამაფარე";
      win.classList.remove("hidden");
    }
    if (kompSvla === "მაკრატელი") {
      svla.textContent = "მაკრატელი";
      mogwag.textContent = "წააგე! გადაგჭერი";
      win.classList.remove("hidden");
    }
    if (kompSvla === "ქაღალდი") {
      svla.textContent = "ქაღალდი";
      mogwag.textContent = "რა არის? თავში მიზიხარ?";
      win.classList.remove("hidden");
    }
  }
  isPlaying = false;
});
makrateli.addEventListener("click", function () {
  if (isPlaying === true) {
    makrateli.src = "black3.png";
    let sheniSvla = "მაკრატელი";
    let kompSvla = Math.round(Math.random() * 2) + 1;
    if (kompSvla === 1) {
      kompSvla = "ჭა";
    } else if (kompSvla === 2) {
      kompSvla = "ქაღალდი";
    } else {
      kompSvla = "მაკრატელი";
    }
    if (kompSvla === "ჭა") {
      svla.textContent = "ჭა";
      mogwag.textContent = "წააგე! ჩავარდი";
      win.classList.remove("hidden");
    }
    if (kompSvla === "მაკრატელი") {
      svla.textContent = "მაკრატელი";
      mogwag.textContent = "რა არის? თავში მიზიხარ?";
      win.classList.remove("hidden");
    }
    if (kompSvla === "ქაღალდი") {
      svla.textContent = "ქაღალდი";
      mogwag.textContent = "მოიგე! გადამჭერი";
      win.classList.remove("hidden");
    }
  }
  isPlaying = false;
});
starti.addEventListener("click", function () {
  isPlaying = true;
  cha.src = "cha.png";
  makrateli.src = "makrateli.png";
  qagaldi.src = "qagaldi.png";
  win.classList.add("hidden");
});
