"use strict"

const btn = document.querySelector(".switch-btn");
const amounts = document.querySelectorAll(".amount");

btn.addEventListener("click", () => {
    btn.classList.toggle("yearly");
    amounts.forEach((amount) => {
        amount.classList.toggle("toggle-price");
    })
});