"use strict";
import "./style.css";
import { DropdownWithImg } from "./DropdownWithImg";
import { DropdownButton } from "./DropdownButton";

const ex = new DropdownWithImg();
document.body.appendChild(ex);

const btn = new DropdownButton();
document.body.appendChild(btn);

const btn2 = new DropdownButton("My btn~", {
  "Link 1": "https://www.naver.com",
  "Logggingggin?": "https://www.youtube.com",
});
document.body.appendChild(btn2);
