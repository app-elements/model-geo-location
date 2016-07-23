/* global navigator */
/* eslint babel/new-cap: 0 */

import can from 'can';
import 'can/map/define/define';
import Coords from './coordinate-map';
import CoordsList from './coordinate-list';

export default can.Map.extend({
    define: {
        navigator: {
            value: navigator || {}
        },
        coords: {
            Type: Coords
        },
        coordsList: {
            Value: Array,
            Type: CoordsList
        },
        apiAvailable: {
            value: false,
            get: function () {
                return 'geolocation' in this.attr('navigator');
            }
        }
    },
    getLocation: function () {
        const def = can.Deferred();

        if (this.attr('apiAvailable')) {
            this.attr('coords', def);

            this.attr('navigator').geolocation.getCurrentPosition(position => {
                position.coords.timestamp = position.timestamp;
                this.attr('coords', position.coords);
                this.attr('coordsList').push(position.coords);
                def.resolve(position);
            }, err => {
                def.reject(err);
            });
        } else {
            def.reject({message: 'Geolocation API missing'});
        }

        return def;
    },
    watchLocation: function () {
        const def = can.Deferred();
        if (this.attr('apiAvailable')) {
            this.attr('coords', def);

            const watchId = this.attr('navigator').geolocation.watchPosition(position => {
                position.coords.timestamp = position.timestamp;
                this.attr('coordsList').push(position.coords);
                this.attr('coords').attr('watchId', watchId);
                def.resolve(position);
            }, err => {
                def.reject(err);
            });
        } else {
            def.reject({message: 'Geolocation API missing'});
        }
    }
});
