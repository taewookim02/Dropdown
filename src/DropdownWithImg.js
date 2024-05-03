"use strict";
import defaultImg from "./assets/default.jpg";

export class DropdownWithImg {
  /** 
   * Creates a new DropdownWithImg instance, returns a JS DOM element.
   * 
   * @constructor
   * @param {Object} [linkInfo={"My Account": "#", "Settings": "#", "Logout": "#"}] - Contains the text and href for each dropdown link.
   * @param {string} [imageUrl] - URL or path to the image to be used in the dropdown.

   * 
   * @example
   * // Without arguments, using default settings:
   * ```javascript
    const dropdown = new DropdownWithImg();
    document.body.appendChild(dropdown);
   * ```

   * <br>
   * <hr>
   * @example
   * // With default linkInfo, custom image URL:
   * ```javascript
   * const dropdown2 = new DropdownWithImg(undefined,
"https://images.pexels.com/photos/21945939/pexels-photo-21945939.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load");
document.body.appendChild(dropdown2);
```
   * @example
   * // Using custom image with Webpack and file-loader:
   * ```javascript
   * import customImg from "./assets/customImg.jpg";
const dropdown3 = new DropdownWithImg(linkInfo, customImg);
document.body.appendChild(dropdown3);
   * ```
   */
  constructor(
    linkInfo = { "My Account": "#", Settings: "#", Logout: "#" },
    imageUrl = defaultImg
  ) {
    this.linkInfo = linkInfo;
    this.imageUrl = imageUrl;
    this.dropdownOuterEl = this.createDropdown();
    this.attachEventListeners();
    return this.dropdownOuterEl;
  }

  /**
   * Create dropdown with image and returns a virtual DOM element.
   * Accepts array of texts for each nav link textContent.
   */
  createDropdown = () => {
    // outer div
    const dropdownOuterEl = document.createElement("div");
    dropdownOuterEl.classList.add("dropdown-img__outer");

    // image
    const img = new Image();
    img.src = this.imageUrl;
    img.classList.add("dropdown-img__outer--profile-img");
    img.alt = "Profile picture";
    dropdownOuterEl.appendChild(img);

    // inner div
    const dropdownInnerEl = document.createElement("div");
    dropdownInnerEl.classList.add("dropdown-img__inner");

    // inner div - links
    for (const text in this.linkInfo) {
      const href = this.linkInfo[text];

      const linkEl = document.createElement("a");
      linkEl.href = href;
      linkEl.textContent = text;
      linkEl.classList.add("dropdown-img__inner--link");
      dropdownInnerEl.appendChild(linkEl);
    }

    dropdownOuterEl.appendChild(dropdownInnerEl);

    // return virutal DOM element
    return dropdownOuterEl;
  };

  /**
   * Attaches event listeners for the current dropdown.
   * First listener is to the current profileImgElement.
   * Second listener is to the document, and listens for anything outside of the current open dropdown.
   *
   */
  attachEventListeners = () => {
    const profileImgEl = this.dropdownOuterEl.querySelector(
      ".dropdown-img__outer--profile-img"
    );
    const dropdownInnerEl = this.dropdownOuterEl.querySelector(
      ".dropdown-img__inner"
    );

    profileImgEl.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent the click from bubbling to the document
      dropdownInnerEl.classList.toggle("show");
    });

    document.addEventListener(
      "click",
      (e) => {
        if (!dropdownInnerEl.contains(e.target) && e.target !== profileImgEl) {
          dropdownInnerEl.classList.remove("show");
        }
      },
      true // event capturing
    );
  };
}
