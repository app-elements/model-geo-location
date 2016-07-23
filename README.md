# Geolocation CanJS Map

> A CanJS Map that Abstracts and standardizes the browser Geolocation API

## Install

Using npm: `npm install model-geolocation --save`

Latest code can be found here: https://github.com/app-elements/model-geo-location

## Usage

> Early alpha, so this is likely to change!

Initialize model

```javascript
import Geolocation from 'model-geolocation';
const geo = new Geolocation();
```

Get current location by using method

```javascript
var def = geo.getLocation();
def.then( loc => {
    // Loc is raw results from geolocate method

    // Can use better data by accessing coords
    geo.attr('coords'); // Same as loc but now it is an instance of the coords map
});
```


Or watch the devices location by using method

```javascript
var def = geo.watchLocation();
def.then( loc => {
    // Loc is raw results from geolocate method

    // Can use better data by accessing coords
    geo.attr('coords'); // Same as loc but now it is an instance of the coords map
});
```
## Build

The code is in ES6 but it can be transpiled into AMD, CommonJS, or global modules.  If you are using the NPM package, the `dist` is already available to you.

- Clone to your machine: `git clone https://github.com/app-elements/model-geo-location`
- `cd model-geo-location`
- `npm install`
- Run the build `npm run build`

This will create a `dist` folder with three bundles, one for each of the following:

- AMD
- CommonJS
- Global

Use the appropriate bundle as needed. :)

## Tests

Make sure you have installed the dependencies (see "Build" above) and have Firefox installed on your machine.

**Command line:**

Simply run `npm run test`.

This will run tests using Firefox so make sure it is installed first.

**Browser:**

Simply run `npm run develop`. This will attempt to start a web server on port `8001`, if successful, it will open your default browser.

Browse to `/tests.html`. Tests will run in the [Mocha](https://mochajs.org/) browser using [StealJS](http://stealjs.com/) and [Testee](http://daffl.github.io/testee.js/).


## Future

- Add demos
- Convert some geolocation methods to static methods.
- Improve API (it is a little hokey)
- Add docs
- Improve tests

## License

MIT License

Copyright (c) [2016] [Juan Orozco]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
