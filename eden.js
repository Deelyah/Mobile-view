"use strict";

const foodActive = false;
const clickCheck = document.querySelector(".__text");
const orangeColoredSection = document.querySelector(".orange_colored_section");
const header = document.querySelector(".__header");
const orangeBodyContainer = document.querySelector(".orange_body_container");
const overlay = document.querySelector(".overlay");
const popoverMeal = document.querySelector(".popover_meal p");
const cancelButton = document.querySelector(".cancelButton");

function animate() {
  clickCheck.addEventListener("click", function () {

    // overlay.classList.remove("__unclicked");



    clickCheck.classList.add("__clicked");
    popoverMeal.classList.add("__clicked");
    orangeColoredSection.classList.add("__clicked");
    orangeBodyContainer.classList.add("__clicked");

    // overlay.classList.add("__clicked");
    addClass('.overlay', '__clicked', 1000)

  });
}

// Cancel first modal function
function cancelFoodModal() {
  cancelButton.addEventListener("click", function (e) {
    console.log(cancelButton);
    // e.stopPropagation()
    clickCheck.classList.remove("__clicked");
    popoverMeal.classList.remove("__clicked");
    orangeColoredSection.classList.remove("__clicked");
    orangeBodyContainer.classList.remove("__clicked");

    addClass('.overlay', '__unclicked', 1000)
    // overlay.classList.remove("__clicked");
    // overlay.classList.add("__unclicked");
  });
}

function addClass(classname, add, time) {
  document.querySelector(classname).classList.remove('add')
  document.querySelector(classname).classList.add(add)
}

animate();
cancelFoodModal();
