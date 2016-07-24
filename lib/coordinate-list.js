import can from 'can';
import Coords from './coordinate-map';

const CoordsList = can.List.extend();

CoordsList.Map = Coords;

export default CoordsList;
