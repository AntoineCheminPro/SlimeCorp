import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeadComponent } from './head/head.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { MapComponent } from './footer/map/map.component';
import { ServicesComponent } from './services/services.component';
import { ProjetsComponent } from './projets/projets.component';
import { ClientsComponent } from './clients/clients.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    MapComponent,
    ServicesComponent,
    ProjetsComponent,
    ClientsComponent,
    HomePageComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
