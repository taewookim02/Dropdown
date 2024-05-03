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
  constructor() {}

  initializeDropdown() {
    // create dom

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
    const linkTexts = ["My Account", "Settings", "Logout"];
    linkTexts.forEach((val) => {
      const linkEl = document.createElement("a");
      linkEl.href = "#";
      linkEl.textContent = val;
      linkEl.classList.add("dropdown__inner--link");
      dropdownInnerEl.appendChild(linkEl);
    });

    dropdownOuterEl.appendChild(dropdownInnerEl);

    // return instead later
    document.body.appendChild(dropdownOuterEl);
  }
}
