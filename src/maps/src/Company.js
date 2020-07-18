"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var faker = require("faker");
var Company = /** @class */ (function () {
    function Company() {
        this.name = faker.company.companyName(1);
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude()),
        };
    }
    return Company;
}());
exports.Company = Company;
//# sourceMappingURL=Company.js.map