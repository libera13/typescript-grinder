"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CustomMap = /** @class */ (function () {
    function CustomMap(divId) {
        this.googleMap = new google.maps.Map(document.querySelector(divId), {
            zoom: 2,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }
    CustomMap.prototype.addMarker = function (object) {
        var _this = this;
        console.log(object);
        var marker = new google.maps.Marker({
            map: this.googleMap,
            position: object.location
        });
        marker.addListener('click', function () {
            var infowindow = new google.maps.InfoWindow({
                content: object.name
            });
            infowindow.open(_this.googleMap, marker);
        });
    };
    return CustomMap;
}());
exports.CustomMap = CustomMap;
//# sourceMappingURL=CustomMap.js.map