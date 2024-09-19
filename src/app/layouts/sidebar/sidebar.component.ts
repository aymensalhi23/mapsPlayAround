import { Component } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  sidebarsize: number = 1;

  menu: any[] = [
    {
      label: 'Dashboard',
      link: 'dashboard',
      icon: 'dashboard.svg',
      iconActive: '',
      accordion: false,
    },
    {
      label: 'Map',
      link: 'maps',
      icon: 'map.svg',
      iconActive: '',
      accordion: false,
    },
    {
      label: 'Report',
      link: 'report',
      icon: 'report.svg',
      iconActive: '',
      accordion: false,
    },

    {
      label: 'Assets',
      link: 'assets',
      icon: 'assets.svg',
      iconActive: '',
      accordion: true,

      items: [
        {
          label: 'Departments',
          link: 'dashboard',
          icon: 'dashboard.svg',
          iconActive: '',
          accordion: false,
        },
        {
          label: 'Vehicles',
          link: 'report',
          icon: 'dashboard.svg',
          iconActive: '',
          accordion: true,
          items: [
            {
              label: 'Maintenance',
              link: 'dashboard',
              icon: 'dashboard.svg',
              iconActive: '',
            },
          ],
        },
        
        {
          label: 'Drivers',
          link: 'departments',
          icon: 'dashboard.svg',
          iconActive: '',
          accordion: false,
        },
        {
          label: 'Devices',
          link: 'departments',
          icon: 'dashboard.svg',
          iconActive: '',
          accordion: false,
        },
        {
          label: 'Sim Cards',
          link: 'departments',
          icon: 'dashboard.svg',
          iconActive: '',
          accordion: false,
        },
        {
          label: 'Invoices',
          link: 'departments',
          icon: 'dashboard.svg',
          iconActive: '',
          accordion: false,
        },
      ],
    },
    {
      label: 'Organization',
      link: 'organization',
      icon: 'cog.svg',
      iconActive: '',
      accordion: true,

      items: [
        {
          label: 'Brand',
          link: 'departments',
          icon: 'dashboard.svg',
          iconActive: '',
          accordion: false,
        },
        {
          label: 'Users',
          link: 'departments',
          icon: 'dashboard.svg',
          iconActive: '',
          accordion: false,
        },
        {
          label: 'Permissions',
          link: 'departments',
          icon: 'dashboard.svg',
          iconActive: '',
          accordion: false,
        },
        {
          label: 'Common Shifts',
          link: 'departments',
          icon: 'dashboard.svg',
          iconActive: '',
          accordion: false,
        },
        {
          label: 'Common Maintenance',
          link: 'departments',
          icon: 'dashboard.svg',
          iconActive: '',
          accordion: false,
        },
        {
          label: 'Common Maintenance',
          link: 'departments',
          icon: 'dashboard.svg',
          iconActive: '',
          accordion: false,
        }
      ],
    },
  ];

  mapsMenu: any[] = [
    {
      
    }
  ]

  changeSidebarSize() {
    if (this.sidebarsize < 2) {
      this.sidebarsize++;
    } else if (this.sidebarsize === 2) {
      this.sidebarsize = 0;
    }
  }
}
