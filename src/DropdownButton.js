/**
 * Represents a dropdown button with customizable links.
 *
 * @class
 * @param {string} [btnText="Button 1"] - Text to display on the dropdown button.
 * @param {Object} [linkInfo={ "My Account": "#", "Settings": "#", "Logout": "#" }] - An object containing the display text and URLs for the dropdown links.
 *
 * @example
 * // Creating a dropdown button with default settings:
 * const dropdownButton = new DropdownButton();
 * document.body.appendChild(dropdownButton.dropdownOuterEl);
 *
 * @example
 * // Creating a dropdown button with custom button text and link information:
 * const customLinkInfo = {
 *   "User Profile": "https://example.com/profile",
 *   "Settings": "https://example.com/settings",
 *   "Log Out": "https://example.com/logout"
 * };
 * const customButton = new DropdownButton("My Profile", customLinkInfo);
 * document.body.appendChild(customButton.dropdownOuterEl);
 */
export class DropdownButton {
  constructor(
    btnText = "Button 1",
    linkInfo = { "My Account": "#", Settings: "#", Logout: "#" }
  ) {
    this.btnText = btnText;
    this.linkInfo = linkInfo;
    this.dropdownOuterEl = this.#createDropdown();
    this.#attachEventListeners();
    return this.dropdownOuterEl;
  }

  /**
   * Creates the dropdown button with associated links.
   * @private
   * @returns {HTMLElement} The dropdown element containing the button and links.
   */
  #createDropdown = () => {
    const dropdownOuterEl = document.createElement("div");
    dropdownOuterEl.classList.add("dropdown-btn__outer");

    // btn
    const btnEl = document.createElement("button");
    btnEl.classList.add("dropdown-btn__outer--btn");
    btnEl.textContent = this.btnText;
    dropdownOuterEl.appendChild(btnEl);

    // inner div
    const dropdownInnerEl = document.createElement("div");
    dropdownInnerEl.classList.add("dropdown-btn__inner");

    for (const text in this.linkInfo) {
      const href = this.linkInfo[text];

      const linkEl = document.createElement("a");
      linkEl.href = href;
      linkEl.textContent = text;
      linkEl.classList.add("dropdown-btn__inner--link");
      dropdownInnerEl.appendChild(linkEl);
    }
    dropdownOuterEl.appendChild(dropdownInnerEl);

    return dropdownOuterEl;
  };

  /**
   * Attaches event listeners to the dropdown elements to manage dropdown visibility.
   * @private
   */
  #attachEventListeners = () => {
    const btnEl = this.dropdownOuterEl.querySelector(
      ".dropdown-btn__outer--btn"
    );
    const dropdownInnerEl = this.dropdownOuterEl.querySelector(
      ".dropdown-btn__inner"
    );

    btnEl.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent the click from bubbling to the document
      dropdownInnerEl.classList.toggle("show");
    });

    document.addEventListener(
      "click",
      (e) => {
        if (!dropdownInnerEl.contains(e.target) && e.target !== btnEl) {
          dropdownInnerEl.classList.remove("show");
        }
      },
      true // event capturing
    );
  };
}
