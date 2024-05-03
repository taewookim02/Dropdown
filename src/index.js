"use strict";
import "./style.css";
import { DropdownWithImg } from "./modules/DropdownWithImg";

const linkInfo = {
  "Google Link": "https://www.google.com",
  StackOverflow: "https://stackoverflow.com/",
  YouTube: "https://www.youtube.com/",
};
import customImg from "./assets/customImg.jpg";
console.log(customImg);
const dropExample = new DropdownWithImg(linkInfo, customImg);
document.body.appendChild(dropExample);
