"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var faker = require("faker");
exports.red = "red";
var User = /** @class */ (function () {
    function User() {
        this.name = faker.name.firstName(1);
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude()),
        };
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=User.js.map