import { Driver } from './Driver';
import { GoogleMap } from './GoogleMap';
import { MyHome } from './MyHome';
import { Passenger } from './Passenger';

const map = new GoogleMap('map');
const driver = new Driver();
const passenger = new Passenger();
const myHome = new MyHome(passenger);

map.AddMarker(passenger);
map.AddMarker(driver);
map.AddMarker(myHome);

map.SearchText({
  input: <HTMLInputElement>document.getElementById('address')!,
  searchButton: <HTMLButtonElement>document.getElementById('searchButton')!,
});

