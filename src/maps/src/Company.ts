import faker = require("faker");
import { Mappable } from "./CustomMap";

export class Company implements Mappable{
    name: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    }
    constructor() {
        this.name = faker.company.companyName(1)
        this.catchPhrase = faker.company.catchPhrase()
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude()),
        }
    }
}