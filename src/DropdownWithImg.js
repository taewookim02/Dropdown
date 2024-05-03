"use strict";
import defaultImg from "./assets/default.jpg";

export class DropdownWithImg {
  /**Returns a JS DOM element.
   *
   * # Usage example:
   *
   * ### W/o arguments:
   *
   * ```javascript
    const dropdown = new DropdownWithImg();
    document.body.appendChild(dropdown);
   * ```

   * <br>
   * <hr>
   * 
   * ### Default linkInfo, customImg:
   * 
   * ```javascript
   * const dropdown2 = new DropdownWithImg(undefined,
"https://images.pexels.com/photos/21945939/pexels-photo-21945939.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load");
document.body.appendChild(dropdown2);
```
   * 
   * ### Using webpack, file-loader:
   * 
   * ```javascript
   * import customImg from "./assets/customImg.jpg";
const dropdown3 = new DropdownWithImg(linkInfo, customImg);
document.body.appendChild(dropdown3);
   * ```
   *
   *
   * Users can customize the dropdown link texts, and its corresponding href with linkInfo obj.
   * linkInfo obj elements are consisted of key, value pairs:
   * with `key` being the textContent for the link tag
   * and `value` being the href textContent for the link tag.
   *
   * Hence can be customized like so:
   *
   * `linkInfo = {"Google Link": "https://www.google.com", "StackOverflow": "https://stackoverflow.com/", "YouTube": "https://www.youtube.com/" }`
   *
   * The above linkInfo can then be passed onto as a parameter when invoking the `new` constructor like so:
   *
   * `const dropExample = new DropdownWithImg(linkInfo);`
   *
   *
   * This then can be attached to any elements user wants to:
   * document.body.appendChild(dropExample);
   *
   * For the 2nd parameter; imageUrl, is a path, and can use direct urls like so:
   *
   * `const imageUrl = "https://example.com/path/to/image.jpg";`
   *
   * `const dropdown = new DropdownWithImg(linkInfo, imageUrl);`
   *
   * Or, you could use webpack's **file-loader** to import an image
   * and pass in like so:
   *
   * `import customImg from "./assets/customImg.jpg";`
   *
   * `const dropExample = new DropdownWithImg(linkInfo, customImg);`
   *
   * This enables usage of relative paths.
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
    dropdownOuterEl.classList.add("dropdown__outer");

    // image
    const img = new Image();
    img.src = this.imageUrl;
    img.classList.add("dropdown__outer--profile-img");
    img.alt = "Profile picture";
    dropdownOuterEl.appendChild(img);

    // inner div
    const dropdownInnerEl = document.createElement("div");
    dropdownInnerEl.classList.add("dropdown__inner");

    // inner div - links
    for (const text in this.linkInfo) {
      const href = this.linkInfo[text];

      const linkEl = document.createElement("a");
      linkEl.href = href;
      linkEl.textContent = text;
      linkEl.classList.add("dropdown__inner--link");
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
      ".dropdown__outer--profile-img"
    );
    const dropdownInnerEl =
      this.dropdownOuterEl.querySelector(".dropdown__inner");

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
