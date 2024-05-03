export class DropdownButton {
  constructor(
    btnText = "Button 1",
    linkInfo = { "My Account": "#", Settings: "#", Logout: "#" }
  ) {
    this.btnText = btnText;
    this.linkInfo = linkInfo;
    this.dropdownOuterEl = this.createDropdown();
    return this.dropdownOuterEl;
  }

  /*
  <div class="dropdown-btn__outer">
    <button class="dropdown-btn__outer--btn">Button 1</button>
    <div class="dropdown-btn__inner">
      <a href="#" class="dropdown-btn__inner--link">My Account</a>
      <a href="#" class="dropdown-btn__inner--link">Settings</a>
      <a href="#" class="dropdown-btn__inner--link">Logout</a>
    </div>
  </div>
  */
  createDropdown = () => {
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

  attachEventListeners = () => {};
}
