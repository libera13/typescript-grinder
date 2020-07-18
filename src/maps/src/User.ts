import faker = require("faker");
import { Mappable } from "./CustomMap";

export const red = "red"

export class User implements Mappable {
    name: string;
    location: {
        lat: number;
        lng: number;
    }
    constructor() {
        this.name = faker.name.firstName(1)
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude()),
        }
    }
}