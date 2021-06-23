import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CovidInfoComponent } from './covid-info/covid-info.component';
import { MapComponent } from './map/map.component';
import { TableComponent } from './table/table.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

const routes: Routes = [
  {path:'', component:WelcomePageComponent},
  {path:'map', component:MapComponent},
  {path:"covidInfo/:code", component:CovidInfoComponent},
  {path:"covidTable",component:TableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
