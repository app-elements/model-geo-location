/* global window */

import $ from 'jquery';
import Geo from '../index';
import template from './demo.stache!';
import 'milligram';

const geo = new Geo();

geo.getLocation().then(() => {
    $('#app').html(template(geo));
});

window.geo = geo;
