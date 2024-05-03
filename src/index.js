"use strict";
import "./style.css";
import { DropdownWithImg } from "./modules/DropdownWithImg";

new DropdownWithImg().initializeDropdown();

/*
document.querySelectorAll(".dropdown__outer").forEach((dropdown) => {
  const profileImgEl = dropdown.querySelector(".dropdown__outer--profile-img");
  const dropdownInnerEl = dropdown.querySelector(".dropdown__inner");

  const handleClickOutsideMenu = (e) => {
    if (!dropdownInnerEl.contains(e.target) && e.target != profileImgEl) {
      dropdownInnerEl.classList.remove("show");
    }
  };

  const toggleMenu = (e) => {
    dropdownInnerEl.classList.toggle("show");
  };

  // adding event listeners
  window.addEventListener("click", handleClickOutsideMenu);

  profileImgEl.addEventListener("click", toggleMenu);
});


*/
