/* eslint no-extend-native: 0*/
/* eslint no-use-extend-native/no-use-extend-native: 0*/
/* eslint babel/new-cap: 0*/

import 'chai';
import 'steal-mocha';
import CoordsList from '../coordinate-list';
import Coords from '../coordinate-map';

const expect = chai.expect;
let list;

describe('Coordinates Map', () => {
    describe('when inited', () => {
        beforeEach(() => {
            list = new CoordsList();
            list.push({});
        });
        it('array item instance is instance of Coors map', () => {
            expect(list.attr(0)).to.be.an.instanceof(Coords);
        });
    });
});
