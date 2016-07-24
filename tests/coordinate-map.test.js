/* eslint no-extend-native: 0*/
/* eslint no-use-extend-native/no-use-extend-native: 0*/
/* eslint babel/new-cap: 0*/

import 'steal-mocha';
import chai from 'chai';
import Coords from '../lib/coordinate-map';

const expect = chai.expect;
let coords;

describe('Coordinates Map', () => {
    describe('when inited', () => {
        beforeEach(() => {
            coords = new Coords({test: true});
        });
        describe('has default properties', () => {
            it('isEmpty', () => {
                const val = coords.attr('isEmpty');
                expect(val).to.be.a('boolean');
                expect(val).to.equal(true);
            });
            it('accuracy', () => {
                const val = coords.attr('accuracy');
                expect(val).to.be.a('number');
                expect(val).to.equal(Infinity);
            });
            it('altitude', () => {
                const val = coords.attr('altitude');
                // expect(val).to.be.a('number');
                expect(val).to.equal(undefined);
            });
            it('altitudeAccuracy', () => {
                const val = coords.attr('altitudeAccuracy');
                expect(val).to.equal(undefined);
            });
            it('heading', () => {
                const val = coords.attr('heading');
                expect(val).to.equal(undefined);
            });
            it('latitude', () => {
                const val = coords.attr('latitude');
                expect(val).to.be.a('number');
                expect(val).to.equal(0);
            });
            it('longitude', () => {
                const val = coords.attr('longitude');
                expect(val).to.be.a('number');
                expect(val).to.equal(0);
            });
            it('speed', () => {
                const val = coords.attr('speed');
                expect(val).to.equal(undefined);
                // expect(val).to.be.a('number');
                // expect(val).to.equal(0);
            });
            it('timestamp', () => {
                const val = coords.attr('timestamp');
                expect(val).to.be.a('number');
                expect(val).to.equal(0);
            });
            it('watchId', () => {
                const val = coords.attr('watchId');
                expect(val).to.be.a('number');
                expect(val).to.equal(-1);
            });
            it('isWatch', () => {
                const val = coords.attr('isWatch');
                expect(val).to.be.a('boolean');
                expect(val).to.equal(false);
            });
        });
    });
});
