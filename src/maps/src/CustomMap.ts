import { Company } from "./Company";

export interface Mappable {
    location: {
        lat: number,
        lng: number
    },
    name: string
}

export class CustomMap {
    private googleMap: google.maps.Map;
    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.querySelector(divId), {
            zoom: 2,
            center: {
                lat: 0,
                lng: 0
            }
        })
    }
    addMarker(object: Mappable) {
        console.log(object)
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: object.location
        })
     
        marker.addListener('click', () => {
            const infowindow = new google.maps.InfoWindow({
                content: object.name
            });
            infowindow.open(this.googleMap, marker);
        });
    }



}