/* global window */

import debug from 'debug';
import $ from 'jquery';
import Geo from './geolocation';
import template from './demo.stache!';
import 'milligram';
window.debug = debug;
debug.enable('model-geolocation:*');

const geo = new Geo();

geo.getLocation().then(() => {
    $('#app').html(template(geo));
});

window.geo = geo;
