"use strict";
import "./style.css";
import { DropdownWithImg } from "./modules/DropdownWithImg";

const dropdownObj = new DropdownWithImg();
document.body.appendChild(dropdownObj.getDropdownElement());
const dropdownCustom = new DropdownWithImg([
  "Link 1",
  "Link 2",
  "Link 3",
  "Link 4",
  "Link 5",
]);

document.body.appendChild(dropdownCustom.getDropdownElement());
