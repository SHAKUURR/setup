"use strict";

const circles = document.querySelectorAll(".circle");

const firstStep = document.getElementById("first");

const secondStep = document.getElementById("second");

const pricing = document.querySelector(".pricing");

const forthStep = document.getElementById("forth");

circles[0].addEventListener("click", function () {
	firstStep.classList.remove("hidden");
	secondStep.classList.add("hidden");
	forthStep.classList.add("hidden");
	pricing.classList.add("hidden");
	circles[0].classList.add("active");
	circles[1].classList.remove("active");
	circles[2].classList.remove("active");
	circles[3].classList.remove("active");
	circles[3].classList.remove("active");
});
circles[1].addEventListener("click", function () {
	secondStep.classList.remove("hidden");
	firstStep.classList.add("hidden");
	pricing.classList.add("hidden");
	forthStep.classList.add("hidden");
	circles[1].classList.add("active");
	circles[0].classList.remove("active");
	circles[2].classList.remove("active");
	circles[3].classList.remove("active");
});

circles[2].addEventListener("click", function () {
	pricing.classList.remove("hidden");
	secondStep.classList.add("hidden");
	firstStep.classList.add("hidden");
	forthStep.classList.add("hidden");
	circles[2].classList.add("active");
	circles[3].classList.remove("active");
	circles[1].classList.remove("active");
	circles[0].classList.remove("active");
});

circles[3].addEventListener("click", function () {
	forthStep.classList.remove("hidden");
	pricing.classList.add("hidden");
	secondStep.classList.add("hidden");
	firstStep.classList.add("hidden");
	circles[3].classList.add("active");
	circles[2].classList.remove("active");
	circles[1].classList.remove("active");
	circles[0].classList.remove("active");
});
// const activeButton = function () {
// 	classList.remove(".active");
// };
// circles.forEach((circle) => {
// 	circle.addEventListener("click", activeButton);
// });

// btn[0].onclick = function () {
// 	slide.style.transform = "translateX(0px)";
// };
