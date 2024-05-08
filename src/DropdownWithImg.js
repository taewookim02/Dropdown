"use strict";

/**
 * Represents a dropdown component with an image and customizable links.
 * This component is designed to be attached to the DOM directly, returning a JS DOM element that can be appended to any document element.
 * Users must provide their own image URL to customize the profile picture, or a default image will be used.
 *
 * @class
 * @param {Object} [linkInfo={"My Account": "#", "Settings": "#", "Logout": "#"}] - Object containing the display text and URLs for each link in the dropdown.
 * @param {string} imageUrl - URL to the profile image to be used in the dropdown. If not specified, a default image is used.
 *
 * @example
 * // Creating a dropdown with default linkInfo and a custom image URL:
 * ```javascript
 * const imageUrl = "https://images.pexels.com/photos/21945939/pexels-photo-21945939.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load";
 * const dropdown = new DropdownWithImg(undefined, imageUrl);
 * document.body.appendChild(dropdown);
 * ```
 *
 * @example
 * // Creating a dropdown using custom links and a custom image URL:
 * ```javascript
 * const linkInfo = {
 *   "Google Link": "https://www.google.com",
 *   "StackOverflow": "https://stackoverflow.com/",
 *   "YouTube": "https://www.youtube.com/"
 * };
 * const imageUrl = "https://example.com/path/to/image.jpg";
 * const dropdown = new DropdownWithImg(linkInfo, imageUrl);
 * document.body.appendChild(dropdown);
 * ```
 */
export class DropdownWithImg {
  constructor(
    linkInfo = { "My Account": "#", Settings: "#", Logout: "#" },
    imageUrl = "https://images.pexels.com/photos/21945939/pexels-photo-21945939.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
  ) {
    this.linkInfo = linkInfo;
    this.imageUrl = imageUrl;
    this.dropdownOuterEl = this.#createDropdown();
    this.#attachEventListeners();
    return this.dropdownOuterEl;
  }

  /**
   * Creates the dropdown element with an image and a set of links based on provided information.
   * This method is marked private and is not intended to be used outside of the class instance.
   *
   * @private
   * @returns {HTMLElement} The complete dropdown element including image and links.
   */
  #createDropdown = () => {
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
   * Attaches necessary event listeners to the dropdown's elements.
   * This method ensures that the dropdown operates correctly (e.g., toggling visibility) when interacted with.
   * This method is private to prevent external manipulation.
   *
   * @private
   */
  #attachEventListeners = () => {
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
