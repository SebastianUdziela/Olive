"use strict";

var header = document.querySelector("header");
var headerBtn = document.querySelector(".header__btn");
var username = document.querySelector(".slider h4");
var reviewsContent = document.querySelector(".slider p");
var prevButtonSlider = document.querySelector(".prev");
var nextButtonSlider = document.querySelector(".next");
var counter = 0;
var reviews = [{
  user: "John Doe",
  review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus similique deserunt quos quod aliquid, consectetur eaque numquam voluptas quam, earum suscipit iste eligendi blanditii dignissimos enim voluptates totam saepe reiciendis!"
}, {
  user: "John Porter",
  review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus similique deserunt quos quod aliquid, consectetur eaque numquam voluptas quam, earum"
}, {
  user: "Paul Bell",
  review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus similique deserunt quos quod aliquid"
}];

var changeButtonCollor = function changeButtonCollor() {
  if (counter < 2) {
    nextButtonSlider.style.color = "#000000";
  } else {
    nextButtonSlider.style.color = "#e9e9e9";
  }

  if (counter > 0) {
    prevButtonSlider.style.color = "#000000";
  } else {
    prevButtonSlider.style.color = "#e9e9e9";
  }
};

var handleNextSlide = function handleNextSlide(e) {
  if (counter === 2) {
    counter = 2;
  } else {
    counter++;
  }

  username.textContent = reviews[counter].user;
  reviewsContent.textContent = reviews[counter].review;
  changeButtonCollor();
};

var handlePrevSlide = function handlePrevSlide() {
  if (counter === 0) {
    counter = 0;
  } else {
    counter--;
  }

  username.textContent = reviews[counter].user;
  reviewsContent.textContent = reviews[counter].review;
  changeButtonCollor();
};

prevButtonSlider.addEventListener("click", handlePrevSlide);
nextButtonSlider.addEventListener("click", handleNextSlide);
headerBtn.addEventListener("click", function () {
  header.classList.toggle("active");
});