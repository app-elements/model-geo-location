/* eslint no-extend-native: 0, no-use-extend-native/no-use-extend-native: 0, babel/new-cap: 0*/

import 'chai';
import 'steal-mocha';
import Geolocation from '../geolocation';

const expect = chai.expect;
let geolocation;

describe('Geolocation model', () => {
    describe('when inited', () => {
        beforeEach(() => {
            geolocation = new Geolocation();
        });
        describe('when geolocation api does not exist', () => {
            // TODO: Need to stub navigator api
            xit('apiAvailable is true', () => {
                expect(geolocation.attr('apiAvailable')).to.be.true;
            });
        });

        describe('when geolocation api exists', () => {
            it('apiAvailable is true', () => {
                expect(geolocation.attr('apiAvailable')).to.be.false;
            });
        });
    });
});
