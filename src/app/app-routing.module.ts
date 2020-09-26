import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EscribeDataComponent } from './components/escribe-data/escribe-data.component';
import { EscribeDrupalComponent } from './components/escribe-drupal/escribe-drupal.component';
import { HomeComponent } from './components/home/home.component';
import { LeeDataComponent } from './components/lee-data/lee-data.component';
import { LeeDrupalComponent } from './components/lee-drupal/lee-drupal.component';
import { LoginComponent } from './components/login/login.component';
import { Login2Component } from './components/login2/login2.component';


const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"login2",component:Login2Component},
  {path:"leedata",component:LeeDataComponent},
  {path:"escribedata",component:EscribeDataComponent},
  {path:"leedrupal",component:LeeDrupalComponent},
  {path:"escribedrupal",component:EscribeDrupalComponent},
  {path:"**",pathMatch:"full",redirectTo:"/home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
