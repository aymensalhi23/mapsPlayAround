import { Component, OnInit } from '@angular/core';

export interface Location {
  position: { lat: number; lng: number };
  status: 'stopped' | 'idle' | 'active' | '';
}

enum Status {
  Stopped = 'stopped',
  Idle = 'idle',
  Active = 'active',
  None = '' // This represents the empty status
}

@Component({
  selector: 'app-render-vehicles',
  templateUrl: './render-vehicles.component.html',
  styleUrls: ['./render-vehicles.component.scss']
})
export class RenderVehiclesComponent implements OnInit {
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

  markers: Location[] = [
    {
      position: {lat: 25.294735740074593, lng: 51.48077412731984},
      status: 'idle'
    }
  ];

  options: google.maps.MapOptions = {
    center: this.center,
    zoom: this.zoom,
    styles: this.darkModeStyles,
    draggableCursor: null,
  };

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

  ngOnInit(): void {
    let lat = 25.294735740074593;
    let lng = 51.48077412731984;
    
    const statuses = [Status.Stopped, Status.Idle, Status.Active, Status.None];
    for (let index = 0; index < 20; index++) {
      let status = Math.floor(Math.random() * 4);
      lat -= Math.random() * 0.1;
      lng -= Math.random() * 0.1;

      this.markers.push({
        position: {lat: lat, lng: lng},
        status: statuses[status]
      })
    }
  }
}
