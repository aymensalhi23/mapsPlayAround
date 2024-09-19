import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { PrimengModule } from './shared/modules/primeng.module';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { MapsLayoutComponent } from './layouts/maps-layout/maps-layout.component';

import {OverlayPanelModule} from 'primeng/overlaypanel';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    MainLayoutComponent,
    SidebarComponent,
    MapsLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimengModule,
    OverlayPanelModule,
    BrowserAnimationsModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
