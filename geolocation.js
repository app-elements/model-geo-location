/* global navigator */
/* eslint babel/new-cap: 0 */

import can from 'can';
import 'can/map/define/define';
import Coords from './coordinate-map';
import CoordsList from './coordinate-list';

export default can.Map.extend({
    define: {
        coords: {
            get: () => {
                const coordsList = this.attr('coordsList');
                const len = coordsList.attr('length');
                return len > 0 ? coordsList.attr(len - 1) : {};
            },
            set: coords => {
                const coordsList = this.attr('coordsList');
                const len = coordsList.attr('length');
                if (len > 0) {
                    coordsList.splice(len - 1, 1, coords);
                } else {
                    coordsList.push(coords);
                }
            },
            Type: Coords
        },
        coordsList: {
            Value: Array,
            Type: CoordsList
        },
        apiAvailable: {
            value: false,
            get: () => {
                return 'geolocation' in navigator;
            }
        }
    },
    getLocation: () => {
        const self = this;
        const def = can.Deferred();

        self.attr('coords', def);

        navigator.geolocation.getCurrentPosition(loc => {
            def.resolve(loc);
        }, err => {
            def.reject(err);
        });

        def.then(loc => {
            loc.coords.timestamp = loc.timestamp;
            self.attr('coords', loc.coords);
        });

        return def;
    },
    watchLocation: () => {
        const self = this;
        const def = can.Deferred();

        self.attr('coords', def);

        const watchId = navigator.geolocation.watchPosition(loc => {
            def.resolve(loc);
        }, err => {
            def.reject(err);
        });

        def.then(position => {
            position.coords.timestamp = position.timestamp;
            self.attr('coords', position.coords);
            self.attr('coords').attr('watchId', watchId);
        });
    }
});
