"use strict";
import "./style.css";
import { DropdownWithImg } from "./DropdownWithImg";

const linkInfo = {
  "Google Link": "https://www.google.com",
  StackOverflow: "https://stackoverflow.com/",
  YouTube: "https://www.youtube.com/",
};
import customImg from "./assets/customImg.jpg";
const dropExample = new DropdownWithImg(linkInfo, customImg);
const drop2 = new DropdownWithImg(
  undefined,
  "https://images.pexels.com/photos/21945939/pexels-photo-21945939.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
);
const drop3 = new DropdownWithImg();

document.body.appendChild(dropExample);
document.body.appendChild(drop2);
document.body.appendChild(drop3);
