import { Component, ElementRef, NgZone, ViewChild } from '@angular/core';
import { MapInfoWindow } from '@angular/google-maps';
//import { MarkerClusterer } from "@googlemaps/markerclusterer";

export interface Location {
  position: { lat: number; lng: number };
  status: 'stopped' | 'idle' | 'active' | '';
}

@Component({
  selector: 'app-create-marker',
  templateUrl: './create-marker.component.html',
  styleUrls: ['./create-marker.component.scss'],
})
export class CreateMarkerComponent {
  @ViewChild('LocationInputField') LocationInputField!: ElementRef;

  center: google.maps.LatLngLiteral = {
    lat: 25.294735740074593,
    lng: 51.48077412731984,
  };

  zoom: number = 13.7;
  display?: google.maps.LatLngLiteral;
  darkModeStyles: google.maps.MapTypeStyle[] = [
    { elementType: 'geometry', stylers: [{ color: '#1D1E23' }] },
    { elementType: 'labels.icon', stylers: [{ visibility: 'off' }] },
    { elementType: 'labels.text.fill', stylers: [{ color: '#757575' }] },
    { elementType: 'labels.text.stroke', stylers: [{ color: '#212121' }] },
    {
      featureType: 'administrative',
      elementType: 'geometry',
      stylers: [{ color: '#757575' }],
    },
    {
      featureType: 'administrative.country',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#9e9e9e' }],
    },
    {
      featureType: 'administrative.land_parcel',
      stylers: [{ visibility: 'off' }],
    },
    {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#757575' }],
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#757575' }],
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [{ color: '#181818' }],
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#616161' }],
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.stroke',
      stylers: [{ color: '#1b1b1b' }],
    },
    {
      featureType: 'road',
      elementType: 'geometry.fill',
      stylers: [{ color: '#2A3444' }],
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#757575' }],
    },
    {
      featureType: 'road.arterial',
      elementType: 'geometry',
      stylers: [{ color: '#2B3345' }],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [{ color: '#525867' }],
    },
    {
      featureType: 'road.highway.controlled_access',
      elementType: 'geometry',
      stylers: [{ color: '#7F8696' }],
    },
    {
      featureType: 'road.local',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#616161' }],
    },
    {
      featureType: 'transit',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#757575' }],
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{ color: '#83A6C9' }],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#3d3d3d' }],
    },
  ];

  markerPosition?: Location;
  customMarkerPosition?: google.maps.LatLngLiteral;

  markers: Location[] = [];
  //markerClusterer!: MarkerClusterer;

  customMarkers: Location[] = [];

  options: google.maps.MapOptions = {
    center: this.center,
    zoom: this.zoom,
    styles: this.darkModeStyles,
    draggableCursor: null,
  };

  landmarkLocation: any = { lat: 0, lng: 0 };

  autoComplete!: google.maps.places.Autocomplete | undefined;
  showSuggestions: boolean = false;
  suggestions: any[] = [];

  constructor(private ngZone: NgZone) {}

  saddMarkerByClick(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) console.log(event.latLng.toJSON());
    this.landmarkLocation.lat = event.latLng?.toJSON().lat;
    this.landmarkLocation.lng = event.latLng?.toJSON().lng;
  }

  addMarkerByClick(event: google.maps.MapMouseEvent) {
    console.log('===========>')
    if (event.latLng !== null) {
      this.ngZone.run(() => {
        const lat = event.latLng!.lat();
        const lng = event.latLng!.lng();

        /*const marker = new Location({
          position: { lat, lng },
          status: true,
        });*/

        this.markers.push({
          position: {lat: lat, lng: lng},
          status: ''
        });
        //this.markerClusterer.addMarker(marker);
        /*this.markerPosition = {
          lat: event.latLng!.lat(),
          lng: event.latLng!.lng()
        };
        this.center = this.markerPosition;*/
      });
    }
  }

  addDraggableMarker() {
    this.markerPosition = {
      position: {lat: 25.285446181651334, lng: 51.53103555243401},
      status: ''
    };
  }

  addCustomerMarker(status: 'stopped' | 'idle' | 'active') {
    this.customMarkerPosition = {
      lat: 25.285446181651334,
      lng: 51.53103555243401,
    };
    this.customMarkers.push({
      position: {
        lat: this.customMarkerPosition.lat,
        lng: this.customMarkerPosition.lng,
      },
      status: status
    });
  }

  getIcon(status: string): google.maps.Icon {
    let iconUrl: string;

    switch (status) {
      case 'active':
        iconUrl = './assets/icons/active.svg';
        break;
      case 'idle':
        iconUrl = './assets/icons/idle.svg';
        break;
      case 'stopped':
        iconUrl = './assets/icons/stopped.svg';
        break;
      default:
        iconUrl = '';
        break;
    }

    return {
      url: iconUrl,
    };
  }

  carIcon(): google.maps.Icon {
    return {
      url: './assets/icons/car.svg'
    };
  }

  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;
  selectedFleet?: Location;

  openInfoWindow(location: Location) {
    this.selectedFleet = location;
    if (this.infoWindow) {
      this.infoWindow.open();
    }
  }

  ngAfterViewInit(): void {
    this.autoComplete = new google.maps.places.Autocomplete(
      this.LocationInputField.nativeElement
    );
    this.autoComplete.addListener('place_changed', () => {
      const place = this.autoComplete?.getPlace();
      if (place?.geometry?.location) {
        this.ngZone.run(() => {
          const lat = place?.geometry?.location?.lat();
          const lng = place?.geometry?.location?.lng();
          const address = place.formatted_address || '';
          const name = place.name || '';
          this.addMarkerFromSearch(lat!, lng!, address!, name!);

          /*this.addMarkerFromSearch(
            place?.geometry?.location?.toJSON().lat!,
            place?.geometry?.location?.toJSON().lng!
          );
          this.markerPosition = {
              lat: place?.geometry?.location?.toJSON().lat!,
              lng: place?.geometry?.location?.toJSON().lng!
            };
            this.center = this.markerPosition;*/
        });
      }
      console.log(
        place?.geometry?.location?.toJSON().lat,
        place?.geometry?.location?.toJSON().lng
      );
    });
  }

  addMarkerFromSearch(lat: number, lng: number, address: string, name: string) {

    /*const marker = new Location({
      position: { lat, lng },
      draggable: true,
    });*/
    this.markers.push({
      position: {lat: lat, lng: lng},
      status: ''
    });
  }

  selectSuggestion(suggestion: any) {
    console.log('Selected suggestion:', suggestion);
    const placeId = suggestion.place_id;

    console.log('============>', suggestion?.geometry?.Location?.toJSON().lat);
  }

  move(event: any, marker: Location) {
    console.log(event.latLng?.toJSON().lat, event.latLng?.toJSON().lng);
    marker.position.lat = event.latLng?.toJSON().lat;
    marker.position.lng = event.latLng?.toJSON().lng;

    console.log(marker);
  }
}
