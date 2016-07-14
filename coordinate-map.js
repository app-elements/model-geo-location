/* eslint no-self-compare: 0 */
import can from 'can';
import 'can/map/define/define';

export default can.Map.extend({
    init: opts => {
        if (opts && !can.isEmptyObject(opts)) {
            this.isEmpty = false;
        }
    },
    define: {
        isEmpty: {
            value: true,
            type: 'boolean'
        },
        accuracy: {},
        altitude: {
            type: 'number'
        },
        altitudeAccuracy: {},
        heading: {},
        latitude: {
            // Make sure it is a number and has a specific precision
            type: val => {
                const precision = 1000000;
                // Make sure its always a number
                let resp = parseFloat(val);

                // Check if NaN
                if (resp === resp) {
                    // trim to 5 digits
                    resp = Math.round(resp * precision) / precision;
                } else {
                    resp = 0;
                }

                return resp;
            }
        },
        longitude: {
            // Make sur it is a number and has a specific precision
            type: val => {
                const precision = 1000000;
                // Make sure its always a number
                let resp = parseFloat(val);

                // Check if NaN
                if (resp === resp) {
                    // trim to 5 digits
                    resp = Math.round(resp * precision) / precision;
                } else {
                    resp = 0;
                }

                return resp;
            }
        },
        speed: {
            type: 'number'
        },
        timestamp: {
            type: 'number'
        },
        watchId: {
            value: -1,
            type: 'number'
        },
        isWatch: {
            type: 'boolean',
            get: () => {
                return this.attr('watchId') > -1;
            }
        }
    }
});
