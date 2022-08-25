import { Person } from './Person';
import { Mappable } from './types';

export class MyHome implements Mappable {
  private location: {
    lat: string;
    lng: string;
  };

  get getLocation() {
    return this.location;
  }

  constructor(passenger: Person) {
    this.location = {
      lat: (parseInt(passenger.getLocation.lat) + 0.0002).toString(),
      lng: (parseInt(passenger.getLocation.lng) + 0.0001).toString(),
    };
  }

  marketTitle(address: () => string): string {
    return `My home address is ${address()}`;
  }
}
