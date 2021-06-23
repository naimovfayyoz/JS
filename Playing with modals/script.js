"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");

function openModel() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function closeModel() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}
for (let i = 0; i < btnOpenModal.length; i++) {
  console.log("111");

  btnOpenModal[i].addEventListener("click", openModel);
}

btnCloseModal.addEventListener("click", closeModel);

overlay.addEventListener("click", closeModel);

document.addEventListener("keydown", function (e) {
  if (!modal.classList.contains("hidden") && e.key === "Escape") closeModel();
});
