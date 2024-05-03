"use strict";

import profileImg from "../assets/default.jpg";
/*
<body>
  <div class="dropdown__outer">
    <img class="dropdown__outer--profile-img" src="./assets/img/defaultImg.jpg" alt="Profile picture">
    <div class="dropdown__inner">
      <a href="#" class="dropdown__inner--link">My Account</a>
      <a href="#" class="dropdown__inner--link">Settings</a>
      <a href="#" class="dropdown__inner--link">Logout</a>
    </div>
  </div>
</body>
*/
export class DropdownWithImg {
  constructor(linkTexts = ["My Account", "Settings", "Logout"]) {
    this.linkTexts = linkTexts;
    this.dropdownOuterEl = this.createDropdown();
  }

  /**
   * Create dropdown with image and returns a virtual DOM element.
   * Accepts array of texts for each nav link textContent.
   */
  createDropdown = () => {
    // outer div
    const dropdownOuterEl = document.createElement("div");
    dropdownOuterEl.classList.add("dropdown__outer");

    // image
    const img = new Image();
    img.src = profileImg;
    img.classList.add("dropdown__outer--profile-img");
    img.alt = "Profile picture";
    dropdownOuterEl.appendChild(img);

    // inner div
    const dropdownInnerEl = document.createElement("div");
    dropdownInnerEl.classList.add("dropdown__inner");

    // inner div - links
    // const linkTexts = ["My Account", "Settings", "Logout"];
    this.linkTexts.forEach((val) => {
      const linkEl = document.createElement("a");
      linkEl.href = "#";
      linkEl.textContent = val;
      linkEl.classList.add("dropdown__inner--link");
      dropdownInnerEl.appendChild(linkEl);
    });

    dropdownOuterEl.appendChild(dropdownInnerEl);

    // return virutal DOM element
    return dropdownOuterEl;
  };

  attachEventListeners = () => {
    const profileImgEls = document.querySelectorAll(
      ".dropdown__outer--profile-img"
    );

    profileImgEls.forEach((el) => {
      el.addEventListener("click", () => this.toggleDropdown());
    });
    document.addEventListener(
      "click",
      this.handleClickOutside.bind(this),
      true
    );
  };

  toggleDropdown = (e) => {
    document.querySelector(".dropdown__inner").classList.toggle("show");
  };

  handleClickOutside = (e) => {
    const dropdownInnerEl = document.querySelector(".dropdown__inner");
    const profileImgEl = document.querySelector(
      ".dropdown__outer--profile-img"
    );

    if (!dropdownInnerEl.contains(e.target) && e.target != profileImgEl) {
      dropdownInnerEl.classList.remove("show");
    }
  };

  getDropdownElement = () => {
    return this.dropdownOuterEl;
  };
}
