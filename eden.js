"use strict";

let clicked = false;
const clickCheck = document.querySelector(".__text");
const orangeColoredSection = document.querySelector(".orange_colored_section");
const header = document.querySelector(".__header");
const orangeBodyContainer = document.querySelector(".orange_body_container");
const overlay = document.querySelector(".overlay");
const popoverMeal = document.querySelector(".popover_meal p");
const cancelButton = document.querySelector(".cancelButton");

function animateForward() {
  clickCheck.addEventListener("click", function () {
    // overlay.classList.remove("__unclicked");

    clickCheck.classList.add("__clicked");
    popoverMeal.classList.add("__clicked");
    orangeColoredSection.classList.add("__clicked");
    orangeBodyContainer.classList.add("__clicked");

    // overlay.classList.add("__clicked");
    addClass(".overlay");
  });
}

function animateBackward() {
  cancelButton.addEventListener("click", function () {
    // overlay.classList.remove("__unclicked");

    clickCheck.classList.remove("__clicked");
    popoverMeal.classList.remove("__clicked");
    orangeColoredSection.classList.remove("__clicked");
    orangeBodyContainer.classList.remove("__clicked");

    // overlay.classList.add("__clicked");
    addClass(".overlay");
  });
}

function addClass(classname) {
  if (clicked) {
    document.querySelector(classname).classList.remove("__clicked");
    document.querySelector(classname).classList.add("__unclicked");
    console.log(document.querySelector(classname));
    clicked = false
  } else {
    document.querySelector(classname).classList.remove("__unclicked");
    document.querySelector(classname).classList.add("__clicked");
    console.log(document.querySelector(classname));
    clicked = true
  }
}

animateForward()
animateBackward()
