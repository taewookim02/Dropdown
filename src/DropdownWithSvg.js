"use strict";

/**
 * Represents a dropdown component with an SVG image and customizable links.
 * This component is designed to be directly attached to the DOM, returning a DOM element that can be appended to any document element.
 * The component allows for easy customization of the dropdown content and the SVG image through parameters.
 *
 * @class
 * @param {Object} [linkInfo={"My Account": "#", "Settings": "#", "Logout": "#"}] - Object containing the display text and URLs for each link in the dropdown.
 * @param {string} [svgContent=DropdownWithSvg.defaultSvgElement] - SVG markup or an SVG element to be used as the profile image in the dropdown. This allows for direct customization of the SVG image.
 *
 * @example
 * // Creating a dropdown with default SVG settings:
 * ```javascript
 * const dropdown = new DropdownWithSvg();
 * document.body.appendChild(dropdown);
 * ```
 *
 * @example
 * // Creating a dropdown with default linkInfo, but a custom SVG:
 * ```javascript
 * const customSvg = `<?xml version="1.0"?>
 * <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340">
 *   <path fill="#EFEFEF" d="M170,0..."/>
 * </svg>`;
 * const dropdown2 = new DropdownWithSvg(customSvg);
 * document.body.appendChild(dropdown2);
 * ```
 *
 * @example
 * // Creating a dropdown using custom links and a custom SVG:
 * ```javascript
 * const linkInfo = {
 *   "Google Link": "https://www.google.com",
 *   "StackOverflow": "https://stackoverflow.com/",
 *   "YouTube": "https://www.youtube.com/"
 * };
 * const customSvg = `<?xml version="1.0"?>
 * <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340">
 *   <path fill="#CDCDCD" d="M170,0..."/>
 * </svg>`;
 * const dropdown3 = new DropdownWithSvg(customSvg, linkInfo);
 * document.body.appendChild(dropdown3);
 * ```
 */
export class DropdownWithSvg {
  static defaultSvgElement = `<?xml version="1.0"?>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340" class="dropdown-img__outer--profile-img-svg">
  <path fill="#DDD" d="m169,.5a169,169 0 1,0 2,0zm0,86a76,76 0 1
  1-2,0zM57,287q27-35 67-35h92q40,0 67,35a164,164 0 0,1-226,0"/>
  </svg>`;

  constructor(
    svgContent = DropdownWithSvg.defaultSvgElement,
    linkInfo = { "My Account": "#", Settings: "#", Logout: "#" }
  ) {
    this.linkInfo = linkInfo;
    this.svgContent = this.#processSvg(svgContent);
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
    // const img = new Image();
    // img.src = this.imageUrl;
    // img.classList.add("dropdown-img__outer--profile-img");
    // img.alt = "Profile picture";
    // dropdownOuterEl.appendChild(img);

    // TODO: use inline
    const img = document.createElement("div");
    img.innerHTML = this.svgContent;
    img.classList.add("dropdown-img__outer--profile-img");
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

  #processSvg(svgString) {
    // Use DOMParser to turn the SVG string into a DOM object
    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(svgString, "image/svg+xml");
    const svgElement = svgDoc.documentElement;

    // Add the class if it doesn't already exist
    svgElement.classList.add("dropdown-img__outer--profile-img-svg");

    // Serialize back to a string
    const serializer = new XMLSerializer();
    return serializer.serializeToString(svgElement);
  }

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
        // Get the actual element that was clicked
        let targetElement = e.target;

        // Check if the clicked element or any of its parents is the profile image element
        while (targetElement && targetElement !== document) {
          if (targetElement === profileImgEl) {
            // Click was inside the profile image, no action needed
            return;
          }
          targetElement = targetElement.parentNode;
        }

        // If the click was outside the profile image, and the dropdown is open, close it
        if (!dropdownInnerEl.contains(e.target)) {
          dropdownInnerEl.classList.remove("show");
        }
      },
      true // event bubbling
    );
  };
}
