/* global window */

import debug from 'debug';
import '../tests/geolocation.test';
import '../tests/coordinate-map.test';
import '../tests/coordinate-list.test';

window.debug = debug;
debug.enable('model-geolocation:*');
