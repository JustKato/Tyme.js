# Tyme.js

[Site](https://justkato.me/) |
[Docs/Wiki](https://github.com/JustKato/Tyme.js/wiki) |
[Contributing](CONTRIBUTING.md) |

Building the project yourself:
```shell
$ git pull https://github.com/JustKato/Tyme.js tymejs
$ cd tymejs
$ npm run build
```

## Download
 * [Web build](https://github.com/JustKato/Tyme.js/releases/download/3.0.0/tyme.js-3.0.0.zip.zip)

Tyme.js is released under the [MIT license](license) & supports modern environments.<br>

## Installation

In a browser:
```html
<script src="tyme.js"></script>
```

Using npm:
```shell
$ npm i tymejs
```

In Node.js TypeScript:
```js
// Import the Package
import TymeJS from "tymejs"; // Use require for plain javascript

// Get the date object from Somewhere
let myDate: Date = new Date();

// Initialize the TymeJS Object
let t: TymeJS = new TymeJS(myDate);

// Now you can format different dates
let formattedDate: string = t.format("d/m/Y H:i A");

// Log the formatted Date
console.log(formattedDate);
```

In Node.js using JavaScript:
```js
const { default: TymeJS } = require("tymejs");

// Get the date object from Somewhere
let myDate = new Date();

// Initialize the TymeJS Object
let t = new TymeJS(myDate);

// Now you can format different dates
let formattedDate = t.format("d/m/Y H:i A");

// Log the formatted Date
console.log(formattedDate);
```

## Why TymeJS?

TymeJS makes working with JavaScript date objects much easier, I've found myself<br>
multiple times in the situation where the client doesn't like their region's date format
and requests for custom formats, this consumed a lot of time implementing, so that's why
I have created this library, for:
 * Reliable Date formats
 * Reliable Time formats
 * TypeScript Support