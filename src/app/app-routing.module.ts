import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProjetsComponent } from './projets/projets.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  { path: "", component : HomePageComponent},
  { path: "clients", component : ClientsComponent},
  { path: "services", component : ServicesComponent},
  { path: "projets", component : ProjetsComponent},
  {path:"not-found", component:FourOhFourComponent },
  { path: "**", redirectTo:"not-found"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
