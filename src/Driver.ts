import { faker } from '@faker-js/faker';
import { Person } from './Person';

export class Driver extends Person {
  constructor() {
    super(faker.name.firstName(), {
      lat: faker.address.latitude(),
      lng: faker.address.longitude(),
    });
  }
}
