import { Component, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Location } from './fleets/fleets.component';
import { MapInfoWindow } from '@angular/google-maps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @Input() fleets: Location[] = [];

  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;
  selectedFleet?: Location;

  collapsed: boolean = false;
  darkModeStyles: google.maps.MapTypeStyle[] = [
    { elementType: 'geometry', stylers: [{ color: '#1D1E23' }] },
    { elementType: 'labels.icon', stylers: [{ visibility: 'off' }] },
    { elementType: 'labels.text.fill', stylers: [{ color: '#757575' }] },
    { elementType: 'labels.text.stroke', stylers: [{ color: '#212121' }] },
    {
      featureType: 'administrative',
      elementType: 'geometry',
      stylers: [{ color: '#757575' }]
    },
    {
      featureType: 'administrative.country',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#9e9e9e' }]
    },
    {
      featureType: 'administrative.land_parcel',
      stylers: [{ visibility: 'off' }]
    },
    {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#757575' }]
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#757575' }]
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [{ color: '#181818' }]
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#616161' }]
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.stroke',
      stylers: [{ color: '#1b1b1b' }]
    },
    {
      featureType: 'road',
      elementType: 'geometry.fill',
      stylers: [{ color: '#2A3444' }]
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#757575' }]
    },
    {
      featureType: 'road.arterial',
      elementType: 'geometry',
      stylers: [{ color: '#2B3345' }]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [{ color: '#525867' }]
    },
    {
      featureType: 'road.highway.controlled_access',
      elementType: 'geometry',
      stylers: [{ color: '#7F8696' }]
    },
    {
      featureType: 'road.local',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#616161' }]
    },
    {
      featureType: 'transit',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#757575' }]
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{ color: '#83A6C9' }]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#3d3d3d' }]
    }
  ];

  center: google.maps.LatLngLiteral = { lat: 25.294735740074593, lng: 51.48077412731984 };
  zoom = 13.7;
  display?: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    center: this.center,
      zoom: this.zoom,
    styles: this.darkModeStyles,
    
  };



  circleCenter: google.maps.LatLngLiteral = { lat: 25.294735740074593, lng: 51.48077412731984 };
  circleOptions: google.maps.CircleOptions = {
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    clickable: true,
    editable: true,
    radius: 500,
    draggable: true
  };



  constructor() {}

  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = event.latLng.toJSON();
  }

  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }

  getIcon(status: string, rotation: number): google.maps.Icon {
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

    if (rotation >= 0 && rotation < 90) {
      iconUrl = './assets/icons/idle.svg';
    } else if (rotation >= 90 && rotation < 180) {
      iconUrl = './assets/icons/stopped.svg';
    } else if (rotation >= 180 && rotation < 270) {
      iconUrl = './assets/icons/idle.svg';
    } else if (rotation >= 270 && rotation < 360) {
      iconUrl = './assets/icons/stopped.svg';
    }

    return {
      url: iconUrl,
      //scaledSize: new google.maps.Size(40, 40), // Adjust size as needed
    };
  }


  onLocationsChanged(locations: Location[]) {
    this.fleets = locations;
  }
  openInfoWindow(location: Location) {
    this.selectedFleet = location;
    if (this.infoWindow) {
      this.infoWindow.open();
    }
    
  }

  ngOnInit(): void {
  }

  collapseCanvas() {
    if(!this.collapsed) {
      document.querySelector('.canvas-container')?.classList.add('hide-canvas');
    } else {
      document.querySelector('.canvas-container')?.classList.remove('hide-canvas');
    }
    this.collapsed = !this.collapsed
  }
}
