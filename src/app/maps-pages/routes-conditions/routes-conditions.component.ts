import { Component } from '@angular/core';

@Component({
  selector: 'app-routes-conditions',
  templateUrl: './routes-conditions.component.html',
  styleUrls: ['./routes-conditions.component.scss']
})
export class RoutesConditionsComponent {
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

  options: google.maps.MapOptions = {
    center: this.center,
    zoom: this.zoom,
    styles: this.darkModeStyles,
    draggableCursor: null,
  };
}
