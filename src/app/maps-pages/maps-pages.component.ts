import { Component } from '@angular/core';

@Component({
  selector: 'app-maps-pages',
  templateUrl: './maps-pages.component.html',
  styleUrls: ['./maps-pages.component.scss']
})
export class MapsPagesComponent {
  cards: any[] = [
    {
      label: 'Create Marker',
      link: 'create-marker',
      icon: '',
      description: ''
    },
    {
      label: 'Render Vehicles',
      link: 'render-vehicles',
      icon: '',
      description: 'Render vehicles or markers of any items in the map'
    },
    {
      label: 'Render Routes',
      link: 'render-routes',
      icon: '',
      description: ''
    },
    {
      label: 'Routes with Conditions',
      link: 'routes-conditions',
      icon: '',
      description: ''
    },
    {
      label: 'Tracking',
      link: 'tracking',
      icon: '',
      description: ''
    },
    {
      label: 'Hover list Item',
      link: 'hover',
      icon: '',
      description: ''
    },
    {
      label: 'Routes Options (best, shortest,..)',
      link: 'routes-options',
      icon: '',
      description: ''
    },
    {
      label: 'Create Routes',
      link: 'create-route',
      icon: '',
      description: ''
    },
    {
      label: 'Create Geofence',
      link: 'create-geofence',
      icon: '',
      description: ''
    },
    {
      label: 'Create Landmark',
      link: 'create-landmark',
      icon: '',
      description: ''
    },
    {
      label: 'Create Site',
      link: 'create-site',
      icon: '',
      description: ''
    }
  ]
}
