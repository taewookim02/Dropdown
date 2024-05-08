# vanilla-dropdown-component

This document provides guidance on how to utilize the Dropdown component in web projects. The component is highly customizable and can be styled using CSS variables.

_This package is **distributed as ES Modules** and is expected to be used in environments that support module syntax._

[![npm version](https://badge.fury.io/js/vanilla-dropdown-component.svg)](https://badge.fury.io/js/vanilla-dropdown-component)

## Installation

```bash
npm install vanilla-dropdown-component
```

## Usage

```javascript
import {
  DropdownButton,
  DropdownWithImg,
  DropdownWithSvg,
} from "vanilla-dropdown-component";

const dropdownBtn = new DropdownButton();
const dropdownImg = new DropdownWithImg();
const dropdownSvg = new DropdownWithSvg();

// Append the dropdowns to body or anywhere you want
document.body.appendChild(dropdownBtn);
document.body.appendChild(dropdownImg);
document.body.appendChild(dropdownSvg);
```

## Examples

### Basic Dropdown Button

This example shows how to create a dropdown button with default settings:

```javascript
const dropdownButton = new DropdownButton();
document.body.appendChild(dropdownButton.dropdownOuterEl);
```

### Custom Dropdown Button

This example demonstrates how to create a dropdown button with custom button text and link information:

```javascript
const customLinkInfo = {
  "User Profile": "https://example.com/profile",
  "Log Out": "https://example.com/logout",
  "Settings & Config": "https://example.com/setting",
};
const customButton = new DropdownButton("My Profile", customLinkInfo);
document.body.appendChild(customButton);
```

### Dropdown with Image

Create a dropdown component that includes an image, using a default set of links and a custom image URL:

```javascript
const imageUrl =
  "https://images.pexels.com/photos/21945939/pexels-photo-21945939.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load";
const dropdown = new DropdownWithImg(undefined, imageUrl);
document.body.appendChild(dropdown);
```

### Custom Links and Image URL Dropdown

This example configures a dropdown with custom link options and a specified image URL:

```javascript
const linkInfo = {
  "Google Link": "https://www.google.com",
  "Stack Overflow": "https://stackoverflow.com/",
  "YouTube Link": "https://www.youtube.com/",
};
const imageUrl = "https://example.com/path/to/image.jpg";
const dropdown = new DropdownWithImg(linkInfo, imageUrl);
document.body.appendChild(dropdown);
```

### Dropdown with Custom SVG

Create a dropdown component that utilizes an SVG image alongside customized links:

```javascript
const linkInfo = {
  "Google Link": "https://www.google.com",
  "Stack Overflow": "https://stackoverflow.com/",
  "YouTube Link": "https://www.youtube.com/",
};
const customSvg = `<?xml version="1.0"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340">
  <path fill="#CDCDCD" d="M170,0..."/>
</svg>`;
const dropdown = new DropdownWithSvg(customSvg, linkInfo);
document.body.appendChild(dropdown);
```

## Configuring styles

To configure styles, import the CSS directly or use the provided variables in your project's CSS:

```css
@import url("vanilla-dropdown-component/dist/styles/variables.css");
@import url("vanilla-dropdown-component/dist/styles/style.css");

:root {
  --clr-link-bg: #fff;
  --clr-ft-white: #fff;
  --clr-base: #666;
  --clr-base-lt: #999;
  --clr-base-ltst: #ebebeb;
  --clr-base-dk: #333;
  --clr-btn: #5c7cfa;
  --clr-btn-lt: #748ffc;
  --clr-btn-dk: #4263eb;
  --clr-btn-dkst: #364fc7;
  --fs-link: 14px;
}
```
