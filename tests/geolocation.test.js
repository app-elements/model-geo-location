/* eslint no-extend-native: 0, no-use-extend-native/no-use-extend-native: 0, babel/new-cap: 0*/

import 'steal-mocha';
import chai from 'chai';
import Geolocation from '../lib/geolocation';

const expect = chai.expect;
let geo;

describe('Geolocation model', () => {
    describe('when inited', () => {
        describe('when geolocation api does not exist', () => {
            beforeEach(() => {
                geo = new Geolocation({navigator: {geolocation: true}});
            });
            // TODO: Need to stub navigator api
            it('apiAvailable is true', () => {
                expect(geo.attr('apiAvailable')).to.equal(true);
            });
        });

        describe('when geolocation api exists', () => {
            beforeEach(() => {
                geo = new Geolocation({navigator: {}});
            });
            it('apiAvailable is false', () => {
                expect(geo.attr('apiAvailable')).to.equal(false);
            });
        });
    });
    describe('when getCurrentLocation is called', () => {
        it('updates the coords property');
    });
    describe('when watchLocation is called', () => {
        it('adds each new location to coordsList array');
    });
});
