/* eslint no-self-compare: 0 */
export default function (val) {
    // TODO: Make this configurable
    const precision = 1000000;
    // Make sure its always a number
    let resp = parseFloat(val);

    // Check if NaN
    if (resp === resp) {
        // trim
        resp = Math.round(resp * precision) / precision;
    } else {
        resp = 0;
    }

    return resp;
}
