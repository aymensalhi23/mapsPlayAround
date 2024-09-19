import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-render-routes',
  templateUrl: './render-routes.component.html',
  styleUrls: ['./render-routes.component.scss'],
})
export class RenderRoutesComponent implements OnInit, AfterViewInit {
  //@ViewChild('map', {static: true}) mapElementRef!: ElementRef;
  googleMaps: any;

  map!: google.maps.Map;

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

  directionsService!: google.maps.DirectionsService;
  directionsRenderer!: google.maps.DirectionsRenderer;

  directionsDisplay: any;


  ngOnInit(): void {
    this.initMap()
  }

  async initMap() {
    const { Map } = (await google.maps.importLibrary(
      'maps'
    )) as google.maps.MapsLibrary;

    this.map = new Map(document.getElementById('mainmap') as HTMLElement, {
      center: this.center,
      zoom: this.zoom
    });

    this.directionsService = new google.maps.DirectionsService();
    this.directionsRenderer = new google.maps.DirectionsRenderer();

    this.directionsRenderer.setMap(this.map);
  }

  ngAfterViewInit(): void {}

  origin!: google.maps.LatLng;
  destination!: google.maps.LatLng;
  drawMarkers() {
    this.origin = new google.maps.LatLng(25.28262279847509, 51.509843724655646);
    this.destination = new google.maps.LatLng(
      25.28386323696121, 51.511248712770985
    );
  }

  drawRoute() {
    const request: google.maps.DirectionsRequest = {
      origin: this.origin,
      destination: this.destination,
      travelMode: google.maps.TravelMode.WALKING,
      provideRouteAlternatives: true,
    }

    this.directionsService.route(request, (result, status) => {
      if(status === google.maps.DirectionsStatus.OK && result) {
        this.displayRoutes(result);
        /*this.directionsRenderer.setDirections(result)
        this.directionsRenderer.setOptions({
          polylineOptions: {
            strokeColor: 'blue',
            strokeOpacity: 1,
            strokeWeight: 8
          }
        })*/
      } else {
        console.error('Direction Request failed due to '+status);
      }
    })
  }

  displayRoutes(result: google.maps.DirectionsResult) {
    // Clear existing routes
    //this.directionsRenderer.setDirections({ routes: [] });

    result.routes.forEach((route, index) => {
      const routeRenderer = new google.maps.DirectionsRenderer({
        map: this.map,
        directions: result,
        routeIndex: index,
        suppressMarkers: false, // Show markers for each route
        polylineOptions: {
          strokeColor: index === 0 ? '#FF0000' : '#00FF00', // Main route in red, alternatives in green
          strokeOpacity: 1,
          strokeWeight: 5,
        },
      });
    });
  }


  /*@ViewChild('GoogleMap') map!: any;

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

  directionsService!: google.maps.DirectionsService;
  directionsRenderer!: google.maps.DirectionsRenderer;

  ngOnInit(): void {
    //this.directionsRenderer.setMap(this.map.googleMap!);
  }

  ngAfterViewInit(): void {
    this.directionsService = new google.maps.DirectionsService();
    this.directionsRenderer = new google.maps.DirectionsRenderer();

    this.directionsRenderer.setMap(this.map);
  }

  origin!: google.maps.LatLng;
  destination!: google.maps.LatLng;
  drawMarkers() {
    this.origin = new google.maps.LatLng(25.28473562535588, 51.523811818810124);
    this.destination = new google.maps.LatLng(
      25.276408854429373,
      51.450949354271565
    );
  }

  drawRoute() {
    const request: google.maps.DirectionsRequest = {
      origin: this.origin,
      destination: this.destination,
      travelMode: google.maps.TravelMode.DRIVING,
    };

    this.directionsService.route(request, (result, status) => {
      console.log(result);
      this.directionsRenderer.setDirections(result);
      if (status === google.maps.DirectionsStatus.OK && result) {
        this.directionsRenderer.setDirections(result);
      } else {
        console.error('Error fetching directions', status);
      }
    });
  }*/
}
